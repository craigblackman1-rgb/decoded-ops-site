import type { Metadata } from 'next';
import Link from 'next/link';
import { DowntimeCostCalculator } from '@/components/calculators/DowntimeCostCalculator';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Downtime Cost Calculator',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description:
    'Work out your overhead recovery rate per productive hour, then what an hour and a full day of downtime actually cost. Built for print, embroidery and decorated goods.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
  url: 'https://decodedops.co.uk/tools/downtime-cost-calculator',
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an overhead recovery rate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It is what every productive hour has to earn towards the costs that do not change job by job, before materials and before profit. Annual overhead divided by the productive hours you actually have.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does downtime cost more than the wages of idle staff?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because the overhead keeps running. Rent, finance, salaries and subscriptions are all still being paid during an outage, but no hour of production is happening to recover them. The wages of idle staff are on top of that, not instead of it.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I work out realistic utilisation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Take the hours your machines are theoretically available and subtract setup, changeover, maintenance, reruns and hours with nothing booked in. Most decoration businesses land well below the 100% they assume when pricing.',
      },
    },
  ],
};

export const metadata: Metadata = {
  title: 'Downtime Cost Calculator | Decoded Ops',
  description:
    'Work out your overhead recovery rate per productive hour, then what an hour and a full day of downtime actually cost you. Free tool for UK print, embroidery, workwear and decorated goods businesses.',
  alternates: { canonical: '/tools/downtime-cost-calculator' },
};

export default function DowntimeCostCalculatorPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero */}
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16" style={{ backgroundColor: '#023047' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="font-[family-name:var(--font-dm-sans)] text-[#219EBC] text-sm font-medium mb-3 uppercase tracking-wide">
            Free Tool
          </p>
          <h1 className="font-[family-name:var(--font-outfit)] text-3xl lg:text-5xl font-bold text-white mb-4">
            What does an hour of downtime actually cost you?
          </h1>
          <p className="font-[family-name:var(--font-dm-sans)] text-lg text-white/80 max-w-2xl">
            Work out what an hour of your operation costs to run, then what you lose every time it
            stops. Two minutes, no signup, and the number is yours to keep.
          </p>
        </div>
      </section>

      {/* Why this is hard to answer */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-outfit)] text-2xl lg:text-3xl font-bold text-[#023047] mb-5">
            Most calculators ask you for a number nobody has
          </h2>
          <div className="font-[family-name:var(--font-dm-sans)] text-[#33475b] space-y-4 text-[17px] leading-relaxed">
            <p>
              They want your lost revenue per hour. Almost nobody can state that, so the field gets
              left at zero and the answer comes out meaninglessly low.
            </p>
            <p>
              This one builds it up instead. First it works out what an hour of your operation costs
              to have available at all, which is a number worth knowing on its own. Then it works
              out what you lose when that hour produces nothing.
            </p>
            <p>
              The part that surprises people is that the overhead does not stop when the machines
              do. Rent, machine finance, subscriptions and salaries all keep running through an
              outage. You just have no production to recover them against.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12 lg:py-16" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <DowntimeCostCalculator />
        </div>
      </section>

      {/* What the number means */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-outfit)] text-2xl lg:text-3xl font-bold text-[#023047] mb-5">
            What to do with the recovery rate
          </h2>
          <div className="font-[family-name:var(--font-dm-sans)] text-[#33475b] space-y-4 text-[17px] leading-relaxed">
            <p>
              The recovery rate is the more useful of the two numbers, and most businesses have
              never calculated it. It tells you what each productive hour has to earn towards your
              overhead before you have paid for a single garment or a gram of thread.
            </p>
            <p>
              Take it into your quoting. If a job needs thirty minutes of machine time, it has to
              clear half your hourly rate in contribution above its materials just to break even.
              Quote below that often enough and you will be busy and unprofitable at the same time.
            </p>
            <p>
              That is the answer to a question I get asked a lot: we are flat out, every job makes
              money, so why is there nothing in the bank? Margin is earned per job. Overhead is
              incurred per hour. If you are recovering less per hour than the hour costs, more
              volume makes it worse rather than better.
            </p>
            <p>
              Watch the utilisation slider too. Pricing off theoretical hours rather than real ones
              is the most common way to arrive at a rate that looks fine and does not cover the
              business.
            </p>
          </div>
        </div>
      </section>

      {/* Sector framing */}
      <section className="py-12 lg:py-16" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-outfit)] text-2xl lg:text-3xl font-bold text-[#023047] mb-5">
            Why downtime costs more in decoration than most places
          </h2>
          <div className="font-[family-name:var(--font-dm-sans)] text-[#33475b] space-y-4 text-[17px] leading-relaxed">
            <p>
              The deadline does not move. A distributor can ship a day late and apologise. You
              cannot. The match is Saturday, the event is Friday, and a box of shirts nobody wore is
              scrap rather than stock.
            </p>
            <p>
              It is also worth being honest about what counts as an outage. It is not only the
              server being down. If the internet drops and your phones run over it, you cannot take
              an order. If the artwork system is unreachable, production stops even though every
              machine is working perfectly. If nobody can see what is in stock, picking stops.
            </p>
            <p>
              A useful test, and it costs nothing: pick a quiet hour, pull the internet, and write
              down what still works. Most owners find the machines keep running and everything
              around them stops.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 lg:py-20" style={{ backgroundColor: '#023047' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-outfit)] text-2xl lg:text-3xl font-bold text-white mb-4">
            If the number was higher than you expected
          </h2>
          <p className="font-[family-name:var(--font-dm-sans)] text-white/80 text-[17px] leading-relaxed mb-8">
            That is the finding, and it is usually a process and systems problem rather than an IT
            spending problem. A Clarity Audit is a full day on site working through where the hours
            and the money are actually going, with everything it costs you in writing within five
            working days.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-block px-7 py-3.5 rounded-lg font-semibold bg-[#FFB703] text-[#023047] font-[family-name:var(--font-dm-sans)]"
            >
              Book a free 60 minute call
            </Link>
            <Link
              href="/clarity"
              className="inline-block px-7 py-3.5 rounded-lg font-semibold border-2 border-white/30 text-white font-[family-name:var(--font-dm-sans)]"
            >
              See how a Clarity Audit works
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
