import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
import { locations } from '@/data/locations';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { D17Motion } from '@/components/D17Motion';
import { getCoverageMapHtml } from '@/lib/coverage-map';
import { SystemsDisconnectedGraphic } from '@/components/graphics/SystemsDisconnectedGraphic';
import '@/app/d17-global.css';
import '@/app/d17-locations.css';

export const metadata: Metadata = {
  title: 'Operations Consultant in Sussex & Surrey | Decoded Ops',
  description: 'Operations and technology consultant for print, embroidery and workwear businesses across Sussex and Surrey. Based in Worthing.',
  alternates: { canonical: '/locations/sussex-surrey' },
  openGraph: {
    title: 'Operations Consultant in Sussex & Surrey | Decoded Ops',
    description: 'Operations and technology consultant for print, embroidery and workwear businesses across Sussex and Surrey. Based in Worthing.',
    url: 'https://decodedops.co.uk/locations/sussex-surrey',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Operations Consultant in Sussex & Surrey | Decoded Ops',
    description: 'Operations and technology consultant for print, embroidery and workwear businesses across Sussex and Surrey. Based in Worthing.',
  },
};

const sussexSurreyTowns = locations
  .filter((l) => l.county === 'West Sussex' || l.county === 'East Sussex' || l.county === 'Surrey')
  .map((l) => l.name);

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

const locationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Where does the operations consultant service cover?',
          acceptedAnswer: { '@type': 'Answer', text: 'Based in Worthing, West Sussex, the service covers businesses across Sussex, Surrey, and the wider UK. On-site days are available throughout the UK for businesses that need hands-on involvement.' },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between hiring a fractional CTO and using managed IT support?',
          acceptedAnswer: { '@type': 'Answer', text: 'Managed IT support services handle day-to-day IT issues: helpdesk, hardware, network. A fractional CTO provides strategic technology leadership: ERP selection, system architecture, vendor management, and technology roadmap ownership. Fractional CTO services address the decisions that determine where the business is going; managed IT support keeps the current setup running.' },
        },
        {
          '@type': 'Question',
          name: 'Do you offer fractional CTO services for print businesses in Sussex?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Fractional CTO for print and decoration businesses in West Sussex and across the South East is a core offering. The service combines sector-specific experience in print, embroidery, and decorated goods with technology leadership, not generic IT consultancy.' },
        },
      ],
    },
  ],
};

export default function SussexSurreyPage() {
  const coverageMap = getCoverageMapHtml('worthing', 'Worthing', 'West Sussex', 'This is where I\'m based', 'Operations consultant');

  return (
    <>
      <D17Motion />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Sussex & Surrey', url: 'https://decodedops.co.uk/locations/sussex-surrey' },
      ]} />

      {/* HERO */}
      <section className="g-off">
        <div className="wrap hero-center">
          <span className="eyebrow">Operations consultant · Sussex & Surrey</span>
          <h1 className="h1">
            <span>Operations and technology consulting for </span>
            <span className="h1 em" style={{ color: 'var(--do-text-cerulean)', fontFamily: 'var(--do-font-heading)', display: 'inline' }}>Sussex and Surrey</span>
            <span> businesses, without the full-time hire.</span>
          </h1>
          <p className="lede">
            Growing businesses in Sussex and Surrey face real technology decisions: which vendor to pick, which systems to integrate, which platform to choose. Without someone senior owning those decisions, the cost quietly adds up.
          </p>
          <div className="hero-cta">
            <Link href="/contact" className="btn btn--primary">
              Book a free call <ArrowRight size={18} />
            </Link>
            <Link href="/retained" className="btn btn--outline">
              See how fractional CTO works
            </Link>
          </div>
          <p className="direct">Or <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">book a call directly</a></p>
        </div>
        <div className="wrap hero-art" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '100%', borderRadius: 'var(--do-radius-2xl)', overflow: 'hidden', boxShadow: 'var(--do-shadow-lg)' }}>
            <SystemsDisconnectedGraphic connected variant="light" />
          </div>
        </div>
      </section>

      {/* LOCAL CONTEXT */}
      <section className="g-white" style={{ borderBottom: '1px solid var(--do-border-subtle)' }}>
        <div className="wrap">
          <div className="loc-ctx">
            <div>
              <span className="eyebrow" style={{ marginBottom: 22 }}>Worthing</span>
              <h2 className="h2" style={{ fontSize: 'var(--do-text-2xl)' }}>
                What this looks like for Sussex and Surrey businesses
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 20 }}>
                {['Garment decoration', 'Embroidery and screen print', 'Workwear suppliers', 'Promotional merchandise', 'Signs and graphics', 'Labels and packaging'].map((sector) => (
                  <span key={sector} style={{ fontSize: 'var(--do-text-xs)', fontWeight: 'var(--do-weight-medium)', color: 'var(--do-text-muted)', padding: '4px 10px', borderRadius: 'var(--do-radius-full)', background: 'color-mix(in srgb, var(--do-prussian-blue) 5%, transparent)', border: '1px solid color-mix(in srgb, var(--do-prussian-blue) 10%, transparent)' }}>
                    {sector}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p style={{ color: 'var(--do-text-secondary)', fontSize: 'var(--do-text-lg)', lineHeight: 1.75 }}>
                I work with decorated-goods businesses across West Sussex, East Sussex, and Surrey. The operational problems in this trade don&apos;t change from postcode to postcode: supplier data that doesn&apos;t match what&apos;s on the shelf, artwork stuck in an email thread, and stock nobody fully trusts. An on-site day here works the same way it does everywhere: I follow the actual process, then write down what I find.
              </p>
              <p style={{ color: 'var(--do-text-secondary)', fontSize: 'var(--do-text-lg)', lineHeight: 1.75, marginTop: 16, fontStyle: 'italic' }}>
                Whether a decoration business is based in Worthing itself or out towards Shoreham-by-Sea, Brighton, or Guildford, the same systems problems turn up: manual handoffs, disconnected data, and processes that live in someone&apos;s head rather than on paper.
              </p>
              <p style={{ color: 'var(--do-text-secondary)', fontSize: 'var(--do-text-lg)', lineHeight: 1.75, marginTop: 16 }}>
                The work I do is the same wherever the business is based: a structured, independent look at what&apos;s running, what it costs, and what it&apos;s holding back. But the conversation starts with understanding what&apos;s specific to this business, in this market.
              </p>
              <div className="card loc-cta-card" style={{ marginTop: 24 }}>
                <div>
                  <div style={{ fontSize: 'var(--do-text-xs)', fontWeight: 'var(--do-weight-semibold)', color: 'var(--do-text-cerulean)', textTransform: 'uppercase', letterSpacing: 'var(--do-tracking-wide)', marginBottom: 4 }}>From Worthing</div>
                  <div style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-text-secondary)' }}>This is where I&apos;m based</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 'var(--do-text-xs)', fontWeight: 'var(--do-weight-semibold)', color: 'var(--do-text-cerulean)', textTransform: 'uppercase', letterSpacing: 'var(--do-tracking-wide)', marginBottom: 4 }}>Region</div>
                  <div style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-text-secondary)' }}>West Sussex, East Sussex, and Surrey. On-site where the work needs it.</div>
                </div>
              </div>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: coverageMap }} />
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="g-tint">
        <div className="wrap">
          <div style={{ maxWidth: '42ch', marginBottom: 64 }}>
            <span className="eyebrow" style={{ marginBottom: 22 }}>Where the cost hides</span>
            <h2 className="h2">The problems that tend to appear</h2>
            <p className="lede">
              These are the patterns I see most often in operations consultant engagements. They look different in every business, but the underlying structure is almost always the same.
            </p>
          </div>
          <div className="grid grid--2">
            {painPoints.map((p, i) => (
              <div key={p.title} className="card">
                <div style={{ fontSize: 'var(--do-text-3xl)', fontWeight: 'var(--do-weight-bold)', color: 'var(--do-text-cerulean)', marginBottom: 16 }}>{String(i + 1).padStart(2, '0')}</div>
                <h3 className="h3" style={{ marginBottom: 8 }}>{p.title}</h3>
                <p style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-text-secondary)', lineHeight: 1.75, marginBottom: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW I HELP */}
      <section className="g-navy">
        <div className="wrap">
          <div className="loc-how">
            <div>
              <span className="eyebrow" style={{ marginBottom: 22 }}>How I help</span>
              <h2 className="h2">What the work actually looks like</h2>
              <p className="lede">
                No frameworks. No generic recommendations. A structured, independent process that produces specific answers for this business.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 32 }}>
                {whatIdo.map((item, i) => (
                  <div key={i} className="card" style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'color-mix(in srgb, var(--do-cerulean) 20%, transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                      <span style={{ fontSize: 'var(--do-text-xs)', fontWeight: 'var(--do-weight-bold)', color: '#c3d0d6' }}>{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <p style={{ fontSize: 'var(--do-text-sm)', color: '#c3d0d6', lineHeight: 1.75, marginBottom: 0 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* STICKY CTA CARD */}
            <div style={{ position: 'sticky', top: 112 }}>
              <div className="card" style={{ padding: 32 }}>
                <div style={{ fontSize: 'var(--do-text-2xl)', fontWeight: 'var(--do-weight-bold)', color: 'var(--do-text-on-dark)', marginBottom: 8 }}>Find out if a fractional CTO is right for your business</div>
                <p style={{ fontSize: 'var(--do-text-sm)', color: '#dfe6ea', lineHeight: 1.75, marginBottom: 24 }}>
                  The first conversation is free and there&apos;s no obligation. Just a call about what&apos;s happening in your business and whether I can help.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
                  {[
                    'No vendor relationships or commission',
                    'Worked at every level, warehouse floor to boardroom',
                    '3× Clarity Guarantee on audit work',
                    'Based in Worthing, on-site across Sussex and Surrey',
                  ].map((item) => (
                    <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 'var(--do-text-sm)', color: '#dfe6ea' }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--do-cerulean)', marginTop: 7, flexShrink: 0 }} />
                      {item}
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="btn btn--primary" style={{ width: '100%' }}>
                  Book a free call <ArrowRight size={18} />
                </Link>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: 'var(--do-text-sm)', color: '#dfe6ea', fontWeight: 'var(--do-weight-medium)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, marginTop: 12 }}>Or book a call directly <ArrowRight size={14} /></a>
                <p style={{ fontSize: 'var(--do-text-xs)', color: '#c3d0d6', textAlign: 'center', marginTop: 16, marginBottom: 0 }}>
                  Serving Sussex and Surrey from Worthing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOWNS I COVER */}
      <section className="g-off" style={{ borderBottom: '1px solid var(--do-border-subtle)' }}>
        <div className="wrap">
          <div style={{ maxWidth: 720, marginBottom: 40 }}>
            <span className="eyebrow" style={{ marginBottom: 22 }}>Towns I cover</span>
            <h2 className="h2">On site across Sussex and Surrey</h2>
            <p style={{ color: 'var(--do-text-secondary)', fontSize: 'var(--do-text-lg)', lineHeight: 1.75 }}>
              Based in Worthing, West Sussex. On-site where the work needs it across the whole region.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {sussexSurreyTowns.map((town) => (
              <span key={town} style={{ fontSize: 'var(--do-text-sm)', fontWeight: 'var(--do-weight-medium)', color: 'var(--do-text-secondary)', padding: '6px 14px', borderRadius: 'var(--do-radius-full)', background: 'color-mix(in srgb, var(--do-prussian-blue) 5%, transparent)', border: '1px solid color-mix(in srgb, var(--do-prussian-blue) 10%, transparent)' }}>
                {town}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CROSS-LINK TO AUDIT */}
      <section className="g-navy">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="eyebrow" style={{ marginBottom: 22 }}>Not sure where to start?</span>
          <h2 className="h2">Start with a Clarity Audit</h2>
          <p className="lede">
            A fixed-price, one-day diagnostic. Find out what your systems are costing you before committing to anything ongoing.
          </p>
          <div className="btn-row" style={{ justifyContent: 'center', marginTop: 32 }}>
            <Link href="/locations/tech-audit" className="btn btn--outline">
              Technology audit, UK-wide <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
