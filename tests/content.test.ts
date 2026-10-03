import { test } from 'node:test';
import assert from 'node:assert/strict';
import { noteSchema, resourceSchema, episodeSchema, trackSchema } from '../src/lib/schemas.ts';
import { isPublished } from '../src/lib/publication.ts';
import { validateContent, type Entry } from '../src/lib/validate-content.ts';

const now = Date.parse('2026-10-03T12:00:00Z');
const common = { slug: 'example', title: 'Example', summary: 'A substantive summary', topic: 'rag', tags: [], status: 'published', publishedAt: '2026-10-02', updatedAt: '2026-10-03' };
const note = { ...common, kind: 'concept', lastReviewedAt: '2026-10-03', sources: ['source'], prerequisites: [], related: [] };
const resource = { ...common, slug: 'source', type: 'paper', sourceUrl: 'https://example.org/paper', author: 'Researcher', sourcePublishedAt: null, accessedAt: '2026-10-03', version: 'v1', reuseRights: 'Link only' };
const body = 'This original text explains the example and its limits. '.repeat(4);
function entry(collection: Entry['collection'], data: unknown, file = `${collection}/example.md`): Entry {
  const schema = collection === 'notes' ? noteSchema : resourceSchema;
  return { collection, file, data: schema.parse(data), body };
}

test('draft, review, missing dates and future publication are never public, including authoring mode', () => {
  for (const status of ['draft', 'review']) assert.equal(isPublished({ status, publishedAt: '2026-01-01' }, now), false);
  assert.equal(isPublished({ status: 'published', publishedAt: null }, now), false);
  assert.equal(isPublished({ status: 'published', publishedAt: '2026-10-04' }, now), false);
  assert.equal(isPublished({ status: 'published', publishedAt: '2026-10-03' }, now), true);
});

test('schemas reject invalid dates, metadata, URLs and incomplete publication', () => {
  for (const override of [{ sources: [] }, { lastReviewedAt: null }, { slug: '中文 slug' }, { updatedAt: '2026-02-30' }, { updatedAt: '2026-10-01' }, { topic: 'unknown' }]) {
    assert.equal(noteSchema.safeParse({ ...note, ...override }).success, false);
  }
  assert.equal(resourceSchema.safeParse({ ...resource, sourceUrl: 'javascript:alert(1)' }).success, false);
  assert.equal(resourceSchema.safeParse({ ...resource, accessedAt: null }).success, false);
  assert.equal(trackSchema.safeParse({ ...common, steps: [] }).success, false);
  assert.equal(episodeSchema.safeParse({ ...common, noteRefs: [], hostEpisodeUrl: null, audioUrl: null, guid: null, durationSeconds: null }).success, false);
  assert.equal(noteSchema.safeParse({ ...note, status: 'draft', publishedAt: null, lastReviewedAt: null, sources: [] }).success, true);
});

test('duplicate slugs and broken references report the responsible file', () => {
  const first = entry('notes', note, 'notes/first.md');
  const second = entry('notes', note, 'notes/second.md');
  const errors = validateContent([first, second], now).join('\n');
  assert.match(errors, /notes\/second.md: duplicate slug/);
  assert.match(errors, /notes\/first.md: missing reference resources\/source/);
});

test('a public note cannot point to draft, review or future content', () => {
  for (const override of [{ status: 'draft' }, { status: 'review' }, { publishedAt: '2026-10-04', updatedAt: '2026-10-04' }]) {
    const errors = validateContent([entry('notes', note), entry('resources', { ...resource, ...override })], now);
    assert.match(errors.join('\n'), /references unpublished resources\/source/);
  }
  assert.deepEqual(validateContent([entry('notes', note), entry('resources', resource)], now), []);
});

test('prerequisite cycles, placeholders and incomplete labs are rejected', () => {
  const a = entry('notes', { ...note, slug: 'a', prerequisites: ['b'] });
  const b = entry('notes', { ...note, slug: 'b', prerequisites: ['a'] });
  assert.match(validateContent([a, b, entry('resources', resource)], now).join('\n'), /prerequisite cycle/);
  const lab = entry('notes', { ...note, kind: 'lab' });
  lab.body += '\nTODO';
  const errors = validateContent([lab, entry('resources', resource)], now).join('\n');
  assert.match(errors, /placeholder/);
  assert.match(errors, /lab needs a 环境 section/);
});
