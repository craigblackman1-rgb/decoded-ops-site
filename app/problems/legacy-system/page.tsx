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
 title: 'Legacy System Replacement for Small Business | Decoded Ops',
 description: "Legacy system replacement for a small business often means the platform bought ten years ago was never built for decoration BOMs or supplier artwork.",
 alternates: { canonical: '/problems/legacy-system' },
 openGraph: {
  title: 'Legacy System Replacement for Small Business | Decoded Ops',
  description: "Legacy system replacement for a small business often means the platform bought ten years ago was never built for decoration BOMs or supplier artwork.",
  url: 'https://decodedops.co.uk/problems/legacy-system',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: 'Legacy System Replacement for Small Business | Decoded Ops',
  description: "Legacy system replacement for a small business often means the platform bought ten years ago was never built for decoration BOMs or supplier artwork.",
 },
};

const legacySystemSchema = {
 '@context': 'https://schema.org',
 '@graph': [
  {
   '@type': 'FAQPage',
   mainEntity: [
    {
     '@type': 'Question',
     name: 'Should I replace my legacy ERP or add a custom layer?',
     acceptedAnswer: { '@type': 'Answer', text: 'Ripping out a platform the business already knows and has paid for is rarely the right first move. The gap sits beside it, not underneath it. The platform stays. Only the missing piece gets built.' },
    },
    {
     '@type': 'Question',
     name: 'What decoration-specific workflows do generic ERPs miss?',
     acceptedAnswer: { '@type': 'Answer', text: 'Decoration BOMs, a blank plus a decoration method plus thread or ink plus setup time, are rarely represented cleanly in a generic ERP. Blank versus finished goods tracking and supplier artwork versioning are likewise missing from most platforms.' },
    },
    {
     '@type': 'Question',
     name: 'How does the layer-stack model work, the platform stays, what changes?',
     acceptedAnswer: { '@type': 'Answer', text: 'The existing platform continues handling stock, orders, and accounts exactly as it always has. A custom layer sits beside it handling decoration BOMs, blank-to-finished-goods mapping, and artwork versioning, exactly the jobs the platform does not do.' },
    },
    {
     '@type': 'Question',
     name: 'How do I know what my platform needs beside it?',
     acceptedAnswer: { '@type': 'Answer', text: 'A Clarity Audit produces a written assessment of what your current platform handles well, what it does not, and a fixed price for the layer that closes the gap.' },
    },
    {
     '@type': 'Question',
     name: 'Is replacing our legacy ERP always a bad idea?',
     acceptedAnswer: { '@type': 'Answer', text: 'Ripping out a platform is rarely the right first move. Most businesses save time and money by adding a custom automation layer to do the decoration-specific jobs the ERP was never built for, keeping the platform they already know and have paid for.' },
    },
   ],
  },
 ],
};

export default function LegacySystemPage() {
 return (
  <>
   <JsonLd data={legacySystemSchema} />
   <BreadcrumbSchema items={[
    { name: 'Home', url: 'https://decodedops.co.uk/' },
    { name: 'Problems', url: 'https://decodedops.co.uk/problems' },
    { name: 'Legacy system', url: 'https://decodedops.co.uk/problems/legacy-system' },
   ]} />
   {problemVideos['legacy-system'] && (
    <VideoSchema
     name={problemVideos['legacy-system'].title}
     description={problemVideos['legacy-system'].closeLine}
     youtubeId={problemVideos['legacy-system'].youtubeId}
     uploadDate={problemVideos['legacy-system'].uploadDate}
     durationSec={problemVideos['legacy-system'].durationSec}
    />
   )}

   {/* ── 1 · HERO ──────────────────────────────────────────────────────── */}
   <section className="g-off">
    <div className="wrap hero-split">
     <div>
      <span className="eyebrow">The problem</span>
      <h1>The platform you bought ten years ago wasn&apos;t built for decoration.</h1>
      <p className="lede">Generic ERP and stock systems are built for businesses that buy and sell the
       same thing they hold in the warehouse. Decoration doesn&apos;t work like that. A blank
       garment becomes a different, finished product the moment it&apos;s printed or embroidered, and
       most platforms have no clean way to model that.</p>
      <div className="hero-cta">
       <Link className="btn btn--primary" href="/contact">Book a free 60 minute call</Link>
      </div>
     </div>
     <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sx a969" data-od-id="hero-evidence" data-motion data-no="DO-ART-969" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-969. A tractor-feed printout of an old item maintenance screen over a photograph of an embroidery machine. It holds an item code, a description, a supplier and a unit of sale, but decoration method and artwork reference both read field not available, and a finished item made from a blank reads not supported. A sticky note says: decoration, see the spreadsheet on the studio PC. Built to buy and sell, not to decorate.">
  <div class="d17-ph"><img src="/images/d17/problems/thread-spools-2195b5.webp" alt="" width="1000" height="889"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Legacy platform</span><span>Bought ten years ago</span></div>
  <div class="stage" aria-hidden="true">
    <div class="lp m-drop" style="animation-delay:.1s">
      <div class="hd"><span>ITEM MAINTENANCE</span><span>SCR 14</span></div>
      <div class="row"><span>ITEM CODE</span><span>PLO-NVY-M</span></div>
      <div class="row"><span>DESCRIPTION</span><span>POLO SHIRT NAVY M</span></div>
      <div class="row"><span>SUPPLIER</span><span>SUPPLIER A</span></div>
      <div class="row"><span>UNIT OF SALE</span><span>EACH</span></div>
      <div class="row"><span>STOCK LOCATION</span><span>MAIN</span></div>
      <div class="row no"><span>DECORATION</span><span>FIELD NOT AVAILABLE</span></div>
      <div class="row no"><span>ARTWORK REF</span><span>FIELD NOT AVAILABLE</span></div>
      <div class="row no"><span>MADE FROM BLANK</span><span>NOT SUPPORTED</span></div>
      <div class="row"><span>F3=EXIT</span><span>F12=CANCEL</span></div>
    </div>
    <div class="sticky m-drop" style="animation-delay:.7s"><small>The workaround</small>Decoration? See the spreadsheet on the studio PC.</div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">Built to buy and sell. <em>Not to decorate.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-969 · Rev 01</span>
  </div>
</figure>` }} />
    </div>
   </section>

   {/* ── 2 · SYMPTOMS ──────────────────────────────────────────────────── */}
   <section className="g-tint">
    <div className="wrap">
     <span className="eyebrow">The signs</span>
     <h2>Seven signs the platform wasn&apos;t built for this.</h2>
     <p className="lede" style={{ marginTop: 16 }}>If you recognise three or more of these, the problem
      isn&apos;t your team working around the system. It&apos;s the system never having been designed for
      decoration in the first place.</p>

     <ul className="symptoms">
      <li>Decoration BOMs are tracked in a spreadsheet because the platform can&apos;t model them</li>
      <li>Blank and finished stock get confused, or tracked as if they&apos;re the same item</li>
      <li>Supplier artwork lives in email threads, not attached to the order it belongs to</li>
      <li>Print, embroidery, heat-press: every method needs its own workaround</li>
      <li>The vendor&apos;s support team asks what &ldquo;decoration BOM&rdquo; even means</li>
      <li>Customisation costs have exceeded what the licence was supposed to save you</li>
      <li>You&apos;ve quietly accepted this is &ldquo;just how the software is&rdquo; rather than fixable</li>
     </ul>
    </div>
   </section>

   {problemVideos['legacy-system'] && (
    <section className="g-off" data-od-id="video-embed">
     <div className="wrap">
      <VideoEmbed
       youtubeId={problemVideos['legacy-system'].youtubeId}
       title={problemVideos['legacy-system'].title}
       closeLine={problemVideos['legacy-system'].closeLine}
       app={problemVideos['legacy-system'].app}
       durationSec={problemVideos['legacy-system'].durationSec}
       playlistUrl={problemVideos['legacy-system'].playlistUrl}
      />
     </div>
    </section>
   )}

   {/* ── 3 · THE LAYER STACK · archetype 4 ───────────────────────────────── */}
   <section className="g-white">
    <div className="wrap">
     <span className="eyebrow">The fix</span>
     <h2>Keep the platform. Add the layer it&apos;s missing.</h2>
     <p className="lede" style={{ marginTop: 16 }}>Ripping out an ERP you&apos;ve already paid for and trained
      staff on is rarely the right answer. Read bottom-up: the platform stays exactly where it
      is, and the missing layer sits on top of it, not instead of it.</p>

     <div className="layer-stack">
      <div className="layer-tier layer-tier--base">
       <div><h3>Your platform, unchanged</h3><p>Whichever one you run stays as the system of
        record for orders and accounts</p></div>
       <span className="no">Layer 1</span>
      </div>
      <div className="layer-tier layer-tier--mid">
       <div><h3>Decoded Works</h3><p>Decoration BOMs, blank-to-finished mapping, and
        supplier artwork, modelled properly for the first time</p></div>
       <span className="no">Layer 2</span>
      </div>
      <div className="layer-tier layer-tier--top">
       <div><h3>Website, marketplaces, trade portal</h3><p>Every channel reading the same
        decoration-aware catalogue, instead of a generic one</p></div>
       <span className="no">Layer 3</span>
      </div>
     </div>
    </div>
   </section>

   {/* ── INLINE ARTWORK · DO-ART-719 ──────────────────────────────────── */}
   <section className="g-navy">
    <div className="wrap">
     <span className="eyebrow">The missing layer · DO-ART-719</span>
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
     <h2>No rip-and-replace. Just the layer that was missing.</h2>

     <div className="answer">
      <p>I don&apos;t start by asking which new platform to buy. I start with what your current
       platform already does well, then build the layer that fills the gap: decoration BOMs,
       artwork, blank-to-finished stock. <b>Without touching what already works.</b></p>
      <p>A Clarity Audit tells you honestly whether that&apos;s a small layer, a bigger one, or
       whether the platform genuinely needs to change. Rarely the last one.</p>
     </div>
    </div>
   </section>

   {/* ── 5 · CTA STRIP ──────────────────────────────────────────────────── */}
   <section className="g-white cta-strip">
    <div className="wrap" style={{ maxWidth: 760 }}>
     <h2>Find out what layer your platform is actually missing.</h2>
     <p className="lede">A Clarity Audit scopes the gap and prices the fix, before anything gets
      ripped out.</p>
     <div className="hero-cta">
      <Link className="btn btn--primary" href="/contact">Book a free 60 minute call</Link>
      <Link className="btn-ghost btn-arrow" href="/apps/works">See Works</Link>
     </div>
    </div>
    </section>
    <D17Motion />
   </>
  );
}
