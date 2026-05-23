import type { Metadata } from 'next';
import { SectorPage } from '@/components/SectorPage';
import { WorkflowGraphic } from '@/components/graphics/WorkflowGraphic';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Garment Decoration Business Systems & Operations Consultant | Decoded Ops',
  description: 'Technology and operations consultancy for garment decoration businesses. Embroidery business management, artwork management software, and production scheduling for embroidery and DTF.',
  alternates: { canonical: '/sectors/garment-decoration' },
  openGraph: {
    title: 'Garment Decoration Business Systems & Operations Consultant | Decoded Ops',
    description: 'Technology and operations consultancy for garment decoration businesses. Embroidery business management, artwork management software, and production scheduling for embroidery and DTF.',
    url: 'https://decodedops.co.uk/sectors/garment-decoration',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Garment Decoration Business Systems & Operations Consultant | Decoded Ops',
    description: 'Technology and operations consultancy for garment decoration businesses. Embroidery business management, artwork management software, and production scheduling for embroidery and DTF.',
  },
};

const sectorSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://decodedops.co.uk/sectors/garment-decoration#webpage',
      url: 'https://decodedops.co.uk/sectors/garment-decoration',
      name: 'Garment Decoration Business Systems & Operations Consultant | Decoded Ops',
      description: 'Technology and operations consultancy for garment decoration businesses.',
      isPartOf: { '@id': 'https://decodedops.co.uk/#organization' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What systems does a garment decoration business need?',
          acceptedAnswer: { '@type': 'Answer', text: 'A garment decoration business typically needs: an order management or ERP system that handles decoration method-specific workflows; artwork management software for sign-off and file storage; production scheduling software that accounts for machine capacity and method lead times; eCommerce integration if you sell online; and B2B ordering capability if you serve corporate or wholesale customers.' },
        },
        {
          '@type': 'Question',
          name: 'How is embroidery business management different from other decoration methods?',
          acceptedAnswer: { '@type': 'Answer', text: 'Embroidery business management involves digitisation, stitch count estimation, machine capacity planning, and thread management — none of which are native to generic ERP or MIS systems. Businesses running embroidery alongside screen print or DTF need systems that can represent each method\'s production logic independently.' },
        },
        {
          '@type': 'Question',
          name: 'What is the best ERP for a garment decoration business in the UK?',
          acceptedAnswer: { '@type': 'Answer', text: 'There is no single best ERP — the right system depends on your decoration methods, order volume, eCommerce requirements, and growth plans. Sector-specific systems like PANTA, DecoNetwork, and OrderWise are all used in the UK garment decoration market, each with different strengths and limitations. An independent evaluation against a written brief is the only way to choose correctly.' },
        },
      ],
    },
  ],
};

const workflow = (
  <WorkflowGraphic
    title="Garment decoration order flow"
    steps={[
      { label: 'Order in', sub: 'eCommerce / B2B' },
      { label: 'Artwork check', sub: 'Sign-off loop' },
      { label: 'Blank sourcing', sub: 'Stock check' },
      { label: 'Method assign', sub: 'Embr / DTG / SP', alert: true },
      { label: 'Production', sub: 'Schedule slot' },
      { label: 'QC & despatch', sub: 'Ship confirm' },
    ]}
  />
);

export default function GarmentDecorationPage() {
  return (
    <>
      <JsonLd data={sectorSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk' },
        { name: 'Sectors', url: 'https://decodedops.co.uk/#sectors' },
        { name: 'Garment Decoration', url: 'https://decodedops.co.uk/sectors/garment-decoration' },
      ]} />
      <SectorPage
      sector="Garment decoration"
      tagline="Garment decoration business systems ||were never built for how you actually work.||"
      intro="Every decoration method has its own production logic, its own constraints, and its own failure modes. The ERP and MIS systems marketed to garment decoration businesses rarely account for that. Embroidery business management looks different from screen print management — and your systems should reflect that difference."
      heroGraphic={workflow}
      challenges={[
        { title: 'Decoration method mix', body: "Running embroidery, screen print, and DTG in the same business means three different production workflows, three different lead times, and three different cost structures — all managed in systems that don't account for the difference." },
        { title: 'The artwork loop', body: "Artwork sign-off is the single biggest source of delay in most garment decoration businesses. Every manual chase, every email thread, every approval held in someone's inbox is time and cost that doesn't show up anywhere. Artwork management software can automate the sign-off loop — but only if it is properly integrated with the order management system. Most businesses in this sector are still managing artwork approval by email." },
        { title: 'Blank dependency', body: "Your production schedule is hostage to blank availability. Most businesses have no real visibility of incoming stock vs committed orders — until the problem is already in the queue." },
        { title: 'eCommerce disconnected from production', body: "Online orders that don't automatically flow into the production schedule. Personalisation that requires manual re-entry. Artwork files that arrive separately from the order. All of this is solvable." },
        { title: 'Embroidery production workflow versus other methods', body: "Embroidery production scheduling is fundamentally different from screen print or DTF. Machine capacity, stitch count, digitisation time, and thread colour changes all affect the schedule in ways that generic production scheduling software does not account for. A system that cannot represent embroidery production accurately will always require manual workarounds." },
      ]}
      whatIdo={[
        'Map your current decoration workflows end to end — from order intake to despatch',
        'Identify where the artwork loop is creating delay and cost',
        'Assess artwork management software options and integration with your order management system',
        'Assess your blank sourcing model and the dependency risks within it',
        'Review your technology stack for gaps between eCommerce, order management, and production',
        'Produce an independent vendor brief if new software is recommended',
        'Quantify every finding in time, headcount, and money',
      ]}
      cta="Find out what your decoration workflow is really costing you"
    />
    </>
  );
}
