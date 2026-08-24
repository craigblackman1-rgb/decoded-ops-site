import type { Metadata } from 'next';
import { ProblemPageDS } from '@/components/ProblemPageDS';
import { CantScaleSchematic } from '@/components/schematics/problems/CantScaleSchematic';
import { JsonLd } from '@/components/JsonLd';
import { problemRouting } from '@/data/problem-routing';
import { Plate } from '@/components/Plate';

export const metadata: Metadata = {
 title: "Your Business Is Growing. Your Operations Aren't Keeping Up. | Decoded Ops",
 description: "Growth shouldn't feel harder than it did at half the size. I help print, embroidery, and decoration businesses build the operational foundations to scale properly. UK-wide.",
 alternates: { canonical: '/problems/cant-scale-operations' },
 openGraph: {
  title: "Your Business Is Growing. Your Operations Aren't Keeping Up. | Decoded Ops",
  description: "Growth shouldn't feel harder than it did at half the size. I help print, embroidery, and decoration businesses build the operational foundations to scale properly. UK-wide.",
  url: 'https://decodedops.co.uk/problems/cant-scale-operations',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: "Your Business Is Growing. Your Operations Aren't Keeping Up. | Decoded Ops",
  description: "Growth shouldn't feel harder than it did at half the size. I help print, embroidery, and decoration businesses build the operational foundations to scale properly.",
 },
};

const cantScaleSchema = {
 '@context': 'https://schema.org',
 '@graph': [
  {
   '@type': 'WebPage',
   '@id': 'https://decodedops.co.uk/problems/cant-scale-operations',
   url: 'https://decodedops.co.uk/problems/cant-scale-operations',
   name: "Your Business Is Growing. Your Operations Aren't Keeping Up. | Decoded Ops",
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
     acceptedAnswer: { '@type': 'Answer', text: 'Because growth adds volume to systems and processes that were designed for a smaller operation. Every workaround, manual step, and undocumented process that was manageable at £500k becomes a bottleneck at £1m. Scaling operations in a small business requires rebuilding the operational infrastructure before the volume overwhelms it, not after.' },
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
      body: "When the team was small, everyone knew what was going on. As you grow, that breaks down, but the systems and habits don't change with it. The same processes that worked at £500k a year start failing at £1.5m.",
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
      title: 'No one owns the whole flow from order to invoice',
      body: "People own their own department, but nobody owns the full journey from order in to invoice out. Problems at the handoffs between teams are nobody's job to fix, so they stay and get worse.",
     },
    ]}
    howIHelp="I come on site and follow how work moves through your business, from the moment an order arrives to the moment it's invoiced and out the door. I map what's there, spot what's missing, and put a cost on it in time, margin, and risk. Within five days you get a written report with every finding and every fix prioritised. Quick wins are separated from bigger changes, so you know what to do this week and what to plan for. If you need help making the changes, I run a structured Deliver engagement to do the work with you. And if you're at a growth point and need ongoing operational leadership, there's a retained option: monthly support without the cost of a full-time hire."
   
   slug="cant-scale-operations"
   targetService={problemRouting['cant-scale-operations'].targetService}
   relatedProblems={problemRouting['cant-scale-operations'].relatedProblems}
   relatedReading={problemRouting['cant-scale-operations'].relatedReading}
  />
   {/* ── PLATE · DO-ART-404 ──────────────────────────────────────────── */}
   <section className="g-white" data-od-id="plate">
    <div className="wrap">
     <Plate tone="dark" no="DO-ART-404" title="Growth outruns the operation" rev="01" cls="DECODED OPS · ISSUED">
      <rect x="50" y="100" width="700" height="520" rx="12"
         fill="color-mix(in srgb, var(--do-amber) 8%, var(--do-prussian-blue))"
         stroke="color-mix(in srgb, var(--do-amber) 28%, transparent)" strokeWidth="1.5"/>
      <text x="80" y="150" fontFamily="var(--do-font-heading)" fontWeight="700"
         fontSize="22" fill="var(--do-amber)" letterSpacing="0.06em">NOW</text>
      <g fontFamily="var(--do-font-body)" fontSize="17" fill="color-mix(in srgb, var(--do-off-white) 78%, transparent)">
       <text x="80" y="200"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Orders processed at the speed of one person</tspan></text>
       <text x="80" y="250"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Production scheduling in your head</tspan></text>
       <text x="80" y="300"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Every decision still goes through you</tspan></text>
       <text x="80" y="350"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Growth feels like punishment</tspan></text>
      </g>

      <rect x="850" y="100" width="700" height="520" rx="12"
         fill="color-mix(in srgb, var(--do-cerulean) 8%, var(--do-prussian-blue))"
         stroke="color-mix(in srgb, var(--do-cerulean) 28%, transparent)" strokeWidth="1.5"/>
      <text x="880" y="150" fontFamily="var(--do-font-heading)" fontWeight="700"
         fontSize="22" fill="var(--do-cerulean)" letterSpacing="0.06em">AFTER</text>
      <g fontFamily="var(--do-font-body)" fontSize="17" fill="color-mix(in srgb, var(--do-off-white) 78%, transparent)">
       <text x="880" y="200"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Documented process scales independently</tspan></text>
       <text x="880" y="250"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">SOPs mean anyone can schedule production</tspan></text>
       <text x="880" y="300"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Decisions delegated with a written rulebook</tspan></text>
       <text x="880" y="350"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Growth is absorbable, not overwhelming</tspan></text>
      </g>

      <line x1="770" y1="320" x2="830" y2="320" stroke="var(--do-cerulean)" strokeWidth="2"/>
      <polygon points="828,316 840,320 828,324" fill="var(--do-amber)"/>
     </Plate>
    </div>
   </section>
  </>
 );
}
