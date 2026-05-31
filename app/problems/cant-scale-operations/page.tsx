import type { Metadata } from 'next';
import { ProblemPage } from '@/components/ProblemPage';
import { WorkflowGraphic } from '@/components/graphics/WorkflowGraphic';
import { JsonLd } from '@/components/JsonLd';
import { problemRouting } from '@/data/problem-routing';

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
            text: "Both. Decoded Ops covers the full picture — processes, people, and technology. The Clarity Audit identifies whether the scaling problem is operational (undocumented processes, unclear ownership, inconsistent quality controls) or technological (systems that can't handle the volume, unreliable data) — usually both.",
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
            text: "Most consultancy fails because it produces a report that sits on a shelf. Decoded Ops builds recommendations around what is actually implementable in your business — not theoretical best practice. If implementation support is needed, the Deliver service provides structured project management to act on the findings.",
          },
        },
        {
          '@type': 'Question',
          name: 'Why does scaling a small business feel harder than growing it?',
          acceptedAnswer: { '@type': 'Answer', text: 'Because growth adds volume to systems and processes that were designed for a smaller operation. Every workaround, manual step, and undocumented process that was manageable at £500k becomes a bottleneck at £1m. Scaling operations in a small business requires rebuilding the operational infrastructure before the volume overwhelms it — not after.' },
        },
        {
          '@type': 'Question',
          name: 'What are the signs that my operations are not keeping up with growth?',
          acceptedAnswer: { '@type': 'Answer', text: 'The most common signs: despatch lead times are creeping up despite no change in production capacity; the same operational bottlenecks keep reappearing; customer complaints are increasing proportionally faster than order volume; you are hiring but the output per person is falling; and the business owner is spending more time on operational firefighting than on the business itself.' },
        },
        {
          '@type': 'Question',
          name: 'How do I scale a print or decoration business operationally?',
          acceptedAnswer: { '@type': 'Answer', text: 'Start with an honest assessment of where the current bottlenecks are — not where they were six months ago, but where they are right now. Scaling operations in a print or decoration business typically involves three stages: documenting and stabilising current processes, connecting systems so information flows without manual intervention, and building the management visibility to make operational decisions on data rather than gut feel.' },
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
      <ProblemPage
        problem="Operations that can't keep up with growth"
        headline="Your business is growing. ||Your operations aren't scaling with it.||"
        intro="Scaling operations in a small business is not just about doing more of the same — it is about rebuilding the systems and processes that were designed for half your current volume before they become the ceiling on your growth. More orders. More staff. More pressure. But not more profit — and not more confidence that tomorrow is going to be better than today. That's an operations problem. When a business grows faster than its processes, the cracks appear in predictable places and get wider every time you take on more volume. I help businesses like yours build the operational foundations that let you scale without the chaos."
        heroGraphic={
          <WorkflowGraphic
            steps={scalingSteps}
            title="What happens to operations as you grow"
            variant="light"
          />
        }
        symptoms={[
          "You're taking on more work but profitability per order is falling",
          "Senior people are spending their days doing admin that should sit further down the team",
          "Quality is inconsistent — it depends who did the job, not what the process says",
          "There are one or two people everything flows through, and if they're off, everything slows",
          "You've hired more staff but it doesn't seem to have made things faster",
          "Month-end is a reconciliation nightmare because nobody trusts the data",
          "You know there's a problem but can't pinpoint exactly where it lives",
          "A new contract or product line sounds exciting but you're not sure your operation could handle it",
        ]}
        causes={[
          {
            title: "The informal coordination that worked at half the size doesn't scale",
            body: "When the team was smaller, communication happened in the room. Everyone knew what was going on. As the business grows, that breaks down — but the systems and habits don't change to compensate. The same processes that worked at £500k a year start to fail at £1.5m.",
          },
          {
            title: "Processes are undocumented and owned by individuals, not the business",
            body: "Key knowledge lives in the heads of key people. When the business was small, that was fine. As it grows, those people become bottlenecks — and the business can't move faster than they can. And if they leave, the process leaves with them.",
          },
          {
            title: "Growth happened before the operational foundation was ready",
            body: "It's easy to take on new contracts, new product lines, or new markets without asking whether the operation is ready for them. The revenue looks good on paper. The margin doesn't — because the cost of running a stretched operation is hidden in re-work, errors, and overtime.",
          },
          {
            title: 'No one owns the operational picture end to end',
            body: "In a growing business, people own their function — but nobody owns the whole flow from order in to invoice out. Problems at the handoff points between teams are nobody's specific problem to fix, so they persist and compound.",
          },
        ]}
        howIHelp="I come on site and follow how work moves through your business — the whole flow, from the moment an order arrives to the moment it's invoiced and out the door. I map what's there, identify what's missing, and quantify the cost in time, margin, and risk. Within five days you have a written report with every finding documented and every recommendation prioritised. Quick wins are separated from structural changes, so you know what to do this week and what to plan for properly. If you need help implementing the changes — not just identifying them — I run a structured Deliver engagement to do that work with you. And for businesses at a growth inflection point who need ongoing operational leadership, there's a retained option: monthly strategic and operational support without the cost of a full-time hire."
      
      slug="cant-scale-operations"
      targetService={problemRouting['cant-scale-operations'].targetService}
      relatedProblems={problemRouting['cant-scale-operations'].relatedProblems}
      relatedReading={problemRouting['cant-scale-operations'].relatedReading}
    />
    </>
  );
}
