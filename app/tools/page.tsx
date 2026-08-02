import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

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
      'Six quick questions to find out whether your business is ready to adopt AI, or whether you need to fix your foundation first.',
    href: '/tools/ai-readiness-check',
  },
  {
    title: 'Ops Health Score',
    description:
      'Rate your business across five operational dimensions to see where you stand, and where to focus first.',
    href: '/tools/ops-health-score',
  },
  {
    title: 'Downtime Cost Calculator',
    description:
      'Calculate the annual cost of system outages across labour and lost revenue.',
    href: '/tools/downtime-cost-calculator',
  },
  {
    title: 'RTO Calculator',
    description:
      'Understand the financial value of faster recovery from system failures.',
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
            Free tools to quantify operational inefficiency, so you know exactly what it&apos;s costing you.
          </p>
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
