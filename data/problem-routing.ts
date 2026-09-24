// Internal-linking topology for /problems/* pages.
// Generated from /searchfit-seo:internal-linking analysis on 2026-05-30.
// Each problem routes to ONE service + 2-3 sibling problems + 1-2 blog posts.

export type ProblemRoute = {
  targetService: { href: string; label: string; anchor: string };
  relatedProblems: { href: string; label: string }[];
  relatedReading: { href: string; label: string }[];
  relatedSectors: { href: string; label: string }[];
  relatedResources: { href: string; label: string }[];
};

export const problemRouting: Record<string, ProblemRoute> = {
  'erp-implementation-failure': {
    targetService: {
      href: '/transform',
      label: 'ERP implementation programme',
      anchor: 'Independent oversight, vendor accountability, and a clean exit if the project isn\'t tracking, the way ERP implementation should have run from day one.',
    },
    relatedProblems: [
      { href: '/problems/wrong-erp-software', label: 'You chose the wrong ERP for your business model' },
      { href: '/problems/systems-dont-talk', label: 'Your systems don\'t talk to each other' },
      { href: '/problems/manual-workarounds', label: 'Your team is buried in manual workarounds' },
    ],
    relatedReading: [
      { href: '/resources/erp-selection-playbook', label: 'The ERP selection playbook' },
      { href: '/blog/the-real-cost-of-a-failed-erp-project', label: 'The real cost of a failed ERP project' },
      { href: '/blog/5-questions-vendors-wont-like', label: '5 questions ERP vendors won\'t like' },
    ],
    relatedSectors: [
      { href: '/sectors/labels-packaging', label: 'Labels & packaging' },
      { href: '/sectors/workwear', label: 'Workwear' },
    ],
    relatedResources: [
      { href: '/resources/erp-selection-playbook', label: 'ERP selection playbook' },
    ],
  },

  'wrong-erp-software': {
    targetService: {
      href: '/transform',
      label: 'ERP selection and implementation',
      anchor: 'Independent vendor brief, like-for-like comparison, and selection based on fit, not the demo.',
    },
    relatedProblems: [
      { href: '/problems/erp-implementation-failure', label: 'Your ERP implementation has gone wrong' },
      { href: '/problems/systems-dont-talk', label: 'Your systems don\'t talk to each other' },
    ],
    relatedReading: [
      { href: '/resources/erp-selection-playbook', label: 'The ERP selection playbook' },
      { href: '/problems/buy-vs-build', label: 'Should you build or buy your next system?' },
      { href: '/blog/5-questions-vendors-wont-like', label: '5 questions ERP vendors won\'t like' },
      { href: '/blog/the-real-cost-of-a-failed-erp-project', label: 'The real cost of a failed ERP project' },
    ],
    relatedSectors: [
      { href: '/sectors/signs-graphics', label: 'Signs & graphics' },
      { href: '/sectors/awards-engraving', label: 'Awards & engraving' },
    ],
    relatedResources: [
      { href: '/resources/erp-selection-playbook', label: 'ERP selection playbook' },
    ],
  },

  'ecommerce-not-connected': {
    targetService: {
      href: '/transform',
      label: 'eCommerce integration programme',
      anchor: 'Connect Shopify, WooCommerce or your B2B portal directly with your ERP, stock, and despatch, no spreadsheet middleware.',
    },
    relatedProblems: [
      { href: '/problems/manual-workarounds', label: 'Your team is buried in manual workarounds' },
      { href: '/problems/systems-dont-talk', label: 'Your systems don\'t talk to each other' },
      { href: '/problems/cant-scale-operations', label: 'You can\'t scale operations without breaking things' },
      { href: '/problems/legacy-system', label: 'The system is ancient' },
    ],
    relatedReading: [
      { href: '/blog/ecommerce-integration-trap', label: 'The eCommerce integration trap' },
      { href: '/blog/ralawise-integration-bulk-orders-stock-management', label: 'Ralawise integration: automating wholesale orders' },
    ],
    relatedSectors: [
      { href: '/sectors/garment-decoration', label: 'Garment decoration' },
      { href: '/sectors/workwear', label: 'Workwear' },
    ],
    relatedResources: [
      { href: '/resources/erp-selection-playbook', label: 'ERP selection playbook' },
    ],
  },

  'disaster-recovery': {
    targetService: {
      href: '/retained',
      label: 'Retained operational oversight',
      anchor: 'A fractional CTO who owns your continuity plan, tested, current, and ready before the crisis, not during.',
    },
    relatedProblems: [
      { href: '/problems/systems-dont-talk', label: 'Your systems don\'t talk to each other' },
      { href: '/problems/no-ops-owner', label: 'No one owns operations from start to finish' },
      { href: '/problems/ops-in-owners-head', label: 'It\'s all in the owner\'s head' },
    ],
    relatedReading: [
      { href: '/blog/what-happens-when-your-systems-go-down', label: 'What happens when your systems go down?' },
    ],
    relatedSectors: [
      { href: '/sectors/workwear', label: 'Workwear' },
      { href: '/sectors/garment-decoration', label: 'Garment decoration' },
    ],
    relatedResources: [
      { href: '/tools/rto-calculator', label: 'RTO calculator' },
    ],
  },

  'no-ops-owner': {
    targetService: {
      href: '/retained',
      label: 'Fractional Head of Operations',
      anchor: 'Senior operational leadership without the £80k+ salary, vendor management, roadmap ownership, weekly direct line.',
    },
    relatedProblems: [
      { href: '/problems/cant-scale-operations', label: 'You can\'t scale operations without breaking things' },
      { href: '/problems/slow-processes', label: 'Your processes are too slow' },
    ],
    relatedReading: [
      { href: '/blog/why-systems-dont-talk', label: 'Why systems don\'t talk' },
    ],
    relatedSectors: [
      { href: '/sectors/awards-engraving', label: 'Awards & engraving' },
      { href: '/sectors/labels-packaging', label: 'Labels & packaging' },
    ],
    relatedResources: [
      { href: '/tools/ops-health-score', label: 'Ops health score' },
    ],
  },

  'manual-workarounds': {
    targetService: {
      href: '/transform',
      label: 'Process redesign and automation',
      anchor: 'Full-process mapping, fixing it before automating it, and eliminating the spreadsheet bridges that have become the real operating model.',
    },
    relatedProblems: [
      { href: '/problems/systems-dont-talk', label: 'Your systems don\'t talk to each other' },
      { href: '/problems/slow-processes', label: 'Your processes are too slow' },
      { href: '/problems/cant-scale-operations', label: 'You can\'t scale operations without breaking things' },
    ],
    relatedReading: [
      { href: '/blog/ai-isnt-your-problem-your-processes-are', label: 'AI isn\'t your problem. Your processes are.' },
    ],
    relatedSectors: [
      { href: '/sectors/garment-decoration', label: 'Garment decoration' },
      { href: '/sectors/print-promotional', label: 'Print & promotional' },
    ],
    relatedResources: [
      { href: '/resources/sop-template', label: 'SOP template for decoration businesses' },
    ],
  },

  'ai-paralysis': {
    targetService: {
      href: '/clarity',
      label: 'Technology & operations audit (start here)',
      anchor: 'One day on site. Six areas. A written report that tells you what AI could actually help with, and what to fix first.',
    },
    relatedProblems: [
      { href: '/problems/manual-workarounds', label: 'Your team is buried in manual workarounds' },
      { href: '/problems/systems-dont-talk', label: 'Your systems don\'t talk to each other' },
    ],
    relatedReading: [
      { href: '/blog/ai-isnt-your-problem-your-processes-are', label: 'AI isn\'t your problem. Your processes are.' },
    ],
    relatedSectors: [
      { href: '/sectors/signs-graphics', label: 'Signs & graphics' },
      { href: '/sectors/labels-packaging', label: 'Labels & packaging' },
    ],
    relatedResources: [
      { href: '/tools/ops-health-score', label: 'Ops health score' },
      { href: '/resources/decoded-method', label: 'The Decoded Method' },
    ],
  },

  'systems-dont-talk': {
    targetService: {
      href: '/transform',
      label: 'ERP and systems integration',
      anchor: 'Connect the systems that should be talking, clean the data, and eliminate the manual re-keying that is silently costing you a senior salary every year.',
    },
    relatedProblems: [
      { href: '/problems/ecommerce-not-connected', label: 'Your eCommerce isn\'t connected to operations' },
      { href: '/problems/manual-workarounds', label: 'Your team is buried in manual workarounds' },
      { href: '/problems/legacy-system', label: 'The system is ancient' },
    ],
    relatedReading: [
      { href: '/blog/why-systems-dont-talk', label: 'Why systems don\'t talk (and what it costs)' },
    ],
    relatedSectors: [
      { href: '/sectors/garment-decoration', label: 'Garment decoration' },
      { href: '/sectors/workwear', label: 'Workwear' },
    ],
    relatedResources: [
      { href: '/resources/erp-selection-playbook', label: 'ERP selection playbook' },
    ],
  },

  'slow-processes': {
    targetService: {
      href: '/clarity',
      label: 'Operational audit',
      anchor: 'A structured one-day audit that finds the friction. Process mapping from order in to invoice out. Quick wins separated from bigger projects.',
    },
    relatedProblems: [
      { href: '/problems/manual-workarounds', label: 'Your team is buried in manual workarounds' },
      { href: '/problems/cant-scale-operations', label: 'You can\'t scale operations without breaking things' },
      { href: '/problems/spreadsheet-addiction', label: 'Running the business on spreadsheets' },
    ],
    relatedReading: [
      { href: '/blog/ai-isnt-your-problem-your-processes-are', label: 'AI isn\'t your problem. Your processes are.' },
    ],
    relatedSectors: [
      { href: '/sectors/print-promotional', label: 'Print & promotional' },
      { href: '/sectors/garment-decoration', label: 'Garment decoration' },
    ],
    relatedResources: [
      { href: '/resources/sop-template', label: 'SOP template for decoration businesses' },
    ],
  },

  'cant-scale-operations': {
    targetService: {
      href: '/retained',
      label: 'Retained operational leadership',
      anchor: 'A fractional CTO/Head of Operations who builds the operational infrastructure that fits how your business actually works, not a generic playbook.',
    },
    relatedProblems: [
      { href: '/problems/no-ops-owner', label: 'No one owns operations from start to finish' },
      { href: '/problems/manual-workarounds', label: 'Your team is buried in manual workarounds' },
      { href: '/problems/slow-processes', label: 'Your processes are too slow' },
    ],
    relatedReading: [
      { href: '/blog/why-systems-dont-talk', label: 'Why systems don\'t talk' },
    ],
    relatedSectors: [
      { href: '/sectors/workwear', label: 'Workwear' },
      { href: '/sectors/teamwear-clubwear', label: 'Teamwear & clubwear' },
    ],
    relatedResources: [
      { href: '/tools/ops-health-score', label: 'Ops health score' },
    ],
  },

  'spreadsheet-addiction': {
    targetService: {
      href: '/clarity',
      label: 'Process & Quality System',
      anchor: 'Documented processes that live outside anyone\'s laptop, replacing the spreadsheet dependency with something everyone can trust.',
    },
    relatedProblems: [
      { href: '/problems/data-scattered', label: 'The numbers never agree' },
      { href: '/problems/ops-in-owners-head', label: 'It\'s all in the owner\'s head' },
      { href: '/problems/manual-workarounds', label: 'Everyone has their own workaround' },
    ],
    relatedReading: [
      { href: '/blog/ai-isnt-your-problem-your-processes-are', label: 'AI isn\'t your problem. Your processes are.' },
    ],
    relatedSectors: [
      { href: '/sectors/awards-engraving', label: 'Awards & engraving' },
      { href: '/sectors/signs-graphics', label: 'Signs & graphics' },
    ],
    relatedResources: [
      { href: '/resources/sop-template', label: 'SOP template for decoration businesses' },
    ],
  },

  'inventory-blind': {
    targetService: {
      href: '/transform',
      label: 'Data App and supplier integration',
      anchor: 'One real-time stock picture built from your supplier feeds, so you stop ordering stock you already have and running out of what you didn\'t.',
    },
    relatedProblems: [
      { href: '/problems/spreadsheet-addiction', label: 'Running the business on spreadsheets' },
      { href: '/problems/data-scattered', label: 'The numbers never agree' },
      { href: '/problems/ops-in-owners-head', label: 'It\'s all in the owner\'s head' },
    ],
    relatedReading: [
      { href: '/blog/why-systems-dont-talk', label: 'Why systems don\'t talk' },
    ],
    relatedSectors: [
      { href: '/sectors/workwear', label: 'Workwear' },
      { href: '/sectors/print-promotional', label: 'Print & promotional' },
    ],
    relatedResources: [
      { href: '/tools/ops-health-score', label: 'Ops health score' },
    ],
  },

  'ops-in-owners-head': {
    targetService: {
      href: '/retained',
      label: 'Fractional Head of Operations',
      anchor: 'Senior operational leadership that documents what only one person knows, builds the processes, and makes the business runnable without them.',
    },
    relatedProblems: [
      { href: '/problems/no-ops-owner', label: 'Nobody owns operations' },
      { href: '/problems/spreadsheet-addiction', label: 'Running the business on spreadsheets' },
      { href: '/problems/legacy-system', label: 'The system is ancient' },
    ],
    relatedReading: [
      { href: '/blog/why-systems-dont-talk', label: 'Why systems don\'t talk' },
    ],
    relatedSectors: [
      { href: '/sectors/awards-engraving', label: 'Awards & engraving' },
      { href: '/sectors/signs-graphics', label: 'Signs & graphics' },
    ],
    relatedResources: [
      { href: '/resources/sop-template', label: 'SOP template for decoration businesses' },
    ],
  },

  'legacy-system': {
    targetService: {
      href: '/clarity',
      label: 'Technology & operations audit',
      anchor: 'A structured one-day audit that maps what the legacy system actually does, what it would take to replace, and whether fixing parts of it first makes sense.',
    },
    relatedProblems: [
      { href: '/problems/wrong-erp-software', label: 'The wrong software for your business' },
      { href: '/problems/buy-vs-build', label: 'Buy it or build it?' },
      { href: '/problems/no-ops-owner', label: 'Nobody owns operations' },
    ],
    relatedReading: [
      { href: '/resources/erp-selection-playbook', label: 'The ERP selection playbook' },
    ],
    relatedSectors: [
      { href: '/sectors/labels-packaging', label: 'Labels & packaging' },
      { href: '/sectors/awards-engraving', label: 'Awards & engraving' },
    ],
    relatedResources: [
      { href: '/resources/erp-selection-playbook', label: 'ERP selection playbook' },
    ],
  },

  'buy-vs-build': {
    targetService: {
      href: '/clarity',
      label: 'Technology & operations audit',
      anchor: 'A structured assessment that compares off-the-shelf against custom, with real numbers on cost, timeline, and fit, not vendor sales decks.',
    },
    relatedProblems: [
      { href: '/problems/wrong-erp-software', label: 'The wrong software for your business' },
      { href: '/problems/legacy-system', label: 'The system is ancient' },
      { href: '/problems/systems-dont-talk', label: 'Systems that don\'t talk to each other' },
    ],
    relatedReading: [
      { href: '/resources/erp-selection-playbook', label: 'The ERP selection playbook' },
    ],
    relatedSectors: [
      { href: '/sectors/garment-decoration', label: 'Garment decoration' },
      { href: '/sectors/workwear', label: 'Workwear' },
    ],
    relatedResources: [
      { href: '/resources/erp-selection-playbook', label: 'ERP selection playbook' },
    ],
  },

  'seasonal-peaks': {
    targetService: {
      href: '/retained',
      label: 'Retained operational leadership',
      anchor: 'Seasonal planning that starts months before the peak, capacity review, automation of the repeatable, and someone accountable for the ramp.',
    },
    relatedProblems: [
      { href: '/problems/cant-scale-operations', label: 'Can\'t scale operations' },
      { href: '/problems/inventory-blind', label: 'No real visibility of stock' },
      { href: '/problems/slow-processes', label: 'Production is too slow' },
    ],
    relatedReading: [
      { href: '/blog/why-systems-dont-talk', label: 'Why systems don\'t talk' },
    ],
    relatedSectors: [
      { href: '/sectors/teamwear-clubwear', label: 'Teamwear & clubwear' },
      { href: '/sectors/garment-decoration', label: 'Garment decoration' },
    ],
    relatedResources: [
      { href: '/tools/ops-health-score', label: 'Ops health score' },
    ],
  },

  'data-scattered': {
    targetService: {
      href: '/transform',
      label: 'Data consolidation and integration',
      anchor: 'One source of truth built from the systems you have, replacing the spreadsheets and the arguments about which number is right.',
    },
    relatedProblems: [
      { href: '/problems/spreadsheet-addiction', label: 'Running the business on spreadsheets' },
      { href: '/problems/systems-dont-talk', label: 'Systems that don\'t talk' },
      { href: '/problems/inventory-blind', label: 'No real visibility of stock' },
    ],
    relatedReading: [
      { href: '/blog/why-systems-dont-talk', label: 'Why systems don\'t talk' },
    ],
    relatedSectors: [
      { href: '/sectors/workwear', label: 'Workwear' },
      { href: '/sectors/schoolwear', label: 'Schoolwear' },
    ],
    relatedResources: [
      { href: '/tools/ops-health-score', label: 'Ops health score' },
    ],
  },

  'bottleneck-growth': {
    targetService: {
      href: '/retained',
      label: 'Fractional Head of Operations',
      anchor: 'Operational leadership that removes the bottleneck, documents the processes, and builds the infrastructure for the next stage of growth.',
    },
    relatedProblems: [
      { href: '/problems/cant-scale-operations', label: 'Can\'t scale operations' },
      { href: '/problems/no-ops-owner', label: 'Nobody owns operations' },
      { href: '/problems/slow-processes', label: 'Production is too slow' },
      { href: '/problems/ops-in-owners-head', label: 'It\'s all in the owner\'s head' },
    ],
    relatedReading: [
      { href: '/blog/why-systems-dont-talk', label: 'Why systems don\'t talk' },
    ],
    relatedSectors: [
      { href: '/sectors/garment-decoration', label: 'Garment decoration' },
      { href: '/sectors/print-promotional', label: 'Print & promotional' },
    ],
    relatedResources: [
      { href: '/resources/decoded-method', label: 'The Decoded Method' },
    ],
  },
};
