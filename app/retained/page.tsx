import type { Metadata } from 'next';
import Link from 'next/link';
import { Artwork } from '@/components/Artwork';
import { PhotoPiece } from '@/components/PhotoPiece';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { JsonLd } from '@/components/JsonLd';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Hire a Fractional CTO | Decoded Ops',
  description: 'Hire a fractional CTO for ongoing technology leadership without the cost of a full-time hire. Essential, Recommended and Complete tiers, from £950 a month.',
  alternates: { canonical: '/retained' },
  openGraph: {
    type: 'website',
    title: 'Hire a Fractional CTO | Decoded Ops',
    description: 'Hire a fractional CTO for ongoing technology leadership without the cost of a full-time hire. Essential, Recommended and Complete tiers, from £950 a month.',
    url: 'https://decodedops.co.uk/retained',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire a Fractional CTO | Decoded Ops',
    description: 'Hire a fractional CTO for ongoing technology leadership without the cost of a full-time hire. Essential, Recommended and Complete tiers, from £950 a month.',
    images: [OG_IMAGE_PATH],
  },
};

const retainedSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Retained: Fractional CTO',
      description: 'Ongoing technology leadership for decorated-goods businesses. Essential, Recommended and Complete tiers, from £950/mo.',
      provider: {
        '@type': 'Organization',
        name: 'Decoded Ops',
        url: 'https://decodedops.co.uk',
        address: { '@type': 'PostalAddress', addressLocality: 'Worthing', addressRegion: 'West Sussex', addressCountry: 'GB' },
      },
      serviceType: 'Fractional CTO',
      areaServed: 'GB',
      url: 'https://decodedops.co.uk/retained',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What does a fractional CTO do?',
          acceptedAnswer: { '@type': 'Answer', text: 'Ongoing technology leadership without the cost of a full-time hire. Vendor calls, platform questions, roadmap ownership, and the things a business would otherwise sit on for a fortnight. The scope and cadence are agreed at the start.' },
        },
        {
          '@type': 'Question',
          name: 'What are the three tiers?',
          acceptedAnswer: { '@type': 'Answer', text: 'Essential, Recommended and Complete. Each covers a wider scope of involvement, and which one fits is set at the audit by the size and shape of your operation. Retained runs rolling monthly, with no minimum term.' },
        },
        {
          '@type': 'Question',
          name: 'When does a fractional CTO relationship not work?',
          acceptedAnswer: { '@type': 'Answer', text: 'When a business has not worked out what is actually broken yet. A fractional CTO relationship works best once there is a plan to execute, not before one exists.' },
        },
      ],
    },
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
          <p className="lead">Ongoing technology leadership, without the cost of a full-time hire.
            The scope and cadence are agreed at the start.</p>
          <div className="hero-cta">
            <Link className="btn btn-primary" href="/contact">Let&rsquo;s talk about whether this suits you</Link>
          </div>
        </div>
      </section>

      {/* 1a · EVIDENCE PHOTO · DO-ART-910 */}
      <section className="g-white ev-band" data-od-id="evidence">
        <div className="container">
          <PhotoPiece
            src="/images/money/thread-spools-2026-09.webp"
            width={1600}
            height={1067}
            alt="A full row of embroidery thread cones in black, white, yellow, orange, red, pink, blue and green mounted on a machine's thread stand, every position filled."
            no="DO-ART-910"
            rev="01"
            eyebrow="Evidence · Retained"
            caption="Stock that is always there"
            focus="50% 55%"
            priority
          />
        </div>
      </section>

      {/* 2 · FEATURES TRIPLET · the three tiers */}
      <section className="g-white">
        <div className="container stack" style={{ gap: 48 }}>
          <div>
            <p className="eyebrow">Three tiers</p>
            <h2>Essential, Recommended and Complete.</h2>
            <p className="lead" style={{ marginTop: 16 }}>Each tier covers a different level of involvement.
              Which one fits is set at the audit, from £950/mo.</p>
          </div>

          <div className="grid-3">
            <div className="feature">
              <div className="feature-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 5.5h16M4 12h16M4 18.5h9" />
                </svg>
              </div>
              <h3>Essential</h3>
              <p className="feature-meta">A standing line for decisions as they come up</p>
              <p>Vendor calls, platform questions, the thing you&rsquo;d otherwise sit on for a fortnight.</p>
            </div>

            <div className="feature">
              <div className="feature-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
                  strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="16" rx="2.5" /><path d="M3 9.5h18M9 9.5V20" />
                </svg>
              </div>
              <h3>Recommended</h3>
              <p className="feature-meta">Closer to the operation, roadmap owned directly</p>
              <p>On site regularly enough that your team stops saving things up for me.</p>
            </div>

            <div className="feature">
              <div className="feature-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19V9M10 19V5M16 19v-7M22 19H2" />
                </svg>
              </div>
              <h3>Complete</h3>
              <p className="feature-meta">Near full-time strategic and operational leadership</p>
              <p>For a business mid-way through something big enough that it needs one person holding it.</p>
            </div>
          </div>

          <div className="inset" style={{ maxWidth: 'none' }}>
            <b>Rolling monthly, no minimum term.</b> The scope is agreed at the start, and which tier fits
            is set at the audit by the size and shape of your operation. From £950/mo.
          </div>
        </div>
      </section>

      {/* 2a · SCALE PLATE · DO-ART-204 */}
      <section className="g-tint">
        <div className="container">
          <p className="eyebrow">Scale &middot; DO-ART-204</p>
          <h2>Essential to Complete: the scale.</h2>
          <p className="lead" style={{ marginTop: 16 }}>Each tier covers a wider scope and a deeper level
            of involvement. From £950/mo, set at the audit by the size and shape of your operation.</p>

          <div className="plate-scroll" style={{ marginTop: 34 }}>
            <div className="plate-frame">
              <Artwork mode="measure" tone="dark" p="rt" title="Essential to Complete, the scale"
                     sub="Three tiers, each covering a wider scope"
                     no="DO-ART-204" rev="02" cls="DECODED OPS · ISSUED">

                <g className="sk-fade sk-s1" opacity=".5">
                  <line x1="430" y1="212" x2="430" y2="700" className="p-scyan" strokeWidth=".8"
                        strokeOpacity=".35"/>
                </g>

                <g className="sk-fade sk-s2">
                  <text x="60" y="252" className="p-mono" fontSize="17" letterSpacing="1.6"
                        opacity=".55">ESSENTIAL</text>
                  <text x="60" y="282" className="p-mono" fontSize="16" opacity=".4">Standing line for
                    decisions</text>
                  <rect x="430" y="228" width="270" height="62" rx="6" fill="url(#rt-bar)"
                        className="p-node" strokeWidth="1"/>
                </g>

                <g className="sk-fade sk-s3">
                  <text x="60" y="392" className="p-mono" fontSize="17" letterSpacing="1.6"
                        opacity=".55">RECOMMENDED</text>
                  <text x="60" y="422" className="p-mono" fontSize="16" opacity=".4">Closer to the
                    operation</text>
                  <rect x="430" y="368" width="540" height="62" rx="6" fill="url(#rt-bar)"
                        className="p-node" strokeWidth="1"/>
                </g>

                <g className="sk-fade sk-s4" filter="url(#rt-shadow)">
                  <text x="60" y="532" className="p-mono" fontSize="17" letterSpacing="1.6"
                        opacity=".55">COMPLETE</text>
                  <text x="60" y="562" className="p-mono" fontSize="16" opacity=".4">Full strategic and
                    operational leadership</text>
                  <rect x="430" y="508" width="1080" height="62" rx="6" fill="url(#rt-amber-b)"
                        className="p-node-a" strokeWidth="1.4"/>
                </g>

                <g className="sk-fade sk-s6">
                  <line x1="60" y1="640" x2="1540" y2="640" className="p-scyan" strokeWidth=".6"
                        strokeOpacity=".22"/>
                  <text x="60" y="700" className="p-ink" fontFamily="Outfit,sans-serif"
                        fontWeight="600" fontSize="24" opacity=".9">Each tier covers a wider scope.
                    Set at the audit, from £950/mo.</text>
                  <text x="60" y="732" className="p-mono" fontSize="16" opacity=".5">Rolling
                    monthly, no minimum term.</text>
                </g>
              </Artwork>
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
              <p>You haven&rsquo;t worked out what&rsquo;s actually broken yet. Start with a Clarity Audit instead.
                A fractional CTO relationship works best once there&rsquo;s a plan to execute, not before one
                exists. I&rsquo;d rather tell you that now than take a retainer for six months of finding out.</p>
              <p><Link href="/clarity" style={{ color: 'var(--do-sky-blue)', fontWeight: 600 }}>See how a
                Clarity Audit works →</Link></p>
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
          <p className="lead">An hour, no obligation, and an honest answer at the end of it, including if
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
