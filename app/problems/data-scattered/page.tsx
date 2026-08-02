import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { Plate } from '@/components/Plate';

export const metadata: Metadata = {
  title: 'Your data is scattered — Decoded Ops',
  description: "Supplier feeds, spreadsheets, the ERP, the website and the warehouse floor, all disagreeing about the same product. Why scattered data happens, and how the Decoded Data App becomes the one source everyone reads from.",
  alternates: { canonical: '/problems/data-scattered' },
  openGraph: {
    title: 'Your data is scattered — Decoded Ops',
    description: "Supplier feeds, spreadsheets, the ERP, the website and the warehouse floor, all disagreeing about the same product. Why scattered data happens, and how the Decoded Data App becomes the one source everyone reads from.",
    url: 'https://decodedops.co.uk/problems/data-scattered',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your data is scattered — Decoded Ops',
    description: "Supplier feeds, spreadsheets, the ERP, the website and the warehouse floor, all disagreeing about the same product. Why scattered data happens, and how the Decoded Data App becomes the one source everyone reads from.",
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
        <div className="wrap hero-split">
          <div>
            <span className="eyebrow">The problem</span>
            <h1>Your supplier data is in six places, and none of them agree.</h1>
            <p className="lede">Ask what stock you actually hold of a specific SKU and you&apos;ll get six
              different answers, depending who you ask and which spreadsheet, feed, or screen they&apos;re
              looking at. None of them are lying. They&apos;re just all out of date in a different way.</p>
            <div className="hero-cta">
              <Link className="btn btn--primary" href="/contact">Book an App Scoping Session</Link>
            </div>
          </div>
          <figure className="evidence">
            <img src="/images/hero-craft.jpg"
              alt="A catalogue of printed and promotional products — the range every disconnected system is trying, and failing, to describe consistently." />
            <figcaption className="stamp">SIX VERSIONS OF THE SAME PRODUCT</figcaption>
          </figure>
        </div>
      </section>

      {/* ── 2 · THE SIX SOURCES · disconnected systems ─────────────────────── */}
      <section className="g-tint">
        <div className="wrap">
          <span className="eyebrow">Sound familiar?</span>
          <h2>Six places, six different answers.</h2>
          <p className="lede" style={{ marginTop: 16 }}>Every one of these is trying to describe the same
            catalogue. None of them talk to each other, so none of them are right for long.</p>

          <div className="sources">
            <article className="source">
              <h3>Supplier feeds</h3>
              <p>Updated on the supplier&apos;s schedule, not yours — stock and pricing already stale by the
                time it lands.</p>
            </article>
            <article className="source">
              <h3>Spreadsheets</h3>
              <p>Whoever edited it last wins. No audit trail, no way to know which version is current.</p>
            </article>
            <article className="source">
              <h3>The ERP</h3>
              <p>Only as accurate as the last manual re-key — and re-keying six sources by hand doesn&apos;t
                happen consistently.</p>
            </article>
            <article className="source">
              <h3>The website</h3>
              <p>Shows what was true when someone last remembered to update it, not what&apos;s true right
                now.</p>
            </article>
            <article className="source">
              <h3>The warehouse floor</h3>
              <p>The only place stock is actually counted by hand — and the last place any system asks.</p>
            </article>
            <article className="source">
              <h3>Someone&apos;s private list</h3>
              <p>The one person who &ldquo;just knows&rdquo; what&apos;s really in stock. It works until they&apos;re on
                holiday.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ── 3 · CAUSES ─────────────────────────────────────────────────────── */}
      <section className="g-off">
        <div className="wrap">
          <span className="eyebrow">Why this happens</span>
          <h2>The data was never supposed to have one home.</h2>

          <div className="grid grid--2" style={{ marginTop: 34 }}>
            <article className="card cause">
              <span className="n">01</span>
              <h3>Every system was added for its own job</h3>
              <p>The ERP for orders, the spreadsheet for the one supplier who doesn&apos;t do feeds, the
                website plugin for the shop — each one solved its own problem and nobody planned how
                they&apos;d stay in sync.</p>
            </article>
            <article className="card cause">
              <span className="n">02</span>
              <h3>Syncing is a manual job nobody owns</h3>
              <p>Someone has to notice a mismatch and fix it by hand. When they&apos;re busy — which is
                always — the mismatch just sits there.</p>
            </article>
            <article className="card cause">
              <span className="n">03</span>
              <h3>No consistent SKU across sources</h3>
              <p>The same product has a different code in the supplier feed, the ERP, and the website.
                Matching them is treated as a one-off project instead of an ongoing job.</p>
            </article>
            <article className="card cause">
              <span className="n">04</span>
              <h3>Nobody fully trusts any of them</h3>
              <p>So everyone double-checks against their own private version — which creates a seventh
                source of truth, and a seventh version of wrong.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ── PLATE · DO-ART-419 ──────────────────────────────────────────── */}
      <section className="g-white" data-od-id="plate">
        <div className="wrap">
          <Plate tone="dark" no="DO-ART-419" title="Six sources → one catalogue" rev="01" cls="DECODED OPS · ISSUED">
            <rect x="50" y="100" width="700" height="520" rx="12"
                  fill="color-mix(in srgb, var(--do-amber) 8%, var(--do-prussian-blue))"
                  stroke="color-mix(in srgb, var(--do-amber) 28%, transparent)" strokeWidth="1.5"/>
            <text x="80" y="150" fontFamily="var(--do-font-heading)" fontWeight="700"
                  fontSize="22" fill="var(--do-amber)" letterSpacing="0.06em">NOW</text>
            <g fontFamily="var(--do-font-body)" fontSize="17" fill="color-mix(in srgb, var(--do-off-white) 78%, transparent)">
              <text x="80" y="200"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Supplier feeds: stale on arrival</tspan></text>
              <text x="80" y="250"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Spreadsheets: edited by anyone, trusted by nobody</tspan></text>
              <text x="80" y="300"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">ERP: only as accurate as the last re-key</tspan></text>
              <text x="80" y="350"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Website: shows what was true last week</tspan></text>
            </g>

            <rect x="850" y="100" width="700" height="520" rx="12"
                  fill="color-mix(in srgb, var(--do-cerulean) 8%, var(--do-prussian-blue))"
                  stroke="color-mix(in srgb, var(--do-cerulean) 28%, transparent)" strokeWidth="1.5"/>
            <text x="880" y="150" fontFamily="var(--do-font-heading)" fontWeight="700"
                  fontSize="22" fill="var(--do-cerulean)" letterSpacing="0.06em">AFTER</text>
            <g fontFamily="var(--do-font-body)" fontSize="17" fill="color-mix(in srgb, var(--do-off-white) 78%, transparent)">
              <text x="880" y="200"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">One matched catalogue, all sources reconciled</tspan></text>
              <text x="880" y="250"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Automated matching, 77%+ on first run</tspan></text>
              <text x="880" y="300"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Every channel reads the same live data</tspan></text>
              <text x="880" y="350"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">164,752 products → one version of the truth</tspan></text>
            </g>

            <line x1="770" y1="320" x2="830" y2="320" stroke="var(--do-cerulean)" strokeWidth="2"/>
            <polygon points="828,316 840,320 828,324" fill="var(--do-amber)"/>
          </Plate>
        </div>
      </section>

      {/* ── 4 · HOW I HELP ─────────────────────────────────────────────────── */}
      <section className="g-navy">
        <div className="wrap">
          <span className="eyebrow eyebrow--amber">How I help</span>
          <h2>One matched catalogue, and every channel reads the same data.</h2>

          <div className="answer">
            <p>The Decoded Data App takes every supplier feed in, matches it against your existing
              catalogue, and becomes <b>the single source every other system reads from</b> — the ERP,
              the website, the warehouse.</p>
            <p>At Hanicks, 164,752 products went in and 127,135 matched automatically on the first run —
              a 77% match rate, with 11,064 pushed live to Khaos Control within weeks. Same principle,
              any supplier mix.</p>
          </div>
        </div>
      </section>

      {/* ── 5 · CTA STRIP ──────────────────────────────────────────────────── */}
      <section className="g-white cta-strip">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <h2>Find out what your six sources actually disagree about.</h2>
          <p className="lede">An App Scoping Session maps every source you&apos;re running today and what it
            would take to get them all reading from the same data.</p>
          <div className="hero-cta">
            <Link className="btn btn--primary" href="/contact">Book an App Scoping Session</Link>
            <Link className="btn-ghost btn-arrow" href="/apps/data-app">See the Data App</Link>
          </div>
        </div>
      </section>
    </>
  );
}
