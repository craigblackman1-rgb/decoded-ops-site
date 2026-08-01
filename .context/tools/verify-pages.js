// Ground-truth verification: derive route<->mockup mapping from the filesystem,
// fetch every live route, compare H1 + DS-class presence + old-Tailwind residue
// against the mockup. No hand-maintained page list — re-running this after new
// mockups appear will surface new gaps automatically.
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Repo root is wherever this script lives, two levels up (.context/tools/verify-pages.js).
const REPO_ROOT = path.resolve(__dirname, '..', '..');
const MOCKUP_DIR = process.env.MOCKUP_DIR || 'D:\\apps\\design-systems\\decoded-marketing';
const SITE_ORIGIN = process.env.SITE_ORIGIN || 'https://staging.decodedops.co.uk';

// Derived at run time, not hand-maintained -- a new page.tsx shows up automatically
// next run instead of silently being left off a list someone typed once.
const ROUTE_FILES = execSync('git ls-tree -r HEAD --name-only', { cwd: REPO_ROOT })
  .toString()
  .split('\n')
  .map(l => l.trim())
  .filter(l => /^app\/.*page\.tsx?$/.test(l) && !l.includes('/clients/') && !l.startsWith('app/api/'));

const mockupFiles = new Set(
  fs.readdirSync(MOCKUP_DIR).filter(f => f.endsWith('.html')).map(f => f)
);

const blogIndex = JSON.parse(fs.readFileSync(path.join(REPO_ROOT, 'data', 'blog-index.json'), 'utf8'));

function fileToRoute(f) {
  let r = f.replace(/^app\//, '').replace(/(^|\/)page\.tsx?$/, '');
  return r === '' ? '/' : '/' + r;
}

function routeToMockupCandidate(route) {
  if (route === '/') return 'homepage.html';
  return route.replace(/^\//, '').replace(/\//g, '-') + '.html';
}

const DYNAMIC_SKIP = [/\[location\]/, /\[slug\]/, /\[clientId\]/, /\[id\]/];

function isDynamic(f) {
  return DYNAMIC_SKIP.some(re => re.test(f));
}

function extractMain(html) {
  const start = html.indexOf('<main');
  const end = html.lastIndexOf('</main>');
  if (start === -1 || end === -1) return html;
  return html.slice(start, end);
}

function extractH1(html) {
  const m = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  if (!m) return null;
  return m[1].replace(/<[^>]+>/g, '').replace(/&#x27;/g, "'").replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
}

function normalize(s) {
  return (s || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

function fuzzyMatch(a, b) {
  if (!a || !b) return false;
  const na = normalize(a), nb = normalize(b);
  return na === nb || na.includes(nb) || nb.includes(na);
}

async function checkPage(route, mockupFile) {
  const url = SITE_ORIGIN + route;
  let liveHtml;
  try {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) return { route, mockupFile, verdict: 'ERROR', detail: `HTTP ${res.status}` };
    liveHtml = await res.text();
  } catch (e) {
    return { route, mockupFile, verdict: 'ERROR', detail: e.message };
  }
  const mainHtml = extractMain(liveHtml);
  const oldTailwindCount = (mainHtml.match(/bg-\[#[0-9A-Fa-f]{6}\]/g) || []).length;
  const hasDS = /class="(g-off|g-navy|g-white|eyebrow|wrap)/.test(mainHtml) || mainHtml.includes(' class="wrap');

  if (mockupFile === 'blog-post.html') {
    const hasPostHeader = mainHtml.includes('post-header');
    const hasPostMeta = mainHtml.includes('post-meta');
    const hasPostCta = mainHtml.includes('post-cta');
    const hasRelated = mainHtml.includes('class="related');
    const ok = hasPostHeader && hasPostMeta && hasPostCta && hasRelated && oldTailwindCount === 0;
    return {
      route, mockupFile, verdict: ok ? 'PASS' : 'FAIL',
      detail: ok ? 'all 4 template sections present, no old-Tailwind' :
        `post-header:${hasPostHeader} post-meta:${hasPostMeta} post-cta:${hasPostCta} related:${hasRelated} oldTailwind:${oldTailwindCount}`,
    };
  }

  const mockupPath = path.join(MOCKUP_DIR, mockupFile);
  const mockupHtml = fs.readFileSync(mockupPath, 'utf8');
  const mockupH1 = extractH1(mockupHtml);
  const liveH1 = extractH1(liveHtml);
  const h1Match = fuzzyMatch(mockupH1, liveH1);

  const ok = h1Match && hasDS && oldTailwindCount === 0;
  return {
    route, mockupFile, verdict: ok ? 'PASS' : 'FAIL',
    detail: ok ? 'H1 matches, DS classes present, no old-Tailwind in <main>' :
      `h1Match:${h1Match} (mockup:"${(mockupH1||'').slice(0,50)}" live:"${(liveH1||'').slice(0,50)}") hasDS:${hasDS} oldTailwindInMain:${oldTailwindCount}`,
  };
}

async function main() {
  const results = [];

  // static routes with a derivable mockup
  for (const f of ROUTE_FILES) {
    if (isDynamic(f)) continue; // handled separately (locations use parent static route; blog handled below)
    const route = fileToRoute(f);
    const candidate = routeToMockupCandidate(route);
    if (mockupFiles.has(candidate)) {
      results.push(await checkPage(route, candidate));
    } else {
      results.push({ route, mockupFile: null, verdict: 'NO-MOCKUP', detail: `expected ${candidate}, not found in decoded-marketing/` });
    }
  }

  // blog posts — shared template, data-driven
  for (const item of blogIndex.items) {
    results.push(await checkPage('/blog/' + item.slug, 'blog-post.html'));
  }

  // summary
  const counts = {};
  for (const r of results) counts[r.verdict] = (counts[r.verdict] || 0) + 1;

  console.log('=== SUMMARY ===');
  console.log(JSON.stringify(counts, null, 2));
  console.log('\n=== FAIL / ERROR / NO-MOCKUP (full detail) ===');
  for (const r of results) {
    if (r.verdict !== 'PASS') {
      console.log(`${r.verdict}\t${r.route}\t${r.detail}`);
    }
  }
  console.log(`\n=== PASS (${counts.PASS || 0}) ===`);
  for (const r of results) {
    if (r.verdict === 'PASS') console.log(`PASS\t${r.route}`);
  }

  fs.writeFileSync(
    path.join(__dirname, 'verify_results.json'),
    JSON.stringify(results, null, 2)
  );
  console.log('\nFull results written to verify_results.json');
}

main();
