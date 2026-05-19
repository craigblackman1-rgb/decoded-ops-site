import type { Metadata } from 'next';
import { ProblemPage } from '@/components/ProblemPage';
import { SystemsDisconnectedGraphic } from '@/components/graphics/SystemsDisconnectedGraphic';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'ERP Implementation Failure: Why Decorated Goods Projects Fail | Decoded Ops',
  description: "Most ERP projects in print, embroidery, and decoration businesses go over budget and under-deliver. Here's why — and how to avoid it.",
  alternates: { canonical: '/problems/erp-implementation-failure' },
  openGraph: {
    title: 'ERP Implementation Failure: Why Decorated Goods Projects Fail | Decoded Ops',
    description: "Most ERP projects in print, embroidery, and decoration businesses go over budget and under-deliver. Here's why — and how to avoid it.",
    url: 'https://decodedops.co.uk/problems/erp-implementation-failure',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ERP Implementation Failure: Why Decorated Goods Projects Fail | Decoded Ops',
    description: "Most ERP projects in print, embroidery, and decoration businesses go over budget and under-deliver. Here's why — and how to avoid it.",
  },
};

const erpFailureSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What happens when the vendor scopes their own ERP implementation?',
          acceptedAnswer: { '@type': 'Answer', text: 'When the vendor scopes their own implementation, they scope for the software — not for your business. The gaps only become visible after go-live.' },
        },
        {
          '@type': 'Question',
          name: 'Why do ERP implementations fail without independent oversight?',
          acceptedAnswer: { '@type': 'Answer', text: 'Without someone in your corner who understands both the sector and the software, there is no one to hold the vendor to account when they miss requirements or cut corners.' },
        },
        {
          '@type': 'Question',
          name: 'How does data quality affect ERP implementation success?',
          acceptedAnswer: { '@type': 'Answer', text: 'Most implementation failures trace back to data quality. Clean data migration is unglamorous work that vendors underprice and businesses underestimate.' },
        },
        {
          '@type': 'Question',
          name: 'Can the wrong ERP software cause implementation failure?',
          acceptedAnswer: { '@type': 'Answer', text: 'Sometimes the implementation fails because the software was the wrong choice from the start — selected on demo, not on fit.' },
        },
      ],
    },
  ],
};

export default function ERPImplementationFailurePage() {
  return (
    <>
      <JsonLd data={erpFailureSchema} />
      <ProblemPage
      problem="ERP implementation failure"
      headline="Your ERP implementation has gone wrong. ||Here's what to do next.||"
      intro="ERP implementations fail in this sector more often than vendors will admit. Usually not because the software is bad — but because the implementation wasn't designed around how decoration and print businesses actually work."
      heroGraphic={<SystemsDisconnectedGraphic connected={false} />}
      symptoms={[
        "The system went live but the team are still using spreadsheets alongside it",
        "You went live late, over budget, or both",
        "The vendor is still on-site months after the planned go-live",
        "Key processes still can't be done in the system",
        "You're paying for a system you're only using 40% of",
        "Your team have lost confidence in the data",
        "You're thinking about starting the selection process again",
      ]}
      causes={[
        { title: 'Scoping done by the vendor', body: "When the vendor scopes their own implementation, they scope for the software — not for your business. The gaps only become visible after go-live." },
        { title: 'No independent oversight', body: "Without someone in your corner who understands both the sector and the software, there's no one to hold the vendor to account when they miss requirements or cut corners." },
        { title: 'Data not prepared', body: "Most implementation failures trace back to data quality. Clean data migration is unglamorous work that vendors underprice and businesses underestimate." },
        { title: 'Wrong software for the business model', body: "Sometimes the implementation fails because the software was the wrong choice from the start — selected on demo, not on fit." },
      ]}
      howIHelp="I come in after a failed or struggling implementation and give you an honest assessment of where it is, why it went wrong, and what the options are. Sometimes that means getting more out of the existing system. Sometimes it means a recovery plan. Sometimes it means acknowledging the sunk cost and starting over — with a proper independent brief this time. Either way, you get a clear picture and a practical path forward."
    />
    </>
  );
}
