// Check prerendered HTML pages against onpage-web058.json for title/description mismatches.
// Run after npm run build. Reads from .next/server/app HTML files.
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

const ROOT = process.cwd();
const json = JSON.parse(readFileSync(join(ROOT, '.context/lane-briefs/onpage-web058.json'), 'utf8'));
const buildDir = join(ROOT, '.next', 'server', 'app');

// Decode HTML entities
function decodeHtml(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'");
}

// Extract <title> and <meta name="description"> from HTML
function extractMeta(html) {
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i)
    || html.match(/<meta\s+content=["']([^"']+)["']\s+name=["']description["']/i);
  return {
    title: titleMatch ? decodeHtml(titleMatch[1].trim()) : null,
    description: descMatch ? decodeHtml(descMatch[1].trim()) : null,
  };
}

// Map URL path to build output HTML file path
function getBuildPath(urlPath) {
  if (urlPath === '/') return join(buildDir, 'index.html');
  return join(buildDir, urlPath.slice(1) + '.html');
}

let mismatches = 0;
let matched = 0;
let notPrerendered = [];

for (const entry of json) {
  const htmlPath = getBuildPath(entry.path);
  
  if (!existsSync(htmlPath)) {
    notPrerendered.push(entry.path);
    continue;
  }
  
  const html = readFileSync(htmlPath, 'utf8');
  const meta = extractMeta(html);
  
  if (meta.title !== entry.title) {
    console.log(`TITLE MISMATCH: ${entry.path}`);
    console.log(`  Expected: ${JSON.stringify(entry.title)}`);
    console.log(`  Got:      ${JSON.stringify(meta.title)}`);
    mismatches++;
  } else {
    matched++;
  }
  
  if (meta.description !== entry.meta) {
    console.log(`DESC MISMATCH: ${entry.path}`);
    console.log(`  Expected: ${JSON.stringify(entry.meta)}`);
    console.log(`  Got:      ${JSON.stringify(meta.description)}`);
    mismatches++;
  } else {
    matched++;
  }
}

console.log(`\n=== Results ===`);
console.log(`Total entries in JSON: ${json.length}`);
console.log(`Matched (title + desc): ${matched}`);
console.log(`Mismatches: ${mismatches}`);
console.log(`Not prerendered: ${notPrerendered.length}`);
if (notPrerendered.length > 0) {
  for (const p of notPrerendered) console.log(`  ${p}`);
}

process.exit(mismatches > 0 ? 1 : 0);
