import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Free Operational Tools | Decoded Ops',
  description:
    'Calculate the real cost of downtime, poor recovery times, and manual processes. Free tools for operations leaders in UK decorated goods, print, and workwear.',
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
      'Six quick questions to find out whether your business is ready to adopt AI — or whether you need to fix your foundation first.',
    href: '/tools/ai-readiness-check',
  },
  {
    title: 'Ops Health Score',
    description:
      'Rate your business across five operational dimensions to see where you stand — and where to focus first.',
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
      'See when automating a manual process pays for itself — and what it returns over 3 years.',
    href: '/tools/automation-roi-calculator',
  },
];

export default function ToolsPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="pt-24 pb-16 lg:pt-32 lg:pb-24"
        style={{ backgroundColor: '#023047' }}
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h1
            className="font-[family-name:var(--font-outfit)] text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Calculate Your Operational Cost
          </h1>
          <p className="font-[family-name:var(--font-dm-sans)] text-lg lg:text-xl text-white/80 max-w-2xl mx-auto">
            Free tools to quantify operational inefficiency — so you know exactly what it&apos;s costing you.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <div
                key={tool.href}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col"
              >
                <h2
                  className="font-[family-name:var(--font-outfit)] font-semibold text-xl mb-3"
                  style={{ color: '#023047' }}
                >
                  {tool.title}
                </h2>
                <p className="font-[family-name:var(--font-dm-sans)] text-gray-600 text-sm mb-6 flex-grow">
                  {tool.description}
                </p>
                <Link
                  href={tool.href}
                  className="font-[family-name:var(--font-dm-sans)] text-sm font-medium"
                  style={{ color: '#219EBC' }}
                >
                  Use Calculator →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
