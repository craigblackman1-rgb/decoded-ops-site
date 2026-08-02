import type { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { JsonLd } from '@/components/JsonLd';
import { Plate } from '@/components/Plate';

// Ported from D:\apps\design-systems\decoded-marketing\retained.html.
// Figures (£1,440 / £2,880 / £5,760, 2/4/8 days a month, six-month
// minimum) cross-checked against DO_Pricing_Architecture_v8.1.md — match
// exactly, no changes. Replaces the previous Tailwind implementation.

export const metadata: Metadata = {
  title: 'Fractional CTO — Decoded Ops',
  description: 'Ongoing technology leadership for UK decorated-goods businesses, without the cost of a full-time hire. Fixed days a month, agreed at the start. Advisory, Embedded and Programme tiers.',
  alternates: { canonical: '/retained' },
  openGraph: {
    type: 'website',
    title: 'Fractional CTO — Decoded Ops',
    description: 'Ongoing technology leadership for UK decorated-goods businesses, without the cost of a full-time hire. Fixed days a month, agreed at the start. Advisory, Embedded and Programme tiers.',
    url: 'https://decodedops.co.uk/retained',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fractional CTO — Decoded Ops',
    description: 'Ongoing technology leadership for UK decorated-goods businesses, without the cost of a full-time hire.',
  },
};

const retainedSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Retained — Fractional CTO',
  description: 'Ongoing technology leadership for decorated-goods businesses. Fixed days a month, agreed at the start. Advisory, Embedded and Programme tiers.',
  provider: {
    '@type': 'Organization',
    name: 'Decoded Ops',
    url: 'https://decodedops.co.uk',
    address: { '@type': 'PostalAddress', addressLocality: 'Worthing', addressRegion: 'West Sussex', addressCountry: 'GB' },
  },
  serviceType: 'Fractional CTO',
  areaServed: 'GB',
  url: 'https://decodedops.co.uk/retained',
  offers: [
    { '@type': 'Offer', name: 'Advisory', price: '1440', priceCurrency: 'GBP' },
    { '@type': 'Offer', name: 'Embedded', price: '2880', priceCurrency: 'GBP' },
    { '@type': 'Offer', name: 'Programme', price: '5760', priceCurrency: 'GBP' },
  ],
};

export default function RetainedPage() {
  return (
    <>
      <JsonLd data={retainedSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Fractional CTO', url: 'https://decodedops.co.uk/retained' },
      ]} />

      {/* 1 · HERO CENTRE */}
      <section className="g-off">
        <div className="container hero-center">
          <p className="eyebrow">Fractional CTO</p>
          <h1>Fractional CTO. Not a project. A standing decision-maker.</h1>
          <p className="lead">Ongoing technology leadership, without the cost of a full-time hire. Fixed days
            a month, agreed at the start.</p>
          <div className="hero-cta">
            <Link className="btn btn-primary" href="/contact">Let&rsquo;s talk about whether this suits you</Link>
          </div>
        </div>
      </section>

      {/* 2 · FEATURES TRIPLET · the three tiers */}
      {/* Day-count language is allowed here and only here, per pricing v8.1. */}
      <section className="g-white">
        <div className="container stack" style={{ gap: 48 }}>
          <div>
            <p className="eyebrow">Three ways to run it</p>
            <h2>Fixed days a month. Fixed price.</h2>
            <p className="lead" style={{ marginTop: 16 }}>No day rate to argue over, no invoice that changes
              shape every month. You know what you&rsquo;re paying before the first meeting.</p>
          </div>

          <div className="grid-3">
            <div className="feature">
              <div className="feature-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 5.5h16M4 12h16M4 18.5h9" />
                </svg>
              </div>
              <h3>Advisory</h3>
              <p className="feature-meta">2 days a month · £1,440</p>
              <p>A standing line to me for the decisions as they come up. Vendor calls, platform
                questions, the thing you&rsquo;d otherwise sit on for a fortnight.</p>
            </div>

            <div className="feature">
              <div className="feature-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
                  strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="16" rx="2.5" /><path d="M3 9.5h18M9 9.5V20" />
                </svg>
              </div>
              <h3>Embedded</h3>
              <p className="feature-meta">4 days a month · £2,880</p>
              <p>Closer to the operation, with more of the roadmap owned directly. On site regularly
                enough that your team stops saving things up for me.</p>
            </div>

            <div className="feature">
              <div className="feature-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19V9M10 19V5M16 19v-7M22 19H2" />
                </svg>
              </div>
              <h3>Programme</h3>
              <p className="feature-meta">8 days a month · £5,760</p>
              <p>Near full-time strategic and operational leadership, for a business mid-way through
                something big enough that it needs one person holding it.</p>
            </div>
          </div>

          <div className="inset" style={{ maxWidth: 'none' }}>
            <b>Six-month minimum on all three tiers.</b> Long enough to be useful, short enough that
            you&rsquo;re not trapped in it. The price is the price at every turnover band.
          </div>
        </div>
      </section>

      {/* 2a · SCALE PLATE · DO-ART-204 */}
      <section className="g-tint">
        <div className="container">
          <p className="eyebrow">Scale &middot; DO-ART-204</p>
          <h2>Advisory to Programme — the scale.</h2>
          <p className="lead" style={{ marginTop: 16 }}>2, 4 and 8 days a month. Price scales in proportion.
            Same price at every turnover band.</p>

          <div className="plate-scroll" style={{ marginTop: 34 }}>
            <div className="plate-frame">
              <Plate tone="dark" p="rt" title="Advisory to Programme, the scale"
                     sub="2, 4 and 8 days a month — price scales in proportion"
                     no="DO-ART-204" rev="01" cls="DECODED OPS · ISSUED">

                <g className="sk-fade sk-s1" opacity=".5">
                  <line x1="430" y1="212" x2="430" y2="700" className="p-scyan" strokeWidth=".8"
                        strokeOpacity=".35"/>
                </g>

                <g className="sk-fade sk-s2">
                  <text x="60" y="252" className="p-mono" fontSize="17" letterSpacing="1.6"
                        opacity=".55">ADVISORY</text>
                  <text x="60" y="282" className="p-mono" fontSize="16" opacity=".4">2 days a month</text>
                  <rect x="430" y="228" width="270" height="62" rx="6" fill="url(#rt-bar)"
                        className="p-node" strokeWidth="1"/>
                  <text x="458" y="270" className="p-ink" fontFamily="Outfit,sans-serif"
                        fontWeight="700" fontSize="28">£1,440</text>
                </g>

                <g className="sk-fade sk-s3">
                  <text x="60" y="392" className="p-mono" fontSize="17" letterSpacing="1.6"
                        opacity=".55">EMBEDDED</text>
                  <text x="60" y="422" className="p-mono" fontSize="16" opacity=".4">4 days a month</text>
                  <rect x="430" y="368" width="540" height="62" rx="6" fill="url(#rt-bar)"
                        className="p-node" strokeWidth="1"/>
                  <text x="458" y="410" className="p-ink" fontFamily="Outfit,sans-serif"
                        fontWeight="700" fontSize="28">£2,880</text>
                </g>

                <g className="sk-fade sk-s4" filter="url(#rt-shadow)">
                  <text x="60" y="532" className="p-mono" fontSize="17" letterSpacing="1.6"
                        opacity=".55">PROGRAMME</text>
                  <text x="60" y="562" className="p-mono" fontSize="16" opacity=".4">8 days a
                    month</text>
                  <rect x="430" y="508" width="1080" height="62" rx="6" fill="url(#rt-amber-b)"
                        className="p-node-a" strokeWidth="1.4"/>
                  <text x="458" y="550" className="p-accent-ink" fontFamily="Outfit,sans-serif"
                        fontWeight="700" fontSize="28">£5,760</text>
                </g>

                <g className="sk-fade sk-s6">
                  <line x1="60" y1="640" x2="1540" y2="640" className="p-scyan" strokeWidth=".6"
                        strokeOpacity=".22"/>
                  <text x="60" y="700" className="p-ink" fontFamily="Outfit,sans-serif"
                        fontWeight="600" fontSize="24" opacity=".9">Exact scale. Double the
                    days, double the price — every time.</text>
                  <text x="60" y="732" className="p-mono" fontSize="16" opacity=".5">Six-month
                    minimum, all three tiers. Same price at every turnover band.</text>
                </g>
              </Plate>
            </div>
          </div>
        </div>
      </section>

      {/* 3 · WHEN IT FITS */}
      <section className="g-navy">
        <div className="container">
          <p className="eyebrow">Straight answer</p>
          <h2>When it fits, and when it doesn&rsquo;t.</h2>

          <div className="grid-2" style={{ marginTop: 40 }}>
            <div className="panel">
              <h3>It fits when</h3>
              <p>You&rsquo;ve just finished an audit and need someone to own the roadmap that came out of it.
                You&rsquo;re mid-way through a platform change and need one person keeping vendors honest.
                You&rsquo;re scaling, and the systems that got you here won&rsquo;t get you further. Or you&rsquo;ve lost
                the person who held all of this in their head, and you don&rsquo;t want that to happen twice.</p>
            </div>
            <div className="panel">
              <h3>It doesn&rsquo;t fit when</h3>
              <p>You haven&rsquo;t worked out what&rsquo;s actually broken yet. Start with a Clarity Audit instead —
                a fractional CTO relationship works best once there&rsquo;s a plan to execute, not before one
                exists. I&rsquo;d rather tell you that now than take a retainer for six months of finding out.</p>
              <p><Link href="/clarity" style={{ color: 'var(--do-sky-blue)', fontWeight: 600 }}>See how Discovery
                Day works →</Link></p>
            </div>
          </div>

          <figure className="pull" style={{ marginTop: 48 }}>
            <blockquote>I&rsquo;m not going to tell you what to buy. I&rsquo;ll show you what&rsquo;s on the market, what
              it costs, and where it falls short, so whatever you decide, you decide on the merits.</blockquote>
            <cite>Craig Blackman · Decoded Ops</cite>
          </figure>
        </div>
      </section>

      {/* 4 · CTA STRIP */}
      <section className="g-white cta-strip">
        <div className="container" style={{ maxWidth: 760 }}>
          <h2>Let&rsquo;s talk about whether this suits you.</h2>
          <p className="lead">An hour, no obligation, and an honest answer at the end of it — including if
            the answer is that you don&rsquo;t need this yet.</p>
          <div className="hero-cta">
            <Link className="btn btn-primary" href="/contact">Let&rsquo;s talk about whether this suits you</Link>
            <Link className="btn btn-ghost btn-arrow" href="/pricing">See the full price list</Link>
          </div>
        </div>
      </section>
    </>
  );
}
