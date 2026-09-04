import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { CapacityPlannerCalculator } from '@/components/calculators/CapacityPlannerCalculator';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Capacity Planning Calculator',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'Calculate your production capacity based on your machines, hours, and job times. Free tool for print, embroidery, and decoration businesses.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
  url: 'https://decodedops.co.uk/resources/capacity-planner',
};

export const metadata: Metadata = {
  title: 'Capacity Planning Calculator | Decoded Ops',
  description:
    'Work out how many jobs your setup can actually produce per week. Free tool for print, embroidery, and decoration businesses.',
  alternates: { canonical: '/resources/capacity-planner' },
  openGraph: {
    type: 'website',
    title: 'Capacity Planning Calculator | Decoded Ops',
    description: 'Work out how many jobs your setup can actually produce per week. Free tool for print, embroidery, and decoration businesses.',
    url: 'https://decodedops.co.uk/resources/capacity-planner',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Capacity Planning Calculator | Decoded Ops',
    description: 'Work out how many jobs your setup can actually produce per week. Free tool for print, embroidery, and decoration businesses.',
  },
};

export default function CapacityPlannerPage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      {/* HERO */}
      <section className="g-off">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <span className="eyebrow">Free tool &middot; Give first</span>
          <h1>Capacity planning calculator</h1>
          <p className="lede">
            Work out how many jobs your machines can actually produce — not the theoretical maximum, but the real number after changeovers, breaks, and downtime eat into the day.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="g-navy">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <span className="eyebrow">How it works</span>
          <h2>Five inputs, one answer you can plan against.</h2>
          <div className="hair" />
          <p className="lede" style={{ marginTop: 16 }}>
            Most decoration businesses guess their capacity or quote the number printed on the machine spec sheet. Neither accounts for changeovers, maintenance, or the gap between theoretical and actual throughput. This calculator builds your capacity figure from the ground up, using your real numbers.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginTop: 32 }}>
            {[
              { n: '01', t: 'How many machines', d: 'Every head, press, or station that does the work.' },
              { n: '02', t: 'Hours per day', d: 'Production hours, not including breaks.' },
              { n: '03', t: 'Days per week', d: 'Your working pattern.' },
              { n: '04', t: 'Average job time', d: 'Setup through completion, per job.' },
              { n: '05', t: 'Downtime allowance', d: 'Changeovers, cleaning, minor breakdowns.' },
            ].map((s) => (
              <div key={s.n} style={{ padding: 16, borderRadius: 'var(--do-radius-lg)', border: '1px solid rgba(142,202,230,.15)' }}>
                <span style={{ fontSize: 'var(--do-text-xs)', fontWeight: 700, color: 'var(--do-cerulean)', letterSpacing: '0.06em' }}>{s.n}</span>
                <h3 style={{ fontSize: 'var(--do-text-base)', margin: '6px 0 4px', color: 'var(--do-text-on-dark)' }}>{s.t}</h3>
                <p style={{ fontSize: 'var(--do-text-sm)', color: 'color-mix(in srgb, var(--do-text-on-dark) 65%, transparent)', margin: 0 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="g-off">
        <div className="wrap" style={{ maxWidth: 900 }}>
          <CapacityPlannerCalculator />
        </div>
      </section>

      {/* Why this matters */}
      <section className="g-off" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="wrap" style={{ maxWidth: 720 }}>
          <h2 style={{ fontFamily: 'var(--do-font-heading)', fontSize: 'var(--do-text-2xl)', fontWeight: 700, color: 'var(--do-text-primary)', marginBottom: 16 }}>
            Why your real capacity is lower than you think
          </h2>
          <div style={{ fontFamily: 'var(--do-font-body)', color: 'var(--do-text-secondary)', fontSize: '17px', lineHeight: 1.7 }}>
            <p style={{ marginBottom: 16 }}>
              The spec sheet says your heat press runs 200 transfers an hour. That assumes one operator, one design, no changeovers, no breaks, and no downtime. In practice, changeovers eat into every job, operators need breaks, and presses need cleaning between runs. Enter your own downtime allowance in the calculator above to see what your real throughput looks like.
            </p>
            <p style={{ marginBottom: 16 }}>
              That matters because quoting is based on capacity. If your quoted capacity is higher than your real capacity, you will either over-quote (and lose work) or under-quote (and be buried).
            </p>
            <p style={{ marginBottom: 0 }}>
              This calculator gives you the honest number. Use it before you commit to a deadline or price a volume job.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="g-off">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <div style={{ background: 'color-mix(in srgb, var(--do-amber) 10%, transparent)', border: '1px solid color-mix(in srgb, var(--do-amber) 30%, transparent)', borderRadius: 'var(--do-radius-2xl)', padding: 32 }}>
            <h3>Need to know what your capacity is actually worth?</h3>
            <p style={{ color: 'var(--do-text-secondary)', marginBottom: 24 }}>
              A Clarity Audit maps your real throughput, finds where capacity is lost to process gaps, and gives you a costed plan to reclaim it.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <Link href="/contact" className="btn btn--primary">
                Book a free discovery call <ArrowRight size={18} />
              </Link>
              <Link href="/clarity" className="btn btn--outline">
                See what Clarity covers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
