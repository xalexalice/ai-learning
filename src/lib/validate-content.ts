import { isPublished } from './publication.ts';
import type { CollectionName, ContentData } from './schemas.ts';

export type Entry = { collection: CollectionName; file: string; data: ContentData; body: string };

export function validateContent(entries: Entry[], now = Date.now()): string[] {
  const errors: string[] = [];
  const index = new Map<string, Entry>();
  for (const entry of entries) {
    const key = `${entry.collection}/${entry.data.slug}`;
    if (index.has(key)) errors.push(`${entry.file}: duplicate slug ${key} (also ${index.get(key)!.file})`);
    index.set(key, entry);
  }
  function checkRef(entry: Entry, collection: CollectionName, slug: string) {
    const target = index.get(`${collection}/${slug}`);
    if (!target) errors.push(`${entry.file}: missing reference ${collection}/${slug}`);
    else if (isPublished(entry.data, now) && !isPublished(target.data, now)) {
      errors.push(`${entry.file}: public content references unpublished ${collection}/${slug}`);
    }
  }
  for (const entry of entries) {
    const d = entry.data;
    if ('sources' in d) {
      d.sources.forEach(slug => checkRef(entry, 'resources', slug));
      [...d.prerequisites, ...d.related].forEach(slug => checkRef(entry, 'notes', slug));
      if (d.prerequisites.includes(d.slug) || d.related.includes(d.slug)) errors.push(`${entry.file}: a note cannot reference itself`);
    }
    if ('steps' in d) d.steps.forEach(step => checkRef(entry, 'notes', step.note));
    if ('noteRefs' in d) d.noteRefs.forEach(slug => checkRef(entry, 'notes', slug));
    if (isPublished(d, now)) {
      if (/\b(TODO|TBD|replace-with|YOUR-USERNAME)\b|待补充|填写(?:本期|学习路径名称|标题|摘要)/.test(d.title + d.summary + entry.body)) {
        errors.push(`${entry.file}: placeholder text in public content`);
      }
      if (entry.body.trim().length < 80) errors.push(`${entry.file}: public content needs a substantive body`);
      for (const key of ['updatedAt', 'lastReviewedAt', 'accessedAt'] as const) {
        if (key in d) {
          const value = d[key as keyof typeof d];
          if (typeof value === 'string' && new Date(value).getTime() > now) errors.push(`${entry.file}: ${key} is in the future`);
        }
      }
      if ('kind' in d && d.kind === 'lab') {
        for (const heading of ['环境', '复现步骤', '实际结果', '失败']) {
          if (!new RegExp(`^## .*${heading}`, 'm').test(entry.body)) errors.push(`${entry.file}: lab needs a ${heading} section`);
        }
      }
    }
  }
  // A prerequisite cycle makes a path impossible to start.
  const visited = new Set<string>();
  const active = new Set<string>();
  function visit(key: string) {
    if (active.has(key)) { errors.push(`${index.get(key)?.file}: prerequisite cycle at ${key}`); return; }
    if (visited.has(key)) return;
    active.add(key);
    const entry = index.get(key);
    if (entry && 'prerequisites' in entry.data) entry.data.prerequisites.forEach(slug => visit(`notes/${slug}`));
    active.delete(key);
    visited.add(key);
  }
  entries.filter(entry => entry.collection === 'notes').forEach(entry => visit(`notes/${entry.data.slug}`));
  return errors;
}
