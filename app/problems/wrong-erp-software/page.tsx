import type { Metadata } from 'next';
import { ProblemPage } from '@/components/ProblemPage';
import { SystemsDisconnectedGraphic } from '@/components/graphics/SystemsDisconnectedGraphic';
import { JsonLd } from '@/components/JsonLd';
import { problemRouting } from '@/data/problem-routing';

export const metadata: Metadata = {
  title: 'Wrong ERP Software: How to Choose the Right System | Decoded Ops',
  description: 'Chose an ERP that doesn\'t fit your operation? You\'re not alone. Here\'s how to evaluate ERP for print, embroidery, and decoration businesses — without the vendor bias.',
  alternates: { canonical: '/problems/wrong-erp-software' },
  openGraph: {
    title: 'Wrong ERP Software: How to Choose the Right System | Decoded Ops',
    description: 'Chose an ERP that doesn\'t fit your operation? You\'re not alone. Here\'s how to evaluate ERP for print, embroidery, and decoration businesses — without the vendor bias.',
    url: 'https://decodedops.co.uk/problems/wrong-erp-software',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wrong ERP Software: How to Choose the Right System | Decoded Ops',
    description: 'Chose an ERP that doesn\'t fit your operation? You\'re not alone. Here\'s how to evaluate ERP for print, embroidery, and decoration businesses — without the vendor bias.',
  },
};

const wrongErpSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why does selecting ERP software based on a demo lead to problems?',
          acceptedAnswer: { '@type': 'Answer', text: 'Vendors are excellent at demos. They show you the things the software does well and move quickly past the things it does not. Without sector expertise on your side of the table, you are evaluating presentation skills.' },
        },
        {
          '@type': 'Question',
          name: 'Why should you write an independent vendor brief before selecting ERP?',
          acceptedAnswer: { '@type': 'Answer', text: 'A vendor brief — written by someone who understands your business model before you talk to any vendor — changes the selection process entirely. Without it, you are being sold to rather than making an informed choice.' },
        },
        {
          '@type': 'Question',
          name: 'Why are ERP reference sites in other sectors misleading?',
          acceptedAnswer: { '@type': 'Answer', text: 'Generic ERP vendors often have good reference sites in manufacturing or distribution. Those references do not tell you how the software performs in a decoration business with mixed methods, variable artwork, and short-run personalisation.' },
        },
        {
          '@type': 'Question',
          name: 'What is the total cost of ownership for an ERP system?',
          acceptedAnswer: { '@type': 'Answer', text: 'Implementation, training, customisation, integration, ongoing support. The total cost of ownership for an ERP is often two to three times the headline licence cost. That comparison rarely happens before selection.' },
        },
        {
          '@type': 'Question',
          name: 'How do I choose the right ERP for a print or embroidery business?',
          acceptedAnswer: { '@type': 'Answer', text: 'Write the requirements brief before you speak to any vendor. The brief should document your actual workflows — decoration methods, artwork approval process, B2B ordering, eCommerce integration requirements, and how you manage blanks inventory. Once the brief exists, you can evaluate ERP solutions for manufacturing and decoration on a like-for-like basis.' },
        },
        {
          '@type': 'Question',
          name: 'What ERP works with Shopify for an embroidery or decoration business?',
          acceptedAnswer: { '@type': 'Answer', text: 'Several ERPs in this sector can integrate with Shopify, but the quality of that integration varies significantly. The questions to ask are: does the integration handle personalisation data, not just order totals? Does stock sync in real time? And is the integration maintained by the ERP vendor or reliant on a third-party connector that could break? An independent ERP evaluation covers all of these.' },
        },
      ],
    },
  ],
};

export default function WrongERPSoftwarePage() {
  return (
    <>
      <JsonLd data={wrongErpSchema} />
      <ProblemPage
      problem="Wrong ERP software"
      headline="The ERP for small business looked right in the demo. ||It doesn't fit how your business works.||"
      intro="Selecting the wrong ERP for small business is one of the most expensive mistakes in this sector. The cost isn't just the software — it's the implementation, the disruption, the workarounds that accumulate, and the productivity you never recover. And in most cases, it was avoidable with an independent evaluation before the contracts were signed."
      heroGraphic={<SystemsDisconnectedGraphic connected={false} />}
      symptoms={[
        "The system can't handle decoration method-specific workflows without heavy customisation",
        "You're maintaining manual processes alongside the system because it can't replace them",
        "The vendor keeps telling you it's a configuration issue, not a software limitation",
        "Your team have found ways around the system rather than working within it",
        "Customisation costs have exceeded the original software licence",
        "You selected based on a demo that showed a different kind of business",
        "The vendor's support team doesn't understand your industry",
      ]}
      causes={[
        { title: 'Selected on demo, not on fit', body: "Vendors are excellent at demos. They show you the things the software does well and move quickly past the things it doesn't. Without sector expertise on your side of the table, you're evaluating presentation skills. Systems like OrderWise, PANTA, and DecoNetwork all perform differently depending on your decoration mix and order model. The only way to evaluate them fairly is against a written brief that reflects your actual business." },
        { title: 'No independent specification written first', body: "A vendor brief — written by someone who understands your business model before you talk to any vendor — changes the selection process entirely. Without it, you're being sold to rather than making an informed choice." },
        { title: 'Reference sites in a different sector', body: "Generic ERP vendors often have good reference sites in manufacturing or distribution. Those references don't tell you how the software performs in a decoration business with mixed methods, variable artwork, and short-run personalisation." },
        { title: "The total cost wasn't modelled", body: "Implementation, training, customisation, integration, ongoing support. The total cost of ownership for an ERP is often two to three times the headline licence cost. That comparison rarely happens before selection." },
      ]}
      howIHelp="If you're in a system that doesn't fit, I give you an honest assessment of what your options are. Sometimes there's more capability in the existing system than you're using — the implementation was poor, not the software. Sometimes the software genuinely isn't right and you need to plan a managed exit. Either way, I help you understand the real cost of staying versus moving — and if you're moving, I write the independent vendor brief that makes sure you don't end up in the same situation again. And if you're moving, I write the independent vendor brief that makes sure the next ERP for your small business is chosen on fit — not on how good the demo looked."
    
      slug="wrong-erp-software"
      targetService={problemRouting['wrong-erp-software'].targetService}
      relatedProblems={problemRouting['wrong-erp-software'].relatedProblems}
      relatedReading={problemRouting['wrong-erp-software'].relatedReading}
    />
    </>
  );
}
