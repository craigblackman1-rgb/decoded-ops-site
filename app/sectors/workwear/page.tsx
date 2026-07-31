import type { Metadata } from 'next';
import { SectorPageDS } from '@/components/SectorPageDS';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Workwear — Decoded Ops',
  description: "Technology and operations consultancy for workwear businesses. Supplier feed chaos solved, decoration and stock in the same picture, and replenishment that doesn't wait on you.",
  alternates: { canonical: '/sectors/workwear' },
  openGraph: {
    title: 'Workwear — Decoded Ops',
    description: "Technology and operations consultancy for workwear businesses. Supplier feed chaos solved, decoration and stock in the same picture, and replenishment that doesn't wait on you.",
    url: 'https://decodedops.co.uk/sectors/workwear',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Workwear — Decoded Ops',
    description: "Technology and operations consultancy for workwear businesses. Supplier feed chaos solved, decoration and stock in the same picture, and replenishment that doesn't wait on you.",
  },
};

const sectorSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://decodedops.co.uk/sectors/workwear#webpage',
  url: 'https://decodedops.co.uk/sectors/workwear',
  name: 'Workwear — Decoded Ops',
  description: "Technology and operations consultancy for workwear businesses. Supplier feed chaos solved, decoration and stock in the same picture, and replenishment that doesn't wait on you.",
  isPartOf: { '@id': 'https://decodedops.co.uk/#organization' },
};

export default function WorkwearPage() {
  return (
    <>
      <JsonLd data={sectorSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk' },
        { name: 'Sectors', url: 'https://decodedops.co.uk/sectors' },
        { name: 'Workwear', url: 'https://decodedops.co.uk/sectors/workwear' },
      ]} />
      <SectorPageDS
        sectorLabel="workwear"
        h1="Workwear, from someone who’s run the floor."
        introParagraphs={[
          'Personalised orders, decoration methods that vary by garment, and stock that has to match sizes, colours, and branding all at once.',
          'Generic tech advice gets this sector wrong from the start, because the production step sits between order and despatch, not after it.',
        ]}
        heroSecondaryCta={{ label: 'See the Data App', href: '/apps/data-app' }}
        heroImage={{
          src: '/images/sectors/cat-workwear.jpg',
          width: 900,
          height: 596,
          alt: 'A fanned stack of work shirts in a dozen colourways, collars and button plackets showing, on a plain studio background.',
        }}
        shotCaption="One garment, a dozen colourways, three decoration methods, and a size curve behind every one of them."
        featuresHeading="Three problems, in roughly this order."
        features={[
          {
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6h16M4 12h16M4 18h10" /><circle cx="18.5" cy="18" r="2.2" />
              </svg>
            ),
            title: 'Supplier feed chaos, solved',
            body: 'Workwear catalogues change constantly. New ranges, discontinued colours, updated sizing. The Decoded Data App keeps that current across every channel without you re-keying it by hand.',
          },
          {
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 4 4.5 7 6 9l2-1v12h8V8l2 1 1.5-2L16 4z" /><circle cx="12" cy="12" r="2" />
              </svg>
            ),
            title: 'Decoration and stock, in the same picture',
            body: "A plain garment isn’t the same SKU as the decorated one. Systems that don’t understand that force workarounds, and workarounds mean data outside the system.",
          },
          {
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 12a8 8 0 1 1-2.6-5.9" /><path d="M20 4v4.5h-4.5" />
              </svg>
            ),
            title: 'Replenishment that doesn’t wait on you',
            body: 'Staff uniform orders repeat on their own schedule, not a seasonal one. A system that tracks reorder points and sizing history means fewer calls chasing “we’re out of mediums again.”',
          },
        ]}
        otherSectors={[
          { label: 'Teamwear & clubwear', href: '/sectors/teamwear-clubwear' },
          { label: 'Schoolwear', href: '/sectors/schoolwear' },
          { label: 'Promotional merchandise', href: '/sectors/promotional-merchandise' },
        ]}
        ctaLead="An hour on what’s actually going wrong in your operation, and an honest read on whether it needs software at all."
      />
    </>
  );
}
