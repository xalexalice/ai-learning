import { getCollection, type CollectionKey } from 'astro:content';
import { isPublished, byUpdated } from './publication';

export async function published<C extends CollectionKey>(collection: C) {
  return (await getCollection(collection)).filter(entry => isPublished(entry.data)).sort(byUpdated);
}
