import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { Plate } from '@/components/Plate';

// Target keyword: "erp implementation project lead" (secondary: "hanicks decoded ops")
export const metadata = {
  title: 'Hanicks — Khaos Control ERP + Custom App | Decoded Ops',
  description: 'Project-leading a Khaos Control ERP implementation for Hanicks alongside a custom app for supplier data, Amazon FBA, and channel automation.',
  alternates: { canonical: '/case-studies/hanicks' },
  openGraph: {
    type: 'article',
    title: 'Hanicks — Khaos Control ERP + Custom App | Decoded Ops',
    description: 'Project-leading a Khaos Control ERP implementation alongside a custom app for supplier data, Amazon FBA, and channel automation.',
    url: 'https://decodedops.co.uk/case-studies/hanicks',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hanicks — Khaos Control ERP + Custom App | Decoded Ops',
    description: 'Project-leading a Khaos Control ERP implementation alongside a custom app.',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Hanicks — Khaos Control ERP + Custom App',
      description: 'Project-leading a Khaos Control ERP implementation for Hanicks alongside a custom app for supplier data, Amazon FBA, and channel automation.',
      author: { '@type': 'Person', name: 'Craig Blackman' },
      publisher: { '@type': 'Organization', name: 'Decoded Ops' },
      url: 'https://decodedops.co.uk/case-studies/hanicks',
    },
  ],
};

export default function HanicksCaseStudyPage() {
  return (
    <>
      <style>{`
        .hero-center{ text-align:center; max-width:760px; margin-inline:auto }
        .hero-center h1{ max-width:none; margin-inline:auto }
        .hero-center .lede{ margin:18px auto 0 }
        .hero-center .eyebrow{ margin-inline:auto }
        .stat .stat-num{ font-family:var(--do-font-heading); font-weight:800;
          font-size:clamp(2.2rem,4vw,3.2rem); line-height:1; letter-spacing:-.03em;
          color:var(--do-amber); font-variant-numeric:tabular-nums }
        .stat .stat-label{ margin:10px 0 0; color:var(--do-text-muted-on-dark); font-size:.9375rem;
          max-width:24ch }
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
            <span className="eyebrow">Client work · heating spares &amp; eCommerce</span>
            <h1>The platform stayed. The layer around it changed.</h1>
            <p className="lede">
              Hanicks is a heating spares business — not decorated goods, but the same underlying problem: a large product catalogue arriving from multiple suppliers in inconsistent formats, needing to be clean and current across every channel it sells on.
            </p>
          </div>
        </section>

        {/* 1b. PLATE · DO-ART-205 */}
        <section className="g-navy">
          <div className="wrap">
            <span className="eyebrow">&mdash; Measure &middot; DO-ART-205</span>
            <h2>Not projected. Not modelled. What actually happened.</h2>
            <div className="hair"></div>
            <p className="lede" style={{ marginTop: 16 }}>164,752 products imported from supplier feeds. 127,135 matched automatically on the first run, a 77% match rate, without anyone re-keying a row. 11,064 pushed live to Khaos Control within weeks.</p>

            <div className="plate-scroll">
              <div className="plate-frame" data-od-id="plate-hanicks">
                <Plate tone="dark" p="hs" title="Supplier catalogue — before and after"
                       sub="Hanicks · 164,752 products, 77% matched on the first run"
                       no="DO-ART-205" rev="01" cls="DECODED OPS · ISSUED">

                  <g className="sk-fade sk-s2" filter="url(#hs-shadow)">
                    <rect x="100" y="210" width="650" height="480" rx="14" fill="url(#hs-amber-n)"
                          className="p-node-a" strokeWidth="1.6"/>
                    <rect x="100" y="210" width="650" height="56" rx="14" className="p-amber" opacity=".92"/>
                    <rect x="100" y="252" width="650" height="14" className="p-amber" opacity=".92"/>
                    <text x="128" y="248" fontFamily="Outfit,sans-serif" fontWeight="800" fontSize="22"
                          letterSpacing="2" fill="var(--do-prussian-blue)">BEFORE</text>
                  </g>
                  <g className="sk-fade sk-s3" fontSize="22">
                    <text x="140" y="332" className="p-ink">164,752 products across feeds</text>
                    <text x="140" y="402" className="p-ink">No consistent SKU</text>
                    <text x="140" y="472" className="p-ink">No reliable stock picture</text>
                    <text x="140" y="542" className="p-ink">The platform getting the blame</text>
                    <g className="p-samber" strokeWidth="2.4" strokeLinecap="round">
                      <path d="M106 319 L118 331 M118 319 L106 331"/>
                      <path d="M106 389 L118 401 M118 389 L106 401"/>
                      <path d="M106 459 L118 471 M118 459 L106 471"/>
                      <path d="M106 529 L118 541 M118 529 L106 541"/>
                    </g>
                  </g>

                  <path id="hs-p" pathLength={1} className="sk-draw sk-s4 p-scyan" d="M760 450 H840"
                        fill="none" strokeWidth="3" markerEnd="url(#hs-ah)"/>

                  <g className="sk-fade sk-s4" filter="url(#hs-shadow)">
                    <rect x="850" y="210" width="650" height="480" rx="14" fill="url(#hs-node)"
                          className="p-node" strokeWidth="1.6"/>
                    <rect x="850" y="210" width="650" height="56" rx="14" className="p-cyan" opacity=".95"/>
                    <rect x="850" y="252" width="650" height="14" className="p-cyan" opacity=".95"/>
                    <text x="878" y="248" fontFamily="Outfit,sans-serif" fontWeight="800" fontSize="22"
                          letterSpacing="2" fill="var(--do-prussian-blue)">AFTER</text>
                  </g>
                  <g className="sk-fade sk-s5" fontSize="22">
                    <text x="890" y="332" className="p-ink">127,135 matched on the first run</text>
                    <text x="890" y="402" className="p-ink">77% matched automatically</text>
                    <text x="890" y="472" className="p-ink">11,064 live at Khaos Control</text>
                    <text x="890" y="542" className="p-ink">Same platform, kept</text>
                    <g className="p-scyan" strokeWidth="2.6" strokeLinecap="round"
                       strokeLinejoin="round" fill="none">
                      <path d="M856 325 L863 332 L876 318"/>
                      <path d="M856 395 L863 402 L876 388"/>
                      <path d="M856 465 L863 472 L876 458"/>
                      <path d="M856 535 L863 542 L876 528"/>
                    </g>
                  </g>

                  <g className="sk-dots">
                    <circle r="6" className="p-cyan">
                      <animateMotion dur="2.2s" repeatCount="indefinite"><mpath href="#hs-p"/></animateMotion>
                    </circle>
                  </g>
                </Plate>
              </div>
            </div>
          </div>
        </section>

        {/* 2. THE NUMBERS */}
        <section className="g-navy">
          <div className="wrap">
            <span className="eyebrow eyebrow--amber">The numbers</span>
            <h2 style={{ marginTop: 14 }}>Not projected. Not modelled. What actually happened.</h2>

            <div className="grid grid--3" style={{ marginTop: 40 }}>
              <div className="stat">
                <p className="stat-num num">164,752</p>
                <p className="stat-label">WooCommerce products imported</p>
              </div>
              <div className="stat">
                <p className="stat-num num">127,135</p>
                <p className="stat-label">matched automatically — a 77% first-run match rate</p>
              </div>
              <div className="stat">
                <p className="stat-num num">11,064</p>
                <p className="stat-label">push-eligible products live to Khaos Control</p>
              </div>
            </div>
            <p className="lede" style={{ marginTop: 36, color: 'var(--do-text-muted-on-dark)' }}>
              Also: 2,872 new products and 28 new suppliers identified from a stock-take reconciliation, and 3,844 Amazon ASINs re-optimised ahead of a title-format deadline.
            </p>
          </div>
        </section>

        {/* 3. THE STORY */}
        <section className="g-white">
          <div className="wrap prose">
            <h2>The situation before</h2>
            <p>
              Product data was scattered across supplier feeds, no consistent SKU matching, no reliable way to know what was actually in stock or where. The business needed a proper ERP, but going into that with dirty data would have meant paying to migrate a mess.
            </p>

            <h2>What was done</h2>
            <p>
              A Clarity Audit identified the platform first: Khaos Control, an off-the-shelf ERP. Khaos does not do supplier feed ingestion, data enrichment, or catalogue maintenance across channels well — so the Data App was built to do exactly that, sitting alongside Khaos rather than replacing it. This is rung 2 of how Decoded Ops works: keep the platform that fits, build the layer it does not do.
            </p>
            <p>
              The Data App ingested every supplier catalogue, matched it against what Hanicks already sold, and pushed the clean result live to Khaos Control.
            </p>

            <div className="progress-note">
              <h3>What&apos;s still in progress</h3>
              <p>
                The remaining 23% of unmatched products are a known, visible list, not a hidden gap. They are being worked through rather than papered over.
              </p>
            </div>
          </div>
        </section>

        {/* 4. CTA STRIP */}
        <section className="g-off cta-strip">
          <div className="wrap" style={{ maxWidth: 760 }}>
            <h2>See how the Data App does this.</h2>
            <p className="lede">
              This is a Systems (rung 2) example. For a diagnosis of what your own data actually looks like, book a Clarity Audit.
            </p>
            <div className="hero-cta">
              <Link href="/contact" className="btn btn--primary">
                Book a free discovery call <ArrowRight size={18} />
              </Link>
              <Link href="/apps/data-app" className="btn btn-ghost btn-arrow">
                See the Data App
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
