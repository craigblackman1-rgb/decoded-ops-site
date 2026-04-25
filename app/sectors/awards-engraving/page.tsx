import type { Metadata } from 'next';
import { SectorPage } from '@/components/SectorPage';
import { WorkflowGraphic } from '@/components/graphics/WorkflowGraphic';

export const metadata: Metadata = {
  title: 'Awards & Engraving Technology | Decoded Ops',
  description: 'Technology and operations consultancy for awards and engraving businesses. Systems audit, project delivery, and fractional CTO support.',
  alternates: { canonical: '/sectors/awards-engraving' },
};

const workflow = (
  <WorkflowGraphic
    title="Awards & engraving order flow"
    steps={[
      { label: 'Order in', sub: 'Event / volume' },
      { label: 'Variable data', sub: 'Names & wording', alert: true },
      { label: 'Proof sign-off', sub: 'Client approval' },
      { label: 'Engraving', sub: 'Machine schedule' },
      { label: 'QC check', sub: 'Every unit' },
      { label: 'Event despatch', sub: 'Deadline critical' },
    ]}
  />
);

export default function AwardsEngravingPage() {
  return (
    <SectorPage
      sector="Awards & engraving"
      tagline="Personalisation at scale is operationally complex. ||Most awards businesses are still solving it manually.||"
      intro="Variable data, bespoke personalisation, and tight event deadlines make awards and engraving one of the most operationally demanding niches in the decorated products sector."
      heroGraphic={workflow}
      challenges={[
        { title: 'Variable data management', body: "Every award is different. Managing the variable data — names, titles, dates, messages — from customer submission through to engraving or print without errors requires systems and processes that most businesses in this sector don't have." },
        { title: 'Event deadline pressure', body: "Awards are almost always needed for a specific event. The tolerance for lateness is zero. Production scheduling has to account for that — and most systems don't." },
        { title: 'Product range complexity', body: "Glass, crystal, metal, wood, acrylic — each with its own engraving method, its own minimum order requirements, and its own lead time from suppliers. Managing that complexity accurately is a constant challenge." },
        { title: 'Proof and approval at volume', body: "When an order contains 50 personalised items and each one needs a client-approved proof, the proof management process can easily consume more time than the production itself." },
      ]}
      whatIdo={[
        'Audit your variable data intake and verification process end to end',
        'Review your production scheduling approach for event-deadline management',
        'Map the proof and approval workflow and identify where it\'s creating bottlenecks',
        'Assess your supplier and product data management for the range you carry',
        'Identify technology solutions built for variable data personalisation workflows',
        'Quantify the cost of current manual processes and proof-related rework',
      ]}
      cta="Find out what your personalisation workflow is really costing you"
    />
  );
}
