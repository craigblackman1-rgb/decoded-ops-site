import fs from 'node:fs';

function extract(file, startMarker, endMarker) {
  const src = fs.readFileSync(file, 'utf8');
  const s = src.indexOf(startMarker);
  if (s < 0) throw new Error('start not found in ' + file + ': ' + startMarker);
  const e = src.indexOf(endMarker, s);
  if (e < 0) throw new Error('end not found in ' + file);
  return src.slice(s, e + endMarker.length);
}

const jobs = [
  ['app/resources/capacity-planner/page.tsx', '<figure class="d17 sw a993"', '</figure>', 'lib/d17-figures/a993.ts', 'a993'],
  ['app/apps/works/page.tsx', '<figure class="d17 sw a942"', '</figure>', 'lib/d17-figures/a942.ts', 'a942'],
  ['app/apps/works/page.tsx', '<figure class="d17 sw a943"', '</figure>', 'lib/d17-figures/a943.ts', 'a943'],
  ['app/resources/six-sigma/page.tsx', '<figure class="d17 sw a986"', '</figure>', 'lib/d17-figures/a986.ts', 'a986'],
  ['app/resources/erp-selection-playbook/page.tsx', '<figure class="d17 sx a991"', '</figure>', 'lib/d17-figures/a991.ts', 'a991'],
];

fs.mkdirSync('lib/d17-figures', { recursive: true });

for (const [file, sm, em, out, name] of jobs) {
  const body = extract(file, sm, em);
  const content =
    '// Shared D17 figure ' + name + ' (CR-WEB-074): extracted verbatim from its home page.\n' +
    'export const ' + name + ' = `' + body + '`;\n';
  fs.writeFileSync(out, content, 'utf8');
  console.log(out, content.length);
}
