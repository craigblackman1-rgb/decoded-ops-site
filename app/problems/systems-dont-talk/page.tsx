import type { Metadata } from 'next';
import { ProblemPageDS } from '@/components/ProblemPageDS';
import { Plate } from '@/components/Plate';
import { SystemsDontTalkSchematic } from '@/components/schematics/problems/SystemsDontTalkSchematic';
import { JsonLd } from '@/components/JsonLd';
import { problemRouting } from '@/data/problem-routing';

export const metadata: Metadata = {
 title: 'When Your Systems Don\'t Talk to Each Other | Decoded Ops',
 description: 'Disconnected systems mean manual rekeying, errors, and hidden costs. Find out what your disconnected software stack is actually costing you each week.',
 alternates: { canonical: '/problems/systems-dont-talk' },
 openGraph: {
  title: 'When Your Systems Don\'t Talk to Each Other | Decoded Ops',
  description: 'Disconnected systems mean manual rekeying, errors, and hidden costs. Find out what your disconnected software stack is actually costing you each week.',
  url: 'https://decodedops.co.uk/problems/systems-dont-talk',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: 'When Your Systems Don\'t Talk to Each Other | Decoded Ops',
  description: 'Disconnected systems mean manual rekeying, errors, and hidden costs. Find out what your disconnected software stack is actually costing you each week.',
 },
};

const systemsDontTalkSchema = {
 '@context': 'https://schema.org',
 '@graph': [
  {
   '@type': 'FAQPage',
   mainEntity: [
    {
     '@type': 'Question',
     name: 'Why do business systems get selected without considering integration?',
     acceptedAnswer: { '@type': 'Answer', text: 'Each system was chosen to solve a specific problem, without asking how it would connect to everything else. The integration question was deferred and never properly answered.' },
    },
    {
     '@type': 'Question',
     name: 'What happens when there is no integration architecture?',
     acceptedAnswer: { '@type': 'Answer', text: 'Without a view of the whole technology ecosystem, you cannot make good decisions about individual components. Systems accumulate. Complexity compounds.' },
    },
    {
     '@type': 'Question',
     name: 'How do API limitations affect system integration?',
     acceptedAnswer: { '@type': 'Answer', text: 'Some systems in this sector have limited or proprietary APIs that make integration technically difficult or commercially prohibitive. That constraint is rarely disclosed at the point of sale.' },
    },
    {
     '@type': 'Question',
     name: 'Why is the cost of manual workarounds invisible to business owners?',
     acceptedAnswer: { '@type': 'Answer', text: 'The cost of manual data re-entry, reporting overhead, and error correction does not appear on any invoice. It is buried in staff time that gets attributed to everything except the real cause.' },
    },
   ],
  },
 ],
};

export default function SystemsDontTalkPage() {
 return (
  <>
   <JsonLd data={systemsDontTalkSchema} />
   <ProblemPageDS
   problem="Systems don't talk to each other"
   headline="You have five systems. ||None of them know what the others are doing.||"
   intro="The average decoration or print business has between four and seven separate software systems. Order management, ERP, accounts, artwork, eCommerce, despatch. Each one is an island. The bridges between them are people, spreadsheets, and emails."
   heroGraphic={<SystemsDontTalkSchematic />}
   symptoms={[
    "Data is being entered manually into more than one system",
    "You can't get a complete picture of an order without checking multiple places",
    "Reporting requires someone to pull data from several systems and combine it",
    "Mistakes happen when data is transferred between systems",
    "Different departments are working from different versions of the same information",
    "You've normalised a level of administrative overhead that shouldn't exist",
    "Every time you add a system, the administration gets worse not better",
   ]}
   causes={[
    { title: 'Systems selected in isolation', body: "Each system was chosen to solve a specific problem, without asking how it would connect to everything else. The integration question was deferred and never properly answered." },
    { title: 'No integration architecture', body: "Without a view of the whole technology ecosystem, you can't make good decisions about individual components. Systems accumulate. Complexity compounds." },
    { title: 'Vendor lock-in and API limitations', body: "Some systems in this sector have limited or proprietary APIs that make integration technically difficult or commercially prohibitive. That constraint is rarely disclosed at the point of sale." },
    { title: 'The cost of the workaround is invisible', body: "The cost of manual data re-entry, reporting overhead, and error correction doesn't appear on any invoice. It's buried in staff time that gets attributed to everything except the real cause." },
   ]}
   howIHelp="I map your entire technology ecosystem, every system, every data flow, every manual bridge, and give you a clear view of what it's actually costing you. Then I give you independent options: integration where it's practical, consolidation where it makes more sense, and replacement where the current stack is the problem. No vendor relationships. No preferred solutions. Just a clear picture and a practical path forward."
  
   slug="systems-dont-talk"
   targetService={problemRouting['systems-dont-talk'].targetService}
   relatedProblems={problemRouting['systems-dont-talk'].relatedProblems}
   relatedReading={problemRouting['systems-dont-talk'].relatedReading}
  />
   {/* ── PLATE · DO-ART-410 ──────────────────────────────────────────── */}
   <section className="g-white" data-od-id="plate">
    <div className="wrap">
     <Plate tone="dark" no="DO-ART-410" title="Siloed → connected systems" rev="01" cls="DECODED OPS · ISSUED">
      <rect x="50" y="100" width="700" height="520" rx="12"
         fill="color-mix(in srgb, var(--do-amber) 8%, var(--do-prussian-blue))"
         stroke="color-mix(in srgb, var(--do-amber) 28%, transparent)" strokeWidth="1.5"/>
      <text x="80" y="150" fontFamily="var(--do-font-heading)" fontWeight="700"
         fontSize="22" fill="var(--do-amber)" letterSpacing="0.06em">NOW</text>
      <g fontFamily="var(--do-font-body)" fontSize="17" fill="color-mix(in srgb, var(--do-off-white) 78%, transparent)">
       <text x="80" y="200"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Six systems, zero integration</tspan></text>
       <text x="80" y="250"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Same data entered three times</tspan></text>
       <text x="80" y="300"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Nobody trusts any one system fully</tspan></text>
       <text x="80" y="350"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Manual reconciliation weekly</tspan></text>
      </g>

      <rect x="850" y="100" width="700" height="520" rx="12"
         fill="color-mix(in srgb, var(--do-cerulean) 8%, var(--do-prussian-blue))"
         stroke="color-mix(in srgb, var(--do-cerulean) 28%, transparent)" strokeWidth="1.5"/>
      <text x="880" y="150" fontFamily="var(--do-font-heading)" fontWeight="700"
         fontSize="22" fill="var(--do-cerulean)" letterSpacing="0.06em">AFTER</text>
      <g fontFamily="var(--do-font-body)" fontSize="17" fill="color-mix(in srgb, var(--do-off-white) 78%, transparent)">
       <text x="880" y="200"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Connected architecture, one data layer</tspan></text>
       <text x="880" y="250"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Enter once, available everywhere</tspan></text>
       <text x="880" y="300"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Single source of truth, everyone trusts it</tspan></text>
       <text x="880" y="350"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Real-time, no reconciliation needed</tspan></text>
      </g>

      <line x1="770" y1="320" x2="830" y2="320" stroke="var(--do-cerulean)" strokeWidth="2"/>
      <polygon points="828,316 840,320 828,324" fill="var(--do-amber)"/>
     </Plate>
    </div>
   </section>
  </>
 );
}
