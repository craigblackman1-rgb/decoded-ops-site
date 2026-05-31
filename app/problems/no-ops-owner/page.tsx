import type { Metadata } from 'next';
import { ProblemPage } from '@/components/ProblemPage';
import { SystemsDisconnectedGraphic } from '@/components/graphics/SystemsDisconnectedGraphic';
import { JsonLd } from '@/components/JsonLd';
import { problemRouting } from '@/data/problem-routing';

export const metadata: Metadata = {
  title: 'No Operations Owner? Here\'s What That Costs You | Decoded Ops',
  description: 'When no one owns operations in a growing business, the same problems repeat — until someone owns it. Here\'s what an ops lead actually does, and how to get one without a full-time hire.',
  alternates: { canonical: '/problems/no-ops-owner' },
  openGraph: {
    title: 'No Operations Owner? Here\'s What That Costs You | Decoded Ops',
    description: 'When no one owns operations in a growing business, the same problems repeat — until someone owns it. Here\'s what an ops lead actually does, and how to get one without a full-time hire.',
    url: 'https://decodedops.co.uk/problems/no-ops-owner',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'No Operations Owner? Here\'s What That Costs You | Decoded Ops',
    description: 'When no one owns operations in a growing business, the same problems repeat — until someone owns it. Here\'s what an ops lead actually does, and how to get one without a full-time hire.',
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
        {
          '@type': 'Question',
          name: 'What does a fractional head of operations do for a small business?',
          acceptedAnswer: { '@type': 'Answer', text: 'A fractional head of operations owns the operational agenda on a part-time basis — technology decisions, process improvement, vendor oversight, and cross-department coordination. They provide the sales and operations planning (S&OP) thinking a growing business needs without the cost of a full-time operations director.' },
        },
        {
          '@type': 'Question',
          name: 'Is a fractional operations director the same as managed IT support?',
          acceptedAnswer: { '@type': 'Answer', text: 'No. Managed IT support handles day-to-day IT issues. A fractional operations director owns the wider operational agenda — systems strategy, process improvement, technology decision-making, and the management of improvement projects that cross departmental lines. IT support is a component of that; it is not a substitute for it.' },
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
      intro="In many growing businesses, operations has no owner. The MD handles the big decisions, department heads handle their areas, and everything in between — the processes that cross teams, the systems that connect departments, the improvements that nobody owns — falls through the cracks. A head of operations for small business does not have to be a full-time hire. Fractional operations leadership gives you the accountability and the thinking without the overhead."
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
        { title: "Operations grew without anyone noticing", body: "When a business is small, everyone knows what everyone else is doing. As it grows, operational complexity multiplies — but nobody is given explicit ownership of the systems and processes that cross departmental lines. Sales and operations planning (S&OP) becomes impossible when no one has ownership of the operational data. Decisions get made on gut feel because there is no reliable picture of capacity, pipeline, or throughput." },
        { title: 'The owner is still the default ops person', body: "In many owner-operated businesses, the MD grew up doing the operational work. They understand it better than anyone. But they can't both do the work and step back to improve the system — and there's no one else to hand it to." },
        { title: 'Operations is seen as admin, not leadership', body: "Operations doesn't feel like a strategic role. It sounds like paperwork and process. So it gets delegated downward, shared around, or left to whoever shouts loudest. In reality, operations is where growth gets enabled or blocked." },
        { title: 'No clear progression from doer to leader', body: "The person who knows the operations best is often the person doing the operational work. Promoting them means losing their hands-on contribution — and many businesses can't afford that trade-off without a plan." },
      ]}
      howIHelp="I help you understand whether your business needs a dedicated operations person, a fractional operations leader, or a different structure entirely. We look at where your time is going, where the bottlenecks are, and what level of operational ownership your business can support right now. Then I give you a practical roadmap — whether that means hiring, restructuring, or stepping into a retained fractional role that gives you operational leadership without the full-time commitment. If a fractional head of operations is the right answer — someone who owns the operational agenda on a part-time basis — the Retained service provides exactly that."
    
      slug="no-ops-owner"
      targetService={problemRouting['no-ops-owner'].targetService}
      relatedProblems={problemRouting['no-ops-owner'].relatedProblems}
      relatedReading={problemRouting['no-ops-owner'].relatedReading}
    />
    </>
  );
}
