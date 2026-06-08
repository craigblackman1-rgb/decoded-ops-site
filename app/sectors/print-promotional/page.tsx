import type { Metadata } from 'next';
import { SectorPage } from '@/components/SectorPage';
import { WorkflowGraphic } from '@/components/graphics/WorkflowGraphic';
import { JsonLd } from '@/components/JsonLd';
import { sectorRouting } from '@/data/sector-routing';

export const metadata: Metadata = {
  title: 'Print & Promotional Merchandise Operations | Decoded Ops',
  description: 'Operations and technology consultancy for print and promotional merchandise businesses. Production scheduling, order management, artwork approval workflow, and eCommerce integration.',
  alternates: { canonical: '/sectors/print-promotional' },
  openGraph: {
    title: 'Print & Promotional Merchandise Operations | Decoded Ops',
    description: 'Operations and technology consultancy for print and promotional merchandise businesses. Production scheduling, order management, artwork approval workflow, and eCommerce integration.',
    url: 'https://decodedops.co.uk/sectors/print-promotional',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Print & Promotional Merchandise Operations | Decoded Ops',
    description: 'Operations and technology consultancy for print and promotional merchandise businesses. Production scheduling, order management, artwork approval workflow, and eCommerce integration.',
  },
};

const sectorSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://decodedops.co.uk/sectors/print-promotional#webpage',
      url: 'https://decodedops.co.uk/sectors/print-promotional',
      name: 'Print Shop Operations Management & Systems Consultant | Decoded Ops',
      description: 'Technology and operations consultancy for print shops and promotional merchandise businesses.',
      isPartOf: { '@id': 'https://decodedops.co.uk/#organization' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What software does a print shop need for operations management?',
          acceptedAnswer: { '@type': 'Answer', text: 'A print shop typically needs: production scheduling software that accounts for method and substrate; artwork management and approval software; an order management or MIS system; eCommerce integration if selling online; and invoicing connected to production. The specific system depends on your print methods, run lengths, and customer mix.' },
        },
        {
          '@type': 'Question',
          name: 'How do I improve my print shop\'s artwork approval workflow?',
          acceptedAnswer: { '@type': 'Answer', text: 'Start by mapping the current approval process step by step — from artwork received to sign-off confirmed. Most print shops lose 2–3 days per job in the approval loop because it relies on email and manual chasing. Artwork management software that automates proof delivery, revision tracking, and sign-off confirmation can reduce that loop to hours without changing the production process.' },
        },
      ],
    },
  ],
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
    <>
      <JsonLd data={sectorSchema} />
      <SectorPage
      sector="Print & promotional"
      tagline="Print shop operations management ||starts with understanding what your current process actually costs.||"
      intro="Print and promotional merchandise businesses face a specific combination of challenges: short run lengths, rapid turnaround expectations, complex artwork approval workflows, and production scheduling software that was designed for longer runs. The result is operational friction that shows up as missed deadlines, re-work, and customer complaints — even when the team is working hard."
      heroGraphic={workflow}
      challenges={[
        { title: 'Product complexity at volume', body: "A single client order can contain 40 different product lines, each with its own supplier, specification, and lead time. Managing that manually — or in a system not built for it — is a permanent drag on margin." },
        { title: 'Supplier fragmentation', body: "Multiple suppliers, multiple portals, multiple confirmation processes. The administrative overhead of managing incoming goods is often invisible in the P&L — but it's real." },
        { title: 'The sample and approval cycle', body: "Pre-production samples, client approvals, artwork sign-off. Every step that happens outside your system is a step that can't be measured, tracked, or optimised." },
        { title: 'Quote-to-order conversion costs', body: "How much does it cost you to produce a quote? How much of that time converts to an order? Most businesses in this sector have never measured it — and the answer is usually uncomfortable." },
        { title: 'Artwork approval workflow', body: "The artwork approval process is where most print shop production schedules break down. Every unapproved job sitting in an email thread is a slot on the press that cannot be planned. Automating the artwork approval workflow — from brief through proof to sign-off — typically reduces production delays by 20–40% without any change to the print process itself." },
        { title: 'Print production scheduling and capacity planning', body: "Print production scheduling software that cannot account for substrate, print method, drying time, and finishing dependencies cannot produce a realistic schedule. Most print shops are scheduling by eye and experience — which works until volume grows beyond what one person can hold in their head." },
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
    
      slug="print-promotional"
      targetService={sectorRouting['print-promotional'].targetService}
      relatedProblems={sectorRouting['print-promotional'].relatedProblems}
    />
    </>
  );
}
