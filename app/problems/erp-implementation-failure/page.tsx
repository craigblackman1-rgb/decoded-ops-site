import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'ERP Implementation Failure: Why Decorated Goods Projects Fail | Decoded Ops',
  description: 'Most ERP projects in print, embroidery, and decoration businesses go over budget and under-deliver. Here\'s why — and how to avoid it.',
  alternates: { canonical: '/problems/erp-implementation-failure' },
  openGraph: {
    title: 'ERP Implementation Failure: Why Decorated Goods Projects Fail | Decoded Ops',
    description: 'Most ERP projects in print, embroidery, and decoration businesses go over budget and under-deliver. Here\'s why — and how to avoid it.',
    url: 'https://decodedops.co.uk/problems/erp-implementation-failure',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ERP Implementation Failure: Why Decorated Goods Projects Fail | Decoded Ops',
    description: 'Most ERP projects in print, embroidery, and decoration businesses go over budget and under-deliver. Here\'s why — and how to avoid it.',
  },
};

// Anchor page rebuild, 31 Jul 2026. Replaces the previously withdrawn
// large-cost-figure framing per the positioning review — see the mockup
// source comment in problems-erp-implementation-failure.html. No withdrawn
// cost figure appears anywhere on this page.
const erpFailureSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What happens when the vendor scopes their own ERP implementation?',
          acceptedAnswer: { '@type': 'Answer', text: 'When the vendor scopes their own implementation, they scope for the software — not for your business. The gaps only become visible after go-live.' },
        },
        {
          '@type': 'Question',
          name: 'Why do ERP implementations fail without independent oversight?',
          acceptedAnswer: { '@type': 'Answer', text: 'Without someone in your corner who understands both the sector and the software, there is no one to hold the vendor to account when they miss requirements or cut corners.' },
        },
        {
          '@type': 'Question',
          name: 'How does data quality affect ERP implementation success?',
          acceptedAnswer: { '@type': 'Answer', text: 'Most implementation failures trace back to data quality. Clean data migration is unglamorous work that vendors underprice and businesses underestimate.' },
        },
        {
          '@type': 'Question',
          name: 'Can the wrong ERP software cause implementation failure?',
          acceptedAnswer: { '@type': 'Answer', text: 'Sometimes the implementation fails because the software was the wrong choice from the start — selected on demo, not on fit.' },
        },
        {
          '@type': 'Question',
          name: 'What are the most common causes of ERP implementation failure in decorated goods businesses?',
          acceptedAnswer: { '@type': 'Answer', text: 'The five most common causes are: no independent vendor brief written before vendor selection; the implementation scoped by the vendor rather than the business; data quality problems that were underestimated; no one independently accountable for outcomes; and wrong ERP software selected based on a demo in a different sector.' },
        },
        {
          '@type': 'Question',
          name: 'My ERP implementation went over budget — what should I do?',
          acceptedAnswer: { '@type': 'Answer', text: 'An ERP implementation cost overrun is almost always a scoping failure. The first step is an independent review of what the original specification covered versus what the vendor has delivered — or is claiming to have delivered. That assessment tells you whether the overrun is legitimate, whether the vendor is at fault, and what the realistic options are.' },
        },
      ],
    },
  ],
};

export default function ERPImplementationFailurePage() {
  return (
    <>
      <JsonLd data={erpFailureSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Problems', url: 'https://decodedops.co.uk/problems' },
        { name: 'ERP implementation failure', url: 'https://decodedops.co.uk/problems/erp-implementation-failure' },
      ]} />

      {/* ── 1 · HERO — the new anchor ─────────────────────────────────────── */}
      <section className="g-off">
        <div className="wrap max-w-3xl mx-auto text-center">
          <span className="eyebrow">— The problem</span>
          <h1>What happens when the audit doesn&apos;t come first.</h1>
          <div className="hair mx-auto" />
          <p className="lede mx-auto">ERP implementations that skip an independent audit routinely run over budget and
            behind schedule, because nobody scoped the business before scoping the software. The fix
            isn&apos;t a bigger budget. It&apos;s doing the diagnostic work before any platform gets chosen.</p>
          <div className="btn-row justify-center">
            <Link className="btn btn--primary" href="/contact">Book a free discovery call</Link>
          </div>
        </div>
      </section>

      {/* ── 2 · BEFORE / AFTER — Hanicks ──────────────────────────────────── */}
      <section className="g-tint">
        <div className="wrap">
          <span className="eyebrow">— Hanicks · named with permission</span>
          <h2>The platform stayed. The layer around it changed.</h2>
          <div className="hair" />
          <p className="lede">Nobody ripped out an ERP here. The diagnostic came
            first, the data got fixed, and the platform they&apos;d already paid for started working.</p>

          <div className="grid grid--2" style={{ marginTop: 34 }}>
            <div className="card">
              <span className="kicker">Before</span>
              <ul style={{ margin: '10px 0 0', padding: 0, listStyle: 'none' }}>
                {[
                  <>The <b>164,752</b> products scattered across supplier feeds</>,
                  'No consistent SKU to match any of them against',
                  'No reliable stock picture for the warehouse or the website',
                  'A platform taking the blame for a data problem',
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: 'var(--do-text-sm)', marginBottom: 10, color: 'color-mix(in srgb, var(--do-prussian-blue) 74%, transparent)' }}>
                    — {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <span className="kicker">After</span>
              <ul style={{ margin: '10px 0 0', padding: 0, listStyle: 'none' }}>
                {[
                  <><b>127,135</b> matched automatically on the first run</>,
                  <>A <b>77%</b> match rate, without anyone re-keying a row</>,
                  <><b>11,064</b> pushed live to Khaos Control within weeks</>,
                  'The platform stayed. The layer around it changed.',
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: 'var(--do-text-sm)', marginBottom: 10, color: 'color-mix(in srgb, var(--do-prussian-blue) 74%, transparent)' }}>
                    — {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 · SUPPORTING STAT — TackleBag ───────────────────────────────── */}
      <section className="g-navy">
        <div className="wrap">
          <span className="eyebrow">— TackleBag · the same pattern</span>
          <h2>Different business, ahead of the decision rather than after it.</h2>
          <div className="hair" />

          <div className="grid grid--2" style={{ marginTop: 34, maxWidth: 620 }}>
            <div className="card">
              <div style={{ fontFamily: 'var(--do-font-heading)', fontWeight: 'var(--do-weight-extrabold)', fontSize: 'clamp(2rem,4vw,2.75rem)', color: 'var(--do-amber)', lineHeight: 1 }}>9</div>
              <p style={{ marginTop: 10 }}>supplier feeds automated end to end</p>
            </div>
            <div className="card">
              <div style={{ fontFamily: 'var(--do-font-heading)', fontWeight: 'var(--do-weight-extrabold)', fontSize: 'clamp(2rem,4vw,2.75rem)', color: 'var(--do-amber)', lineHeight: 1 }}>20–40</div>
              <p style={{ marginTop: 10 }}>hours a week, projected saving</p>
            </div>
          </div>

          <p className="lede" style={{ marginTop: 28 }}>Same pattern, different business: the diagnostic work came ahead of
            their own ERP decision, rather than after a failed one. That&apos;s the whole difference, and it&apos;s
            the cheapest part of the project.</p>
        </div>
      </section>

      {/* ── 4 · CTA STRIP ──────────────────────────────────────────────────── */}
      <section className="g-white">
        <div className="wrap max-w-2xl mx-auto text-center">
          <h2>Book a free discovery call.</h2>
          <div className="hair mx-auto" />
          <p className="lede mx-auto">An hour on what&apos;s actually going wrong. If you&apos;re mid-way through an
            implementation that&apos;s slipping, that&apos;s exactly the conversation to have now rather than after
            go-live.</p>
          <div className="btn-row justify-center">
            <Link className="btn btn--primary" href="/contact">Book a free discovery call</Link>
            <Link className="btn btn--outline" href="/clarity">See how a Clarity Audit works</Link>
          </div>
        </div>
      </section>
    </>
  );
}
