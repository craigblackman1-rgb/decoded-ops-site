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
 title: 'Inventory blind spots: Decoded Ops',
 description: "Ordering stock you already have, and running out of stock you didn't know you needed. Why inventory blindness happens in decorated goods, and how Decoded Works builds one real-time stock picture from your supplier feeds.",
 alternates: { canonical: '/problems/inventory-blind' },
 openGraph: {
  title: 'Inventory blind spots: Decoded Ops',
  description: "Ordering stock you already have, and running out of stock you didn't know you needed. Why inventory blindness happens in decorated goods, and how Decoded Works builds one real-time stock picture from your supplier feeds.",
  url: 'https://decodedops.co.uk/problems/inventory-blind',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: 'Inventory blind spots: Decoded Ops',
  description: "Ordering stock you already have, and running out of stock you didn't know you needed. Why inventory blindness happens in decorated goods, and how Decoded Works builds one real-time stock picture from your supplier feeds.",
 },
};

const inventoryBlindSchema = {
 '@context': 'https://schema.org',
 '@graph': [
  {
   '@type': 'FAQPage',
   mainEntity: [
    {
     '@type': 'Question',
     name: 'Why am I ordering stock I already have?',
     acceptedAnswer: { '@type': 'Answer', text: 'Supplier feeds tell you what is available to order, not what you are actually holding, what is committed to open orders, or what is about to run out. Two separate pictures, and most businesses make buying decisions on the wrong one.' },
    },
    {
     '@type': 'Question',
     name: 'How do I get a single inventory picture across supplier feeds and stock?',
     acceptedAnswer: { '@type': 'Answer', text: 'Works reconciles supplier feeds and your real stock position continuously, not on whatever schedule someone remembers to run a report. What is on the shelf, what is committed, and what is actually available, in one number.' },
    },
    {
     '@type': 'Question',
     name: 'What does a stock and feed assessment actually produce?',
     acceptedAnswer: { '@type': 'Answer', text: 'A Clarity Audit produces a written map of your current stock and feed setup, and exactly what a fix would involve, before anything is even considered.' },
    },
    {
     '@type': 'Question',
     name: 'Why do decorated goods cause unique inventory tracking problems?',
     acceptedAnswer: { '@type': 'Answer', text: 'A blank and its decorated version get tracked as if they are the same item, when a stockout on either half means the finished product cannot ship. Most generic systems were never built to handle this.' },
    },
    {
     '@type': 'Question',
     name: 'How do I stop surprise stockouts in my print or embroidery business?',
     acceptedAnswer: { '@type': 'Answer', text: 'Committed stock against open orders needs to be subtracted from what looks available, in real time, not whenever someone remembers to check. The first step is a written assessment of your current stock and feed setup.' },
    },
   ],
  },
 ],
};

export default function InventoryBlindPage() {
 return (
  <>
   <JsonLd data={inventoryBlindSchema} />
   <BreadcrumbSchema items={[
    { name: 'Home', url: 'https://decodedops.co.uk/' },
    { name: 'Problems', url: 'https://decodedops.co.uk/problems' },
    { name: 'Inventory blind', url: 'https://decodedops.co.uk/problems/inventory-blind' },
   ]} />
   {problemVideos['inventory-blind'] && (
    <VideoSchema
     name={problemVideos['inventory-blind'].title}
     description={problemVideos['inventory-blind'].closeLine}
     youtubeId={problemVideos['inventory-blind'].youtubeId}
     uploadDate={problemVideos['inventory-blind'].uploadDate}
     durationSec={problemVideos['inventory-blind'].durationSec}
    />
   )}

   {/* ── 1 · HERO ──────────────────────────────────────────────────────── */}
   <section className="g-off">
    <div className="wrap hero-split">
     <div>
      <span className="eyebrow">The problem</span>
      <h1>You&apos;re ordering stock you already have, and running out of stock you didn&apos;t know you
       needed.</h1>
      <p className="lede">Inventory blindness isn&apos;t a stocktaking problem. It&apos;s a data problem:
       supplier feeds, the ERP, and the warehouse floor all showing a different number for the
       same SKU, so nobody&apos;s confident enough in any of them to order against it.</p>
      <div className="hero-cta">
       <Link className="btn btn--primary" href="/contact">Book a free 60 minute call</Link>
      </div>
     </div>
     <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sx px ph-fade a968" data-od-id="hero-evidence" data-motion data-no="DO-ART-968" data-rev="01" data-tx="screen"
        aria-label="Artwork DO-ART-968. A stock screen for one polo in four sizes, over a photograph of stacked cartons, showing what the supplier says, what the system says and what is on the shelf. Size M reads zero on the system while 24 sit in bin A-03, so 48 more are already on order. The number on screen isn't the number on the shelf.">
  <div class="d17-ph"><img src="/images/d17/problems/cat-packaging-48f149.jpg" alt="" width="900" height="950"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Stock picture</span><span>Screen against shelf</span></div>
  <div class="win" aria-hidden="true">
    <div class="win-bar"><span class="dots"><i></i><i></i><i></i></span><span class="crumb"><span>Stock ›</span> Polo, navy</span><span class="pill">3 SOURCES</span></div>
    <div class="win-flat">
      <h5>Polo, navy</h5>
      <p class="s">What the supplier says, what the system says, what is on the shelf</p>
      <table class="tbl">
        <tr><th>Size</th><th class="num">Supplier</th><th class="num">System</th><th class="num">Shelf</th><th></th></tr>
        <tr class="m-fade" style="animation-delay:.2s"><td>S</td><td class="num">40</td><td class="num">18</td><td class="num">18</td><td class="m">matches</td></tr>
        <tr class="hit m-fade" style="animation-delay:.4s"><td>M</td><td class="num">40</td><td class="num">0</td><td class="num">24</td><td><span class="chip chip--a">Reordered</span></td></tr>
        <tr class="m-fade" style="animation-delay:.6s"><td>L</td><td class="num">12</td><td class="num">9</td><td class="num">9</td><td class="m">matches</td></tr>
        <tr class="m-fade" style="animation-delay:.8s"><td>XL</td><td class="num">0</td><td class="num">6</td><td class="num">2</td><td><span class="chip chip--o">Oversold</span></td></tr>
      </table>
      <div class="shelf m-rise" style="animation-delay:1.2s">
        <img src="/images/d17/problems/cat-workwear-401e08.jpg" alt="">
        <p><span>Bin A-03 · on the shelf</span>24 in the bin. The system says none, so 48 more are already on order.</p>
      </div>
    </div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">The number on screen <em>isn't the number on the shelf.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-968 · Rev 01</span>
  </div>
</figure>` }} />
    </div>
   </section>

   {/* ── 2 · SYMPTOMS ──────────────────────────────────────────────────── */}
   <section className="g-tint">
    <div className="wrap">
     <span className="eyebrow">The signs</span>
     <h2>Seven signs you&apos;re flying blind on stock.</h2>
     <p className="lede" style={{ marginTop: 16 }}>If you recognise three or more of these, the fix isn&apos;t
      a bigger stocktake. It&apos;s one stock picture everyone actually trusts.</p>

     <ul className="symptoms">
      <li>You&apos;ve placed a repeat order for stock that was already on the shelf</li>
      <li>You&apos;ve run out of a line with no warning, mid production run</li>
      <li>The website says &ldquo;in stock&rdquo; on something the warehouse sold out of days ago</li>
      <li>Nobody trusts the ERP&apos;s stock figure enough to order against it alone</li>
      <li>Someone does a manual stock check before every big order, just in case</li>
      <li>Safety stock is a guess, not a number worked out from real demand</li>
      <li>A rush order gets promised before anyone&apos;s actually checked what&apos;s available</li>
     </ul>
    </div>
   </section>

   {problemVideos['inventory-blind'] && (
    <section className="g-off" data-od-id="video-embed">
     <div className="wrap">
      <VideoEmbed
       youtubeId={problemVideos['inventory-blind'].youtubeId}
       title={problemVideos['inventory-blind'].title}
       closeLine={problemVideos['inventory-blind'].closeLine}
       app={problemVideos['inventory-blind'].app}
       durationSec={problemVideos['inventory-blind'].durationSec}
       playlistUrl={problemVideos['inventory-blind'].playlistUrl}
      />
     </div>
    </section>
   )}

   {/* ── 3 · THE STOCK PICTURE · solution ───────────────────────────────── */}
   <section className="g-white">
    <div className="wrap">
     <span className="eyebrow">The fix</span>
     <h2>One real-time stock picture, not a guess reconciled weekly.</h2>
     <p className="lede" style={{ marginTop: 16 }}>Decoded Works combines what your suppliers say
      they&apos;ve got with what&apos;s actually moved through your own warehouse, so the number on screen
      is the number on the shelf.</p>

     <div className="picture">
      <article className="card">
       <h3>Supplier feeds</h3>
       <p>What&apos;s available upstream, refreshed on a schedule that matches how the supplier
        actually updates it.</p>
      </article>
      <span className="arrow" aria-hidden="true">+</span>
      <article className="card">
       <h3>Real warehouse movement</h3>
       <p>What&apos;s physically come in and gone out, picked, packed, and despatched.</p>
      </article>
     </div>
     <div className="picture" style={{ marginTop: 20 }}>
      <article className="card card--result" style={{ gridColumn: '1/-1' }}>
       <h3>= one stock number, everywhere</h3>
       <p>The ERP, the website, and the person taking the order all read the same figure, updated
        as it changes, not reconciled once a week.</p>
      </article>
     </div>
    </div>
   </section>

   {/* ── INLINE ARTWORK · DO-ART-918 ──────────────────────────────────── */}
   <section className="g-navy">
    <div className="wrap">
     <span className="eyebrow">Evidence · DO-ART-918</span>
     <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 a918" data-od-id="plate-evidence" data-motion data-no="DO-ART-918" data-rev="01" data-tx="photo"
        aria-label="Evidence piece DO-ART-918. A sports and teamwear client on Works, live in September 2026: 17 supplier feeds, 27,778 supplier products, 236,056 variants, 952 products live on their website, and 100 per cent of stock with a bin location.">
  <div class="d17-ph"><img src="/images/d17/problems/cat-workwear-401e08.jpg" alt="" width="900" height="596"></div>
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
     <h2>Stock you can order against, not stock you have to double-check.</h2>

     <div className="answer">
      <p>I map where your stock picture actually breaks down: which feeds, which manual steps,
       which system nobody quite trusts. Then I build the Works layer that fixes it.</p>
      <p><b>No more guesswork stock checks before a big order.</b> The number on screen becomes
       the number worth ordering against.</p>
     </div>
    </div>
   </section>

   {/* ── 5 · CTA STRIP ──────────────────────────────────────────────────── */}
   <section className="g-white cta-strip">
    <div className="wrap" style={{ maxWidth: 760 }}>
     <h2>Stop guessing what&apos;s actually on the shelf.</h2>
     <p className="lede">A Clarity Audit maps your current stock picture and what it would take to
      make it real-time.</p>
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
