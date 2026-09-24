import type { Metadata } from 'next';
import { ProblemPageDS } from '@/components/ProblemPageDS';
import { SystemsDontTalkSchematic } from '@/components/schematics/problems/SystemsDontTalkSchematic';
import { JsonLd } from '@/components/JsonLd';
import { problemRouting } from '@/data/problem-routing';
import { problemVideos } from '@/data/problem-videos';
import '@/app/d17-global.css';
import '@/app/d17-problems.css';
import { D17Motion } from '@/components/D17Motion';

export const metadata: Metadata = {
 title: 'When Your Systems Don\'t Talk to Each Other: Decoded Ops',
 description: 'Disconnected systems mean manual rekeying, errors, and hidden costs. Find out what re-keying orders between systems that don\'t talk is actually costing you each week.',
  alternates: { canonical: '/problems/systems-dont-talk' },
  openGraph: {
   title: 'When Your Systems Don\'t Talk to Each Other: Decoded Ops',
   description: 'Disconnected systems mean manual rekeying, errors, and hidden costs. Find out what re-keying orders between systems that don\'t talk is actually costing you each week.',
   url: 'https://decodedops.co.uk/problems/systems-dont-talk',
   images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
   card: 'summary_large_image',
   title: 'When Your Systems Don\'t Talk to Each Other: Decoded Ops',
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

const heroArt976 = `<figure class="d17 sx px a976" data-od-id="hero-evidence" data-motion data-no="DO-ART-976" data-rev="01" data-tx="schematic"
        aria-label="Drawn plate DO-ART-976. Five systems drawn as islands: order management, accounts, artwork, despatch, and the website. Bridges between them are people, manually typing the same data into two systems. No system knows what the others are doing.">
  <div class="q-grid" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Systems don't talk</span><span>Five islands, zero bridges</span></div>
  <svg class="q" viewBox="0 0 560 420" aria-hidden="true">
    <text class="t-m" x="26" y="44" style="font-size:15px">Five systems, zero integration</text>
    <path class="ln-d" d="M140 160 V200"/>
    <path class="ln-d" d="M280 160 V200"/>
    <path class="ln-d" d="M420 160 V200"/>
    <path class="ln-d" d="M210 310 V280"/>
    <path class="ln-d" d="M350 310 V280"/>
    <g class="m-rise" style="animation-delay:0.10s"><rect class="bx" x="60" y="106" width="160" height="54" rx="10"/><text class="t" x="140" y="140" text-anchor="middle" style="font-size:16px;font-weight:700">Orders</text></g>
    <g class="m-rise" style="animation-delay:0.18s"><rect class="bx" x="200" y="106" width="160" height="54" rx="10"/><text class="t" x="280" y="140" text-anchor="middle" style="font-size:16px;font-weight:700">Accounts</text></g>
    <g class="m-rise" style="animation-delay:0.26s"><rect class="bx" x="340" y="106" width="160" height="54" rx="10"/><text class="t" x="420" y="140" text-anchor="middle" style="font-size:16px;font-weight:700">Artwork</text></g>
    <g class="m-rise" style="animation-delay:0.34s"><rect class="bx" x="130" y="310" width="160" height="54" rx="10"/><text class="t" x="210" y="344" text-anchor="middle" style="font-size:16px;font-weight:700">Despatch</text></g>
    <g class="m-rise" style="animation-delay:0.42s"><rect class="bx" x="270" y="310" width="160" height="54" rx="10"/><text class="t" x="350" y="344" text-anchor="middle" style="font-size:16px;font-weight:700">Website</text></g>
    <g class="m-pop" style="animation-delay:1.0s">
      <rect class="bx-x2" x="160" y="200" width="240" height="80" rx="12"/>
      <text class="t-h" x="280" y="236" text-anchor="middle" style="font-size:20px">The bridges</text>
      <text class="t-d" x="280" y="264" text-anchor="middle" style="font-size:16px">are people</text>
    </g>
    <g class="m-pop" style="animation-delay:1.3s">
      <text class="t-a" x="80" y="230" style="font-size:28px">👤</text>
      <text class="t-a" x="260" y="190" style="font-size:28px">👤</text>
      <text class="t-a" x="440" y="230" style="font-size:28px">👤</text>
    </g>
    <text class="t-d" x="26" y="404" style="font-size:15px">Each island knows only what it is told. <tspan class="t-a">Nobody sees the whole picture.</tspan></text>
  </svg>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">Five systems. <em>None of them know what the others are doing.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-976 · Rev 01</span>
  </div>
</figure>`;

const inlineArt918 = `<figure class="d17 sw sw-doc a918" data-od-id="plate-ledger" data-motion data-no="DO-ART-918" data-rev="01" data-tx="schematic"
        aria-label="Drawn plate DO-ART-918, an evidence ledger. A table showing six systems, when they were bought, what they connect to, and what they don't. Most rows show no integration. The cost column adds up to a number nobody has ever added up before.">
  <div class="q-grid" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Systems don't talk</span><span>The evidence ledger</span></div>
  <svg class="q" viewBox="0 0 560 420" aria-hidden="true">
    <text class="t-m" x="26" y="44" style="font-size:15px">What it's actually costing you</text>
    <g class="m-rise" style="animation-delay:0.10s">
      <rect class="bx" x="30" y="70" width="500" height="320" rx="8" fill="none" stroke="#8ECAE6" stroke-width="1.6"/>
      <text class="t-h" x="280" y="100" text-anchor="middle" style="font-size:18px">System integration audit</text>
      <line x1="30" y1="112" x2="530" y2="112" stroke="#8ECAE6" stroke-opacity=".3" stroke-width="1"/>
      <text class="t-m" x="50" y="136" style="font-size:14px">System</text>
      <text class="t-m" x="200" y="136" style="font-size:14px">Bought</text>
      <text class="t-m" x="320" y="136" style="font-size:14px">Connects to</text>
      <line x1="30" y1="146" x2="530" y2="146" stroke="#8ECAE6" stroke-opacity=".3" stroke-width="1"/>
      <text class="t" x="50" y="172" style="font-size:16px">Order management</text>
      <text class="t-d" x="200" y="172" style="font-size:14px">2019</text>
      <text class="t-a" x="320" y="172" style="font-size:14px">Nothing</text>
      <text class="t" x="50" y="204" style="font-size:16px">Accounts</text>
      <text class="t-d" x="200" y="204" style="font-size:14px">2017</text>
      <text class="t-a" x="320" y="204" style="font-size:14px">Orders (manual)</text>
      <text class="t" x="50" y="236" style="font-size:16px">Artwork</text>
      <text class="t-d" x="200" y="236" style="font-size:14px">2021</text>
      <text class="t-a" x="320" y="236" style="font-size:14px">Nothing</text>
      <text class="t" x="50" y="268" style="font-size:16px">Despatch</text>
      <text class="t-d" x="200" y="268" style="font-size:14px">2020</text>
      <text class="t-a" x="320" y="268" style="font-size:14px">Orders (email)</text>
      <text class="t" x="50" y="300" style="font-size:16px">Website</text>
      <text class="t-d" x="200" y="300" style="font-size:14px">2022</text>
      <text class="t-a" x="320" y="300" style="font-size:14px">Nothing</text>
      <line x1="30" y1="316" x2="530" y2="316" stroke="#8ECAE6" stroke-opacity=".3" stroke-width="1"/>
      <text class="t-h t-a" x="50" y="348" style="font-size:16px">Total hidden cost</text>
      <text class="t-h t-a" x="320" y="348" style="font-size:16px">Nobody has added it up</text>
    </g>
  </svg>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">The cost was always there. <em>Nobody had added it up.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-918 · Rev 01</span>
  </div>
</figure>`;

export default function SystemsDontTalkPage() {
 return (
  <>
   <JsonLd data={systemsDontTalkSchema} />
   <ProblemPageDS
   problem="Systems don't talk to each other"
   headline="You have five systems. ||None of them know what the others are doing.||"
   intro="Most decoration and print businesses run four to seven separate systems. Order management, accounts, artwork, the website, despatch. Each one is an island. The only bridges between them are people typing the same data in again, spreadsheets, and emails."
   heroGraphic={<SystemsDontTalkSchematic />}
   heroArt={heroArt976}
   inlineArt={inlineArt918}
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
   relatedSectors={problemRouting['systems-dont-talk'].relatedSectors}
   relatedResources={problemRouting['systems-dont-talk'].relatedResources}
   video={problemVideos['systems-dont-talk']}
  />
   <D17Motion />
  </>
 );
}
