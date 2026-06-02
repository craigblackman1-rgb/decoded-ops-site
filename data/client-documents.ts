export interface ClientDoc {
  id: string
  title: string
  type: 'proposal' | 'invoice' | 'report' | 'document'
  date: string
  description: string
  href?: string
}

export const clientDocuments: Record<string, ClientDoc[]> = {
  tacklebag: [
    {
      id: 'proposal-1',
      title: 'Operations Transformation Proposal',
      type: 'proposal',
      date: 'May 2026',
      description: '12-month operations transformation roadmap — Tier 1 engagement with Stock Control App build.',
      href: '/clients/tacklebag',
    },
    {
      id: 'proposal-2',
      title: 'Data App Follow-On Proposal',
      type: 'proposal',
      date: 'May 2026',
      description: 'Data application follow-on scope (DO-003).',
      href: '/clients/tacklebag-v2',
    },
    {
      id: 'engagement-letter',
      title: 'Engagement Letter',
      type: 'document',
      date: '22 May 2026',
      description: 'Signed engagement letter — Peak Season Readiness & Stock Control App.',
      href: '/client-docs/tacklebag/engagement-letter.html',
    },
    {
      id: 'invoice-tb-001',
      title: 'Invoice DO-INV-TB-001',
      type: 'invoice',
      date: '22 May 2026',
      description: '£4,625 — 50% Tier 1 + app milestone 1. Due 25 May 2026.',
      href: '/client-docs/tacklebag/invoice-tb-001.html',
    },
    {
      id: 'invoice-do-003',
      title: 'Invoice DO-003',
      type: 'invoice',
      date: 'May 2026',
      description: 'Data app follow-on — scope TBC.',
      href: '/client-docs/tacklebag/invoice-do-003.html',
    },
    {
      id: 'terms-conditions',
      title: 'Standard Terms & Conditions',
      type: 'document',
      date: 'May 2026',
      description: 'Decoded Ops standard terms and conditions of engagement.',
      href: '/client-docs/tacklebag/terms-conditions.html',
    },
  ],
  'cobra-workwear': [
    {
      id: 'prop-cobra-1',
      title: 'Operational Clarity Proposal',
      type: 'proposal',
      date: 'May 2026',
      description: 'Operational Clarity Audit — Infrastructure, ERP, eCommerce & B2B Portal.',
      href: '/clients/cobra-workwear',
    },
  ],
  hanicks: [
    {
      id: 'prop-hanicks-1',
      title: 'eCommerce Operations & Technology Programme',
      type: 'proposal',
      date: 'May 2026',
      description: '3-month programme — IBasis App build, Khaos Control implementation, multi-channel automation.',
      href: '/clients/hanicks',
    },
  ],
  cwear: [
    {
      id: 'prop-cwear-1',
      title: 'ERP Migration Discovery Proposal',
      type: 'proposal',
      date: 'May 2026',
      description: 'ERP Migration Discovery — Visualsoft to BlueCherry or alternative.',
      href: '/clients/cwear',
    },
  ],
  scotshirts: [
    {
      id: 'prop-scotshirts-1',
      title: 'Proposal',
      type: 'proposal',
      date: '2026',
      description: 'Engagement proposal.',
      href: '/clients/scotshirts',
    },
    {
      id: 'scotshirts-discovery-report',
      title: 'Discovery Visit Report — June 2026',
      type: 'report',
      date: '2 June 2026',
      description: 'Summary of findings and priority actions from the on-site discovery visit in Edinburgh.',
      href: '/client-docs/scotshirts/discovery-report.html',
    },
  ],
}

export function getClientDocuments(clientId: string): ClientDoc[] {
  return clientDocuments[clientId] || []
}

export function getAllClients(): { clientId: string; name: string }[] {
  const names: Record<string, string> = {
    tacklebag: 'TackleBag',
    'cobra-workwear': 'Cobra Workwear',
    hanicks: 'Hanicks Ltd',
    cwear: 'Corporatewear UK (Cwear)',
    scotshirts: 'ScotShirts',
  }
  return Object.keys(clientDocuments).map((clientId) => ({
    clientId,
    name: names[clientId] || clientId,
  }))
}
