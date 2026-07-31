import type { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

// Ported from D:\apps\design-systems\decoded-marketing\process-quality-system.html.
// New route. The inline SVG schematic uses the .sk-* paint contract classes
// defined in ds-marketing.css. Without the site.js IntersectionObserver
// wiring, the diagram renders fully visible and static — the DS's
// documented no-JS-safe fallback, not a broken state.

export const metadata: Metadata = {
  title: 'Process & Quality System — Decoded Ops',
  description: 'Not a report that sits in a drawer. A working system for how the business documents, checks and improves its own processes — built during the engagement and owned by you after it.',
  alternates: { canonical: '/process-quality-system' },
  openGraph: {
    type: 'website',
    title: 'Process & Quality System — Decoded Ops',
    description: 'Not a report that sits in a drawer. A working system for how the business documents, checks and improves its own processes — built during the engagement and owned by you after it.',
    url: 'https://decodedops.co.uk/process-quality-system',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process & Quality System — Decoded Ops',
    description: 'A working system for how the business documents, checks and improves its own processes — built during the engagement and owned by you after it.',
  },
};

export default function ProcessQualitySystemPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Process & Quality System', url: 'https://decodedops.co.uk/process-quality-system' },
      ]} />

      {/* 1 · HERO CENTRE */}
      <section className="g-off">
        <div className="container hero-center">
          <p className="eyebrow">Process &amp; Quality System</p>
          <h1>What you&rsquo;re actually left with.</h1>
          <p className="lead">Not a report that sits in a drawer. A working system for how the business
            documents, checks, and improves its own processes — built during the engagement and owned by
            you after it.</p>
          <div className="hero-cta">
            <Link className="btn btn-primary btn-arrow" href="/deliver">See how this fits into Deliver</Link>
          </div>
        </div>
      </section>

      {/* 2 · THE LOOP */}
      <section className="g-tint">
        <div className="container">
          <p className="eyebrow">The loop</p>
          <h2>The same four steps, for every process that matters.</h2>
          <p className="lead" style={{ marginTop: 16 }}>Not a one-off audit. A loop that keeps running after
            the engagement ends, because the last step feeds the first one.</p>

          <div className="plate">
            <svg className="sk" data-tone="dark" data-sk="a1" viewBox="0 0 1240 560" role="img"
              aria-label="A four-step loop. One: map the process as it actually runs. Two: document it as an SOP. Three: check it is followed. Four: log what has improved. The fourth step loops back to the first, and the loop repeats for every process that matters.">
              <defs>
                <pattern id="pq1-grid" width="34" height="34" patternUnits="userSpaceOnUse">
                  <path d="M34 0H0V34" fill="none" className="sk-gridline" strokeWidth="0.6" />
                </pattern>
                <linearGradient id="pq1-glass-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" className="sk-gc0" /><stop offset="100%" className="sk-gc1" />
                </linearGradient>
                <linearGradient id="pq1-glass-amber" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" className="sk-ga0" /><stop offset="100%" className="sk-ga1" />
                </linearGradient>
                <filter id="pq1-shadow" className="sk-drop" x="-40%" y="-40%" width="180%" height="180%">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" />
                </filter>
                <marker id="pq1-ah" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto">
                  <path d="M0 0 L6 3 L0 6 Z" className="sk-amber" />
                </marker>
                <marker id="pq1-ah-cyan" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto">
                  <path d="M0 0 L6 3 L0 6 Z" className="sk-cyan" />
                </marker>
              </defs>

              <rect width="1240" height="560" rx="16" className="sk-bg" />
              <rect width="1240" height="560" rx="16" fill="url(#pq1-grid)" />
              <rect width="1240" height="6" className="sk-amber" />

              <text x="60" y="64" className="sk-fade sk-s1 sk-cyan" fontSize="20" letterSpacing="3"
                fontWeight="500">PROCESS &amp; QUALITY SYSTEM</text>
              <text x="60" y="118" className="sk-fade sk-s1 sk-ink" fontFamily="Outfit,sans-serif"
                fontWeight="800" fontSize="46">A loop, not a document.</text>

              <path id="pq1-spine" pathLength="1" className="sk-draw sk-s2 sk-stroke-cyan" d="M120 370 H1120"
                fill="none" strokeWidth="2.5" markerEnd="url(#pq1-ah)" />

              <g className="sk-fade sk-s3" filter="url(#pq1-shadow)">
                <rect x="60" y="180" width="250" height="110" rx="9.5" fill="url(#pq1-glass-cyan)"
                  className="sk-node" strokeWidth="1.4" />
                <text x="185" y="230" textAnchor="middle" className="sk-ink" fontFamily="Outfit,sans-serif"
                  fontWeight="600" fontSize="24">Map</text>
                <text x="185" y="262" textAnchor="middle" className="sk-mono" fontSize="17"
                  opacity=".85">how it actually runs</text>
                <circle cx="185" cy="370" r="13" className="sk-cyan" />
                <text x="185" y="418" textAnchor="middle" className="sk-mono" fontSize="17"
                  letterSpacing="1.5" opacity=".7">STEP 1</text>
              </g>

              <g className="sk-fade sk-s4" filter="url(#pq1-shadow)">
                <rect x="350" y="180" width="250" height="110" rx="9.5" fill="url(#pq1-glass-cyan)"
                  className="sk-node" strokeWidth="1.4" />
                <text x="475" y="230" textAnchor="middle" className="sk-ink" fontFamily="Outfit,sans-serif"
                  fontWeight="600" fontSize="24">Document</text>
                <text x="475" y="262" textAnchor="middle" className="sk-mono" fontSize="17"
                  opacity=".85">as an SOP anyone can follow</text>
                <circle cx="475" cy="370" r="13" className="sk-cyan" />
                <text x="475" y="418" textAnchor="middle" className="sk-mono" fontSize="17"
                  letterSpacing="1.5" opacity=".7">STEP 2</text>
              </g>

              <g className="sk-fade sk-s5" filter="url(#pq1-shadow)">
                <rect x="640" y="180" width="250" height="110" rx="9.5" fill="url(#pq1-glass-cyan)"
                  className="sk-node" strokeWidth="1.4" />
                <text x="765" y="230" textAnchor="middle" className="sk-ink" fontFamily="Outfit,sans-serif"
                  fontWeight="600" fontSize="24">Check</text>
                <text x="765" y="262" textAnchor="middle" className="sk-mono" fontSize="17"
                  opacity=".85">that it is actually followed</text>
                <circle cx="765" cy="370" r="13" className="sk-cyan" />
                <text x="765" y="418" textAnchor="middle" className="sk-mono" fontSize="17"
                  letterSpacing="1.5" opacity=".7">STEP 3</text>
              </g>

              {/* the thing you keep — amber lands once */}
              <g className="sk-fade sk-s6" filter="url(#pq1-shadow)">
                <rect x="930" y="176" width="250" height="118" rx="11" fill="url(#pq1-glass-amber)"
                  className="sk-node-amber" strokeWidth="1.6" />
                <text x="1055" y="228" textAnchor="middle" className="sk-ink" fontFamily="Outfit,sans-serif"
                  fontWeight="700" fontSize="24">Log</text>
                <text x="1055" y="262" textAnchor="middle" className="sk-accent-ink" fontSize="17">what
                  improved · what&rsquo;s next</text>
                <circle cx="1055" cy="370" r="17" className="sk-amber" />
                <text x="1055" y="418" textAnchor="middle" className="sk-mono" fontSize="17"
                  letterSpacing="1.5" opacity=".85">STEP 4</text>
              </g>

              {/* the return arc: the fourth step feeds the first */}
              <path id="pq1-loop" pathLength="1" className="sk-draw sk-s6 sk-stroke-cyan" fill="none"
                strokeWidth="2.2" strokeDasharray="7 8" markerEnd="url(#pq1-ah-cyan)"
                d="M1055 440 C 1055 505, 185 505, 185 442" />
              <text x="620" y="540" textAnchor="middle" className="sk-sub sk-fade sk-s6" fontSize="24"
                fontStyle="italic" opacity=".85">Then round again — for every process that
                matters.</text>
            </svg>
          </div>

          <div className="steps">
            <article className="step">
              <p className="step-n">STEP 1</p>
              <h3>Map the process</h3>
              <p>As it actually runs, watched end to end. Not as the org chart describes it and not as
                anyone remembers it.</p>
            </article>
            <article className="step">
              <p className="step-n">STEP 2</p>
              <h3>Document it as an SOP</h3>
              <p>Written so someone who doesn&rsquo;t already know the job can follow it. That&rsquo;s the test —
                not whether the person who wrote it recognises it.</p>
            </article>
            <article className="step">
              <p className="step-n">STEP 3</p>
              <h3>Check it&rsquo;s followed</h3>
              <p>An SOP nobody follows is a document, not a system. This is the step most businesses skip
                and the reason their documentation goes stale.</p>
            </article>
            <article className="step step--last">
              <p className="step-n">STEP 4</p>
              <h3>Log what&rsquo;s improved</h3>
              <p>What changed, what it was worth, and what&rsquo;s next. The log is yours, and it&rsquo;s what makes
                the loop run again without me.</p>
            </article>
          </div>
        </div>
      </section>

      {/* 3 · CTA STRIP */}
      <section className="g-navy cta-strip">
        <div className="container" style={{ maxWidth: 760 }}>
          <h2>See how this fits into Deliver.</h2>
          <p className="lead">Every Deliver engagement builds this alongside the project itself, so what you
            keep afterwards is a documented process — not just something that works and nobody can
            explain.</p>
          <div className="hero-cta">
            <Link className="btn btn-primary" href="/deliver">See how this fits into Deliver</Link>
            <Link className="btn btn-secondary btn-arrow" href="/decoded-method">The Decoded Method</Link>
          </div>
        </div>
      </section>
    </>
  );
}
