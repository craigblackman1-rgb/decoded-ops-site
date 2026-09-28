import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const ROOT = process.cwd();
const data = JSON.parse(readFileSync(join(ROOT, '.context', 'seo-titles-2026-09-28.json'), 'utf8'));

const PATH_TO_FILE = {
  '/': 'app/page.tsx',
  '/about': 'app/about/page.tsx',
  '/contact': 'app/contact/page.tsx',
  '/how-i-build': 'app/how-i-build/page.tsx',
  '/pricing': 'app/pricing/page.tsx',
  '/process-quality-system': 'app/process-quality-system/page.tsx',
  '/small-business': 'app/small-business/page.tsx',
  '/clarity': 'app/clarity/page.tsx',
  '/deliver': 'app/deliver/page.tsx',
  '/retained': 'app/retained/page.tsx',
  '/transform': 'app/transform/page.tsx',
  '/apps': 'app/apps/page.tsx',
  '/apps/commerce': 'app/apps/commerce/page.tsx',
  '/apps/proof': 'app/apps/proof/page.tsx',
  '/apps/works': 'app/apps/works/page.tsx',
  '/problems': 'app/problems/page.tsx',
  '/problems/ai-paralysis': 'app/problems/ai-paralysis/page.tsx',
  '/problems/bottleneck-growth': 'app/problems/bottleneck-growth/page.tsx',
  '/problems/buy-vs-build': 'app/problems/buy-vs-build/page.tsx',
  '/problems/cant-scale-operations': 'app/problems/cant-scale-operations/page.tsx',
  '/problems/data-scattered': 'app/problems/data-scattered/page.tsx',
  '/problems/disaster-recovery': 'app/problems/disaster-recovery/page.tsx',
  '/problems/ecommerce-not-connected': 'app/problems/ecommerce-not-connected/page.tsx',
  '/problems/erp-implementation-failure': 'app/problems/erp-implementation-failure/page.tsx',
  '/problems/inventory-blind': 'app/problems/inventory-blind/page.tsx',
  '/problems/legacy-system': 'app/problems/legacy-system/page.tsx',
  '/problems/manual-workarounds': 'app/problems/manual-workarounds/page.tsx',
  '/problems/no-ops-owner': 'app/problems/no-ops-owner/page.tsx',
  '/problems/ops-in-owners-head': 'app/problems/ops-in-owners-head/page.tsx',
  '/problems/seasonal-peaks': 'app/problems/seasonal-peaks/page.tsx',
  '/problems/slow-processes': 'app/problems/slow-processes/page.tsx',
  '/problems/spreadsheet-addiction': 'app/problems/spreadsheet-addiction/page.tsx',
  '/problems/systems-dont-talk': 'app/problems/systems-dont-talk/page.tsx',
  '/problems/wrong-erp-software': 'app/problems/wrong-erp-software/page.tsx',
  '/sectors/awards-engraving': 'app/sectors/awards-engraving/page.tsx',
  '/sectors/garment-decoration': 'app/sectors/garment-decoration/page.tsx',
  '/sectors/labels-packaging': 'app/sectors/labels-packaging/page.tsx',
  '/sectors/operations-consultant-print-embroidery': 'app/sectors/operations-consultant-print-embroidery/page.tsx',
  '/sectors/print-promotional': 'app/sectors/print-promotional/page.tsx',
  '/sectors/promotional-merchandise': 'app/sectors/promotional-merchandise/page.tsx',
  '/sectors/schoolwear': 'app/sectors/schoolwear/page.tsx',
  '/sectors/signs-graphics': 'app/sectors/signs-graphics/page.tsx',
  '/sectors/teamwear-clubwear': 'app/sectors/teamwear-clubwear/page.tsx',
  '/sectors/workwear': 'app/sectors/workwear/page.tsx',
  '/resources': 'app/resources/page.tsx',
  '/resources/5-warning-signs': 'app/resources/5-warning-signs/page.tsx',
  '/resources/artwork-approval-playbook': 'app/resources/artwork-approval-playbook/page.tsx',
  '/resources/audit-checklist': 'app/resources/audit-checklist/page.tsx',
  '/resources/capacity-planner': 'app/resources/capacity-planner/page.tsx',
  '/resources/decoded-method': 'app/resources/decoded-method/page.tsx',
  '/resources/erp-selection-playbook': 'app/resources/erp-selection-playbook/page.tsx',
  '/resources/six-sigma': 'app/resources/six-sigma/page.tsx',
  '/resources/sop-template': 'app/resources/sop-template/page.tsx',
  '/tools': 'app/tools/page.tsx',
  '/tools/automation-roi-calculator': 'app/tools/automation-roi-calculator/page.tsx',
  '/tools/downtime-cost-calculator': 'app/tools/downtime-cost-calculator/page.tsx',
  '/tools/ops-health-score': 'app/tools/ops-health-score/page.tsx',
  '/tools/rto-calculator': 'app/tools/rto-calculator/page.tsx',
  '/tools/should-i-replace-erp': 'app/tools/should-i-replace-erp/page.tsx',
  '/case-studies': 'app/case-studies/page.tsx',
  '/case-studies/case-study-01': 'app/case-studies/case-study-01/page.tsx',
  '/case-studies/case-study-02': 'app/case-studies/case-study-02/page.tsx',
  '/case-studies/case-study-03': 'app/case-studies/case-study-03/page.tsx',
  '/case-studies/eternal-fitness': 'app/case-studies/eternal-fitness/page.tsx',
  '/locations/manchester': 'app/locations/manchester/page.tsx',
  '/locations/sussex-surrey': 'app/locations/sussex-surrey/page.tsx',
  '/locations/tech-audit': 'app/locations/tech-audit/page.tsx',
  '/blog': 'app/blog/page.tsx',
};

const CLIENT_PAGES = ['/tools/ops-health-score', '/tools/should-i-replace-erp'];

// Extract the metadata export block from file content
function extractMetadataBlock(content) {
  const patterns = [
    /export const metadata:\s*Metadata\s*=\s*\{/,
    /export const metadata\s*=\s*\{/,
  ];
  for (const pat of patterns) {
    const m = content.match(pat);
    if (m) {
      const start = m.index;
      let depth = 0;
      let inStr = false;
      let strChar = '';
      let end = -1;
      for (let i = m.index + m[0].length - 1; i < content.length; i++) {
        const ch = content[i];
        if (inStr) {
          if (ch === strChar && content[i - 1] !== '\\') inStr = false;
        } else {
          if (ch === "'" || ch === '"') { inStr = true; strChar = ch; }
          else if (ch === '{') depth++;
          else if (ch === '}') { depth--; if (depth === 0) { end = i + 1; break; } }
        }
      }
      if (end > start) return { start, end, block: content.slice(start, end) };
    }
  }
  return null;
}

// Replace a field value inside a metadata block.
// Uses double quotes if the value contains an apostrophe; single quotes otherwise.
// Handles old values that used either quote style, including apostrophes inside double quotes.
function replaceField(block, fieldName, newValue) {
  const useDouble = newValue.includes("'");
  const q = useDouble ? '"' : "'";
  const escaped = useDouble ? newValue.replace(/"/g, '\\"') : newValue;

  // Handle title: { absolute: '...' } -> title: "..." or title: '...'
  if (fieldName === 'title') {
    block = block.replace(
      new RegExp(`(title:\\s*)\\{\\s*absolute:\\s*['"][^'"]*['"]\\s*}`),
      `$1${q}${escaped}${q}`
    );
  }
  // Replace field: "old value with 'apostrophes'" or field: 'old value'
  // Match double-quoted: everything except " between the quotes
  // Match single-quoted: everything except ' between the quotes
  const re = new RegExp(
    `(${fieldName}:\\s*)("(?:[^"]*)"|'(?:[^']*)')`,
    'g'
  );
  block = block.replace(re, `$1${q}${escaped}${q}`);
  return block;
}

let updated = 0;
let skipped = [];
let capacityPlannerHandled = false;

for (const row of data) {
  const page = row.page;
  if (CLIENT_PAGES.includes(page)) {
    skipped.push({ page, reason: 'client component - handled via layout.tsx' });
    continue;
  }
  const relPath = PATH_TO_FILE[page];
  if (!relPath) {
    skipped.push({ page, reason: 'no path mapping found' });
    continue;
  }
  const filePath = join(ROOT, relPath);
  let content;
  try {
    content = readFileSync(filePath, 'utf8');
  } catch {
    skipped.push({ page, reason: `file not found: ${relPath}` });
    continue;
  }
  const meta = extractMetadataBlock(content);
  if (!meta) {
    skipped.push({ page, reason: 'no metadata export found' });
    continue;
  }

  let newBlock = meta.block;

  // Handle capacity-planner's { absolute: '...' } -> plain string
  if (page === '/resources/capacity-planner') {
    newBlock = newBlock.replace(
      /title:\s*\{\s*absolute:\s*['"][^'"]*['"]\s*\}/,
      `title: '${row.title}'`
    );
    capacityPlannerHandled = true;
  } else {
    newBlock = replaceField(newBlock, 'title', row.title);
  }
  newBlock = replaceField(newBlock, 'description', row.description);

  if (newBlock !== meta.block) {
    content = content.slice(0, meta.start) + newBlock + content.slice(meta.end);
    writeFileSync(filePath, content, 'utf8');
    updated++;
    console.log(`  updated: ${relPath}`);
  } else {
    skipped.push({ page, reason: 'no changes needed (already matches)' });
  }
}

console.log(`\nDone. Updated: ${updated}, Skipped: ${skipped.length}`);
if (skipped.length > 0) {
  console.log('Skipped pages:');
  for (const s of skipped) console.log(`  ${s.page}: ${s.reason}`);
}
