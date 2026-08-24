import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { Plate } from '@/components/Plate';

export const metadata: Metadata = {
  title: 'Free Operational Tools | Decoded Ops',
  description:
    'Calculate the real cost of downtime, poor recovery times, and manual processes. Free tools for operations leaders in UK decorated goods, print, and workwear.',
  alternates: { canonical: '/tools' },
  openGraph: {
    type: 'website',
    title: 'Free Operational Tools | Decoded Ops',
    description:
      'Calculate the real cost of downtime, poor recovery times, and manual processes. Free tools for operations leaders in UK decorated goods, print, and workwear.',
    url: 'https://decodedops.co.uk/tools',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Operational Tools | Decoded Ops',
    description:
      'Calculate the real cost of downtime, poor recovery times, and manual processes. Free tools for operations leaders in UK decorated goods, print, and workwear.',
  },
};

const toolsSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://decodedops.co.uk/tools#collection',
  url: 'https://decodedops.co.uk/tools',
  name: 'Free Tools | Decoded Ops',
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
    title: 'AI Readiness Check',
    description:
      'Six quick questions to find out whether your business is ready for AI, or whether you need to fix your foundation first.',
    href: '/tools/ai-readiness-check',
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
      {/* Hero */}
      <section className="g-navy">
        <div className="wrap" style={{ maxWidth: 720, textAlign: 'center' }}>
          <span className="eyebrow">Free tools</span>
          <h1>Calculate your operational cost</h1>
          <p className="lede" style={{ margin: '0 auto' }}>
            Free tools that put a number on what your operation is costing you.
          </p>
        </div>
      </section>

      {/* PLATE · DO-ART-210 */}
      <section className="g-navy">
        <div className="wrap">
          <span className="eyebrow">Tool overview &middot; DO-ART-210</span>
          <h2>Six calculators, six numbers you can actually use.</h2>
          <div className="hair"></div>
          <p className="lede" style={{ marginTop: 16 }}>
            What each tool hands back, so you can pick the one that answers your question. Every calculator returns a real number, not a vague suggestion.
          </p>

          <div className="plate-scroll">
            <div className="plate-frame" data-od-id="plate-tools">
              <Plate tone="dark" p="tlx" title="Six calculators, six numbers"
                     sub="What each tool actually hands back, so you can pick the one that answers your question"
                     no="DO-ART-210" rev="01" cls="DECODED OPS · ISSUED">

                <g className="sk-fade sk-s2" filter="url(#tlx-shadow)">
                  <rect x="50" y="180" width="730" height="170" rx="10" fill="url(#tlx-node)" className="p-node" strokeWidth="1.1"/>
                  <rect x="820" y="180" width="730" height="170" rx="10" fill="url(#tlx-node)" className="p-node" strokeWidth="1.1"/>
                  <rect x="50" y="380" width="730" height="170" rx="10" fill="url(#tlx-node)" className="p-node" strokeWidth="1.1"/>
                  <rect x="820" y="380" width="730" height="170" rx="10" fill="url(#tlx-node)" className="p-node" strokeWidth="1.1"/>
                  <rect x="50" y="580" width="730" height="170" rx="10" fill="url(#tlx-node)" className="p-node" strokeWidth="1.1"/>
                  <rect x="820" y="580" width="730" height="170" rx="10" fill="url(#tlx-node)" className="p-node" strokeWidth="1.1"/>
                </g>

                <g className="sk-fade sk-s3">
                  <g className="p-mono" fontSize="14" letterSpacing="2.4" opacity=".42">
                    <text x="80" y="216">01</text><text x="850" y="216">02</text>
                    <text x="80" y="416">03</text><text x="850" y="416">04</text>
                    <text x="80" y="616">05</text><text x="850" y="616">06</text>
                  </g>
                  <g className="p-ink" fontFamily="var(--do-font-heading)" fontWeight="700" fontSize="26">
                    <text x="80" y="262">Should I replace my ERP?</text>
                    <text x="850" y="262">AI Readiness Check</text>
                    <text x="80" y="462">Ops Health Score</text>
                    <text x="850" y="462">Downtime Cost Calculator</text>
                    <text x="80" y="662">RTO Calculator</text>
                    <text x="850" y="662">Automation ROI Calculator</text>
                  </g>
                  <g className="p-mono" fontSize="16" opacity=".55">
                    <text x="80" y="292">Eight yes/no questions</text>
                    <text x="850" y="292">Six questions</text>
                    <text x="80" y="492">Five operational dimensions</text>
                    <text x="850" y="492">Your outage hours and headcount</text>
                    <text x="80" y="692">Your current recovery time</text>
                    <text x="850" y="692">One manual process, costed</text>
                  </g>
                </g>

                <g className="sk-fade sk-s4">
                  <g className="p-mono" fontSize="13" letterSpacing="2.4" opacity=".4">
                    <text x="80" y="322">HANDS BACK</text><text x="850" y="322">HANDS BACK</text>
                    <text x="80" y="522">HANDS BACK</text><text x="850" y="522">HANDS BACK</text>
                    <text x="80" y="722">HANDS BACK</text><text x="850" y="722">HANDS BACK</text>
                  </g>
                  <g className="p-cyan" fontFamily="var(--do-font-heading)" fontWeight="700" fontSize="19">
                    <text x="230" y="322">Fixable, or plan an exit</text>
                    <text x="1000" y="322">Ready, or fix the foundation first</text>
                    <text x="230" y="522">Where you stand, and where to start</text>
                    <text x="1000" y="522">The annual cost of outages, in £</text>
                    <text x="230" y="722">What faster recovery is worth, in £</text>
                    <text x="1000" y="722">Payback month, and the 3-year return</text>
                  </g>
                </g>
              </Plate>
            </div>
          </div>
        </div>
      </section>

      {/* Cards */}
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
    </main>
  );
}
