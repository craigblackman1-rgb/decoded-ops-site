import type { Metadata } from 'next';
import { SectorPage } from '@/components/SectorPage';
import { WorkflowGraphic } from '@/components/graphics/WorkflowGraphic';

export const metadata: Metadata = {
  title: 'Print & Promotional Technology | Decoded Ops',
  description: 'Technology and operations consultancy for print and promotional businesses. Systems audit, project delivery, and fractional CTO support.',
  alternates: { canonical: '/sectors/print-promotional' },
};

const workflow = (
  <WorkflowGraphic
    title="Print & promo order flow"
    steps={[
      { label: 'Quote request', sub: 'Multi-line order' },
      { label: 'Supplier brief', sub: 'Price & lead time' },
      { label: 'Sample & proof', sub: 'Approval loop', alert: true },
      { label: 'PO raised', sub: 'Supplier confirm' },
      { label: 'Goods in', sub: 'QC check' },
      { label: 'Pack & ship', sub: 'Client delivery' },
    ]}
  />
);

export default function PrintPromotionalPage() {
  return (
    <SectorPage
      sector="Print & promotional"
      tagline="Printed merchandise has margins too thin to absorb ||the operational waste you can't see.||"
      intro="In promotional merchandise, margin compression is constant. The businesses that survive and grow are the ones whose systems are tight enough to protect margin at every step of the order process."
      heroGraphic={workflow}
      challenges={[
        { title: 'Product complexity at volume', body: "A single client order can contain 40 different product lines, each with its own supplier, specification, and lead time. Managing that manually — or in a system not built for it — is a permanent drag on margin." },
        { title: 'Supplier fragmentation', body: "Multiple suppliers, multiple portals, multiple confirmation processes. The administrative overhead of managing incoming goods is often invisible in the P&L — but it's real." },
        { title: 'The sample and approval cycle', body: "Pre-production samples, client approvals, artwork sign-off. Every step that happens outside your system is a step that can't be measured, tracked, or optimised." },
        { title: 'Quote-to-order conversion costs', body: "How much does it cost you to produce a quote? How much of that time converts to an order? Most businesses in this sector have never measured it — and the answer is usually uncomfortable." },
      ]}
      whatIdo={[
        'Audit your order intake and quote process for hidden time cost',
        'Map the full supplier management workflow from order to receipt',
        'Identify where sample and approval processes are creating delay',
        'Review your product data management and supplier pricing model',
        'Assess your technology stack for integration gaps and manual workarounds',
        'Quantify the real cost of every inefficiency found',
      ]}
      cta="Find out where your margin is going"
    />
  );
}
