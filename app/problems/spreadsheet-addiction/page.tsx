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
 title: 'Spreadsheet addiction: Decoded Ops',
 description: "The spreadsheet that runs your business is one corrupted file away from disaster. Why decorated-goods businesses depend on spreadsheets they've outgrown, and how documented process replaces a single point of failure with something everyone can trust.",
 alternates: { canonical: '/problems/spreadsheet-addiction' },
 openGraph: {
  title: 'Spreadsheet addiction: Decoded Ops',
  description: "The spreadsheet that runs your business is one corrupted file away from disaster. Why decorated-goods businesses depend on spreadsheets they've outgrown.",
  url: 'https://decodedops.co.uk/problems/spreadsheet-addiction',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: 'Spreadsheet addiction: Decoded Ops',
  description: "The spreadsheet that runs your business is one corrupted file away from disaster.",
 },
};

const spreadsheetAddictionSchema = {
 '@context': 'https://schema.org',
 '@graph': [
  {
   '@type': 'FAQPage',
   mainEntity: [
    {
     '@type': 'Question',
     name: 'When does a business spreadsheet become a single point of failure?',
     acceptedAnswer: { '@type': 'Answer', text: 'When it is the only place the order log, supplier prices, or artwork approvals live, and when only one person knows how it works. Five tabs, macros that run on one machine, no audit trail, no backup. One corrupted save or accidental overwrite and a week of orders is gone with no way to reconstruct it.' },
    },
    {
     '@type': 'Question',
     name: 'What are the real failure modes of spreadsheet dependency in decorated goods?',
     acceptedAnswer: { '@type': 'Answer', text: 'Four are common. Stale supplier price lists that lead to orders quoted at the wrong price. No audit trail when a customer disputes an order quantity. A macro built by one person over years that nobody else can maintain when they leave. A corrupted file with no recent backup, forcing months of orders to be reconstructed from emails and memory.' },
    },
    {
     '@type': 'Question',
     name: 'How does the Process & Quality System replace spreadsheet dependency?',
     acceptedAnswer: { '@type': 'Answer', text: 'The PQS replaces the dependency on one file with documented processes that live outside anyone\'s laptop. The order log becomes a named process with a documented workflow, not a file that only opens on one version of a spreadsheet. Where the spreadsheet was doing something useful, tracking orders, managing prices, a Clarity Audit finds the right tool to replace it, whether that is a small system, a Works layer, or a properly-structured process document.' },
    },
    {
     '@type': 'Question',
     name: 'Can I transition off spreadsheets without disrupting the business?',
     acceptedAnswer: { '@type': 'Answer', text: 'Yes. A Clarity Audit maps every process that currently depends on a spreadsheet, and the written plan tells you which ones to move first, in what order, before the file that runs the business stops opening. The transition is phased, not a cliff-edge cutover.' },
    },
   ],
  },
 ],
};

const heroArt975 = `<figure class="d17 sx px a975" data-od-id="hero-evidence" data-motion data-no="DO-ART-975" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-975. Documents over a photograph of a tangle of spreadsheets. A spreadsheet grid shows supplier prices frozen months ago, macros that only work on one machine, three people editing at once, and a version history nobody trusts. One corrupted save away from disaster.">
  <div class="d17-ph"><img src="/images/d17/problems/hero-workshop-783ec1.webp" alt="" width="1100" height="1224"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Spreadsheet addiction</span><span>One corrupted save away</span></div>
  <div class="stage" aria-hidden="true">
    <div class="lp m-drop" style="animation-delay:.1s">
      <div class="hd"><span>ORDER_LOG_v4_FINAL.xlsx</span><span>Tab 3 of 5</span></div>
      <div class="row"><span>SUPPLIER</span><span>PRICES LAST UPDATED</span></div>
      <div class="row no"><span>Supplier A</span><span>4 MONTHS AGO</span></div>
      <div class="row no"><span>Supplier B</span><span>6 MONTHS AGO</span></div>
      <div class="row no"><span>Supplier C</span><span>UNKNOWN</span></div>
      <div class="row"><span>MACROS</span><span>RUNS ON ONE MACHINE</span></div>
      <div class="row no"><span>EDITORS</span><span>3 PEOPLE, NO LOCK</span></div>
      <div class="row no"><span>BACKUP</span><span>LAST ONE: MONTHS AGO</span></div>
    </div>
    <div class="sticky m-drop" style="animation-delay:.7s"><small>The workaround</small>Version 4 final FINAL. DO NOT DELETE.</div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">One corrupted save. <em>Everything gone.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-975 · Rev 01</span>
  </div>
</figure>`;

const inlineArt917 = `<figure class="d17 sw sw-doc a917" data-od-id="plate-product" data-motion data-no="DO-ART-917" data-rev="01" data-tx="schematic"
        aria-label="Drawn plate DO-ART-917, a product screen replacing the spreadsheet. An order log that was a spreadsheet is now a named process with a documented workflow. Automated supplier price feeds replace stale manual entries. Standard tools anyone can use replace macros only one person understands. A full audit trail tracks every change.">
  <div class="q-grid" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Spreadsheet addiction</span><span>Documented system</span></div>
  <svg class="q" viewBox="0 0 560 420" aria-hidden="true">
    <text class="t-m" x="26" y="44" style="font-size:15px">Single file → documented system</text>
    <g class="m-rise" style="animation-delay:0.10s"><rect class="bx" x="30" y="70" width="230" height="54" rx="10"/><text class="t" x="145" y="104" text-anchor="middle" style="font-size:18px;font-weight:700">Spreadsheet</text></g>
    <g class="m-rise" style="animation-delay:0.18s"><rect class="bx" x="300" y="70" width="230" height="54" rx="10"/><text class="t" x="415" y="104" text-anchor="middle" style="font-size:18px;font-weight:700">Documented system</text></g>
    <path class="ln m-draw" pathLength="1" style="animation-delay:.5s" d="M145 124 V168"/>
    <path class="ln-a m-draw" pathLength="1" style="animation-delay:.5s" d="M415 124 V168"/>
    <g class="m-pop" style="animation-delay:0.8s">
      <rect class="bx-x2" x="30" y="168" width="230" height="220" rx="12"/>
      <text class="t-d" x="145" y="200" text-anchor="middle" style="font-size:15px">One corrupted file</text>
      <text class="t-d" x="145" y="224" text-anchor="middle" style="font-size:15px">= lost orders</text>
      <text class="t-d" x="145" y="260" text-anchor="middle" style="font-size:15px">Supplier prices: months out</text>
      <text class="t-d" x="145" y="284" text-anchor="middle" style="font-size:15px">of date</text>
      <text class="t-d" x="145" y="320" text-anchor="middle" style="font-size:15px">Macros only work on</text>
      <text class="t-d" x="145" y="344" text-anchor="middle" style="font-size:15px">one machine</text>
      <text class="t-d" x="145" y="380" text-anchor="middle" style="font-size:15px">No audit trail</text>
    </g>
    <g class="m-pop" style="animation-delay:1.1s">
      <rect class="bx-x2" x="300" y="168" width="230" height="220" rx="12"/>
      <text class="t-h" x="415" y="200" text-anchor="middle" style="font-size:16px">Documented processes</text>
      <text class="t-h" x="415" y="224" text-anchor="middle" style="font-size:16px">live outside any file</text>
      <text class="t-d" x="415" y="260" text-anchor="middle" style="font-size:15px">Automated supplier</text>
      <text class="t-d" x="415" y="284" text-anchor="middle" style="font-size:15px">price feeds</text>
      <text class="t-d" x="415" y="320" text-anchor="middle" style="font-size:15px">Standard tools anyone</text>
      <text class="t-d" x="415" y="344" text-anchor="middle" style="font-size:15px">can use</text>
      <text class="t-d" x="415" y="380" text-anchor="middle" style="font-size:15px">Full audit trail</text>
    </g>
  </svg>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">Documented process. <em>Not a single file nobody else can read.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-917 · Rev 01</span>
  </div>
</figure>`;

export default function SpreadsheetAddictionPage() {
 return (
  <>
   <JsonLd data={spreadsheetAddictionSchema} />
   <BreadcrumbSchema items={[
    { name: 'Home', url: 'https://decodedops.co.uk/' },
    { name: 'Problems', url: 'https://decodedops.co.uk/problems' },
    { name: 'Spreadsheet addiction', url: 'https://decodedops.co.uk/problems/spreadsheet-addiction' },
   ]} />
   {problemVideos['spreadsheet-addiction'] && (
    <VideoSchema
     name={problemVideos['spreadsheet-addiction'].title}
     description={problemVideos['spreadsheet-addiction'].closeLine}
     youtubeId={problemVideos['spreadsheet-addiction'].youtubeId}
     uploadDate={problemVideos['spreadsheet-addiction'].uploadDate}
     durationSec={problemVideos['spreadsheet-addiction'].durationSec}
    />
   )}

   {/* ── 1 · HERO ──────────────────────────────────────────────────────── */}
   <section className="g-off">
    <div className="wrap hero-split">
     <div>
      <span className="eyebrow">The problem</span>
      <h1>The spreadsheet that runs your business is one corrupted file away from disaster.</h1>
      <p className="lede">It started as a tidy little order log. Now it&apos;s got five tabs, three people
       editing it, macros that only work on one person&apos;s machine, and a version history nobody
       fully trusts. Every decorated-goods business has one, and every one of them is one
       accidental keystroke away from taking a day&apos;s orders with it.</p>
      <div className="hero-cta">
       <Link className="btn btn--primary" href="/contact">Book a Clarity Audit</Link>
      </div>
     </div>
     <div dangerouslySetInnerHTML={{ __html: heroArt975 }} />
    </div>
   </section>

   {/* ── 2 · SYMPTOMS ──────────────────────────────────────────────────── */}
   <section className="g-tint">
    <div className="wrap">
     <span className="eyebrow">The signs</span>
     <h2>Seven signs your spreadsheet has become the single point of failure.</h2>
     <p className="lede" style={{ marginTop: 16 }}>If you recognise three or more of these, the spreadsheet
      isn&apos;t a tool any more. It&apos;s a risk the business is carrying every day.</p>

     <ul className="symptoms">
      <li>You wouldn&apos;t know where to start if the file got corrupted or deleted</li>
      <li>Supplier price lists in the spreadsheet are three versions out of date</li>
      <li>Only one person knows how the macros work, and they&apos;re on holiday this week</li>
      <li>The order log has no audit trail, you can&apos;t see who changed what or when</li>
      <li>Someone accidentally saved over a full day&apos;s data and nobody noticed for a week</li>
      <li>You&apos;ve got a separate spreadsheet for every supplier because one file can&apos;t hold them all</li>
      <li>The business can&apos;t be sold because the buyer would need to understand the spreadsheet first</li>
     </ul>
    </div>
   </section>

   {problemVideos['spreadsheet-addiction'] && (
    <section className="g-off" data-od-id="video-embed">
     <div className="wrap">
      <VideoEmbed
       youtubeId={problemVideos['spreadsheet-addiction'].youtubeId}
       title={problemVideos['spreadsheet-addiction'].title}
       closeLine={problemVideos['spreadsheet-addiction'].closeLine}
       app={problemVideos['spreadsheet-addiction'].app}
       durationSec={problemVideos['spreadsheet-addiction'].durationSec}
       playlistUrl={problemVideos['spreadsheet-addiction'].playlistUrl}
      />
     </div>
    </section>
   )}

   {/* ── 3 · THE REAL FAILURE MODES ─────────────────────────────────────── */}
   <section className="g-white">
    <div className="wrap">
     <span className="eyebrow">Real failure modes</span>
     <h2>These aren&apos;t theoretical. They&apos;ve all happened in this sector.</h2>
     <p className="lede" style={{ marginTop: 16 }}>A spreadsheet failure in decorated goods doesn&apos;t look
      like an IT problem. It looks like a production line that doesn&apos;t know what it&apos;s making this
      morning.</p>

     <div className="grid grid--2" style={{ marginTop: 34 }}>
      <article className="card cause">
       <span className="n">01</span>
       <h3>The price list that went out of date</h3>
       <p>A supplier raised prices in December. The spreadsheet still had the old rates. By the
        time anyone noticed, dozens of orders had been quoted at the wrong price, and the difference
        came out of margin, not the customer&apos;s invoice.</p>
      </article>
      <article className="card cause">
       <span className="n">02</span>
       <h3>The order log with no audit trail</h3>
       <p>A key customer disputed an order quantity. The spreadsheet showed one number; they had
        an email confirming another. With no audit trail, there was no way to prove which was
        right, so the business ate the difference to keep the relationship.</p>
      </article>
      <article className="card cause">
       <span className="n">03</span>
       <h3>The macro that only worked on one machine</h3>
       <p>One person built the order-processing macro over several years. When they left, nobody
        else knew how it worked, and the replacement system took six months to build, during
        which every order was processed by hand.</p>
      </article>
      <article className="card cause">
       <span className="n">04</span>
       <h3>The corrupted file with no backup</h3>
       <p>A spreadsheet with two years of order history became corrupted during a save. The most
        recent backup was months old. Months of order data had to be reconstructed
        from emails, delivery notes, and memory.</p>
      </article>
     </div>
    </div>
   </section>

   {/* ── INLINE ARTWORK · DO-ART-917 ──────────────────────────────────── */}
   <section className="g-navy">
    <div className="wrap">
     <div dangerouslySetInnerHTML={{ __html: inlineArt917 }} />
    </div>
   </section>

   {/* ── 4 · HOW I HELP ─────────────────────────────────────────────────── */}
   <section className="g-navy">
    <div className="wrap">
     <span className="eyebrow eyebrow--amber">How I help</span>
     <h2>Documented process, not a single file nobody else can read.</h2>

     <div className="answer">
      <p>The Process &amp; Quality System replaces the dependency on one spreadsheet with
       documented processes that live outside anyone&apos;s laptop. <b>The order log becomes a named
       process with a documented workflow, not a file that only opens on one version of
       a spreadsheet.</b></p>
      <p>Where the spreadsheet was actually doing something useful (tracking orders, managing
       supplier prices, routing artwork approvals), a Clarity Audit finds the right tool to
       replace it, whether that&apos;s a small system, a Works layer, or a properly-structured
       process document that doesn&apos;t rely on one person&apos;s macros.</p>
     </div>
    </div>
   </section>

   {/* ── 5 · CTA STRIP ──────────────────────────────────────────────────── */}
   <section className="g-white cta-strip">
    <div className="wrap" style={{ maxWidth: 760 }}>
     <h2>Find out what&apos;s actually living in your spreadsheets.</h2>
     <p className="lede">A Clarity Audit maps every process that currently depends on a spreadsheet,
      and the written plan tells you which ones to move first, before the file that runs the
      business stops opening.</p>
     <div className="hero-cta">
      <Link className="btn btn--primary" href="/contact">Book a Clarity Audit</Link>
      <Link className="btn btn-ghost btn-arrow" href="/deliver">See how Deliver works</Link>
     </div>
    </div>
   </section>
   <D17Motion />
  </>
 );
}
