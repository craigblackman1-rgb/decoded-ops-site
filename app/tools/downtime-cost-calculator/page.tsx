import type { Metadata } from 'next';
import { DowntimeCostCalculator } from '@/components/calculators/DowntimeCostCalculator';

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
  title: 'Downtime Cost Calculator | Decoded Ops',
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
      {/* Hero */}
      <section className="g-navy">
        <div className="wrap" style={{ maxWidth: 900 }}>
          <span className="eyebrow">Free tool</span>
          <h1>Downtime cost calculator</h1>
          <p className="lede">
            Enter your numbers to see exactly what system outages cost your business each year across
            staff time and lost revenue.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="g-off">
        <div className="wrap" style={{ maxWidth: 900 }}>
          <DowntimeCostCalculator />
        </div>
      </section>
    </main>
  );
}
