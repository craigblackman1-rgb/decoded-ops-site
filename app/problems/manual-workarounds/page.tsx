import type { Metadata } from 'next';
import { ProblemPage } from '@/components/ProblemPage';
import { SystemsDisconnectedGraphic } from '@/components/graphics/SystemsDisconnectedGraphic';
import { JsonLd } from '@/components/JsonLd';
import { problemRouting } from '@/data/problem-routing';

export const metadata: Metadata = {
  title: 'Manual Workarounds Are Costing You More Than You Think | Decoded Ops',
  description: 'If your team spends hours each week on manual re-entry, copy-paste fixes, and spreadsheet workarounds — you\'re paying for a system that isn\'t working. Here\'s the real cost.',
  alternates: { canonical: '/problems/manual-workarounds' },
  openGraph: {
    title: 'Manual Workarounds Are Costing You More Than You Think | Decoded Ops',
    description: 'If your team spends hours each week on manual re-entry, copy-paste fixes, and spreadsheet workarounds — you\'re paying for a system that isn\'t working. Here\'s the real cost.',
    url: 'https://decodedops.co.uk/problems/manual-workarounds',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manual Workarounds Are Costing You More Than You Think | Decoded Ops',
    description: 'If your team spends hours each week on manual re-entry, copy-paste fixes, and spreadsheet workarounds — you\'re paying for a system that isn\'t working. Here\'s the real cost.',
  },
};

const manualWorkaroundsSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why do manual workarounds develop in businesses that have invested in software?',
          acceptedAnswer: { '@type': 'Answer', text: 'Because the software was implemented to fit the vendor\'s template, not the business\'s actual workflows. When the system doesn\'t do what the team needs, they build workarounds. Those workarounds become the real operating model.' },
        },
        {
          '@type': 'Question',
          name: 'How much do manual workarounds actually cost a business?',
          acceptedAnswer: { '@type': 'Answer', text: 'Data re-entry, error correction, reconciliation, and the overhead of maintaining shadow systems typically add 10–20 hours per employee per week in businesses with significant workaround cultures. The cost is invisible because it is buried in everyone\'s job description.' },
        },
        {
          '@type': 'Question',
          name: 'Why are shadow systems dangerous for data integrity?',
          acceptedAnswer: { '@type': 'Answer', text: 'Shadow systems run outside IT governance. They are not backed up, not secured, and not integrated. When the person who built them leaves, the knowledge of how they work leaves with them.' },
        },
        {
          '@type': 'Question',
          name: 'How do manual workarounds affect growth and scalability?',
          acceptedAnswer: { '@type': 'Answer', text: 'Every manual workaround adds friction. As order volumes grow, the friction multiplies. Businesses that scale successfully eliminate workarounds before they scale — not after.' },
        },
        {
          '@type': 'Question',
          name: 'How much time do manual workarounds cost a print or embroidery business?',
          acceptedAnswer: { '@type': 'Answer', text: 'Manual re-entry, reconciliation, and shadow-system maintenance typically add 10–20 hours per employee per week in businesses with significant workaround cultures. Eliminating manual data entry through business process automation typically delivers 15–25% efficiency gains in order processing — without adding headcount.' },
        },
        {
          '@type': 'Question',
          name: 'Should I fix my processes or buy new software first?',
          acceptedAnswer: { '@type': 'Answer', text: 'Fix the processes first — or at least document them. New software implemented on top of broken processes inherits the same problems in a more expensive wrapper. Business process automation works best when the process is understood, mapped, and then automated — not when automation is applied to something nobody has looked at critically.' },
        },
      ],
    },
  ],
};

export default function ManualWorkaroundsPage() {
  return (
    <>
      <JsonLd data={manualWorkaroundsSchema} />
      <ProblemPage
      problem="Manual workarounds and shadow systems"
      headline="Your team has built a second system. ||It lives in spreadsheets.||"
      intro="Almost every business in this sector has shadow systems — spreadsheets, manual logs, sticky notes, and workarounds that exist alongside the official software. They keep the business running. They also hide the real cost of operational inefficiency. Business process automation for small businesses in this sector is not about replacing people — it is about eliminating the manual re-entry, duplicate data, and shadow spreadsheets that slow every team down."
      heroGraphic={<SystemsDisconnectedGraphic connected={false} />}
      symptoms={[
        "Spreadsheets are acting as databases for core operational data",
        "Data is being entered into the same system more than once",
        "You have a 'master spreadsheet' that someone updates manually each day",
        "When that person is on holiday, nobody knows how the spreadsheet works",
        "Reconciliation between systems takes hours every week",
        "You've built custom Access databases or Google Sheets that have become critical infrastructure",
        "Every month-end requires a manual data pull and manipulation effort",
      ]}
      causes={[
        { title: 'The system was implemented to a template, not your workflow', body: "Most software implementations follow the vendor's standard process. When that process doesn't match how your business actually works, the team builds workarounds. Those workarounds become the real operating model — supported by the official system only where it fits." },
        { title: 'Integration gaps that were never closed', body: "When two systems don't talk to each other, the bridge is a person with a spreadsheet. That person becomes a critical dependency — and the business doesn't realise until they're not available." },
        { title: 'No one has measured the hidden labour cost', body: "The cost of manual workarounds doesn't appear on any invoice. It's buried in staff time that is attributed to 'order processing' or 'administration'. Without measuring it, there is no business case to fix it. Standard operating procedures document what should happen. When SOPs don't exist, the manual workaround is the SOP — and measuring the real cost of that is the first step towards fixing it." },
        { title: 'Workarounds become institutionalised', body: "After enough time, the workaround isn't seen as a workaround — it's seen as how things are done. New starters are trained on the shadow system as if it were official. The original software investment becomes a sunk cost that nobody wants to admit hasn't delivered." },
      ]}
      howIHelp="I audit your actual operational workflows — not the documented ones, the ones your team actually use. I identify every workaround, every spreadsheet, every manual bridge between systems, and I calculate what they're costing you in time, errors, and risk. Then I give you a prioritised plan to eliminate them: quick wins that pay for themselves, integration fixes that close the gaps, and the honest conversation about whether the current system can ever work for your business model. The outcome is a business process automation roadmap — not a technology wish list, but a prioritised set of changes (some immediate, some longer term) that eliminate the manual work your team has been carrying for years."
    
      slug="manual-workarounds"
      targetService={problemRouting['manual-workarounds'].targetService}
      relatedProblems={problemRouting['manual-workarounds'].relatedProblems}
      relatedReading={problemRouting['manual-workarounds'].relatedReading}
    />
    </>
  );
}
