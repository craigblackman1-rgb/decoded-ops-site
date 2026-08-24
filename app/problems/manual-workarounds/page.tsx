import type { Metadata } from 'next';
import { ProblemPageDS } from '@/components/ProblemPageDS';
import { ManualWorkaroundsSchematic } from '@/components/schematics/problems/ManualWorkaroundsSchematic';
import { JsonLd } from '@/components/JsonLd';
import { problemRouting } from '@/data/problem-routing';
import { Plate } from '@/components/Plate';

export const metadata: Metadata = {
 title: 'Manual Workarounds Are Costing You More Than You Think | Decoded Ops',
 description: 'If your team spends hours each week on manual re-entry, copy-paste fixes, and spreadsheet workarounds, you\'re paying for a system that isn\'t working. Here\'s the real cost.',
 alternates: { canonical: '/problems/manual-workarounds' },
 openGraph: {
  title: 'Manual Workarounds Are Costing You More Than You Think | Decoded Ops',
  description: 'If your team spends hours each week on manual re-entry, copy-paste fixes, and spreadsheet workarounds, you\'re paying for a system that isn\'t working. Here\'s the real cost.',
  url: 'https://decodedops.co.uk/problems/manual-workarounds',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: 'Manual Workarounds Are Costing You More Than You Think | Decoded Ops',
  description: 'If your team spends hours each week on manual re-entry, copy-paste fixes, and spreadsheet workarounds, you\'re paying for a system that isn\'t working. Here\'s the real cost.',
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
     acceptedAnswer: { '@type': 'Answer', text: 'Every manual workaround adds friction. As order volumes grow, the friction multiplies. Businesses that scale successfully eliminate workarounds before they scale, not after.' },
    },
    {
     '@type': 'Question',
     name: 'How much time do manual workarounds cost a print or embroidery business?',
     acceptedAnswer: { '@type': 'Answer', text: 'Manual re-entry, reconciliation, and shadow-system maintenance typically add 10–20 hours per employee per week in businesses with significant workaround cultures. Eliminating manual data entry through business process automation typically delivers 15–25% efficiency gains in order processing, without adding headcount.' },
    },
    {
     '@type': 'Question',
     name: 'Should I fix my processes or buy new software first?',
     acceptedAnswer: { '@type': 'Answer', text: 'Fix the processes first, or at least document them. New software implemented on top of broken processes inherits the same problems in a more expensive wrapper. Business process automation works best when the process is understood, mapped, and then automated, not when automation is applied to something nobody has looked at critically.' },
    },
   ],
  },
 ],
};

export default function ManualWorkaroundsPage() {
 return (
  <>
   <JsonLd data={manualWorkaroundsSchema} />
   <ProblemPageDS
   problem="Manual workarounds and shadow systems"
   headline="Your team has built a second system. ||It lives in spreadsheets.||"
   intro="Almost every business in this sector has a second system running quietly alongside the official one. Spreadsheets, manual logs, sticky notes, workarounds. They keep the business moving, but they hide the real cost. This isn't about replacing people. It's about removing the double-typing, duplicate data, and shadow spreadsheets that slow every team down."
   heroGraphic={<ManualWorkaroundsSchematic />}
   symptoms={[
    "Spreadsheets are acting as the real database for your core data",
    "The same data is being typed into the same system more than once",
    "There's a 'master spreadsheet' someone updates by hand every day",
    "When that person's on holiday, nobody knows how the spreadsheet works",
    "Checking one system against another takes hours every week",
    "You've built custom spreadsheets or databases that are now critical to running the place",
    "Every month-end needs a manual data pull and a lot of fiddling",
   ]}
   causes={[
    { title: 'The system was set up to a template, not your workflow', body: "Most software is set up following the vendor's standard process. When that doesn't match how your business actually works, your team builds workarounds. Those workarounds become the real way things get done." },
    { title: 'The gaps between systems were never closed', body: "When two systems can't talk to each other, the bridge is a person with a spreadsheet. That person becomes essential, and the business doesn't realise until they're away." },
    { title: 'Nobody has measured the hidden labour cost', body: "The cost of workarounds never appears on an invoice. It's buried in staff time labelled 'order processing' or 'admin'. Until it's measured, there's no case for fixing it. If nobody has written down how things should work, the workaround is the process." },
    { title: 'The workaround becomes the official way', body: "After a while, the workaround stops looking like a workaround. It's just how things are done. New starters are trained on it as if it were official, and nobody wants to admit the original software didn't deliver." },
   ]}
   howIHelp="I audit how work actually gets done, not how it's supposed to. I find every workaround, every spreadsheet, every manual bridge between systems, and I work out what they're costing you in time, mistakes, and risk. Then I give you a prioritised plan to remove them: quick wins that pay for themselves, connection fixes that close the gaps, and an honest view of whether your current system can ever work for your business. The result is a practical, prioritised list of changes that takes the manual work off your team."
  
   slug="manual-workarounds"
   targetService={problemRouting['manual-workarounds'].targetService}
   relatedProblems={problemRouting['manual-workarounds'].relatedProblems}
   relatedReading={problemRouting['manual-workarounds'].relatedReading}
  />
   {/* ── PLATE · DO-ART-407 ──────────────────────────────────────────── */}
   <section className="g-white" data-od-id="plate">
    <div className="wrap">
     <Plate tone="dark" no="DO-ART-407" title="Workarounds → documented process" rev="01" cls="DECODED OPS · ISSUED">
      <rect x="50" y="100" width="700" height="520" rx="12"
         fill="color-mix(in srgb, var(--do-amber) 8%, var(--do-prussian-blue))"
         stroke="color-mix(in srgb, var(--do-amber) 28%, transparent)" strokeWidth="1.5"/>
      <text x="80" y="150" fontFamily="var(--do-font-heading)" fontWeight="700"
         fontSize="22" fill="var(--do-amber)" letterSpacing="0.06em">NOW</text>
      <g fontFamily="var(--do-font-body)" fontSize="17" fill="color-mix(in srgb, var(--do-off-white) 78%, transparent)">
       <text x="80" y="200"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Export to CSV, import to Excel, re-key to ERP</tspan></text>
       <text x="80" y="250"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Three systems, two manual steps between each</tspan></text>
       <text x="80" y="300"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Workarounds known to one person only</tspan></text>
       <text x="80" y="350"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Every manual step is a failure point</tspan></text>
      </g>

      <rect x="850" y="100" width="700" height="520" rx="12"
         fill="color-mix(in srgb, var(--do-cerulean) 8%, var(--do-prussian-blue))"
         stroke="color-mix(in srgb, var(--do-cerulean) 28%, transparent)" strokeWidth="1.5"/>
      <text x="880" y="150" fontFamily="var(--do-font-heading)" fontWeight="700"
         fontSize="22" fill="var(--do-cerulean)" letterSpacing="0.06em">AFTER</text>
      <g fontFamily="var(--do-font-body)" fontSize="17" fill="color-mix(in srgb, var(--do-off-white) 78%, transparent)">
       <text x="880" y="200"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Automated feeds replace re-keying</tspan></text>
       <text x="880" y="250"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Systems talk directly, no manual bridge</tspan></text>
       <text x="880" y="300"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Process documented, anyone can run it</tspan></text>
       <text x="880" y="350"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Failure points eliminated by automation</tspan></text>
      </g>

      <line x1="770" y1="320" x2="830" y2="320" stroke="var(--do-cerulean)" strokeWidth="2"/>
      <polygon points="828,316 840,320 828,324" fill="var(--do-amber)"/>
     </Plate>
    </div>
   </section>
  </>
 );
}
