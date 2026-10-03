// Adapted from AstroPaper src/utils/withBase.ts (MIT).
const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
const baseRoot = base === '' ? '/' : `${base}/`;

export function withBase(path = '') {
  return baseRoot + path.replace(/^\/+/, '');
}

export function stripBase(pathname: string) {
  if (base && pathname === base) return '/';
  return base && pathname.startsWith(baseRoot) ? pathname.slice(base.length) : pathname;
}

export function entryPath(collection: string, slug: string) {
  return withBase(`${collection}/${slug}/`);
}
