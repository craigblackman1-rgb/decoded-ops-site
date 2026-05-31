import type { Metadata } from 'next';
import { SectorPage } from '@/components/SectorPage';
import { WorkflowGraphic } from '@/components/graphics/WorkflowGraphic';
import { JsonLd } from '@/components/JsonLd';
import { sectorRouting } from '@/data/sector-routing';

export const metadata: Metadata = {
  title: 'Workwear & Teamwear Supplier Operations | Decoded Ops',
  description: 'Operations and technology consultancy for workwear and teamwear businesses. B2B customer portals, ERP selection, stock management, and multi-site operations — independent advice, no vendor agenda.',
  alternates: { canonical: '/sectors/workwear-teamwear' },
  openGraph: {
    title: 'Workwear & Teamwear Supplier Operations | Decoded Ops',
    description: 'Operations and technology consultancy for workwear and teamwear businesses. B2B customer portals, ERP selection, stock management, and multi-site operations — independent advice, no vendor agenda.',
    url: 'https://decodedops.co.uk/sectors/workwear-teamwear',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Workwear & Teamwear Supplier Operations | Decoded Ops',
    description: 'Operations and technology consultancy for workwear and teamwear businesses. B2B customer portals, ERP selection, stock management, and multi-site operations — independent advice, no vendor agenda.',
  },
};

const sectorSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://decodedops.co.uk/sectors/workwear-teamwear#webpage',
      url: 'https://decodedops.co.uk/sectors/workwear-teamwear',
      name: 'Workwear Supplier Operations & Systems Consultant | Decoded Ops',
      description: 'Technology and operations consultancy for workwear and teamwear suppliers. B2B order management, multi-location inventory, and wholesale order systems.',
      isPartOf: { '@id': 'https://decodedops.co.uk/#organization' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What systems does a workwear supplier need?',
          acceptedAnswer: { '@type': 'Answer', text: 'A workwear supplier typically needs a B2B ordering portal for corporate customers, a wholesale order management system integrated with production, multi-location inventory management, contract pricing management, and ERP integration that handles split shipments and account invoicing. The specific stack depends on volume, customer mix, and decoration methods used.' },
        },
        {
          '@type': 'Question',
          name: 'How do I set up a B2B portal for a workwear business?',
          acceptedAnswer: { '@type': 'Answer', text: 'A workwear B2B portal implementation starts with understanding the customer journey — how accounts order, what they need to see, and how the portal connects to your production and despatch workflow. Platforms like OrderWise, PANTA, and bespoke solutions all offer B2B capability, but the integration with your back-end is what determines whether it actually reduces admin or just adds another system to manage.' },
        },
      ],
    },
  ],
};

const workflow = (
  <WorkflowGraphic
    title="Workwear managed account flow"
    steps={[
      { label: 'Account setup', sub: 'Spec & pricing' },
      { label: 'Online shop', sub: 'Portal order in', alert: true },
      { label: 'Approval check', sub: 'Budget / auth' },
      { label: 'Production', sub: 'Spec to machine' },
      { label: 'Quality check', sub: 'Spec vs output' },
      { label: 'Despatch', sub: 'Named delivery' },
    ]}
  />
);

export default function WorkwearTeamwearPage() {
  return (
    <>
      <JsonLd data={sectorSchema} />
      <SectorPage
      sector="Workwear & teamwear"
      tagline="Workwear supplier operations ||need systems built for B2B, not B2C.||"
      intro="Workwear and teamwear suppliers operate in a fundamentally different mode from retail decoration businesses. B2B order management, multi-location delivery, contract pricing, and account portals are the norm — not the exception. Most generic eCommerce and ERP systems were not designed for this. The operational complexity of a workwear supplier requires systems that understand B2B."
      heroGraphic={workflow}
      challenges={[
        { title: 'Managed account complexity', body: "Each managed account has its own pricing, its own approved products, its own approval hierarchy, and its own delivery rules. Managing that at scale requires systems specifically built for it — not workarounds in a generic platform." },
        { title: 'The uniform specification problem', body: "Keeping embroidery specifications, sizing matrices, and decoration requirements accurate across hundreds of SKUs per client is an enormous data management challenge. One wrong spec means a rerun." },
        { title: 'Online shop management', body: "Corporate online shops promise efficiency but often create more administration than they save — if the backend isn't connected to your production and despatch systems properly." },
        { title: 'Re-order and replenishment', body: "Repeat orders should be the simplest part of the workwear business. They're often the most error-prone — because the original order data isn't held in a way that makes re-ordering reliable." },
        { title: 'B2B customer portal and wholesale order system', body: "Corporate and contract customers expect to order online, manage their account, and track their orders without calling you. A wholesale order system that integrates with your production and ERP is what makes this possible at scale. Without it, your account management team is doing manually what a portal would handle automatically." },
        { title: 'Multi-location inventory and despatch', body: "Workwear for large corporate accounts often means multiple delivery locations, different size runs per site, and complex split-shipment logistics. Multi-location inventory management has to be part of your system design — not a workaround built in spreadsheets." },
      ]}
      whatIdo={[
        'Audit your managed account setup process and ongoing administration burden',
        'Review your product data and specification management across client accounts',
        'Assess your online shop infrastructure and back-end integration',
        'Map the re-order and replenishment process for inefficiencies',
        'Identify where client-specific pricing and approval rules are creating manual overhead',
        'Produce independent recommendations for technology that actually supports this model',
      ]}
      cta="Find out what your managed accounts are really costing you to run"
    
      slug="workwear-teamwear"
      targetService={sectorRouting['workwear-teamwear'].targetService}
      relatedProblems={sectorRouting['workwear-teamwear'].relatedProblems}
    />
    </>
  );
}
