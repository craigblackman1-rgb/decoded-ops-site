import type { Metadata } from 'next';
import { AutomationRoiCalculator } from '@/components/calculators/AutomationRoiCalculator';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Automation ROI Calculator',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'Calculate when automating a manual process pays for itself and what the 3-year return looks like.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
  url: 'https://decodedops.co.uk/tools/automation-roi-calculator',
};

export const metadata: Metadata = {
  title: 'Automation ROI Calculator | Decoded Ops',
  description:
    'Calculate when automating a manual process pays for itself and what the 3-year return looks like. Free tool for operations leaders in UK print, workwear, and decorated goods.',
  alternates: { canonical: '/tools/automation-roi-calculator' },
};

export default function AutomationRoiCalculatorPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section
        className="pt-24 pb-12 lg:pt-32 lg:pb-16"
        style={{ backgroundColor: '#023047' }}
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="font-[family-name:var(--font-dm-sans)] text-[#219EBC] text-sm font-medium mb-3 uppercase tracking-wide">
            Free Tool
          </p>
          <h1 className="font-[family-name:var(--font-outfit)] text-3xl lg:text-5xl font-bold text-white mb-4">
            Automation ROI Calculator
          </h1>
          <p className="font-[family-name:var(--font-dm-sans)] text-lg text-white/80 max-w-2xl">
            Enter your manual process details to see exactly when automation pays for itself and what it returns over 3 years.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-20" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AutomationRoiCalculator />
        </div>
      </section>
    </main>
  );
}
