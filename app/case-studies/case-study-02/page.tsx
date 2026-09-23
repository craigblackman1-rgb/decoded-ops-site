import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { Plate } from '@/components/Plate';

// Target keyword: "stock control app decorated goods" (secondary: "case study 02 decoded ops")
export const metadata = {
  title: 'Case study 02: Clarity Audit to Stock Control Build | Decoded Ops',
  description: 'A Clarity Audit into a Deliver engagement for a branded apparel and decoration retailer. The diagnostic came before the decision.',
  alternates: { canonical: '/case-studies/case-study-02' },
  openGraph: {
    type: 'article',
    title: 'Case study 02: Clarity Audit to Stock Control Build | Decoded Ops',
    description: 'A Clarity Audit into a Deliver engagement for a branded apparel and decoration retailer.',
    url: 'https://decodedops.co.uk/case-studies/case-study-02',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case study 02: Clarity Audit to Stock Control Build | Decoded Ops',
    description: 'A Clarity Audit into a Deliver engagement for branded apparel.',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Case study 02: the diagnostic came before the decision',
      description: 'A Clarity Audit into a Deliver engagement for a branded apparel and decoration retailer. 17 supplier feeds automated, 20 to 40 hours a week of admin time projected saved.',
      author: { '@type': 'Person', name: 'Craig Blackman' },
      publisher: {
        '@type': 'Organization', name: 'Decoded Ops',
        logo: { '@type': 'ImageObject', url: 'https://decodedops.co.uk/logo.png', width: 512, height: 512 },
      },
      image: 'https://decodedops.co.uk/opengraph-image',
      datePublished: '2026-07-28',
      dateModified: '2026-09-23',
      url: 'https://decodedops.co.uk/case-studies/case-study-02',
    },
  ],
};

export default function CaseStudy02Page() {
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
          max-width:26ch }
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
            <span className="eyebrow">Client work · branded apparel &amp; decoration</span>
            <h1>The diagnostic came before the decision.</h1>
            <p className="lede">
              A teamwear and schoolwear business selling decorated and plain stock across a lot of suppliers, on an eCommerce platform that needed to show live stock accurately.
            </p>
          </div>
        </section>

        {/* 1b. PLATE · DO-ART-206 */}
        <section className="g-navy">
          <div className="wrap">
            <span className="eyebrow">Measure &middot; DO-ART-206</span>
            <h2>Before and after, paired line for line.</h2>
            <div className="hair"></div>
            <p className="lede">Case study 02, real production numbers. 17 supplier feeds, automated.</p>

            <div className="plate-scroll">
              <div className="plate-frame" data-od-id="plate-cs02">
                <Plate tone="dark" p="ta" title="Supplier feeds: before and after"
                       sub="Case study 02 · 17 feeds automated, 20–40 hrs/wk saved"
                       no="DO-ART-206" rev="01" cls="DECODED OPS · ISSUED">

                  <g className="sk-fade sk-s2" filter="url(#ta-shadow)">
                    <rect x="100" y="210" width="650" height="480" rx="14" fill="url(#ta-amber-n)"
                          className="p-node-a" strokeWidth="1.6"/>
                    <rect x="100" y="210" width="650" height="56" rx="14" className="p-amber" opacity=".92"/>
                    <rect x="100" y="252" width="650" height="14" className="p-amber" opacity=".92"/>
                    <text x="128" y="248" fontFamily="Outfit,sans-serif" fontWeight="800" fontSize="22"
                          letterSpacing="2" fill="var(--do-prussian-blue)">BEFORE</text>
                  </g>
                  <g className="sk-fade sk-s3" fontSize="22">
                    <text x="140" y="332" className="p-ink">Hours of manual admin every week</text>
                    <text x="140" y="402" className="p-ink">Supplier feeds that didn&apos;t talk to anything</text>
                    <text x="140" y="472" className="p-ink">Stock levels out of date across channels</text>
                    <text x="140" y="542" className="p-ink">Product data re-typed into more than one system</text>
                    <g className="p-samber" strokeWidth="2.4" strokeLinecap="round">
                      <path d="M106 319 L118 331 M118 319 L106 331"/>
                      <path d="M106 389 L118 401 M118 389 L106 401"/>
                      <path d="M106 459 L118 471 M118 459 L106 471"/>
                      <path d="M106 529 L118 541 M118 529 L106 541"/>
                    </g>
                  </g>

                  <path id="ta-p" pathLength={1} className="sk-draw sk-s4 p-scyan" d="M760 450 H840"
                        fill="none" strokeWidth="3" markerEnd="url(#ta-ah)"/>

                  <g className="sk-fade sk-s4" filter="url(#ta-shadow)">
                    <rect x="850" y="210" width="650" height="480" rx="14" fill="url(#ta-node)"
                          className="p-node" strokeWidth="1.6"/>
                    <rect x="850" y="210" width="650" height="56" rx="14" className="p-cyan" opacity=".95"/>
                    <rect x="850" y="252" width="650" height="14" className="p-cyan" opacity=".95"/>
                    <text x="878" y="248" fontFamily="Outfit,sans-serif" fontWeight="800" fontSize="22"
                          letterSpacing="2" fill="var(--do-prussian-blue)">AFTER</text>
                  </g>
                  <g className="sk-fade sk-s5" fontSize="22">
                    <text x="890" y="332" className="p-ink">17 supplier feeds coming in on their own</text>
                    <text x="890" y="402" className="p-ink">27,778 supplier products in one place</text>
                    <text x="890" y="472" className="p-ink">Every order landing in one queue, ready to pick</text>
                    <text x="890" y="542" className="p-ink">Same platform + Data App alongside it</text>
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
                      <animateMotion dur="2.2s" repeatCount="indefinite"><mpath href="#ta-p"/></animateMotion>
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
            <h2 style={{ marginTop: 14 }}>Not projected. Not modelled. What&apos;s actually in the system.</h2>

            <div className="grid grid--3" style={{ marginTop: 40 }}>
              <div className="stat">
                <p className="stat-num num">17</p>
                <p className="stat-label">supplier feeds automated</p>
              </div>
              <div className="stat">
                <p className="stat-num num">27,778</p>
                <p className="stat-label">supplier products and 236,056 variants in the system</p>
              </div>
              <div className="stat">
                <p className="stat-num num">1,846</p>
                <p className="stat-label">decorated products built from those blanks</p>
              </div>
            </div>
            <div className="grid grid--3" style={{ marginTop: 32 }}>
              <div className="stat">
                <p className="stat-num num">952</p>
                <p className="stat-label">products live on their website through the data app</p>
              </div>
              <div className="stat">
                <p className="stat-num num">100%</p>
                <p className="stat-label">of stock has a bin location</p>
              </div>
              <div className="stat">
                <p className="stat-num num">20 to 40</p>
                <p className="stat-label">hours a week of admin time, projected at discovery</p>
              </div>
            </div>
            <p className="lede" style={{ marginTop: 36, color: 'var(--do-text-muted-on-dark)' }}>
              Figures from the live system, September 2026. Hours saving is a projection, not yet measured.
            </p>
          </div>
        </section>

        {/* 3. THE STORY */}
        <section className="g-white">
          <div className="wrap prose">
            <h2>The situation before</h2>
            <p>
              Stock and supplier feeds took a lot of manual admin, pulling people away from running the business.
            </p>

            <h2>What was done</h2>
            <p>
              The eCommerce platform stayed, because it was the right tool for selling. The data app was built alongside it to do the parts the platform was never going to do: supplier feeds kept current, decorated and plain stock tracked separately, warehouse work (bins, barcode scanning, batch picking on a phone), and new products and variants published to the website automatically.
            </p>
            <p>
              The website integration has been running in production since July. Supplier automation and warehouse tooling are still growing. Next up is measuring the real hours saved to replace the projection.
            </p>

            <div className="progress-note">
              <h3>What&apos;s still in progress</h3>
              <p>
                The Data App keeps expanding. Warehouse floor tooling and further supplier automation are active, ongoing work, not a finished job being presented as complete.
              </p>
            </div>
          </div>
        </section>

        {/* 4. CTA STRIP */}
        <section className="g-off cta-strip">
          <div className="wrap" style={{ maxWidth: 760 }}>
            <h2>See how the Data App does this.</h2>
            <p className="lede">
              This is a Systems (rung 2) example. To find out what your own operation needs, book a Clarity Audit.
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
