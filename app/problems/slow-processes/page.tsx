import type { Metadata } from 'next';
import { ProblemPageDS } from '@/components/ProblemPageDS';
import { Plate } from '@/components/Plate';
import { SlowProcessesSchematic } from '@/components/schematics/problems/SlowProcessesSchematic';
import { JsonLd } from '@/components/JsonLd';
import { problemRouting } from '@/data/problem-routing';

export const metadata: Metadata = {
  title: 'Slow Processes Costing You Time and Money | Decoded Ops',
  description: "Your processes are slowing production, not your software. I come in, observe how work actually moves through your business, and find exactly what to fix. UK-wide.",
  alternates: { canonical: '/problems/slow-processes' },
  openGraph: {
    title: 'Slow Processes Costing You Time and Money | Decoded Ops',
    description: "Your processes are slowing production, not your software. I come in, observe how work actually moves through your business, and find exactly what to fix. UK-wide.",
    url: 'https://decodedops.co.uk/problems/slow-processes',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Slow Processes Costing You Time and Money | Decoded Ops',
    description: "Your processes are slowing production, not your software. I come in, observe how work actually moves through your business, and find exactly what to fix.",
  },
};

const slowProcessesSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://decodedops.co.uk/problems/slow-processes',
      url: 'https://decodedops.co.uk/problems/slow-processes',
      name: 'Slow Processes Costing You Time and Money | Decoded Ops',
      description: "Your processes are slowing production, not your software. I come in, observe how work actually moves through your business, and find exactly what to fix. UK-wide.",
      isPartOf: { '@id': 'https://decodedops.co.uk/#organization' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is process improvement consulting just for businesses with technology problems?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "No. The majority of operational improvements delivered by Decoded Ops are process-led, not technology-led. Craig maps how work moves through your business, finds where time and money are being lost, and helps you fix the root cause — which is often a process, a habit, or a missing bit of structure, not a software gap.",
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between a process improvement consultant and a management consultant?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Craig Blackman has spent 25 years working inside print, embroidery, workwear, and promotional merchandise businesses. He brings sector-specific knowledge of where these operations typically slow down and why — not a generic framework applied from the outside.",
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need to prepare anything before the on-site visit?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "No preparation is needed beyond a 60-minute discovery call beforehand. The most valuable thing is to let the day run as normally as possible — the on-site observation needs to reflect how the operation actually works, not how it works when someone is watching.",
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to see results from a process improvement engagement?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Quick wins identified in the Clarity Audit report are typically implementable within days to weeks. Most businesses begin making changes before the report is even delivered — the day on site tends to be clarifying enough that the team already knows what needs to change.",
          },
        },
        {
          '@type': 'Question',
          name: 'Does the audit cover just processes or the whole business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "The Clarity Audit covers six areas across the whole operation — including processes and workflow, IT infrastructure, software, eCommerce, growth opportunity, and AI readiness. If a focused process review is preferred, that can be discussed separately.",
          },
        },
        {
          '@type': 'Question',
          name: 'What does a process improvement consultant do for a print or decoration business?',
          acceptedAnswer: { '@type': 'Answer', text: 'A process improvement consultant observes your actual workflows — not the documented ones — and identifies where time, money, and quality are being lost. In the print and embroidery sector, this typically covers the order intake to despatch cycle, artwork approval loops, production scheduling, and the handoffs between departments. The output is a prioritised improvement plan with every finding quantified in hours per week and pounds per year.' },
        },
        {
          '@type': 'Question',
          name: 'How do I improve production efficiency in a small manufacturing or decoration business?',
          acceptedAnswer: { '@type': 'Answer', text: 'Start by mapping the current process end to end — from the moment an order arrives to the moment it leaves the building. Time each step. Identify where jobs pause, where information is missing, and where work is being done twice. Process bottleneck analysis tells you where to focus improvement effort first. The biggest gains are almost always in the handoffs between steps, not in the steps themselves.' },
        },
        {
          '@type': 'Question',
          name: 'Is process improvement the same as lean manufacturing?',
          acceptedAnswer: { '@type': 'Answer', text: 'Lean process improvement principles apply to print, embroidery, and decoration businesses — but the terminology and complexity of a full lean implementation is often overkill for a business under £5m. The practical goal is the same: eliminate the steps that do not add value, reduce waiting time between steps, and make the workflow visible and manageable.' },
        },
      ],
    },
  ],
};

const workflowSteps = [
  { label: 'Order in', sub: 'Intake' },
  { label: 'Artwork', sub: 'Approval', alert: true },
  { label: 'Production', sub: 'Queue', alert: true },
  { label: 'Quality', sub: 'Check' },
  { label: 'Despatch', sub: 'Invoice' },
];

export default function SlowProcessesPage() {
  return (
    <>
      <JsonLd data={slowProcessesSchema} />
      <ProblemPageDS
        problem="Slow, inefficient processes"
        headline="The bottleneck isn't always ||a software problem.||"
        intro="Most businesses I work with assume they have a technology problem. Buy better software, they think, and the friction goes away. Sometimes they're right. Often they're not. Slow turnaround, jobs that take twice as long as they should, the team constantly firefighting — that's usually a process problem. And no amount of new software fixes a process that was broken to begin with."
        heroGraphic={<SlowProcessesSchematic />}
        symptoms={[
          "Jobs move smoothly to a point — then sit waiting for the next person or step",
          "Re-work is happening at the same stage, repeatedly, with no clearly understood reason",
          "Different operators do the same task differently, producing inconsistent results",
          "Rush jobs constantly jump the queue and ripple through everything else",
          "Jobs arrive at production without everything they need — stock, files, instructions",
          "Experienced people are spending time on tasks that don't need their experience",
          "New starters take months to get up to speed because the process lives in someone's head",
          "The same questions are asked every day because nobody has written down how it works",
        ]}
        causes={[
          {
            title: "The process was never documented — it lives in people's heads",
            body: "When a process exists only in the memory of the people who do it, it varies every time. Different operators, different results. And when that person is off sick or leaves, the knowledge goes with them.",
          },
          {
            title: 'Problems are caught at the end, not where they start',
            body: "If a quality check only happens at despatch, every error gets the full production treatment before anyone notices it. The fix costs ten times what it would have cost if the check had happened earlier — or before the job was even started.",
          },
          {
            title: "Growth without process redesign",
            body: "What worked at half the volume often doesn't work now. The informal coordination that kept things moving when the team was small breaks down as the business grows. The process didn't scale — because nobody redesigned it.",
          },
          {
            title: "No visibility of where jobs are and what they're waiting for",
            body: "Without a simple, shared view of the job queue, people work on what's in front of them — not what's most urgent. Work piles up at some stages and moves too fast through others. The bottleneck is invisible until it's a crisis.",
          },
        ]}
        howIHelp="I don't run workshops or send you a questionnaire. I come to your site and follow your work — watching an order move from intake to despatch, timing steps, noting where things pause, talking to the people doing the work because they already know where the problems are. By the end of the day I have a clear map of every step in your key processes, the specific points where time is being lost, and a sense of which problems are habit, which are design, and which are fixable this week. Within five working days you have a written report: every finding documented, every issue quantified in hours per week and pounds per year, recommendations prioritised by impact. This is the process improvement consultancy approach — observe first, quantify second, recommend third. No workshops. No questionnaires. A day in your business and a written report within five working days."
      
      slug="slow-processes"
      targetService={problemRouting['slow-processes'].targetService}
      relatedProblems={problemRouting['slow-processes'].relatedProblems}
      relatedReading={problemRouting['slow-processes'].relatedReading}
    />
      {/* ── PLATE · DO-ART-409 ──────────────────────────────────────────── */}
      <section className="g-white" data-od-id="plate">
        <div className="wrap">
          <Plate tone="dark" no="DO-ART-409" title="Slow manual → fast documented process" rev="01" cls="DECODED OPS · ISSUED">
            <rect x="50" y="100" width="700" height="520" rx="12"
                  fill="color-mix(in srgb, var(--do-amber) 8%, var(--do-prussian-blue))"
                  stroke="color-mix(in srgb, var(--do-amber) 28%, transparent)" strokeWidth="1.5"/>
            <text x="80" y="150" fontFamily="var(--do-font-heading)" fontWeight="700"
                  fontSize="22" fill="var(--do-amber)" letterSpacing="0.06em">NOW</text>
            <g fontFamily="var(--do-font-body)" fontSize="17" fill="color-mix(in srgb, var(--do-off-white) 78%, transparent)">
              <text x="80" y="200"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Artwork approval: days of email chains</tspan></text>
              <text x="80" y="250"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Order entry: re-keyed across three systems</tspan></text>
              <text x="80" y="300"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Quoting: spreadsheet and guesswork</tspan></text>
              <text x="80" y="350"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Every step waits for a person</tspan></text>
            </g>

            <rect x="850" y="100" width="700" height="520" rx="12"
                  fill="color-mix(in srgb, var(--do-cerulean) 8%, var(--do-prussian-blue))"
                  stroke="color-mix(in srgb, var(--do-cerulean) 28%, transparent)" strokeWidth="1.5"/>
            <text x="880" y="150" fontFamily="var(--do-font-heading)" fontWeight="700"
                  fontSize="22" fill="var(--do-cerulean)" letterSpacing="0.06em">AFTER</text>
            <g fontFamily="var(--do-font-body)" fontSize="17" fill="color-mix(in srgb, var(--do-off-white) 78%, transparent)">
              <text x="880" y="200"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Automated approval routing cuts days to hours</tspan></text>
              <text x="880" y="250"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Single order entry, pushed everywhere</tspan></text>
              <text x="880" y="300"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Quoting based on live supplier data</tspan></text>
              <text x="880" y="350"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">System does the routing, people do the exceptions</tspan></text>
            </g>

            <line x1="770" y1="320" x2="830" y2="320" stroke="var(--do-cerulean)" strokeWidth="2"/>
            <polygon points="828,316 840,320 828,324" fill="var(--do-amber)"/>
          </Plate>
        </div>
      </section>
    </>
  );
}
