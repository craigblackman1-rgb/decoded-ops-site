import type { Metadata } from 'next';
import { SectorPageDS } from '@/components/SectorPageDS';
import { Plate } from '@/components/Plate';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Teamwear & Clubwear | Decoded Ops',
  description: 'Technology and operations consultancy for teamwear and clubwear businesses. Squad numbers, sponsor logos and a hard deadline before the first match, proven at TackleBag.',
  alternates: { canonical: '/sectors/teamwear-clubwear' },
  openGraph: {
    title: 'Teamwear & Clubwear | Decoded Ops',
    description: 'Technology and operations consultancy for teamwear and clubwear businesses. Squad numbers, sponsor logos and a hard deadline before the first match, proven at TackleBag.',
    url: 'https://decodedops.co.uk/sectors/teamwear-clubwear',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teamwear & Clubwear | Decoded Ops',
    description: 'Technology and operations consultancy for teamwear and clubwear businesses. Squad numbers, sponsor logos and a hard deadline before the first match, proven at TackleBag.',
  },
};

const sectorSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://decodedops.co.uk/sectors/teamwear-clubwear#webpage',
  url: 'https://decodedops.co.uk/sectors/teamwear-clubwear',
  name: 'Teamwear & Clubwear | Decoded Ops',
  description: 'Technology and operations consultancy for teamwear and clubwear businesses. Squad numbers, sponsor logos and a hard deadline before the first match, proven at TackleBag.',
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
        heroSecondaryCta={{ label: 'See how the audit works', href: '/clarity' }}
        heroImage={{
          src: '/images/sectors/prod-polo.jpg',
          width: 900,
          height: 1125,
          alt: 'A folded zip-neck polo shirt in cream and sand panels, photographed flat on a plain grey surface.',
        }}
        shotCaption="One base garment. Twenty-four names, twenty-four numbers, and one sponsor logo that has to sit in the same place on every one."
        plate={
          <Plate tone="dark" p="tw" title="Teamwear: squad list to kitted-out"
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
                colourways: live across every channel a team orders through</text>
            </g>

            <g className="sk-fade sk-s4">
              <rect x="450" y="460" width="840" height="110" rx="14" fill="url(#tw-node)"
                    className="p-node" strokeWidth="1.4"/>
              <text x="500" y="500" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="700"
                    fontSize="26">Squad list management</text>
              <text x="500" y="534" className="p-mono" fontSize="17" opacity=".85">Name · number ·
                size per player · sponsor logo per age group: not a spreadsheet</text>
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
        featuresHeading="Five challenges specific to this sector."
        features={[
          {
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6h16M4 12h16M4 18h10" /><circle cx="18.5" cy="18" r="2.2" />
              </svg>
            ),
            title: 'Squad-level personalisation data',
            body: 'Names, numbers, sponsor logos: every kit is a variant of the same product. Systems that treat that as one SKU force manual workarounds on every single order.',
          },
          {
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><path d="M16 2v4M8 2v4M3 10h18" /><circle cx="12" cy="15" r="1" />
              </svg>
            ),
            title: 'Seasonal deadline pressure',
            body: 'The tolerance for lateness in teamwear is zero. The first match of the season is a fixed date. Production scheduling has to work backwards from that, and most systems don\u2019t account for it.',
          },
          {
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 12a8 8 0 1 1-2.6-5.9" /><path d="M20 4v4.5h-4.5" />
              </svg>
            ),
            title: 'Kit range churn',
            body: 'Kit ranges change season to season. Keeping supplier data current across every channel is a constant maintenance task. And when it\u2019s wrong, it\u2019s the order that fails, not the system.',
          },
          {
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.5 6.5 10 17l-5-5" /><path d="M3.5 20.5h17" />
              </svg>
            ),
            title: 'Sponsor logo management',
            body: 'Every sponsor has their own logo specifications, positioning requirements, and approval process. Managing that at squad scale, across multiple teams and age groups, is a dedicated workflow that email can\u2019t handle.',
          },
          {
            icon: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6h16M4 12h16M4 18h10" /><path d="M9 18l3-3 3 3" />
              </svg>
            ),
            title: 'The proof and approval bottleneck',
            body: 'When twenty-four kits each need a proof, the approval cycle can consume more time than the production itself. Automating that loop is one of the most impactful levers in teamwear operations.',
          },
        ]}
        checklistHeading="An independent audit of the whole teamwear workflow."
        checklist={[
          'Map your full order workflow from squad list to delivery',
          'Identify where personalisation data is being managed manually',
          'Review your supplier catalogue management for kit range accuracy',
          'Audit the artwork and proof approval process for sponsor logos and numbering',
          'Assess how seasonal deadlines are managed against production capacity',
          'Review eCommerce and order management integration',
          'Quantify every finding in time, admin cost, and rework',
        ]}
        otherSectors={[
          { label: 'Workwear', href: '/sectors/workwear' },
          { label: 'Schoolwear', href: '/sectors/schoolwear' },
          { label: 'Promotional merchandise', href: '/sectors/promotional-merchandise' },
        ]}
        ctaLead="An hour on squad data, sponsor logos, and where the proof loop is eating time before the first match."
      />

      {/* COMMON CHALLENGES */}
      <section className="g-white">
        <div className="wrap">
          <span className="eyebrow">Common challenges</span>
          <h2>Where the problems tend to live</h2>
          <div className="hair" />
          <p className="lede">In teamwear and clubwear, the same operational problems appear in different shapes across different businesses. These are the ones that cost the most.</p>
          <div className="grid grid--2">
            {[
              { title: 'Squad-level personalisation data', body: "Names, numbers, sponsor logos: every kit is a variant of the same product. Systems that treat that as one SKU force manual workarounds on every single order." },
              { title: 'Seasonal deadline pressure', body: "The first match of the season is a fixed date. The tolerance for lateness is zero. Production scheduling has to work backwards from that, and most systems don't account for it." },
              { title: 'Kit range churn', body: "Kit ranges change season to season. Keeping supplier data current across every channel is a constant maintenance task. When it's wrong, it's the order that fails, not the system." },
              { title: 'Sponsor logo management', body: "Every sponsor has their own logo specifications, positioning requirements, and approval process. Managing that at squad scale across multiple teams and age groups is a dedicated workflow that email can't handle." },
              { title: 'The proof and approval bottleneck', body: "When twenty-four kits each need a proof, the approval cycle can consume more time than the production itself. Automating that loop is one of the most impactful levers in teamwear operations." },
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
              'Map your full order workflow from squad list through production to delivery',
              'Identify where personalisation data is managed manually across orders',
              'Review supplier catalogue management for kit range accuracy at scale',
              'Audit the artwork and proof approval process for sponsor logos and numbering',
              'Assess how seasonal deadlines are managed against production capacity',
              'Quantify every finding in time, admin cost, and rework',
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
