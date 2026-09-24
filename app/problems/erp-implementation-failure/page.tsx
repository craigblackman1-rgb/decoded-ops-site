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
 title: 'ERP Implementation Failure: Why Decorated Goods Projects Fail | Decoded Ops',
 description: 'Most ERP projects in print, embroidery, and decoration businesses go over budget and under-deliver. Here\'s why, and how to avoid it.',
 alternates: { canonical: '/problems/erp-implementation-failure' },
 openGraph: {
  title: 'ERP Implementation Failure: Why Decorated Goods Projects Fail | Decoded Ops',
  description: 'Most ERP projects in print, embroidery, and decoration businesses go over budget and under-deliver. Here\'s why, and how to avoid it.',
  url: 'https://decodedops.co.uk/problems/erp-implementation-failure',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: 'ERP Implementation Failure: Why Decorated Goods Projects Fail | Decoded Ops',
  description: 'Most ERP projects in print, embroidery, and decoration businesses go over budget and under-deliver. Here\'s why, and how to avoid it.',
 },
};

// Anchor page rebuild, 31 Jul 2026. Replaces the previously withdrawn
// large-cost-figure framing per the positioning review, see the mockup
// source comment in problems-erp-implementation-failure.html. No withdrawn
// cost figure appears anywhere on this page.
const erpFailureSchema = {
 '@context': 'https://schema.org',
 '@graph': [
  {
   '@type': 'FAQPage',
   mainEntity: [
    {
     '@type': 'Question',
     name: 'What happens when the vendor scopes their own ERP implementation?',
     acceptedAnswer: { '@type': 'Answer', text: 'When the vendor scopes their own implementation, they scope for the software, not for your business. The gaps only become visible after go-live.' },
    },
    {
     '@type': 'Question',
     name: 'Why do ERP implementations fail without independent oversight?',
     acceptedAnswer: { '@type': 'Answer', text: 'Without someone in your corner who understands both the sector and the software, there is no one to hold the vendor to account when they miss requirements or cut corners.' },
    },
    {
     '@type': 'Question',
     name: 'How does data quality affect ERP implementation success?',
     acceptedAnswer: { '@type': 'Answer', text: 'Most implementation failures trace back to data quality. Clean data migration is unglamorous work that vendors underprice and businesses underestimate.' },
    },
    {
     '@type': 'Question',
     name: 'Can the wrong ERP software cause implementation failure?',
     acceptedAnswer: { '@type': 'Answer', text: 'Sometimes the implementation fails because the software was the wrong choice from the start, selected on demo, not on fit.' },
    },
    {
     '@type': 'Question',
     name: 'What are the most common causes of ERP implementation failure in decorated goods businesses?',
     acceptedAnswer: { '@type': 'Answer', text: 'The five most common causes are: no independent vendor brief written before vendor selection; the implementation scoped by the vendor rather than the business; data quality problems that were underestimated; no one independently accountable for outcomes; and wrong ERP software selected based on a demo in a different sector.' },
    },
    {
     '@type': 'Question',
     name: 'My ERP implementation went over budget, what should I do?',
     acceptedAnswer: { '@type': 'Answer', text: 'An ERP implementation cost overrun is almost always a scoping failure. The first step is an independent review of what the original specification covered versus what the vendor has delivered, or is claiming to have delivered. That assessment tells you whether the overrun is legitimate, whether the vendor is at fault, and what the realistic options are.' },
    },
   ],
  },
 ],
};

export default function ERPImplementationFailurePage() {
 return (
  <>
   <JsonLd data={erpFailureSchema} />
   <BreadcrumbSchema items={[
    { name: 'Home', url: 'https://decodedops.co.uk/' },
    { name: 'Problems', url: 'https://decodedops.co.uk/problems' },
    { name: 'ERP implementation failure', url: 'https://decodedops.co.uk/problems/erp-implementation-failure' },
   ]} />
   {problemVideos['erp-implementation-failure'] && (
    <VideoSchema
     name={problemVideos['erp-implementation-failure'].title}
     description={problemVideos['erp-implementation-failure'].closeLine}
     youtubeId={problemVideos['erp-implementation-failure'].youtubeId}
     uploadDate={problemVideos['erp-implementation-failure'].uploadDate}
     durationSec={problemVideos['erp-implementation-failure'].durationSec}
    />
   )}

   {/* ── 1 · HERO, the new anchor ─────────────────────────────────────── */}
   <section className="g-off">
    <div className="wrap max-w-3xl mx-auto text-center">
      <span className="eyebrow">The problem</span>
     <h1>What happens when the audit doesn&apos;t come first.</h1>
     <div className="hair mx-auto" />
      <p className="lede mx-auto">ERP projects that skip an independent audit routinely run over budget and
       late, because nobody looked at the business before picking the software. The fix isn&apos;t a
       bigger budget. It&apos;s doing the checking first, before any platform gets chosen. And where
       the answer turns out to be software I build, the same rule applies: scope in writing
       before anything is signed.</p>
     <div className="btn-row justify-center">
      <Link className="btn btn--primary" href="/contact">Book a free discovery call</Link>
     </div>
    </div>
   </section>

   {/* ── HERO ARTWORK · DO-ART-967 ──────────────────────────────────── */}
   <section className="g-off">
    <div className="wrap">
     <div dangerouslySetInnerHTML={{ __html: `
      <!-- DO-ART-967 r01 · journey poster (D17, the 831 route). One decision, two routes: the
           vendor-scoped one (dashed, sky) ends over budget and late with the platform blamed;
           the audit-first one (amber) ends with the platform kept and the Hanicks figures.
           Wide cut on desktop, two vertical lanes on a phone. In-page draw: both routes run,
           the amber one lands last. Replaces DO-ART-412 in the live IA. -->
      <figure class="d17 sw a967" data-od-id="pattern-route" data-motion data-no="DO-ART-967" data-rev="01" data-tx="poster"
              aria-label="Journey poster DO-ART-967. One decision, choosing an ERP, and two routes from it. The vendor-scoped route: the demo, sold on what the software does well; the contract, scoped by the vendor; go-live, where the workarounds begin; ending over budget and late, with the platform blamed for a data problem. The audit-first route: the audit, looking at the business first; the data, fixed before anything moved; the platform, kept and working; ending at Hanicks with 154,518 products matched to a supplier automatically out of 317,812 brought in.">
        <div class="gridl" aria-hidden="true"></div>
        <svg class="route" viewBox="0 0 1600 760" preserveAspectRatio="none" aria-hidden="true">
          <path d="M300 390 C390 390 380 210 480 210 H1250" fill="none" stroke="#8ECAE6" stroke-width="6" stroke-dasharray="14 12" stroke-linecap="round" class="m-draw" pathLength="1" style="animation-delay:.2s"/>
          <path d="M300 390 C390 390 380 560 480 560 H1250" fill="none" stroke="#FFB703" stroke-width="10" stroke-linecap="round" class="m-draw" pathLength="1" style="animation-delay:.9s"/>
          <circle cx="300" cy="390" r="16" fill="#F8F9FA" stroke="#023047" stroke-width="6"/>
          <g fill="#023047" stroke="#8ECAE6" stroke-width="4"><circle cx="580" cy="210" r="12"/><circle cx="830" cy="210" r="12"/><circle cx="1080" cy="210" r="12"/></g>
          <g fill="#F8F9FA" stroke="#023047" stroke-width="5"><circle cx="580" cy="560" r="14"/><circle cx="830" cy="560" r="14"/><circle cx="1080" cy="560" r="14"/></g>
        </svg>
        <p class="eb d17-mono">The pattern · same business, same platform</p>
        <div class="st st--start m-fade" style="left:calc(70 * var(--u));top:calc(322 * var(--u))"><span class="n">01 · The decision</span><h4>Choosing an ERP</h4><p>and who scopes it first</p></div>
        <div class="lane lane--v">
          <div class="st st--v m-fade" style="left:calc(556 * var(--u));top:calc(240 * var(--u))"><span class="n">02 · The demo</span><h4>Sold on its strengths</h4><p>what it does well, moved past what it doesn't</p></div>
          <div class="st st--v m-fade" style="left:calc(806 * var(--u));top:calc(240 * var(--u))"><span class="n">03 · The contract</span><h4>Scoped by the vendor</h4><p>before anyone looked at the business</p></div>
          <div class="st st--v m-fade" style="left:calc(1056 * var(--u));top:calc(240 * var(--u))"><span class="n">04 · Go-live</span><h4>Workarounds begin</h4><p>the gaps turn up on the floor</p></div>
          <div class="res res--v m-fade" style="left:calc(1280 * var(--u));top:calc(120 * var(--u))"><span class="n">Vendor-scoped</span><b>Over budget, late</b><p>and the platform takes the blame for a data problem</p></div>
        </div>
        <div class="lane lane--a">
          <div class="st st--a m-fade" style="left:calc(556 * var(--u));top:calc(590 * var(--u))"><span class="n">02 · The audit</span><h4>The business first</h4><p>every workflow followed before any software</p></div>
          <div class="st st--a m-fade" style="left:calc(806 * var(--u));top:calc(590 * var(--u))"><span class="n">03 · The data</span><h4>Fixed first</h4><p>supplier feeds matched, before anything moved</p></div>
          <div class="st st--a m-fade" style="left:calc(1056 * var(--u));top:calc(590 * var(--u))"><span class="n">04 · The platform</span><h4>Kept, and working</h4><p>the one they had already paid for</p></div>
          <div class="res res--a m-pop" style="left:calc(1280 * var(--u));top:calc(470 * var(--u));animation-delay:2.2s"><span class="n">Audit first · Hanicks</span><b>154,518 matched</b><p>to a supplier automatically, out of 317,812 products brought in</p></div>
        </div>
        <div class="prints" aria-hidden="true">
          <div class="print" style="left:calc(50 * var(--u));top:calc(478 * var(--u));width:calc(165 * var(--u));height:calc(170 * var(--u));transform:rotate(-4deg)">
            <img src="/images/d17/problems/hero-workshop-783ec1.jpg" alt=""><div class="tint"></div><span>The floor it has to serve</span></div>
          <div class="print" style="left:calc(226 * var(--u));top:calc(505 * var(--u));width:calc(150 * var(--u));height:calc(160 * var(--u));transform:rotate(3deg)">
            <img src="/images/d17/problems/thread-spools-2195b5.jpg" alt=""><div class="tint"></div><span>Decoration, the part demos skip</span></div>
        </div>
        <span class="d17-mark d17-mark--abs">decodedops.co.uk · DO-ART-967 · Rev 01</span>
      </figure>` }} />
    </div>
   </section>

   {/* ── INLINE ARTWORK · DO-ART-917 ──────────────────────────────────── */}
   <section className="g-navy">
    <div className="wrap">
     <span className="eyebrow">Evidence · DO-ART-917</span>
     <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 a917" data-od-id="plate-measure" data-motion data-no="DO-ART-917" data-rev="01" data-tx="photo"
        aria-label="Product screen DO-ART-917. The Data App catalogue overview at Hanicks, live in September 2026: 317,812 products brought in from supplier feeds, 154,518 matched to a supplier automatically, 40 active suppliers feeding in, and 77 per cent of stock records carrying a bin location.">
  <div class="d17-ph"><img src="/images/d17/problems/thread-spools-2195b5.jpg" alt="" width="1300" height="867"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <figcaption class="cap">
    <div class="k d17-mono">The Data App <span>· at Hanicks</span></div>
    <div class="bar" aria-hidden="true"></div>
    <h3>Forty suppliers. One catalogue.</h3>
    <p>Every supplier feed brought into one place, and matched to its supplier before anyone has to touch it.</p>
    <div class="live d17-mono">Live system, September 2026</div>
    <span class="d17-mark">decodedops.co.uk · DO-ART-917 · Rev 01</span>
  </figcaption>
  <div class="win" aria-hidden="true">
    <div class="win-bar"><span class="dots"><i></i><i></i><i></i></span>
      <span class="crumb"><span>Catalogue ›</span> Overview</span><span class="pill">HANICKS</span></div>
    <div class="win-body">
      <nav class="win-nav"><span class="on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 3 3 8l9 5 9-5-9-5Z"/><path d="m3 13 9 5 9-5"/></svg>Catalogue</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="17.5" r="1.6"/><circle cx="17" cy="17.5" r="1.6"/></svg>Fulfil</span>
        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M21 3 10 14M21 3l-7 18-4-7-7-4 18-7Z"/></svg>Publish</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>Insight</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1"/></svg>Setup</span></nav>
      <div class="win-main">
        <h5>Catalogue overview</h5>
        <p class="s">Every supplier feed, brought into one catalogue</p>
        <div class="kpis">
          <div class="kpi m-rise" style="animation-delay:.1s"><div class="l">Products brought in</div>
            <p class="n">317,812</p><p class="d">from supplier feeds</p></div>
          <div class="kpi kpi--hit m-rise" style="animation-delay:.3s"><div class="l">Matched automatically</div>
            <p class="n">154,518</p><p class="d">to a supplier, before anyone had to touch them</p></div>
          <div class="kpi m-rise" style="animation-delay:.5s"><div class="l">Active suppliers</div>
            <p class="n">40</p><p class="d">feeding in</p></div>
        </div>
        <div class="meter m-rise" style="animation-delay:.7s"><div class="row"><b>Supplier matching</b><span>154,518 of 317,812</span></div>
          <div class="track"><div class="fill m-fill" style="width:48.6%;animation-delay:1s"></div></div></div>
        <div class="meter m-rise" style="animation-delay:.85s"><div class="row"><b>Stock records with a bin location</b><span>77%</span></div>
          <div class="track"><div class="fill m-fill" style="width:77%;animation-delay:1.25s"></div></div></div>
        <div class="feeds">
          <div class="hd"><b>Supplier feeds</b><span>40 active</span></div>
          <div class="r m-fade" style="animation-delay:1.6s"><b>Supplier A</b><span>Product and stock</span><span class="ok">IMPORTED</span></div>
          <div class="r m-fade" style="animation-delay:1.75s"><b>Supplier B</b><span>Product and stock</span><span class="ok">IMPORTED</span></div>
          <div class="r m-fade" style="animation-delay:1.9s"><b>Supplier C</b><span>Stock</span><span class="ok">IMPORTED</span></div>
          <div class="more m-fade" style="animation-delay:2.05s">+ 37 more active suppliers</div>
        </div>
      </div>
    </div>
  </div>
</figure>` }} />
    </div>
   </section>

   {/* ── 2 · BEFORE / AFTER, Hanicks ──────────────────────────────────── */}
   <section className="g-tint">
    <div className="wrap">
      <span className="eyebrow">Case study 01 · real production numbers</span>
     <h2>The platform stayed. The layer around it changed.</h2>
     <div className="hair" />
     <p className="lede">Nobody ripped out an ERP here. The diagnostic came
      first, the data got fixed, and the platform they&apos;d already paid for started working.</p>

     <div className="grid grid--2" style={{ marginTop: 34 }}>
      <div className="card">
       <span className="kicker">Before</span>
       <ul style={{ margin: '10px 0 0', padding: 0, listStyle: 'none' }}>
        {[
          <>The <b>317,812</b> products scattered across supplier feeds</>,
         'No consistent SKU to match any of them against',
         'No reliable stock picture for the warehouse or the website',
         'A platform taking the blame for a data problem',
        ].map((item, i) => (
         <li key={i} style={{ fontSize: 'var(--do-text-sm)', marginBottom: 10, color: 'color-mix(in srgb, var(--do-prussian-blue) 74%, transparent)' }}>
           {item}
         </li>
        ))}
       </ul>
      </div>
      <div className="card">
       <span className="kicker">After</span>
       <ul style={{ margin: '10px 0 0', padding: 0, listStyle: 'none' }}>
        {[
         <><b>154,518</b> matched to a supplier automatically</>,
          <><b>40</b> active suppliers feeding in, without anyone re-keying a row</>,
          <><b>3,844</b> Amazon listings re-optimised ahead of a title-format deadline</>,
         'The platform stayed. The layer around it changed.',
        ].map((item, i) => (
         <li key={i} style={{ fontSize: 'var(--do-text-sm)', marginBottom: 10, color: 'color-mix(in srgb, var(--do-prussian-blue) 74%, transparent)' }}>
           {item}
         </li>
        ))}
       </ul>
      </div>
     </div>
    </div>
   </section>

   {problemVideos['erp-implementation-failure'] && (
    <section className="g-off" data-od-id="video-embed">
     <div className="wrap">
      <VideoEmbed
       youtubeId={problemVideos['erp-implementation-failure'].youtubeId}
       title={problemVideos['erp-implementation-failure'].title}
       closeLine={problemVideos['erp-implementation-failure'].closeLine}
       app={problemVideos['erp-implementation-failure'].app}
       durationSec={problemVideos['erp-implementation-failure'].durationSec}
       playlistUrl={problemVideos['erp-implementation-failure'].playlistUrl}
      />
     </div>
    </section>
   )}

   {/* ── 3 · SUPPORTING STAT, TackleBag ───────────────────────────────── */}
   <section className="g-navy">
    <div className="wrap">
      <span className="eyebrow">Case study 02 · the same pattern</span>
     <h2>Different business, ahead of the decision rather than after it.</h2>
     <div className="hair" />

     <div className="grid grid--2" style={{ marginTop: 34, maxWidth: 620 }}>
      <div className="card">
       <div style={{ fontFamily: 'var(--do-font-heading)', fontWeight: 'var(--do-weight-extrabold)', fontSize: 'clamp(2rem,4vw,2.75rem)', color: 'var(--do-amber)', lineHeight: 1 }}>17</div>
       <p style={{ marginTop: 10 }}>supplier feeds automated from feed to ERP</p>
      </div>
      <div className="card">
       <div style={{ fontFamily: 'var(--do-font-heading)', fontWeight: 'var(--do-weight-extrabold)', fontSize: 'clamp(2rem,4vw,2.75rem)', color: 'var(--do-amber)', lineHeight: 1 }}>20–40</div>
       <p style={{ marginTop: 10 }}>hours a week, projected saving</p>
      </div>
     </div>

     <p className="lede" style={{ marginTop: 28 }}>Same pattern, different business: the diagnostic work came ahead of
      their own ERP decision, rather than after a failed one. That&apos;s the whole difference, and it&apos;s
      the cheapest part of the project.</p>
    </div>
   </section>

   {/* ── 4 · RELATED READING ──────────────────────────────────────────── */}
   <section className="g-off">
    <div className="wrap" style={{ maxWidth: 720 }}>
     <span className="eyebrow">Further reading</span>
     <h2>Read the full guide</h2>
     <div className="hair" />
     <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
      <li style={{ marginBottom: 12 }}>
       <Link href="/resources/erp-selection-playbook" className="underline" style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-text-primary)' }}>
        The ERP selection playbook
       </Link>
      </li>
      <li style={{ marginBottom: 12 }}>
       <Link href="/blog/the-real-cost-of-a-failed-erp-project" className="underline" style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-text-primary)' }}>
        The real cost of a failed ERP project
       </Link>
      </li>
      <li>
       <Link href="/blog/5-questions-vendors-wont-like" className="underline" style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-text-primary)' }}>
        5 questions ERP vendors won&apos;t like
       </Link>
      </li>
     </ul>
    </div>
   </section>

   {/* ── 5 · CTA STRIP ──────────────────────────────────────────────────── */}
   <section className="g-white">
    <div className="wrap max-w-2xl mx-auto text-center">
     <h2>Book a free discovery call.</h2>
     <div className="hair mx-auto" />
     <p className="lede mx-auto">An hour on what&apos;s actually going wrong. If you&apos;re mid-way through an
      implementation that&apos;s slipping, that&apos;s exactly the conversation to have now rather than after
      go-live.</p>
     <div className="btn-row justify-center">
      <Link className="btn btn--primary" href="/contact">Book a free discovery call</Link>
      <Link className="btn btn--outline" href="/clarity">See how a Clarity Audit works</Link>
     </div>
    </div>
    </section>
    <D17Motion />
   </>
  );
}
