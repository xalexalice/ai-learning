import { readFile, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';

const fixture = JSON.parse(await readFile(new URL('../labs/retrieval/cases.json', import.meta.url), 'utf8'));
const normalize = value => value.normalize('NFKC').toLowerCase();
const rows = fixture.queries.map(({ query, expected }) => {
  const exact = fixture.documents.find(doc => doc.text.includes(query))?.id ?? null;
  const normalized = fixture.documents.find(doc => normalize(doc.text).includes(normalize(query)))?.id ?? null;
  return { query, expected, exact, normalized };
});
const results = {
  dataset: '3 documents / 5 fixed queries; top-1 substring matching',
  rows,
  exactHits: rows.filter(row => row.exact === row.expected).length,
  normalizedHits: rows.filter(row => row.normalized === row.expected).length,
  total: rows.length,
};
if (process.argv.includes('--write')) {
  await writeFile(new URL('../labs/retrieval/results.json', import.meta.url), JSON.stringify(results, null, 2) + '\n');
} else if (process.argv.includes('--check')) {
  const recorded = JSON.parse(await readFile(new URL('../labs/retrieval/results.json', import.meta.url), 'utf8'));
  assert.deepEqual(results, recorded, 'Recorded lab output differs from the current code/data');
  console.log('Lab reproduction matches recorded output.');
} else console.log(JSON.stringify(results, null, 2));
