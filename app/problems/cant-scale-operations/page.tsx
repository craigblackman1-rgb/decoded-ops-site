import type { Metadata } from 'next';
import { ProblemPageDS } from '@/components/ProblemPageDS';
import { CantScaleSchematic } from '@/components/schematics/problems/CantScaleSchematic';
import { JsonLd } from '@/components/JsonLd';
import { problemRouting } from '@/data/problem-routing';
import { problemVideos } from '@/data/problem-videos';
import '@/app/d17-global.css';
import '@/app/d17-problems.css';
import { D17Motion } from '@/components/D17Motion';

export const metadata: Metadata = {
 title: 'Business Growing, Operations Not Scaling | Decoded Ops',
 description: "When your business is growing and operations are not scaling with it, growth starts to feel harder than it did at half the size. Here's the fix.",
 alternates: { canonical: '/problems/cant-scale-operations' },
 openGraph: {
  title: 'Business Growing, Operations Not Scaling | Decoded Ops',
  description: "When your business is growing and operations are not scaling with it, growth starts to feel harder than it did at half the size. Here's the fix.",
  url: 'https://decodedops.co.uk/problems/cant-scale-operations',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: 'Business Growing, Operations Not Scaling | Decoded Ops',
  description: "When your business is growing and operations are not scaling with it, growth starts to feel harder than it did at half the size. Here's the fix.",
 },
};

const cantScaleSchema = {
 '@context': 'https://schema.org',
 '@graph': [
  {
   '@type': 'WebPage',
   '@id': 'https://decodedops.co.uk/problems/cant-scale-operations',
   url: 'https://decodedops.co.uk/problems/cant-scale-operations',
   name: "Your Business Is Growing. Your Operations Aren't Keeping Up.: Decoded Ops",
   description: "Growth shouldn't feel harder than it did at half the size. I help print, embroidery, and decoration businesses build the operational foundations to scale properly. UK-wide.",
   isPartOf: { '@id': 'https://decodedops.co.uk/#organization' },
  },
  {
   '@type': 'FAQPage',
   mainEntity: [
    {
     '@type': 'Question',
     name: 'Is Decoded Ops a technology consultancy or an operations consultancy?',
     acceptedAnswer: {
      '@type': 'Answer',
      text: "Both. Decoded Ops covers the full picture, processes, people, and technology. The Clarity Audit identifies whether the scaling problem is operational (undocumented processes, unclear ownership, inconsistent quality controls) or technological (systems that can't handle the volume, unreliable data), usually both.",
     },
    },
    {
     '@type': 'Question',
     name: 'My business is already profitable. Do I still need an operations review?',
     acceptedAnswer: {
      '@type': 'Answer',
      text: "Profitability at your current size does not guarantee profitability at the next size. Businesses hit a ceiling when the operational model that got them here cannot scale to the next stage. The right time to build operational foundations is before they are needed.",
     },
    },
    {
     '@type': 'Question',
     name: 'Can you help with just one area of the operation rather than overhauling everything?',
     acceptedAnswer: {
      '@type': 'Answer',
      text: "Yes. The Clarity Audit gives a full picture, but recommendations are prioritised. You choose what to act on. Many businesses start with two or three targeted changes and see significant results before committing to anything larger.",
     },
    },
    {
     '@type': 'Question',
     name: 'How long does the Clarity Audit and implementation process take?',
     acceptedAnswer: {
      '@type': 'Answer',
      text: "The Clarity Audit takes one day on site, with a written report delivered within five working days. Quick wins can be implemented in days. A structured Deliver engagement typically runs over six to twelve weeks. Retained support is ongoing.",
     },
    },
    {
     '@type': 'Question',
     name: 'I have used consultants before and it did not help. Why would this be different?',
     acceptedAnswer: {
      '@type': 'Answer',
      text: "Most consultancy fails because it produces a report that sits on a shelf. Decoded Ops builds recommendations around what is actually implementable in your business, not a textbook solution. If implementation support is needed, the Deliver service provides structured project management to act on the findings.",
     },
    },
    {
     '@type': 'Question',
     name: 'Why does scaling a small business feel harder than growing it?',
      acceptedAnswer: { '@type': 'Answer', text: 'Because growth adds volume to systems and processes that were designed for a smaller operation. Every workaround, manual step, and undocumented process that was manageable at a smaller scale becomes a bottleneck as you grow. Scaling operations in a small business requires rebuilding the operational infrastructure before the volume overwhelms it, not after.' },
    },
    {
     '@type': 'Question',
     name: 'What are the signs that my operations are not keeping up with growth?',
     acceptedAnswer: { '@type': 'Answer', text: 'The most common signs: despatch lead times are creeping up despite no change in production capacity; the same operational bottlenecks keep reappearing; customer complaints are increasing proportionally faster than order volume; you are hiring but the output per person is falling; and the business owner is spending more time on operational firefighting than on the business itself.' },
    },
    {
     '@type': 'Question',
     name: 'How do I scale a print or decoration business operationally?',
     acceptedAnswer: { '@type': 'Answer', text: 'Start with an honest assessment of where the current bottlenecks are, not where they were six months ago, but where they are right now. Scaling operations in a print or decoration business typically involves three stages: documenting and stabilising current processes, connecting systems so information flows without manual intervention, and building the management visibility to make operational decisions on data rather than gut feel.' },
    },
   ],
  },
 ],
};

const scalingSteps = [
 { label: 'Small team', sub: 'Informal', },
 { label: 'Growing', sub: 'Stretched', alert: true },
 { label: 'Scaling', sub: 'Breaking', alert: true },
 { label: 'Foundation', sub: 'Built right' },
];

const heroArt963 = `<figure class="d17 sx px a963" data-od-id="hero-evidence" data-motion data-no="DO-ART-963" data-rev="01" data-tx="schematic"
        aria-label="Drawn plate DO-ART-963. Five stations on one line, order in, artwork, production, despatch and invoice. Above each, a stack of jobs waiting. A dashed rule marks what the process was built for. Production, where everything flows through one or two people, has the tallest stack and spills over the rule in amber. More orders, same process: the queue lands on one or two people.">
  <div class="q-grid" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Can't scale</span><span>Volume is where the cracks show</span></div>
  <svg class="q" viewBox="0 0 560 410" aria-hidden="true">
    <text class="t-m" x="26" y="44" style="font-size:15px">Order in to invoice out</text>
    <path class="ln-d" d="M20 204 H540"/>
    <text class="t-d" x="540" y="196" text-anchor="end" style="font-size:15px">what the process was built for</text>
      <rect class="qb m-rise" style="animation-delay:0.30s" x="36" y="284" width="48" height="16" rx="3"/>
      <rect class="qb m-rise" style="animation-delay:0.35s" x="36" y="265" width="48" height="16" rx="3"/>
      <rect class="qb m-rise" style="animation-delay:0.40s" x="146" y="284" width="48" height="16" rx="3"/>
      <rect class="qb m-rise" style="animation-delay:0.45s" x="146" y="265" width="48" height="16" rx="3"/>
      <rect class="qb m-rise" style="animation-delay:0.50s" x="146" y="246" width="48" height="16" rx="3"/>
      <rect class="qb m-rise" style="animation-delay:0.55s" x="146" y="227" width="48" height="16" rx="3"/>
      <rect class="qb m-rise" style="animation-delay:0.60s" x="256" y="284" width="48" height="16" rx="3"/>
      <rect class="qb m-rise" style="animation-delay:0.65s" x="256" y="265" width="48" height="16" rx="3"/>
      <rect class="qb m-rise" style="animation-delay:0.70s" x="256" y="246" width="48" height="16" rx="3"/>
      <rect class="qb m-rise" style="animation-delay:0.75s" x="256" y="227" width="48" height="16" rx="3"/>
      <rect class="qb m-rise" style="animation-delay:0.80s" x="256" y="208" width="48" height="16" rx="3"/>
      <rect class="qb-a m-rise" style="animation-delay:0.85s" x="256" y="189" width="48" height="16" rx="3"/>
      <rect class="qb-a m-rise" style="animation-delay:0.90s" x="256" y="170" width="48" height="16" rx="3"/>
      <rect class="qb-a m-rise" style="animation-delay:0.95s" x="256" y="151" width="48" height="16" rx="3"/>
      <rect class="qb-a m-rise" style="animation-delay:1.00s" x="256" y="132" width="48" height="16" rx="3" transform="rotate(-7 280 140)"/>
      <rect class="qb m-rise" style="animation-delay:1.05s" x="366" y="284" width="48" height="16" rx="3"/>
      <rect class="qb m-rise" style="animation-delay:1.10s" x="366" y="265" width="48" height="16" rx="3"/>
      <rect class="qb m-rise" style="animation-delay:1.15s" x="366" y="246" width="48" height="16" rx="3"/>
      <rect class="qb m-rise" style="animation-delay:1.20s" x="366" y="227" width="48" height="16" rx="3"/>
      <rect class="qb m-rise" style="animation-delay:1.25s" x="366" y="208" width="48" height="16" rx="3"/>
      <rect class="qb m-rise" style="animation-delay:1.30s" x="476" y="284" width="48" height="16" rx="3"/>
      <rect class="qb m-rise" style="animation-delay:1.35s" x="476" y="265" width="48" height="16" rx="3"/>
      <rect class="qb m-rise" style="animation-delay:1.40s" x="476" y="246" width="48" height="16" rx="3"/>
    <path class="ln" d="M40 318 H520" style="stroke-width:4"/>
    <circle cx="60" cy="318" r="10" class="f-w"/><circle cx="170" cy="318" r="10" class="f-w"/>
    <circle cx="280" cy="318" r="14" class="f-a"/><circle cx="390" cy="318" r="10" class="f-w"/><circle cx="500" cy="318" r="10" class="f-w"/>
    <g style="font-size:19px" text-anchor="middle">
      <text class="t" x="60" y="360">Order in</text><text class="t" x="170" y="360">Artwork</text>
      <text class="t t-a" x="280" y="360" style="font-weight:700">Production</text>
      <text class="t" x="390" y="360">Despatch</text><text class="t" x="500" y="360">Invoice</text>
    </g>
    <text class="t-d" x="280" y="386" text-anchor="middle" style="font-size:15px">through one or two people</text>
  </svg>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">More orders, same process. <em>The queue lands on one or two people.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-963 · Rev 01</span>
  </div>
</figure>`;

const inlineArt918 = `<figure class="d17 a918" data-od-id="plate-evidence" data-motion data-no="DO-ART-918" data-rev="01" data-tx="photo"
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
</figure>`;

export default function CantScaleOperationsPage() {
 return (
  <>
   <JsonLd data={cantScaleSchema} />
   <ProblemPageDS
    problem="Operations that can't keep up with growth"
    headline="Your business is growing. ||Your operations aren't scaling with it.||"
    intro="More orders. More staff. More pressure. But not more profit, and not more confidence that tomorrow will be better than today. That's an operations problem. Your systems and processes were built for half your current size, and now they're becoming the ceiling on your growth. I help businesses like yours build the operational foundations that let you grow without the chaos."
    heroGraphic={<CantScaleSchematic />}
    symptoms={[
     "You're taking on more work but making less profit per order",
     "Your senior people spend their days on admin that should sit further down the team",
     "Quality is inconsistent. It depends who did the job, not what the process says.",
     "Everything flows through one or two people, and if they're off, everything slows",
     "You've hired more staff but it hasn't made anything faster",
     "Month-end is a nightmare because nobody trusts the numbers",
     "You know something's wrong but can't pin down exactly where",
     "A new contract sounds exciting but you're not sure your operation could handle it",
    ]}
    causes={[
     {
      title: "The informal setup that worked at half the size doesn't scale",
       body: "When the team was small, everyone knew what was going on. As you grow, that breaks down, but the systems and habits don't change with it. The same processes that worked at half your current size start failing as the volume grows.",
     },
     {
      title: "Processes aren't written down and belong to individuals, not the business",
      body: "Key knowledge lives in the heads of key people. That was fine when the business was small. As it grows, those people become bottlenecks, and the business can only move as fast as they can. If they leave, the process leaves with them.",
     },
     {
      title: "Growth happened before the operational foundation was ready",
      body: "It's easy to take on new contracts, products, or markets without asking whether the operation is ready. The revenue looks good on paper. The margin doesn't, because the cost of a stretched operation hides in rework, mistakes, and overtime.",
     },
     {
      title: 'Business Growing, Operations Not Scaling | Decoded Ops',
      body: "People own their own department, but nobody owns the full run from order in to invoice out. Problems at the handoffs between teams are nobody's job to fix, so they stay and get worse.",
     },
    ]}
    howIHelp="I come on site and follow how work moves through your business, from the moment an order arrives to the moment it's invoiced and out the door. I map what's there, spot what's missing, and put a cost on it in time, margin, and risk. Within five days you get a written report with every finding and every fix prioritised. Quick wins are separated from bigger changes, so you know what to do this week and what to plan for. If you need help making the changes, I run a structured Deliver engagement to do the work with you. And if you're at a growth point and need ongoing operational leadership, there's a retained option: monthly support without the cost of a full-time hire."
   
   slug="cant-scale-operations"
   targetService={problemRouting['cant-scale-operations'].targetService}
   relatedProblems={problemRouting['cant-scale-operations'].relatedProblems}
   relatedReading={problemRouting['cant-scale-operations'].relatedReading}
   relatedSectors={problemRouting['cant-scale-operations'].relatedSectors}
   relatedResources={problemRouting['cant-scale-operations'].relatedResources}
   video={problemVideos['cant-scale-operations']}
   heroArt={heroArt963}
   inlineArt={inlineArt918}
  />
   <D17Motion />
  </>
 );
}
