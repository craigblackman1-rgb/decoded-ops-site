import type { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { Plate } from '@/components/Plate';

export const metadata: Metadata = {
  title: 'Process & Quality System: Decoded Ops',
  description: 'Not a report that sits in a drawer. A working system for how the business documents, checks and improves its own processes, built during the engagement and owned by you after it.',
  alternates: { canonical: '/process-quality-system' },
  openGraph: {
    type: 'website',
    title: 'Process & Quality System: Decoded Ops',
    description: 'Not a report that sits in a drawer. A working system for how the business documents, checks and improves its own processes, built during the engagement and owned by you after it.',
    url: 'https://decodedops.co.uk/process-quality-system',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Process & Quality System: Decoded Ops',
    description: 'A working system for how the business documents, checks and improves its own processes, built during the engagement and owned by you after it.',
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
          <h1>How your business keeps improving after I leave.</h1>
          <p className="lead">Not a report that sits in a drawer. A working system for how the business
            documents, checks, and improves its own processes, built during the engagement and owned by
            you after it.</p>
          <div className="hero-cta">
            <Link className="btn btn-primary btn-arrow" href="/deliver">See how this fits into Deliver</Link>
          </div>
        </div>
      </section>

      {/* 2 · THE LOOP · DO-ART-305 */}
      <section className="g-tint">
        <div className="container">
          <p className="eyebrow">The loop &middot; DO-ART-305</p>
          <h2>The same four steps, for every process that matters.</h2>
          <p className="lead" style={{ marginTop: 16 }}>Not a one-off audit. A loop that keeps running after
            the engagement ends, because the last step feeds the first one.</p>

          <div className="plate-scroll" style={{ marginTop: 34 }}>
            <div className="plate-frame">
              <Plate tone="dark" p="pq" title="A loop, not a document"
                     sub="Four steps. The fourth feeds the first"
                     no="DO-ART-305" rev="01" cls="DECODED OPS · ISSUED">

                <path id="pq-spine" pathLength={1} className="sk-draw sk-s2 p-scyan" d="M180 460 H1420"
                      fill="none" strokeWidth="2.5" markerEnd="url(#pq-ah)"/>

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

                <path id="pq-loop" pathLength={1} className="sk-draw sk-s6 p-scyan" fill="none"
                      strokeWidth="2.2" strokeDasharray="7 8" markerEnd="url(#pq-ah)"
                      d="M1280 540 C 1280 630, 255 630, 255 542"/>
                <text x="760" y="700" textAnchor="middle" className="p-mono sk-fade sk-s6" fontSize="22"
                      fontStyle="italic" opacity=".8">Then round again, for every process that
                  matters.</text>
              </Plate>
            </div>
          </div>

          <div className="steps">
            <article className="step">
              <p className="step-n">STEP 1</p>
              <h3>Map the process</h3>
              <p>As it actually runs, watched from start to finish. Not as the org chart describes it and not as
                anyone remembers it.</p>
            </article>
            <article className="step">
              <p className="step-n">STEP 2</p>
              <h3>Document it as an SOP</h3>
              <p>Written so someone who doesn&rsquo;t already know the job can follow it. That&rsquo;s the test:
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
            keep afterwards is a documented process, not just something that works and nobody can
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
