import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Legacy system, decoration workflows — Decoded Ops',
  description: "The platform you bought ten years ago wasn't built for decoration. Why generic ERP misses decoration BOMs, blank-vs-finished stock and supplier artwork — and how a Decoded layer sits beside the platform you already own instead of replacing it.",
  alternates: { canonical: '/problems/legacy-system' },
  openGraph: {
    title: 'Legacy system, decoration workflows — Decoded Ops',
    description: "The platform you bought ten years ago wasn't built for decoration. Why generic ERP misses decoration BOMs, blank-vs-finished stock and supplier artwork — and how a Decoded layer sits beside the platform you already own instead of replacing it.",
    url: 'https://decodedops.co.uk/problems/legacy-system',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legacy system, decoration workflows — Decoded Ops',
    description: "The platform you bought ten years ago wasn't built for decoration. Why generic ERP misses decoration BOMs, blank-vs-finished stock and supplier artwork — and how a Decoded layer sits beside the platform you already own instead of replacing it.",
  },
};

const legacySystemSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Should I replace my legacy ERP or add a custom layer?',
          acceptedAnswer: { '@type': 'Answer', text: 'Ripping out a platform the business already knows and has paid for is rarely the right first move. The gap sits beside it, not underneath it. The platform stays. Only the missing piece gets built.' },
        },
        {
          '@type': 'Question',
          name: 'What decoration-specific workflows do generic ERPs miss?',
          acceptedAnswer: { '@type': 'Answer', text: 'Decoration BOMs — a blank plus a decoration method plus thread or ink plus setup time — are rarely represented cleanly in a generic ERP. Blank versus finished goods tracking and supplier artwork versioning are likewise missing from most platforms.' },
        },
        {
          '@type': 'Question',
          name: 'How does the layer-stack model work — the platform stays, what changes?',
          acceptedAnswer: { '@type': 'Answer', text: 'The existing platform continues handling stock, orders, and accounts exactly as it always has. A custom layer sits beside it handling decoration BOMs, blank-to-finished-goods mapping, and artwork versioning — exactly the jobs the platform does not do.' },
        },
        {
          '@type': 'Question',
          name: 'How do I know what my platform needs beside it?',
          acceptedAnswer: { '@type': 'Answer', text: 'An App Scoping Session — a half-day, £750 fixed — produces a written assessment of what your current platform handles well, what it does not, and a fixed price for the layer that closes the gap.' },
        },
        {
          '@type': 'Question',
          name: 'Is replacing our legacy ERP always a bad idea?',
          acceptedAnswer: { '@type': 'Answer', text: 'Ripping out a platform is rarely the right first move. Most businesses save time and money by adding a custom automation layer to do the decoration-specific jobs the ERP was never built for — keeping the platform they already know and have paid for.' },
        },
      ],
    },
  ],
};

export default function LegacySystemPage() {
  return (
    <>
      <JsonLd data={legacySystemSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Problems', url: 'https://decodedops.co.uk/problems' },
        { name: 'Legacy system', url: 'https://decodedops.co.uk/problems/legacy-system' },
      ]} />

      {/* ── 1 · HERO ──────────────────────────────────────────────────────── */}
      <section className="g-off">
        <div className="wrap hero-split">
          <div>
            <span className="eyebrow">The problem</span>
            <h1>The platform you bought ten years ago wasn&apos;t built for decoration.</h1>
            <p className="lede">Generic ERP and stock systems are built for businesses that buy and sell the
              same thing they hold in the warehouse. Decoration doesn&apos;t work like that — a blank
              garment becomes a different, finished product the moment it&apos;s printed or embroidered, and
              most platforms have no clean way to model it.</p>
            <div className="hero-cta">
              <Link className="btn btn--primary" href="/contact">Book an App Scoping Session</Link>
            </div>
          </div>
          <figure className="evidence">
            <img src="/images/hero-craft.jpg"
              alt="A blank polo shirt beside its decorated version — the same product, two entirely different things to a generic ERP." />
            <figcaption className="stamp">BLANK STOCK, FINISHED PRODUCT</figcaption>
          </figure>
        </div>
      </section>

      {/* ── 2 · SYMPTOMS ──────────────────────────────────────────────────── */}
      <section className="g-tint">
        <div className="wrap">
          <span className="eyebrow">Sound familiar?</span>
          <h2>Seven signs the platform wasn&apos;t built for this.</h2>
          <p className="lede" style={{ marginTop: 16 }}>If you recognise three or more of these, the problem
            isn&apos;t your team working around the system. It&apos;s the system never having been designed for
            decoration in the first place.</p>

          <ul className="symptoms">
            <li>Decoration BOMs are tracked in a spreadsheet because the platform can&apos;t model them</li>
            <li>Blank and finished stock get confused, or tracked as if they&apos;re the same item</li>
            <li>Supplier artwork lives in email threads, not attached to the order it belongs to</li>
            <li>Every decoration method — print, embroidery, heat-press — needs its own workaround</li>
            <li>The vendor&apos;s support team asks what &ldquo;decoration BOM&rdquo; even means</li>
            <li>Customisation costs have exceeded what the licence was supposed to save you</li>
            <li>You&apos;ve quietly accepted this is &ldquo;just how the software is&rdquo; rather than fixable</li>
          </ul>
        </div>
      </section>

      {/* ── 3 · THE LAYER STACK · archetype 4 ───────────────────────────────── */}
      <section className="g-white">
        <div className="wrap">
          <span className="eyebrow">The fix</span>
          <h2>Keep the platform. Add the layer it&apos;s missing.</h2>
          <p className="lede" style={{ marginTop: 16 }}>Ripping out an ERP you&apos;ve already paid for and trained
            staff on is rarely the right answer. Read bottom-up: the platform stays exactly where it
            is, and the missing layer sits on top of it, not instead of it.</p>

          <div className="layer-stack">
            <div className="layer-tier layer-tier--base">
              <div><h3>Your platform, unchanged</h3><p>Khaos Control, Symphony, or similar — stays as
                the system of record for orders and accounts</p></div>
              <span className="no">Layer 1</span>
            </div>
            <div className="layer-tier layer-tier--mid">
              <div><h3>The Decoded Data App</h3><p>Decoration BOMs, blank-to-finished mapping, and
                supplier artwork, modelled properly for the first time</p></div>
              <span className="no">Layer 2</span>
            </div>
            <div className="layer-tier layer-tier--top">
              <div><h3>Website, marketplaces, trade portal</h3><p>Every channel reading the same
                decoration-aware catalogue, instead of a generic one</p></div>
              <span className="no">Layer 3</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 · HOW I HELP ─────────────────────────────────────────────────── */}
      <section className="g-navy">
        <div className="wrap">
          <span className="eyebrow eyebrow--amber">How I help</span>
          <h2>No rip-and-replace. Just the layer that was missing.</h2>

          <div className="answer">
            <p>I don&apos;t start from &ldquo;which new platform should you buy.&rdquo; I start from what your current
              platform already does well, and scope the layer that closes the gap — decoration BOMs,
              artwork, blank-to-finished stock — <b>without touching what already works.</b></p>
            <p>An App Scoping Session tells you honestly whether that&apos;s a small layer, a bigger one, or
              whether the platform genuinely needs to change. Rarely the last one.</p>
          </div>
        </div>
      </section>

      {/* ── 5 · CTA STRIP ──────────────────────────────────────────────────── */}
      <section className="g-white cta-strip">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <h2>Find out what layer your platform is actually missing.</h2>
          <p className="lede">An App Scoping Session — £750 fixed — scopes the gap and prices the fix, before
            anything gets ripped out.</p>
          <div className="hero-cta">
            <Link className="btn btn--primary" href="/contact">Book an App Scoping Session</Link>
            <Link className="btn-ghost btn-arrow" href="/apps/data-app">See the Data App</Link>
          </div>
        </div>
      </section>
    </>
  );
}
