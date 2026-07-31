import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Buy vs build — Decoded Ops',
  description: "The question isn't buy or build. It's which platform, and what goes beside it. A vendor-neutral way to work the decision in order, for decorated-goods businesses.",
  alternates: { canonical: '/problems/buy-vs-build' },
  openGraph: {
    title: 'Buy vs build — Decoded Ops',
    description: "The question isn't buy or build. It's which platform, and what goes beside it. A vendor-neutral way to work the decision in order, for decorated-goods businesses.",
    url: 'https://decodedops.co.uk/problems/buy-vs-build',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buy vs build — Decoded Ops',
    description: "The question isn't buy or build. It's which platform, and what goes beside it. A vendor-neutral way to work the decision in order, for decorated-goods businesses.",
  },
};

const buyVsBuildSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Should I buy off-the-shelf software or build custom for my print or embroidery business?',
          acceptedAnswer: { '@type': 'Answer', text: 'The question is not buy or build — it is which platform fits, and what gaps a custom layer closes. Most businesses land on buying a platform plus adding automation for the jobs the platform will not do. Full custom is a last resort.' },
        },
        {
          '@type': 'Question',
          name: 'What is the most common mistake when making a buy-vs-build technology decision?',
          acceptedAnswer: { '@type': 'Answer', text: 'Letting whoever gets to you first frame the decision on their terms. A platform vendor pitches buy. A developer pitches build. Neither works the ladder for you.' },
        },
        {
          '@type': 'Question',
          name: 'How do I know which rung I am on — buy, buy plus automation, or full custom?',
          acceptedAnswer: { '@type': 'Answer', text: 'An App Scoping Session works the ladder in order: a written data and feed assessment, a channel and integration map, and a recommended package with a fixed price. You get a written answer either way.' },
        },
        {
          '@type': 'Question',
          name: 'How much does it cost to have the buy-vs-build decision scoped properly?',
          acceptedAnswer: { '@type': 'Answer', text: 'A half-day App Scoping Session costs £750 fixed, never credited against the build. It produces a written assessment you own outright — a specification you could hand to any developer.' },
        },
        {
          '@type': 'Question',
          name: 'What does buy plus automation mean for a decorated-goods business?',
          acceptedAnswer: { '@type': 'Answer', text: 'The platform is right but leaves gaps that a custom automation layer fills: decoration-specific workflows, supplier feed normalisation, blank-to-finished-goods mapping, and anything else a generic ERP was never built to handle.' },
        },
      ],
    },
  ],
};

export default function BuyVsBuildPage() {
  return (
    <>
      <JsonLd data={buyVsBuildSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Problems', url: 'https://decodedops.co.uk/problems' },
        { name: 'Buy vs build', url: 'https://decodedops.co.uk/problems/buy-vs-build' },
      ]} />

      {/* ── 1 · HERO ──────────────────────────────────────────────────────── */}
      <section className="g-off">
        <div className="wrap hero-split">
          <div>
            <span className="eyebrow">The problem</span>
            <h1>The question isn&apos;t buy or build. It&apos;s which platform, and what goes beside it.</h1>
            <p className="lede" style={{ margin: '18px 0 0', maxWidth: '56ch' }}>Most technology decisions in this sector get framed as a straight choice:
              buy something off the shelf, or build something bespoke. That framing skips the step
              that actually matters — working out which platform fits and what it still won&apos;t do.</p>
            <div className="hero-cta">
              <Link className="btn btn--primary" href="/contact">Book an App Scoping Session</Link>
            </div>
          </div>
          <figure className="evidence">
            <img src="/images/hero-craft.jpg"
              alt="A working decoration floor, the kind of operation a buy-or-build decision has to fit around." />
            <figcaption className="stamp">WORK THE LADDER IN ORDER</figcaption>
          </figure>
        </div>
      </section>

      {/* ── 2 · THE LADDER, ARCHETYPE 5 ────────────────────────────────────── */}
      <section className="g-tint">
        <div className="wrap">
          <span className="eyebrow">The ladder</span>
          <h2>Work it in order. Never start at the top.</h2>
          <p className="lede" style={{ marginTop: 16 }}>Three rungs, worked in sequence. Most businesses land
            on rung two. Nobody should start at rung three.</p>

          <div style={{ display: 'grid', gap: 16, marginTop: 36, maxWidth: 820 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '64px 1fr', gap: 20, alignItems: 'flex-start', padding: '22px 26px', borderRadius: 'var(--do-radius-xl)', border: '1px solid color-mix(in srgb, var(--do-sky-blue) 30%, transparent)' }}>
              <span style={{ fontFamily: 'var(--do-font-heading)', fontWeight: 800, fontSize: 'var(--do-text-xl)', opacity: 0.5 }}>1</span>
              <div><h3>Buy</h3><p style={{ margin: 0, fontSize: 'var(--do-text-sm)', color: 'var(--do-text-secondary)' }}>An off-the-shelf platform fits. Someone else&apos;s product, someone
                else&apos;s roadmap. Track is the standing example in this sector. I earn nothing from what
                you buy at this rung, which is the point.</p></div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '64px 1fr', gap: 20, alignItems: 'flex-start', padding: '22px 26px', borderRadius: 'var(--do-radius-xl)', border: '1px solid color-mix(in srgb, var(--do-amber) 55%, transparent)', background: 'color-mix(in srgb, var(--do-amber) 10%, transparent)' }}>
              <span style={{ fontFamily: 'var(--do-font-heading)', fontWeight: 800, fontSize: 'var(--do-text-xl)', opacity: 0.5 }}>2</span>
              <div><h3>Buy plus automation</h3><p style={{ margin: 0, fontSize: 'var(--do-text-sm)', color: 'var(--do-text-secondary)' }}>The platform is right but leaves gaps. Both live
                deployments I run today sit here: the platform stays, a custom layer does the jobs it
                will not do. The default recommendation, not the exception.</p></div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '64px 1fr', gap: 20, alignItems: 'flex-start', padding: '22px 26px', borderRadius: 'var(--do-radius-xl)', border: '1px dashed color-mix(in srgb, var(--do-sky-blue) 30%, transparent)' }}>
              <span style={{ fontFamily: 'var(--do-font-heading)', fontWeight: 800, fontSize: 'var(--do-text-xl)', opacity: 0.5 }}>3</span>
              <div><h3>Full custom</h3><p style={{ margin: 0, fontSize: 'var(--do-text-sm)', color: 'var(--do-text-secondary)' }}>Nothing off the shelf is fit for purpose. Last resort, and
                said out loud as such. Never priced in public, scoped only after a proper diagnostic.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 · WHY THIS HAPPENS ───────────────────────────────────────────── */}
      <section className="g-white">
        <div className="wrap">
          <span className="eyebrow">Why this happens</span>
          <h2>Three reasons the ladder gets skipped.</h2>

          <div className="grid grid--3" style={{ marginTop: 34 }}>
            <article className="card cause">
              <span className="n">01</span>
              <h3>A vendor asked the question first</h3>
              <p>Whoever gets to you first frames the decision on their terms. A platform vendor pitches
                rung one. A developer pitches rung three. Neither one is wrong to ask, but neither one
                works the ladder for you.</p>
            </article>
            <article className="card cause">
              <span className="n">02</span>
              <h3>Nobody priced the alternative</h3>
              <p>A custom quote looks expensive next to nothing. It looks different next to what a
                platform plus a scoped layer actually costs, which is the comparison that usually
                doesn&apos;t happen.</p>
            </article>
            <article className="card cause">
              <span className="n">03</span>
              <h3>The gap was never named</h3>
              <p>&ldquo;The platform doesn&apos;t do everything we need&rdquo; is not the same as knowing exactly what it
                doesn&apos;t do. Without that list, rung two and rung three both stay guesswork.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ── 4 · HOW I HELP ─────────────────────────────────────────────────── */}
      <section className="g-navy">
        <div className="wrap">
          <span className="eyebrow eyebrow--amber">How I help</span>
          <h2>An App Scoping Session works the ladder for you.</h2>

          <div className="answer">
            <p>A remote half-day (or on-site, travel at cost) that produces a written data and feed
              assessment, a channel and integration map, a recommended package with a fixed price, and
              a plain statement of what that package will not solve. <b>£750 fixed, never credited
              against the build.</b></p>
            <p>You own the assessment outright. It&apos;s a specification you could hand to any developer,
              not only to me, which is what makes charging for it fair.</p>
          </div>
        </div>
      </section>

      {/* ── 5 · CTA STRIP ──────────────────────────────────────────────────── */}
      <section className="g-white cta-strip">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <h2>Find out which rung you&apos;re actually on.</h2>
          <p className="lede">A half-day session, £750 fixed, never credited against the build. You leave
            with a written answer either way.</p>
          <div className="hero-cta">
            <Link className="btn btn--primary" href="/contact">Book an App Scoping Session</Link>
            <Link className="btn btn-ghost btn-arrow" href="/apps/data-app">See the Data App</Link>
          </div>
        </div>
      </section>
    </>
  );
}
