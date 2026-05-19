import type { Metadata } from 'next';
import { ProblemPage } from '@/components/ProblemPage';
import { SystemsDisconnectedGraphic } from '@/components/graphics/SystemsDisconnectedGraphic';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: "eCommerce Integration for Small Business: Fix the Disconnect | Decoded Ops",
  description: "Your Shopify orders come in but your stock doesn't update, your ERP doesn't know, and your invoicing is manual. Here's how to fix eCommerce integration for print and decoration businesses.",
  alternates: { canonical: '/problems/ecommerce-not-connected' },
  openGraph: {
    title: "eCommerce Integration for Small Business: Fix the Disconnect | Decoded Ops",
    description: "Your Shopify orders come in but your stock doesn't update, your ERP doesn't know, and your invoicing is manual. Here's how to fix eCommerce integration for print and decoration businesses.",
    url: 'https://decodedops.co.uk/problems/ecommerce-not-connected',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "eCommerce Integration for Small Business: Fix the Disconnect | Decoded Ops",
    description: "Your Shopify orders come in but your stock doesn't update and your invoicing is manual. Here's how to fix eCommerce integration for decoration businesses.",
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
          acceptedAnswer: { '@type': 'Answer', text: 'The eCommerce platform was chosen on features and price — with the integration question answered by both vendors saying they can integrate. That is not a specification. It is a conversation starter.' },
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
          acceptedAnswer: { '@type': 'Answer', text: 'Generic eCommerce platforms were not designed for businesses that decorate, personalise, or produce to order. The data model does not fit — and that limits what any integration can achieve.' },
        },
      ],
    },
  ],
};

export default function EcommerceNotConnectedPage() {
  return (
    <>
      <JsonLd data={ecommerceNotConnectedSchema} />
      <ProblemPage
      problem="eCommerce not connected to production"
      headline="Your online store is live. ||Your production system doesn't know it exists.||"
      intro="eCommerce disconnected from production is one of the most common and most costly problems in this sector. Orders taken online that have to be manually re-entered into the production system. Every order. Every day."
      heroGraphic={<SystemsDisconnectedGraphic connected={false} />}
      symptoms={[
        "Online orders are being manually re-entered into your ERP or MIS",
        "There's a delay between order placed and order in production",
        "Personalisation details are arriving separately from the order",
        "Customers are chasing order status because you can't see it easily",
        "Your eCommerce manager and your production manager are in constant conflict",
        "Stock sold online doesn't update in real time",
        "You have two sources of truth for order data",
      ]}
      causes={[
        { title: 'Integration not scoped before platform selection', body: "The eCommerce platform was chosen on features and price — with the integration question answered by both vendors saying 'yes, we can integrate'. That's not a specification. It's a conversation starter." },
        { title: 'API limitations discovered post-purchase', body: "Many ERP and MIS systems in this sector have API capability that only covers certain modules, certain versions, or certain data types. You find out after the contracts are signed." },
        { title: 'Personalisation data structure mismatch', body: "The way personalisation data is captured on the front end rarely matches the way it needs to be structured for production. Bridging that gap requires both systems to be flexible. Often one of them isn't." },
        { title: 'The wrong platform for the business model', body: "Generic eCommerce platforms weren't designed for businesses that decorate, personalise, or produce to order. The data model doesn't fit — and that limits what any integration can achieve." },
      ]}
      howIHelp="I assess the specific integration problem — both systems, both data models, and the gap between them. Then I give you an independent view of what the realistic options are. That might be a proper integration using the APIs that exist. It might mean a middleware solution. It might mean acknowledging that the current eCommerce platform isn't the right one for your business model and helping you select a replacement. You get a clear view of costs, timescales, and risks for each option — not a sales pitch."
    />
    </>
  );
}
