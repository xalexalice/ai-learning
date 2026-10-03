import { readdir, readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';

const base = (process.env.BASE_PATH ?? '/ai-learning').replace(/\/+$/, '') + '/';
const site = new URL(process.env.SITE_URL || 'http://localhost:4321');
async function files(dir) {
  const items = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(items.map(item => item.isDirectory() ? files(join(dir, item.name)) : [join(dir, item.name)]))).flat();
}
const all = await files('dist');
const errors = [];
async function check(href, source) {
  if (/^(#|data:|mailto:|tel:)/.test(href)) return;
  const relative = '/' + source.replace(/^dist\//, '').replace(/index\.html$/, '');
  const url = new URL(href.replaceAll('&amp;', '&'), site.origin + base + relative.slice(1));
  if (url.origin !== site.origin) return;
  if (!url.pathname.startsWith(base)) { errors.push(`${source}: missing base in ${href}`); return; }
  const path = decodeURIComponent(url.pathname.slice(base.length));
  const target = join('dist', path || 'index.html');
  try {
    const info = await stat(target);
    if (info.isDirectory()) await stat(join(target, 'index.html'));
  } catch { errors.push(`${source}: missing target ${href}`); }
}
for (const file of all.filter(file => file.endsWith('.html'))) {
  const html = await readFile(file, 'utf8');
  if ((html.match(/<h1(?:\s|>)/g) || []).length !== 1) errors.push(`${file}: expected exactly one h1`);
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) await check(match[1], file);
}
for (const file of all.filter(file => file.endsWith('.xml'))) {
  const xml = await readFile(file, 'utf8');
  for (const match of xml.matchAll(/<(?:loc|link)>([^<]+)<\/(?:loc|link)>/g)) await check(match[1], file);
}
const rss = await readFile('dist/rss.xml', 'utf8');
if ((rss.match(/<item>/g) || []).length < 1) errors.push('rss.xml: no published notes');
await stat('dist/pagefind/pagefind.js');
if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
else console.log(`Static output checked: ${all.filter(file => file.endsWith('.html')).length} pages, internal links/assets, RSS and sitemap use ${base}`);
