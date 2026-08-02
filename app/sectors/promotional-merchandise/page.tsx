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
        featuresHeading="Five challenges specific to this sector."
        features={[
          {
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6h16M4 12h16M4 18h10" /><circle cx="18.5" cy="18" r="2.2" />
              </svg>
            ),
            title: 'Multi-supplier catalogue management',
            body: 'Promotional merchandise runs on dozens of supplier ranges. Matching products, managing pricing, and keeping stock current across all of them \u2014 without re-keying \u2014 is the sector\u2019s defining operational challenge.',
          },
          {
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.5 6.5 10 17l-5-5" /><path d="M3.5 20.5h17" />
              </svg>
            ),
            title: 'The artwork loop',
            body: 'Client logos, in every format, with version control and an audit trail. Customers should approve their own proofs instead of a back-and-forth that eats a day per order. Most promotional merchandise businesses are still managing approval by email.',
          },
          {
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 18 9.5 12l3.5 3.5L20 8" /><path d="M15.5 8H20v4.5" />
              </svg>
            ),
            title: 'Margin erosion at the order level',
            body: 'When production sits between the order and the despatch, a system that doesn\u2019t account for decoration cost, supplier lead time variation, and artwork rework quietly erodes margin on every job.',
          },
          {
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" />
              </svg>
            ),
            title: 'Quote-to-order conversion costs',
            body: 'How much does it cost you to produce a quote? How much of that time converts to an order? Most promotional merchandise businesses have never measured it \u2014 and the answer is usually uncomfortable.',
          },
          {
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a14.8 14.8 0 0 0-3 10 14.8 14.8 0 0 0 3 10 14.8 14.8 0 0 0 3-10A14.8 14.8 0 0 0 12 2z" />
              </svg>
            ),
            title: 'eCommerce disconnected from supply',
            body: 'A product listed online that isn\u2019t connected to live supplier data means manual checks on every order. A catalogue of thousands of items makes that impossible to sustain at any volume.',
          },
        ]}
        checklistHeading="An independent audit of supplier data, artwork, and margin."
        checklist={[
          'Map your full order workflow from client enquiry to delivery',
          'Audit your multi-supplier product data management for accuracy and currency',
          'Review your artwork storage, proof approval, and version control process',
          'Identify where supplier fragmentation is creating administrative overhead',
          'Assess how margin is calculated and tracked at the order level',
          'Review quoting accuracy and quote-to-order conversion costs',
          'Quantify every finding in time, margin erosion, and administrative cost',
        ]}
        otherSectors={[
          { label: 'Workwear', href: '/sectors/workwear' },
          { label: 'Teamwear & clubwear', href: '/sectors/teamwear-clubwear' },
          { label: 'Schoolwear', href: '/sectors/schoolwear' },
        ]}
        ctaLead="An hour on supplier data, the artwork loop, and where the margin is actually leaking \u2014 on every order, not in the year-end numbers."
      />
    </>
  );
}
