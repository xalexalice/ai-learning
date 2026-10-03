// AstroPaper postFilter/getSortedPosts pattern, with a stricter publication policy.
export function isPublished(data: { status: string; publishedAt: string | null }, now = Date.now()) {
  return data.status === 'published' && data.publishedAt !== null && new Date(data.publishedAt).getTime() <= now;
}

export function byUpdated<T extends { data: { updatedAt: string; slug: string } }>(a: T, b: T) {
  return b.data.updatedAt.localeCompare(a.data.updatedAt) || a.data.slug.localeCompare(b.data.slug);
}
