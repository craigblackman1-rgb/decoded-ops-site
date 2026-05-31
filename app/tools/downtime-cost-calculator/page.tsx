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
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16" style={{ backgroundColor: '#023047' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="font-[family-name:var(--font-dm-sans)] text-[#219EBC] text-sm font-medium mb-3 uppercase tracking-wide">
            Free Tool
          </p>
          <h1 className="font-[family-name:var(--font-outfit)] text-3xl lg:text-5xl font-bold text-white mb-4">
            Downtime Cost Calculator
          </h1>
          <p className="font-[family-name:var(--font-dm-sans)] text-lg text-white/80 max-w-2xl">
            Enter your numbers to see exactly what system outages cost your business each year across
            staff time and lost revenue.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12 lg:py-20" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <DowntimeCostCalculator />
        </div>
      </section>
    </main>
  );
}
