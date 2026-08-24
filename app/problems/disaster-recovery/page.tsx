import type { Metadata } from 'next';
import { ProblemPageDS } from '@/components/ProblemPageDS';
import { DisasterRecoverySchematic } from '@/components/schematics/problems/DisasterRecoverySchematic';
import { JsonLd } from '@/components/JsonLd';
import { problemRouting } from '@/data/problem-routing';
import { Plate } from '@/components/Plate';

export const metadata: Metadata = {
 title: 'Business Continuity & Disaster Recovery for Print Operations | Decoded Ops',
 description: 'What happens when your systems go down and you have orders to ship? A simple business continuity and disaster recovery plan for print, decoration, and workwear businesses.',
 alternates: { canonical: '/problems/disaster-recovery' },
 openGraph: {
  title: 'Business Continuity & Disaster Recovery for Print Operations | Decoded Ops',
  description: 'What happens when your systems go down and you have orders to ship? A simple business continuity and disaster recovery plan for print, decoration, and workwear businesses.',
  url: 'https://decodedops.co.uk/problems/disaster-recovery',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: 'Business Continuity & Disaster Recovery for Print Operations | Decoded Ops',
  description: 'What happens when your systems go down and you have orders to ship? A simple business continuity and disaster recovery plan for print, decoration, and workwear businesses.',
 },
};

const drSchema = {
 '@context': 'https://schema.org',
 '@graph': [
  {
   '@type': 'FAQPage',
   mainEntity: [
    {
     '@type': 'Question',
     name: 'Why don\'t small and medium print businesses have a disaster recovery plan?',
     acceptedAnswer: { '@type': 'Answer', text: 'DR planning feels like something for enterprise businesses with dedicated IT teams. Most smaller businesses assume their hosting provider handles it, or that it won\'t happen to them, until it does.' },
    },
    {
     '@type': 'Question',
     name: 'How much does an hour of system downtime actually cost?',
     acceptedAnswer: { '@type': 'Answer', text: 'Lost orders, halted production, staff idle, missed despatch deadlines, overtime to catch up, and reputational damage with customers. For most businesses in this sector, the real cost is two to three times what they estimate.' },
    },
    {
     '@type': 'Question',
     name: 'What is a realistic recovery time objective for a small business?',
     acceptedAnswer: { '@type': 'Answer', text: 'For critical systems like order management and production scheduling, a recovery time of under four hours is achievable with the right architecture. Many businesses are currently looking at days or weeks without knowing it.' },
    },
    {
     '@type': 'Question',
     name: 'Can cloud software eliminate the need for a DR plan?',
     acceptedAnswer: { '@type': 'Answer', text: 'Cloud software reduces some risks but introduces others, internet dependency, provider outages, data egress limitations, and complex multi-system recovery sequences. A DR plan is still essential.' },
    },
    {
     '@type': 'Question',
     name: 'What is a realistic recovery time objective for a small manufacturing business?',
     acceptedAnswer: { '@type': 'Answer', text: 'For critical systems like order management and production scheduling, a recovery time objective (RTO) of under four hours is achievable with the right architecture. Many small businesses in print, embroidery, and decoration are currently looking at days or weeks without knowing it, because nobody has written a disaster recovery plan or tested a restore.' },
    },
    {
     '@type': 'Question',
     name: 'Does cloud software replace the need for a business continuity plan?',
     acceptedAnswer: { '@type': 'Answer', text: 'No. Cloud backup reduces some risks but introduces others, internet dependency, provider outages, data egress limitations, and complex multi-system recovery sequences. A business continuity disaster recovery plan is still essential, even for businesses running entirely on cloud software. The plan addresses what happens when any part of that stack fails.' },
    },
   ],
  },
 ],
};

export default function DisasterRecoveryPage() {
 return (
  <>
   <JsonLd data={drSchema} />
   <ProblemPageDS
   problem="No disaster recovery plan"
   headline="Your systems go down on a Tuesday morning. ||When do you get back up?||"
    intro="Most print, embroidery, and decoration businesses have no plan for what happens when their systems go down. They care. It just feels like something for big IT departments. Until the server fails, the hosting goes down, or ransomware locks every screen. Then the cost of not having a plan becomes very visible, very quickly."
   heroGraphic={<DisasterRecoverySchematic />}
   symptoms={[
    "You have no written plan for what to do when your critical systems go down",
    "You assume your hosting provider or software vendor handles backup and recovery",
    "Recovery from your last outage took days, not hours",
    "There are backup processes written somewhere, but you're not sure they still work",
    "You couldn't say how long you can afford to be offline without guessing",
    "Key operational data lives in only one place",
    "The last time you tested a restore, it didn't work",
   ]}
   causes={[
    { title: 'Disaster planning keeps getting postponed', body: "Planning for a disaster always feels like something to do later. The business is running, the systems are working, and there are more pressing things to fix. The cost of putting it off only shows up when the systems stop." },
    { title: 'Assuming the vendor handles it', body: "Most vendors have uptime guarantees, but those rarely cover your data, your recovery order, or how long you can afford to be down. Their backup is not your recovery plan. A backup stores your data. A recovery plan says which systems come back first, in what order, and how fast." },
    { title: 'No one is accountable for recovery', body: "In businesses without a dedicated IT person, 'who gets us back online?' has no clear answer. On outage day, everyone assumes someone else is handling it." },
    { title: 'The cost of downtime is invisible until it happens', body: "Lost orders, halted production, missed deadlines, overtime to catch up, damaged reputation. None of it shows on a balance sheet until the outage is over, by which point the cost has already been paid. Most small businesses have never worked out how long they can afford to be down." },
   ]}
   howIHelp="I look at your current systems, your backups, and how you'd actually recover, then give you a practical recovery plan built around your business. Not a 50-page IT document. A clear, prioritised list covering what to protect first, how fast each system can realistically be recovered, and what it would cost to recover faster. Plus a simple test schedule so you know the plan works before you need it."
  
   slug="disaster-recovery"
   targetService={problemRouting['disaster-recovery'].targetService}
   relatedProblems={problemRouting['disaster-recovery'].relatedProblems}
   relatedReading={problemRouting['disaster-recovery'].relatedReading}
  />
   {/* ── PLATE · DO-ART-405 ──────────────────────────────────────────── */}
   <section className="g-white" data-od-id="plate">
    <div className="wrap">
     <Plate tone="dark" no="DO-ART-405" title="No plan → documented recovery" rev="01" cls="DECODED OPS · ISSUED">
      <rect x="50" y="100" width="700" height="520" rx="12"
         fill="color-mix(in srgb, var(--do-amber) 8%, var(--do-prussian-blue))"
         stroke="color-mix(in srgb, var(--do-amber) 28%, transparent)" strokeWidth="1.5"/>
      <text x="80" y="150" fontFamily="var(--do-font-heading)" fontWeight="700"
         fontSize="22" fill="var(--do-amber)" letterSpacing="0.06em">NOW</text>
      <g fontFamily="var(--do-font-body)" fontSize="17" fill="color-mix(in srgb, var(--do-off-white) 78%, transparent)">
       <text x="80" y="200"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">No backup procedure exists</tspan></text>
       <text x="80" y="250"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">One server failure = business down</tspan></text>
       <text x="80" y="300"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Recovery plan: call someone who knows</tspan></text>
       <text x="80" y="350"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Every outage is a crisis</tspan></text>
      </g>

      <rect x="850" y="100" width="700" height="520" rx="12"
         fill="color-mix(in srgb, var(--do-cerulean) 8%, var(--do-prussian-blue))"
         stroke="color-mix(in srgb, var(--do-cerulean) 28%, transparent)" strokeWidth="1.5"/>
      <text x="880" y="150" fontFamily="var(--do-font-heading)" fontWeight="700"
         fontSize="22" fill="var(--do-cerulean)" letterSpacing="0.06em">AFTER</text>
      <g fontFamily="var(--do-font-body)" fontSize="17" fill="color-mix(in srgb, var(--do-off-white) 78%, transparent)">
       <text x="880" y="200"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Documented backup and recovery SOPs</tspan></text>
       <text x="880" y="250"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Redundancy built into the architecture</tspan></text>
       <text x="880" y="300"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Written plan anyone can execute</tspan></text>
       <text x="880" y="350"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Outages are handled, not panicked through</tspan></text>
      </g>

      <line x1="770" y1="320" x2="830" y2="320" stroke="var(--do-cerulean)" strokeWidth="2"/>
      <polygon points="828,316 840,320 828,324" fill="var(--do-amber)"/>
     </Plate>
    </div>
   </section>
  </>
 );
}
