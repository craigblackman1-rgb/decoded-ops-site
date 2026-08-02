import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';

// Target keyword: "b2b ordering portal workwear" (secondary: "cobra workwear decoded ops")
export const metadata = {
  title: 'Cobra Workwear — B2B Portal & ERP Evaluation | Decoded Ops',
  description: 'Clarity Audit complete on a B2B ordering portal and ERP evaluation, now scoping the delivery engagement.',
  alternates: { canonical: '/case-studies/cobra-workwear' },
  openGraph: {
    type: 'article',
    title: 'Cobra Workwear — B2B Portal & ERP Evaluation | Decoded Ops',
    description: 'Clarity Audit complete on a B2B ordering portal and ERP evaluation, now scoping the delivery engagement.',
    url: 'https://decodedops.co.uk/case-studies/cobra-workwear',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cobra Workwear — B2B Portal & ERP Evaluation | Decoded Ops',
    description: 'Clarity Audit complete on a B2B ordering portal and ERP evaluation, now scoping the delivery engagement.',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Cobra Workwear — architect and advisor, not the builder',
      description: 'Clarity Audit complete on a B2B ordering portal and ERP evaluation, now scoping the delivery engagement.',
      author: { '@type': 'Person', name: 'Craig Blackman' },
      publisher: { '@type': 'Organization', name: 'Decoded Ops' },
      url: 'https://decodedops.co.uk/case-studies/cobra-workwear',
    },
  ],
};

export default function CobraWorkwearCaseStudyPage() {
  return (
    <>
      <style>{`
        .hero-split{ display:grid; grid-template-columns:1.1fr .9fr; gap:48px; align-items:center }
        @media(max-width:980px){ .hero-split{ grid-template-columns:1fr; gap:32px } }
        .hero-split .lede{ margin:18px 0 0 }
        .hero-cta{ display:flex; gap:12px; flex-wrap:wrap; margin-top:28px }
        .shape-card{ background:var(--do-surface-raised); border:1px solid var(--do-border-subtle);
          border-radius:var(--do-radius-2xl); padding:28px }
        .shape-card h3{ font-size:var(--do-text-sm); text-transform:uppercase; letter-spacing:.06em;
          color:var(--do-text-muted); margin-bottom:16px }
        .shape-card dl{ margin:0; display:grid; gap:14px }
        .shape-card dt{ font-size:var(--do-text-xs); color:var(--do-text-muted); margin-bottom:3px }
        .shape-card dd{ margin:0; font-weight:600; color:var(--do-text-primary) }
        .prose{ max-width:72ch; margin-inline:auto }
        .prose h2{ font-size:var(--do-text-xl); margin:36px 0 14px }
        .prose h2:first-child{ margin-top:0 }
        .prose p{ color:var(--do-text-secondary); line-height:var(--do-leading-relaxed); margin-bottom:14px }
        .progress-note{ background:color-mix(in srgb, var(--do-amber) 10%, transparent);
          border:1px solid color-mix(in srgb, var(--do-amber) 30%, transparent);
          border-radius:var(--do-radius-2xl); padding:24px 28px; margin-top:36px }
        .progress-note h3{ font-size:var(--do-text-base); margin-bottom:8px }
        .progress-note p{ margin:0; color:var(--do-text-secondary); font-size:var(--do-text-sm) }
        .cta-strip{ text-align:center }
        .cta-strip h2{ max-width:none; margin-inline:auto }
        .cta-strip .lede{ margin:18px auto 32px; max-width:52ch }
        .cta-strip .hero-cta{ display:flex; gap:12px; flex-wrap:wrap; justify-content:center; margin-top:0 }
      `}</style>
      <main>
        <JsonLd data={schema} />

        {/* 1. HERO */}
        <section className="g-off">
          <div className="wrap hero-split">
            <div>
              <span className="eyebrow">Client work · workwear</span>
              <h1>Architect and advisor, not the builder.</h1>
              <p className="lede">
                Cobra Workwear needed a B2B trade portal, ERP evaluation, and a Shopify replacement. A Clarity Audit, followed by Deliver Consultancy: vendor requirements, procurement, and integration architecture.
              </p>
              <div className="hero-cta">
                <Link href="/contact" className="btn btn--primary">
                  Book a free discovery call <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="shape-card">
              <h3>The engagement shape</h3>
              <dl>
                <div><dt>Role</dt><dd>Architect and advisor. Third-party team builds.</dd></div>
                <div><dt>Stack</dt><dd>Medusa v2 and Next.js</dd></div>
                <div><dt>Structure</dt><dd>12-month minimum retainer</dd></div>
                <div><dt>Status</dt><dd>Live and ongoing</dd></div>
              </dl>
            </div>
          </div>
        </section>

        {/* 2. WHAT THE ENGAGEMENT COVERS */}
        <section className="g-white">
          <div className="wrap">
            <span className="eyebrow">What the engagement covers</span>
            <h2>Three dimensions of an advisory-only build.</h2>

            <div className="grid grid--3" style={{ marginTop: 34 }}>
              <article className="card">
                <span className="kicker">01 &middot; Vendor selection</span>
                <h3>Choosing the implementation partner</h3>
                <p>Evaluating who actually builds it. The stack, Medusa v2 and Next.js, was chosen deliberately as a flagship reference build, not a one-off, and the third-party team was selected against that brief.</p>
              </article>
              <article className="card">
                <span className="kicker">02 &middot; Process design</span>
                <h3>Vendor requirements and procurement</h3>
                <p>Writing the requirements the trade portal and ERP evaluation actually needed to answer, then running the procurement process against them, rather than accepting the first plausible platform.</p>
              </article>
              <article className="card">
                <span className="kicker">03 &middot; Implementation oversight</span>
                <h3>Integration architecture, ongoing</h3>
                <p>Weekly involvement across the build, checking the integration architecture holds as the implementation partner delivers, not a one-off sign-off at the start.</p>
              </article>
            </div>

            <div style={{ maxWidth: '72ch' }}>
              <h2 style={{ marginTop: 48 }}>The commercial shape</h2>
              <p style={{ color: 'var(--do-text-secondary)', lineHeight: 'var(--do-leading-relaxed)' }}>
                Restructured from an initial six-month framing to a twelve-month minimum retainer covering the full build across the first four months, then ongoing weekly involvement. Named here only as a shape, not a price — pricing detail stays out of public case studies.
              </p>

              <div className="progress-note">
                <h3>What&apos;s still in progress</h3>
                <p>
                  The engagement is live and ongoing, not a completed, closed project.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. CTA STRIP (navy) — never links to /apps or /how-i-build, this is a consultancy story not a Systems example */}
        <section className="g-navy cta-strip">
          <div className="wrap" style={{ maxWidth: 760 }}>
            <h2>Evaluating an ERP or platform decision?</h2>
            <p className="lede">
              For a diagnosis of what your own ERP or platform situation needs, book a Clarity Audit.
            </p>
            <div className="hero-cta">
              <Link href="/contact" className="btn btn--primary">
                Book a free discovery call <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
