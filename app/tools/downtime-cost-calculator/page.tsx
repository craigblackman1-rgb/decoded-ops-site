import type { Metadata } from 'next';
import Link from 'next/link';
import { DowntimeCostCalculator } from '@/components/calculators/DowntimeCostCalculator';
import { D17Motion } from '@/components/D17Motion';
import '@/app/d17-global.css';
import '@/app/d17-resources.css';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Downtime Cost Calculator',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'Calculate the annual cost of system downtime across labour and lost revenue.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
  url: 'https://decodedops.co.uk/tools/downtime-cost-calculator',
};

export const metadata: Metadata = {
  title: 'Downtime Cost Calculator: Decoded Ops',
  description:
    'Calculate the annual cost of system downtime across labour and lost revenue. Free tool for operations leaders in UK print, workwear, and decorated goods.',
  alternates: { canonical: '/tools/downtime-cost-calculator' },
};

export default function DowntimeCostCalculatorPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero — rt-split: copy left, DO-ART-996 right */}
      <section className="g-off">
        <div className="wrap rt-split">
          <div>
            <span className="eyebrow">Free tool</span>
            <h1>Downtime cost calculator</h1>
            <p className="lede">
              Enter your numbers to see exactly what system outages cost you each year in
              staff time and lost revenue.
            </p>
          </div>

          {/* D17 hero art · DO-ART-996 */}
          <figure className="d17 sx a996" data-od-id="incident-docket" data-motion data-no="DO-ART-996" data-rev="01" data-tx="photo"
                  aria-label="Artwork DO-ART-996. The scenario, a Tuesday in November, pinned over a graded photograph of embroidery heads. Time: nine o'clock. Machines: all running, files already loaded. Connection: internet down. Trading: no. A result slip, labelled Example and worked from the worksheet's default figures: £3,495 a year, the cost of hours the business is up but can't trade. Everything is running. Nothing is earning.">
            <div className="d17-ph"><img src="/images/d17/resources/hero-workshop-5bb1b8.jpg" alt="" width="900" height="900" /></div>
            <div className="d17-scan" aria-hidden="true"></div>
            <div className="sx-top d17-mono" aria-hidden="true"><span>The scenario</span><span>A Tuesday in November</span></div>
            <div className="stage" aria-hidden="true">
              <div className="sx-tag m-pop" style={{ left: '5%', top: '15%', animationDelay: '.1s' }}><small>Time</small>09:00</div>
              <div className="sx-tag m-pop" style={{ right: '5%', top: '24%', animationDelay: '.3s' }}><small>Machines</small>All running</div>
              <div className="sx-tag sx-tag--a m-pop" style={{ left: '5%', top: '38%', animationDelay: '.5s' }}><small>Connection</small>Internet down</div>
              <div className="sx-tag sx-tag--a m-pop" style={{ right: '5%', top: '50%', animationDelay: '.7s' }}><small>Trading</small>No</div>
              <div className="slip m-drop" style={{ animationDelay: '1s' }}>
                <span className="ref">Worksheet result · example</span>
                <b>£3,495</b>
                <span className="s">a year, up but not trading</span>
              </div>
            </div>
            <div className="sx-foot">
              <div className="sx-bar" aria-hidden="true"></div>
              <p className="sx-say">Everything running. <em>Nothing earning.</em></p>
              <span className="d17-mark">decodedops.co.uk · DO-ART-996 · Rev 01</span>
            </div>
          </figure>
        </div>
      </section>

      {/* Why this is hard to answer */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-outfit)] text-2xl lg:text-3xl font-bold text-prussian-blue mb-5">
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
      <section className="g-off">
        <div className="wrap" style={{ maxWidth: 900 }}>
          <DowntimeCostCalculator />
        </div>
      </section>

      {/* What the number means */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-outfit)] text-2xl lg:text-3xl font-bold text-prussian-blue mb-5">
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
          <h2 className="font-[family-name:var(--font-outfit)] text-2xl lg:text-3xl font-bold text-prussian-blue mb-5">
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
              className="inline-block px-7 py-3.5 rounded-lg font-semibold bg-amber text-prussian-blue font-[family-name:var(--font-dm-sans)]"
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
      <D17Motion />
    </main>
  );
}
