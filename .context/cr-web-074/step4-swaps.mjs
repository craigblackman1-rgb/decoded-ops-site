import fs from 'node:fs';

// data-scattered: replace the whole __html template containing the 917 figure with shared a942.
{
  const file = 'app/problems/data-scattered/page.tsx';
  let src = fs.readFileSync(file, 'utf8');
  const figStart = src.indexOf('<figure class="d17 a917"');
  if (figStart < 0) throw new Error('917 figure start missing');
  const litStart = src.lastIndexOf('`', figStart);
  const figEnd = src.indexOf('</figure>', figStart);
  const litEnd = src.indexOf('`', figEnd + 9);
  if (litStart < 0 || figEnd < 0 || litEnd < 0) throw new Error('literal bounds missing');
  src = src.slice(0, litStart) + 'a942' + src.slice(litEnd + 1);
  src = src.replace('<span className="eyebrow">Evidence · DO-ART-917</span>',
    '<span className="eyebrow">One catalogue · DO-ART-942</span>');
  src = src.replace('{/* ── INLINE ARTWORK · DO-ART-917 ──────────────────────────────────── */}',
    '{/* ── INLINE ARTWORK · DO-ART-942 ──────────────────────────────────── */}');
  const anchor = "import '@/app/d17-problems.css';";
  src = src.replace(anchor, anchor + "\nimport '@/app/d17-apps-cases.css';\nimport { a942 } from '@/lib/d17-figures/a942';");
  fs.writeFileSync(file, src, 'utf8');
  console.log('data-scattered done');
}

// erp-implementation-failure: same for 917 -> a991Solo.
{
  const file = 'app/problems/erp-implementation-failure/page.tsx';
  let src = fs.readFileSync(file, 'utf8');
  const figStart = src.indexOf('<figure class="d17 a917"');
  if (figStart < 0) throw new Error('917 figure start missing');
  const litStart = src.lastIndexOf('`', figStart);
  const figEnd = src.indexOf('</figure>', figStart);
  const litEnd = src.indexOf('`', figEnd + 9);
  if (litStart < 0 || figEnd < 0 || litEnd < 0) throw new Error('literal bounds missing');
  src = src.slice(0, litStart) + 'a991Solo' + src.slice(litEnd + 1);
  src = src.replace('<span className="eyebrow">Evidence · DO-ART-917</span>',
    '<span className="eyebrow">The brief · DO-ART-991</span>');
  src = src.replace('{/* ── INLINE ARTWORK · DO-ART-917 ──────────────────────────────────── */}',
    '{/* ── INLINE ARTWORK · DO-ART-991 ──────────────────────────────────── */}');
  const anchor = "import '@/app/d17-problems.css';";
  src = src.replace(anchor, anchor + "\nimport '@/app/d17-resources.css';\nimport { a991Solo } from '@/lib/d17-figures/a991';");
  fs.writeFileSync(file, src, 'utf8');
  console.log('erp-implementation-failure done');
}
