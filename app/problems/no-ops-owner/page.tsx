import type { Metadata } from 'next';
import { ProblemPageDS } from '@/components/ProblemPageDS';
import { NoOpsOwnerSchematic } from '@/components/schematics/problems/NoOpsOwnerSchematic';
import { JsonLd } from '@/components/JsonLd';
import { problemRouting } from '@/data/problem-routing';
import { problemVideos } from '@/data/problem-videos';
import '@/app/d17-global.css';
import '@/app/d17-problems.css';
import { D17Motion } from '@/components/D17Motion';

export const metadata: Metadata = {
 title: 'No Operations Owner? Here\'s What That Costs You: Decoded Ops',
 description: 'When no one owns operations in a growing business, the same problems repeat, until someone owns it. Here\'s what an ops lead actually does, and how to get one without a full-time hire.',
 alternates: { canonical: '/problems/no-ops-owner' },
 openGraph: {
  title: 'No Operations Owner? Here\'s What That Costs You: Decoded Ops',
  description: 'When no one owns operations in a growing business, the same problems repeat, until someone owns it. Here\'s what an ops lead actually does, and how to get one without a full-time hire.',
  url: 'https://decodedops.co.uk/problems/no-ops-owner',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: 'No Operations Owner? Here\'s What That Costs You: Decoded Ops',
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

const heroArt971 = `<figure class="d17 sx px a971" data-od-id="hero-evidence" data-motion data-no="DO-ART-971" data-rev="01" data-tx="schematic"
        aria-label="Drawn plate DO-ART-971. An organisation chart. At the top, the owner. In the middle, an operations seat, hatched and marked vacant. At the bottom, five departments: sales, studio, production, warehouse and accounts. Dashed lines show each department reporting into operations, but the real lines, in amber, route round the empty seat and all land on the owner's desk. Every line leads to your desk.">
  <div class="q-grid" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>No ops owner</span><span>The chart as it runs</span></div>
  <svg class="q" viewBox="0 0 560 410" aria-hidden="true">
    <defs><pattern id="q-hatch-o" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="10" height="10" fill="#023047"/><path d="M0 0 V10" stroke="#FFB703" stroke-opacity=".35" stroke-width="3"/></pattern></defs>
    <path class="ln-d" d="M57 330 V284 H280 V262"/>
    <path class="ln-d" d="M167 330 V284 H280 V262"/>
    <path class="ln-d" d="M277 330 V284 H280 V262"/>
    <path class="ln-d" d="M387 330 V284 H280 V262"/>
    <path class="ln-d" d="M497 330 V284 H280 V262"/>
    <path class="ln-a m-draw" pathLength="1" style="animation-delay:.7s" d="M57 330 V318 H60 V150 C60 118 232 128 232 102"/>
    <path class="ln-a m-draw" pathLength="1" style="animation-delay:.7s" d="M167 330 V310 H120 V150 C120 118 242 128 242 102"/>
    <path class="ln-a m-draw" pathLength="1" style="animation-delay:.7s" d="M277 330 V298 H180 V150 C180 118 252 128 252 102"/>
    <path class="ln-a m-draw" pathLength="1" style="animation-delay:.7s" d="M387 330 V304 H400 V150 C400 118 318 128 318 102"/>
    <path class="ln-a m-draw" pathLength="1" style="animation-delay:.7s" d="M497 330 V312 H460 V150 C460 118 328 128 328 102"/>
    <g class="m-pop" style="animation-delay:1.4s"><rect class="bx-a" x="210" y="44" width="140" height="58" rx="12"/>
      <text class="t-h t-a" x="280" y="81" text-anchor="middle" style="font-size:23px">Owner</text></g>
    <rect class="vac" x="200" y="196" width="160" height="66" rx="12"/>
    <text class="t-h" x="280" y="226" text-anchor="middle" style="font-size:21px">Operations</text>
    <text class="t-m t-a" x="280" y="250" text-anchor="middle" style="font-size:13px">vacant</text>
    <g class="m-rise" style="animation-delay:0.10s"><rect class="bx" x="8" y="330" width="98" height="54" rx="10"/><text class="t" x="57" y="363" text-anchor="middle" style="font-size:17px;font-weight:700">Sales</text></g>
    <g class="m-rise" style="animation-delay:0.18s"><rect class="bx" x="118" y="330" width="98" height="54" rx="10"/><text class="t" x="167" y="363" text-anchor="middle" style="font-size:17px;font-weight:700">Studio</text></g>
    <g class="m-rise" style="animation-delay:0.26s"><rect class="bx" x="228" y="330" width="98" height="54" rx="10"/><text class="t" x="277" y="363" text-anchor="middle" style="font-size:17px;font-weight:700">Production</text></g>
    <g class="m-rise" style="animation-delay:0.34s"><rect class="bx" x="338" y="330" width="98" height="54" rx="10"/><text class="t" x="387" y="363" text-anchor="middle" style="font-size:17px;font-weight:700">Warehouse</text></g>
    <g class="m-rise" style="animation-delay:0.42s"><rect class="bx" x="448" y="330" width="98" height="54" rx="10"/><text class="t" x="497" y="363" text-anchor="middle" style="font-size:17px;font-weight:700">Accounts</text></g>
    <text class="t-d" x="280" y="406" text-anchor="middle" style="font-size:15px">dashed: how it should run · amber: how it does</text>
  </svg>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">Every line leads <em>to your desk.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-971 · Rev 01</span>
  </div>
</figure>`;

const inlineArt718 = `<figure class="d17 sw sw-doc a718" data-od-id="plate-method" data-motion data-no="DO-ART-718" data-rev="03" data-tx="photo"
        aria-label="Artwork DO-ART-718, the Decoded Method in three layers. Three documents over a photograph of an embroidery floor. A process register lists every process with a named owner role: enquiry to quote, sales lead; artwork approval, studio manager; goods in, warehouse lead; production planning, production manager; embroidery run, production supervisor; despatch, despatch lead; invoicing, accounts. A one-page SOP for despatch in five sections. An improvement log of three-line entries: what happened, why, and what changed.">
  <div class="d17-ph"><img src="{{IMG:decoded-marketing/assets/commerce/hero-workshop.jpg|crop=0,120,1600,1900|blank=680,1340,800,1440;1080,1270,1270,1420|w=1100|q=80}}" alt="" width="1100" height="1224"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <figcaption class="sw-cap">
    <div class="k d17-mono">The Decoded Method <span>· in plain English</span></div>
    <div class="bar" aria-hidden="true"></div>
    <h3>Three layers.</h3>
    <p>How a business runs, written down so it can be handed over instead of living in one person's head.</p>
    <ul class="keys">
      <li><b>01</b><span>Process register</span><small>one page</small></li>
      <li><b>02</b><span>One-page SOPs</span><small>five sections</small></li>
      <li><b>03</b><span>Improvement log</span><small>three lines</small></li>
    </ul>
    <span class="d17-mark">decodedops.co.uk · DO-ART-718 · Rev 03</span>
  </figcaption>
  <div class="stage" aria-hidden="true">
    <div class="d17-doc doc-r m-drop" style="animation-delay:.1s">
      <span class="tab">01</span>
      <span class="ref">PR-01 · Process register</span>
      <h4>Every process, one page</h4>
      <p class="sub">each process has a named owner · reviewed quarterly</p>
      <table class="reg">
        <tr><th>Process</th><th>Owner</th><th>SOP</th></tr>
        <tr><td>Enquiry to quote</td><td>Sales lead</td><td class="s">SOP-01</td></tr>
        <tr><td>Artwork approval</td><td>Studio manager</td><td class="s">SOP-02</td></tr>
        <tr><td>Goods in</td><td>Warehouse lead</td><td class="s">SOP-03</td></tr>
        <tr><td>Production planning</td><td>Production manager</td><td class="s">SOP-04</td></tr>
        <tr><td>Embroidery run</td><td>Production supervisor</td><td class="s">SOP-05</td></tr>
        <tr><td>Despatch</td><td>Despatch lead</td><td class="s">SOP-06</td></tr>
        <tr><td>Invoicing</td><td>Accounts</td><td class="s">SOP-07</td></tr>
      </table>
    </div>
    <div class="d17-doc sop doc-s m-drop" style="animation-delay:.4s">
      <span class="tab">02</span>
      <span class="ref">SOP-06 · Despatch</span>
      <h4>Despatch: pack and ship</h4>
      <p class="sub">Owner: Despatch lead · one page</p>
      <p class="h"><i>1</i>Purpose</p>
      <p class="p">Every order leaves complete, checked and booked the same way.</p>
      <p class="h"><i>2</i>When it applies</p>
      <p class="p">Any order marked ready to ship.</p>
      <p class="h"><i>3</i>Steps</p>
      <div class="line" style="width:92%"></div><div class="line" style="width:84%"></div><div class="line" style="width:70%"></div>
      <p class="h"><i>4</i>Checks</p>
      <div class="line" style="width:80%"></div>
      <p class="h"><i>5</i>If it goes wrong</p>
      <p class="p">Log it in the improvement log, three lines.</p>
    </div>
    <div class="d17-doc il doc-l m-drop" style="animation-delay:.7s">
      <span class="tab">03</span>
      <span class="ref">IL · Improvement log</span>
      <h4>Three lines, every time</h4>
      <div class="e"><div class="d"><b>Despatch</b>SOP-06</div>
        <div class="t"><span><em>What</em>Second box of a two-box order left behind.</span><span><em>Why</em>No box count on the packing check.</span><span><em>Change</em>Box count added to SOP-06, step 4.</span></div></div>
      <div class="e"><div class="d"><b>Artwork</b>SOP-02</div>
        <div class="t"><span><em>What</em>Proof approved on an old version.</span><span><em>Why</em>Versions sent by email.</span><span><em>Change</em>Approval recorded against the version.</span></div></div>
    </div>
  </div>
</figure>`;

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
   relatedSectors={problemRouting['no-ops-owner'].relatedSectors}
   relatedResources={problemRouting['no-ops-owner'].relatedResources}
   video={problemVideos['no-ops-owner']}
   heroArt={heroArt971}
   inlineArt={inlineArt718}
  />
   <D17Motion />
  </>
 );
}
