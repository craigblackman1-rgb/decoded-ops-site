import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';

export const metadata = {
  title: 'Production Scheduling for Print & Embroidery: Capacity, Quality, and Rush Orders | Decoded Ops',
  description: 'How to build a production schedule in a print and embroidery business that handles capacity, maintains quality, and doesn\'t collapse when a rush order lands.',
  alternates: { canonical: '/blog/production-scheduling-print-embroidery-capacity-quality-rush' },
  openGraph: {
    type: 'article',
    publishedTime: '2026-05-27T00:00:00Z',
    authors: ['https://decodedops.co.uk/about'],
    section: 'Operations',
    title: 'Production Scheduling for Print & Embroidery: Capacity, Quality, and Rush Orders',
    description: 'How to build a production schedule in a print and embroidery business that handles capacity, maintains quality, and doesn\'t collapse when a rush order lands.',
    url: 'https://decodedops.co.uk/blog/production-scheduling-print-embroidery-capacity-quality-rush',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Production Scheduling for Print & Embroidery: Capacity, Quality, and Rush Orders',
    description: 'How to build a production schedule in a print and embroidery business that handles capacity, maintains quality, and doesn\'t collapse when a rush order lands.',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'Production Scheduling for Print & Embroidery: Capacity, Quality, and Rush Orders',
      datePublished: '2026-05-27T00:00:00Z',
      dateModified: '2026-05-27T00:00:00Z',
      author: { '@type': 'Person', name: 'Craig Blackman', url: 'https://decodedops.co.uk/about' },
      publisher: { '@type': 'Organization', name: 'Decoded Ops', url: 'https://decodedops.co.uk', address: { '@type': 'PostalAddress', addressLocality: 'Worthing', addressRegion: 'West Sussex', addressCountry: 'GB' } },
      image: 'https://decodedops.co.uk/opengraph-image',
      url: 'https://decodedops.co.uk/blog/production-scheduling-print-embroidery-capacity-quality-rush',
      mainEntityOfPage: 'https://decodedops.co.uk/blog/production-scheduling-print-embroidery-capacity-quality-rush',
      description: 'Building a production schedule for print and embroidery that reflects real capacity, protects quality, and has a mechanism for rush orders that doesn\'t derail everything else.',
      wordCount: 1500,
      articleSection: 'Operations',
      keywords: 'print production scheduling, embroidery production planning, decoration business capacity planning, rush order management, garment decoration workflow',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do print and embroidery businesses calculate production capacity?',
          acceptedAnswer: { '@type': 'Answer', text: 'Capacity is calculated from available machine time, divided by the estimated run time per job. For embroidery, run time is driven by stitch count and head count. For screen printing, setup time plus run time per unit. The total available hours in a week, minus maintenance time and reasonable buffer, gives your theoretical capacity. Practical capacity is lower once you account for artwork approval delays, stock wait times, and rework.' },
        },
        {
          '@type': 'Question',
          name: 'How should a decoration business handle rush orders without disrupting other jobs?',
          acceptedAnswer: { '@type': 'Answer', text: 'The answer is a defined rush order policy, not a case-by-case decision each time. Rush orders should carry a premium, be accepted only when genuine capacity exists (not by pushing other confirmed orders back), and have a clear process for what gets moved and what doesn\'t. Without a policy, every rush order is a negotiation that the loudest customer wins — at the expense of every other customer in the queue.' },
        },
        {
          '@type': 'Question',
          name: 'What causes production schedules to fail in decoration businesses?',
          acceptedAnswer: { '@type': 'Answer', text: 'Three things: schedules built on theoretical capacity rather than real throughput; no mechanism for handling delays in artwork approval or stock delivery; and accepting every order regardless of the impact on the existing queue. The fix is building a schedule around confirmed completion times, flagging artwork and stock dependencies before jobs are scheduled, and having clear rules about what happens when capacity is full.' },
        },
      ],
    },
  ],
};

export default function BlogPost() {
  return (
    <>
      <JsonLd data={schema} />
      {/* HERO */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-6">
            <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">— Blog</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#023047] leading-tight mb-6">
            Production Scheduling for Print &amp; Embroidery: Capacity, Quality, and Rush Orders
          </h1>
          <p className="text-lg text-[#023047]/70 leading-relaxed mb-6">
            A schedule that reflects real capacity and has a clear answer for rush orders keeps every customer happy. A schedule built on optimism doesn't.
          </p>
          <div className="flex items-center gap-4 text-sm text-[#023047]/60">
            <span>By Craig Blackman</span>
            <span>·</span>
            <span>May 2026</span>
            <span>·</span>
            <span>9 min read</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pt-2 lg:pt-4 pb-16 lg:pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-[#023047]">

            <p className="text-[#023047]/80 leading-relaxed mb-6 text-lg italic">
              Most production scheduling problems in print and embroidery businesses aren't scheduling problems. They're acceptance problems. Jobs get confirmed with delivery dates that were set before anyone checked what else was in the queue. Capacity is calculated from theoretical machine time without accounting for the real frictions — artwork delays, stock waits, rework. The schedule looks fine until it doesn't, and then everyone is firefighting.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">Knowing Your Real Capacity</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Theoretical capacity is the maximum output if everything runs perfectly. Real capacity is what you can actually commit to, accounting for the things that regularly don't run perfectly.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              For embroidery, real throughput depends on average stitch count per job, number of heads, colour change frequency, and how often the machine stops for thread breaks, needle changes, or re-hooping. Running at theoretical maximum assumes none of those happen. That's not a safe assumption.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              For screen printing, setup time per job is a real cost. A 30-job day with different designs is not 30 times the print time — it's 30 times the print time plus 30 times the setup time. Scheduling that doesn't account for setup time will always run late.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The practical approach is to measure actual throughput over a representative period — 4 weeks is usually enough — and build your capacity numbers from what actually happened, not what should theoretically be possible.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">The Dependencies That Break Schedules</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              A job can only enter production when two things are true: the artwork is approved, and the stock is available. If either of those is outstanding, the job cannot start — regardless of where it sits in the schedule.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The dependency problem is that most schedules are built as if artwork approval and stock delivery are guaranteed. They're not. Artwork approval depends on customer behaviour. Stock delivery depends on your supplier. Neither of those is fully in your control.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The fix is building the schedule around confirmed dependencies, not assumed ones. A job isn't scheduled into production until artwork is signed off and stock is confirmed as available. It sits in a pre-production queue until both are confirmed, then slots into the production schedule at the appropriate point.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              This means the delivery date quoted to a customer should be based on when both dependencies are likely to be cleared — not on when the job was ordered.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">Building the Schedule</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              A production schedule for a decoration business needs to reflect three things:
            </p>
            <ol className="space-y-3 my-6 pl-6 list-decimal text-[#023047]/80">
              <li><strong>Total confirmed work in the queue.</strong> Every job that has cleared its dependencies (artwork signed off, stock confirmed) and is waiting for a production slot.</li>
              <li><strong>Available capacity by day.</strong> Machine hours available, accounting for planned maintenance, staff availability, and the realistic throughput you've measured.</li>
              <li><strong>Job sequencing logic.</strong> Which jobs go in which order — typically by delivery date, adjusted for setup efficiencies (batching similar substrates, same-colour runs).</li>
            </ol>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              The schedule should be visible to everyone involved in production — not held in one person's head or maintained in a spreadsheet only one person knows how to read. When the schedule is visible, people can flag problems before they become missed deliveries.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">Batching and Sequencing for Efficiency</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Production efficiency comes from minimising changeovers. For embroidery, this means batching jobs that use the same thread colours to avoid unnecessary colour changes. For screen printing, it means grouping jobs with the same ink colours or printing on the same substrate back to back.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              This sounds obvious, but without a visual schedule that shows the full queue, batching decisions get made job-by-job rather than across the whole week's work. A scheduler who can see the full queue can sequence it for efficiency. Someone working through a list of individual jobs can't.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">Rush Orders: The Policy Question</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Rush orders happen in every decoration business. The question isn't whether to take them — it's whether you have a consistent answer for when you do and when you don't.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Without a policy, every rush order is a negotiation, and the loudest customer wins. Jobs that were promised to other customers get pushed back. The team is under pressure to do the impossible. The customers whose jobs moved get an experience they didn't expect.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              A rush order policy answers:
            </p>
            <ul className="space-y-2 my-6 pl-6 list-disc text-[#023047]/80">
              <li><strong>When is a rush order possible?</strong> Only when genuine capacity exists — i.e., another confirmed job can be moved without breaking a delivery commitment, or there's genuine spare capacity in the queue.</li>
              <li><strong>What does a rush order cost?</strong> A premium is standard practice and reasonable. It compensates for the disruption and signals to the customer that this is an exception, not the default.</li>
              <li><strong>What gets moved to accommodate it?</strong> If a rush order requires displacing another job, that's a decision for management, not for the production team to make in the moment.</li>
            </ul>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              A policy makes rush orders a manageable exception rather than a recurring chaos event.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">Quality Under Pressure</h2>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Quality standards are the first thing that erodes when production is under pressure. The QC check gets skipped. The sign-off process gets abbreviated. The mistake that would have been caught at the pre-production stage goes through to finished goods.
            </p>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Building quality checkpoints into the schedule — not as an optional step but as a time allocation — protects against this. If every job has a 15-minute QC slot allocated in the schedule, it happens. If QC is "whenever there's time," it doesn't happen when the schedule is under pressure.
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mt-12 mb-6">Common Questions</h2>

            <h3 className="text-xl font-bold text-[#023047] mt-8 mb-3">How do you calculate production capacity?</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Measure actual throughput over 4 weeks — what was actually produced per day, including setup time and stoppages. Use that number as your capacity baseline, not the theoretical maximum the machine is capable of under perfect conditions.
            </p>

            <h3 className="text-xl font-bold text-[#023047] mt-8 mb-3">How do you handle rush orders without disrupting other jobs?</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              With a defined policy: rush orders are accepted when genuine capacity exists, carry a premium, and displacing another confirmed job requires a management decision. Without a policy, every rush order is a negotiation the loudest customer wins.
            </p>

            <h3 className="text-xl font-bold text-[#023047] mt-8 mb-3">What causes production schedules to fail?</h3>
            <p className="text-[#023047]/80 leading-relaxed mb-6">
              Schedules built on theoretical capacity, no mechanism for artwork and stock delays, and accepting every order without checking the impact on the existing queue. Fix those three and most schedule failures go away.
            </p>

            {/* CTA */}
            <div className="mt-12 p-8 rounded-2xl bg-[#219EBC]/10 border border-[#219EBC]/25">
              <h3 className="text-lg font-bold text-[#023047] mb-3">Late deliveries and quality failures are symptoms. The cause is almost always in the scheduling process.</h3>
              <p className="text-[#023047]/80 leading-relaxed mb-6">
                A Clarity Audit maps your production process end to end — from order acceptance to despatch — and identifies where the schedule is being built on assumptions rather than confirmed capacity.
              </p>
              <Link href="/clarity" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
                See Clarity <ArrowRight size={18} />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
