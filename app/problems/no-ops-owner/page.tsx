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
 title: "Interim Operations Director, Decoration | Decoded Ops",
 description: "An interim operations director stops the same problems landing back on your desk. Here's what the role does, and how to get one without a full-time hire.",
 alternates: { canonical: '/problems/no-ops-owner' },
 openGraph: {
  title: "Interim Operations Director, Decoration | Decoded Ops",
  description: "An interim operations director stops the same problems landing back on your desk. Here's what the role does, and how to get one without a full-time hire.",
  url: 'https://decodedops.co.uk/problems/no-ops-owner',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: "Interim Operations Director, Decoration | Decoded Ops",
  description: "An interim operations director stops the same problems landing back on your desk. Here's what the role does, and how to get one without a full-time hire.",
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

const inlineArt1011 = `<figure class="d17 sw sw-doc a718 a1011" data-od-id="plate-ownership" data-motion data-no="DO-ART-1011" data-rev="01" data-tx="photo"
        aria-label="Artwork DO-ART-1011, who owns operations. Three documents over a photograph of warehouse racking: a register of work nobody owns today, an options sheet for a hire, a part-time operations lead or a different structure, and a three-line decision log.">
  <div class="d17-ph"><img src="/images/d17/problems/plate-racking-bays-626a9b.webp" alt="" width="1600" height="900" style="object-position:50% 40%"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <figcaption class="sw-cap">
    <div class="k d17-mono">Operations ownership <span>· the options, written down</span></div>
    <div class="bar" aria-hidden="true"></div>
    <h3>Who owns operations?</h3>
    <p>A part-time operations lead gives you the accountability and the thinking without the overhead.</p>
    <ul class="keys">
      <li><b>01</b><span>Dedicated hire</span><small>one person, full time</small></li>
      <li><b>02</b><span>Part-time lead</span><small>accountability, no overhead</small></li>
      <li><b>03</b><span>Different structure</span><small>restructure what exists</small></li>
    </ul>
    <span class="d17-mark">decodedops.co.uk · DO-ART-1011 · Rev 01</span>
  </figcaption>
  <div class="stage" aria-hidden="true">
    <div class="d17-doc doc-r m-drop" style="animation-delay:.1s">
      <span class="tab">01</span>
      <span class="ref">OO-01 · Ownership gaps</span>
      <h4>Who owns it today?</h4>
      <p class="sub">the work that falls between departments</p>
      <table class="reg">
        <tr><th>Area</th><th>Owner today</th><th>Status</th></tr>
        <tr><td>Processes that cross teams</td><td>Nobody</td><td class="s">Unowned</td></tr>
        <tr><td>Systems that connect departments</td><td>Nobody</td><td class="s">Unowned</td></tr>
        <tr><td>Improvements</td><td>Nobody</td><td class="s">Unowned</td></tr>
        <tr><td>Operations decisions</td><td>Your desk</td><td class="s">Overloaded</td></tr>
      </table>
    </div>
    <div class="d17-doc sop doc-s m-drop" style="animation-delay:.4s">
      <span class="tab">02</span>
      <span class="ref">OO-02 · Options</span>
      <h4>What can your business support right now?</h4>
      <p class="sub">level of ownership · one page</p>
      <p class="h"><i>1</i>Dedicated</p>
      <p class="p">A dedicated operations person.</p>
      <p class="h"><i>2</i>Part-time</p>
      <p class="p">A part-time operations lead.</p>
      <p class="h"><i>3</i>Different structure</p>
      <p class="p">A different structure altogether.</p>
      <p class="h"><i>4</i>Where time goes</p>
      <p class="p">Where your time goes, where the bottlenecks are.</p>
      <p class="h"><i>5</i>Route forward</p>
      <p class="p">Hiring, restructuring, or a retained part-time role.</p>
    </div>
    <div class="d17-doc il doc-l m-drop" style="animation-delay:.7s">
      <span class="tab">03</span>
      <span class="ref">DL · Decision log</span>
      <h4>Three lines, every time</h4>
      <div class="e"><div class="d"><b>Option 2</b>Chosen</div>
        <div class="t"><span><em>What</em>Operational leadership.</span><span><em>Why</em>Without a full-time salary.</span><span><em>Change</em>A retained part-time role.</span></div></div>
      <div class="e"><div class="d"><b>Today</b>As-is</div>
        <div class="t"><span><em>What</em>Cross-team work has no owner.</span><span><em>Why</em>Departments own only their own area.</span><span><em>Change</em>Named ownership, written down.</span></div></div>
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
   intro="In many growing businesses, nobody owns operations. The MD handles the big decisions, department heads handle their own areas, and everything in between falls through the cracks: the processes that cross teams, the systems that connect departments, the improvements nobody's responsible for. You don't need a full-time hire to fix that. A part-time operations lead, in effect an interim operations director, gives you the accountability and the thinking without the overhead."
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
   howIHelp="I help you work out whether you need a dedicated operations person, a part-time operations lead, or a different structure altogether. I look at where your time goes, where the bottlenecks are, and what level of ownership your business can support right now. Then I give you a practical route forward, whether that's hiring, restructuring, or me stepping into a retained part-time role that gives you operational leadership without a full-time salary. If an interim operations director is the answer, the Retained service provides exactly that."
  
   slug="no-ops-owner"
   targetService={problemRouting['no-ops-owner'].targetService}
   relatedProblems={problemRouting['no-ops-owner'].relatedProblems}
   relatedReading={problemRouting['no-ops-owner'].relatedReading}
   relatedSectors={problemRouting['no-ops-owner'].relatedSectors}
   relatedResources={problemRouting['no-ops-owner'].relatedResources}
   video={problemVideos['no-ops-owner']}
   heroArt={heroArt971}
   inlineArt={inlineArt1011}
  />
   <D17Motion />
  </>
 );
}
