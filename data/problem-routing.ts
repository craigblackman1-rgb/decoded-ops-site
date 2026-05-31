// Internal-linking topology for /problems/* pages.
// Generated from /searchfit-seo:internal-linking analysis on 2026-05-30.
// Each problem routes to ONE service + 2-3 sibling problems + 1-2 blog posts.
// Anchor text = destination's primary keyword wherever possible.

export type ProblemRoute = {
  targetService: { href: string; label: string; anchor: string };
  relatedProblems: { href: string; label: string }[];
  relatedReading: { href: string; label: string }[];
};

export const problemRouting: Record<string, ProblemRoute> = {
  'erp-implementation-failure': {
    targetService: {
      href: '/transform',
      label: 'ERP implementation programme',
      anchor: 'Independent oversight, vendor accountability, and a clean exit if the project isn\'t tracking — the way ERP implementation should have run from day one.',
    },
    relatedProblems: [
      { href: '/problems/wrong-erp-software', label: 'You chose the wrong ERP for your business model' },
      { href: '/problems/systems-dont-talk', label: 'Your systems don\'t talk to each other' },
      { href: '/problems/manual-workarounds', label: 'Your team is buried in manual workarounds' },
    ],
    relatedReading: [
      { href: '/blog/the-real-cost-of-a-failed-erp-project', label: 'The real cost of a failed ERP project' },
      { href: '/blog/5-questions-vendors-wont-like', label: '5 questions ERP vendors won\'t like' },
    ],
  },

  'wrong-erp-software': {
    targetService: {
      href: '/transform',
      label: 'ERP selection and implementation',
      anchor: 'Independent vendor brief, like-for-like comparison, and selection based on fit — not the demo.',
    },
    relatedProblems: [
      { href: '/problems/erp-implementation-failure', label: 'Your ERP implementation has gone wrong' },
      { href: '/problems/systems-dont-talk', label: 'Your systems don\'t talk to each other' },
    ],
    relatedReading: [
      { href: '/blog/5-questions-vendors-wont-like', label: '5 questions ERP vendors won\'t like' },
      { href: '/blog/the-real-cost-of-a-failed-erp-project', label: 'The real cost of a failed ERP project' },
    ],
  },

  'ecommerce-not-connected': {
    targetService: {
      href: '/transform',
      label: 'eCommerce integration programme',
      anchor: 'Connect Shopify, WooCommerce or your B2B portal end-to-end with your ERP, stock, and despatch — no spreadsheet middleware.',
    },
    relatedProblems: [
      { href: '/problems/manual-workarounds', label: 'Your team is buried in manual workarounds' },
      { href: '/problems/systems-dont-talk', label: 'Your systems don\'t talk to each other' },
      { href: '/problems/cant-scale-operations', label: 'You can\'t scale operations without breaking things' },
    ],
    relatedReading: [
      { href: '/blog/ecommerce-integration-trap', label: 'The eCommerce integration trap' },
      { href: '/blog/ralawise-integration', label: 'Ralawise integration: automating wholesale orders' },
    ],
  },

  'disaster-recovery': {
    targetService: {
      href: '/retained',
      label: 'Retained operational oversight',
      anchor: 'A fractional CTO who owns your continuity plan — tested, current, and ready before the crisis, not during.',
    },
    relatedProblems: [
      { href: '/problems/systems-dont-talk', label: 'Your systems don\'t talk to each other' },
      { href: '/problems/no-ops-owner', label: 'No one owns operations end-to-end' },
    ],
    relatedReading: [
      { href: '/blog/what-happens-when-your-systems-go-down', label: 'What happens when your systems go down?' },
    ],
  },

  'no-ops-owner': {
    targetService: {
      href: '/retained',
      label: 'Fractional Head of Operations',
      anchor: 'Senior operational leadership without the £80k+ salary — vendor management, roadmap ownership, weekly direct line.',
    },
    relatedProblems: [
      { href: '/problems/cant-scale-operations', label: 'You can\'t scale operations without breaking things' },
      { href: '/problems/slow-processes', label: 'Your processes are too slow' },
    ],
    relatedReading: [
      { href: '/blog/why-systems-dont-talk', label: 'Why systems don\'t talk' },
    ],
  },

  'manual-workarounds': {
    targetService: {
      href: '/transform',
      label: 'Process redesign and automation',
      anchor: 'End-to-end mapping, fixing the process before automating it, and eliminating the spreadsheet bridges that have become the real operating model.',
    },
    relatedProblems: [
      { href: '/problems/systems-dont-talk', label: 'Your systems don\'t talk to each other' },
      { href: '/problems/slow-processes', label: 'Your processes are too slow' },
      { href: '/problems/cant-scale-operations', label: 'You can\'t scale operations without breaking things' },
    ],
    relatedReading: [
      { href: '/blog/ai-isnt-your-problem-your-processes-are', label: 'AI isn\'t your problem. Your processes are.' },
    ],
  },

  'ai-paralysis': {
    targetService: {
      href: '/clarity',
      label: 'Technology & operations audit (start here)',
      anchor: 'One day on site. Six areas. A written report that tells you what AI could actually help with — and what to fix first.',
    },
    relatedProblems: [
      { href: '/problems/manual-workarounds', label: 'Your team is buried in manual workarounds' },
      { href: '/problems/systems-dont-talk', label: 'Your systems don\'t talk to each other' },
    ],
    relatedReading: [
      { href: '/blog/ai-isnt-your-problem-your-processes-are', label: 'AI isn\'t your problem. Your processes are.' },
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
    ],
    relatedReading: [
      { href: '/blog/why-systems-dont-talk', label: 'Why systems don\'t talk (and what it costs)' },
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
    ],
    relatedReading: [
      { href: '/blog/ai-isnt-your-problem-your-processes-are', label: 'AI isn\'t your problem. Your processes are.' },
    ],
  },

  'cant-scale-operations': {
    targetService: {
      href: '/retained',
      label: 'Retained operational leadership',
      anchor: 'A fractional CTO/Head of Operations who builds the operational infrastructure that fits how your business actually works — not a generic playbook.',
    },
    relatedProblems: [
      { href: '/problems/no-ops-owner', label: 'No one owns operations end-to-end' },
      { href: '/problems/manual-workarounds', label: 'Your team is buried in manual workarounds' },
      { href: '/problems/slow-processes', label: 'Your processes are too slow' },
    ],
    relatedReading: [
      { href: '/blog/why-systems-dont-talk', label: 'Why systems don\'t talk' },
    ],
  },
};
