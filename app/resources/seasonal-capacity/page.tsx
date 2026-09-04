import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { SeasonalCapacityCalculator } from '@/components/calculators/SeasonalCapacityCalculator';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Seasonal Capacity Calculator',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'See where your capacity gap or surplus lands across the year by plotting seasonal demand against your real production capacity.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
  url: 'https://decodedops.co.uk/resources/seasonal-capacity',
};

export const metadata: Metadata = {
  title: 'Seasonal Capacity Calculator | Decoded Ops',
  description:
    'See where your capacity gap or surplus lands across the year. Free tool for print, embroidery, and decoration businesses.',
  alternates: { canonical: '/resources/seasonal-capacity' },
  openGraph: {
    type: 'website',
    title: 'Seasonal Capacity Calculator | Decoded Ops',
    description: 'See where your capacity gap or surplus lands across the year. Free tool for print, embroidery, and decoration businesses.',
    url: 'https://decodedops.co.uk/resources/seasonal-capacity',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seasonal Capacity Calculator | Decoded Ops',
    description: 'See where your capacity gap or surplus lands across the year. Free tool for print, embroidery, and decoration businesses.',
  },
};

export default function SeasonalCapacityPage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      {/* HERO */}
      <section className="g-off">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <span className="eyebrow">Free tool &middot; Give first</span>
          <h1>Seasonal capacity calculator</h1>
          <p className="lede">
            Your capacity is not the problem in January and it is not the problem in July. The problem is that they are not the same month, and you need to plan for both.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="g-navy">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <span className="eyebrow">How it works</span>
          <h2>Set your baseline, then drag the months.</h2>
          <div className="hair" />
          <p className="lede" style={{ marginTop: 16 }}>
            Start with your weekly capacity from the capacity planner. Set your baseline weekly output. Then adjust each month's demand percentage to match your seasonal pattern — 100% is your baseline, higher is peak, lower is quiet. The calculator shows you exactly where the gaps land.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginTop: 32 }}>
            {[
              { n: '01', t: 'Weekly capacity', d: 'Your real output per week, from the capacity planner.' },
              { n: '02', t: 'Baseline weekly jobs', d: 'What you produce in a normal, non-peak month.' },
              { n: '03', t: 'Seasonal demand', d: 'Drag each month up or down. 100% = baseline.' },
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
          <SeasonalCapacityCalculator />
        </div>
      </section>

      {/* Why seasonal planning matters */}
      <section className="g-off" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="wrap" style={{ maxWidth: 720 }}>
          <h2 style={{ fontFamily: 'var(--do-font-heading)', fontSize: 'var(--do-text-2xl)', fontWeight: 700, color: 'var(--do-text-primary)', marginBottom: 16 }}>
            The two costs of getting this wrong
          </h2>
          <div style={{ fontFamily: 'var(--do-font-body)', color: 'var(--do-text-secondary)', fontSize: '17px', lineHeight: 1.7 }}>
            <p style={{ marginBottom: 16 }}>
              <strong>Over-capacity</strong> — you hire, you invest, you take on overhead, and then January is quiet. The machines sit, the staff are under-utilised, and you carry the cost until the next peak. This is the expensive mistake because it is hard to reverse.
            </p>
            <p style={{ marginBottom: 16 }}>
              <strong>Under-capacity</strong> — you cannot fulfil orders during peak, so you turn work away, rush jobs through quality, or pay overtime to close the gap. This is the visible mistake. The cost is lost revenue and damaged reputation, but it does not show up on a balance sheet the same way.
            </p>
            <p style={{ marginBottom: 0 }}>
              The right answer is usually a mix of both — over-invested in some months, under-resourced in others. Mapping the year visually is the first step to finding the pattern, and then deciding what to do about it.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="g-off">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <div style={{ background: 'color-mix(in srgb, var(--do-amber) 10%, transparent)', border: '1px solid color-mix(in srgb, var(--do-amber) 30%, transparent)', borderRadius: 'var(--do-radius-2xl)', padding: 32 }}>
            <h3>Want to plan the year with real numbers?</h3>
            <p style={{ color: 'var(--do-text-secondary)', marginBottom: 24 }}>
              A Clarity Audit maps your seasonal capacity picture across all six operational areas, so you can plan hiring, investment, and pricing around real data, not guesswork.
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
