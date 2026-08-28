import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { Plate } from '@/components/Plate';

export const metadata: Metadata = {
 title: 'Seasonal peaks: Decoded Ops',
 description: "Your busiest month is four times your quietest, and your systems can't flex. Why seasonal peaks break decorated-goods operations, and how automation means ten times the orders doesn't mean ten times the staff.",
 alternates: { canonical: '/problems/seasonal-peaks' },
 openGraph: {
  title: 'Seasonal peaks: Decoded Ops',
  description: "Your busiest month is four times your quietest, and your systems can't flex. Why seasonal peaks break decorated-goods operations.",
  url: 'https://decodedops.co.uk/problems/seasonal-peaks',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: 'Seasonal peaks: Decoded Ops',
  description: "Your busiest month is four times your quietest, and your systems can't flex.",
 },
};

const seasonalPeaksSchema = {
 '@context': 'https://schema.org',
 '@graph': [
  {
   '@type': 'FAQPage',
   mainEntity: [
    {
     '@type': 'Question',
     name: 'Why do seasonal peaks break decorated-goods operations?',
     acceptedAnswer: { '@type': 'Answer', text: 'In decorated goods, demand is not flat. Schoolwear peaks in July and August. Promotional merchandise spikes in November and December. Teamwear surges in spring. If your systems cannot scale up and down with those rhythms, you are either burning staff out in the peak or carrying idle capacity in the trough, and neither is sustainable.' },
    },
    {
     '@type': 'Question',
     name: 'How can automation help with seasonal demand spikes?',
     acceptedAnswer: { '@type': 'Answer', text: 'A person can process forty orders a day. When the seasonal peak demands two hundred, automation absorbs the volume spike instead of the team absorbing the overtime. Supplier feeds into the Data App, artwork approval workflows, and order-to-production routing can all be automated, so the system handles the surge, not the people.' },
    },
    {
     '@type': 'Question',
     name: 'Why do temporary staff fail during peak periods?',
     acceptedAnswer: { '@type': 'Answer', text: 'Bringing in seasonal staff only works if there is a documented process to follow. Without it, every temp needs hand-holding from the same people who are already overloaded. Documented process means a temp can be productive on day one, not day ten.' },
    },
    {
     '@type': 'Question',
     name: 'How does a Clarity Audit help with seasonal peaks?',
     acceptedAnswer: { '@type': 'Answer', text: 'A Clarity Audit maps your actual seasonal demand curves against your current capacity, and the written plan tells you which processes to automate first so the business can handle the peak without burning out the people. It quantifies the gap between peak demand and current capacity, and prices the fix before the next spike hits.' },
    },
   ],
  },
 ],
};

export default function SeasonalPeaksPage() {
 return (
  <>
   <JsonLd data={seasonalPeaksSchema} />
   <BreadcrumbSchema items={[
    { name: 'Home', url: 'https://decodedops.co.uk/' },
    { name: 'Problems', url: 'https://decodedops.co.uk/problems' },
    { name: 'Seasonal peaks', url: 'https://decodedops.co.uk/problems/seasonal-peaks' },
   ]} />

   {/* ── 1 · HERO ──────────────────────────────────────────────────────── */}
   <section className="g-off">
    <div className="wrap hero-split">
     <div>
      <span className="eyebrow">The problem</span>
      <h1>Your busiest month is four times your quietest, and your systems can&apos;t flex.</h1>
      <p className="lede">In decorated goods, demand isn&apos;t flat. Schoolwear peaks in July and August.
       Promotional merchandise spikes in November and December. Teamwear surges in spring. If your
       systems can&apos;t stretch and shrink with those rhythms, you&apos;re either burning staff out in
       the peak or paying idle staff in the quiet months. Neither is sustainable.</p>
      <div className="hero-cta">
       <Link className="btn btn--primary" href="/contact">Book a Clarity Audit</Link>
      </div>
     </div>
     <figure className="evidence">
      <img src="/images/real-example.jpg"
       alt="Orders being packed for despatch, the volume that spikes by a factor of four depending on the season." />
      <figcaption className="stamp">SEASONAL, EVERY YEAR. PREDICTABLE, EVERY YEAR.</figcaption>
     </figure>
    </div>
   </section>

   {/* ── 2 · THE REAL PATTERNS ──────────────────────────────────────────── */}
   <section className="g-tint">
    <div className="wrap">
     <span className="eyebrow">The evidence</span>
     <h2>Three seasonal rhythms, same business.</h2>
     <p className="lede" style={{ marginTop: 16 }}>These aren&apos;t hypotheticals. They are the actual demand
      curves every decorated-goods business lives with, and most of them are still staffing for
      the average, not the peak.</p>

     <div className="grid grid--3" style={{ marginTop: 34 }}>
      <article className="card">
       <h3>Schoolwear, July to September</h3>
       <p>Back-to-school means four months of demand compressed into eight weeks. Embroidery runs,
        printed logos, size-specific orders, all of it landing at once, and all of it needing to
        be right the first time.</p>
      </article>
      <article className="card">
       <h3>Promotional, November to January</h3>
       <p>Christmas gifting, corporate calendars, end-of-year award events. The merchandise
        catalogue that sat quiet all year suddenly needs quoting, artworking, and producing at
        ten times the usual volume.</p>
      </article>
      <article className="card">
       <h3>Teamwear, March to June</h3>
       <p>New season kits, club orders, tournament merchandise. Every order is personalised,
        names, numbers, sponsor logos, and every one of them needs to land before the first
        fixture.</p>
      </article>
     </div>
    </div>
   </section>

   {/* ── 3 · WHY IT BREAKS ──────────────────────────────────────────────── */}
   <section className="g-off">
    <div className="wrap">
     <span className="eyebrow">Why this happens</span>
     <h2>Four reasons the seasonal spike breaks the operation.</h2>

     <div className="grid grid--2" style={{ marginTop: 34 }}>
      <article className="card cause">
       <span className="n">01</span>
       <h3>Manual processes hit a hard ceiling</h3>
       <p>A person can process forty orders a day. Sixty on a good day. When the seasonal peak
        demands two hundred, the person doesn&apos;t get faster, the backlog just grows, and the
        customer waits longer.</p>
      </article>
      <article className="card cause">
       <span className="n">02</span>
       <h3>Temporary staff can&apos;t follow undocumented process</h3>
       <p>Bringing in seasonal staff to handle the peak only works if there&apos;s a documented process
        to follow. Without it, every temp needs hand-holding from the same people who are already
        overloaded.</p>
      </article>
      <article className="card cause">
       <span className="n">03</span>
       <h3>Supplier data can&apos;t keep up with demand</h3>
       <p>When you&apos;re ordering ten times the stock in half the time, supplier feeds that update
        weekly aren&apos;t good enough. The gap between what&apos;s available and what&apos;s on screen widens
        exactly when it hurts most.</p>
      </article>
      <article className="card cause">
       <span className="n">04</span>
       <h3>Idle staff in the quiet months eat the peak&apos;s profit</h3>
       <p>Staff you hired for the peak are still on the payroll in February, doing half the work
        for the same cost. The seasonal model only works if you can flex up and down without
        paying for staff you don&apos;t need through the quiet months.</p>
      </article>
     </div>
    </div>
   </section>

   {/* ── PLATE · DO-ART-415 ──────────────────────────────────────────── */}
   <section className="g-white" data-od-id="plate">
    <div className="wrap">
     <Plate tone="dark" no="DO-ART-415" title="Peak demand breaks manual processes" rev="01" cls="DECODED OPS · ISSUED">
      <rect x="50" y="100" width="700" height="520" rx="12"
         fill="color-mix(in srgb, var(--do-amber) 8%, var(--do-prussian-blue))"
         stroke="color-mix(in srgb, var(--do-amber) 28%, transparent)" strokeWidth="1.5"/>
      <text x="80" y="150" className="p-amber" fontFamily="var(--do-font-heading)" fontWeight="700"
         fontSize="22" fill="var(--do-amber)" letterSpacing="0.06em">NOW</text>
      <g fontFamily="var(--do-font-body)" fontSize="17" fill="color-mix(in srgb, var(--do-off-white) 78%, transparent)">
       <text x="80" y="200"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">40 orders/day is the manual ceiling</tspan></text>
       <text x="80" y="250"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Temp staff need constant hand-holding</tspan></text>
       <text x="80" y="300"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Supplier data out of date when it matters</tspan></text>
       <text x="80" y="350"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Staff idle in trough, burnt out in peak</tspan></text>
      </g>

      <rect x="850" y="100" width="700" height="520" rx="12"
         fill="color-mix(in srgb, var(--do-cerulean) 8%, var(--do-prussian-blue))"
         stroke="color-mix(in srgb, var(--do-cerulean) 28%, transparent)" strokeWidth="1.5"/>
      <text x="880" y="150" className="p-cyan" fontFamily="var(--do-font-heading)" fontWeight="700"
         fontSize="22" fill="var(--do-cerulean)" letterSpacing="0.06em">AFTER</text>
      <g fontFamily="var(--do-font-body)" fontSize="17" fill="color-mix(in srgb, var(--do-off-white) 78%, transparent)">
       <text x="880" y="200"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Automation handles volume spikes</tspan></text>
       <text x="880" y="250"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Documented process = temps productive day one</tspan></text>
       <text x="880" y="300"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Supplier feeds refresh in real time</tspan></text>
       <text x="880" y="350"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Systems flex up/down with demand</tspan></text>
      </g>

      <line x1="770" y1="320" x2="830" y2="320" stroke="var(--do-cerulean)" strokeWidth="2"/>
      <polygon points="828,316 840,320 828,324" fill="var(--do-amber)"/>
     </Plate>
    </div>
   </section>

   {/* ── 4 · HOW I HELP ─────────────────────────────────────────────────── */}
   <section className="g-navy">
    <div className="wrap">
     <span className="eyebrow eyebrow--amber">How I help</span>
     <h2>Systems that scale, so your staffing doesn&apos;t have to.</h2>

     <div className="answer">
      <p>A Clarity Audit maps your actual seasonal demand curves against your current capacity,
       and the written plan tells you which processes to automate first so the business can handle
       the peak without burning out the people. <b>Ten times the orders shouldn&apos;t mean ten times
       the staff.</b></p>
      <p>Where automation fits (supplier feeds into the Data App, artwork approval workflows,
       order-to-production routing), the system absorbs the volume spike instead of the team
       absorbing the overtime.</p>
     </div>
    </div>
   </section>

   {/* ── 5 · CTA STRIP ──────────────────────────────────────────────────── */}
   <section className="g-white cta-strip">
    <div className="wrap" style={{ maxWidth: 760 }}>
     <h2>Find out what your next seasonal peak is going to cost you.</h2>
     <p className="lede">A Clarity Audit quantifies the gap between your peak demand and your current
      capacity, and prices the fix before the next spike hits.</p>
     <div className="hero-cta">
      <Link className="btn btn--primary" href="/contact">Book a Clarity Audit</Link>
      <Link className="btn btn-ghost btn-arrow" href="/apps/data-app">See the Data App</Link>
     </div>
    </div>
   </section>
  </>
 );
}
