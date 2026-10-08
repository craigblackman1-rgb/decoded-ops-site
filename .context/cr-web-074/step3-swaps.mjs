import fs from 'node:fs';

function replaceConstWithImport(file, constName, importLine, importAnchor, newUsage) {
  let src = fs.readFileSync(file, 'utf8');
  const start = src.indexOf(`const ${constName} = `);
  if (start < 0) throw new Error(`const ${constName} missing in ` + file);
  const endTag = '</figure>`;';
  const end = src.indexOf(endTag, start);
  if (end < 0) throw new Error('const end missing in ' + file);
  src = src.slice(0, start) + src.slice(end + endTag.length + 1);
  src = src.replace(`inlineArt={${constName}}`, `inlineArt={${newUsage}}`);
  if (!src.includes(importLine)) {
    if (!src.includes(importAnchor)) throw new Error('import anchor missing in ' + file);
    src = src.replace(importAnchor, importAnchor + '\n' + importLine);
  }
  fs.writeFileSync(file, src, 'utf8');
  console.log('done', file);
}

// ai-paralysis: inline 718 block -> shared a997Solo; eyebrow update; resources CSS import.
{
  const file = 'app/problems/ai-paralysis/page.tsx';
  let src = fs.readFileSync(file, 'utf8');
  const figStart = src.indexOf('<figure class="d17 sw sw-doc a718"');
  if (figStart < 0) throw new Error('718 figure start missing in ai-paralysis');
  const litStart = src.lastIndexOf('`', figStart);
  const figEnd = src.indexOf('</figure>', figStart);
  const litEnd = src.indexOf('`', figEnd + 9);
  if (litStart < 0 || figEnd < 0 || litEnd < 0) throw new Error('literal bounds missing');
  src = src.slice(0, litStart) + 'a997Solo' + src.slice(litEnd + 1);
  src = src.replace('<span className="eyebrow">The foundation · DO-ART-718</span>',
    '<span className="eyebrow">The assessment · DO-ART-997</span>');
  src = src.replace('{/* ── INLINE ARTWORK · DO-ART-718 ──────────────────────────────────── */}',
    '{/* ── INLINE ARTWORK · DO-ART-997 ──────────────────────────────────── */}');
  const anchor = "import '@/app/d17-problems.css';";
  src = src.replace(anchor, anchor + "\nimport '@/app/d17-resources.css';\nimport { a997Solo } from '@/lib/d17-figures/a997';");
  fs.writeFileSync(file, src, 'utf8');
  console.log('done', file);
}

// disaster-recovery: inlineArt718 -> shared a998Solo.
replaceConstWithImport(
  'app/problems/disaster-recovery/page.tsx',
  'inlineArt718',
  "import { a998Solo } from '@/lib/d17-figures/a998';\nimport '@/app/d17-resources.css';",
  "import { D17Motion } from '@/components/D17Motion';",
  'a998Solo'
);

// slow-processes: inlineArt718 -> shared a986.
replaceConstWithImport(
  'app/problems/slow-processes/page.tsx',
  'inlineArt718',
  "import { a986 } from '@/lib/d17-figures/a986';\nimport '@/app/d17-resources.css';",
  "import { D17Motion } from '@/components/D17Motion';",
  'a986'
);
