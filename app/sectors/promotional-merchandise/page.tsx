import type { Metadata } from 'next';
import { SectorPageDS } from '@/components/SectorPageDS';
import { Plate } from '@/components/Plate';
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
        plate={
          <Plate tone="dark" p="pm" title="Promotional merchandise — supplier range to delivered order"
                 sub="Three connected systems: multi-supplier catalogue, artwork management, order fulfilment"
                 no="DO-ART-111" rev="01" cls="DECODED OPS · ISSUED">

            <path id="pm-spine" pathLength={1} className="sk-draw sk-s2 p-scyan" d="M350 720 V260"
                  fill="none" strokeWidth="2.5" markerEnd="url(#pm-ah)"/>

            <g className="sk-fade sk-s3">
              <rect x="450" y="580" width="840" height="110" rx="14" fill="url(#pm-node)"
                    className="p-node" strokeWidth="1.4"/>
              <text x="500" y="628" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="700"
                    fontSize="26">Multi-supplier catalogue</text>
              <text x="500" y="660" className="p-mono" fontSize="17" opacity=".85">Dozens of ranges ·
                live pricing · live stock — not a folder of spreadsheets nobody trusts</text>
            </g>

            <g className="sk-fade sk-s4">
              <rect x="450" y="420" width="840" height="120" rx="14" fill="url(#pm-node)"
                    className="p-node" strokeWidth="1.4"/>
              <text x="500" y="468" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="700"
                    fontSize="26">Artwork management</text>
              <text x="500" y="502" className="p-mono" fontSize="17" opacity=".85">Client logo
                versioning · proof approval · audit trail — not an email thread per order</text>
            </g>

            <g className="sk-fade sk-s5" filter="url(#pm-shadow)">
              <rect x="450" y="250" width="840" height="130" rx="16" fill="url(#pm-amber-n)"
                    className="p-node-a" strokeWidth="2"/>
              <text x="500" y="308" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="800"
                    fontSize="28">Order fulfilment</text>
              <text x="500" y="344" className="p-accent-ink" fontSize="18" fontWeight="600">Decoration
                cost · supplier lead times · margin trackable per job — not estimated after delivery</text>
            </g>

            <g className="sk-dots">
              <circle r="6" className="p-cyan"><animateMotion dur="4s" repeatCount="indefinite"><mpath href="#pm-spine"/></animateMotion></circle>
            </g>
          </Plate>
        }
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
