import type { Metadata } from 'next';
import { SectorPageDS } from '@/components/SectorPageDS';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Promotional merchandise — Decoded Ops',
  description: 'Technology and operations consultancy for promotional merchandise businesses. Every supplier in one clean catalogue, artwork that doesn\'t live in email, and margin protected at the order level.',
  alternates: { canonical: '/sectors/promotional-merchandise' },
  openGraph: {
    title: 'Promotional merchandise — Decoded Ops',
    description: 'Technology and operations consultancy for promotional merchandise businesses. Every supplier in one clean catalogue, artwork that doesn\'t live in email, and margin protected at the order level.',
    url: 'https://decodedops.co.uk/sectors/promotional-merchandise',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Promotional merchandise — Decoded Ops',
    description: 'Technology and operations consultancy for promotional merchandise businesses. Every supplier in one clean catalogue, artwork that doesn\'t live in email, and margin protected at the order level.',
  },
};

const sectorSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://decodedops.co.uk/sectors/promotional-merchandise#webpage',
  url: 'https://decodedops.co.uk/sectors/promotional-merchandise',
  name: 'Promotional merchandise — Decoded Ops',
  description: 'Technology and operations consultancy for promotional merchandise businesses. Every supplier in one clean catalogue, artwork that doesn\'t live in email, and margin protected at the order level.',
  isPartOf: { '@id': 'https://decodedops.co.uk/#organization' },
};

export default function PromotionalMerchandisePage() {
  return (
    <>
      <JsonLd data={sectorSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk' },
        { name: 'Sectors', url: 'https://decodedops.co.uk/sectors' },
        { name: 'Promotional Merchandise', url: 'https://decodedops.co.uk/sectors/promotional-merchandise' },
      ]} />
      <SectorPageDS
        sectorLabel="promotional merchandise"
        h1="Promotional merchandise, without the spreadsheet chaos."
        introParagraphs={[
          'Every client wants something slightly different, on a deadline, at a price point that leaves no room for error.',
          'The businesses that do this well have their product data and their production process under control. Most don\'t, and it\'s costing them.',
        ]}
        heroSecondaryCta={{ label: 'See the Artwork Manager', href: '/apps/artwork-manager' }}
        heroImage={{
          src: '/images/sectors/cat-promo.jpg',
          width: 900,
          height: 600,
          alt: 'An assortment of branded promotional items grouped on a plain surface, the kind of mixed order a merchandise supplier fulfils from several different supplier ranges at once.',
        }}
        shotCaption="One order, four supplier ranges, four different lead times, and one logo that has to work on all of them."
        featuresHeading="Three problems, in roughly this order."
        features={[
          {
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6h16M4 12h16M4 18h10" /><circle cx="18.5" cy="18" r="2.2" />
              </svg>
            ),
            title: 'Every supplier, one clean catalogue',
            body: 'Promotional merchandise runs on dozens of supplier ranges. The Decoded Data App brings them into one place, matched and current, instead of a folder of spreadsheets nobody trusts.',
          },
          {
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.5 6.5 10 17l-5-5" /><path d="M3.5 20.5h17" />
              </svg>
            ),
            title: 'Artwork that doesn\'t live in email',
            body: 'Client logos, in every format, with version control and an audit trail. Customers approve their own proofs instead of a back-and-forth that eats a day per order.',
          },
          {
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 18 9.5 12l3.5 3.5L20 8" /><path d="M15.5 8H20v4.5" />
              </svg>
            ),
            title: 'Margin protected at the order level',
            body: 'When production sits between the order and the despatch, as it always does in this sector, a system that doesn\'t account for that quietly erodes margin on every job.',
          },
        ]}
        otherSectors={[
          { label: 'Workwear', href: '/sectors/workwear' },
          { label: 'Teamwear & clubwear', href: '/sectors/teamwear-clubwear' },
          { label: 'Schoolwear', href: '/sectors/schoolwear' },
        ]}
        ctaLead="An hour on where the margin is actually going, and an honest read on whether it needs software at all."
      />
    </>
  );
}
