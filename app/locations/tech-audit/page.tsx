import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { D17Motion } from '@/components/D17Motion';
import '@/app/d17-global.css';
import '@/app/d17-locations.css';

export const metadata: Metadata = {
  title: 'Independent Technology Audit, UK-wide | Decoded Ops',
  description: 'An independent technology audit for print, embroidery and workwear businesses anywhere in the UK. No vendor agenda.',
  alternates: { canonical: '/locations/tech-audit' },
  openGraph: {
    title: 'Independent Technology Audit, UK-wide | Decoded Ops',
    description: 'An independent technology audit for print, embroidery and workwear businesses anywhere in the UK. No vendor agenda.',
    url: 'https://decodedops.co.uk/locations/tech-audit',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Independent Technology Audit, UK-wide | Decoded Ops',
    description: 'An independent technology audit for print, embroidery and workwear businesses anywhere in the UK. No vendor agenda.',
  },
};

const painPoints = [
  {
    title: 'Your systems don\'t talk to each other',
    body: 'Data moves manually between platforms. Orders get processed twice. Stock figures don\'t match. Every disconnection costs time and creates errors, and most businesses have stopped noticing how much it costs.',
  },
  {
    title: 'You know costs are higher than they should be, but can\'t see where',
    body: 'The cost is there, in headcount, rework, and customer service time, but no one has mapped where it actually comes from. The Clarity Audit finds it and costs it accurately.',
  },
  {
    title: 'Ready to scale, but the operations aren\'t',
    body: 'Revenue could grow faster. The constraint is operational: systems, process, and people doing jobs that should be automated. Finding the bottleneck is the first step to removing it.',
  },
  {
    title: 'Decisions being made on incomplete information',
    body: 'Reports take hours to produce. Numbers don\'t tie up. Decisions get made on gut feel because the data isn\'t trustworthy. This is almost always a systems problem, not a people problem.',
  },
];

const whatIdo = [
  'One structured day on site, talking to the people doing the work, not just the people managing it',
  'Map every system you\'re running, what it costs, and what it\'s actually being used for versus what it was bought to do',
  'Document every manual handoff and workaround. This is almost always where the cost is hiding',
  'Identify the three to five changes that would recover the most cost or release the most revenue',
  'Write a report within five working days: specific, costed, with independent vendor recommendations',
  'Back it with the 3× Clarity Guarantee: if the audit doesn\'t identify at least 3× the fee in recoverable cost or lost revenue, you get a full refund, no conditions',
];

export default function TechAuditPage() {
  return (
    <>
      <D17Motion />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Technology Audit', url: 'https://decodedops.co.uk/locations/tech-audit' },
      ]} />

      {/* HERO */}
      <section className="g-off">
        <div className="wrap">
          <div style={{ maxWidth: 720 }}>
            <span className="eyebrow" style={{ marginBottom: 22 }}>Technology Audit</span>
            <h1 className="h1">Independent technology audit, <em>anywhere in the UK</em></h1>
            <p className="lede">
              An independent audit that tells you exactly what your systems are costing you, and what to do about it. From £1,500.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 'var(--do-radius-full)', background: 'color-mix(in srgb, var(--do-prussian-blue) 5%, transparent)', border: '1px solid color-mix(in srgb, var(--do-prussian-blue) 10%, transparent)', marginBottom: 32 }}>
              <span style={{ fontSize: 'var(--do-text-sm)', fontWeight: 'var(--do-weight-semibold)', color: 'var(--do-text-primary)' }}>3× Clarity Guarantee</span>
              <span style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-text-muted)' }}>If I don&apos;t find 3× the fee in recoverable cost or lost revenue, you get a full refund</span>
            </div>
            <div>
              <Link href="/contact" className="btn btn--primary" style={{ marginBottom: 12 }}>
                Book a free call <ArrowRight size={18} />
              </Link>
              <div>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-text-cerulean)', fontWeight: 'var(--do-weight-medium)', display: 'inline-flex', alignItems: 'center', gap: 4 }}>Or book a call directly <ArrowRight size={14} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT THE AUDIT FINDS */}
      <section className="g-tint">
        <div className="wrap">
          <div style={{ maxWidth: '42ch', marginBottom: 64 }}>
            <span className="eyebrow" style={{ marginBottom: 22 }}>Where the cost hides</span>
            <h2 className="h2">The problems that tend to appear</h2>
            <p className="lede">
              These are the patterns I see most often in technology audit engagements. They look different in every business, but the underlying structure is almost always the same.
            </p>
          </div>
          <div className="grid grid--2">
            {painPoints.map((p, i) => (
              <div key={p.title} className="card">
                <div style={{ fontSize: 'var(--do-text-3xl)', fontWeight: 'var(--do-weight-bold)', color: 'var(--do-text-cerulean)', marginBottom: 16 }}>{String(i + 1).padStart(2, '0')}</div>
                <h3 className="h3" style={{ marginBottom: 8 }}>{p.title}</h3>
                <p style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-text-secondary)', lineHeight: 1.75, marginBottom: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW THE AUDIT WORKS */}
      <section className="g-navy">
        <div className="wrap">
          <div className="loc-how">
            <div>
              <span className="eyebrow" style={{ marginBottom: 22 }}>How the audit works</span>
              <h2 className="h2">One day on site. A written report within five.</h2>
              <p className="lede">
                No frameworks. No generic recommendations. A structured, independent process that produces specific answers for this business.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 32 }}>
                {whatIdo.map((item, i) => (
                  <div key={i} className="card" style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'color-mix(in srgb, var(--do-cerulean) 20%, transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                      <span style={{ fontSize: 'var(--do-text-xs)', fontWeight: 'var(--do-weight-bold)', color: '#c3d0d6' }}>{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <p style={{ fontSize: 'var(--do-text-sm)', color: '#c3d0d6', lineHeight: 1.75, marginBottom: 0 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* STICKY CTA CARD */}
            <div style={{ position: 'sticky', top: 112 }}>
              <div className="card" style={{ padding: 32 }}>
                <div style={{ fontSize: 'var(--do-text-2xl)', fontWeight: 'var(--do-weight-bold)', color: 'var(--do-text-on-dark)', marginBottom: 8 }}>Book a Clarity Audit, from £1,500</div>
                <p style={{ fontSize: 'var(--do-text-sm)', color: '#dfe6ea', lineHeight: 1.75, marginBottom: 24 }}>
                  The first conversation is free and there&apos;s no obligation. Just a call about what&apos;s happening in your business and whether I can help.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
                  {[
                    'No vendor relationships or commission',
                    'Worked at every level, warehouse floor to boardroom',
                    '3× Clarity Guarantee on audit work',
                    'UK-wide, on-site where the work needs it',
                  ].map((item) => (
                    <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 'var(--do-text-sm)', color: '#dfe6ea' }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--do-cerulean)', marginTop: 7, flexShrink: 0 }} />
                      {item}
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="btn btn--primary" style={{ width: '100%' }}>
                  Book a free call <ArrowRight size={18} />
                </Link>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: 'var(--do-text-sm)', color: '#dfe6ea', fontWeight: 'var(--do-weight-medium)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, marginTop: 12 }}>Or book a call directly <ArrowRight size={14} /></a>
                <p style={{ fontSize: 'var(--do-text-xs)', color: '#c3d0d6', textAlign: 'center', marginTop: 16, marginBottom: 0 }}>
                  UK-wide, on-site where the work needs it
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CROSS-LINK TO LOCATIONS */}
      <section className="g-off">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="eyebrow" style={{ marginBottom: 22 }}>Where I work</span>
          <h2 className="h2">On site across the UK</h2>
          <p className="lede">
            Based in Worthing, West Sussex. On-site where the work needs it, anywhere in the UK.
          </p>
          <div className="btn-row" style={{ justifyContent: 'center', marginTop: 32 }}>
            <Link href="/locations/sussex-surrey" className="btn btn--outline">
              Sussex & Surrey <ArrowRight size={18} />
            </Link>
            <Link href="/locations/manchester" className="btn btn--outline">
              Manchester <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
