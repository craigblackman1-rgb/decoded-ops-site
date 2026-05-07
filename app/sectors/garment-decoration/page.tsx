import type { Metadata } from 'next';
import { SectorPage } from '@/components/SectorPage';
import { WorkflowGraphic } from '@/components/graphics/WorkflowGraphic';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Garment Decoration Technology & Operations | Decoded Ops',
  description: 'Technology and operations consultancy for garment decoration businesses. Systems audit, project delivery, and fractional CTO support.',
  alternates: { canonical: '/sectors/garment-decoration' },
  openGraph: {
    title: 'Garment Decoration Technology & Operations | Decoded Ops',
    description: 'Technology and operations consultancy for garment decoration businesses. Systems audit, project delivery, and fractional CTO support.',
    url: 'https://decodedops.co.uk/sectors/garment-decoration',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Garment Decoration Technology & Operations | Decoded Ops',
    description: 'Technology and operations consultancy for garment decoration businesses. Systems audit, project delivery, and fractional CTO support.',
  },
};

const sectorSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://decodedops.co.uk/sectors/garment-decoration#webpage',
  url: 'https://decodedops.co.uk/sectors/garment-decoration',
  name: 'Garment Decoration Technology & Operations | Decoded Ops',
  description: 'Technology and operations consultancy for garment decoration businesses. Systems audit, project delivery, and fractional CTO support.',
  isPartOf: { '@id': 'https://decodedops.co.uk/#organization' },
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
      <SectorPage
      sector="Garment decoration"
      tagline="The systems behind embroidery, DTG, screen print and heat transfer ||were never built for your business.||"
      intro="Every decoration method has its own production logic, its own constraints, and its own failure modes. Most ERP systems treat them all the same. That's where the cost lives."
      heroGraphic={workflow}
      challenges={[
        { title: 'Decoration method mix', body: "Running embroidery, screen print, and DTG in the same business means three different production workflows, three different lead times, and three different cost structures — all managed in systems that don't account for the difference." },
        { title: 'The artwork loop', body: "Artwork sign-off is the single biggest source of delay in most garment decoration businesses. Every manual chase, every email thread, every approval held in someone's inbox is time and cost that doesn't show up anywhere." },
        { title: 'Blank dependency', body: "Your production schedule is hostage to blank availability. Most businesses have no real visibility of incoming stock vs committed orders — until the problem is already in the queue." },
        { title: 'eCommerce disconnected from production', body: "Online orders that don't automatically flow into the production schedule. Personalisation that requires manual re-entry. Artwork files that arrive separately from the order. All of this is solvable." },
      ]}
      whatIdo={[
        'Map your current decoration workflows end to end — from order intake to despatch',
        'Identify where the artwork loop is creating delay and cost',
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
