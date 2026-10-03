// Adapted from AstroPaper's defineCollection + glob layout. See THIRD_PARTY.md.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { resourceSchema, noteSchema, trackSchema, episodeSchema } from './lib/schemas';

export const collections = {
  resources: defineCollection({ loader: glob({ pattern: '**/[^_]*.md', base: './src/content/resources' }), schema: resourceSchema }),
  notes: defineCollection({ loader: glob({ pattern: '**/[^_]*.md', base: './src/content/notes' }), schema: noteSchema }),
  tracks: defineCollection({ loader: glob({ pattern: '**/[^_]*.md', base: './src/content/tracks' }), schema: trackSchema }),
  episodes: defineCollection({ loader: glob({ pattern: '**/[^_]*.md', base: './src/content/episodes' }), schema: episodeSchema }),
};
