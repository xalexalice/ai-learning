import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { published } from '../lib/content';
import { entryPath, withBase } from '../lib/paths';
import { site } from '../site';

export async function GET(context: APIContext) {
  return rss({
    title: site.title, description: site.description,
    site: new URL(withBase(), context.site!).href,
    items: (await published('notes')).map(({ data }) => ({
      title: data.title, description: data.summary,
      pubDate: new Date(data.publishedAt!), link: entryPath('notes', data.slug),
    })),
    customData: '<language>zh-CN</language>',
  });
}
