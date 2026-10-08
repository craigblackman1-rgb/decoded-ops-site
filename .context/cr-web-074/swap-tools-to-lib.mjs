import fs from 'node:fs';

// ops-health-score: replace the JSX <figure ...a997...>...</figure> with a dangerouslySetInnerHTML div using the shared string.
{
  const file = 'app/tools/ops-health-score/page.tsx';
  let src = fs.readFileSync(file, 'utf8');
  const start = src.indexOf('<figure className="d17 sx px ph-fade a997"');
  if (start < 0) throw new Error('997 figure start missing');
  const endTag = '</figure>';
  const end = src.indexOf(endTag, start);
  if (end < 0) throw new Error('997 figure end missing');
  const after = end + endTag.length;
  src = src.slice(0, start) + '<div dangerouslySetInnerHTML={{ __html: a997 }} />' + src.slice(after);
  const anchor = "import { D17Motion } from '@/components/D17Motion';";
  src = src.replace(anchor, anchor + "\nimport { a997 } from '@/lib/d17-figures/a997';");
  fs.writeFileSync(file, src, 'utf8');
  console.log('updated', file);
}

// rto-calculator: same for a998
{
  const file = 'app/tools/rto-calculator/page.tsx';
  let src = fs.readFileSync(file, 'utf8');
  const start = src.indexOf('<figure className="d17 sx px a998"');
  if (start < 0) throw new Error('998 figure start missing');
  const endTag = '</figure>';
  const end = src.indexOf(endTag, start);
  if (end < 0) throw new Error('998 figure end missing');
  const after = end + endTag.length;
  src = src.slice(0, start) + '<div dangerouslySetInnerHTML={{ __html: a998 }} />' + src.slice(after);
  const anchor = "import { D17Motion } from '@/components/D17Motion';";
  src = src.replace(anchor, anchor + "\nimport { a998 } from '@/lib/d17-figures/a998';");
  fs.writeFileSync(file, src, 'utf8');
  console.log('updated', file);
}
