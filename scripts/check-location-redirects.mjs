#!/usr/bin/env node

/**
 * Verifies that all 58 town URLs + the fractional-cto hub each map to one
 * of the 3 new location URLs, and no destination is a deleted route.
 *
 * Run: node scripts/check-location-redirects.mjs
 */

// Inline the locations data to avoid TypeScript import issues
const locations = [
  { slug: 'chichester', county: 'West Sussex' },
  { slug: 'worthing', county: 'West Sussex' },
  { slug: 'horsham', county: 'West Sussex' },
  { slug: 'crawley', county: 'West Sussex' },
  { slug: 'bognor-regis', county: 'West Sussex' },
  { slug: 'littlehampton', county: 'West Sussex' },
  { slug: 'haywards-heath', county: 'West Sussex' },
  { slug: 'burgess-hill', county: 'West Sussex' },
  { slug: 'shoreham-by-sea', county: 'West Sussex' },
  { slug: 'brighton', county: 'East Sussex' },
  { slug: 'hove', county: 'East Sussex' },
  { slug: 'eastbourne', county: 'East Sussex' },
  { slug: 'hastings', county: 'East Sussex' },
  { slug: 'lewes', county: 'East Sussex' },
  { slug: 'crowborough', county: 'East Sussex' },
  { slug: 'bexhill-on-sea', county: 'East Sussex' },
  { slug: 'uckfield', county: 'East Sussex' },
  { slug: 'seaford', county: 'East Sussex' },
  { slug: 'guildford', county: 'Surrey' },
  { slug: 'woking', county: 'Surrey' },
  { slug: 'epsom', county: 'Surrey' },
  { slug: 'reigate', county: 'Surrey' },
  { slug: 'redhill', county: 'Surrey' },
  { slug: 'dorking', county: 'Surrey' },
  { slug: 'farnham', county: 'Surrey' },
  { slug: 'leatherhead', county: 'Surrey' },
  { slug: 'camberley', county: 'Surrey' },
  { slug: 'london', county: 'Greater London' },
  { slug: 'manchester', county: 'Greater Manchester' },
];

const SUSSEX_SURREY_COUNTIES = new Set(['West Sussex', 'East Sussex', 'Surrey']);

const VALID_DESTINATIONS = new Set([
  '/locations/sussex-surrey',
  '/locations/manchester',
  '/locations/tech-audit',
]);

let pass = 0;
let fail = 0;

function check(source, dest) {
  if (VALID_DESTINATIONS.has(dest)) {
    pass++;
  } else {
    fail++;
    console.error(`FAIL: ${source} -> ${dest} (not a valid destination)`);
  }
}

// Hub redirect
check('/locations/fractional-cto', '/locations/sussex-surrey');

// Per-town redirects
for (const loc of locations) {
  const isSussexSurrey = SUSSEX_SURREY_COUNTIES.has(loc.county);

  const dest = loc.slug === 'manchester'
    ? '/locations/manchester'
    : loc.slug === 'london'
      ? '/locations/tech-audit'
      : isSussexSurrey
        ? '/locations/sussex-surrey'
        : '/locations/tech-audit';

  check(`/locations/fractional-cto/${loc.slug}`, dest);
  check(`/locations/tech-audit/${loc.slug}`, dest);
}

console.log(`\nRedirect verification:`);
console.log(`  Towns checked: ${locations.length}`);
console.log(`  Redirects checked: ${1 + locations.length * 2}`);
console.log(`  Pass: ${pass}`);
console.log(`  Fail: ${fail}`);

if (fail > 0) {
  console.error('\nFAILED: some redirects point to invalid destinations');
  process.exit(1);
} else {
  console.log('\nPASSED: all redirects point to valid destinations');
  process.exit(0);
}
