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
    title: `Fractional CTO in ${loc.name}, ${loc.county} | Decoded Ops`,
    description: `Fractional CTO for ${loc.name} businesses — senior tech leadership without the full-time hire. Strategy, oversight and plain-English advice.`,
    alternates: {
      canonical: `/locations/fractional-cto/${loc.slug}`,
    },
  };
}

const painPoints = [
  {
    title: 'No one owns the technology decisions',
    body: 'Vendor choices, platform decisions, and system changes are made without a strategic view. Every short-term fix creates a longer-term problem — and the cost of those decisions compounds quietly until it becomes visible.',
  },
  {
    title: 'Growing faster than your infrastructure',
    body: 'Revenue is increasing but the systems underneath are straining. Manual workarounds that worked at smaller scale are now creating daily friction, and the team is absorbing the overhead rather than flagging it.',
  },
  {
    title: 'Translating between your business and your technology',
    body: 'Business owners shouldn\'t need to become technical to get the right outcomes from their systems. But without someone who bridges both worlds, critical things get lost between what you asked for and what got built.',
  },
  {
    title: 'Vendor decisions made without independent advice',
    body: 'Software salespeople are good at their job. Without someone on your side who understands what you actually need, you end up with tools that solve the vendor\'s revenue problem rather than yours.',
  },
];

const whatIdo = [
  'Map your current technology landscape — what\'s running, what it costs, and what it\'s supposed to do versus what it actually does',
  'Identify the decisions that need to be made and build a prioritised roadmap you can act on',
  'Act as your technology voice in commercial conversations — with vendors, with developers, with investors or board',
  'Attend leadership meetings as your part-time tech director — present and accountable, not just on call when something breaks',
  'Build internal capability so you become less dependent over time, not more',
  'Run the Clarity Audit first if the picture is unclear — a fixed-price diagnostic before any ongoing commitment',
];

export default async function FractionalCTOLocationPage({
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
            description: `Fractional CTO services for businesses in ${loc.name}, ${loc.county}`,
            areaServed: {
              '@type': 'City',
              name: loc.name,
              containedInPlace: {
                '@type': 'AdministrativeArea',
                name: loc.county,
              },
            },
            serviceType: 'Fractional CTO',
            url: `https://decodedops.co.uk/locations/fractional-cto/${loc.slug}`,
          }),
        }}
      />
      <LocationPage
        town={loc.name}
        county={loc.county}
        service="Fractional CTO"
        badge={`Fractional CTO · ${loc.county}`}
        tagline={`Senior technology leadership for ||${loc.name} businesses|| — without the full-time hire.`}
        intro={`Growing businesses in ${loc.name} face real technology decisions — vendors to evaluate, systems to integrate, platforms to choose. Without someone senior to own those decisions, the cost accumulates in ways that don't always show up clearly on a balance sheet.`}
        localContext={loc.localContext}
        painPoints={painPoints}
        whatIdo={whatIdo}
        cta={`Find out if a fractional CTO is right for your ${loc.name} business`}
        serviceUrl="/fractional"
        serviceLabel="See how fractional CTO works"
      />
    </>
  );
}
