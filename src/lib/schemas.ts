import { z } from 'zod';

export const topicSchema = z.enum(['foundations', 'llm', 'prompting', 'rag', 'agents', 'evaluation', 'engineering', 'multimodal']);
const slug = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Use a stable lowercase ASCII slug');
const text = z.string().trim().min(1);
const date = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Use YYYY-MM-DD').refine(value => {
  const parsed = new Date(value);
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
}, 'Invalid calendar date');
const url = z.url().refine(value => /^https?:\/\//.test(value), 'Use an http(s) URL');
const common = {
  slug, title: text, summary: text, topic: topicSchema,
  tags: z.array(text).default([]),
  status: z.enum(['draft', 'review', 'published']),
  publishedAt: date.nullable(), updatedAt: date,
};

function dates(data: { status: string; publishedAt: string | null; updatedAt: string }, ctx: z.RefinementCtx) {
  if (data.status === 'published' && !data.publishedAt) {
    ctx.addIssue({ code: 'custom', path: ['publishedAt'], message: 'Published content requires a date' });
  }
  if (data.publishedAt && data.updatedAt < data.publishedAt) {
    ctx.addIssue({ code: 'custom', path: ['updatedAt'], message: 'updatedAt must be on or after publishedAt' });
  }
}

export const resourceSchema = z.object({
  ...common,
  type: z.enum(['paper', 'doc', 'course', 'article', 'video', 'podcast', 'repo']),
  sourceUrl: url.nullable(), author: text.nullable(),
  sourcePublishedAt: date.nullable(), accessedAt: date.nullable(),
  version: text, reuseRights: text,
}).strict().superRefine((data, ctx) => {
  dates(data, ctx);
  if (data.status === 'published') {
    for (const key of ['sourceUrl', 'author', 'accessedAt'] as const) {
      if (!data[key]) ctx.addIssue({ code: 'custom', path: [key], message: `Published resources require ${key}` });
    }
  }
});

export const noteSchema = z.object({
  ...common, kind: z.enum(['concept', 'lab', 'recap']),
  lastReviewedAt: date.nullable(), sources: z.array(slug),
  prerequisites: z.array(slug), related: z.array(slug),
}).strict().superRefine((data, ctx) => {
  dates(data, ctx);
  if (data.status === 'published' && (!data.lastReviewedAt || data.sources.length === 0)) {
    ctx.addIssue({ code: 'custom', message: 'Published notes require sources and lastReviewedAt' });
  }
  if (data.lastReviewedAt && data.lastReviewedAt > data.updatedAt) {
    ctx.addIssue({ code: 'custom', path: ['lastReviewedAt'], message: 'Review date must not follow updatedAt' });
  }
});

export const trackSchema = z.object({
  ...common, steps: z.array(z.object({ title: text, note: slug, task: text }).strict()),
}).strict().superRefine((data, ctx) => {
  dates(data, ctx);
  if (data.status === 'published' && data.steps.length === 0) ctx.addIssue({ code: 'custom', path: ['steps'], message: 'Published tracks require at least one step' });
});

export const episodeSchema = z.object({
  ...common, noteRefs: z.array(slug), hostEpisodeUrl: url.nullable(), audioUrl: url.nullable(),
  guid: text.nullable(), durationSeconds: z.number().int().positive().nullable(),
}).strict().superRefine((data, ctx) => {
  dates(data, ctx);
  if (data.status === 'published') {
    for (const key of ['hostEpisodeUrl', 'audioUrl', 'guid', 'durationSeconds'] as const) {
      if (!data[key]) ctx.addIssue({ code: 'custom', path: [key], message: `Published episodes require ${key}` });
    }
    if (!data.noteRefs.length) ctx.addIssue({ code: 'custom', path: ['noteRefs'], message: 'Published episodes require linked notes' });
  }
});

export const schemas = { resources: resourceSchema, notes: noteSchema, tracks: trackSchema, episodes: episodeSchema };
export type CollectionName = keyof typeof schemas;
export type ContentData = z.infer<typeof schemas[CollectionName]>;
