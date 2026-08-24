import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { Plate } from '@/components/Plate';

// Target keyword: "stock control app decorated goods" (secondary: "tacklebag decoded ops")
export const metadata = {
  title: 'TackleBag: Clarity Audit to Stock Control Build | Decoded Ops',
  description: 'A Clarity Audit into a Deliver engagement for TackleBag, building a Stock Control module that feeds clean data into their ERP implementation.',
  alternates: { canonical: '/case-studies/tacklebag' },
  openGraph: {
    type: 'article',
    title: 'TackleBag: Clarity Audit to Stock Control Build | Decoded Ops',
    description: 'A Clarity Audit into a Deliver engagement, building a Stock Control module that feeds clean data into their ERP implementation.',
    url: 'https://decodedops.co.uk/case-studies/tacklebag',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TackleBag: Clarity Audit to Stock Control Build | Decoded Ops',
    description: 'A Clarity Audit into a Deliver engagement, building a Stock Control module.',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'TackleBag: the diagnostic came before the decision',
      description: 'Clarity Audit into a Deliver engagement, building a Stock Control module ahead of a Khaos Control ERP implementation, nine supplier feeds fully automated.',
      author: { '@type': 'Person', name: 'Craig Blackman' },
      publisher: { '@type': 'Organization', name: 'Decoded Ops' },
      url: 'https://decodedops.co.uk/case-studies/tacklebag',
    },
  ],
};

const supplierFeeds = [
  'Joma', 'Speedo', 'Canterbury', 'Mizuno', 'Adidas',
  'Banner', 'Chadwick', 'Reydon', 'Surridge',
];

export default function TackleBagCaseStudyPage() {
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
        .feed-list{ display:flex; flex-wrap:wrap; gap:8px; margin:20px 0 0 }
        .feed-list span{ padding:6px 14px; border-radius:var(--do-radius-full);
          background:var(--do-surface-raised); border:1px solid var(--do-border-subtle);
          font-size:var(--do-text-xs); font-weight:600; color:var(--do-text-primary) }
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
              TackleBag sells teamwear and schoolwear. It runs multiple suppliers with decorated and plain stock side by side. Its eCommerce platform, Symphony, needed to show live stock accurately across nine supplier feeds at once.
            </p>
          </div>
        </section>

        {/* 1b. PLATE · DO-ART-206 */}
        <section className="g-navy">
          <div className="wrap">
            <span className="eyebrow">Measure &middot; DO-ART-206</span>
            <h2>Before and after, paired line for line.</h2>
            <div className="hair"></div>
            <p className="lede">TackleBag, named with permission. Nine supplier feeds, fully automated.</p>

            <div className="plate-scroll">
              <div className="plate-frame" data-od-id="plate-tacklebag">
                <Plate tone="dark" p="ta" title="Supplier feeds: before and after"
                       sub="TackleBag · 9 feeds automated, 20–40 hrs/wk saved"
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
                    <text x="140" y="332" className="p-ink">Manual admin, hours every week</text>
                    <text x="140" y="402" className="p-ink">Supplier feeds disconnected from the site</text>
                    <text x="140" y="472" className="p-ink">Stock levels out of date across channels</text>
                    <text x="140" y="542" className="p-ink">Product data re-keyed into multiple systems</text>
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
                    <text x="890" y="332" className="p-ink">9 supplier feeds, fully automated</text>
                    <text x="890" y="402" className="p-ink">20–40 hours a week saved</text>
                    <text x="890" y="472" className="p-ink">Products pushed live to Symphony automatically</text>
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
            <h2 style={{ marginTop: 14 }}>Nine feeds, fully automated.</h2>

            <div className="grid grid--3" style={{ marginTop: 40, maxWidth: 820 }}>
              <div className="stat">
                <p className="stat-num num">9</p>
                <p className="stat-label">supplier feeds running automated stock sync</p>
              </div>
              <div className="stat">
                <p className="stat-num num">20–40</p>
                <p className="stat-label">hours a week of admin time projected saved</p>
              </div>
              <div className="stat">
                <p className="stat-num num">Live</p>
                <p className="stat-label">project underway, Symphony integration proven in production</p>
              </div>
            </div>

            <p className="lede" style={{ marginTop: 32, color: 'var(--do-text-muted-on-dark)' }}>
              Supplier feeds automated:
            </p>
            <div className="feed-list">
              {supplierFeeds.map((feed) => (
                <span key={feed}>{feed}</span>
              ))}
            </div>
          </div>
        </section>

        {/* 3. THE STORY */}
        <section className="g-white">
          <div className="wrap prose">
            <h2>The situation before</h2>
            <p>
              Stock, supplier feeds, and getting products live on Symphony meant hours of manual admin every week. Time that should have gone into running the business.
            </p>

            <h2>What was done</h2>
            <p>
              Symphony stayed. It was the right tool for that job. I built the Data App alongside it to automate the parts Symphony could never do: nine supplier feeds kept current, decorated and plain stock tracked separately, warehouse floor operations (bin assignment, live camera barcode scanning, batch picking) run from a phone, and new products pushed live to Symphony automatically, including new variants on an existing product.
            </p>
            <p>
              Live Symphony integration was proven in production on 27 July 2026, including new-variant publishing. That was a real gap in the first build, found and fixed live.
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
