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
      id: 'invoice-tb-001',
      title: 'Invoice DO-INV-TB-001',
      type: 'invoice',
      date: '22 May 2026',
      description: '£4,625 — 50% Tier 1 + app milestone 1.',
    },
    {
      id: 'proposal-2',
      title: 'Data App Follow-On Proposal',
      type: 'proposal',
      date: 'May 2026',
      description: 'Data application follow-on scope (DO-003).',
      href: '/clients/tacklebag-v2',
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
