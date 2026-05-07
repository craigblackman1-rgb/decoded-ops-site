import type { Metadata } from 'next';
import { ProblemPage } from '@/components/ProblemPage';
import { SystemsDisconnectedGraphic } from '@/components/graphics/SystemsDisconnectedGraphic';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Systems Disaster Recovery & Outage Planning | Decoded Ops',
  description: 'When your systems go down, every hour costs money. Find out why most print and embroidery businesses don\'t have a DR plan — and what to do about it.',
  alternates: { canonical: '/problems/disaster-recovery' },
  openGraph: {
    title: 'Systems Disaster Recovery & Outage Planning | Decoded Ops',
    description: 'When your systems go down, every hour costs money. Find out why most print and embroidery businesses don\'t have a DR plan — and what to do about it.',
    url: 'https://decodedops.co.uk/problems/disaster-recovery',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Systems Disaster Recovery & Outage Planning | Decoded Ops',
    description: 'When your systems go down, every hour costs money. Find out why most print and embroidery businesses don\'t have a DR plan — and what to do about it.',
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
          acceptedAnswer: { '@type': 'Answer', text: 'DR planning feels like something for enterprise businesses with dedicated IT teams. Most smaller businesses assume their hosting provider handles it, or that it won\'t happen to them — until it does.' },
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
          acceptedAnswer: { '@type': 'Answer', text: 'Cloud software reduces some risks but introduces others — internet dependency, provider outages, data egress limitations, and complex multi-system recovery sequences. A DR plan is still essential.' },
        },
      ],
    },
  ],
};

export default function DisasterRecoveryPage() {
  return (
    <>
      <JsonLd data={drSchema} />
      <ProblemPage
      problem="No disaster recovery plan"
      headline="Your systems go down on a Tuesday morning. ||When do you get back up?||"
      intro="Most print, embroidery, and decoration businesses don't have a disaster recovery plan. Not because they don't care — but because DR feels like something for enterprise IT teams. Until the server fails, the hosting goes down, or ransomware locks every screen."
      heroGraphic={<SystemsDisconnectedGraphic connected={false} />}
      symptoms={[
        "You don't have a written plan for what happens when critical systems go down",
        "You assume your hosting provider or software vendor handles backup and recovery",
        "Recovery from a previous outage took days, not hours",
        "There are backup processes documented somewhere — but you're not sure they still work",
        "You couldn't answer 'how long can we afford to be offline?' without guessing",
        "Key operational data exists in only one place",
        "The last time you tested a restore, it didn't work",
      ]}
      causes={[
        { title: 'DR is postponed until it happens', body: "Disaster recovery planning always feels like a problem for next quarter. The business is running, the system is working, and there are more immediate things to fix. The cost of that deferral only becomes visible when the system stops." },
        { title: 'Assuming the vendor handles it', body: "Most software vendors and hosting providers have uptime guarantees — but those rarely cover your specific data, your specific recovery sequence, or your specific acceptable downtime. Their backup is not your DR plan." },
        { title: 'No one is accountable for recovery', body: "In businesses without a dedicated IT role, the question 'who is responsible for getting us back online?' doesn't have a clear answer. Come outage day, everyone assumes someone else is handling it." },
        { title: 'Cost of downtime is invisible until it happens', body: "Lost orders, halted production, missed despatch deadlines, overtime to catch up, and reputational damage — none of these appear on a balance sheet until the outage is over. By then the cost has already been incurred." },
      ]}
      howIHelp="I assess your current technology stack, backup architecture, and recovery capabilities — then give you a practical DR plan built around your actual business. Not a 50-page IT document. A clear, prioritised set of actions covering what to protect first, how fast you can realistically recover each system, and what it would cost to reduce that recovery time. Plus a simple test schedule so you know the plan works before you need it."
    />
    </>
  );
}
