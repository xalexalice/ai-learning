import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL || 'http://localhost:4321';
const base = process.env.BASE_PATH ?? '/ai-learning';
if (!/^https?:\/\//.test(site) || new URL(site).pathname !== '/') {
  throw new Error('SITE_URL must be an http(s) origin without a path. Use BASE_PATH for the subdirectory.');
}
if (!base.startsWith('/') || base.includes('..') || /[?#]/.test(base)) {
  throw new Error('BASE_PATH must be an absolute path, such as /ai-learning or /.');
}

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: page => !/\/(search|404)\/?$/.test(page) })],
  markdown: { shikiConfig: { theme: 'github-light', wrap: false } },
  vite: { server: { fs: { strict: true } } },
});
