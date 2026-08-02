import type { Metadata } from 'next';
import { SectorPageDS } from '@/components/SectorPageDS';
import { Plate } from '@/components/Plate';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Teamwear & Clubwear — Decoded Ops',
  description: 'Technology and operations consultancy for teamwear and clubwear businesses. Squad numbers, sponsor logos and a hard deadline before the first match — proven at TackleBag.',
  alternates: { canonical: '/sectors/teamwear-clubwear' },
  openGraph: {
    title: 'Teamwear & Clubwear — Decoded Ops',
    description: 'Technology and operations consultancy for teamwear and clubwear businesses. Squad numbers, sponsor logos and a hard deadline before the first match — proven at TackleBag.',
    url: 'https://decodedops.co.uk/sectors/teamwear-clubwear',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teamwear & Clubwear — Decoded Ops',
    description: 'Technology and operations consultancy for teamwear and clubwear businesses. Squad numbers, sponsor logos and a hard deadline before the first match — proven at TackleBag.',
  },
};

const sectorSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://decodedops.co.uk/sectors/teamwear-clubwear#webpage',
  url: 'https://decodedops.co.uk/sectors/teamwear-clubwear',
  name: 'Teamwear & Clubwear — Decoded Ops',
  description: 'Technology and operations consultancy for teamwear and clubwear businesses. Squad numbers, sponsor logos and a hard deadline before the first match — proven at TackleBag.',
  isPartOf: { '@id': 'https://decodedops.co.uk/#organization' },
};

export default function TeamwearClubwearPage() {
  return (
    <>
      <JsonLd data={sectorSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk' },
        { name: 'Sectors', url: 'https://decodedops.co.uk/sectors' },
        { name: 'Teamwear & Clubwear', url: 'https://decodedops.co.uk/sectors/teamwear-clubwear' },
      ]} />
      <SectorPageDS
        sectorLabel="teamwear & clubwear"
        h1="Teamwear and clubwear, sized to the squad."
        introParagraphs={[
          'Squad numbers, sponsor logos, and a hard deadline before the first match of the season.',
          'Get the data wrong and it\'s not a quiet admin cost, it\'s kit that doesn\'t arrive in time.',
        ]}
        heroSecondaryCta={{ label: 'See the Data App', href: '/apps/data-app' }}
        heroImage={{
          src: '/images/sectors/prod-polo.jpg',
          width: 900,
          height: 1125,
          alt: 'A folded zip-neck polo shirt in cream and sand panels, photographed flat on a plain grey surface.',
        }}
        shotCaption="One base garment. Twenty-four names, twenty-four numbers, and one sponsor logo that has to sit in the same place on every one."
        plate={
          <Plate tone="dark" p="tw" title="Teamwear — squad list to kitted-out"
                 sub="Four connected stages: kit range data, squad list, personalisation proofs, production"
                 no="DO-ART-109" rev="01" cls="DECODED OPS · ISSUED">

            <path id="tw-spine" pathLength={1} className="sk-draw sk-s2 p-scyan" d="M350 720 V260"
                  fill="none" strokeWidth="2.5" markerEnd="url(#tw-ah)"/>

            <g className="sk-fade sk-s3">
              <rect x="450" y="600" width="840" height="90" rx="14" fill="url(#tw-node)"
                    className="p-node" strokeWidth="1.4"/>
              <text x="500" y="640" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="700"
                    fontSize="26">Supplier kit range catalogue</text>
              <text x="500" y="666" className="p-mono" fontSize="17" opacity=".85">Ranges · sizes ·
                colourways — live across every channel a team orders through</text>
            </g>

            <g className="sk-fade sk-s4">
              <rect x="450" y="460" width="840" height="110" rx="14" fill="url(#tw-node)"
                    className="p-node" strokeWidth="1.4"/>
              <text x="500" y="500" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="700"
                    fontSize="26">Squad list management</text>
              <text x="500" y="534" className="p-mono" fontSize="17" opacity=".85">Name · number ·
                size per player · sponsor logo per age group — not a spreadsheet</text>
            </g>

            <g className="sk-fade sk-s5" filter="url(#tw-shadow)">
              <rect x="450" y="320" width="840" height="110" rx="16" fill="url(#tw-amber-n)"
                    className="p-node-a" strokeWidth="2"/>
              <text x="500" y="360" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="800"
                    fontSize="28">Personalisation + proof</text>
              <text x="500" y="396" className="p-accent-ink" fontSize="18" fontWeight="600">Proof per
                kit · sponsor logo approval · production-ready data that doesn&apos;t need re-keying</text>
            </g>

            <g className="sk-dots">
              <circle r="6" className="p-cyan"><animateMotion dur="4s" repeatCount="indefinite"><mpath href="#tw-spine"/></animateMotion></circle>
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
            title: 'Every supplier feed, one current catalogue',
            body: 'Kit ranges change season to season. The Decoded Data App keeps supplier data current across every channel, so what\'s on your site matches what\'s actually available to order.',
          },
          {
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 4 4.5 7 6 9l2-1v12h8V8l2 1 1.5-2L16 4z" /><path d="M10.5 13h3" />
              </svg>
            ),
            title: 'Squad-level personalisation, not one-size data',
            body: 'Names, numbers, sponsor logos — every kit is a variant of the same product. Systems that treat that as one SKU force manual workarounds on every single order.',
          },
          {
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19V9M10 19V5M16 19v-7M22 19H2" />
              </svg>
            ),
            title: 'Proven at scale in this exact sector',
            body: 'TackleBag runs nine automated supplier feeds and a Data App alongside their Symphony platform, projected to save 20 to 40 hours a week. That\'s teamwear and schoolwear stock, live, not a pilot.',
          },
        ]}
        otherSectors={[
          { label: 'Workwear', href: '/sectors/workwear' },
          { label: 'Schoolwear', href: '/sectors/schoolwear' },
          { label: 'Promotional merchandise', href: '/sectors/promotional-merchandise' },
        ]}
        ctaLead="An hour on what's actually going wrong before next season starts, and an honest read on whether it needs software at all."
      />
    </>
  );
}
