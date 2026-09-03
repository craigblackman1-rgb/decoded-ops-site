import type { Metadata } from 'next';
import { ProblemPageDS } from '@/components/ProblemPageDS';
import { Plate } from '@/components/Plate';
import { NowAfterPlate } from '@/components/NowAfterPlate';
import { SystemsDontTalkSchematic } from '@/components/schematics/problems/SystemsDontTalkSchematic';
import { JsonLd } from '@/components/JsonLd';
import { problemRouting } from '@/data/problem-routing';

export const metadata: Metadata = {
 title: 'When Your Systems Don\'t Talk to Each Other | Decoded Ops',
 description: 'Disconnected systems mean manual rekeying, errors, and hidden costs. Find out what re-keying orders between systems that don\'t talk is actually costing you each week.',
  alternates: { canonical: '/problems/systems-dont-talk' },
  openGraph: {
   title: 'When Your Systems Don\'t Talk to Each Other | Decoded Ops',
   description: 'Disconnected systems mean manual rekeying, errors, and hidden costs. Find out what re-keying orders between systems that don\'t talk is actually costing you each week.',
   url: 'https://decodedops.co.uk/problems/systems-dont-talk',
   images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
   card: 'summary_large_image',
   title: 'When Your Systems Don\'t Talk to Each Other | Decoded Ops',
   description: 'Disconnected systems mean manual rekeying, errors, and hidden costs. Find out what re-keying orders between systems that don\'t talk is actually costing you each week.',
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
   intro="Most decoration and print businesses run four to seven separate systems. Order management, accounts, artwork, the website, despatch. Each one is an island. The only bridges between them are people typing the same data in again, spreadsheets, and emails."
   heroGraphic={<SystemsDontTalkSchematic />}
   symptoms={[
    "You type the same data into more than one system",
    "You can't see the whole order without checking three different places",
    "Getting a report means pulling data out of several systems and stitching it together",
    "Mistakes creep in every time data moves between systems",
    "Different teams are working from different versions of the same information",
    "You've accepted admin work that shouldn't need doing",
    "Every time you add a system, the admin gets worse, not better",
   ]}
   causes={[
    { title: 'Each system was bought on its own', body: "Each system was picked to solve one problem, without asking how it would connect to the rest. The 'how will this talk to everything else?' question got put off and never answered." },
    { title: 'No plan for how the systems connect', body: "Nobody ever looked at the whole picture. Systems piled up one at a time, and each new one made the last one harder to fit." },
    { title: 'Software that is hard to connect to anything else', body: "Some systems in this sector won't connect to others without expensive, fiddly work. You're rarely told that at the point of sale." },
    { title: 'You never see what the workarounds cost', body: "Typing the same data in twice, fixing errors, and pulling reports by hand never shows up on an invoice. It's hidden in staff time that gets blamed on everything except the real cause." },
   ]}
   howIHelp="I map every system you use, every bit of data that moves between them, and every manual bridge your team has built to paper over the gaps. Then I show you what it's actually costing you. After that, I give you independent options: connect systems where it makes sense, merge them where that's cheaper, or replace the ones that are the problem. No vendor relationships. No preferred solutions. Just a clear picture and a practical way forward."
  
   slug="systems-dont-talk"
   targetService={problemRouting['systems-dont-talk'].targetService}
   relatedProblems={problemRouting['systems-dont-talk'].relatedProblems}
   relatedReading={problemRouting['systems-dont-talk'].relatedReading}
  />
   {/* ── PLATE · DO-ART-410 ──────────────────────────────────────────── */}
   <section className="g-white" data-od-id="plate">
    <div className="wrap">
      <Plate tone="dark" no="DO-ART-410" title="Siloed → connected systems" rev="01" cls="DECODED OPS · ISSUED">
       <NowAfterPlate
        now={[
          'Six systems, zero integration',
          'Same data entered three times',
          'Nobody trusts any one system fully',
          'Manual reconciliation weekly',
        ]}
        after={[
          'Connected architecture, one data layer',
          'Enter once, available everywhere',
          'Single source of truth, everyone trusts it',
          'Real-time, no reconciliation needed',
        ]}
       />
      </Plate>
    </div>
   </section>
  </>
 );
}
