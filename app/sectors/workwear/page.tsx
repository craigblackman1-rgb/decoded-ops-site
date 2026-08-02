import type { Metadata } from 'next';
import { SectorPageDS } from '@/components/SectorPageDS';
import { Plate } from '@/components/Plate';
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
        plate={
          <Plate tone="dark" p="ww" title="Workwear — supplier to branded garment"
                 sub="Three systems that have to connect: supplier catalogue, production floor, customer portal"
                 no="DO-ART-108" rev="01" cls="DECODED OPS · ISSUED">

            <path id="ww-spine" pathLength={1} className="sk-draw sk-s2 p-scyan" d="M350 720 V260"
                  fill="none" strokeWidth="2.5" markerEnd="url(#ww-ah)"/>

            <g className="sk-fade sk-s3">
              <rect x="450" y="580" width="840" height="110" rx="14" fill="url(#ww-node)"
                    className="p-node" strokeWidth="1.4"/>
              <text x="500" y="628" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="700"
                    fontSize="26">Supplier catalogue</text>
              <text x="500" y="660" className="p-mono" fontSize="17" opacity=".85">Ranges · sizing ·
                colourways · stock availability — current, not copy-pasted</text>
            </g>

            <g className="sk-fade sk-s4">
              <rect x="450" y="420" width="840" height="120" rx="14" fill="url(#ww-node)"
                    className="p-node" strokeWidth="1.4"/>
              <text x="500" y="468" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="700"
                    fontSize="26">Production floor</text>
              <text x="500" y="502" className="p-mono" fontSize="17" opacity=".85">Decoration method
                mix · blank stock · personalisation — the step generic systems skip</text>
            </g>

            <g className="sk-fade sk-s5" filter="url(#ww-shadow)">
              <rect x="450" y="250" width="840" height="130" rx="16" fill="url(#ww-amber-n)"
                    className="p-node-a" strokeWidth="2"/>
              <text x="500" y="308" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="800"
                    fontSize="28">Customer-facing channels</text>
              <text x="500" y="344" className="p-accent-ink" fontSize="18" fontWeight="600">eCommerce
                · B2B trade portal · automated replenishment · size-history-driven reorders</text>
            </g>

            <g className="sk-dots">
              <circle r="6" className="p-cyan"><animateMotion dur="4s" repeatCount="indefinite"><mpath href="#ww-spine"/></animateMotion></circle>
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
            title: 'Supplier feed chaos',
            body: 'Workwear catalogues change constantly. New ranges, discontinued colours, updated sizing. Keeping that current across every channel without re-keying it by hand is the single biggest operational drag in the sector.',
          },
          {
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 4 4.5 7 6 9l2-1v12h8V8l2 1 1.5-2L16 4z" /><circle cx="12" cy="12" r="2" />
              </svg>
            ),
            title: 'Decoration and stock, in the same picture',
            body: "A plain garment isn\u2019t the same SKU as the decorated one. Systems that don\u2019t understand that force workarounds \u2014 and workarounds mean data outside the system, which means errors and extra admin on every order.",
          },
          {
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><path d="M3.3 7 12 12l8.7-5M12 22V12" />
              </svg>
            ),
            title: 'Blank stock dependency',
            body: 'Your production schedule is hostage to blank availability. Most businesses have no real visibility of incoming stock versus committed orders \u2014 until the problem is already in the queue.',
          },
          {
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a14.8 14.8 0 0 0-3 10 14.8 14.8 0 0 0 3 10 14.8 14.8 0 0 0 3-10A14.8 14.8 0 0 0 12 2z" />
              </svg>
            ),
            title: 'eCommerce disconnected from production',
            body: 'Online orders that don\u2019t automatically flow into the production schedule. Personalisation that requires manual re-entry. Artwork files arriving separately from the order. All of this is solvable.',
          },
          {
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 12a8 8 0 1 1-2.6-5.9" /><path d="M20 4v4.5h-4.5" />
              </svg>
            ),
            title: 'Replenishment that waits on you',
            body: "Staff uniform orders repeat on their own schedule, not a seasonal one. A system that tracks reorder points and sizing history means fewer calls chasing \u201cwe\u2019re out of mediums again.\u201d",
          },
        ]}
        checklistHeading="An independent audit of the whole workwear workflow."
        checklist={[
          'Map your order-to-despatch workflow end to end, including the decoration step',
          'Identify where supplier catalogue data is being re-keyed or managed manually',
          'Review your blank stock management against committed orders for supply gap risk',
          'Audit how personalisation requirements flow from order intake to production',
          'Assess eCommerce integration with production scheduling and order management',
          'Review your replenishment model for repeat customer orders',
          'Quantify every finding in time, headcount, and money',
        ]}
        otherSectors={[
          { label: 'Teamwear & clubwear', href: '/sectors/teamwear-clubwear' },
          { label: 'Schoolwear', href: '/sectors/schoolwear' },
          { label: 'Promotional merchandise', href: '/sectors/promotional-merchandise' },
        ]}
        ctaLead="An hour on supplier data, blank stock dependency, and where your production step is creating admin work that shouldn't exist."
      />
    </>
  );
}
