import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Legacy system — Decoded Ops',
  description: "The platform you bought ten years ago wasn't built for decoration. Why keeping the platform and adding a layer beats a full rip-and-replace, for decorated-goods businesses.",
  alternates: { canonical: '/problems/legacy-system' },
  openGraph: {
    title: 'Legacy system — Decoded Ops',
    description: "The platform you bought ten years ago wasn't built for decoration. Why keeping the platform and adding a layer beats a full rip-and-replace, for decorated-goods businesses.",
    url: 'https://decodedops.co.uk/problems/legacy-system',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legacy system — Decoded Ops',
    description: "The platform you bought ten years ago wasn't built for decoration. Why keeping the platform and adding a layer beats a full rip-and-replace, for decorated-goods businesses.",
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
            <p className="lede" style={{ margin: '18px 0 0', maxWidth: '56ch' }}>Decoration BOMs, blank versus finished goods, supplier artwork — none of it
              was on the requirements list for a generic ERP. Every workaround since has been patching
              around that gap, not closing it.</p>
            <div className="hero-cta">
              <Link className="btn btn--primary" href="/contact">Book an App Scoping Session</Link>
            </div>
          </div>
          <figure className="evidence">
            <img src="/images/hero-craft.jpg"
              alt="A decoration production floor running real workflows a generic ERP was never built to represent." />
            <figcaption className="stamp">THE PLATFORM STAYS. THE LAYER CHANGES.</figcaption>
          </figure>
        </div>
      </section>

      {/* ── 2 · WHAT A GENERIC ERP DOESN&apos;T HANDLE ──────────────────────────── */}
      <section className="g-tint">
        <div className="wrap">
          <span className="eyebrow">Where a generic platform breaks down</span>
          <h2>Three workflows most ERPs were never built for.</h2>

          <div className="grid grid--3" style={{ marginTop: 34 }}>
            <article className="card cause">
              <span className="n">01</span>
              <h3>Decoration BOMs</h3>
              <p>A decorated item is a blank plus a decoration method plus thread or ink plus setup
                time. A generic ERP&apos;s bill of materials logic rarely represents that cleanly.</p>
            </article>
            <article className="card cause">
              <span className="n">02</span>
              <h3>Blank versus finished goods</h3>
              <p>The plain garment and the decorated version aren&apos;t the same SKU, but most platforms
                were built assuming one product, one code, start to finish.</p>
            </article>
            <article className="card cause">
              <span className="n">03</span>
              <h3>Supplier artwork</h3>
              <p>Artwork files, versions, and approvals arrive from suppliers and customers alike.
                Generic ERPs have nowhere for that to live, so it lives in email instead.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ── 3 · THE LAYER-STACK MODEL, ARCHETYPE 4 ──────────────────────────── */}
      <section className="g-white">
        <div className="wrap">
          <span className="eyebrow">The fix</span>
          <h2>Keep the platform. Add the layer it&apos;s missing.</h2>
          <p className="lede" style={{ marginTop: 16 }}>Ripping out a platform the business already knows and
            has paid for is rarely the right first move. The gap sits beside it, not underneath it.</p>

          <div className="stack" style={{ marginTop: 36, maxWidth: 820 }}>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20,
              padding: '22px 26px', borderRadius: 'var(--do-radius-xl)',
              border: '1px solid color-mix(in srgb, var(--do-amber) 45%, transparent)',
              background: 'color-mix(in srgb, var(--do-amber) 14%, transparent)',
            }}>
              <div>
                <h3 style={{ margin: '0 0 4px', fontFamily: 'var(--do-font-heading)', fontWeight: 700, fontSize: 'var(--do-text-xl)' }}>The custom layer</h3>
                <p style={{ margin: 0, fontSize: 'var(--do-text-sm)', opacity: 0.85 }}>Decoration BOMs, blank/finished mapping, artwork
                  versioning: exactly the jobs the platform doesn&apos;t do</p>
              </div>
              <span style={{ flex: '0 0 auto', fontSize: 'var(--do-text-xs)', letterSpacing: 'var(--do-tracking-wider)', textTransform: 'uppercase', opacity: 0.6 }}>Sits beside</span>
            </div>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20,
              padding: '22px 26px', borderRadius: 'var(--do-radius-xl)',
              border: '1px solid color-mix(in srgb, var(--do-sky-blue) 30%, transparent)',
              background: 'var(--do-surface-raised)',
            }}>
              <div>
                <h3 style={{ margin: '0 0 4px', fontFamily: 'var(--do-font-heading)', fontWeight: 700, fontSize: 'var(--do-text-xl)' }}>The existing platform</h3>
                <p style={{ margin: 0, fontSize: 'var(--do-text-sm)', opacity: 0.85 }}>Stock, orders, accounts — everything it already does
                  well, kept exactly as it is</p>
              </div>
              <span style={{ flex: '0 0 auto', fontSize: 'var(--do-text-xs)', letterSpacing: 'var(--do-tracking-wider)', textTransform: 'uppercase', opacity: 0.6 }}>Stays</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 · HOW I HELP ─────────────────────────────────────────────────── */}
      <section className="g-navy">
        <div className="wrap">
          <span className="eyebrow eyebrow--amber">How I help</span>
          <h2>An App Scoping Session tells you exactly what the layer needs to do.</h2>

          <div className="answer">
            <p>A written assessment of what your current platform handles well, what it doesn&apos;t, and a
              fixed price for the layer that closes the gap. <b>The platform you&apos;ve already paid for
              stays. Only the missing piece gets built.</b></p>
          </div>
        </div>
      </section>

      {/* ── 5 · CTA STRIP ──────────────────────────────────────────────────── */}
      <section className="g-off cta-strip">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <h2>Find out what your platform actually needs beside it.</h2>
          <p className="lede">A half-day session, £750 fixed, never credited against the build.</p>
          <div className="hero-cta">
            <Link className="btn btn--primary" href="/contact">Book an App Scoping Session</Link>
            <Link className="btn btn-ghost btn-arrow" href="/how-i-build">See how the ladder works</Link>
          </div>
        </div>
      </section>
    </>
  );
}
