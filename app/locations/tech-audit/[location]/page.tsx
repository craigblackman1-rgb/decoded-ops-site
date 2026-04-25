import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { LocationPage } from '@/components/LocationPage';
import { locations, getLocation } from '@/data/locations';

export async function generateStaticParams() {
  return locations.map((l) => ({ location: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) return {};

  return {
    title: `Technology Audit for ${loc.name} Businesses | Decoded Ops`,
    description: `Independent technology audit for ${loc.name} SMEs. Identify hidden costs and failing systems. From £395 with a 3× Clarity Guarantee.`,
    alternates: {
      canonical: `/locations/tech-audit/${loc.slug}`,
    },
  };
}

const painPoints = [
  {
    title: 'Your systems don\'t talk to each other',
    body: 'Data moving manually between platforms. Orders processed twice. Stock figures that don\'t match. Every disconnection costs time and creates errors — and most businesses have normalised this so thoroughly they\'ve stopped noticing how much it costs.',
  },
  {
    title: 'You know costs are higher than they should be — but can\'t see where',
    body: 'The overhead is there — in headcount, in rework, in customer service time — but no one has mapped where it\'s actually coming from. The Clarity Audit exists specifically to find this and cost it accurately.',
  },
  {
    title: 'Ready to scale, but the operations aren\'t',
    body: 'Revenue could grow faster. The constraint is operational — systems, process, people doing jobs that should be automated. Knowing where the bottleneck is, specifically and quantifiably, is the first step to removing it.',
  },
  {
    title: 'Decisions being made on incomplete information',
    body: 'Reporting that takes hours to produce. Numbers that don\'t tie up. Business decisions made on gut feel because the data isn\'t trustworthy. This is almost always a systems problem, not a people problem.',
  },
];

const whatIdo = [
  'One structured day on site — talking to the people doing the work, not just the people managing it',
  'Map every system you\'re running, what it costs, and what it\'s actually being used for versus what it was bought to do',
  'Document every manual handoff and workaround — this is almost always where the cost is hiding',
  'Identify the three to five changes that would recover the most cost or unlock the most revenue',
  'Produce a written report within five working days — specific, costed, with independent vendor recommendations',
  'Back it with the 3× Clarity Guarantee — if the audit doesn\'t identify at least 3× the fee in recoverable cost or lost revenue, full refund, no conditions',
];

export default async function TechAuditLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'Decoded Ops',
            description: `Technology audit services for small businesses in ${loc.name}, ${loc.county}`,
            areaServed: {
              '@type': 'City',
              name: loc.name,
              containedInPlace: {
                '@type': 'AdministrativeArea',
                name: loc.county,
              },
            },
            serviceType: 'Technology Audit',
            offers: {
              '@type': 'Offer',
              price: '395',
              priceCurrency: 'GBP',
              description: 'Clarity Check — small business technology audit',
            },
            url: `https://decodedops.co.uk/locations/tech-audit/${loc.slug}`,
          }),
        }}
      />
      <LocationPage
        town={loc.name}
        county={loc.county}
        service="Technology Audit"
        badge={`Technology Audit · ${loc.county}`}
        tagline={`Find out exactly what your systems are ||costing your ${loc.name} business.||`}
        intro={`Most ${loc.name} businesses running manual workarounds, disconnected systems, or patched-together technology are losing more than they realise. The Clarity Audit is a structured, independent diagnostic that finds where the cost is hiding and tells you exactly what to do about it.`}
        localContext={loc.localContext}
        painPoints={painPoints}
        whatIdo={whatIdo}
        cta={`Book a Clarity Audit for your ${loc.name} business — from £395`}
        serviceUrl="/clarity"
        serviceLabel="See how the Clarity Audit works"
      />
    </>
  );
}
