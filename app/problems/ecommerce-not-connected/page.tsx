import type { Metadata } from 'next';
import { ProblemPageDS } from '@/components/ProblemPageDS';
import { EcommerceNotConnectedSchematic } from '@/components/schematics/problems/EcommerceNotConnectedSchematic';
import { JsonLd } from '@/components/JsonLd';
import { problemRouting } from '@/data/problem-routing';
import { Plate } from '@/components/Plate';

export const metadata: Metadata = {
 title: 'eCommerce Not Connected to Your Operations? Here\'s the Fix | Decoded Ops',
 description: 'Your Shopify orders come in but your stock doesn\'t update, your ERP doesn\'t know, and your invoicing is manual. Here\'s how to fix eCommerce integration for print and decoration businesses.',
 alternates: { canonical: '/problems/ecommerce-not-connected' },
 openGraph: {
  title: 'eCommerce Not Connected to Your Operations? Here\'s the Fix | Decoded Ops',
  description: 'Your Shopify orders come in but your stock doesn\'t update, your ERP doesn\'t know, and your invoicing is manual. Here\'s how to fix eCommerce integration for print and decoration businesses.',
  url: 'https://decodedops.co.uk/problems/ecommerce-not-connected',
  images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
 },
 twitter: {
  card: 'summary_large_image',
  title: 'eCommerce Not Connected to Your Operations? Here\'s the Fix | Decoded Ops',
  description: 'Your Shopify orders come in but your stock doesn\'t update, your ERP doesn\'t know, and your invoicing is manual. Here\'s how to fix eCommerce integration for print and decoration businesses.',
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
     name: 'Why is Shopify not syncing with my ERP?',
      acceptedAnswer: { '@type': 'Answer', text: 'Shopify was not designed for businesses that produce to order, handle personalisation, or manage blank inventory separately from finished goods. When Shopify is not syncing with your ERP, it is usually because the data model on one side does not match the other. The integration itself is rarely broken. Fixing this requires either a middleware solution, a different eCommerce platform, or both.' },
    },
    {
     '@type': 'Question',
     name: 'Can WooCommerce integrate with a decoration business ERP?',
     acceptedAnswer: { '@type': 'Answer', text: 'WooCommerce can integrate with many ERPs, but the integration quality depends heavily on whether the ERP has a maintained API and whether WooCommerce can capture your personalisation data in a format the ERP can process. WooCommerce ERP integration for print businesses is a common engagement, and the answer is rarely "yes, it integrates" and more often "it depends on what data you need to move and how fast."' },
    },
   ],
  },
 ],
};

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
  />
   {/* ── PLATE · DO-ART-406 ──────────────────────────────────────────── */}
   <section className="g-white" data-od-id="plate">
    <div className="wrap">
     <Plate tone="dark" no="DO-ART-406" title="Disconnected channels → unified system" rev="01" cls="DECODED OPS · ISSUED">
      <rect x="50" y="100" width="700" height="520" rx="12"
         fill="color-mix(in srgb, var(--do-amber) 8%, var(--do-prussian-blue))"
         stroke="color-mix(in srgb, var(--do-amber) 28%, transparent)" strokeWidth="1.5"/>
      <text x="80" y="150" fontFamily="var(--do-font-heading)" fontWeight="700"
         fontSize="22" fill="var(--do-amber)" letterSpacing="0.06em">NOW</text>
      <g fontFamily="var(--do-font-body)" fontSize="17" fill="color-mix(in srgb, var(--do-off-white) 78%, transparent)">
       <text x="80" y="200"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Website stock doesn&apos;t match the warehouse</tspan></text>
       <text x="80" y="250"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Orders entered twice: online then ERP</tspan></text>
       <text x="80" y="300"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Customer sees one price, you invoice another</tspan></text>
       <text x="80" y="350"><tspan fill="var(--do-amber)" fontWeight="700">✕</tspan><tspan dx="14">Every channel runs on its own data</tspan></text>
      </g>

      <rect x="850" y="100" width="700" height="520" rx="12"
         fill="color-mix(in srgb, var(--do-cerulean) 8%, var(--do-prussian-blue))"
         stroke="color-mix(in srgb, var(--do-cerulean) 28%, transparent)" strokeWidth="1.5"/>
      <text x="880" y="150" fontFamily="var(--do-font-heading)" fontWeight="700"
         fontSize="22" fill="var(--do-cerulean)" letterSpacing="0.06em">AFTER</text>
      <g fontFamily="var(--do-font-body)" fontSize="17" fill="color-mix(in srgb, var(--do-off-white) 78%, transparent)">
       <text x="880" y="200"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Single catalogue feeds every channel</tspan></text>
       <text x="880" y="250"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Order flows through automatically</tspan></text>
       <text x="880" y="300"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">Pricing consistent everywhere</tspan></text>
       <text x="880" y="350"><tspan fill="var(--do-cerulean)" fontWeight="700">✓</tspan><tspan dx="14">One source of truth for stock and orders</tspan></text>
      </g>

      <line x1="770" y1="320" x2="830" y2="320" stroke="var(--do-cerulean)" strokeWidth="2"/>
      <polygon points="828,316 840,320 828,324" fill="var(--do-amber)"/>
     </Plate>
    </div>
   </section>
  </>
 );
}
