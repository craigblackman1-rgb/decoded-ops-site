import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { VideoEmbed } from '@/components/VideoEmbed';
import { VideoSchema } from '@/components/VideoSchema';
import { problemVideos } from '@/data/problem-videos';
import { a999Solo } from '@/lib/d17-figures/a999';
import '@/app/d17-global.css';
import '@/app/d17-problems.css';
import '@/app/d17-resources.css';
import { D17Motion } from '@/components/D17Motion';

export const metadata: Metadata = {
 title: 'ERP for Small Business, Chosen Right | Decoded Ops',
  description: 'Choosing ERP for a small business means picking one that fits how it works, not how the demo looked. I show print and decoration firms how to evaluate it.',
  alternates: { canonical: '/problems/wrong-erp-software' },
  openGraph: {
   title: 'ERP for Small Business, Chosen Right | Decoded Ops',
   description: 'Choosing ERP for a small business means picking one that fits how it works, not how the demo looked. I show print and decoration firms how to evaluate it.',
   url: 'https://decodedops.co.uk/problems/wrong-erp-software',
   images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
   card: 'summary_large_image',
   title: 'ERP for Small Business, Chosen Right | Decoded Ops',
   description: 'Choosing ERP for a small business means picking one that fits how it works, not how the demo looked. I show print and decoration firms how to evaluate it.',
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
        aria-label="Artwork DO-ART-978. Documents over a photograph of a racking aisle. A vendor demo script sits on the left: a polished presentation showing perfect workflows and happy users. On the right, a real Tuesday morning: customisation costs spiralling, your team running workarounds, and the vendor telling you it's a configuration issue. The demo showed one thing. The operation is another.">
  <div class="d17-ph"><img src="/images/d17/problems/hero-racking-aisle-7d129e.webp" alt="" width="1600" height="900" style="object-position:50% 50%"></div>
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
      <p className="lede">Buying the wrong ERP for a small business is one of the most expensive mistakes you can make in
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
       <p>Setup, training, customisation, integration, ongoing support. The full cost of an ERP for a small business is
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

   {/* ── INLINE ARTWORK · DO-ART-999 ──────────────────────────────────── */}
   <section className="g-navy">
    <div className="wrap">
     <span className="eyebrow">The decision · DO-ART-999</span>
     <div dangerouslySetInnerHTML={{ __html: a999Solo }} />
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
