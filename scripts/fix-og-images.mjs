import fs from 'fs';
import path from 'path';

const files = [
  'app/about/page.tsx',
  'app/blog/page.tsx',
  'app/clarity/page.tsx',
  'app/contact/page.tsx',
  'app/cookies/page.tsx',
  'app/deliver/page.tsx',
  'app/apps/page.tsx',
  'app/apps/works/page.tsx',
  'app/apps/proof/page.tsx',
  'app/apps/commerce/page.tsx',
  'app/how-i-build/page.tsx',
  'app/process-quality-system/page.tsx',
  'app/resources/six-sigma/page.tsx',
  'app/privacy/page.tsx',
  'app/pricing/page.tsx',
  'app/resources/audit-checklist/page.tsx',
  'app/resources/sop-template/page.tsx',
  'app/resources/erp-selection-playbook/page.tsx',
  'app/resources/artwork-approval-playbook/page.tsx',
  'app/resources/decoded-method/page.tsx',
  'app/retained/page.tsx',
  'app/transform/page.tsx',
  'app/tools/page.tsx',
  'app/case-studies/page.tsx',
  'app/case-studies/case-study-01/page.tsx',
  'app/case-studies/case-study-02/page.tsx',
  'app/case-studies/case-study-03/page.tsx',
  'app/case-studies/eternal-fitness/page.tsx',
];

const OG_IMAGE_IMPORT = "import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';\n";

function addImagesToBlock(content, blockName, insertText, matchAfter) {
  // Find the block and insert after the matchAfter pattern
  const lines = content.split('\n');
  let inBlock = false;
  let blockDepth = 0;
  let blockStartLine = -1;
  let insertAfterLine = -1;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes(blockName + ':') && line.includes('{')) {
      inBlock = true;
      blockDepth = 0;
      blockStartLine = i;
    }
    if (inBlock) {
      blockDepth += (line.match(/\{/g) || []).length;
      blockDepth -= (line.match(/\}/g) || []).length;
      if (line.includes(matchAfter)) {
        insertAfterLine = i;
      }
      if (blockDepth <= 0 && blockStartLine >= 0) {
        break;
      }
    }
  }

  if (insertAfterLine >= 0) {
    lines.splice(insertAfterLine + 1, 0, insertText);
    return lines.join('\n');
  }
  return content;
}

let fixed = 0;
for (const file of files) {
  const fullPath = path.resolve(file);
  let content = fs.readFileSync(fullPath, 'utf8');
  let changed = false;

  // Add import if not present
  if (!content.includes("from '@/lib/seo'")) {
    const lastImportIdx = content.lastIndexOf('\nimport ');
    if (lastImportIdx !== -1) {
      const lineEnd = content.indexOf('\n', lastImportIdx + 1);
      content = content.slice(0, lineEnd + 1) + OG_IMAGE_IMPORT + content.slice(lineEnd + 1);
      changed = true;
    }
  }

  // Add images to openGraph if missing
  if (!content.includes('images: OG_IMAGE')) {
    // Find openGraph block and add images after url line
    const lines = content.split('\n');
    let inOG = false;
    let depth = 0;
    let inserted = false;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('openGraph:') && lines[i].includes('{')) {
        inOG = true;
        depth = 0;
      }
      if (inOG) {
        depth += (lines[i].match(/\{/g) || []).length;
        depth -= (lines[i].match(/\}/g) || []).length;
        if (lines[i].includes('url:') && !inserted) {
          // Next non-empty line after url that closes the block or has another property
          // Insert images before the closing } of the openGraph block
          // Find the closing } by counting depth
          for (let j = i + 1; j < lines.length; j++) {
            if (lines[j].trim().startsWith('},') || lines[j].trim() === '}') {
              lines.splice(j, 0, '    images: OG_IMAGE,');
              inserted = true;
              break;
            }
          }
          break;
        }
        if (depth <= 0) break;
      }
    }
    if (inserted) {
      content = lines.join('\n');
      changed = true;
    }
  }

  // Add images to twitter if missing
  if (!content.includes('images: [OG_IMAGE_PATH]')) {
    const lines = content.split('\n');
    let inTwitter = false;
    let depth = 0;
    let inserted = false;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('twitter:') && lines[i].includes('{')) {
        inTwitter = true;
        depth = 0;
      }
      if (inTwitter) {
        depth += (lines[i].match(/\{/g) || []).length;
        depth -= (lines[i].match(/\}/g) || []).length;
        if (depth <= 0 && inTwitter) {
          // Insert before closing }
          lines.splice(i, 0, "    images: [OG_IMAGE_PATH],");
          inserted = true;
          break;
        }
      }
    }
    if (inserted) {
      content = lines.join('\n');
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Fixed: ${file}`);
    fixed++;
  } else {
    console.log(`Skipped (already done?): ${file}`);
  }
}

console.log(`\nFixed ${fixed} files`);
