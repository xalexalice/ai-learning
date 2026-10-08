import { readFile, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';

const fixture = JSON.parse(await readFile(new URL('../labs/access-cache/cases.json', import.meta.url), 'utf8'));
const normalize = value => value.normalize('NFKC').toLowerCase();
const allowed = (doc, user) => doc.tenant === user.tenant && (doc.readers.includes('*') || doc.readers.includes(user.id));
const snapshot = doc => ({ id: doc.id, text: doc.text });
const equal = (actual, expected) => JSON.stringify(actual) === JSON.stringify(expected);

function createRetriever(scoped) {
  const state = { documents: structuredClone(fixture.documents), corpusRevision: 1, accessRevision: 1 };
  const cache = new Map();
  function query(user, text) {
    const normalized = normalize(text);
    const key = scoped
      ? JSON.stringify([user.tenant, user.id, state.accessRevision, state.corpusRevision, normalized])
      : normalized;
    const hit = cache.has(key);
    if (!hit) cache.set(key, state.documents.filter(doc => allowed(doc, user) && normalize(doc.text).includes(normalized)).map(snapshot));
    let documents = cache.get(key);
    if (scoped) documents = documents.filter(item => {
      const current = state.documents.find(doc => doc.id === item.id);
      return current && allowed(current, user);
    });
    return { documents, cacheHit: hit };
  }
  function mutate(event) {
    if (!event) return;
    const doc = state.documents.find(item => item.id === event.id);
    if (event.type === 'update') {
      doc.text = event.text;
      state.corpusRevision++;
    } else if (event.type === 'revoke') {
      doc.readers = [];
      state.accessRevision++;
    } else if (event.type === 'delete') {
      state.documents = state.documents.filter(item => item.id !== event.id);
      state.corpusRevision++;
    }
  }
  return { state, query, mutate };
}

const baseline = createRetriever(false);
const scoped = createRetriever(true);
const rows = fixture.cases.map(test => {
  baseline.mutate(test.mutation);
  scoped.mutate(test.mutation);
  const user = fixture.users[test.user];
  const before = baseline.query(user, test.query);
  const after = scoped.query(user, test.query);
  return { id: test.id, user: test.user, tenant: user.tenant, query: test.query, expected: test.expected,
    baseline: before, scoped: after, baselinePass: equal(before.documents, test.expected), scopedPass: equal(after.documents, test.expected) };
});

// A separate failure case proves that the version key relies on correct mutation bookkeeping.
const missedRevision = createRetriever(true);
missedRevision.query(fixture.users.alice, '预算');
missedRevision.state.documents.find(doc => doc.id === 'private-a').text = '预算 alpha 自制计划 V2';
const stale = missedRevision.query(fixture.users.alice, '预算');
const boundary = { scenario: 'content changed without advancing corpusRevision',
  expected: [{ id: 'private-a', text: '预算 alpha 自制计划 V2' }], actual: stale.documents,
  cacheHit: stale.cacheHit, passes: equal(stale.documents, [{ id: 'private-a', text: '预算 alpha 自制计划 V2' }]) };
const results = { dataset: '3 self-written documents, 3 fixture identities, 10 ordered queries; substring retrieval, no model/API',
  rows, baselinePasses: rows.filter(row => row.baselinePass).length, scopedPasses: rows.filter(row => row.scopedPass).length,
  total: rows.length, boundary };

assert.equal(results.baselinePasses, 4);
assert.equal(results.scopedPasses, results.total);
assert.equal(boundary.passes, false);
assert.equal(rows.find(row => row.id === 'warm-public').scoped.cacheHit, true);
if (process.argv.includes('--write')) {
  await writeFile(new URL('../labs/access-cache/results.json', import.meta.url), JSON.stringify(results, null, 2) + '\n');
} else if (process.argv.includes('--check')) {
  const recorded = JSON.parse(await readFile(new URL('../labs/access-cache/results.json', import.meta.url), 'utf8'));
  assert.deepEqual(results, recorded, 'Access/cache lab output differs from the recorded code/data');
  console.log('Access/cache lab matches recorded output: query-only 4/10; scope/version 10/10; missed revision remains stale.');
} else console.log(JSON.stringify(results, null, 2));
