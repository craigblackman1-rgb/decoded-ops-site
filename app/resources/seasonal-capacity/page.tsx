import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { SeasonalCapacityCalculator } from '@/components/calculators/SeasonalCapacityCalculator';
import { D17Motion } from '@/components/D17Motion';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';
import '@/app/d17-global.css';
import '@/app/d17-problems.css';
import '@/app/d17-resources.css';

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
  title: { absolute: 'Seasonal Capacity Calculator for Print | Decoded Ops' },
  description:
    'A free seasonal capacity calculator for print, embroidery and workwear businesses. See whether your busiest months fit your machines and your team.',
  alternates: { canonical: '/resources/seasonal-capacity' },
  openGraph: {
    type: 'website',
    title: 'Seasonal Capacity Calculator for Print | Decoded Ops',
    description: 'A free seasonal capacity calculator for print, embroidery and workwear businesses. See whether your busiest months fit your machines and your team.',
    url: 'https://decodedops.co.uk/resources/seasonal-capacity',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seasonal Capacity Calculator for Print | Decoded Ops',
    description: 'A free seasonal capacity calculator for print, embroidery and workwear businesses. See whether your busiest months fit your machines and your team.',
    images: [OG_IMAGE_PATH],
  },
};

export default function SeasonalCapacityPage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      {/* HERO — rt-split: copy left, DO-ART-994 right */}
      <section className="g-off">
        <div className="wrap rt-split">
          <div>
            <span className="eyebrow">Free tool &middot; Give first</span>
            <h1>Seasonal capacity calculator</h1>
            <p className="lede">
              Your capacity is not the problem in January and it is not the problem in July. The problem is that they are not the same month, and you need to plan for both.
            </p>
          </div>

          <div dangerouslySetInnerHTML={{ __html: `
      <figure class="d17 sx a994" data-od-id="hero-art" data-motion data-no="DO-ART-994" data-rev="01" data-tx="photo"
              aria-label="Artwork DO-ART-994. A paper year planner pinned over a graded photograph of blank mugs, filled in as an example. Demand for each month is pencilled as a share of the baseline: from 70 per cent in January rising to 140 per cent in November. A ruled line marks capacity at 110 per cent. September to December sit above it, in amber. Two sticky notes: over capacity in the autumn, overtime or turn work away; spare in January, staff and machines idle. Plan for both months.">
        <div class="d17-ph"><img src="/images/d17/resources/cat-promo-264d08.webp" alt="" width="900" height="600"></div>
        <div class="d17-scan" aria-hidden="true"></div>
        <div class="sx-top d17-mono" aria-hidden="true"><span>Seasonal capacity</span><span>Example year</span></div>
        <div class="stage" aria-hidden="true">
          <div class="d17-doc doc-yp m-drop" style="animation-delay:.05s">
            <span class="tab">EXAMPLE</span>
            <span class="ref">Year planner · demand vs capacity</span>
            <h4>Where the gap lands</h4>
            <div class="yp">
              <i class="m-grow" style="--h:46.7%;animation-delay:0.00s"><b>70</b></i><i class="m-grow" style="--h:50.0%;animation-delay:0.05s"><b>75</b></i><i class="m-grow" style="--h:60.0%;animation-delay:0.10s"><b>90</b></i><i class="m-grow" style="--h:63.3%;animation-delay:0.15s"><b>95</b></i><i class="m-grow" style="--h:66.7%;animation-delay:0.20s"><b>100</b></i><i class="m-grow" style="--h:70.0%;animation-delay:0.25s"><b>105</b></i><i class="m-grow" style="--h:73.3%;animation-delay:0.30s"><b>110</b></i><i class="m-grow" style="--h:66.7%;animation-delay:0.35s"><b>100</b></i><i class="over m-grow" style="--h:76.7%;animation-delay:0.40s"><b>115</b></i><i class="over m-grow" style="--h:83.3%;animation-delay:0.45s"><b>125</b></i><i class="over m-grow" style="--h:93.3%;animation-delay:0.50s"><b>140</b></i><i class="over m-grow" style="--h:80.0%;animation-delay:0.55s"><b>120</b></i>
              <div class="capl" style="--c:73.3%"><span>Capacity</span></div>
            </div>
            <div class="ym"><span>J</span><span>F</span><span>M</span><span>A</span><span>M</span><span>J</span><span>J</span><span>A</span><span>S</span><span>O</span><span>N</span><span>D</span></div>
            <p class="sub">Demand as % of a normal month · 100% = baseline</p>
          </div>
          <div class="note-y nt-a m-pop" style="animation-delay:1s"><b>Sep to Dec:</b> over. Overtime, or turn work away.</div>
          <div class="note-y nt-b m-pop" style="animation-delay:1.2s"><b>Jan:</b> spare. Staff and machines idle.</div>
        </div>
        <div class="sx-foot">
          <div class="sx-bar" aria-hidden="true"></div>
          <p class="sx-say">January and November are not the same month. <em>Plan for both.</em></p>
          <span class="d17-mark">decodedops.co.uk · DO-ART-994 · Rev 01</span>
        </div>
      </figure>
        ` }} />
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

      <D17Motion />
    </>
  );
}
