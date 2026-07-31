import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Data scattered — Decoded Ops',
  description: 'Your supplier data is in six places, and none of them agree. How disconnected feeds, spreadsheets and platforms create a product data problem for decorated-goods businesses, and what fixes it.',
  alternates: { canonical: '/problems/data-scattered' },
  openGraph: {
    title: 'Data scattered — Decoded Ops',
    description: 'Your supplier data is in six places, and none of them agree. How disconnected feeds, spreadsheets and platforms create a product data problem for decorated-goods businesses, and what fixes it.',
    url: 'https://decodedops.co.uk/problems/data-scattered',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data scattered — Decoded Ops',
    description: 'Your supplier data is in six places, and none of them agree. How disconnected feeds, spreadsheets and platforms create a product data problem for decorated-goods businesses, and what fixes it.',
  },
};

const dataScatteredSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why is my product data different in every system?',
          acceptedAnswer: { '@type': 'Answer', text: 'Every supplier has their own format, each system was added to solve one problem, and reconciling by hand becomes the job. Nobody standardises to you, so you end up standardising to nobody.' },
        },
        {
          '@type': 'Question',
          name: 'How much does scattered data cost a print or embroidery business?',
          acceptedAnswer: { '@type': 'Answer', text: 'Someone spends real hours every week manually checking one system against another. That time is the actual cost of the scatter, and it rarely gets counted as one.' },
        },
        {
          '@type': 'Question',
          name: 'What does a data clean-up involve before any build starts?',
          acceptedAnswer: { '@type': 'Answer', text: 'An App Scoping Session comes first: a written assessment of exactly which feeds you have, in what state, and what a fix actually requires — before any build starts.' },
        },
        {
          '@type': 'Question',
          name: 'How do I get all my supplier feeds into one place?',
          acceptedAnswer: { '@type': 'Answer', text: 'The Data App ingests every supplier feed in whatever format it arrives, cleans and matches it against what you already sell. One source of truth, pushed out to every channel.' },
        },
        {
          '@type': 'Question',
          name: 'What is the first step to fix scattered product data?',
          acceptedAnswer: { '@type': 'Answer', text: 'A half-day App Scoping Session, £750 fixed, that produces a written map of exactly where the disconnect is — before any build starts.' },
        },
      ],
    },
  ],
};

export default function DataScatteredPage() {
  return (
    <>
      <JsonLd data={dataScatteredSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Problems', url: 'https://decodedops.co.uk/problems' },
        { name: 'Data scattered', url: 'https://decodedops.co.uk/problems/data-scattered' },
      ]} />

      {/* ── 1 · HERO ──────────────────────────────────────────────────────── */}
      <section className="g-off">
        <div className="wrap hero-center">
          <span className="eyebrow">The problem</span>
          <h1>Your supplier data is in six places, and none of them agree.</h1>
          <p className="lede">A spreadsheet from one supplier, a portal login for another, a CSV export
            that&apos;s three weeks stale, and a website that shows whatever it last managed to sync.
            Nobody decided to build it this way. It just accumulated, one workaround at a time.</p>
          <div className="hero-cta">
            <Link className="btn btn--primary" href="/contact">Book an App Scoping Session</Link>
          </div>
        </div>
      </section>

      {/* ── 2 · DISCONNECTED SYSTEMS DIAGRAM, ARCHETYPE 2 ───────────────────── */}
      <section className="g-tint">
        <div className="wrap">
          <span className="eyebrow">What this actually looks like</span>
          <h2>Six sources. Five formats. One product, six different versions of the truth.</h2>

          <div className="plate-frame">
            <svg className="sk" data-tone="dark" data-sk="a2" viewBox="0 0 1240 560" role="img"
              aria-label="A disconnected-systems diagram. Six sources feed the same product data with no shared connection: supplier CSV, supplier portal, spreadsheet, the ERP, the eCommerce platform, and a marketplace feed. Each holds a different version of the same product.">
              <defs>
                <pattern id="ds2-grid" width="34" height="34" patternUnits="userSpaceOnUse">
                  <path d="M34 0H0V34" fill="none" className="sk-gridline" strokeWidth="0.6" />
                </pattern>
              </defs>
              <rect width="1240" height="560" rx="16" className="sk-bg" />
              <rect width="1240" height="560" rx="16" fill="url(#ds2-grid)" />
              <rect width="1240" height="6" className="sk-amber" />

              <text x="60" y="60" className="sk-fade sk-s1 sk-cyan" fontSize="18" letterSpacing="3"
                fontWeight="500">SIX SOURCES, NO SHARED CONNECTION</text>

              <g className="sk-fade sk-s2" fontFamily="Outfit,sans-serif" fontWeight="700" fontSize="19">
                <rect x="60" y="110" width="330" height="80" rx="12" className="sk-node" strokeWidth="1.4" />
                <text x="90" y="157" className="sk-ink">Supplier CSV</text>

                <rect x="460" y="110" width="330" height="80" rx="12" className="sk-node" strokeWidth="1.4" />
                <text x="490" y="157" className="sk-ink">Supplier portal</text>

                <rect x="860" y="110" width="320" height="80" rx="12" className="sk-node" strokeWidth="1.4" />
                <text x="890" y="157" className="sk-ink">Spreadsheet</text>

                <rect x="60" y="230" width="330" height="80" rx="12" className="sk-node" strokeWidth="1.4" />
                <text x="90" y="277" className="sk-ink">The ERP</text>

                <rect x="460" y="230" width="330" height="80" rx="12" className="sk-node" strokeWidth="1.4" />
                <text x="490" y="277" className="sk-ink">eCommerce platform</text>

                <rect x="860" y="230" width="320" height="80" rx="12" className="sk-node" strokeWidth="1.4" />
                <text x="890" y="277" className="sk-ink">Marketplace feed</text>
              </g>

              <g className="sk-fade sk-s3">
                <rect x="60" y="380" width="1120" height="120" rx="14" fill="url(#ds2-grid)"
                  className="sk-node-amber" strokeWidth="1.4" />
                <text x="90" y="425" fontFamily="Outfit,sans-serif" fontWeight="800" fontSize="22"
                  className="sk-amber">Same product. Six different versions of the truth.</text>
                <text x="90" y="460" fontSize="17" className="sk-ink">No source is wrong on its own.
                  None of them know the others exist.</text>
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* ── 3 · WHY THIS HAPPENS ───────────────────────────────────────────── */}
      <section className="g-white">
        <div className="wrap">
          <span className="eyebrow">Why this happens</span>
          <h2>Three ways it gets to six sources.</h2>

          <div className="grid grid--3" style={{ marginTop: 34 }}>
            <article className="card cause">
              <span className="n">01</span>
              <h3>Every supplier has their own format</h3>
              <p>One sends a CSV, one wants a portal login, one still faxes updates through in effect.
                Nobody standardises to you, so you end up standardising to nobody.</p>
            </article>
            <article className="card cause">
              <span className="n">02</span>
              <h3>Each system was added to solve one problem</h3>
              <p>The spreadsheet started as a stopgap for one supplier. Eighteen months later it&apos;s load-
                bearing, and nobody remembers deciding that.</p>
            </article>
            <article className="card cause">
              <span className="n">03</span>
              <h3>Reconciling by hand becomes the job</h3>
              <p>Someone spends real hours every week manually checking one system against another.
                That time is the actual cost of the scatter, and it rarely gets counted as one.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ── 4 · HOW I HELP ─────────────────────────────────────────────────── */}
      <section className="g-navy">
        <div className="wrap">
          <span className="eyebrow eyebrow--amber">How I help</span>
          <h2>The Data App becomes the one place everything agrees.</h2>

          <div className="answer">
            <p>Every supplier feed, in whatever format it arrives, gets ingested, cleaned, and matched
              against what you already sell. <b>One source of truth, pushed out to every channel</b>,
              not six sources reconciled by hand.</p>
            <p>An App Scoping Session comes first: a written assessment of exactly which feeds you have,
              in what state, and what a fix actually requires, before any build starts.</p>
          </div>
        </div>
      </section>

      {/* ── 5 · CTA STRIP ──────────────────────────────────────────────────── */}
      <section className="g-off cta-strip">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <h2>Find out what your six sources actually cost you.</h2>
          <p className="lede">A half-day session, £750 fixed, never credited against the build. You leave
            with a written map of exactly where the disconnect is.</p>
          <div className="hero-cta">
            <Link className="btn btn--primary" href="/contact">Book an App Scoping Session</Link>
            <Link className="btn btn-ghost btn-arrow" href="/apps/data-app">See the Data App</Link>
          </div>
        </div>
      </section>
    </>
  );
}
