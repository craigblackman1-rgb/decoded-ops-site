import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { VideoEmbed } from '@/components/VideoEmbed';
import { VideoSchema } from '@/components/VideoSchema';
import { problemVideos } from '@/data/problem-videos';
import '@/app/d17-global.css';
import '@/app/d17-problems.css';
import { D17Motion } from '@/components/D17Motion';

export const metadata: Metadata = {
 title: 'Seasonal Peak Operations Planning | Decoded Ops',
 description: "Seasonal peak operations planning matters when your busiest month runs four times your quietest and your systems can't flex. Here's the fix.",
 alternates: { canonical: '/problems/seasonal-peaks' },
 openGraph: {
  title: 'Seasonal Peak Operations Planning | Decoded Ops',
  description: "Seasonal peak operations planning matters when your busiest month runs four times your quietest and your systems can't flex. Here's the fix.",
  url: 'https://decodedops.co.uk/problems/seasonal-peaks',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: 'Seasonal Peak Operations Planning | Decoded Ops',
  description: "Seasonal peak operations planning matters when your busiest month runs four times your quietest and your systems can't flex. Here's the fix.",
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
      acceptedAnswer: { '@type': 'Answer', text: 'Manual processes have a hard ceiling. When the seasonal peak demands far more than the team can handle at normal capacity, automation absorbs the volume spike instead of the team absorbing the overtime. Supplier feeds into Works, artwork approval workflows, and order-to-production routing can all be automated, so the system handles the surge, not the people.' },
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
   {problemVideos['seasonal-peaks'] && (
    <VideoSchema
     name={problemVideos['seasonal-peaks'].title}
     description={problemVideos['seasonal-peaks'].closeLine}
     youtubeId={problemVideos['seasonal-peaks'].youtubeId}
     uploadDate={problemVideos['seasonal-peaks'].uploadDate}
     durationSec={problemVideos['seasonal-peaks'].durationSec}
    />
   )}

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
     <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sx px ph-fade a973" data-od-id="hero-evidence" data-motion data-no="DO-ART-973" data-rev="01" data-tx="screen"
        aria-label="Artwork DO-ART-973. An order intake chart by month, drawn as a shape without figures, over a dimmed photograph. Teamwear rises from March to June, schoolwear peaks in July to September with August the busiest month, four times February, the quietest, and promotional work climbs in November and December. A dashed line marks what the team can process; every month above it is amber. Staffed for the average, swamped at the peak.">
  <div class="d17-ph"><img src="/images/d17/problems/cat-awards-70dc2f.webp" alt="" width="900" height="1200"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Seasonal peaks</span><span>Twelve months, three rhythms</span></div>
  <div class="win" aria-hidden="true">
    <div class="win-bar"><span class="dots"><i></i><i></i><i></i></span><span class="crumb"><span>Insight ›</span> Order intake</span><span class="pill">12 MONTHS</span></div>
    <div class="win-flat">
      <h5>Order intake by month</h5>
      <p class="s">The shape of the year: the busiest month, four times the quietest</p>
      <div class="seasons"><span style="grid-column:3 / 7">Teamwear</span><span style="grid-column:7 / 10" class="on">Schoolwear</span><span style="grid-column:11 / 13">Promotional</span></div>
      <div class="chart">
          <i class="m-grow" style="--h:30%;animation-delay:0.00s"></i>
          <i class="m-grow" style="--h:25%;animation-delay:0.05s"></i>
          <i class="m-grow" style="--h:48%;animation-delay:0.10s"></i>
          <i class="over m-grow" style="--h:55%;--cap:calc(100% * 50 / 55);animation-delay:0.15s"></i>
          <i class="over m-grow" style="--h:52%;--cap:calc(100% * 50 / 52);animation-delay:0.20s"></i>
          <i class="m-grow" style="--h:45%;animation-delay:0.25s"></i>
          <i class="over m-grow" style="--h:88%;--cap:calc(100% * 50 / 88);animation-delay:0.30s"></i>
          <i class="over m-grow" style="--h:100%;--cap:calc(100% * 50 / 100);animation-delay:0.35s"></i>
          <i class="over m-grow" style="--h:70%;--cap:calc(100% * 50 / 70);animation-delay:0.40s"></i>
          <i class="m-grow" style="--h:38%;animation-delay:0.45s"></i>
          <i class="over m-grow" style="--h:66%;--cap:calc(100% * 50 / 66);animation-delay:0.50s"></i>
          <i class="over m-grow" style="--h:60%;--cap:calc(100% * 50 / 60);animation-delay:0.55s"></i>
        <div class="cap" style="--capH:50%"><span>What the team can process</span></div>
      </div>
      <div class="months"><span>J</span><span>F</span><span>M</span><span>A</span><span>M</span><span>J</span><span>J</span><span>A</span><span>S</span><span>O</span><span>N</span><span>D</span></div>
      <div class="legend"><span style="--c:var(--do-amber)">Above what the team can process</span><span style="--c:color-mix(in srgb, var(--do-cerulean) 55%, var(--do-sky-blue))">Within it</span></div>
    </div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">Staffed for the average. <em>Swamped at the peak.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-973 · Rev 01</span>
  </div>
</figure>` }} />
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
        <p>Manual processes have a hard ceiling. When the seasonal peak
         demands far more than the team can process by hand, the backlog just grows, and the
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

   {problemVideos['seasonal-peaks'] && (
    <section className="g-off" data-od-id="video-embed">
     <div className="wrap">
      <VideoEmbed
       youtubeId={problemVideos['seasonal-peaks'].youtubeId}
       title={problemVideos['seasonal-peaks'].title}
       closeLine={problemVideos['seasonal-peaks'].closeLine}
       app={problemVideos['seasonal-peaks'].app}
       durationSec={problemVideos['seasonal-peaks'].durationSec}
       playlistUrl={problemVideos['seasonal-peaks'].playlistUrl}
      />
     </div>
    </section>
   )}

   {/* ── INLINE ARTWORK · DO-ART-918 ──────────────────────────────────── */}
   <section className="g-navy">
    <div className="wrap">
     <span className="eyebrow">Evidence · DO-ART-918</span>
     <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 a918" data-od-id="plate-evidence" data-motion data-no="DO-ART-918" data-rev="01" data-tx="photo"
        aria-label="Evidence piece DO-ART-918. A sports and teamwear client on Works, live in September 2026: 17 supplier feeds, 27,778 supplier products, 236,056 variants, 952 products live on their website, and 100 per cent of stock with a bin location.">
  <div class="d17-ph"><img src="/images/d17/problems/cat-workwear-401e08.webp" alt="" width="900" height="596"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <figcaption class="copy">
    <div class="k d17-mono">A sports and teamwear client <span>· live system, Sept 2026</span></div>
    <h3>Seventeen feeds in. Every item binned.</h3>
    <ol class="ledger">
      <li class="m-fade" style="animation-delay:.2s"><span class="n">17</span><span class="t">supplier feeds, automated</span></li>
      <li class="m-fade" style="animation-delay:.55s"><span class="n">27,778</span><span class="t">supplier products in one catalogue</span></li>
      <li class="m-fade" style="animation-delay:.9s"><span class="n">236,056</span><span class="t">variants, split by colour and size</span></li>
      <li class="m-fade" style="animation-delay:1.25s"><span class="n">952</span><span class="t">products live on their website</span></li>
      <li class="end m-fade" style="animation-delay:1.6s"><span class="n">100%</span><span class="t">of stock with a bin location</span></li>
    </ol>
    <span class="d17-mark">decodedops.co.uk · DO-ART-918 · Rev 01</span>
  </figcaption>
  <div class="print m-drop" style="animation-delay:1.9s" aria-hidden="true">
    <span class="ref">BIN · PICK FACE</span><b>A-04-2</b><div class="bc"></div><div class="s">Polo · navy · M</div>
  </div>
</figure>` }} />
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
      <p>Where automation fits (supplier feeds into Works, artwork approval workflows,
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
      <Link className="btn btn-ghost btn-arrow" href="/apps/works">See Works</Link>
     </div>
    </div>
    </section>
    <D17Motion />
   </>
  );
}
