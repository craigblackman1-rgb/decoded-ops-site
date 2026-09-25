import type { Metadata } from 'next';
import { ProblemPageDS } from '@/components/ProblemPageDS';
import { DisasterRecoverySchematic } from '@/components/schematics/problems/DisasterRecoverySchematic';
import { JsonLd } from '@/components/JsonLd';
import { problemRouting } from '@/data/problem-routing';
import { problemVideos } from '@/data/problem-videos';
import '@/app/d17-global.css';
import '@/app/d17-problems.css';
import { D17Motion } from '@/components/D17Motion';

export const metadata: Metadata = {
 title: 'Business Continuity Disaster Recovery Plan | Decoded Ops',
 description: 'A business continuity disaster recovery plan for print, decoration and workwear businesses: what happens when systems go down and orders still ship.',
 alternates: { canonical: '/problems/disaster-recovery' },
 openGraph: {
  title: 'Business Continuity Disaster Recovery Plan | Decoded Ops',
  description: 'A business continuity disaster recovery plan for print, decoration and workwear businesses: what happens when systems go down and orders still ship.',
  url: 'https://decodedops.co.uk/problems/disaster-recovery',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: 'Business Continuity Disaster Recovery Plan | Decoded Ops',
  description: 'A business continuity disaster recovery plan for print, decoration and workwear businesses: what happens when systems go down and orders still ship.',
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

const heroArt965 = `<figure class="d17 sx px a965" data-od-id="hero-evidence" data-motion data-no="DO-ART-965" data-rev="01" data-tx="schematic"
        aria-label="Drawn plate DO-ART-965. Six systems, orders, artwork, stock, accounts, website and email, all drawn hanging off one server in the back office. The server is marked cracked, Tuesday 09:12, with a note that the last restore test was never recorded. One box in the back office, and everything hangs off it.">
  <div class="q-grid" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Disaster recovery</span><span>Tuesday · 09:12</span></div>
  <svg class="q" viewBox="0 0 560 420" aria-hidden="true">
    <text class="t-m" x="26" y="44" style="font-size:15px">Single point of failure</text>
    <path class="ln m-draw" pathLength="1" style="animation-delay:.6s" d="M100 124 C100 160 280 150 280 176"/>
    <path class="ln m-draw" pathLength="1" style="animation-delay:.6s" d="M280 124 C280 160 280 150 280 176"/>
    <path class="ln m-draw" pathLength="1" style="animation-delay:.6s" d="M460 124 C460 160 280 150 280 176"/>
    <path class="ln m-draw" pathLength="1" style="animation-delay:.6s" d="M100 318 C100 282 280 290 280 262"/>
    <path class="ln m-draw" pathLength="1" style="animation-delay:.6s" d="M280 318 C280 282 280 290 280 262"/>
    <path class="ln m-draw" pathLength="1" style="animation-delay:.6s" d="M460 318 C460 282 280 290 280 262"/>
    <g class="m-rise" style="animation-delay:0.10s"><rect class="bx" x="30" y="70" width="140" height="54" rx="10"/><text class="t" x="100" y="104" text-anchor="middle" style="font-size:20px;font-weight:700">Orders</text></g>
    <g class="m-rise" style="animation-delay:0.18s"><rect class="bx" x="210" y="70" width="140" height="54" rx="10"/><text class="t" x="280" y="104" text-anchor="middle" style="font-size:20px;font-weight:700">Artwork</text></g>
    <g class="m-rise" style="animation-delay:0.26s"><rect class="bx" x="390" y="70" width="140" height="54" rx="10"/><text class="t" x="460" y="104" text-anchor="middle" style="font-size:20px;font-weight:700">Stock</text></g>
    <g class="m-rise" style="animation-delay:0.34s"><rect class="bx" x="30" y="318" width="140" height="54" rx="10"/><text class="t" x="100" y="352" text-anchor="middle" style="font-size:20px;font-weight:700">Accounts</text></g>
    <g class="m-rise" style="animation-delay:0.42s"><rect class="bx" x="210" y="318" width="140" height="54" rx="10"/><text class="t" x="280" y="352" text-anchor="middle" style="font-size:20px;font-weight:700">Website</text></g>
    <g class="m-rise" style="animation-delay:0.50s"><rect class="bx" x="390" y="318" width="140" height="54" rx="10"/><text class="t" x="460" y="352" text-anchor="middle" style="font-size:20px;font-weight:700">Email</text></g>
    <g class="m-pop" style="animation-delay:1.3s">
      <rect class="bx-x2" x="170" y="176" width="220" height="86" rx="12"/>
      <text class="t-h" x="280" y="214" text-anchor="middle" style="font-size:25px">The one server</text>
      <text class="t-d" x="280" y="242" text-anchor="middle" style="font-size:16px">in the back office</text>
      <path class="crack" d="M300 170 L288 196 L304 208 L286 236 L298 250 L290 268"/>
    </g>
    <text class="t-a" x="408" y="208" style="font-size:16px;font-family:var(--do-font-mono);letter-spacing:.12em">09:12 · DOWN</text>
    <text class="t-d" x="408" y="232" style="font-size:15px">back up by?</text>
    <text class="t-d" x="26" y="404" style="font-size:15px">Last restore test: <tspan class="t-a">never recorded</tspan></text>
  </svg>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">One box in the back office. <em>Everything hangs off it.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-965 · Rev 01</span>
  </div>
</figure>`;

const inlineArt718 = `<figure class="d17 sw sw-doc a718" data-od-id="plate-method" data-motion data-no="DO-ART-718" data-rev="03" data-tx="photo"
        aria-label="Artwork DO-ART-718, the Decoded Method in three layers. Three documents over a photograph of an embroidery floor. A process register lists every process with a named owner role: enquiry to quote, sales lead; artwork approval, studio manager; goods in, warehouse lead; production planning, production manager; embroidery run, production supervisor; despatch, despatch lead; invoicing, accounts. A one-page SOP for despatch in five sections. An improvement log of three-line entries: what happened, why, and what changed.">
  <div class="d17-ph"><img src="/images/d17/problems/hero-workshop-8bff06.webp" alt="" width="1100" height="1224"></div>
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
   relatedSectors={problemRouting['disaster-recovery'].relatedSectors}
   relatedResources={problemRouting['disaster-recovery'].relatedResources}
   video={problemVideos['disaster-recovery']}
   heroArt={heroArt965}
   inlineArt={inlineArt718}
  />
   <D17Motion />
  </>
 );
}
