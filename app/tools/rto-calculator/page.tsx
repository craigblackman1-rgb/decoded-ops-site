import type { Metadata } from 'next';
import { RtoCalculator } from '@/components/calculators/RtoCalculator';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'RTO Calculator',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'Calculate the financial cost of your current recovery time objective and see what faster recovery is worth.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
  url: 'https://decodedops.co.uk/tools/rto-calculator',
};

export const metadata: Metadata = {
  title: 'RTO Calculator | Decoded Ops',
  description:
    'Calculate the financial cost of your current recovery time objective and see what faster recovery is worth. Free tool for operations leaders.',
  alternates: { canonical: '/tools/rto-calculator' },
};

export default function RtoCalculatorPage() {
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
          <h1>RTO calculator</h1>
          <p className="lede">
            See what your current recovery time is costing you, and what faster recovery is actually worth in pounds.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="g-off">
        <div className="wrap" style={{ maxWidth: 900 }}>
          <RtoCalculator />
        </div>
      </section>
    </main>
  );
}
