import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { LocationPage } from '@/components/LocationPage';
import { locations, getLocation } from '@/data/locations';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

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
    description: `Fractional CTO for ${loc.name} businesses, senior tech leadership without the full-time hire. Strategy, oversight and plain-English advice.`,
    alternates: {
      canonical: `/locations/fractional-cto/${loc.slug}`,
    },
    openGraph: {
      title: `Fractional CTO in ${loc.name}, ${loc.county} | Decoded Ops`,
      description: `Fractional CTO for ${loc.name} businesses, senior tech leadership without the full-time hire. Strategy, oversight and plain-English advice.`,
      url: `https://decodedops.co.uk/locations/fractional-cto/${loc.slug}`,
      images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Fractional CTO in ${loc.name}, ${loc.county} | Decoded Ops`,
      description: `Fractional CTO for ${loc.name} businesses, senior tech leadership without the full-time hire. Strategy, oversight and plain-English advice.`,
    },
  };
}

const painPoints = [
  {
    title: 'No one owns the technology decisions',
    body: 'Vendor choices and system changes get made without a plan. Every short-term fix creates a bigger problem later, and the cost quietly grows until it shows up.',
  },
  {
    title: 'Growing faster than your infrastructure',
    body: 'Revenue is growing, but your systems are straining. Manual workarounds that worked when you were smaller now create daily friction, and your team quietly absorbs the extra work.',
  },
  {
    title: 'Translating between your business and your technology',
    body: 'You shouldn\'t have to become technical to get the right outcomes from your systems. Without someone who bridges both worlds, things get lost between what you asked for and what got built.',
  },
  {
    title: 'Vendor decisions made without independent advice',
    body: 'Software salespeople are good at their job. Without someone on your side who knows what you actually need, you end up with tools that solve the vendor\'s problem, not yours.',
  },
];

const whatIdo = [
  'Map your technology: what\'s running, what it costs, and what it should do versus what it actually does',
  'Identify the decisions that need making and build a prioritised roadmap you can act on',
  'Be your technology voice with vendors, developers, investors, and your board',
  'Attend leadership meetings as your part-time tech director, present and accountable, not just on call when something breaks',
  'Build internal capability so you become less dependent over time, not more',
  'Run the Clarity Audit first if the picture is unclear, a fixed-price diagnostic before any ongoing commitment',
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
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Fractional CTO Locations', url: 'https://decodedops.co.uk/locations/fractional-cto' },
        { name: loc.name, url: `https://decodedops.co.uk/locations/fractional-cto/${loc.slug}` },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'Decoded Ops',
            description: `Fractional CTO services for businesses in ${loc.name}, ${loc.county}`,
            address: { '@type': 'PostalAddress', addressLocality: 'Worthing', addressRegion: 'West Sussex', addressCountry: 'GB' },
            telephone: '07735 620 603',
            areaServed: {
              '@type': 'City',
              name: loc.name,
              containedInPlace: {
                '@type': 'AdministrativeArea',
                name: loc.county,
              },
            },
            serviceRadius: { '@type': 'Distance', name: 'Within 2 hours of Worthing' },
            geo: { '@type': 'GeoCoordinates', latitude: 50.8179, longitude: -0.3729 },
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
        tagline={`Senior technology leadership for ||${loc.name} businesses||, without the full-time hire.`}
        intro={`Growing businesses in ${loc.name} face real technology decisions: which vendor to pick, which systems to integrate, which platform to choose. Without someone senior owning those decisions, the cost quietly adds up.`}
        localContext={loc.localContext}
        driveTime={loc.driveTime}
        localFact={loc.localFact}
        painPoints={painPoints}
        whatIdo={whatIdo}
        cta={`Find out if a fractional CTO is right for your ${loc.name} business`}
        serviceUrl="/fractional"
        serviceLabel="See how fractional CTO works"
      />
    </>
  );
}
