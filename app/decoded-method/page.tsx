import type { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

// Ported from D:\apps\design-systems\decoded-marketing\decoded-method.html.
// New route — also the target of the /resources/decoded-method redirect
// Lane 0 already wired in next.config.ts.

export const metadata: Metadata = {
  title: 'The Decoded Method — Decoded Ops',
  description: 'Every Clarity, Deliver and Transform engagement runs on the same three layers: a Process Register, written SOPs, and an Improvement Log the client owns afterwards.',
  alternates: { canonical: '/decoded-method' },
  openGraph: {
    type: 'website',
    title: 'The Decoded Method — Decoded Ops',
    description: 'Every Clarity, Deliver and Transform engagement runs on the same three layers: a Process Register, written SOPs, and an Improvement Log the client owns afterwards.',
    url: 'https://decodedops.co.uk/decoded-method',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Decoded Method — Decoded Ops',
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
            method. Not a framework invented for the website — it&rsquo;s how I actually run the work, and how
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
                improved and what&rsquo;s next, owned by you — not filed away once I leave.</p>
            </div>
          </div>

          <div className="inset" style={{ maxWidth: 'none' }}>
            <b>It applies to me too.</b> Decoded Ops runs on its own process register, its own SOPs, and
            its own improvement log. If the method didn&rsquo;t survive contact with a real business, I&rsquo;d know
            before you did.
          </div>
        </div>
      </section>

      {/* 3 · CTA STRIP */}
      <section className="g-navy cta-strip">
        <div className="container" style={{ maxWidth: 760 }}>
          <h2>See it in action.</h2>
          <p className="lead">A Discovery Day is the method&rsquo;s first layer, run over one day in your business.
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
