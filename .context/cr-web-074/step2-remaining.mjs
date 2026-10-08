import fs from 'node:fs';

// cant-scale-operations: drop the inlineArt918 const, point usage at shared a993.
{
  const file = 'app/problems/cant-scale-operations/page.tsx';
  let src = fs.readFileSync(file, 'utf8');
  const start = src.indexOf('const inlineArt918 = ');
  if (start < 0) throw new Error('const start missing');
  const endTag = '</figure>`;';
  const end = src.indexOf(endTag, start);
  if (end < 0) throw new Error('const end missing');
  src = src.slice(0, start) + src.slice(end + endTag.length + 1);
  src = src.replace('inlineArt={inlineArt918}', 'inlineArt={a993}');
  fs.writeFileSync(file, src, 'utf8');
  console.log('cant-scale done');
}

// inventory-blind: replace the whole __html template literal containing the 918 figure with a943.
{
  const file = 'app/problems/inventory-blind/page.tsx';
  let src = fs.readFileSync(file, 'utf8');
  const figStart = src.indexOf('<figure class="d17 a918"');
  if (figStart < 0) throw new Error('918 figure start missing');
  const litStart = src.lastIndexOf('`', figStart);
  const figEnd = src.indexOf('</figure>', figStart);
  if (figEnd < 0) throw new Error('918 figure end missing');
  const litEnd = src.indexOf('`', figEnd + 9);
  if (litStart < 0 || litEnd < 0) throw new Error('literal bounds missing');
  src = src.slice(0, litStart) + 'a943' + src.slice(litEnd + 1);
  src = src.replace('<span className="eyebrow">Evidence · DO-ART-918</span>',
    '<span className="eyebrow">The screens · DO-ART-943</span>');
  const anchor = "import '@/app/d17-problems.css';";
  src = src.replace(anchor, anchor + "\nimport '@/app/d17-apps-cases.css';\nimport { a943 } from '@/lib/d17-figures/a943';");
  fs.writeFileSync(file, src, 'utf8');
  console.log('inventory-blind done');
}
