#!/usr/bin/env node
import { readFile, writeFile } from 'node:fs/promises';

const HUB_URL = 'https://hub.decodedops.co.uk/api/content/index';
const OUTPUT = new URL('../data/blog-index.json', import.meta.url);

const checkMode = process.argv.includes('--check');

async function main() {
  const res = await fetch(HUB_URL);
  if (!res.ok) {
    console.error(`Hub returned ${res.status}`);
    process.exit(1);
  }
  const { items } = await res.json();

  const mapped = items.map((item) => ({
    slug: item.slug,
    title: item.title,
    excerpt: item.excerpt,
    date: item.publishedDate,
    category: item.category,
  }));

  mapped.sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''));

  if (checkMode) {
    const existing = JSON.parse(await readFile(OUTPUT, 'utf8'));
    const localSlugs = new Set(existing.items.map((i) => i.slug));
    const missing = mapped.filter((i) => !localSlugs.has(i.slug));
    if (missing.length > 0) {
      console.error(`Missing locally: ${missing.map((i) => i.slug).join(', ')}`);
      process.exit(1);
    }
    console.log('0 missing');
    return;
  }

  const content = JSON.stringify({ items: mapped }, null, 2) + '\n';
  await writeFile(OUTPUT, content, 'utf8');
  console.log(`synced ${mapped.length} items`);
}

main();
