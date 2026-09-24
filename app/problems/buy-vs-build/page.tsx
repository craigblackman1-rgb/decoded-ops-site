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
 title: 'Buy vs build: Decoded Ops',
 description: "The question isn't buy or build. It's how much of what you need the platform actually covers, what the rest costs to close, and whether that changes how you work. Sometimes the answer is buy, and the test has to be able to say so.",
 alternates: { canonical: '/problems/buy-vs-build' },
 openGraph: {
  title: 'Buy vs build: Decoded Ops',
  description: "The question isn't buy or build. It's how much of what you need the platform actually covers, what the rest costs to close, and whether that changes how you work.",
  url: 'https://decodedops.co.uk/problems/buy-vs-build',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: 'Buy vs build: Decoded Ops',
  description: "The question isn't buy or build. It's how much of what you need the platform actually covers, and what the rest costs to close.",
 },
};

const buyVsBuildSchema = {
 '@context': 'https://schema.org',
 '@graph': [
  {
   '@type': 'FAQPage',
   mainEntity: [
    {
     '@type': 'Question',
     name: 'Should I buy off-the-shelf software or build custom for my print or embroidery business?',
     acceptedAnswer: { '@type': 'Answer', text: "Neither, framed as a binary. The real question is what percentage of what you actually need a platform covers. High coverage with a low cost to close the gap usually means buy. Low coverage, or a platform that forces you to change how you work, is where a purpose-built layer starts to make sense." },
    },
    {
     '@type': 'Question',
     name: 'What is the most common mistake when making a buy-vs-build technology decision?',
     acceptedAnswer: { '@type': 'Answer', text: "Treating the licence fee as the whole cost. The real comparison is coverage against the cost of closing the gap, plus what it costs to change how you work to fit the platform. Most of that never appears on a quote." },
    },
    {
     '@type': 'Question',
     name: 'How do I work out how much a platform actually covers?',
     acceptedAnswer: { '@type': 'Answer', text: 'Follow your processes from start to finish and note every point where the platform does not fit, in the order they happen. That list is the uncovered percentage, and it is the only reliable way to see it. A Clarity Audit does exactly this.' },
    },
    {
     '@type': 'Question',
     name: 'Does buying a platform sometimes turn out to be the right answer?',
     acceptedAnswer: { '@type': 'Answer', text: 'Often. High coverage and a low cost to change how you work means buy, clearly and quickly. The test has to be able to reach that answer, or it is not a real test.' },
    },
    {
     '@type': 'Question',
     name: 'What does buy plus a custom layer mean for a decorated-goods business?',
     acceptedAnswer: { '@type': 'Answer', text: 'The platform is right but leaves gaps: supplier feeds, artwork, reporting across more than one business. A purpose-built layer closes those gaps without touching what the platform already does well.' },
    },
   ],
  },
 ],
};

export default function BuyVsBuildPage() {
 return (
  <>
   <JsonLd data={buyVsBuildSchema} />
   <BreadcrumbSchema items={[
    { name: 'Home', url: 'https://decodedops.co.uk/' },
    { name: 'Problems', url: 'https://decodedops.co.uk/problems' },
    { name: 'Buy vs build', url: 'https://decodedops.co.uk/problems/buy-vs-build' },
   ]} />
   {problemVideos['buy-vs-build'] && (
    <VideoSchema
     name={problemVideos['buy-vs-build'].title}
     description={problemVideos['buy-vs-build'].closeLine}
     youtubeId={problemVideos['buy-vs-build'].youtubeId}
     uploadDate={problemVideos['buy-vs-build'].uploadDate}
     durationSec={problemVideos['buy-vs-build'].durationSec}
    />
   )}

   {/* ── 1 · HERO ──────────────────────────────────────────────────────── */}
   <section className="g-off">
    <div className="wrap hero-split">
     <div>
      <span className="eyebrow">The real question</span>
      <h1>It covers 25% of what you need. Do you buy it?</h1>
      <p className="lede">This gets asked in different words most weeks, usually framed as buy
       or build. It isn&apos;t really that question. If something covers a quarter of the job, the
       decision isn&apos;t about the quarter. It&apos;s about the other three quarters, and what
       closing them costs.</p>
      <div className="hero-cta">
       <Link className="btn btn--primary" href="/contact">Book a free 60 minute call</Link>
      </div>
     </div>
     <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sx a962" data-od-id="hero-evidence" data-motion data-no="DO-ART-962" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-962. Two papers over a photograph of a print hall. A coverage test runs a platform against eight steps of the workflow: it covers two, enquiry to quote and invoicing, and leaves six as gaps, a quarter covered and three quarters not. A second note, the other three quarters, lists what nobody has priced: the cost of the gap and the cost of changing how the business works. A quarter covered: what closes the rest?">
  <div class="d17-ph"><img src="/images/d17/problems/gen-press-hall-7c2764.jpg" alt="" width="1000" height="1000"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Buy or build</span><span>The operation decides</span></div>
  <div class="stage" aria-hidden="true">
    <div class="d17-doc doc-c m-drop" style="animation-delay:.1s">
      <span class="tab">TEST</span>
      <span class="ref">Coverage test · shortlisted platform</span>
      <h4>What does it actually cover?</h4>
      <p class="sub">the workflow, start to finish</p>
      <div class="cov">
        <div>Enquiry to quote<em class="y">Covered</em></div>
        <div>Artwork approval<em class="n">Gap</em></div>
        <div>Decoration methods<em class="n">Gap</em></div>
        <div>Supplier feeds<em class="n">Gap</em></div>
        <div>Production planning<em class="n">Gap</em></div>
        <div>Blank to finished stock<em class="n">Gap</em></div>
        <div>Despatch<em class="n">Gap</em></div>
        <div>Invoicing<em class="y">Covered</em></div>
      </div>
      <div class="cov-bar"><i class="m-fill" style="animation-delay:.9s"></i></div>
      <div class="cov-k"><span>Covered: a quarter</span><span>Open: the rest</span></div>
    </div>
    <div class="d17-doc doc-g m-drop" style="animation-delay:.45s">
      <span class="tab">?</span>
      <span class="ref">The other three quarters</span>
      <h4>Nobody priced it</h4>
      <ul class="q-list">
        <li><span>What the gap costs</span>More software, or someone's time every week</li>
        <li><span>What changing costs</span>Reworking how the business runs</li>
        <li class="hot"><span>On the quote</span>Neither of them</li>
      </ul>
    </div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">A quarter covered. <em>What closes the rest?</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-962 · Rev 01</span>
  </div>
</figure>` }} />
    </div>
   </section>

   {/* ── 2 · THE THREE QUESTIONS ───────────────────────────────────────── */}
   <section className="g-tint">
    <div className="wrap">
     <span className="eyebrow">Before you buy anything</span>
     <h2>Three questions that replace the binary.</h2>
     <p className="lede" style={{ marginTop: 16 }}>None of these require naming a platform. They
      work for whichever one you&apos;re looking at.</p>

     <div className="rungs">
      <article className="rung">
       <span className="kicker">Coverage</span>
       <h3>What percentage does it genuinely cover?</h3>
       <p>If the best thing on the market covers a quarter of the job, the question isn&apos;t
        whether to buy it. It&apos;s what closes the other three quarters, and what that costs.
        Usually nobody has priced it, so it gets treated as free. It isn&apos;t free, it&apos;s
        just invisible.</p>
      </article>

      <article className="rung">
       <span className="kicker">Fit</span>
       <h3>Does it work how you work?</h3>
       <p>Or do you rework the business to fit the software? Every platform encodes an
        assumption about how you should operate. Fine if you agree with it. Expensive if you
        don&apos;t, and the cost never appears on the quote.</p>
      </article>

      <article className="rung">
       <span className="kicker">Bloat</span>
       <h3>How much of it will you actually use?</h3>
       <p>Platforms are built to cover a hundred and one scenarios because they have to sell to
        everyone. You&apos;ll use maybe a fifth of it. You pay for all of it, and you carry the
        complexity of the rest for as long as you own it.</p>
      </article>
     </div>
    </div>
   </section>

   {problemVideos['buy-vs-build'] && (
    <section className="g-off" data-od-id="video-embed">
     <div className="wrap">
      <VideoEmbed
       youtubeId={problemVideos['buy-vs-build'].youtubeId}
       title={problemVideos['buy-vs-build'].title}
       closeLine={problemVideos['buy-vs-build'].closeLine}
       app={problemVideos['buy-vs-build'].app}
       durationSec={problemVideos['buy-vs-build'].durationSec}
       playlistUrl={problemVideos['buy-vs-build'].playlistUrl}
      />
     </div>
    </section>
   )}

   {/* ── 3 · THE ARITHMETIC ────────────────────────────────────────────── */}
   <section className="g-white">
    <div className="wrap">
     <span className="eyebrow">The arithmetic</span>
     <h2>Three numbers, and you can work them out yourself.</h2>
     <p className="lede" style={{ marginTop: 16 }}>Nobody needs to sell you this. Follow your own
      processes and the numbers are already there.</p>

     <div className="steps">
      <article className="step">
       <p className="step-n">STEP 1</p>
       <h3>What it covers</h3>
       <p>Follow the workflow start to finish. Every point where the platform doesn&apos;t fit is
        part of the uncovered percentage.</p>
      </article>
      <article className="step">
       <p className="step-n">STEP 2</p>
       <h3>What the gap costs</h3>
       <p>Closing it with more software, or with someone&apos;s time every week. Both are real
        costs. Price whichever one you&apos;d actually choose.</p>
      </article>
      <article className="step step--last">
       <p className="step-n">STEP 3</p>
       <h3>What changing to fit it costs</h3>
       <p>What you&apos;d have to rework about how the business runs to use the platform as
        designed. That number is usually the one nobody wrote down.</p>
      </article>
     </div>

     <div className="inset">
      <b>Sometimes the answer is buy.</b> High coverage and a low cost to change how you work
      means buy it, clearly and quickly. This has to be able to come out that way, or it isn&apos;t
      a real test.
     </div>
    </div>
   </section>

   {/* ── INLINE ARTWORK · DO-ART-719 ──────────────────────────────────── */}
   <section className="g-navy">
    <div className="wrap">
     <span className="eyebrow">The options · DO-ART-719</span>
     <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sw a719" data-od-id="plate-gap" data-motion data-no="DO-ART-719" data-rev="03" data-tx="schematic"
        aria-label="Drawn plate DO-ART-719, three ways to fill the gap. The platform you already run, generic and never designed for print and embroidery, holds orders, stock, customers, products, accounts, suppliers, purchasing and reports, with custom development bolted on to make it fit. Decoration and artwork sit in a hatched gap it was not built for. Three ways out of the gap: one, use what's already there, sometimes we can do something with what's already there; two, add a layer on top, sometimes it needs an extra layer on top; three, in amber, use something already built, because there wasn't anything on the market designed to do that job.">
  <div class="q-grid" aria-hidden="true"></div>
  <svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
    <pattern id="q-hatch-719" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="12" height="12" fill="#023047" fill-opacity=".6"/><path d="M0 0 V12" stroke="#8ECAE6" stroke-opacity=".35" stroke-width="1.4"/></pattern>
    <marker id="q-ah719" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#8ECAE6"/></marker>
    <marker id="q-ah719a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#FFB703"/></marker>
  </defs></svg>
  <svg class="q v-wide" viewBox="0 0 1600 660" aria-hidden="true">
    <text class="t-xl" x="60" y="72" style="font-size:52px">Three ways to fill the gap</text>
    <rect x="30" y="30" width="7" height="56" rx="2" class="f-a"/>
    <rect x="130" y="130" width="300" height="56" rx="8" fill="none" stroke="#8ECAE6" stroke-opacity=".6" stroke-dasharray="7 6" stroke-width="1.6"/>
    <text class="t-m" x="150" y="165" style="font-size:16px">Custom development</text>
    <text class="t-m" x="452" y="152" style="font-size:13px;fill:#F8F9FA;fill-opacity:.6">bolted on</text>
    <text class="t-m" x="452" y="172" style="font-size:13px;fill:#F8F9FA;fill-opacity:.6">to make it fit</text>
    <g fill="#023047" stroke="#8ECAE6" stroke-width="1.6"><circle cx="180" cy="190" r="8"/><circle cx="280" cy="190" r="8"/><circle cx="380" cy="190" r="8"/></g>
    <rect x="100" y="196" width="620" height="400" rx="6" fill="none" stroke="#8ECAE6" stroke-opacity=".7" stroke-width="1.8"/>
    <text class="t-m" x="128" y="236" style="font-size:16px;fill:#F8F9FA">The platform you already run</text>
    <text class="t-d" x="128" y="262" style="font-size:17px;fill:#8ECAE6">generic, never designed for print and embroidery</text>
    <g>
      <rect class="bx" x="128" y="286" width="150" height="46" rx="6"/><text class="t" x="146" y="315" style="font-size:18px">Orders</text>
      <rect class="bx" x="292" y="286" width="150" height="46" rx="6"/><text class="t" x="310" y="315" style="font-size:18px">Stock</text>
      <rect class="bx" x="128" y="344" width="150" height="46" rx="6"/><text class="t" x="146" y="373" style="font-size:18px">Customers</text>
      <rect class="bx" x="292" y="344" width="150" height="46" rx="6"/><text class="t" x="310" y="373" style="font-size:18px">Products</text>
      <rect class="bx" x="128" y="402" width="150" height="46" rx="6"/><text class="t" x="146" y="431" style="font-size:18px">Accounts</text>
      <rect class="bx" x="292" y="402" width="150" height="46" rx="6"/><text class="t" x="310" y="431" style="font-size:18px">Suppliers</text>
      <rect class="bx" x="128" y="460" width="150" height="46" rx="6"/><text class="t" x="146" y="489" style="font-size:18px">Purchasing</text>
      <rect class="bx" x="292" y="460" width="150" height="46" rx="6"/><text class="t" x="310" y="489" style="font-size:18px">Reports</text>
    </g>
    <rect class="bx-x" x="490" y="380" width="230" height="180" rx="2" style="fill:url(#q-hatch-719)"/>
    <text class="t-h" x="605" y="468" text-anchor="middle" style="font-size:30px">?</text>
    <text class="t-m" x="605" y="496" text-anchor="middle" style="font-size:14px">The gap</text>
    <text class="t-m" x="100" y="630" style="font-size:15px;fill:#F8F9FA">Decoration and artwork: not built for it</text>
    <path class="ln m-draw" pathLength="1" style="animation-delay:.3s" d="M720 470 H780 C800 470 800 470 800 450 V210 C800 190 810 190 830 190 H960" marker-end="url(#q-ah719)"/>
    <path class="ln m-draw" pathLength="1" style="animation-delay:.6s" d="M720 470 H960" marker-end="url(#q-ah719)"/>
    <path class="ln-a m-draw" pathLength="1" style="animation-delay:.9s" d="M786 470 C800 470 800 480 800 500 V570 C800 590 810 590 830 590 H870"/>
    <rect class="f-a m-pop" style="animation-delay:1.4s" x="870" y="558" width="62" height="64" rx="3"/>
    <path class="ln-a" d="M932 590 H960" marker-end="url(#q-ah719a)"/>
    <circle cx="786" cy="470" r="7" class="f-s"/>
    <g class="m-fade" style="animation-delay:1.1s">
      <circle cx="1010" cy="190" r="23" fill="none" stroke="#8ECAE6" stroke-width="2"/><text class="t-m" x="1010" y="196" text-anchor="middle" style="font-size:15px;fill:#F8F9FA">01</text>
      <text class="t-h" x="1054" y="192" style="font-size:31px">Use what's already there</text>
      <text class="t" x="1054" y="226" style="font-size:19px;fill:#8ECAE6">Sometimes we can do something with what's</text>
      <text class="t" x="1054" y="250" style="font-size:19px;fill:#8ECAE6">already there.</text>
      <circle cx="1010" cy="470" r="23" fill="none" stroke="#8ECAE6" stroke-width="2"/><text class="t-m" x="1010" y="476" text-anchor="middle" style="font-size:15px;fill:#F8F9FA">02</text>
      <text class="t-h" x="1054" y="472" style="font-size:31px">Add a layer on top</text>
      <text class="t" x="1054" y="506" style="font-size:19px;fill:#8ECAE6">Sometimes it needs an extra layer on top.</text>
    </g>
    <g class="m-pop" style="animation-delay:1.7s">
      <circle cx="1010" cy="590" r="23" class="f-a"/><text class="t-m t-p" x="1010" y="596" text-anchor="middle" style="font-size:15px">03</text>
    </g>
    <text class="t-h t-a" x="1054" y="592" style="font-size:31px">Use something already built</text>
    <text class="t" x="1054" y="626" style="font-size:19px;fill:#8ECAE6">Because there wasn't anything on the market</text>
    <text class="t" x="1054" y="650" style="font-size:19px;fill:#8ECAE6">designed to do that job.</text>
  </svg>
  <svg class="q v-tall" viewBox="0 0 700 1320" aria-hidden="true">
    <rect x="10" y="10" width="8" height="96" rx="2" class="f-a"/>
    <text class="t-xl" x="40" y="54" style="font-size:48px">Three ways to</text>
    <text class="t-xl" x="40" y="106" style="font-size:48px">fill the gap</text>
    <rect x="40" y="150" width="420" height="64" rx="8" fill="none" stroke="#8ECAE6" stroke-opacity=".6" stroke-dasharray="7 6" stroke-width="1.6"/>
    <text class="t-m" x="62" y="190" style="font-size:21px">Custom development</text>
    <text class="t-m" x="478" y="178" style="font-size:17px;fill:#F8F9FA;fill-opacity:.6">bolted on</text>
    <text class="t-m" x="478" y="202" style="font-size:17px;fill:#F8F9FA;fill-opacity:.6">to make it fit</text>
    <rect x="10" y="222" width="680" height="560" rx="6" fill="none" stroke="#8ECAE6" stroke-opacity=".7" stroke-width="2"/>
    <text class="t-m" x="36" y="268" style="font-size:21px;fill:#F8F9FA">The platform you already run</text>
    <text class="t-d" x="36" y="302" style="font-size:22px;fill:#8ECAE6">generic, never designed for print and embroidery</text>
    <g>
      <rect class="bx" x="36" y="330" width="300" height="62" rx="6"/><text class="t" x="54" y="370" style="font-size:26px">Orders</text>
      <rect class="bx" x="356" y="330" width="300" height="62" rx="6"/><text class="t" x="374" y="370" style="font-size:26px">Stock</text>
      <rect class="bx" x="36" y="406" width="300" height="62" rx="6"/><text class="t" x="54" y="446" style="font-size:26px">Customers</text>
      <rect class="bx" x="356" y="406" width="300" height="62" rx="6"/><text class="t" x="374" y="446" style="font-size:26px">Products</text>
      <rect class="bx" x="36" y="482" width="300" height="62" rx="6"/><text class="t" x="54" y="522" style="font-size:26px">Accounts</text>
      <rect class="bx" x="356" y="482" width="300" height="62" rx="6"/><text class="t" x="374" y="522" style="font-size:26px">Suppliers</text>
      <rect class="bx" x="36" y="558" width="300" height="62" rx="6"/><text class="t" x="54" y="598" style="font-size:26px">Purchasing</text>
      <rect class="bx" x="356" y="558" width="300" height="62" rx="6"/><text class="t" x="374" y="598" style="font-size:26px">Reports</text>
    </g>
    <rect class="bx-x" x="36" y="646" width="628" height="110" rx="2" style="fill:url(#q-hatch-719)"/>
    <text class="t-m" x="350" y="708" text-anchor="middle" style="font-size:20px;fill:#F8F9FA">? · The gap: decoration and artwork</text>
    <path class="ln" d="M60 782 V1250" style="stroke-width:3"/>
    <path class="ln" d="M60 860 H100" marker-end="url(#q-ah719)"/><path class="ln" d="M60 1010 H100" marker-end="url(#q-ah719)"/><path class="ln-a" d="M60 1080 V1160 H100" marker-end="url(#q-ah719a)"/>
    <circle cx="140" cy="860" r="26" fill="none" stroke="#8ECAE6" stroke-width="2.4"/><text class="t-m" x="140" y="867" text-anchor="middle" style="font-size:19px;fill:#F8F9FA">01</text>
    <text class="t-h" x="184" y="858" style="font-size:34px">Use what's already there</text>
    <text class="t" x="184" y="896" style="font-size:24px;fill:#8ECAE6">Sometimes we can do something with</text>
    <text class="t" x="184" y="926" style="font-size:24px;fill:#8ECAE6">what's already there.</text>
    <circle cx="140" cy="1010" r="26" fill="none" stroke="#8ECAE6" stroke-width="2.4"/><text class="t-m" x="140" y="1017" text-anchor="middle" style="font-size:19px;fill:#F8F9FA">02</text>
    <text class="t-h" x="184" y="1008" style="font-size:34px">Add a layer on top</text>
    <text class="t" x="184" y="1046" style="font-size:24px;fill:#8ECAE6">Sometimes it needs an extra layer on top.</text>
    <circle cx="140" cy="1160" r="26" class="f-a"/><text class="t-m t-p" x="140" y="1167" text-anchor="middle" style="font-size:19px">03</text>
    <text class="t-h t-a" x="184" y="1158" style="font-size:34px">Use something already built</text>
    <text class="t" x="184" y="1196" style="font-size:24px;fill:#8ECAE6">Because there wasn't anything on the</text>
    <text class="t" x="184" y="1226" style="font-size:24px;fill:#8ECAE6">market designed to do that job.</text>
  </svg>
  <div class="foot"><span class="k d17-mono">Inside the operation · the gap</span><span class="d17-mark">decodedops.co.uk · DO-ART-719 · Rev 03</span></div>
</figure>` }} />
    </div>
   </section>

   {/* ── 4 · HOW I HELP ─────────────────────────────────────────────────── */}
   <section className="g-navy">
    <div className="wrap">
     <span className="eyebrow eyebrow--amber">How I help</span>
      <h2>Being upfront about where I stand.</h2>

      <div className="answer">
       <p>I build software too. Works started life plugging gaps nothing on the market
        covered, and it has grown into the ERP. So I am not a neutral bystander, and I will
        not pretend to be one.</p>
       <p>What I will do is put every option through the same coverage test, in writing, mine
        included. If an off-the-shelf platform covers what you need, that is what the report
        will say. A recommendation you can check against your own brief beats one you have to
        take on trust.</p>
      </div>
    </div>
   </section>

   {/* ── 5 · CTA STRIP ──────────────────────────────────────────────────── */}
   <section className="g-white cta-strip">
    <div className="wrap" style={{ maxWidth: 760 }}>
     <h2>You can&apos;t run these numbers without seeing the operation.</h2>
     <p className="lede">Working out what percentage anything actually covers means following
      your processes from start to finish first. A Clarity Audit is a day on site, then the
      comparison in writing within five working days.</p>
     <div className="hero-cta">
      <Link className="btn btn--primary" href="/contact">Book a free 60 minute call</Link>
      <Link className="btn-ghost btn-arrow" href="/clarity">See how a Clarity Audit works</Link>
     </div>
    </div>
    </section>
    <D17Motion />
   </>
  );
}
