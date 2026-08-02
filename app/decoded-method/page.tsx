import type { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { Plate } from '@/components/Plate';

// Ported from D:\apps\design-systems\decoded-marketing\decoded-method.html.
// New route, also the target of the /resources/decoded-method redirect
// Lane 0 already wired in next.config.ts.

export const metadata: Metadata = {
  title: 'The Decoded Method: Decoded Ops',
  description: 'Every Clarity, Deliver and Transform engagement runs on the same three layers: a Process Register, written SOPs, and an Improvement Log the client owns afterwards.',
  alternates: { canonical: '/decoded-method' },
  openGraph: {
    type: 'website',
    title: 'The Decoded Method: Decoded Ops',
    description: 'Every Clarity, Deliver and Transform engagement runs on the same three layers: a Process Register, written SOPs, and an Improvement Log the client owns afterwards.',
    url: 'https://decodedops.co.uk/decoded-method',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Decoded Method: Decoded Ops',
    description: 'Every Clarity, Deliver and Transform engagement runs on the same three layers: Process Register, SOPs, Improvement Log.',
  },
};

export default function DecodedMethodPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'The Decoded Method', url: 'https://decodedops.co.uk/decoded-method' },
      ]} />

      {/* 1 · HERO CENTRE */}
      <section className="g-off">
        <div className="container hero-center">
          <p className="eyebrow">The Decoded Method</p>
          <h1>The system behind every engagement.</h1>
          <p className="lead">Every Clarity, Deliver and Transform engagement runs on the same three-layer
            method. Not a framework invented for the website. It&rsquo;s how I actually run the work, and how
            I run Decoded Ops itself.</p>
          <div className="hero-cta">
            <Link className="btn btn-primary btn-arrow" href="/clarity">See it in action</Link>
          </div>
        </div>
      </section>

      {/* 2 · FEATURES TRIPLET · the three layers */}
      <section className="g-white">
        <div className="container stack" style={{ gap: 48 }}>
          <div>
            <p className="eyebrow">Three layers</p>
            <h2>Map it, write it down, keep improving it.</h2>
            <p className="lead" style={{ marginTop: 16 }}>In that order, every time. Skip the first and you
              automate a process nobody understands. Skip the last and it decays the month after I
              leave.</p>
          </div>

          <div className="grid-3">
            <div className="feature">
              <div className="feature-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 4h14v16H5z" /><path d="M8.5 9h7M8.5 13h7M8.5 17h4" />
                </svg>
              </div>
              <h3>Process Register</h3>
              <p>A written map of how the business actually works today, not how the org chart says it
                should. Every process that matters, named and described, before anything gets changed.</p>
            </div>

            <div className="feature">
              <div className="feature-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3h8l4 4v14H6z" /><path d="M14 3v4h4" /><path d="M9.5 13h5M9.5 17h5" />
                </svg>
              </div>
              <h3>SOPs</h3>
              <p>Once a process is mapped, it gets documented properly, so it doesn&rsquo;t live in one
                person&rsquo;s head. When the person who knows everything goes on holiday, the business
                shouldn&rsquo;t stop.</p>
            </div>

            <div className="feature">
              <div className="feature-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 18 9.5 12l3.5 3.5L20 8" /><path d="M15.5 8H20v4.5" />
                </svg>
              </div>
              <h3>Improvement Log</h3>
              <p>Change doesn&rsquo;t stop at go-live. Every engagement leaves a running log of what&rsquo;s been
                improved and what&rsquo;s next, owned by you. Not filed away once I leave.</p>
            </div>
          </div>

          <div className="inset" style={{ maxWidth: 'none' }}>
            <b>It applies to me too.</b> Decoded Ops runs on its own process register, its own SOPs, and
            its own improvement log. If the method didn&rsquo;t survive contact with a real business, I&rsquo;d know
            before you did.
          </div>
        </div>
      </section>

      {/* 2a · METHOD PLATE · DO-ART-304 */}
      <section className="g-tint">
        <div className="container">
          <p className="eyebrow">The loop &middot; DO-ART-304</p>
          <h2>Process Register to Improvement Log, then repeat.</h2>
          <p className="lead" style={{ marginTop: 16 }}>Three layers in fixed order. The log feeds back
            into the register.</p>

          <div className="plate-scroll" style={{ marginTop: 34 }}>
            <div className="plate-frame">
              <Plate tone="dark" p="dm" title="Process Register to Improvement Log, then repeat"
                     sub="Three layers in fixed order. The log feeds back into the register"
                     no="DO-ART-304" rev="01" cls="DECODED OPS · ISSUED">

                <path id="dm-spine" pathLength={1} className="sk-draw sk-s2 p-scyan" fill="none"
                      strokeWidth="2.5" markerEnd="url(#dm-ah)" d="M340 460 H1260"/>
                <path id="dm-return" pathLength={1} className="sk-draw sk-s6 p-samber" fill="none"
                      strokeWidth="2" strokeDasharray="2 7" markerEnd="url(#dm-ah)"
                      d="M1300 540 C 1300 680, 340 680, 340 540"/>

                <g className="sk-fade sk-s3">
                  <rect x="180" y="330" width="320" height="150" rx="14" fill="url(#dm-node)"
                        className="p-node" strokeWidth="1.4"/>
                  <text x="220" y="392" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="700"
                        fontSize="26">01 · Process Register</text>
                  <text x="220" y="424" className="p-mono" fontSize="16" opacity=".8">A written map of how
                    things actually work</text>
                  <text x="220" y="450" className="p-mono" fontSize="15" opacity=".55">Before anything
                    gets changed</text>
                  <circle cx="340" cy="460" r="10" className="p-cyan"/>
                </g>

                <g className="sk-fade sk-s4" filter="url(#dm-shadow)">
                  <rect x="640" y="300" width="320" height="180" rx="16" fill="url(#dm-amber-n)"
                        className="p-node-a" strokeWidth="2"/>
                  <text x="680" y="368" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="800"
                        fontSize="28">02 · SOPs</text>
                  <text x="680" y="400" className="p-accent-ink" fontSize="17" fontWeight="600">Documented,
                    not one person&apos;s head</text>
                  <text x="680" y="440" className="p-mono" fontSize="15" opacity=".7">When they&apos;re on
                    holiday, the</text>
                  <text x="680" y="460" className="p-mono" fontSize="15" opacity=".7">business doesn&apos;t
                    stop</text>
                  <circle cx="800" cy="460" r="12" className="p-amber"/>
                </g>

                <g className="sk-fade sk-s5">
                  <rect x="1100" y="330" width="320" height="150" rx="14" fill="url(#dm-node)"
                        className="p-node" strokeWidth="1.4"/>
                  <text x="1140" y="392" className="p-ink" fontFamily="Outfit,sans-serif" fontWeight="700"
                        fontSize="26">03 · Improvement Log</text>
                  <text x="1140" y="424" className="p-mono" fontSize="16" opacity=".8">Change doesn&apos;t stop
                    at go-live</text>
                  <text x="1140" y="450" className="p-mono" fontSize="15" opacity=".55">Owned by you,
                    after I leave</text>
                  <circle cx="1260" cy="460" r="10" className="p-cyan"/>
                </g>

                <text x="800" y="770" textAnchor="middle" className="p-mono sk-fade sk-s6" fontSize="16"
                      letterSpacing="1.6" opacity=".6">FEEDS BACK INTO THE REGISTER. NOT A ONE-OFF
                  PROJECT</text>

                <g className="sk-dots">
                  <circle r="6" className="p-cyan"><animateMotion dur="3s" repeatCount="indefinite"><mpath href="#dm-spine"/></animateMotion></circle>
                </g>
              </Plate>
            </div>
          </div>
        </div>
      </section>

      {/* 3 · CTA STRIP */}
      <section className="g-navy cta-strip">
        <div className="container" style={{ maxWidth: 760 }}>
          <h2>See it in action.</h2>
          <p className="lead">A Clarity Audit is the method&rsquo;s first layer, run over one day in your business.
            You&rsquo;ll see exactly what a process register looks like when it&rsquo;s about you.</p>
          <div className="hero-cta">
            <Link className="btn btn-primary" href="/clarity">See it in action</Link>
            <Link className="btn btn-secondary btn-arrow" href="/process-quality-system">What you&rsquo;re left
              with</Link>
          </div>
        </div>
      </section>
    </>
  );
}
