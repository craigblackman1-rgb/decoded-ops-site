// Internal-linking topology for /sectors/* pages.
// Generated from /searchfit-seo:internal-linking analysis on 2026-05-30.

export type SectorRoute = {
  targetService: { href: string; label: string; anchor: string };
  relatedProblems: { href: string; label: string }[];
  relatedResources: { href: string; label: string }[];
  relatedSectors: { href: string; label: string }[];
};

export const sectorRouting: Record<string, SectorRoute> = {
  'garment-decoration': {
    targetService: {
      href: '/transform',
      label: 'Garment decoration ERP and systems',
      anchor: 'ERP, eCommerce integration, artwork management, and production workflow, built around how decorators actually work, not how generic ERPs assume you work.',
    },
    relatedProblems: [
      { href: '/problems/ecommerce-not-connected', label: 'Your eCommerce isn\'t connected to operations' },
      { href: '/problems/erp-implementation-failure', label: 'ERP for decorated goods has gone wrong' },
      { href: '/problems/manual-workarounds', label: 'Manual workarounds in your decoration workflow' },
    ],
    relatedResources: [
      { href: '/resources/artwork-approval-playbook', label: 'Artwork approval playbook' },
      { href: '/resources/sop-template', label: 'SOP template for decoration businesses' },
    ],
    relatedSectors: [
      { href: '/sectors/print-promotional', label: 'Print & promotional' },
      { href: '/sectors/workwear', label: 'Workwear' },
      { href: '/sectors/signs-graphics', label: 'Signs & graphics' },
    ],
  },
  'workwear': {
    targetService: {
      href: '/transform',
      label: 'Workwear B2B portal and ERP',
      anchor: 'Corporate account ordering, managed-account complexity, multi-location despatch, and a B2B portal that connects directly with production and stock.',
    },
    relatedProblems: [
      { href: '/problems/ecommerce-not-connected', label: 'Your B2B portal isn\'t connected to operations' },
      { href: '/problems/cant-scale-operations', label: 'Scaling beyond manual account management' },
      { href: '/problems/inventory-blind', label: 'No real visibility of stock levels' },
    ],
    relatedResources: [
      { href: '/resources/erp-selection-playbook', label: 'ERP selection playbook' },
      { href: '/tools/ops-health-score', label: 'Ops health score' },
    ],
    relatedSectors: [
      { href: '/sectors/teamwear-clubwear', label: 'Teamwear & clubwear' },
      { href: '/sectors/garment-decoration', label: 'Garment decoration' },
      { href: '/sectors/labels-packaging', label: 'Labels & packaging' },
    ],
  },
  'teamwear-clubwear': {
    targetService: {
      href: '/transform',
      label: 'Teamwear ordering and production',
      anchor: 'Squad numbers, sponsor logos, season deadlines, and the proof-and-approval loop that eats time before the first match.',
    },
    relatedProblems: [
      { href: '/problems/seasonal-peaks', label: 'Busy season breaks your operation' },
      { href: '/problems/manual-workarounds', label: 'Manual order processing and artwork checks' },
      { href: '/problems/cant-scale-operations', label: 'Can\'t scale beyond manual processes' },
    ],
    relatedResources: [
      { href: '/resources/sop-template', label: 'SOP template for decoration businesses' },
      { href: '/tools/ops-health-score', label: 'Ops health score' },
    ],
    relatedSectors: [
      { href: '/sectors/workwear', label: 'Workwear' },
      { href: '/sectors/garment-decoration', label: 'Garment decoration' },
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
    relatedResources: [
      { href: '/resources/artwork-approval-playbook', label: 'Artwork approval playbook' },
      { href: '/resources/erp-selection-playbook', label: 'ERP selection playbook' },
    ],
    relatedSectors: [
      { href: '/sectors/garment-decoration', label: 'Garment decoration' },
      { href: '/sectors/promotional-merchandise', label: 'Promotional merchandise' },
      { href: '/sectors/signs-graphics', label: 'Signs & graphics' },
      { href: '/sectors/awards-engraving', label: 'Awards & engraving' },
    ],
  },
  'promotional-merchandise': {
    targetService: {
      href: '/transform',
      label: 'Promotional merchandise systems',
      anchor: 'Product data across suppliers, artwork approval, margin tracking, and the catalogue management that keeps every client\'s branded goods accurate.',
    },
    relatedProblems: [
      { href: '/problems/inventory-blind', label: 'No real visibility of stock levels' },
      { href: '/problems/manual-workarounds', label: 'Manual order processing and artwork checks' },
      { href: '/problems/spreadsheet-addiction', label: 'Running the business on spreadsheets' },
    ],
    relatedResources: [
      { href: '/resources/artwork-approval-playbook', label: 'Artwork approval playbook' },
      { href: '/resources/sop-template', label: 'SOP template for decoration businesses' },
    ],
    relatedSectors: [
      { href: '/sectors/print-promotional', label: 'Print & promotional' },
      { href: '/sectors/workwear', label: 'Workwear' },
    ],
  },
  'schoolwear': {
    targetService: {
      href: '/clarity',
      label: 'Operations audit for schoolwear',
      anchor: 'Supplier data before the back-to-school peak, badge data that scales, and production scheduling that hits September every time.',
    },
    relatedProblems: [
      { href: '/problems/seasonal-peaks', label: 'Busy season breaks your operation' },
      { href: '/problems/inventory-blind', label: 'No real visibility of stock levels' },
      { href: '/problems/data-scattered', label: 'Numbers that never agree' },
    ],
    relatedResources: [
      { href: '/resources/sop-template', label: 'SOP template for decoration businesses' },
      { href: '/tools/ops-health-score', label: 'Ops health score' },
    ],
    relatedSectors: [
      { href: '/sectors/workwear', label: 'Workwear' },
      { href: '/sectors/teamwear-clubwear', label: 'Teamwear & clubwear' },
    ],
  },
  'signs-graphics': {
    targetService: {
      href: '/clarity',
      label: 'Operations audit for signs & graphics',
      anchor: 'A one-day audit that looks at your job-to-cash flow, supplier integration, file management, and production planning, and tells you what to fix first.',
    },
    relatedProblems: [
      { href: '/problems/ai-paralysis', label: 'AI hype vs what would actually help' },
      { href: '/problems/no-ops-owner', label: 'No one owns the operational picture' },
      { href: '/problems/wrong-erp-software', label: 'Job-management software that doesn\'t fit' },
    ],
    relatedResources: [
      { href: '/resources/erp-selection-playbook', label: 'ERP selection playbook' },
      { href: '/tools/ops-health-score', label: 'Ops health score' },
    ],
    relatedSectors: [
      { href: '/sectors/awards-engraving', label: 'Awards & engraving' },
      { href: '/sectors/labels-packaging', label: 'Labels & packaging' },
    ],
  },
  'labels-packaging': {
    targetService: {
      href: '/clarity',
      label: 'Operations audit for labels & packaging',
      anchor: 'Independent review of your prepress, MIS, despatch, and customer ordering, looking at where the time and cost are leaking.',
    },
    relatedProblems: [
      { href: '/problems/ai-paralysis', label: 'AI hype vs what would actually help' },
      { href: '/problems/wrong-erp-software', label: 'Print MIS that doesn\'t fit your business' },
      { href: '/problems/disaster-recovery', label: 'If the server died tomorrow…' },
    ],
    relatedResources: [
      { href: '/resources/erp-selection-playbook', label: 'ERP selection playbook' },
      { href: '/tools/rto-calculator', label: 'RTO calculator' },
    ],
    relatedSectors: [
      { href: '/sectors/signs-graphics', label: 'Signs & graphics' },
      { href: '/sectors/print-promotional', label: 'Print & promotional' },
    ],
  },
  'awards-engraving': {
    targetService: {
      href: '/clarity',
      label: 'Operations audit for awards & engraving',
      anchor: 'A structured one-day audit of order intake, artwork, production, and despatch, built for the specific reality of mixed-method, short-run, personalised production.',
    },
    relatedProblems: [
      { href: '/problems/manual-workarounds', label: 'Manual order processing and artwork checks' },
      { href: '/problems/wrong-erp-software', label: 'Job software that doesn\'t fit personalised work' },
      { href: '/problems/disaster-recovery', label: 'If the server died tomorrow…' },
    ],
    relatedResources: [
      { href: '/resources/artwork-approval-playbook', label: 'Artwork approval playbook' },
      { href: '/tools/ops-health-score', label: 'Ops health score' },
    ],
    relatedSectors: [
      { href: '/sectors/signs-graphics', label: 'Signs & graphics' },
      { href: '/sectors/labels-packaging', label: 'Labels & packaging' },
    ],
  },
  'operations-consultant-print-embroidery': {
    targetService: {
      href: '/clarity',
      label: 'Clarity Audit for print & embroidery',
      anchor: 'A one-day audit that maps your full workflow: order intake, artwork, production scheduling, stock, and despatch, and tells you exactly what to fix, in what order, and what it costs.',
    },
    relatedProblems: [
      { href: '/problems/manual-workarounds', label: 'Manual workarounds across embroidery and print' },
      { href: '/problems/erp-implementation-failure', label: 'ERP that does not handle decoration methods properly' },
      { href: '/problems/systems-dont-talk', label: 'Embroidery, print, and admin systems that do not connect' },
    ],
    relatedResources: [
      { href: '/resources/artwork-approval-playbook', label: 'Artwork approval playbook' },
      { href: '/resources/erp-selection-playbook', label: 'ERP selection playbook' },
    ],
    relatedSectors: [
      { href: '/sectors/garment-decoration', label: 'Garment decoration' },
      { href: '/sectors/print-promotional', label: 'Print & promotional' },
    ],
  },
};
