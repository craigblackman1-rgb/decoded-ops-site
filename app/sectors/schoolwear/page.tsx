import type { Metadata } from 'next';
import { SectorPageDS } from '@/components/SectorPageDS';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Schoolwear — Decoded Ops',
  description: 'Technology and operations consultancy for schoolwear suppliers. Supplier feeds current before the back-to-school peak, sizing that scales with growing pupils, proven at TackleBag.',
  alternates: { canonical: '/sectors/schoolwear' },
  openGraph: {
    title: 'Schoolwear — Decoded Ops',
    description: 'Technology and operations consultancy for schoolwear suppliers. Supplier feeds current before the back-to-school peak, sizing that scales with growing pupils, proven at TackleBag.',
    url: 'https://decodedops.co.uk/sectors/schoolwear',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schoolwear — Decoded Ops',
    description: 'Technology and operations consultancy for schoolwear suppliers. Supplier feeds current before the back-to-school peak, sizing that scales with growing pupils, proven at TackleBag.',
  },
};

const sectorSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://decodedops.co.uk/sectors/schoolwear#webpage',
  url: 'https://decodedops.co.uk/sectors/schoolwear',
  name: 'Schoolwear — Decoded Ops',
  description: 'Technology and operations consultancy for schoolwear suppliers. Supplier feeds current before the back-to-school peak, sizing that scales with growing pupils, proven at TackleBag.',
  isPartOf: { '@id': 'https://decodedops.co.uk/#organization' },
};

export default function SchoolwearPage() {
  return (
    <>
      <JsonLd data={sectorSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk' },
        { name: 'Sectors', url: 'https://decodedops.co.uk/sectors' },
        { name: 'Schoolwear', url: 'https://decodedops.co.uk/sectors/schoolwear' },
      ]} />
      <SectorPageDS
        sectorLabel="schoolwear"
        h1="Schoolwear, and the back-to-school peak that decides your year."
        introParagraphs={[
          'Blazers, PE kit, and growing pupils, all needing to be right before the first week of September.',
          'The businesses that get this right have their supplier data and sizing sorted well before the rush starts.',
        ]}
        heroSecondaryCta={{ label: 'See the Data App', href: '/apps/data-app' }}
        heroImage={{
          src: '/images/sectors/thread-spools.jpg',
          width: 1600,
          height: 1067,
          alt: 'A rack of embroidery thread cones in mixed colours on a workshop wall, the working stock of a decoration floor.',
        }}
        shotCaption="Every school badge is a thread file before it's a garment — and the size curve behind it changes every September."
        featuresHeading="Three problems, all of them worse in August."
        features={[
          {
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6h16M4 12h16M4 18h10" /><circle cx="18.5" cy="18" r="2.2" />
              </svg>
            ),
            title: 'Supplier feeds, current before the peak hits',
            body: 'Schoolwear ranges don\'t change often, but when a supplier does update sizing or stock, you need to know before the August rush, not during it. The Decoded Data App keeps that current automatically.',
          },
          {
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 14.5 14.5 3 21 9.5 9.5 21z" /><path d="M8 9.5 10 11.5M11 6.5 13 8.5M14.5 12 16.5 14" />
              </svg>
            ),
            title: 'Sizing that scales with growing pupils',
            body: 'A school\'s sizing spread is wider and shifts every year. Stock and bin management that understands that means fewer "sold out in the size everyone actually needs" moments in week one.',
          },
          {
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19V9M10 19V5M16 19v-7M22 19H2" />
              </svg>
            ),
            title: 'Proven at a real teamwear-and-schoolwear retailer',
            body: 'TackleBag runs the Decoded Data App alongside Symphony, handling both their teamwear and schoolwear lines: nine supplier feeds automated, a projected saving of 20 to 40 hours a week.',
          },
        ]}
        otherSectors={[
          { label: 'Workwear', href: '/sectors/workwear' },
          { label: 'Teamwear & clubwear', href: '/sectors/teamwear-clubwear' },
          { label: 'Promotional merchandise', href: '/sectors/promotional-merchandise' },
        ]}
        ctaLead="Best had in the quiet months, not in August. An hour on what's actually going wrong, and an honest read on whether it needs software at all."
      />
    </>
  );
}
