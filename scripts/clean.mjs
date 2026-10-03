import { rm } from 'node:fs/promises';
// Only generated output owned by this project; no Pagefind copy in public/.
await rm(new URL('../dist/', import.meta.url), { recursive: true, force: true });
