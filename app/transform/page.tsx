import type { Metadata } from 'next';
import Link from 'next/link';
import s from '@/app/deco-page.module.css';

export const metadata: Metadata = {
  title: 'Transform — Decoded Ops',
  description: 'Transform is the programme that follows a Clarity Audit — the plan, executed. Named results at Hanicks and TackleBag: 77% auto-matched, nine supplier feeds automated end to end.',
  alternates: { canonical: '/transform' },
  openGraph: {
    type: 'website',
    title: 'Transform — Decoded Ops',
    description: 'Transform is the programme that follows a Clarity Audit — the plan, executed. Named results at Hanicks and TackleBag.',
    url: 'https://decodedops.co.uk/transform',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transform — Decoded Ops',
    description: 'Transform is the programme that follows a Clarity Audit — the plan, executed.',
  },
};

export default function TransformPage() {
  return (
    <main id="content">
      {/* 1 · HERO CENTRE */}
      <section className={`g-off ${s.heroCenter}`} data-od-id="hero">
        <div className="wrap">
          <span className="eyebrow">Transform</span>
          <h1>The plan, executed.</h1>
          <p className="lede">Transform isn&apos;t a separate product — it&apos;s what happens after a Clarity Audit
            finds something that needs proper change, not a quick fix. The same diagnostic discipline,
            run at programme scale, over weeks rather than a day.</p>
          <div className={s.heroCta}>
            <Link className="btn btn--primary" href="/contact">Book a Clarity Audit</Link>
          </div>
        </div>
      </section>

      {/* 2 · BEFORE / AFTER */}
      <section className="g-tint" data-od-id="transform-ba">
        <div className="wrap">
          <span className="eyebrow">Two live examples</span>
          <h2>Same approach, twice, in two different businesses.</h2>
          <p className="lede" style={{ marginTop: 16 }}>Hanicks: 164,752 products imported and 77% matched on
            the first run. TackleBag: nine supplier feeds automated, a projected saving of 20 to 40
            hours a week. Same approach both times — fix the process and the data before automating
            anything.</p>

          <div className="plate-scroll" style={{ marginTop: 34 }}>
            <div className={`plate-frame ${s.plateFrame}`} data-od-id="transform-ba-diagram">
              <svg className="pl" data-tone="dark" data-p="tb" viewBox="0 0 1600 900" role="img"
                   data-title="Same business. Different Tuesday." data-sub="Hanicks — before and after, paired line for line"
                   data-no="DO-ART-403" data-rev="01" data-class="DECODED OPS · ISSUED"
                   aria-label="Compare plate DO-ART-403. Before and after, paired line for line. Now: supplier data scattered across feeds, no consistent SKU, stock counted by hand, and no reliable catalogue for the website. After: one matched catalogue, 77 per cent matched automatically on the first run, stock pushed straight to the platform, and every channel reading the same data.">
                <defs>
                  <linearGradient id="tb-bg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" className="p-bg0" />
                    <stop offset="100%" className="p-bg1" />
                  </linearGradient>
                  <linearGradient id="tb-node" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" className="p-n0" />
                    <stop offset="100%" className="p-n1" />
                  </linearGradient>
                  <linearGradient id="tb-amber-n" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--do-amber)" stopOpacity=".14" />
                    <stop offset="100%" stopColor="var(--do-orange)" stopOpacity=".03" />
                  </linearGradient>
                  <filter id="tb-shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow className="p-shadow" dx="0" dy="8" stdDeviation="10" />
                  </filter>
                  <marker id="tb-ah" viewBox="0 0 12 12" refX="10" refY="6" markerWidth="7" markerHeight="7" orient="auto">
                    <path d="M0 0 L12 6 L0 12 L3 6z" className="p-cyan" />
                  </marker>
                </defs>
                <rect width="1600" height="900" fill="url(#tb-bg)" />
                <line x1="0" y1="520" x2="1600" y2="520" className="p-grid" opacity=".6" />

                <g className="sk-fade sk-s2" filter="url(#tb-shadow)">
                  <rect x="100" y="200" width="650" height="500" rx="14" fill="url(#tb-amber-n)"
                        className="p-node-a" strokeWidth="1.6"/>
                  <rect x="100" y="200" width="650" height="56" rx="14" className="p-amber" opacity=".92"/>
                  <rect x="100" y="242" width="650" height="14" className="p-amber" opacity=".92"/>
                  <text x="128" y="238" fontFamily="Outfit,sans-serif" fontWeight="800" fontSize="22"
                        letterSpacing="2" fill="var(--do-prussian-blue)">NOW</text>
                </g>
                <g className="sk-fade sk-s3" fontSize="22">
                  <text x="140" y="322" className="p-ink">164,752 rows, no consistent SKU</text>
                  <text x="140" y="392" className="p-ink">Matching done by hand</text>
                  <text x="140" y="462" className="p-ink">Catalogue nobody trusted</text>
                  <text x="140" y="532" className="p-ink">Website and warehouse disagreed</text>
                  <g className="p-samber" strokeWidth="2.4" strokeLinecap="round">
                    <path d="M106 309 L118 321 M118 309 L106 321"/>
                    <path d="M106 379 L118 391 M118 379 L106 391"/>
                    <path d="M106 449 L118 461 M118 449 L106 461"/>
                    <path d="M106 519 L118 531 M118 519 L106 531"/>
                  </g>
                </g>

                <path id="tb-p" pathLength="1" className="sk-draw sk-s4 p-scyan" d="M760 450 H840"
                      fill="none" strokeWidth="3" markerEnd="url(#tb-ah)"/>

                <g className="sk-fade sk-s4" filter="url(#tb-shadow)">
                  <rect x="850" y="200" width="650" height="500" rx="14" fill="url(#tb-node)"
                        className="p-node" strokeWidth="1.6"/>
                  <rect x="850" y="200" width="650" height="56" rx="14" className="p-cyan" opacity=".95"/>
                  <rect x="850" y="242" width="650" height="14" className="p-cyan" opacity=".95"/>
                  <text x="878" y="238" fontFamily="Outfit,sans-serif" fontWeight="800" fontSize="22"
                        letterSpacing="2" fill="var(--do-prussian-blue)">AFTER</text>
                </g>
                <g className="sk-fade sk-s5" fontSize="22">
                  <text x="890" y="322" className="p-ink">127,135 matched on the first run</text>
                  <text x="890" y="392" className="p-ink">77% matched automatically</text>
                  <text x="890" y="462" className="p-ink">11,064 live at Khaos Control</text>
                  <text x="890" y="532" className="p-ink">One catalogue, every channel</text>
                  <g className="p-scyan" strokeWidth="2.6" strokeLinecap="round"
                     strokeLinejoin="round" fill="none">
                    <path d="M856 315 L863 322 L876 308"/>
                    <path d="M856 385 L863 392 L876 378"/>
                    <path d="M856 455 L863 462 L876 448"/>
                    <path d="M856 525 L863 532 L876 518"/>
                  </g>
                </g>

                <g className="sk-dots">
                  <circle r="6" className="p-cyan">
                    <animateMotion dur="2.2s" repeatCount="indefinite"><mpath href="#tb-p"/></animateMotion>
                  </circle>
                </g>
              </svg>
            </div>
          </div>

          <div className={s.ba} data-od-id="transform-ba-cards">
            <div className={`${s.baCol} ${s.baColNow}`} data-od-id="ba-now">
              <h3>Before — both businesses</h3>
              <ul>
                <li>Supplier data spread across feeds that all disagreed</li>
                <li>Matching and re-keying done by hand, every time a range changed</li>
                <li>A catalogue nobody in the business actually trusted</li>
                <li>Automation talked about, on top of data that wasn&apos;t ready for it</li>
              </ul>
            </div>
            <div className={`${s.baCol} ${s.baColAfter}`} data-od-id="ba-after">
              <h3>After</h3>
              <ul>
                <li>Hanicks: <strong>164,752</strong> imported, <strong>127,135</strong> matched on the first run</li>
                <li>Hanicks: <strong>77%</strong> matched automatically, <strong>11,064</strong> live at Khaos Control</li>
                <li>TackleBag: <strong>9</strong> supplier feeds automated end to end</li>
                <li>TackleBag: a projected saving of <strong>20–40 hours</strong> a week</li>
              </ul>
            </div>
          </div>

          <p className={s.tableFoot}>Both named with permission. Same approach both times — fix the process
            and the data before automating anything.</p>
        </div>
      </section>

      {/* 3 · THREE DIMENSIONS */}
      <section className="g-white" data-od-id="dimensions">
        <div className="wrap">
          <span className="eyebrow">What a Transform engagement covers</span>
          <h2>Three dimensions, run together.</h2>
          <p className="lede" style={{ marginTop: 16 }}>Transform is the Clarity Audit plan, turned into a
            programme. The same vendor-neutral discipline as Deliver, applied across more than one
            system or department at once.</p>

          <div className="grid grid--3">
            <div className={s.feature} data-od-id="dimension-plan">
              <div className={s.featureMark} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
                     strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 5h16M4 12h10M4 19h13"/><circle cx="19" cy="12" r="2"/>
                </svg>
              </div>
              <h3>Sequence the plan</h3>
              <p>The Clarity Audit report becomes a phased programme — what happens first, what
                depends on what, and what can run in parallel without the business grinding to a
                halt.</p>
            </div>
            <div className={s.feature} data-od-id="dimension-procure">
              <div className={s.featureMark} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
                     strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="8" r="3"/><path d="M3 19c0-3 2.7-4.6 6-4.6s6 1.6 6 4.6"/>
                  <path d="M17 9.5h4M17 13.5h4"/>
                </svg>
              </div>
              <h3>Vendor-neutral delivery</h3>
              <p>Every vendor quotes against the same brief, and someone technical stays on your side
                of the table for the build — the same discipline as Deliver, run at programme scale.</p>
            </div>
            <div className={s.feature} data-od-id="dimension-embed">
              <div className={s.featureMark} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
                     strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 18 9.5 12l3.5 3.5L20 8"/><path d="M15.5 8H20v4.5"/>
                </svg>
              </div>
              <h3>Embed the Process &amp; Quality System</h3>
              <p>Not a single workflow documented — the whole programme, so what&apos;s still running after
                I&apos;ve gone is a system the business owns, not a memory of a project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 · CTA STRIP */}
      <section className={`g-navy ${s.ctaStrip}`} data-od-id="cta-strip">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <h2>Book a Clarity Audit.</h2>
          <p className="lede">Transform is scoped per engagement — there&apos;s no published price for a
            programme this size, and there won&apos;t be. It starts the same way everything does: a full
            day on site and a written plan.</p>
          <div className={s.heroCta}>
            <Link className="btn btn--primary" href="/contact">Book a free discovery call</Link>
            <Link className={`btn ${s.navyGhost} ${s.btnArrow}`} href="/deliver">See how Deliver runs</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
