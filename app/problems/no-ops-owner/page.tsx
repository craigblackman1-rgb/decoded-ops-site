import type { Metadata } from 'next';
import { ProblemPageDS } from '@/components/ProblemPageDS';
import { Plate } from '@/components/Plate';
import { NoOpsOwnerSchematic } from '@/components/schematics/problems/NoOpsOwnerSchematic';
import { JsonLd } from '@/components/JsonLd';
import { problemRouting } from '@/data/problem-routing';

export const metadata: Metadata = {
 title: 'No Operations Owner? Here\'s What That Costs You | Decoded Ops',
 description: 'When no one owns operations in a growing business, the same problems repeat, until someone owns it. Here\'s what an ops lead actually does, and how to get one without a full-time hire.',
 alternates: { canonical: '/problems/no-ops-owner' },
 openGraph: {
  title: 'No Operations Owner? Here\'s What That Costs You | Decoded Ops',
  description: 'When no one owns operations in a growing business, the same problems repeat, until someone owns it. Here\'s what an ops lead actually does, and how to get one without a full-time hire.',
  url: 'https://decodedops.co.uk/problems/no-ops-owner',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: 'No Operations Owner? Here\'s What That Costs You | Decoded Ops',
  description: 'When no one owns operations in a growing business, the same problems repeat, until someone owns it. Here\'s what an ops lead actually does, and how to get one without a full-time hire.',
 },
};

const noOpsOwnerSchema = {
 '@context': 'https://schema.org',
 '@graph': [
  {
   '@type': 'FAQPage',
   mainEntity: [
    {
     '@type': 'Question',
     name: 'What happens when no one owns operations in a growing business?',
     acceptedAnswer: { '@type': 'Answer', text: 'Operational decisions get made by whoever happens to be in the room. Problems get addressed reactively rather than systematically. The same issues resurface week after week because no one has the remit to fix them permanently.' },
    },
    {
     '@type': 'Question',
     name: 'Why do business owners end up as de facto ops managers?',
     acceptedAnswer: { '@type': 'Answer', text: 'In most owner-operated businesses in this sector, the founder grew up doing the operational work. They understand it better than anyone. The problem is they cannot both do the work and step back to improve the system, but there is no one else to hand it to.' },
    },
    {
     '@type': 'Question',
     name: 'How does a lack of operations leadership affect technology projects?',
     acceptedAnswer: { '@type': 'Answer', text: 'Technology projects fail or underdeliver in part because there is no operational owner capable of bridging the gap between what the software does and how the business actually works.' },
    },
    {
     '@type': 'Question',
     name: 'What is the cost of not having dedicated operations leadership?',
     acceptedAnswer: { '@type': 'Answer', text: 'The cost shows up in slower growth, repeated mistakes, missed improvements, and owner burnout. Every operational issue that has to be escalated to the owner costs ten times what it would if someone owned operations day-to-day.' },
    },
    {
     '@type': 'Question',
     name: 'What does a fractional head of operations do for a small business?',
     acceptedAnswer: { '@type': 'Answer', text: 'A fractional head of operations owns the operational agenda on a part-time basis, technology decisions, process improvement, vendor oversight, and cross-department coordination. They provide the sales and operations planning (S&OP) thinking a growing business needs without the cost of a full-time operations director.' },
    },
    {
     '@type': 'Question',
     name: 'Is a fractional operations director the same as managed IT support?',
     acceptedAnswer: { '@type': 'Answer', text: 'No. Managed IT support handles day-to-day IT issues. A fractional operations director owns the wider operational agenda, systems strategy, process improvement, technology decision-making, and the management of improvement projects that cross departmental lines. IT support is a component of that; it is not a substitute for it.' },
    },
   ],
  },
 ],
};

export default function NoOpsOwnerPage() {
 return (
  <>
   <JsonLd data={noOpsOwnerSchema} />
   <ProblemPageDS
   problem="No operations owner"
   headline="Every ops decision ends up on your desk. ||Who is running the business day to day?||"
   intro="In many growing businesses, nobody owns operations. The MD handles the big decisions, department heads handle their own areas, and everything in between falls through the cracks: the processes that cross teams, the systems that connect departments, the improvements nobody's responsible for. You don't need a full-time hire to fix that. A part-time operations lead gives you the accountability and the thinking without the overhead."
   heroGraphic={<NoOpsOwnerSchematic />}
   symptoms={[
    "Decisions that affect several departments get made by committee, or not at all",
    "The same operational problems keep coming back with no permanent fix",
    "You're the only person who understands the whole flow from order to invoice",
    "There are good ideas for improvement but nobody has the time or remit to do them",
    "Technology projects stall because there's no one to drive them",
    "You're spending more time on day-to-day operations than on growing the business",
    "New systems get bought but never properly bed in",
   ]}
   causes={[
    { title: "Operations grew without anyone noticing", body: "When a business is small, everyone knows what everyone else is doing. As it grows, things get more complicated, but nobody is given ownership of the processes that cross departments. Without one person who owns the operational numbers, decisions get made on gut feel." },
    { title: 'The owner is still the default ops person', body: "In many owner-run businesses, the owner grew up doing the operational work and understands it better than anyone. But they can't both do the work and step back to improve the system, and there's no one else to hand it to." },
    { title: 'Operations is seen as admin, not leadership', body: "Operations sounds like paperwork and process, so it gets passed down, shared around, or left to whoever shouts loudest. In reality, it's where growth is either enabled or blocked." },
    { title: 'No clear step from doing the work to leading it', body: "The person who knows the operations best is usually the one doing the work. Promoting them means losing their hands-on contribution, and many businesses can't afford that trade-off without a plan." },
   ]}
   howIHelp="I help you work out whether you need a dedicated operations person, a part-time operations lead, or a different structure altogether. I look at where your time goes, where the bottlenecks are, and what level of ownership your business can support right now. Then I give you a practical route forward, whether that's hiring, restructuring, or me stepping into a retained part-time role that gives you operational leadership without a full-time salary. If a fractional head of operations is the answer, the Retained service provides exactly that."
  
   slug="no-ops-owner"
   targetService={problemRouting['no-ops-owner'].targetService}
   relatedProblems={problemRouting['no-ops-owner'].relatedProblems}
   relatedReading={problemRouting['no-ops-owner'].relatedReading}
  />
   {/* ── PLATE · DO-ART-408 ──────────────────────────────────────────── */}
   <section className="g-white" data-od-id="plate">
    <div className="wrap">
     <Plate tone="dark" no="DO-ART-408" title="Nobody accountable → named ownership" rev="01" cls="DECODED OPS · ISSUED">
      <rect x="50" y="100" width="700" height="520" rx="12"
         fill="color-mix(in srgb, var(--do-amber) 8%, var(--do-prussian-blue))"
         stroke="color-mix(in srgb, var(--do-amber) 28%, transparent)" strokeWidth="1.5"/>
      <text x="80" y="150" fontFamily="var(--do-font-heading)" fontWeight="700"
         fontSize="22" fill="var(--do-amber)" letterSpacing="0.06em">NOW</text>
      <g fontFamily="var(--do-font-body)" fontSize="17" fill="color-mix(in srgb, var(--do-off-white) 78%, transparent)">
       <text x="80" y="200"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Nobody knows who owns which process</tspan></text>
       <text x="80" y="250"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Problems fall between departments</tspan></text>
       <text x="80" y="300"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Fix is reactive: whoever shouts loudest</tspan></text>
       <text x="80" y="350"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">No single person accountable for operations</tspan></text>
      </g>

      <rect x="850" y="100" width="700" height="520" rx="12"
         fill="color-mix(in srgb, var(--do-cerulean) 8%, var(--do-prussian-blue))"
         stroke="color-mix(in srgb, var(--do-cerulean) 28%, transparent)" strokeWidth="1.5"/>
      <text x="880" y="150" fontFamily="var(--do-font-heading)" fontWeight="700"
         fontSize="22" fill="var(--do-cerulean)" letterSpacing="0.06em">AFTER</text>
      <g fontFamily="var(--do-font-body)" fontSize="17" fill="color-mix(in srgb, var(--do-off-white) 78%, transparent)">
       <text x="880" y="200"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Process Register names every owner</tspan></text>
       <text x="880" y="250"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Clear accountability per workflow</tspan></text>
       <text x="880" y="300"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Issues caught by the Improvement Log</tspan></text>
       <text x="880" y="350"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Operations has a named, accountable lead</tspan></text>
      </g>

      <line x1="770" y1="320" x2="830" y2="320" stroke="var(--do-cerulean)" strokeWidth="2"/>
      <polygon points="828,316 840,320 828,324" fill="var(--do-amber)"/>
     </Plate>
    </div>
   </section>
  </>
 );
}
