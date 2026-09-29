import type { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { JsonLd } from '@/components/JsonLd';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';

const TITLE = 'Fractional COO for Print & Embroidery | Decoded Ops';
const DESCRIPTION = 'I work as a fractional COO for print, embroidery and workwear firms, owning production flow, supplier data and systems part time, without a full-time hire.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/fractional-coo' },
  openGraph: {
    type: 'website',
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://decodedops.co.uk/fractional-coo',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE_PATH],
  },
};

// Single source for the visible FAQ and the FAQPage JSON-LD, so the two always match word for word.
const faqs = [
  {
    q: 'What is a fractional COO?',
    a: 'A part-time chief operating officer. They own how your operations run, from production flow to suppliers to the weekly management rhythm, for an agreed scope and cadence instead of a full-time salary.',
  },
  {
    q: 'Is a fractional COO the same as a fractional operations director?',
    a: 'In practice, yes. The titles get used interchangeably. What matters is that one person owns operations for you, with the scope and cadence agreed at the start.',
  },
  {
    q: 'How does a fractional COO engagement with you start?',
    a: 'With a Clarity Audit. I spend a day on site, then give you a written plan. If ongoing leadership is the right next step, it moves to Retained, which runs on a 12-month minimum, then rolling monthly.',
  },
  {
    q: 'When is a fractional COO the wrong choice?',
    a: 'When you need someone on site every day, or when you haven\u2019t worked out what\u2019s actually broken yet. The first is a full-time hire. The second is a Clarity Audit.',
  },
];

const fractionalCooSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Fractional COO',
      description: 'Part-time operations leadership for print, embroidery and workwear businesses, delivered through the Retained service after a Clarity Audit.',
      provider: {
        '@type': 'Organization',
        name: 'Decoded Ops',
        url: 'https://decodedops.co.uk',
        address: { '@type': 'PostalAddress', addressLocality: 'Worthing', addressRegion: 'West Sussex', addressCountry: 'GB' },
      },
      serviceType: 'Fractional COO',
      areaServed: 'GB',
      url: 'https://decodedops.co.uk/fractional-coo',
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

export default function FractionalCooPage() {
  return (
    <>
      <JsonLd data={fractionalCooSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Fractional COO', url: 'https://decodedops.co.uk/fractional-coo' },
      ]} />

      {/* 1 · HERO CENTRE */}
      <section className="g-off">
        <div className="container hero-center">
          <p className="eyebrow">Fractional COO</p>
          <h1>Fractional COO for print and embroidery businesses.</h1>
          <p className="lead">A fractional COO owns your operations part time, so you get the leadership without a full-time hire.
            I&rsquo;ve spent twenty-five years in print, embroidery and decoration, from the warehouse floor to IT to operations,
            and I work inside your business the way I&rsquo;d want someone to work inside mine.</p>
          <div className="hero-cta">
            <Link className="btn btn-primary" href="/contact">Let&rsquo;s talk about whether this suits you</Link>
            <Link className="btn btn-ghost btn-arrow" href="/retained">How the engagement works</Link>
          </div>
        </div>
      </section>

      {/* 2 · WHAT IT COVERS */}
      <section className="g-white">
        <div className="container stack" style={{ gap: 48 }}>
          <div>
            <p className="eyebrow">What it covers</p>
            <h2>What a fractional COO does in a decoration business.</h2>
            <p className="lead" style={{ marginTop: 16 }}>Some owners call it a fractional operations director, and some an outsourced COO.
              The job is the same. One person owns how the work runs, and your team stops carrying it alone.</p>
          </div>

          <div className="grid-2">
            <div className="feature">
              <div className="feature-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 5.5h16M4 12h16M4 18.5h9" />
                </svg>
              </div>
              <h3>Production flow</h3>
              <p className="feature-meta">From order to despatch</p>
              <p>I walk the floor, find where jobs wait, and fix the handoffs between artwork, production and despatch.
                After twenty-five years in this trade I know what a stalled job looks like before anyone tells me.</p>
            </div>

            <div className="feature">
              <div className="feature-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
                  strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="16" rx="2.5" /><path d="M3 9.5h18M9 9.5V20" />
                </svg>
              </div>
              <h3>Supplier data</h3>
              <p className="feature-meta">One catalogue you can trust</p>
              <p>Supplier files arrive in different shapes and go out of date. I own how they get cleaned, matched and kept current.
                At Hanicks, 317,812 supplier products now sit in one catalogue.</p>
            </div>

            <div className="feature">
              <div className="feature-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19V9M10 19V5M16 19v-7M22 19H2" />
                </svg>
              </div>
              <h3>Systems</h3>
              <p className="feature-meta">What you run and what it costs</p>
              <p>I help you decide whether to use what&rsquo;s already there, add a layer on top, or use something already built.
                Then I keep the vendors honest while it goes in.</p>
            </div>

            <div className="feature">
              <div className="feature-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 5.5h16M4 12h16M4 18.5h9" />
                </svg>
              </div>
              <h3>Team rhythm</h3>
              <p className="feature-meta">A regular slot with your managers</p>
              <p>What shipped, what&rsquo;s stuck, what&rsquo;s next. Decisions get made in that slot instead of being
                saved up for a fortnight.</p>
            </div>
          </div>

          <div className="inset" style={{ maxWidth: 'none' }}>
            <b>12-month minimum, then rolling monthly.</b> I deliver this through the Retained service, and the scope is
            agreed at the start. <Link href="/retained" style={{ color: 'var(--do-sky-blue)', fontWeight: 600 }}>See how a Retained
            engagement works &rarr;</Link>
          </div>
        </div>
      </section>

      {/* 3 · WHEN IT FITS */}
      <section className="g-navy">
        <div className="container">
          <p className="eyebrow">Straight answer</p>
          <h2>When it&rsquo;s the right call, and when it isn&rsquo;t.</h2>

          <div className="grid-2" style={{ marginTop: 40 }}>
            <div className="panel">
              <h3>It fits when</h3>
              <p>You&rsquo;ve grown past the point where you can hold operations in your head, and a full-time COO would be
                more than you need. You&rsquo;ve just finished an audit and somebody has to own the plan. Or the person who
                held all of this has left, and you don&rsquo;t want that to happen twice.</p>
            </div>
            <div className="panel">
              <h3>It doesn&rsquo;t fit when</h3>
              <p>You need someone on site every day, which is a full-time hire. Or you haven&rsquo;t worked out what&rsquo;s
                actually broken yet, and a Clarity Audit comes first. I&rsquo;d rather tell you that now than take a retainer
                for six months of finding out.</p>
              <p><Link href="/clarity" style={{ color: 'var(--do-sky-blue)', fontWeight: 600 }}>See how a
                Clarity Audit works &rarr;</Link></p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 · HOW IT STARTS */}
      <section className="g-white">
        <div className="container" style={{ maxWidth: 760 }}>
          <p className="eyebrow">How it starts</p>
          <h2>Every engagement starts with a Clarity Audit.</h2>
          <p className="lead" style={{ marginTop: 16 }}>I spend a day on site, then write up what I found and give you a plan.
            That tells us both what the operation needs and how much of me it needs. Retained follows if it&rsquo;s the right next step.</p>
          <div className="hero-cta">
            <Link className="btn btn-ghost btn-arrow" href="/clarity">See how a Clarity Audit works</Link>
          </div>
        </div>
      </section>

      {/* 5 · FAQ (rendered from the same array as the FAQPage JSON-LD) */}
      <section className="g-tint">
        <div className="container">
          <p className="eyebrow">Questions</p>
          <h2>What owners ask me.</h2>

          <div className="grid-2" style={{ marginTop: 40 }}>
            {faqs.map((f) => (
              <div className="panel" key={f.q}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 · CTA STRIP (identical to /retained) */}
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
