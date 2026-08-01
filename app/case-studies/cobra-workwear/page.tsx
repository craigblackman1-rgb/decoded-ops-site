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
        .hero-center{ text-align:center; max-width:760px; margin-inline:auto }
        .hero-center h1{ max-width:none; margin-inline:auto }
        .hero-center .lede{ margin:18px auto 0 }
        .hero-center .eyebrow{ margin-inline:auto }
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
        .hero-cta{ display:flex; gap:12px; flex-wrap:wrap; justify-content:center }
      `}</style>
      <main>
        <JsonLd data={schema} />

        {/* 1. HERO */}
        <section className="g-off">
          <div className="wrap hero-center">
            <span className="eyebrow">Client work · workwear</span>
            <h1>Architect and advisor, not the builder.</h1>
            <p className="lede">
              Cobra Workwear needed a B2B trade portal, ERP evaluation, and a Shopify replacement. Discovery Day, followed by Deliver Consultancy: vendor requirements, procurement, and integration architecture.
            </p>
          </div>
        </section>

        {/* 2. STORY */}
        <section className="g-white">
          <div className="wrap prose">
            <h2>What was done</h2>
            <p>
              The eCommerce build itself is being delivered by a third party on Medusa v2 and Next.js, with Craig acting as architect and advisor rather than builder. This is Shape A: advisory and oversight, where the client&apos;s implementation partner does the build.
            </p>
            <p>
              The stack was chosen deliberately as a flagship, repeatable reference build rather than a one-off — the same architecture is reused where it fits future clients.
            </p>

            <h2>The commercial shape</h2>
            <p>
              Restructured from an initial six-month framing to a twelve-month minimum retainer covering the full build across the first four months, then ongoing weekly involvement. Named here only as a shape, not a price — pricing detail stays out of public case studies.
            </p>

            <div className="progress-note">
              <h3>What&apos;s still in progress</h3>
              <p>
                The engagement is live and ongoing, not a completed, closed project.
              </p>
            </div>
          </div>
        </section>

        {/* 3. CTA STRIP (navy) — never links to /apps or /how-i-build, this is a consultancy story not a Systems example */}
        <section className="g-navy cta-strip">
          <div className="wrap" style={{ maxWidth: 760 }}>
            <h2>Evaluating an ERP or platform decision?</h2>
            <p className="lede">
              For a diagnosis of what your own ERP or platform situation needs, book a Discovery Day.
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
