import type { Metadata } from 'next';
import { ProblemPageDS } from '@/components/ProblemPageDS';
import { EcommerceNotConnectedSchematic } from '@/components/schematics/problems/EcommerceNotConnectedSchematic';
import { JsonLd } from '@/components/JsonLd';
import { problemRouting } from '@/data/problem-routing';
import { Plate } from '@/components/Plate';
import { NowAfterPlate } from '@/components/NowAfterPlate';

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
       <NowAfterPlate
        now={[
          "Website stock doesn't match the warehouse",
          'Orders entered twice: online then ERP',
          'Customer sees one price, you invoice another',
          'Every channel runs on its own data',
        ]}
        after={[
          'Single catalogue feeds every channel',
          'Order flows through automatically',
          'Pricing consistent everywhere',
          'One source of truth for stock and orders',
        ]}
       />
     </Plate>
    </div>
   </section>
  </>
 );
}
