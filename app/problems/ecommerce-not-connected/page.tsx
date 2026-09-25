import type { Metadata } from 'next';
import { ProblemPageDS } from '@/components/ProblemPageDS';
import { EcommerceNotConnectedSchematic } from '@/components/schematics/problems/EcommerceNotConnectedSchematic';
import { JsonLd } from '@/components/JsonLd';
import { problemRouting } from '@/data/problem-routing';
import { problemVideos } from '@/data/problem-videos';
import '@/app/d17-global.css';
import '@/app/d17-problems.css';
import { D17Motion } from '@/components/D17Motion';

export const metadata: Metadata = {
 title: 'eCommerce Not Connected to Your Operations? Here\'s the Fix: Decoded Ops',
 description: 'Your online store orders come in but your stock doesn\'t update, your ERP doesn\'t know, and your invoicing is manual. Here\'s how to fix eCommerce integration for print and decoration businesses.',
 alternates: { canonical: '/problems/ecommerce-not-connected' },
 openGraph: {
  title: 'eCommerce Not Connected to Your Operations? Here\'s the Fix: Decoded Ops',
  description: 'Your online store orders come in but your stock doesn\'t update, your ERP doesn\'t know, and your invoicing is manual. Here\'s how to fix eCommerce integration for print and decoration businesses.',
  url: 'https://decodedops.co.uk/problems/ecommerce-not-connected',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: 'eCommerce Not Connected to Your Operations? Here\'s the Fix: Decoded Ops',
  description: 'Your online store orders come in but your stock doesn\'t update, your ERP doesn\'t know, and your invoicing is manual. Here\'s how to fix eCommerce integration for print and decoration businesses.',
 },
};

const ecommerceNotConnectedSchema = {
 '@context': 'https://schema.org',
 '@graph': [
  {
   '@type': 'FAQPage',
   mainEntity: [
    {
     '@type': 'Question',
     name: 'What happens when eCommerce integration is not scoped before platform selection?',
     acceptedAnswer: { '@type': 'Answer', text: 'The eCommerce platform was chosen on features and price, with the integration question answered by both vendors saying they can integrate. That is not a specification. It is a conversation starter.' },
    },
    {
     '@type': 'Question',
     name: 'Why are API limitations with ERP systems often discovered after purchase?',
     acceptedAnswer: { '@type': 'Answer', text: 'Many ERP and MIS systems in this sector have API capability that only covers certain modules, certain versions, or certain data types. You find out after the contracts are signed.' },
    },
    {
     '@type': 'Question',
     name: 'How does personalisation data structure affect eCommerce integration?',
     acceptedAnswer: { '@type': 'Answer', text: 'The way personalisation data is captured on the front end rarely matches the way it needs to be structured for production. Bridging that gap requires both systems to be flexible. Often one of them is not.' },
    },
    {
     '@type': 'Question',
     name: 'Can a generic eCommerce platform work for a decoration business?',
     acceptedAnswer: { '@type': 'Answer', text: 'Generic eCommerce platforms were not designed for businesses that decorate, personalise, or produce to order. The data model does not fit, and that limits what any integration can achieve.' },
    },
    {
     '@type': 'Question',
     name: 'Why isn\'t my online store syncing with my ERP?',
      acceptedAnswer: { '@type': 'Answer', text: 'Many online store platforms were not designed for businesses that produce to order, handle personalisation, or manage blank inventory separately from finished goods. When an online store is not syncing with your ERP, it is usually because the data model on one side does not match the other. The integration itself is rarely broken. Fixing this requires either a middleware solution, a different eCommerce platform, or both.' },
    },
    {
     '@type': 'Question',
     name: 'Can an online store integrate with a decoration business ERP?',
     acceptedAnswer: { '@type': 'Answer', text: 'Most online store platforms can integrate with many ERPs, but the integration quality depends heavily on whether the ERP has a maintained API and whether the online store can capture your personalisation data in a format the ERP can process. Online store ERP integration for print businesses is a common engagement, and the answer is rarely "yes, it integrates" and more often "it depends on what data you need to move and how fast."' },
    },
   ],
  },
 ],
};

const heroArt966 = `<figure class="d17 sx px ph-fade a966" data-od-id="hero-evidence" data-motion data-no="DO-ART-966" data-rev="01" data-tx="screen"
        aria-label="Artwork DO-ART-966. Two screens over a photograph of a shipping carton. The online store shows order 1042, paid at 09:14: 25 polos, logo embroidered on the left chest. The production schedule below has jobs to schedule, in production and ready, but the slot for order 1042 is empty and marked not received. Between them, no link: retyped by hand. Paid online, unknown on the floor.">
  <div class="d17-ph"><img src="/images/d17/problems/prod-mailer-f70773.webp" alt="" width="900" height="600"></div>
  <div class="d17-scan" aria-hidden="true"></div>
  <div class="sx-top d17-mono" aria-hidden="true"><span>Store and floor</span><span>One order, two systems</span></div>
  <div class="pair" aria-hidden="true">
    <div class="win m-rise" style="animation-delay:.1s">
      <div class="win-bar"><span class="dots"><i></i><i></i><i></i></span><span class="crumb"><span>Online store ›</span> Orders</span><span class="pill">PAID</span></div>
      <div class="win-flat ord">
        <h5>Order 1042</h5>
        <p><b>25 polos</b>, logo embroidered left chest<br>Paid online · 09:14</p>
        <span class="chip">Paid</span>
      </div>
    </div>
    <div class="gapr m-pop" style="animation-delay:.6s"><span>No link · retyped by hand</span></div>
    <div class="win m-rise" style="animation-delay:.3s">
      <div class="win-bar"><span class="dots"><i></i><i></i><i></i></span><span class="crumb"><span>Production ›</span> This week</span><span class="pill">FLOOR</span></div>
      <div class="win-flat">
        <h5>Production schedule</h5>
        <div class="cols">
          <div class="c"><span>To schedule</span><div class="j miss m-pop" style="animation-delay:1s"><small>1042</small>Not received</div><div class="j"><small>1038</small>Club hoodies</div></div>
          <div class="c"><span>In production</span><div class="j"><small>1035</small>Staff polos</div><div class="j"><small>1036</small>Event tees</div></div>
          <div class="c"><span>Ready</span><div class="j"><small>1031</small>Hi-vis vests</div></div>
        </div>
      </div>
    </div>
  </div>
  <div class="sx-foot">
    <div class="sx-bar" aria-hidden="true"></div>
    <p class="sx-say">Paid online. <em>Unknown on the floor.</em></p>
    <span class="d17-mark">decodedops.co.uk · DO-ART-966 · Rev 01</span>
  </div>
</figure>`;

const inlineArt719 = `<figure class="d17 sw a719" data-od-id="plate-gap" data-motion data-no="DO-ART-719" data-rev="03" data-tx="schematic"
        aria-label="Drawn plate DO-ART-719, three ways to fill the gap. The platform you already run, generic and never designed for print and embroidery, holds orders, stock, customers, products, accounts, suppliers, purchasing and reports, with custom development bolted on to make it fit. Decoration and artwork sit in a hatched gap it was not built for. Three ways out of the gap: one, use what's already there, sometimes we can do something with what's already there; two, add a layer on top, sometimes it needs an extra layer on top; three, in amber, use something already built, because there wasn't anything on the market designed to do that job.">
  <div class="q-grid" aria-hidden="true"></div>
  <svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
    <pattern id="q-hatch-719" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="12" height="12" fill="#023047" fill-opacity=".6"/><path d="M0 0 V12" stroke="#8ECAE6" stroke-opacity=".35" stroke-width="1.4"/></pattern>
    <marker id="q-ah719" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#8ECAE6"/></marker>
    <marker id="q-ah719a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#FFB703"/></marker>
  </defs></svg>
  <svg class="q v-wide" viewBox="0 0 1600 660" aria-hidden="true">
    <text class="t-xl" x="60" y="72" style="font-size:52px">Three ways to fill the gap</text>
    <rect x="30" y="30" width="7" height="56" rx="2" class="f-a"/>
    <rect x="130" y="130" width="300" height="56" rx="8" fill="none" stroke="#8ECAE6" stroke-opacity=".6" stroke-dasharray="7 6" stroke-width="1.6"/>
    <text class="t-m" x="150" y="165" style="font-size:16px">Custom development</text>
    <text class="t-m" x="452" y="152" style="font-size:13px;fill:#F8F9FA;fill-opacity:.6">bolted on</text>
    <text class="t-m" x="452" y="172" style="font-size:13px;fill:#F8F9FA;fill-opacity:.6">to make it fit</text>
    <g fill="#023047" stroke="#8ECAE6" stroke-width="1.6"><circle cx="180" cy="190" r="8"/><circle cx="280" cy="190" r="8"/><circle cx="380" cy="190" r="8"/></g>
    <rect x="100" y="196" width="620" height="400" rx="6" fill="none" stroke="#8ECAE6" stroke-opacity=".7" stroke-width="1.8"/>
    <text class="t-m" x="128" y="236" style="font-size:16px;fill:#F8F9FA">The platform you already run</text>
    <text class="t-d" x="128" y="262" style="font-size:17px;fill:#8ECAE6">generic, never designed for print and embroidery</text>
    <g>
      <rect class="bx" x="128" y="286" width="150" height="46" rx="6"/><text class="t" x="146" y="315" style="font-size:18px">Orders</text>
      <rect class="bx" x="292" y="286" width="150" height="46" rx="6"/><text class="t" x="310" y="315" style="font-size:18px">Stock</text>
      <rect class="bx" x="128" y="344" width="150" height="46" rx="6"/><text class="t" x="146" y="373" style="font-size:18px">Customers</text>
      <rect class="bx" x="292" y="344" width="150" height="46" rx="6"/><text class="t" x="310" y="373" style="font-size:18px">Products</text>
      <rect class="bx" x="128" y="402" width="150" height="46" rx="6"/><text class="t" x="146" y="431" style="font-size:18px">Accounts</text>
      <rect class="bx" x="292" y="402" width="150" height="46" rx="6"/><text class="t" x="310" y="431" style="font-size:18px">Suppliers</text>
      <rect class="bx" x="128" y="460" width="150" height="46" rx="6"/><text class="t" x="146" y="489" style="font-size:18px">Purchasing</text>
      <rect class="bx" x="292" y="460" width="150" height="46" rx="6"/><text class="t" x="310" y="489" style="font-size:18px">Reports</text>
    </g>
    <rect class="bx-x" x="490" y="380" width="230" height="180" rx="2" style="fill:url(#q-hatch-719)"/>
    <text class="t-h" x="605" y="468" text-anchor="middle" style="font-size:30px">?</text>
    <text class="t-m" x="605" y="496" text-anchor="middle" style="font-size:14px">The gap</text>
    <text class="t-m" x="100" y="630" style="font-size:15px;fill:#F8F9FA">Decoration and artwork: not built for it</text>
    <path class="ln m-draw" pathLength="1" style="animation-delay:.3s" d="M720 470 H780 C800 470 800 470 800 450 V210 C800 190 810 190 830 190 H960" marker-end="url(#q-ah719)"/>
    <path class="ln m-draw" pathLength="1" style="animation-delay:.6s" d="M720 470 H960" marker-end="url(#q-ah719)"/>
    <path class="ln-a m-draw" pathLength="1" style="animation-delay:.9s" d="M786 470 C800 470 800 480 800 500 V570 C800 590 810 590 830 590 H870"/>
    <rect class="f-a m-pop" style="animation-delay:1.4s" x="870" y="558" width="62" height="64" rx="3"/>
    <path class="ln-a" d="M932 590 H960" marker-end="url(#q-ah719a)"/>
    <circle cx="786" cy="470" r="7" class="f-s"/>
    <g class="m-fade" style="animation-delay:1.1s">
      <circle cx="1010" cy="190" r="23" fill="none" stroke="#8ECAE6" stroke-width="2"/><text class="t-m" x="1010" y="196" text-anchor="middle" style="font-size:15px;fill:#F8F9FA">01</text>
      <text class="t-h" x="1054" y="192" style="font-size:31px">Use what's already there</text>
      <text class="t" x="1054" y="226" style="font-size:19px;fill:#8ECAE6">Sometimes we can do something with what's</text>
      <text class="t" x="1054" y="250" style="font-size:19px;fill:#8ECAE6">already there.</text>
      <circle cx="1010" cy="470" r="23" fill="none" stroke="#8ECAE6" stroke-width="2"/><text class="t-m" x="1010" y="476" text-anchor="middle" style="font-size:15px;fill:#F8F9FA">02</text>
      <text class="t-h" x="1054" y="472" style="font-size:31px">Add a layer on top</text>
      <text class="t" x="1054" y="506" style="font-size:19px;fill:#8ECAE6">Sometimes it needs an extra layer on top.</text>
    </g>
    <g class="m-pop" style="animation-delay:1.7s">
      <circle cx="1010" cy="590" r="23" class="f-a"/><text class="t-m t-p" x="1010" y="596" text-anchor="middle" style="font-size:15px">03</text>
    </g>
    <text class="t-h t-a" x="1054" y="592" style="font-size:31px">Use something already built</text>
    <text class="t" x="1054" y="626" style="font-size:19px;fill:#8ECAE6">Because there wasn't anything on the market</text>
    <text class="t" x="1054" y="650" style="font-size:19px;fill:#8ECAE6">designed to do that job.</text>
  </svg>
  <svg class="q v-tall" viewBox="0 0 700 1320" aria-hidden="true">
    <rect x="10" y="10" width="8" height="96" rx="2" class="f-a"/>
    <text class="t-xl" x="40" y="54" style="font-size:48px">Three ways to</text>
    <text class="t-xl" x="40" y="106" style="font-size:48px">fill the gap</text>
    <rect x="40" y="150" width="420" height="64" rx="8" fill="none" stroke="#8ECAE6" stroke-opacity=".6" stroke-dasharray="7 6" stroke-width="1.6"/>
    <text class="t-m" x="62" y="190" style="font-size:21px">Custom development</text>
    <text class="t-m" x="478" y="178" style="font-size:17px;fill:#F8F9FA;fill-opacity:.6">bolted on</text>
    <text class="t-m" x="478" y="202" style="font-size:17px;fill:#F8F9FA;fill-opacity:.6">to make it fit</text>
    <rect x="10" y="222" width="680" height="560" rx="6" fill="none" stroke="#8ECAE6" stroke-opacity=".7" stroke-width="2"/>
    <text class="t-m" x="36" y="268" style="font-size:21px;fill:#F8F9FA">The platform you already run</text>
    <text class="t-d" x="36" y="302" style="font-size:22px;fill:#8ECAE6">generic, never designed for print and embroidery</text>
    <g>
      <rect class="bx" x="36" y="330" width="300" height="62" rx="6"/><text class="t" x="54" y="370" style="font-size:26px">Orders</text>
      <rect class="bx" x="356" y="330" width="300" height="62" rx="6"/><text class="t" x="374" y="370" style="font-size:26px">Stock</text>
      <rect class="bx" x="36" y="406" width="300" height="62" rx="6"/><text class="t" x="54" y="446" style="font-size:26px">Customers</text>
      <rect class="bx" x="356" y="406" width="300" height="62" rx="6"/><text class="t" x="374" y="446" style="font-size:26px">Products</text>
      <rect class="bx" x="36" y="482" width="300" height="62" rx="6"/><text class="t" x="54" y="522" style="font-size:26px">Accounts</text>
      <rect class="bx" x="356" y="482" width="300" height="62" rx="6"/><text class="t" x="374" y="522" style="font-size:26px">Suppliers</text>
      <rect class="bx" x="36" y="558" width="300" height="62" rx="6"/><text class="t" x="54" y="598" style="font-size:26px">Purchasing</text>
      <rect class="bx" x="356" y="558" width="300" height="62" rx="6"/><text class="t" x="374" y="598" style="font-size:26px">Reports</text>
    </g>
    <rect class="bx-x" x="36" y="646" width="628" height="110" rx="2" style="fill:url(#q-hatch-719)"/>
    <text class="t-m" x="350" y="708" text-anchor="middle" style="font-size:20px;fill:#F8F9FA">? · The gap: decoration and artwork</text>
    <path class="ln" d="M60 782 V1250" style="stroke-width:3"/>
    <path class="ln" d="M60 860 H100" marker-end="url(#q-ah719)"/><path class="ln" d="M60 1010 H100" marker-end="url(#q-ah719)"/><path class="ln-a" d="M60 1080 V1160 H100" marker-end="url(#q-ah719a)"/>
    <circle cx="140" cy="860" r="26" fill="none" stroke="#8ECAE6" stroke-width="2.4"/><text class="t-m" x="140" y="867" text-anchor="middle" style="font-size:19px;fill:#F8F9FA">01</text>
    <text class="t-h" x="184" y="858" style="font-size:34px">Use what's already there</text>
    <text class="t" x="184" y="896" style="font-size:24px;fill:#8ECAE6">Sometimes we can do something with</text>
    <text class="t" x="184" y="926" style="font-size:24px;fill:#8ECAE6">what's already there.</text>
    <circle cx="140" cy="1010" r="26" fill="none" stroke="#8ECAE6" stroke-width="2.4"/><text class="t-m" x="140" y="1017" text-anchor="middle" style="font-size:19px;fill:#F8F9FA">02</text>
    <text class="t-h" x="184" y="1008" style="font-size:34px">Add a layer on top</text>
    <text class="t" x="184" y="1046" style="font-size:24px;fill:#8ECAE6">Sometimes it needs an extra layer on top.</text>
    <circle cx="140" cy="1160" r="26" class="f-a"/><text class="t-m t-p" x="140" y="1167" text-anchor="middle" style="font-size:19px">03</text>
    <text class="t-h t-a" x="184" y="1158" style="font-size:34px">Use something already built</text>
    <text class="t" x="184" y="1196" style="font-size:24px;fill:#8ECAE6">Because there wasn't anything on the</text>
    <text class="t" x="184" y="1226" style="font-size:24px;fill:#8ECAE6">market designed to do that job.</text>
  </svg>
  <div class="foot"><span class="k d17-mono">Inside the operation · the gap</span><span class="d17-mark">decodedops.co.uk · DO-ART-719 · Rev 03</span></div>
</figure>`;

export default function EcommerceNotConnectedPage() {
 return (
  <>
   <JsonLd data={ecommerceNotConnectedSchema} />
   <ProblemPageDS
   problem="eCommerce not connected to production"
   headline="Your online store is live. ||Your production system doesn't know it exists.||"
   intro="Every order taken online has to be typed into your production system by hand. Every day. The cost in time, mistakes, and missed deadlines adds up fast, and most businesses have stopped noticing it."
   heroGraphic={<EcommerceNotConnectedSchematic />}
   symptoms={[
    "Online orders are typed into your production system by hand",
    "There's a gap between an order being placed and it reaching production",
    "Personalisation details arrive separately from the order",
    "Customers keep chasing their order because you can't see where it is",
    "Your web team and your production team are always arguing",
    "Stock sold online doesn't update in real time",
    "You have two different records for every order",
   ]}
   causes={[
    { title: 'The connection was never planned before the platform was picked', body: "The website was chosen on features and price. Both vendors said 'yes, we can connect them', and that was treated as a plan. It isn't. It's a conversation starter." },
    { title: 'The connection only works for part of the system', body: "Many systems in this sector only connect for certain modules, versions, or data. You find that out after the contracts are signed." },
    { title: 'Personalisation data does not line up', body: "The way the website captures names and logos rarely matches the way production needs them. Bridging that gap needs both systems to bend. Usually one of them won't." },
    { title: 'The platform does not fit the business model', body: "Most websites are built for businesses that sell finished stock, not ones that decorate and personalise to order. If the platform can't describe your products properly, no connection will fix it." },
   ]}
   howIHelp="I look at both systems, both sets of data, and the gap between them. Then I tell you what your options really are: a proper connection using what's already there, a middle layer to translate between the two, or accepting that the website platform is wrong for your business and finding a better fit. You get a clear view of cost, time, and risk for each option. Not a sales pitch."
  
   slug="ecommerce-not-connected"
   targetService={problemRouting['ecommerce-not-connected'].targetService}
   relatedProblems={problemRouting['ecommerce-not-connected'].relatedProblems}
   relatedReading={problemRouting['ecommerce-not-connected'].relatedReading}
   relatedSectors={problemRouting['ecommerce-not-connected'].relatedSectors}
   relatedResources={problemRouting['ecommerce-not-connected'].relatedResources}
   video={problemVideos['ecommerce-not-connected']}
   heroArt={heroArt966}
   inlineArt={inlineArt719}
  />
   <D17Motion />
  </>
 );
}
