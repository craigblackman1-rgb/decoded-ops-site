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
      <section className="g-navy">
        <div className="wrap" style={{ maxWidth: 900 }}>
          <span className="eyebrow">Free tool</span>
          <h1>Automation ROI calculator</h1>
          <p className="lede">
            Enter your manual process details to see exactly when automation pays for itself and what it returns over 3 years.
          </p>
        </div>
      </section>

      <section className="g-off">
        <div className="wrap" style={{ maxWidth: 900 }}>
          <AutomationRoiCalculator />
        </div>
      </section>

    </main>
  );
}
