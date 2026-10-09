import type { Metadata } from 'next';
import { ProblemPageDS } from '@/components/ProblemPageDS';
import { JsonLd } from '@/components/JsonLd';
import { problemRouting } from '@/data/problem-routing';
import { problemVideos } from '@/data/problem-videos';
import '@/app/d17-global.css';
import '@/app/d17-problems.css';
import '@/app/d17-resources.css';
import { D17Motion } from '@/components/D17Motion';

export const metadata: Metadata = {
 title: 'Quoting Software for Printers: Fix Slow Quotes | Decoded Ops',
 description: 'Quotes rebuilt from scratch every time? I find where setup charges, price breaks and margin leak, then fix quoting in print and embroidery.',
 alternates: { canonical: '/problems/quoting-takes-too-long' },
 openGraph: {
  title: 'Quoting Software for Printers: Fix Slow Quotes | Decoded Ops',
  description: 'Quotes rebuilt from scratch every time? I find where setup charges, price breaks and margin leak, then fix quoting in print and embroidery.',
  url: 'https://decodedops.co.uk/problems/quoting-takes-too-long',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: 'Quoting Software for Printers: Fix Slow Quotes | Decoded Ops',
  description: 'Quotes rebuilt from scratch every time? I find where setup charges, price breaks and margin leak, then fix quoting in print and embroidery.',
 },
};

const faqs = [
 {
  q: 'How should we price customer-supplied garments?',
  a: "Price the decoration on its own line, and add a handling charge for receiving, checking and storing the garments, set by your own costs. Agree in writing that you can't be held responsible for faults in the blanks, and allow for spoilage, because you can't replace a customer's garment at your own blank price. Ask for a small overage on the quantity so one misprint doesn't stop the order. If you price it as though you'd supplied the garment and just knock the blank cost off, the handling and the risk are still yours and the margin goes with them.",
 },
 {
  q: 'Should setup charges be on every order?',
  a: "Yes, and that includes repeats. A screen setup or a digitising charge pays for real work, either preparing screens or turning artwork into a stitch file. On a repeat, charge it if screens have been reclaimed or the design has to be reloaded, and waive or reduce it only as a recorded decision. Some businesses fold a small setup cost into the unit price on low-volume jobs. Whichever way you do it, decide the rule once and apply it every time.",
 },
 {
  q: 'How many price breaks should we have?',
  a: "As few as you can explain in a sentence. Most businesses end up with a handful of bands, where the price per item drops as the quantity goes up, and the first band starts at your minimum order quantity. Set each quantity break by your own costs, at the point where setup stops dominating the job and the production run gets more efficient. Too many bands invite haggling at the edges and slow the quote down. Use the same bands across product families unless a real cost difference says otherwise.",
 },
 {
  q: 'How do we speed up quoting?',
  a: "Write your pricing rules down once, then quote from them every time. That means a rate card for garments, per-position pricing for each decoration method, your setup and digitising charges, quantity breaks, and a rush or express surcharge for short turnaround. Once the rules exist, a spreadsheet template or quoting software for printers built around your own pricing can produce a price in minutes. Record the reason for any exception. That also lets you track quote to order conversion, so you can see which quotes win and which don't.",
 },
];

const quotingSchema = {
 '@context': 'https://schema.org',
 '@graph': [
  {
   '@type': 'FAQPage',
   mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
   })),
  },
 ],
};

const heroArt1014 = `<figure class="d17 sx a991 a1014" data-od-id="hero-evidence" data-motion data-no="DO-ART-1014" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-1014. Pricing rules written down once, over a graded photograph of bagged garments on racking with the bin labels blurred. A rate card cover for garments, positions, setup, quantity breaks and rush, and beside it a sheet of six pricing rules shown as an example: per-position pricing, setup charges and quantity breaks are applied differently today; customer-supplied garments, the reason a price was given and quote to order conversion have no record; every rule is written down on the rate card.">
  <div class="d17-ph"><img src="/images/d17/problems/hero-garment-racking-219356.webp" alt="" width="1600" height="900"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Pricing rules</span><span>Written down once</span></div>
  <div class="stage" aria-hidden="true">
    <div class="d17-doc cov-dark doc-ec m-drop" style="animation-delay:.05s">
      <span class="ref">Decoded Ops · rate card</span>
      <h4>A rate card everyone quotes from</h4>
      <p class="sub">Garments · positions · setup · quantity breaks · rush</p>
      <div class="lines"><i style="width:84%"></i><i style="width:70%"></i><i style="width:52%"></i></div>
    </div>
    <div class="d17-doc doc-vb m-drop" style="animation-delay:.35s">
      <span class="tab">EXAMPLE</span>
      <span class="ref">Pricing rules · example</span>
      <h4>Rules that aren't written down</h4>
      <table class="vb">
        <thead><tr><th>Rule</th><th>Today</th><th class="us">Rate card</th></tr></thead>
        <tbody>
          <tr><td>Per-position pricing</td><td><i class="p"></i></td><td><i class="y"></i></td></tr>
          <tr><td>Setup charges</td><td><i class="p"></i></td><td><i class="y"></i></td></tr>
          <tr><td>Quantity breaks</td><td><i class="p"></i></td><td><i class="y"></i></td></tr>
          <tr><td>Customer-supplied garments</td><td><i class="n"></i></td><td><i class="y"></i></td></tr>
          <tr><td>Why a price was given</td><td><i class="n"></i></td><td><i class="y"></i></td></tr>
          <tr><td>Quote to order conversion</td><td><i class="n"></i></td><td><i class="y"></i></td></tr>
        </tbody>
      </table>
      <p class="key"><span><i class="y"></i>Written down</span><span><i class="p"></i>Applied differently</span><span><i class="n"></i>No record</span></p>
    </div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">Write your pricing rules down once. <em>Then quote from them every time.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-1014 · Rev 01</span>
  </div>
</figure>`;

export default function QuotingTakesTooLongPage() {
 return (
  <>
   <JsonLd data={quotingSchema} />
   <ProblemPageDS
   problem="Slow, inconsistent quoting"
   headline="Every quote gets rebuilt from scratch. ||And margin leaks out of each one.||"
   intro="Quoting decorated goods should be quick, and it's where a lot of print and embroidery businesses lose margin without noticing. The garment, the positions, the setup charge, the quantity and the turnaround all get worked out again by hand, so the price depends on who's quoting and how busy they are. You end up with slow answers, prices that don't match from one customer to the next, and a quote to order conversion rate you can't explain."
   symptoms={[
    "Quotes are built in a spreadsheet by one person, and only they know how it works",
    "Setup charges and screen setup get forgotten on repeat orders",
    "Quantity breaks are applied differently depending on who's quoting",
    "Customer-supplied garments get priced as if you'd supplied them, with no handling charge",
    "There's no record of why a price was given, so nobody can defend it when the customer pushes back",
    "Slow turnaround loses jobs to whoever answers first, and you can't see what your quote to order conversion is",
   ]}
   causes={[
    { title: 'Every quote starts from a blank sheet', body: "Each job gets priced from scratch or from a copy of an old quote. Garment, positions, stitch count, colours and quantity are all worked out again by hand, which is slow and gives a different answer each time." },
    { title: 'The pricing rules live in someone\'s head', body: "Per-position pricing, the digitising charge, the minimum order quantity and the rush or express surcharge are all rules. Rules that aren't written down get applied differently by everyone who quotes." },
    { title: 'The costs behind the price are out of date', body: "Blank prices, thread, ink and labour move, and the quote sheet doesn't. Margin leaks quietly on jobs that looked fine when the price went out." },
    { title: 'Quotes and orders live in different places', body: "The quote sits in an email or a spreadsheet and the order sits in the system, with nothing linking the two. You can't see which quotes turned into orders, or why the others didn't." },
   ]}
   howIHelp="I start by sitting with whoever does the quoting and watching a few real quotes get built, from the enquiry to the price going out. I write down every rule being applied, including the ones nobody's ever said out loud, and check them against your actual costs so you can see where margin is leaking and which jobs are being under-priced. Then you get a plain list of what to fix: a rate card everyone quotes from, setup and digitising charges that always get added, and a way to record why each price was given. Some of that is a tidy-up of what you already have, and some of it may need a quoting tool built around how you price. I'll tell you which. It all starts with a Clarity Audit."

   slug="quoting-takes-too-long"
   targetService={problemRouting['quoting-takes-too-long'].targetService}
   relatedProblems={problemRouting['quoting-takes-too-long'].relatedProblems}
   relatedReading={problemRouting['quoting-takes-too-long'].relatedReading}
   relatedSectors={problemRouting['quoting-takes-too-long'].relatedSectors}
   relatedResources={problemRouting['quoting-takes-too-long'].relatedResources}
   video={problemVideos['quoting-takes-too-long']}
   heroArt={heroArt1014}
   beforeRelated={
    <section className="g-tint">
     <div className="wrap">
      <span className="eyebrow">Common questions</span>
      <h2>Quoting questions I get asked</h2>
      <div className="hair" />
      <div className="grid grid--2">
       {faqs.map((f, i) => (
        <article className="card" key={f.q}>
         <span className="kicker">{String(i + 1).padStart(2, '0')}</span>
         <h3>{f.q}</h3>
         <p>{f.a}</p>
        </article>
       ))}
      </div>
     </div>
    </section>
   }
  />
   <D17Motion />
  </>
 );
}
