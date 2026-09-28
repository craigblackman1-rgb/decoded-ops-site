import { readFileSync } from 'fs';
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
  '/tools/ops-health-score': 'app/tools/ops-health-score/layout.tsx',
  '/tools/rto-calculator': 'app/tools/rto-calculator/page.tsx',
  '/tools/should-i-replace-erp': 'app/tools/should-i-replace-erp/layout.tsx',
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

let matched = 0;
let missing = [];
let errors = [];

for (const row of data) {
  const page = row.page;
  const relPath = PATH_TO_FILE[page];
  if (!relPath) {
    missing.push({ page, reason: 'no path mapping' });
    continue;
  }
  const filePath = join(ROOT, relPath);
  let content;
  try {
    content = readFileSync(filePath, 'utf8');
  } catch {
    missing.push({ page, reason: `file not found: ${relPath}` });
    continue;
  }

  // Check title — the string must appear in the file
  if (!content.includes(row.title)) {
    errors.push({ page, field: 'title', expected: row.title, file: relPath });
    continue;
  }
  // Check description
  if (!content.includes(row.description)) {
    errors.push({ page, field: 'description', expected: row.description, file: relPath });
    continue;
  }
  matched++;
}

console.log(`\nSEO titles check: ${matched}/${data.length} matched`);
if (missing.length > 0) {
  console.log(`\nMissing (${missing.length}):`);
  for (const m of missing) console.log(`  ${m.page}: ${m.reason}`);
}
if (errors.length > 0) {
  console.log(`\nErrors (${errors.length}):`);
  for (const e of errors) {
    console.log(`  ${e.page} — ${e.field} not found in ${e.file}`);
    console.log(`    Expected: "${e.expected}"`);
  }
}
if (matched === data.length && missing.length === 0 && errors.length === 0) {
  console.log('\nAll rows verified successfully.');
  process.exit(0);
} else {
  process.exit(1);
}
