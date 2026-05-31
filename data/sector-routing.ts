// Internal-linking topology for /sectors/* pages.
// Generated from /searchfit-seo:internal-linking analysis on 2026-05-30.

export type SectorRoute = {
  targetService: { href: string; label: string; anchor: string };
  relatedProblems: { href: string; label: string }[];
};

export const sectorRouting: Record<string, SectorRoute> = {
  'garment-decoration': {
    targetService: {
      href: '/transform',
      label: 'Garment decoration ERP and systems',
      anchor: 'ERP, eCommerce integration, artwork management, and production workflow — built around how decorators actually work, not how generic ERPs assume you work.',
    },
    relatedProblems: [
      { href: '/problems/ecommerce-not-connected', label: 'Your eCommerce isn\'t connected to operations' },
      { href: '/problems/erp-implementation-failure', label: 'ERP for decorated goods has gone wrong' },
      { href: '/problems/manual-workarounds', label: 'Manual workarounds in your decoration workflow' },
    ],
  },
  'workwear-teamwear': {
    targetService: {
      href: '/transform',
      label: 'Workwear B2B portal and ERP',
      anchor: 'Corporate account ordering, managed-account complexity, multi-location despatch, and a B2B portal that connects end-to-end with production and stock.',
    },
    relatedProblems: [
      { href: '/problems/ecommerce-not-connected', label: 'Your B2B portal isn\'t connected to operations' },
      { href: '/problems/cant-scale-operations', label: 'Scaling beyond manual account management' },
      { href: '/problems/manual-workarounds', label: 'Workwear-spec data scattered across spreadsheets' },
    ],
  },
  'print-promotional': {
    targetService: {
      href: '/transform',
      label: 'Print shop operations and systems',
      anchor: 'Production scheduling, order management, artwork approval workflow, and the systems that make a busy print shop scale without chaos.',
    },
    relatedProblems: [
      { href: '/problems/slow-processes', label: 'Production scheduling and capacity issues' },
      { href: '/problems/erp-implementation-failure', label: 'Print MIS or ERP that doesn\'t fit' },
      { href: '/problems/manual-workarounds', label: 'Manual artwork approval and re-keying' },
    ],
  },
  'signs-graphics': {
    targetService: {
      href: '/clarity',
      label: 'Operations audit for signs & graphics',
      anchor: 'A one-day audit that looks at your job-to-cash flow, supplier integration, file management, and production planning — and tells you what to fix first.',
    },
    relatedProblems: [
      { href: '/problems/ai-paralysis', label: 'AI hype vs what would actually help' },
      { href: '/problems/no-ops-owner', label: 'No one owns the operational picture' },
      { href: '/problems/wrong-erp-software', label: 'Job-management software that doesn\'t fit' },
    ],
  },
  'labels-packaging': {
    targetService: {
      href: '/clarity',
      label: 'Operations audit for labels & packaging',
      anchor: 'Independent review of your prepress, MIS, despatch, and customer ordering — looking at where the time and cost are leaking.',
    },
    relatedProblems: [
      { href: '/problems/ai-paralysis', label: 'AI hype vs what would actually help' },
      { href: '/problems/wrong-erp-software', label: 'Print MIS that doesn\'t fit your business' },
      { href: '/problems/no-ops-owner', label: 'No one owns the operational picture' },
    ],
  },
  'awards-engraving': {
    targetService: {
      href: '/clarity',
      label: 'Operations audit for awards & engraving',
      anchor: 'A structured one-day audit of order intake, artwork, production, and despatch — built for the specific reality of mixed-method, short-run, personalised production.',
    },
    relatedProblems: [
      { href: '/problems/manual-workarounds', label: 'Manual order processing and artwork checks' },
      { href: '/problems/wrong-erp-software', label: 'Job software that doesn\'t fit personalised work' },
      { href: '/problems/no-ops-owner', label: 'No one owns the operational picture' },
    ],
  },
};
