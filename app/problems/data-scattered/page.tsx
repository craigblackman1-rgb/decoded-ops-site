import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { VideoEmbed } from '@/components/VideoEmbed';
import { VideoSchema } from '@/components/VideoSchema';
import { problemVideos } from '@/data/problem-videos';
import '@/app/d17-global.css';
import '@/app/d17-problems.css';
import '@/app/d17-apps-cases.css';
import { a942 } from '@/lib/d17-figures/a942';
import { D17Motion } from '@/components/D17Motion';

export const metadata: Metadata = {
 title: 'Product Data Management for Decoration | Decoded Ops',
 description: 'Product data management for a decoration business means one clean record, not six that disagree. I bring supplier feeds and the ERP into line.',
 alternates: { canonical: '/problems/data-scattered' },
 openGraph: {
  title: 'Product Data Management for Decoration | Decoded Ops',
  description: 'Product data management for a decoration business means one clean record, not six that disagree. I bring supplier feeds and the ERP into line.',
  url: 'https://decodedops.co.uk/problems/data-scattered',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: 'Product Data Management for Decoration | Decoded Ops',
  description: 'Product data management for a decoration business means one clean record, not six that disagree. I bring supplier feeds and the ERP into line.',
 },
};

const dataScatteredSchema = {
 '@context': 'https://schema.org',
 '@graph': [
  {
   '@type': 'FAQPage',
   mainEntity: [
    {
     '@type': 'Question',
     name: 'Why is my product data different in every system?',
     acceptedAnswer: { '@type': 'Answer', text: 'Every supplier has their own format, each system was added to solve one problem, and reconciling by hand becomes the job. Nobody standardises to you, so you end up standardising to nobody.' },
    },
    {
     '@type': 'Question',
     name: 'How much does scattered data cost a print or embroidery business?',
     acceptedAnswer: { '@type': 'Answer', text: 'Someone spends real hours every week manually checking one system against another. That time is the actual cost of the scatter, and it rarely gets counted as one.' },
    },
    {
     '@type': 'Question',
     name: 'What does a data clean-up involve before any build starts?',
     acceptedAnswer: { '@type': 'Answer', text: 'A Clarity Audit comes first: a written assessment of exactly which feeds you have, in what state, and what a fix actually requires, before any build is even considered.' },
    },
    {
     '@type': 'Question',
     name: 'How do I get all my supplier feeds into one place?',
     acceptedAnswer: { '@type': 'Answer', text: 'Works ingests every supplier feed in whatever format it arrives, cleans and matches it against what you already sell. One source of truth, pushed out to every channel.' },
    },
    {
     '@type': 'Question',
     name: 'What is the first step to fix scattered product data?',
     acceptedAnswer: { '@type': 'Answer', text: 'A Clarity Audit: a day on site that produces a written map of exactly where the disconnect is, before any build is even considered.' },
    },
   ],
  },
 ],
};

export default function DataScatteredPage() {
 return (
  <>
   <JsonLd data={dataScatteredSchema} />
   <BreadcrumbSchema items={[
    { name: 'Home', url: 'https://decodedops.co.uk/' },
    { name: 'Problems', url: 'https://decodedops.co.uk/problems' },
    { name: 'Data scattered', url: 'https://decodedops.co.uk/problems/data-scattered' },
   ]} />
   {problemVideos['data-scattered'] && (
    <VideoSchema
     name={problemVideos['data-scattered'].title}
     description={problemVideos['data-scattered'].closeLine}
     youtubeId={problemVideos['data-scattered'].youtubeId}
     uploadDate={problemVideos['data-scattered'].uploadDate}
     durationSec={problemVideos['data-scattered'].durationSec}
    />
   )}

   {/* ── 1 · HERO ──────────────────────────────────────────────────────── */}
   <section className="g-off">
    <div className="wrap hero-split">
     <div>
      <span className="eyebrow">The problem</span>
      <h1>Your supplier data is in six places, and none of them agree.</h1>
      <p className="lede">Ask what stock you actually hold of a specific SKU and you&apos;ll get six
       different answers, depending who you ask and which spreadsheet, feed, or screen they&apos;re
       looking at. None of them are lying. They&apos;re just all out of date in a different way, which is a product data management problem.</p>
      <div className="hero-cta">
       <Link className="btn btn--primary" href="/contact">Book a free 60 minute call</Link>
      </div>
     </div>
     <div dangerouslySetInnerHTML={{ __html: `
<figure class="d17 sx a964" data-od-id="hero-evidence" data-motion data-no="DO-ART-964" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-964. A graded photograph of one folded polo shirt with six tags pinned round it, one for each place the data lives. Supplier feed: 40 in stock. Spreadsheet: 12. ERP: 0. Website: in stock. Warehouse count: 7. The one who knows: ask me. One polo, six answers, and none of them agree.">
  <div class="d17-ph"><img src="/images/d17/problems/prod-polo-5947fe.webp" alt="" width="900" height="905"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Scattered data</span><span>Six places, one product</span></div>
  <div class="stage" aria-hidden="true">
    <div class="sx-tag m-pop" style="left:4%;top:14%;animation-delay:.1s"><small>01 · Supplier feed</small><span class="v">40 in stock</span></div>
    <div class="sx-tag m-pop" style="right:4%;top:14%;animation-delay:.25s"><small>04 · Website</small><span class="v v--t">In stock</span></div>
    <div class="sx-tag m-pop" style="left:4%;top:38%;animation-delay:.4s"><small>02 · Spreadsheet</small><span class="v">12</span></div>
    <div class="sx-tag m-pop" style="right:4%;top:38%;animation-delay:.55s"><small>05 · Warehouse count</small><span class="v">7</span></div>
    <div class="sx-tag sx-tag--a m-pop" style="left:4%;top:62%;animation-delay:.7s"><small>03 · ERP</small><span class="v">0</span></div>
    <div class="sx-tag m-pop" style="right:4%;top:62%;animation-delay:.85s"><small>06 · The one who knows</small><span class="v v--t">"Ask me"</span></div>
    <span class="sku m-pop" style="top:88%;animation-delay:1.1s">Polo · stone · M · one SKU</span>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">One polo. <em>Six answers, and none of them agree.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-964 · Rev 01</span>
  </div>
</figure>` }} />
    </div>
   </section>

   {/* ── 2 · THE SIX SOURCES · disconnected systems ─────────────────────── */}
   <section className="g-tint">
    <div className="wrap">
     <span className="eyebrow">The signs</span>
     <h2>Six places, six different answers.</h2>
     <p className="lede" style={{ marginTop: 16 }}>Every one of these is trying to describe the same
      catalogue. None of them talk to each other, so none of them are right for long.</p>

     <div className="sources">
      <article className="source">
       <h3>Supplier feeds</h3>
       <p>Updated on the supplier&apos;s schedule, not yours, stock and pricing already stale by the
        time it lands.</p>
      </article>
      <article className="source">
       <h3>Spreadsheets</h3>
       <p>Whoever edited it last wins. No audit trail, no way to know which version is current.</p>
      </article>
      <article className="source">
       <h3>The ERP</h3>
       <p>Only as accurate as the last manual re-key, and re-keying six sources by hand doesn&apos;t
        happen consistently.</p>
      </article>
      <article className="source">
       <h3>The website</h3>
       <p>Shows what was true when someone last remembered to update it, not what&apos;s true right
        now.</p>
      </article>
      <article className="source">
       <h3>The warehouse floor</h3>
       <p>The only place stock is actually counted by hand, and the last place any system asks.</p>
      </article>
      <article className="source">
       <h3>Someone&apos;s private list</h3>
       <p>The one person who &ldquo;just knows&rdquo; what&apos;s really in stock. It works until they&apos;re on
        holiday.</p>
      </article>
     </div>
    </div>
   </section>

   {/* ── 3 · CAUSES ─────────────────────────────────────────────────────── */}
   <section className="g-off">
    <div className="wrap">
     <span className="eyebrow">Why this happens</span>
     <h2>The data was never supposed to have one home.</h2>

     <div className="grid grid--2" style={{ marginTop: 34 }}>
      <article className="card cause">
       <span className="n">01</span>
       <h3>Every system was added for its own job</h3>
       <p>The ERP for orders, the spreadsheet for the one supplier who doesn&apos;t do feeds, the
        website plugin for the shop, each one solved its own problem and nobody planned how
        they&apos;d stay in sync.</p>
      </article>
      <article className="card cause">
       <span className="n">02</span>
       <h3>Syncing is a manual job nobody owns</h3>
       <p>Someone has to notice a mismatch and fix it by hand. When they&apos;re busy, which is
        always, the mismatch just sits there.</p>
      </article>
      <article className="card cause">
       <span className="n">03</span>
       <h3>No consistent SKU across sources</h3>
       <p>The same product has a different code in the supplier feed, the ERP, and the website.
        Matching them is treated as a one-off project instead of an ongoing job.</p>
      </article>
      <article className="card cause">
       <span className="n">04</span>
       <h3>Nobody fully trusts any of them</h3>
       <p>So everyone double-checks against their own private version, which creates a seventh
        source of truth, and a seventh version of wrong.</p>
      </article>
     </div>
    </div>
   </section>

   {problemVideos['data-scattered'] && (
    <section className="g-off" data-od-id="video-embed">
     <div className="wrap">
      <VideoEmbed
       youtubeId={problemVideos['data-scattered'].youtubeId}
       title={problemVideos['data-scattered'].title}
       closeLine={problemVideos['data-scattered'].closeLine}
       app={problemVideos['data-scattered'].app}
       durationSec={problemVideos['data-scattered'].durationSec}
       playlistUrl={problemVideos['data-scattered'].playlistUrl}
      />
     </div>
    </section>
   )}

   {/* ── INLINE ARTWORK · DO-ART-942 ──────────────────────────────────── */}
   <section className="g-navy">
    <div className="wrap">
     <span className="eyebrow">One catalogue · DO-ART-942</span>
     <div dangerouslySetInnerHTML={{ __html: a942 }} />
    </div>
   </section>

   {/* ── 4 · HOW I HELP ─────────────────────────────────────────────────── */}
   <section className="g-navy">
    <div className="wrap">
     <span className="eyebrow eyebrow--amber">How I help</span>
     <h2>One matched catalogue, and every channel reads the same data.</h2>

     <div className="answer">
      <p>For product data management, Works takes every supplier feed in, matches it against your existing
       catalogue, and becomes <b>the single source every other system reads from</b>: the website,
       the warehouse.</p>
       <p>In one deployment, 317,812 products came in from supplier feeds and 154,518 were matched to a supplier automatically, before anyone had to touch them. Same principle,
        any supplier mix.</p>
     </div>
    </div>
   </section>

   {/* ── 5 · CTA STRIP ──────────────────────────────────────────────────── */}
   <section className="g-white cta-strip">
    <div className="wrap" style={{ maxWidth: 760 }}>
     <h2>Find out what your six sources actually disagree about.</h2>
     <p className="lede">A Clarity Audit maps every source you&apos;re running today and what it would
      take to get them all reading from the same data.</p>
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
