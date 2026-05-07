import type { Metadata } from 'next';
import { ProblemPage } from '@/components/ProblemPage';
import { SystemsDisconnectedGraphic } from '@/components/graphics/SystemsDisconnectedGraphic';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'No Operations Owner in Your Business | Decoded Ops',
  description: 'When no one owns operations, decisions fall through cracks, problems go unaddressed, and the same fires get put out week after week.',
  alternates: { canonical: '/problems/no-ops-owner' },
  openGraph: {
    title: 'No Operations Owner in Your Business | Decoded Ops',
    description: 'When no one owns operations, decisions fall through cracks, problems go unaddressed, and the same fires get put out week after week.',
    url: 'https://decodedops.co.uk/problems/no-ops-owner',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'No Operations Owner in Your Business | Decoded Ops',
    description: 'When no one owns operations, decisions fall through cracks, problems go unaddressed, and the same fires get put out week after week.',
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
          acceptedAnswer: { '@type': 'Answer', text: 'In most owner-operated businesses in this sector, the founder grew up doing the operational work. They understand it better than anyone. The problem is they cannot both do the work and step back to improve the system — but there is no one else to hand it to.' },
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
      ],
    },
  ],
};

export default function NoOpsOwnerPage() {
  return (
    <>
      <JsonLd data={noOpsOwnerSchema} />
      <ProblemPage
      problem="No operations owner"
      headline="Every ops decision ends up on your desk. ||Who is running the business day to day?||"
      intro="In many growing businesses, operations has no owner. The MD handles the big decisions, department heads handle their areas, and everything in between — the processes that cross teams, the systems that connect departments, the improvements that nobody owns — falls through the cracks."
      heroGraphic={<SystemsDisconnectedGraphic connected={false} />}
      symptoms={[
        "Operational decisions that affect multiple departments get made by committee or not at all",
        "The same operational problems keep resurfacing with no permanent fix",
        "You're the only person who understands how the end-to-end process works",
        "Improvement ideas exist but nobody has time or remit to implement them",
        "Technology projects stall because there's no operational owner to drive them",
        "You're spending more time on operational issues than on growing the business",
        "New systems get bought but never properly embedded into how the team works",
      ]}
      causes={[
        { title: "Operations grew without anyone noticing", body: "When a business is small, everyone knows what everyone else is doing. As it grows, operational complexity multiplies — but nobody is given explicit ownership of the systems and processes that cross departmental lines." },
        { title: 'The owner is still the default ops person', body: "In many owner-operated businesses, the MD grew up doing the operational work. They understand it better than anyone. But they can't both do the work and step back to improve the system — and there's no one else to hand it to." },
        { title: 'Operations is seen as admin, not leadership', body: "Operations doesn't feel like a strategic role. It sounds like paperwork and process. So it gets delegated downward, shared around, or left to whoever shouts loudest. In reality, operations is where growth gets enabled or blocked." },
        { title: 'No clear progression from doer to leader', body: "The person who knows the operations best is often the person doing the operational work. Promoting them means losing their hands-on contribution — and many businesses can't afford that trade-off without a plan." },
      ]}
      howIHelp="I help you understand whether your business needs a dedicated operations person, a fractional operations leader, or a different structure entirely. We look at where your time is going, where the bottlenecks are, and what level of operational ownership your business can support right now. Then I give you a practical roadmap — whether that means hiring, restructuring, or stepping into a retained fractional role that gives you operational leadership without the full-time commitment."
    />
    </>
  );
}
