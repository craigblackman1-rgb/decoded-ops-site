import type { Metadata } from 'next';
import { RtoCalculator } from '@/components/calculators/RtoCalculator';
import { D17Motion } from '@/components/D17Motion';
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
  description: 'Calculate the financial cost of your current recovery time objective and see what faster recovery is worth.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
  url: 'https://decodedops.co.uk/tools/rto-calculator',
};

export const metadata: Metadata = {
  title: 'RTO Calculator: Decoded Ops',
  description:
    'Calculate the financial cost of your current recovery time objective and see what faster recovery is worth. Free tool for operations leaders.',
  alternates: { canonical: '/tools/rto-calculator' },
  openGraph: {
    type: 'website',
    title: 'RTO Calculator: Decoded Ops',
    description: 'Calculate the financial cost of your current recovery time objective and see what faster recovery is worth.',
    url: 'https://decodedops.co.uk/tools/rto-calculator',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RTO Calculator: Decoded Ops',
    description: 'Calculate the financial cost of your current recovery time objective and see what faster recovery is worth.',
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
          <figure className="d17 sx px a998" data-od-id="hero-art" data-motion data-no="DO-ART-998" data-rev="01" data-tx="schematic"
                  aria-label="Drawn plate DO-ART-998, recovery time to scale, labelled Example and worked from the calculator's defaults: one thousand pounds of revenue an hour, four major incidents a year, current recovery eight hours, target one hour. Four incident bars run to eight hours each; inside each, the one-hour target in amber. Current annual recovery cost £32,000; target £4,000; annual saving £28,000; over three years, £84,000. Seven hours back, four times a year.">
            <div className="q-grid" aria-hidden="true"></div>
            <div className="sx-top d17-mono" aria-hidden="true"><span>Recovery time</span><span>Example · to scale</span></div>
            <div className="body">
              <p className="rt-k d17-mono">£1,000 an hour · 4 incidents a year</p>
              <div className="inc">
                <div className="sc"><span>0h</span><span>2h</span><span>4h</span><span>6h</span><span>8h</span></div>
                <div className="r"><span className="l d17-mono">Incident 1</span><span className="b"><i className="now m-fill" style={{ animationDelay: '.1s' }}></i><i className="tg m-pop" style={{ animationDelay: '1.2s' }}></i></span></div>
                <div className="r"><span className="l d17-mono">Incident 2</span><span className="b"><i className="now m-fill" style={{ animationDelay: '.25s' }}></i><i className="tg m-pop" style={{ animationDelay: '1.3s' }}></i></span></div>
                <div className="r"><span className="l d17-mono">Incident 3</span><span className="b"><i className="now m-fill" style={{ animationDelay: '.4s' }}></i><i className="tg m-pop" style={{ animationDelay: '1.4s' }}></i></span></div>
                <div className="r"><span className="l d17-mono">Incident 4</span><span className="b"><i className="now m-fill" style={{ animationDelay: '.55s' }}></i><i className="tg m-pop" style={{ animationDelay: '1.5s' }}></i></span></div>
                <div className="key"><span className="k-now">Now: 8 hours</span><span className="k-tg">Target: 1 hour</span></div>
              </div>
              <div className="rt-sum">
                <div><span>Now, a year</span><b>£32,000</b></div>
                <div><span>Target, a year</span><b>£4,000</b></div>
                <div className="hot"><span>Saving, a year</span><b>£28,000</b></div>
              </div>
            </div>
            <div className="sx-foot">
              <div className="sx-bar" aria-hidden="true"></div>
              <p className="sx-say">Seven hours back, <em>four times a year.</em></p>
              <span className="d17-mark">decodedops.co.uk · DO-ART-998 · Rev 01</span>
            </div>
          </figure>
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
