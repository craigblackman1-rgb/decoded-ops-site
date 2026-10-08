import fs from 'node:fs';

// Replace a `dangerouslySetInnerHTML={{ __html: `...` }}` block containing the given
// figure start marker with `dangerouslySetInnerHTML={{ __html: name }}`, and add the import.
function swap(file, importLine, anchor, startMarker, name) {
  let src = fs.readFileSync(file, 'utf8');
  const figStart = src.indexOf(startMarker);
  if (figStart < 0) throw new Error('figure start missing in ' + file + ': ' + startMarker.slice(0, 40));
  // find the opening backtick before the figure
  const litStart = src.lastIndexOf('`', figStart);
  if (litStart < 0) throw new Error('template literal start missing in ' + file);
  // find the closing backtick after </figure>
  const figEnd = src.indexOf('</figure>', figStart);
  if (figEnd < 0) throw new Error('</figure> missing in ' + file);
  const litEnd = src.indexOf('`', figEnd + 9);
  if (litEnd < 0) throw new Error('template literal end missing in ' + file);
  // replace from litStart to litEnd inclusive with the variable name
  src = src.slice(0, litStart) + name + src.slice(litEnd + 1);
  if (importLine && !src.includes(importLine)) {
    if (!src.includes(anchor)) throw new Error('import anchor missing in ' + file);
    src = src.replace(anchor, anchor + '\n' + importLine);
  }
  fs.writeFileSync(file, src, 'utf8');
  console.log('updated', file, '->', name);
}

swap('app/resources/capacity-planner/page.tsx',
  "import { a993 } from '@/lib/d17-figures/a993';",
  "import { D17Motion } from '@/components/D17Motion';",
  '<figure class="d17 sw a993"', 'a993');

swap('app/apps/works/page.tsx',
  "import { a942 } from '@/lib/d17-figures/a942';\nimport { a943 } from '@/lib/d17-figures/a943';",
  "import { D17Motion } from '@/components/D17Motion';",
  '<figure class="d17 sw a942"', 'a942');
swap('app/apps/works/page.tsx', '', '',
  '<figure class="d17 sw a943"', 'a943');

swap('app/resources/six-sigma/page.tsx',
  "import { a986 } from '@/lib/d17-figures/a986';",
  "import { D17Motion } from '@/components/D17Motion';",
  '<figure class="d17 sw a986"', 'a986');

swap('app/resources/erp-selection-playbook/page.tsx',
  "import { a991 } from '@/lib/d17-figures/a991';",
  "import { D17Motion } from '@/components/D17Motion';",
  '<figure class="d17 sx a991"', 'a991');
