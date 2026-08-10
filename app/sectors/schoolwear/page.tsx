import type { Metadata } from 'next';
import { SectorPageDS } from '@/components/SectorPageDS';
import { Plate } from '@/components/Plate';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Schoolwear | Decoded Ops',
  description: 'Technology and operations consultancy for schoolwear suppliers. Supplier feeds current before the back-to-school peak, sizing that scales with growing pupils, proven at TackleBag.',
  alternates: { canonical: '/sectors/schoolwear' },
  openGraph: {
    title: 'Schoolwear | Decoded Ops',
    description: 'Technology and operations consultancy for schoolwear suppliers. Supplier feeds current before the back-to-school peak, sizing that scales with growing pupils, proven at TackleBag.',
    url: 'https://decodedops.co.uk/sectors/schoolwear',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schoolwear | Decoded Ops',
    description: 'Technology and operations consultancy for schoolwear suppliers. Supplier feeds current before the back-to-school peak, sizing that scales with growing pupils, proven at TackleBag.',
  },
};

const sectorSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://decodedops.co.uk/sectors/schoolwear#webpage',
  url: 'https://decodedops.co.uk/sectors/schoolwear',
  name: 'Schoolwear | Decoded Ops',
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
        heroSecondaryCta={{ label: 'See how the audit works', href: '/clarity' }}
        heroImage={{
          src: '/images/sectors/thread-spools.jpg',
          width: 1600,
          height: 1067,
          alt: 'A rack of embroidery thread cones in mixed colours on a workshop wall, the working stock of a decoration floor.',
        }}
        shotCaption="Every school badge is a thread file before it's a garment. And the size curve behind it changes every September."
        plate={
          <Plate tone="dark" p="sw" title="Schoolwear: supplier range to parent delivery"
                 sub="Four connected systems: supplier catalogue, badge management, parent portal, production"
                 no="DO-ART-110" rev="01" cls="DECODED OPS · ISSUED">

            <path id="sw-spine" pathLength={1} className="sk-draw sk-s2 p-scyan" d="M350 720 V260"
                  fill="none" strokeWidth="2.5" markerEnd="url(#sw-ah)"/>

            <g className="sk-fade sk-s3">
              <rect x="450" y="600" width="840" height="90" rx="14" fill="url(#sw-node)"
                    className="p-node" strokeWidth="1.4"/>
              <text x="500" y="640" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="700"
                    fontSize="26">Supplier kit range catalogue</text>
              <text x="500" y="666" className="p-mono" fontSize="17" opacity=".85">Blazers · PE kit ·
                accessories: live data before the August rush, not during it</text>
            </g>

            <g className="sk-fade sk-s4">
              <rect x="450" y="460" width="840" height="110" rx="14" fill="url(#sw-node)"
                    className="p-node" strokeWidth="1.4"/>
              <text x="500" y="500" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="700"
                    fontSize="26">School badge management</text>
              <text x="500" y="534" className="p-mono" fontSize="17" opacity=".85">Badge per school ·
                embroidery spec · version control: not an email thread</text>
            </g>

            <g className="sk-fade sk-s5" filter="url(#sw-shadow)">
              <rect x="450" y="320" width="840" height="110" rx="16" fill="url(#sw-amber-n)"
                    className="p-node-a" strokeWidth="2"/>
              <text x="500" y="360" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="800"
                    fontSize="28">Parent portal + production</text>
              <text x="500" y="396" className="p-accent-ink" fontSize="18" fontWeight="600">Order
                routes to correct school · badge applied correctly · production scheduled from live
                demand</text>
            </g>

            <g className="sk-dots">
              <circle r="6" className="p-cyan"><animateMotion dur="4s" repeatCount="indefinite"><mpath href="#sw-spine"/></animateMotion></circle>
            </g>
          </Plate>
        }
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

      {/* COMMON CHALLENGES */}
      <section className="g-white">
        <div className="wrap">
          <span className="eyebrow">Common challenges</span>
          <h2>Where the problems tend to live</h2>
          <div className="hair" />
          <p className="lede">In schoolwear, the same operational problems appear in different shapes across different businesses. These are the ones that cost the most.</p>
          <div className="grid grid--2">
            {[
              { title: 'Supplier feeds before the peak', body: "Schoolwear ranges don't change often, but when a supplier does update sizing or stock, you need to know before the August rush, not during it. Stale supplier data at peak season creates orders you can't fulfil." },
              { title: 'Sizing that scales with growing pupils', body: "A school's sizing spread is wider and shifts every year. Stock management that understands that means fewer stockouts of the sizes everyone actually needs in the first week of term." },
              { title: 'Badge and embroidery management', body: "Every school badge is a thread file before it's a garment. Managing badge specifications, embroidery requirements, and version control at scale, across dozens of school accounts, is a dedicated workflow that spreadsheets were never built for." },
              { title: 'The parent portal gap', body: "Orders coming through parent portals that don't connect to production systems mean manual re-entry of every order. For the largest schools, that's hundreds of orders requiring individual handling." },
            ].map((c, i) => (
              <article key={i} className="card">
                <span className="kicker">{String(i + 1).padStart(2, '0')} &middot; {c.title}</span>
                <p>{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW I HELP */}
      <section className="g-navy">
        <div className="wrap">
          <span className="eyebrow">How I help</span>
          <h2>What the work actually looks like</h2>
          <div className="hair" />
          <p className="lede">A structured audit followed by specific, costed recommendations. No vague frameworks, no generic advice.</p>
          <div className="grid grid--2" style={{ marginTop: '32px' }}>
            {[
              'Map your entire schoolwear workflow from supplier catalogue through to parent delivery',
              'Identify where supplier data lag is creating fulfilment risk before peak season',
              'Audit sizing spread management and its impact on stock availability',
              'Review badge specification management and its connection to production',
              'Assess how parent orders flow from portal to production floor',
              'Quantify every finding in time, stockout cost, and administrative overhead',
            ].map((item, i) => (
              <div key={i} className="card" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ minWidth: '28px', height: '28px', borderRadius: 'var(--do-radius-full)', background: 'color-mix(in srgb, var(--do-cerulean) 20%, transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'var(--do-text-xs)', fontWeight: 'var(--do-weight-bold)', color: 'var(--do-cerulean)' }}>{String(i + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
