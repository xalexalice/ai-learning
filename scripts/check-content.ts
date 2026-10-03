import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import matter from 'gray-matter';
import { schemas, type CollectionName } from '../src/lib/schemas.ts';
import { validateContent, type Entry } from '../src/lib/validate-content.ts';

async function files(dir: string): Promise<string[]> {
  const items = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(items.map(item => item.isDirectory() ? files(join(dir, item.name)) : [join(dir, item.name)]))).flat();
}

const entries: Entry[] = [];
const errors: string[] = [];
for (const collection of Object.keys(schemas) as CollectionName[]) {
  for (const file of await files(`src/content/${collection}`)) {
    if (!file.endsWith('.md') || file.split('/').pop()!.startsWith('_')) continue;
    const parsed = matter(await readFile(file, 'utf8'));
    const result = schemas[collection].safeParse(parsed.data);
    if (!result.success) {
      errors.push(...result.error.issues.map(issue => `${file}: ${issue.path.join('.')} ${issue.message}`));
    } else entries.push({ collection, file, data: result.data, body: parsed.content });
  }
}
errors.push(...validateContent(entries));
if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else console.log(`Content checked: ${entries.length} entries; schemas, references, dates and publication rules pass.`);
