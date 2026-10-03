import { readFile, writeFile, rm, access } from 'node:fs/promises';
import { spawn, spawnSync } from 'node:child_process';
import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';

const base = (process.env.BASE_PATH ?? '/ai-learning').replace(/\/+$/, '') + '/';
const template = await readFile('src/content/notes/token-context.md', 'utf8');
const states = ['draft', 'review', 'future', 'public'];
const fixtureFiles = states.map(state => `src/content/notes/regression-${state}.md`);
const created = [];
let browser; let server;
function build() {
  const result = spawnSync('npm', ['run', 'build'], { stdio: 'inherit', env: process.env });
  assert.equal(result.status, 0, 'Regression production build failed');
}
function fixture(state) {
  return template
    .replace('slug: token-context', `slug: regression-${state}`)
    .replace(/title: .+/, `title: "regression${state}sentinel"`)
    .replace(/summary: .+/, `summary: "regression${state}sentinel publication test content"`)
    .replace('status: published', `status: ${state === 'public' || state === 'future' ? 'published' : state}`)
    .replace(/prerequisites: .+/, 'prerequisites: []').replace(/related: .+/, 'related: []')
    .replaceAll('2026-10-03', state === 'future' ? '2100-01-01' : '2026-10-03');
}
async function search(state) {
  // Fresh page per build avoids an in-memory copy of the previous search index.
  const page = await browser.newPage();
  await page.goto(`http://127.0.0.1:4372${base}search/`);
  const count = await page.evaluate(async ({ base, term }) => {
    const pagefind = await import(`${base}pagefind/pagefind.js`);
    return (await pagefind.search(term)).results.length;
  }, { base, term: `regression${state}sentinel` });
  await page.close();
  return count;
}
async function noArtifact(state) {
  await assert.rejects(access(`dist/notes/regression-${state}/index.html`));
  for (const path of ['dist/notes/index.html', 'dist/rss.xml', 'dist/sitemap-0.xml']) {
    const text = await readFile(path, 'utf8');
    assert(!text.includes(`regression-${state}`) && !text.includes(`regression${state}sentinel`), `Leaked ${state} content in ${path}`);
  }
  assert.equal(await search(state), 0, `${state} content remains searchable`);
}
try {
  for (let i = 0; i < states.length; i++) {
    // Exclusive writes protect unrelated files if this test is interrupted/re-run.
    await writeFile(fixtureFiles[i], fixture(states[i]), { flag: 'wx' });
    created.push(fixtureFiles[i]);
  }
  build();
  const astroPackage = JSON.parse(await readFile('node_modules/astro/package.json', 'utf8'));
  server = spawn(process.execPath, [`node_modules/astro/${astroPackage.bin.astro}`, 'preview', '--ignore-lock', '--host', '127.0.0.1', '--port', '4372'], { stdio: ['ignore', 'pipe', 'pipe'] });
  await new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('Preview readiness timed out')), 20000);
    let diagnostics = '';
    server.stderr.on('data', chunk => { diagnostics += String(chunk); });
    server.stdout.on('data', chunk => { if (String(chunk).includes('4372')) { clearTimeout(timer); resolve(); } });
    server.once('exit', code => { clearTimeout(timer); reject(new Error(`Preview exited with ${code}: ${diagnostics}`)); });
    server.once('error', reject);
  });
  browser = await chromium.launch({ headless: true, executablePath: process.env.PLAYWRIGHT_CHROME_EXECUTABLE });
  for (const state of ['draft', 'review', 'future']) await noArtifact(state);
  await access('dist/notes/regression-public/index.html');
  assert.equal(await search('public'), 1, 'The positive control must be indexed');
  await writeFile(fixtureFiles[3], fixture('public').replace('status: published', 'status: review'));
  build();
  await noArtifact('public');
  console.log('Publication regression passes: draft/review/future excluded; a published article withdrawn from routes, lists, RSS, sitemap and the live search index.');
} finally {
  await browser?.close();
  if (server && server.exitCode === null) {
    server.kill('SIGTERM');
    await new Promise(resolve => server.once('exit', resolve));
  }
  for (const file of created) await rm(file, { force: true });
  build();
}
