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
 title: 'Wrong ERP software: Decoded Ops',
  description: "Chose an ERP that doesn't fit your operation? You're not alone. Here's how to evaluate ERP for print, embroidery, and decoration businesses, scored against a written brief.",
  alternates: { canonical: '/problems/wrong-erp-software' },
  openGraph: {
   title: 'Wrong ERP software: Decoded Ops',
   description: "Chose an ERP that doesn't fit your operation? You're not alone. Here's how to evaluate ERP for print, embroidery, and decoration businesses, scored against a written brief.",
   url: 'https://decodedops.co.uk/problems/wrong-erp-software',
   images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
   card: 'summary_large_image',
   title: 'Wrong ERP software: Decoded Ops',
   description: "Chose an ERP that doesn't fit your operation? You're not alone. Here's how to evaluate ERP for print, embroidery, and decoration businesses, scored against a written brief.",
  },
};

const wrongErpSchema = {
 '@context': 'https://schema.org',
 '@graph': [
  {
   '@type': 'FAQPage',
   mainEntity: [
    {
     '@type': 'Question',
     name: 'Why does selecting ERP software based on a demo lead to problems?',
     acceptedAnswer: { '@type': 'Answer', text: 'Vendors are excellent at demos. They show you the things the software does well and move quickly past the things it does not. Without sector expertise on your side of the table, you are evaluating presentation skills.' },
    },
    {
     '@type': 'Question',
     name: 'Why should you write an independent vendor brief before selecting ERP?',
     acceptedAnswer: { '@type': 'Answer', text: 'A vendor brief, written by someone who understands your business model before you talk to any vendor, changes the selection process entirely. Without it, you are being sold to rather than making an informed choice.' },
    },
    {
     '@type': 'Question',
     name: 'Why are ERP reference sites in other sectors misleading?',
     acceptedAnswer: { '@type': 'Answer', text: 'Generic ERP vendors often have good reference sites in manufacturing or distribution. Those references do not tell you how the software performs in a decoration business with mixed methods, variable artwork, and short-run personalisation.' },
    },
    {
     '@type': 'Question',
     name: 'What is the total cost of ownership for an ERP system?',
     acceptedAnswer: { '@type': 'Answer', text: 'Implementation, training, customisation, integration, ongoing support. The total cost of ownership for an ERP is often two to three times the headline licence cost. That comparison rarely happens before selection.' },
    },
    {
     '@type': 'Question',
     name: 'How do I choose the right ERP for a print or embroidery business?',
     acceptedAnswer: { '@type': 'Answer', text: 'Write the requirements brief before you speak to any vendor. The brief should document your actual workflows, decoration methods, artwork approval process, B2B ordering, eCommerce integration requirements, and how you manage blanks inventory. Once the brief exists, you can compare the systems on a like-for-like basis.' },
    },
    {
     '@type': 'Question',
     name: 'What ERP works with an online store for an embroidery or decoration business?',
     acceptedAnswer: { '@type': 'Answer', text: 'Several ERPs in this sector can integrate with an online store, but the quality of that integration varies significantly. The questions to ask are: does the integration handle personalisation data, not just order totals? Does stock sync in real time? And is the integration maintained by the ERP vendor or reliant on a third-party connector that could break? An independent ERP evaluation covers all of these.' },
    },
   ],
  },
 ],
};

const heroArt978 = `<figure class="d17 sx px a978" data-od-id="hero-evidence" data-motion data-no="DO-ART-978" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-978. Documents over a photograph of an embroidery floor. A vendor demo script sits on the left: a polished presentation showing perfect workflows and happy users. On the right, a real Tuesday morning: customisation costs spiralling, your team running workarounds, and the vendor telling you it's a configuration issue. The demo showed one thing. The operation is another.">
  <div class="d17-ph"><img src="/images/d17/problems/thread-spools-2195b5.jpg" alt="" width="1100" height="1224"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Wrong ERP</span><span>Demo script vs real Tuesday</span></div>
  <div class="stage" aria-hidden="true">
    <div class="lp m-drop" style="animation-delay:.1s">
      <div class="hd"><span>VENDOR DEMO SCRIPT</span><span>Prepared remarks</span></div>
      <div class="row"><span>WORKFLOW</span><span>Perfectly linear</span></div>
      <div class="row"><span>USERS</span><span>Smiling, trained</span></div>
      <div class="row"><span>CUSTOMISATION</span><span>Minimal, included</span></div>
      <div class="row"><span>INTEGRATION</span><span>Seamless, plug-and-play</span></div>
      <div class="row"><span>REFERENCE</span><span>Manufacturing, not decoration</span></div>
      <div class="row"><span>COST</span><span>Licence fee only</span></div>
    </div>
    <div class="lp m-drop" style="animation-delay:.5s">
      <div class="hd"><span>REAL TUESDAY MORNING</span><span>What actually happens</span></div>
      <div class="row no"><span>WORKFLOW</span><span>Customisation needed everywhere</span></div>
      <div class="row no"><span>USERS</span><span>Found workarounds on day two</span></div>
      <div class="row no"><span>CUSTOMISATION</span><span>Costs have passed the licence</span></div>
      <div class="row no"><span>INTEGRATION</span><span>Manual rekeying, two systems</span></div>
      <div class="row no"><span>REFERENCE</span><span>Doesn't understand decoration</span></div>
      <div class="row no"><span>COST</span><span>2-3x the headline price</span></div>
    </div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">The demo showed one thing. <em>The operation is another.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-978 · Rev 01</span>
  </div>
</figure>`;

const inlineArt719 = `<figure class="d17 sw a719" data-od-id="plate-gap" data-motion data-no="DO-ART-719" data-rev="03" data-tx="schematic"
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
</figure>`;

export default function WrongERPSoftwarePage() {
 return (
  <>
   <JsonLd data={wrongErpSchema} />
   <BreadcrumbSchema items={[
    { name: 'Home', url: 'https://decodedops.co.uk/' },
    { name: 'Problems', url: 'https://decodedops.co.uk/problems' },
    { name: 'Wrong ERP software', url: 'https://decodedops.co.uk/problems/wrong-erp-software' },
   ]} />
   {problemVideos['wrong-erp-software'] && (
    <VideoSchema
     name={problemVideos['wrong-erp-software'].title}
     description={problemVideos['wrong-erp-software'].closeLine}
     youtubeId={problemVideos['wrong-erp-software'].youtubeId}
     uploadDate={problemVideos['wrong-erp-software'].uploadDate}
     durationSec={problemVideos['wrong-erp-software'].durationSec}
    />
   )}

   {/* ── 1 · HERO ──────────────────────────────────────────────────────── */}
   <section className="g-off">
    <div className="wrap hero-split">
     <div>
      <span className="eyebrow">The problem</span>
      <h1>The ERP looked right in the demo. It doesn&apos;t fit how your business works.</h1>
      <p className="lede">Buying the wrong ERP is one of the most expensive mistakes you can make in
       this sector. The cost isn&apos;t just the software. It&apos;s the setup, the disruption, the
       workarounds that pile up, and the productivity you never get back. Most of the time it
       was avoidable, if someone independent had checked the fit before the contracts were
       signed.</p>
      <div className="hero-cta">
       <Link className="btn btn--primary" href="/contact">Book a free discovery call</Link>
      </div>
     </div>
     <div dangerouslySetInnerHTML={{ __html: heroArt978 }} />
    </div>
   </section>

   {/* ── 2 · SYMPTOMS ──────────────────────────────────────────────────── */}
   <section className="g-tint">
    <div className="wrap">
     <span className="eyebrow">The signs</span>
     <h2>Seven signs the system doesn&apos;t fit.</h2>
     <p className="lede" style={{ marginTop: 16 }}>If you recognise three or more of these, the problem
      usually isn&apos;t your team. It&apos;s what got signed off before anyone on your side wrote a brief.</p>

     <ul className="symptoms">
      <li>The system can&apos;t handle how you actually decorate without heavy customisation</li>
      <li>You&apos;re running manual processes alongside the system because it can&apos;t replace them</li>
      <li>The vendor keeps telling you it&apos;s a configuration issue, not a software limitation</li>
      <li>Your team have found ways around the system rather than working within it</li>
      <li>Customisation costs have passed the original software licence</li>
      <li>You chose it based on a demo that showed a different kind of business</li>
      <li>The vendor&apos;s support team doesn&apos;t understand your industry</li>
     </ul>
    </div>
   </section>

   {/* ── 3 · CAUSES ────────────────────────────────────────────────────── */}
   <section className="g-off">
    <div className="wrap">
     <span className="eyebrow">Why this happens</span>
     <h2>Four reasons the wrong system gets bought.</h2>

     <div className="grid grid--2" style={{ marginTop: 34 }}>
      <article className="card cause">
       <span className="n">01</span>
       <h3>Selected on demo, not on fit</h3>
       <p>Vendors are excellent at demos. They show you what the software does well and move
        quickly past what it doesn&apos;t. Without someone on your side who knows the sector, you&apos;re
        judging presentation skills, not fit. The only fair test is against a written brief that
        describes your actual business.</p>
      </article>
      <article className="card cause">
       <span className="n">02</span>
       <h3>No independent specification written first</h3>
       <p>A brief written by someone who understands your business before you talk to any vendor
        changes everything. Without it, you&apos;re being sold to rather than making a choice.</p>
      </article>
      <article className="card cause">
       <span className="n">03</span>
       <h3>Reference sites in a different sector</h3>
       <p>Generic vendors often have great references in manufacturing or distribution. Those
        don&apos;t tell you how the software handles decoration: mixed methods, changing artwork, and
        short runs with personalisation.</p>
      </article>
      <article className="card cause">
       <span className="n">04</span>
       <h3>The total cost wasn&apos;t modelled</h3>
       <p>Setup, training, customisation, integration, ongoing support. The full cost of an ERP is
        often two to three times the licence fee. That comparison rarely happens before you
        sign.</p>
      </article>
     </div>
    </div>
   </section>

   {problemVideos['wrong-erp-software'] && (
    <section className="g-off" data-od-id="video-embed">
     <div className="wrap">
      <VideoEmbed
       youtubeId={problemVideos['wrong-erp-software'].youtubeId}
       title={problemVideos['wrong-erp-software'].title}
       closeLine={problemVideos['wrong-erp-software'].closeLine}
       app={problemVideos['wrong-erp-software'].app}
       durationSec={problemVideos['wrong-erp-software'].durationSec}
       playlistUrl={problemVideos['wrong-erp-software'].playlistUrl}
      />
     </div>
    </section>
   )}

   {/* ── INLINE ARTWORK · DO-ART-719 ──────────────────────────────────── */}
   <section className="g-navy">
    <div className="wrap">
     <div dangerouslySetInnerHTML={{ __html: inlineArt719 }} />
    </div>
   </section>

   {/* ── 4 · HOW I HELP ─────────────────────────────────────────────────── */}
   <section className="g-navy">
    <div className="wrap">
     <span className="eyebrow eyebrow--amber">How I help</span>
     <h2>An honest read on stay or move, then a brief that doesn&apos;t repeat the mistake.</h2>

     <div className="answer">
      <p>If you&apos;re in a system that doesn&apos;t fit, I give you an honest assessment of your
       options. Sometimes there&apos;s more in the existing system than you&apos;re using, and the
       implementation was poor, not the software. Sometimes the software genuinely isn&apos;t right
       and you need to plan a managed exit.</p>
       <p>Either way, I help you understand <b>the real cost of staying versus moving</b>, and if
        you&apos;re moving, I write the vendor brief from your operation, and every candidate gets
        scored against it. That includes software I have built myself, which is exactly why the
        brief is written down. Fit decides, and you can see the scoring.</p>
     </div>
    </div>
   </section>

   {/* ── 5 · RELATED READING ──────────────────────────────────────────── */}
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
       <Link href="/problems/buy-vs-build" className="underline" style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-text-primary)' }}>
        Should you build or buy your next system?
       </Link>
      </li>
      <li style={{ marginBottom: 12 }}>
       <Link href="/blog/5-questions-vendors-wont-like" className="underline" style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-text-primary)' }}>
        5 questions ERP vendors won&apos;t like
       </Link>
      </li>
      <li>
       <Link href="/blog/the-real-cost-of-a-failed-erp-project" className="underline" style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-text-primary)' }}>
        The real cost of a failed ERP project
       </Link>
      </li>
     </ul>
    </div>
   </section>

   {/* ── 6 · CTA STRIP ──────────────────────────────────────────────────── */}
   <section className="g-white cta-strip">
    <div className="wrap" style={{ maxWidth: 760 }}>
     <h2>Book a free discovery call.</h2>
     <p className="lede">An hour on what&apos;s actually going wrong with the system you&apos;re running today,
      and whether the fix is process, configuration, or a managed move to something that fits.</p>
     <div className="hero-cta">
      <Link className="btn btn--primary" href="/contact">Book a free discovery call</Link>
      <Link className="btn btn-ghost btn-arrow" href="/clarity">See how a Clarity Audit works</Link>
     </div>
    </div>
   </section>
   <D17Motion />
  </>
 );
}
