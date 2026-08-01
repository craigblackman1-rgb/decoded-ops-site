import type { Metadata } from 'next';
import Link from 'next/link';
import s from '@/app/deco-page.module.css';

export const metadata: Metadata = {
  title: 'Deliver — Decoded Ops',
  description: 'Deliver is the implementation phase after Discovery Day: someone technical on your side of the table, and a Process & Quality System you own once the engagement ends.',
  alternates: { canonical: '/deliver' },
  openGraph: {
    type: 'website',
    title: 'Deliver — Decoded Ops',
    description: 'Deliver is the implementation phase after Discovery Day: someone technical on your side of the table, and a Process & Quality System you own once the engagement ends.',
    url: 'https://decodedops.co.uk/deliver',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deliver — Decoded Ops',
    description: 'Deliver is the implementation phase after Discovery Day: someone technical on your side of the table.',
  },
};

export default function DeliverPage() {
  return (
    <main id="content">
      {/* 1 · HERO CENTRE */}
      <section className={`g-off ${s.heroCenter}`} data-od-id="hero">
        <div className="wrap">
          <span className="eyebrow">Deliver</span>
          <h1>The Process &amp; Quality System. The thing you&apos;re left with.</h1>
          <p className="lede">Deliver is the implementation phase — someone technical on your side of the
            table for the whole build, from brief through to handover. What you keep afterwards isn&apos;t
            just something that works. It&apos;s a documented system for how the business runs it.</p>
          <div className={s.heroCta}>
            <Link className="btn btn--primary" href="/contact">Book a Discovery Day</Link>
          </div>
        </div>
      </section>

      {/* 2 · THE THREE OUTPUTS */}
      <section className="g-white" data-od-id="outputs">
        <div className="wrap">
          <span className="eyebrow">What you&apos;re left with</span>
          <h2>Three real artifacts, not a memory of the engagement.</h2>
          <p className="lede" style={{ marginTop: 16 }}>Every Deliver engagement builds these alongside the
            project itself — so what you keep afterwards is a documented process, not just something
            that works and nobody can explain.</p>

          <div className="grid grid--3">
            <div className={s.feature} data-od-id="output-register">
              <div className={s.featureMark} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
                     strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 4h14v16H5z"/><path d="M8.5 9h7M8.5 13h7M8.5 17h4"/>
                </svg>
              </div>
              <p className={s.featureMeta}>From Map</p>
              <h3>The Process Register</h3>
              <p>Every process that matters, named and described as it actually runs — not as the org
                chart says it should. The reference point for everything documented afterwards.</p>
            </div>
            <div className={s.feature} data-od-id="output-sops">
              <div className={s.featureMark} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
                     strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/><path d="M9.5 13h5M9.5 17h5"/>
                </svg>
              </div>
              <p className={s.featureMeta}>From Document</p>
              <h3>Written SOPs</h3>
              <p>So the process doesn&apos;t live in one person&apos;s head. Written so someone who doesn&apos;t
                already know the job can follow it — when they&apos;re on holiday, the business doesn&apos;t
                stop.</p>
            </div>
            <div className={s.feature} data-od-id="output-log">
              <div className={s.featureMark} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
                     strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 18 9.5 12l3.5 3.5L20 8"/><path d="M15.5 8H20v4.5"/>
                </svg>
              </div>
              <p className={s.featureMeta}>From Check &amp; Log</p>
              <h3>An Improvement Log</h3>
              <p>What&apos;s been improved and what&apos;s next, owned by you and still running after I&apos;ve
                gone — the thing that makes the system keep working without me.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 · THE PQS LOOP */}
      <section className="g-tint" data-od-id="deliver-loop">
        <div className="wrap">
          <span className="eyebrow">How Deliver runs</span>
          <h2>Map, document, check, log — then round again.</h2>
          <p className="lede" style={{ marginTop: 16 }}>Not a one-off audit. A loop that keeps running after
            the engagement ends, because the last step feeds the first one.</p>

          <div className="plate-scroll" style={{ marginTop: 34 }}>
            <div className={`plate-frame ${s.plateFrame}`} data-od-id="deliver-loop-diagram">
              <svg className="pl" data-tone="dark" data-p="pq" viewBox="0 0 1600 900" role="img"
                   data-title="A loop, not a document" data-sub="Four steps — the fourth feeds the first"
                   data-no="DO-ART-305" data-rev="01" data-class="DECODED OPS · ISSUED"
                   aria-label="Flow plate DO-ART-305. A four-step loop. One: map the process as it actually runs. Two: document it as an SOP. Three: check it is followed. Four: log what has improved. The fourth step loops back to the first, and the loop repeats for every process that matters.">
                <defs>
                  <linearGradient id="pq-bg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" className="p-bg0" />
                    <stop offset="100%" className="p-bg1" />
                  </linearGradient>
                  <linearGradient id="pq-node" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" className="p-n0" />
                    <stop offset="100%" className="p-n1" />
                  </linearGradient>
                  <linearGradient id="pq-amber-n" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--do-amber)" stopOpacity=".14" />
                    <stop offset="100%" stopColor="var(--do-orange)" stopOpacity=".03" />
                  </linearGradient>
                  <filter id="pq-shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow className="p-shadow" dx="0" dy="8" stdDeviation="10" />
                  </filter>
                  <marker id="pq-ah" viewBox="0 0 12 12" refX="10" refY="6" markerWidth="7" markerHeight="7" orient="auto">
                    <path d="M0 0 L12 6 L0 12 L3 6z" className="p-cyan" />
                  </marker>
                </defs>
                <rect width="1600" height="900" fill="url(#pq-bg)" />
                <line x1="0" y1="340" x2="1600" y2="340" className="p-grid" opacity=".6" />
                <line x1="0" y1="580" x2="1600" y2="580" className="p-grid" opacity=".6" />

                <path id="pq-spine" pathLength="1" className="sk-draw sk-s2 p-scyan" d="M180 460 H1420"
                      fill="none" strokeWidth="2.5" markerEnd="url(#pq-ah)" />

                <g className="sk-fade sk-s3" filter="url(#pq-shadow)">
                  <rect x="100" y="250" width="310" height="140" rx="12" fill="url(#pq-node)"
                        className="p-node" strokeWidth="1.4"/>
                  <text x="255" y="308" textAnchor="middle" className="p-ink" fontFamily="Outfit,sans-serif"
                        fontWeight="700" fontSize="26">Map</text>
                  <text x="255" y="342" textAnchor="middle" className="p-mono" fontSize="17"
                        opacity=".85">how it actually runs</text>
                  <circle cx="255" cy="460" r="13" className="p-cyan"/>
                  <text x="255" y="520" textAnchor="middle" className="p-mono" fontSize="17"
                        letterSpacing="1.5" opacity=".7">STEP 1</text>
                </g>

                <g className="sk-fade sk-s4" filter="url(#pq-shadow)">
                  <rect x="440" y="250" width="310" height="140" rx="12" fill="url(#pq-node)"
                        className="p-node" strokeWidth="1.4"/>
                  <text x="595" y="308" textAnchor="middle" className="p-ink" fontFamily="Outfit,sans-serif"
                        fontWeight="700" fontSize="26">Document</text>
                  <text x="595" y="342" textAnchor="middle" className="p-mono" fontSize="17"
                        opacity=".85">as an SOP anyone can follow</text>
                  <circle cx="595" cy="460" r="13" className="p-cyan"/>
                  <text x="595" y="520" textAnchor="middle" className="p-mono" fontSize="17"
                        letterSpacing="1.5" opacity=".7">STEP 2</text>
                </g>

                <g className="sk-fade sk-s5" filter="url(#pq-shadow)">
                  <rect x="780" y="250" width="310" height="140" rx="12" fill="url(#pq-node)"
                        className="p-node" strokeWidth="1.4"/>
                  <text x="935" y="308" textAnchor="middle" className="p-ink" fontFamily="Outfit,sans-serif"
                        fontWeight="700" fontSize="26">Check</text>
                  <text x="935" y="342" textAnchor="middle" className="p-mono" fontSize="17"
                        opacity=".85">that it is actually followed</text>
                  <circle cx="935" cy="460" r="13" className="p-cyan"/>
                  <text x="935" y="520" textAnchor="middle" className="p-mono" fontSize="17"
                        letterSpacing="1.5" opacity=".7">STEP 3</text>
                </g>

                <g className="sk-fade sk-s6" filter="url(#pq-shadow)">
                  <rect x="1120" y="242" width="320" height="156" rx="14" fill="url(#pq-amber-n)"
                        className="p-node-a" strokeWidth="1.8"/>
                  <text x="1280" y="306" textAnchor="middle" className="p-ink" fontFamily="Outfit,sans-serif"
                        fontWeight="800" fontSize="27">Log</text>
                  <text x="1280" y="342" textAnchor="middle" className="p-accent-ink" fontSize="17"
                        fontWeight="600">what improved · what&apos;s next</text>
                  <circle cx="1280" cy="460" r="17" className="p-amber"/>
                  <text x="1280" y="520" textAnchor="middle" className="p-mono" fontSize="17"
                        letterSpacing="1.5" opacity=".85">STEP 4</text>
                </g>

                <path id="pq-loop" pathLength="1" className="sk-draw sk-s6 p-scyan" fill="none"
                      strokeWidth="2.2" strokeDasharray="7 8" markerEnd="url(#pq-ah)"
                      d="M1280 540 C 1280 630, 255 630, 255 542"/>
                <text x="760" y="700" textAnchor="middle" className="p-mono sk-fade sk-s6" fontSize="22"
                      fontStyle="italic" opacity=".8">Then round again — for every process that
                  matters.</text>

                <g className="sk-dots">
                  <circle r="6" className="p-cyan">
                    <animateMotion dur="4.6s" repeatCount="indefinite"><mpath href="#pq-spine"/></animateMotion>
                  </circle>
                </g>
              </svg>
            </div>
          </div>

          <div className={s.steps} data-od-id="deliver-loop-cards">
            <article className={s.step}>
              <p className={s.stepN}>STEP 1</p>
              <h3>Map</h3>
              <p>The process as it actually runs, watched end to end — not as the org chart describes
                it and not as anyone remembers it.</p>
            </article>
            <article className={s.step}>
              <p className={s.stepN}>STEP 2</p>
              <h3>Document</h3>
              <p>Written as an SOP someone who doesn&apos;t already know the job can follow. That&apos;s the
                test — not whether the person who wrote it recognises it.</p>
            </article>
            <article className={s.step}>
              <p className={s.stepN}>STEP 3</p>
              <h3>Check</h3>
              <p>An SOP nobody follows is a document, not a system. This is the step most businesses
                skip, and the reason their documentation goes stale.</p>
            </article>
            <article className={`${s.step} ${s.stepLast}`}>
              <p className={s.stepN}>STEP 4</p>
              <h3>Log</h3>
              <p>What changed, what it was worth, and what&apos;s next. The log is yours, and it&apos;s what
                makes the loop run again without me.</p>
            </article>
          </div>
        </div>
      </section>

      {/* 4 · CTA STRIP */}
      <section className={`g-navy ${s.ctaStrip}`} data-od-id="cta-strip">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <h2>Book a Discovery Day.</h2>
          <p className="lede">Every Deliver engagement starts here — a full day on site and a written plan,
            before anything gets built.</p>
          <div className={s.heroCta}>
            <Link className="btn btn--primary" href="/contact">Book a free discovery call</Link>
            <Link className={`btn ${s.navyGhost} ${s.btnArrow}`} href="/process-quality-system">See the Process &amp;
              Quality System</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
