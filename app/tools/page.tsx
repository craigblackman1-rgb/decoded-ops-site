import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { Plate } from '@/components/Plate';
import { D17Motion } from '@/components/D17Motion';
import '@/app/d17-global.css';
import '@/app/d17-problems.css';
import '@/app/d17-resources.css';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Free Operational Tools: Decoded Ops',
  description:
    'Calculate the real cost of downtime, poor recovery times, and manual processes. Free tools for operations leaders in UK decorated goods, print, and workwear.',
  alternates: { canonical: '/tools' },
  openGraph: {
    type: 'website',
    title: 'Free Operational Tools: Decoded Ops',
    description:
      'Calculate the real cost of downtime, poor recovery times, and manual processes. Free tools for operations leaders in UK decorated goods, print, and workwear.',
    url: 'https://decodedops.co.uk/tools',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Operational Tools: Decoded Ops',
    description:
      'Calculate the real cost of downtime, poor recovery times, and manual processes. Free tools for operations leaders in UK decorated goods, print, and workwear.',
    images: [OG_IMAGE_PATH],
  },
};

const toolsSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://decodedops.co.uk/tools#collection',
  url: 'https://decodedops.co.uk/tools',
  name: 'Free Tools: Decoded Ops',
  description: 'Calculate the real cost of downtime, poor recovery times, and manual processes. Free tools for operations leaders in UK decorated goods, print, and workwear.',
  isPartOf: { '@id': 'https://decodedops.co.uk/#organization' },
};

const tools = [
  {
    title: 'Should I Replace My ERP?',
    description:
      'Eight yes/no questions to help you decide whether your system is fixable or it\'s time to plan an exit.',
    href: '/tools/should-i-replace-erp',
  },
  {
    title: 'Ops Health Score',
    description:
      'Rate your business across five areas to see where you stand, and where to focus first.',
    href: '/tools/ops-health-score',
  },
  {
    title: 'Downtime Cost Calculator',
    description:
      'Work out what system outages cost you each year in staff time and lost revenue.',
    href: '/tools/downtime-cost-calculator',
  },
  {
    title: 'RTO Calculator',
    description:
      'See what faster recovery from system failures is worth in pounds.',
    href: '/tools/rto-calculator',
  },
  {
    title: 'Automation ROI Calculator',
    description:
      'See when automating a manual process pays for itself, and what it returns over 3 years.',
    href: '/tools/automation-roi-calculator',
  },
];

export default function ToolsPage() {
  return (
    <main>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Tools', url: 'https://decodedops.co.uk/tools' },
      ]} />
      <JsonLd data={toolsSchema} />
      {/* Hero — rt-split: copy left, DO-ART-981 right */}
      <section className="g-off">
        <div className="wrap rt-split">
          <div>
            <span className="eyebrow">Free tools</span>
            <h1>Calculate your operational cost</h1>
            <p className="lede">
              Free tools that put a number on what your operation is costing you.
            </p>
          </div>

          {/* D17 hero art · DO-ART-981 */}
          <figure className="d17 sx a981" data-od-id="hero-art" data-motion data-no="DO-ART-981" data-rev="01" data-tx="screen"
                  aria-label="Artwork DO-ART-981. Three calculator result screens fanned over a graded photograph of embroidery heads, each labelled Example and worked from the tool's default inputs. Downtime cost: a total annual cost of downtime of £3,495. Automation ROI: break-even in 8 months, a 3-year return of 227 per cent. RTO: recovery from 8 hours to 1 hour saves £28,000 a year. Every calculator hands back a number, not a vague suggestion.">
            <div className="d17-ph"><img src="/images/d17/resources/hero-workshop-ad3944.webp" alt="" width="900" height="900" /></div>
            <div className="d17-scan" aria-hidden="true"></div>
            <div className="sx-top d17-mono" aria-hidden="true"><span>Free tools</span><span>Five calculators</span></div>
            <div className="stage" aria-hidden="true">
              <div className="win scr scr-a m-rise" style={{ animationDelay: '.1s' }}>
                <div className="win-bar"><span className="dots"><i></i><i></i><i></i></span><span className="crumb">RTO</span><span className="pill">EXAMPLE</span></div>
                <div className="scr-b">
                  <p className="l">Recovery time</p>
                  <div className="rt-bars"><span><i style={{ width: '100%' }}></i><b>8h now</b></span><span><i className="t" style={{ width: '12.5%' }}></i><b>1h target</b></span></div>
                  <p className="l">Annual saving</p><p className="n">£28,000</p>
                </div>
              </div>
              <div className="win scr scr-b2 m-rise" style={{ animationDelay: '.35s' }}>
                <div className="win-bar"><span className="dots"><i></i><i></i><i></i></span><span className="crumb">Automation ROI</span><span className="pill">EXAMPLE</span></div>
                <div className="scr-b">
                  <div className="two"><div><p className="l">Break-even</p><p className="n">8 months</p></div><div><p className="l">3-year ROI</p><p className="n">227%</p></div></div>
                  <svg className="pay" viewBox="0 0 300 70" preserveAspectRatio="none"><path className="z" d="M0 40 H300"/><path className="c m-draw" pathLength="1" d="M0 64 L80 40 L300 6"/><circle cx="80" cy="40" r="5" /></svg>
                </div>
              </div>
              <div className="win scr scr-c m-rise" style={{ animationDelay: '.6s' }}>
                <div className="win-bar"><span className="dots"><i></i><i></i><i></i></span><span className="crumb">Downtime cost</span><span className="pill">EXAMPLE</span></div>
                <div className="scr-b">
                  <p className="l">Total annual cost of downtime</p>
                  <p className="n n--a">£3,495</p>
                  <div className="rows"><span>Overhead paid for, never recovered</span><b>£903</b></div>
                  <div className="rows"><span>Wages for people who couldn't work</span><b>£2,592</b></div>
                </div>
              </div>
            </div>
            <div className="sx-foot">
              <div className="sx-bar" aria-hidden="true"></div>
              <p className="sx-say">Five calculators. <em>Every one hands back a number.</em></p>
              <span className="d17-mark">decodedops.co.uk · DO-ART-981 · Rev 01</span>
            </div>
          </figure>
        </div>
      </section>
      <section className="g-off">
        <div className="wrap">
          <div className="grid grid--3">
            {tools.map((tool) => (
              <div key={tool.href} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <h2>{tool.title}</h2>
                <p style={{ flexGrow: 1 }}>{tool.description}</p>
                <Link href={tool.href} className="btn btn--outline" style={{ marginTop: 20 }}>
                  Use calculator <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <D17Motion />
    </main>
  );
}
