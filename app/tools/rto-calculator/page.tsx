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
};

export default function RtoCalculatorPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16" style={{ backgroundColor: '#023047' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="font-[family-name:var(--font-dm-sans)] text-[#219EBC] text-sm font-medium mb-3 uppercase tracking-wide">
            Free Tool
          </p>
          <h1 className="font-[family-name:var(--font-outfit)] text-3xl lg:text-5xl font-bold text-white mb-4">
            RTO Calculator
          </h1>
          <p className="font-[family-name:var(--font-dm-sans)] text-lg text-white/80 max-w-2xl">
            See what your current recovery time is costing you — and what faster recovery is actually worth in pounds.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12 lg:py-20" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <RtoCalculator />
        </div>
      </section>
    </main>
  );
}
