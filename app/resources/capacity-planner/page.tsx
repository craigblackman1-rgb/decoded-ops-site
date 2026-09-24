import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { CapacityPlannerCalculator } from '@/components/calculators/CapacityPlannerCalculator';
import { D17Motion } from '@/components/D17Motion';
import '@/app/d17-global.css';
import '@/app/d17-resources.css';

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
  title: 'Capacity Planning Calculator: Decoded Ops',
  description:
    'Work out how many jobs your setup can actually produce per week. Free tool for print, embroidery, and decoration businesses.',
  alternates: { canonical: '/resources/capacity-planner' },
  openGraph: {
    type: 'website',
    title: 'Capacity Planning Calculator: Decoded Ops',
    description: 'Work out how many jobs your setup can actually produce per week. Free tool for print, embroidery, and decoration businesses.',
    url: 'https://decodedops.co.uk/resources/capacity-planner',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Capacity Planning Calculator: Decoded Ops',
    description: 'Work out how many jobs your setup can actually produce per week. Free tool for print, embroidery, and decoration businesses.',
  },
};

export default function CapacityPlannerPage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      {/* HERO — rt-split: copy left, DO-ART-992 right */}
      <section className="g-off">
        <div className="wrap rt-split">
          <div>
            <span className="eyebrow">Free tool &middot; Give first</span>
            <h1>Capacity planning calculator</h1>
            <p className="lede">
              Work out how many jobs your machines can actually produce — not the theoretical maximum, but the real number after changeovers, breaks, and downtime eat into the day.
            </p>
          </div>
          <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sx px ph-fade a992" data-od-id="hero-art" data-motion data-no="DO-ART-992" data-rev="01" data-tx="screen"
        aria-label="Artwork DO-ART-992. The capacity planner's result screen over a graded photograph of embroidery heads, labelled Example and worked from the calculator's default inputs: four machines, eight production hours a day, five days a week, thirty minutes a job, fifteen per cent downtime and changeover allowance. On paper, 64 jobs a day. Real capacity: 54 jobs a day, 270 a week, 1,169 a month, 85 per cent utilisation. Plan against the real number, not the spec sheet.">
  <div class="d17-ph"><img src="/images/d17/resources/hero-workshop-c19d7e.jpg" alt="" width="900" height="844"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Capacity planner</span><span>Five inputs, one answer</span></div>
  <div class="body">
    <div class="win" aria-hidden="true">
      <div class="win-bar"><span class="dots"><i></i><i></i><i></i></span><span class="crumb"><span>Tools ›</span> Capacity</span><span class="pill">EXAMPLE</span></div>
      <div class="win-flat">
        <h5>Your production capacity</h5>
        <p class="s">4 machines · 8 h · 5 days · 30 min a job · 15% downtime</p>
        <div class="k4">
          <div class="m-rise" style="animation-delay:.1s"><span>Jobs a day</span><b>54</b></div>
          <div class="m-rise" style="animation-delay:.25s"><span>Jobs a week</span><b>270</b></div>
          <div class="m-rise" style="animation-delay:.4s"><span>Jobs a month</span><b>1,169</b></div>
        </div>
        <div class="meter">
          <div class="row"><span>Capacity utilisation</span><b>85%</b></div>
          <div class="track"><div class="fill m-fill" style="width:85%;animation-delay:.6s"></div></div>
        </div>
        <div class="vs"><span>On the spec sheet</span><s>64 a day</s><span class="r">Real</span><b>54 a day</b></div>
      </div>
    </div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">Plan against the real number, <em>not the spec sheet.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-992 · Rev 01</span>
  </div>
</figure>` }} />
        </div>
      </section>

      {/* D17 inline artwork DO-ART-993 */}
      <section className="g-navy">
        <div className="wrap">
          <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sw a993" data-od-id="plate-real-day" data-motion data-no="DO-ART-993" data-rev="01" data-tx="schematic"
        aria-label="Drawn plate DO-ART-993, the spec sheet against the real day. The spec sheet says 200 transfers an hour, and assumes one operator, one design, no changeovers, no breaks and no downtime; all five assumptions are struck through. Beside it, an eight-hour production day drawn to scale, as an example with the calculator's default fifteen per cent allowance: 85 per cent producing, 15 per cent lost to changeovers, cleaning and minor breakdowns, hatched in amber. Quote from the real day.">
  <div class="q-grid" aria-hidden="true"></div>
  <div class="sw-cap">
    <p class="k d17-mono">Real capacity <span>· to scale</span></p>
    <div class="bar" aria-hidden="true"></div>
    <h3>The spec sheet quotes a day that never happens.</h3>
    <p>Quote from the real day. Over-state capacity and you either lose the work or get buried by it.</p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-993 · Rev 01</span>
  </div>
  <div class="rd" aria-hidden="true">
    <div class="d17-doc specs">
      <span class="tab">SPEC</span>
      <span class="ref">Heat press · spec sheet</span>
      <h4>200 transfers an hour</h4>
      <p class="sub">assumes:</p>
      <ul class="strk">
        <li><span>One operator</span><i class="m-fill" style="animation-delay:.3s"></i></li>
        <li><span>One design</span><i class="m-fill" style="animation-delay:.45s"></i></li>
        <li><span>No changeovers</span><i class="m-fill" style="animation-delay:.6s"></i></li>
        <li><span>No breaks</span><i class="m-fill" style="animation-delay:.75s"></i></li>
        <li><span>No downtime</span><i class="m-fill" style="animation-delay:.9s"></i></li>
      </ul>
    </div>
    <div class="day">
      <p class="d17-mono lab">The real day · example, 15% allowance</p>
      <div class="bar8">
        <span class="p">Producing · 85%</span>
        <span class="x m-fade" style="animation-delay:1.1s">15%</span>
      </div>
      <div class="hrs"><span>0h</span><span>2h</span><span>4h</span><span>6h</span><span>8h</span></div>
      <ul class="lost">
        <li>Changeovers</li><li>Cleaning between runs</li><li>Minor breakdowns</li>
      </ul>
    </div>
  </div>
</figure>` }} />
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
      <D17Motion />
    </>
  );
}
