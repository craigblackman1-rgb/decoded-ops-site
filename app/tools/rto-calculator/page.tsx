import type { Metadata } from 'next';
import { RtoCalculator } from '@/components/calculators/RtoCalculator';
import { D17Motion } from '@/components/D17Motion';
import { a998 } from '@/lib/d17-figures/a998';
import '@/app/d17-global.css';
import '@/app/d17-problems.css';
import '@/app/d17-resources.css';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'RTO Calculator',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'Calculate your recovery time objective and see what a proper disaster recovery plan is worth against your current downtime cost. Free tool, no signup.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
  url: 'https://decodedops.co.uk/tools/rto-calculator',
};

export const metadata: Metadata = {
  title: 'Disaster Recovery Plan Template & RTO Tool | Decoded Ops',
  description: 'This disaster recovery plan template calculates your recovery time objective and shows what proper recovery is worth against your current downtime cost.',
  alternates: { canonical: '/tools/rto-calculator' },
  openGraph: {
    type: 'website',
    title: 'Disaster Recovery Plan Template & RTO Tool | Decoded Ops',
    description: 'This disaster recovery plan template calculates your recovery time objective and shows what proper recovery is worth against your current downtime cost.',
    url: 'https://decodedops.co.uk/tools/rto-calculator',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Disaster Recovery Plan Template & RTO Tool | Decoded Ops',
    description: 'This disaster recovery plan template calculates your recovery time objective and shows what proper recovery is worth against your current downtime cost.',
    images: [OG_IMAGE_PATH],
  },
};

export default function RtoCalculatorPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero — rt-split: copy left, DO-ART-998 right */}
      <section className="g-off">
        <div className="wrap rt-split">
          <div>
            <span className="eyebrow">Free tool</span>
            <h1>RTO calculator</h1>
            <p className="lede">
              See what your current recovery time is costing you, and what faster recovery is actually worth in pounds.
            </p>
          </div>

          {/* D17 hero art · DO-ART-998 */}
          <div dangerouslySetInnerHTML={{ __html: a998 }} />
        </div>
      </section>

      {/* Calculator */}
      <section className="g-off">
        <div className="wrap" style={{ maxWidth: 900 }}>
          <RtoCalculator />
        </div>
      </section>

      <D17Motion />
    </main>
  );
}
