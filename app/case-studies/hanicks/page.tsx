import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';

// Target keyword: "erp implementation project lead" (secondary: "hanicks decoded ops")
export const metadata = {
  title: 'Hanicks — Khaos Control ERP + Custom App | Decoded Ops',
  description: 'Project-leading a Khaos Control ERP implementation for Hanicks alongside a custom app for supplier data, Amazon FBA, and channel automation.',
  alternates: { canonical: '/case-studies/hanicks' },
  openGraph: {
    type: 'article',
    title: 'Hanicks — Khaos Control ERP + Custom App | Decoded Ops',
    description: 'Project-leading a Khaos Control ERP implementation alongside a custom app for supplier data, Amazon FBA, and channel automation.',
    url: 'https://decodedops.co.uk/case-studies/hanicks',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hanicks — Khaos Control ERP + Custom App | Decoded Ops',
    description: 'Project-leading a Khaos Control ERP implementation alongside a custom app.',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Hanicks — Khaos Control ERP + Custom App',
      description: 'Project-leading a Khaos Control ERP implementation for Hanicks alongside a custom app for supplier data, Amazon FBA, and channel automation.',
      author: { '@type': 'Person', name: 'Craig Blackman' },
      publisher: { '@type': 'Organization', name: 'Decoded Ops' },
      url: 'https://decodedops.co.uk/case-studies/hanicks',
    },
  ],
};

export default function HanicksCaseStudyPage() {
  return (
    <main>
      <JsonLd data={schema} />
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-6">
            <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">— Live Engagement · Heating Spares &amp; eCommerce</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#023047] leading-tight mb-6">
            Hanicks: ERP implementation, run as one project, not three
          </h1>
          <p className="text-lg text-[#023047]/70 leading-relaxed">
            Hanicks sell heating spares through their own website, direct, and Amazon FBA. They'd already chosen Khaos Control as their ERP. What they needed was someone to run the whole thing as a single, coordinated project rather than a set of disconnected workstreams.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">

          <h2 className="text-2xl font-bold text-[#023047] mb-4">The problem</h2>
          <p className="text-[#023047]/80 leading-relaxed mb-8">
            Khaos Control was the right ERP choice, but choosing the software was never the hard part. Amazon FBA has its own inventory and shipping confirmation flows that don't behave like a normal marketplace channel. Supplier data needed enriching and standardising before it could feed the new system properly. And without someone coordinating the ERP setup, the app build, and the channel automation as one piece of work, this was heading toward three separate projects quietly working against each other.
          </p>

          <h2 className="text-2xl font-bold text-[#023047] mb-4">What I'm doing</h2>
          <div className="space-y-4 mb-8">
            {[
              'Acting as project lead across the whole engagement — Khaos Control implementation, the custom app build, and channel automation all run as one plan, not three',
              'Building the IBasis App: a custom application that interfaces with suppliers, the ERP, and Amazon, plus reporting that draws directly from accounts',
              'Designing the requirements document first, before implementation starts — it protects the project and gives Khaos Control a clear brief to build against',
              'Covering Amazon FBA\'s inventory and shipping confirmation flows explicitly in the automation design, rather than treating it like every other channel',
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <CheckCircle2 size={20} className="flex-shrink-0 mt-1 text-[#219EBC]" />
                <p className="text-[#023047]/80 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-2xl bg-[#219EBC]/10 border border-[#219EBC]/25 mb-8">
            <h3 className="text-lg font-bold text-[#023047] mb-3">Why the app comes first, not the ERP</h3>
            <p className="text-[#023047]/80 leading-relaxed">
              The instinct is always to wait until the ERP is fully implemented before touching the data problem. That's backwards. The app doesn't get replaced when Khaos Control goes live, it keeps running the feeds and connections the ERP was never designed to handle. Data enriched and automated now is worth more than anything even the best ERP can produce from messy source data later.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#023047] mb-4">Status</h2>
          <p className="text-[#023047]/80 leading-relaxed mb-8">
            Live engagement, in progress. Khaos Control implementation and the IBasis App build are running in parallel, coordinated against a single requirements document.
          </p>

          <div className="p-8 rounded-2xl bg-[#023047]">
            <h3 className="text-lg font-bold text-[#F8F9FA] mb-3">Facing something similar?</h3>
            <p className="text-[#8ECAE6] leading-relaxed mb-6">
              If you're choosing an ERP and quietly worried about everything around it, a Clarity Audit is where this conversation starts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
                Book a free discovery call <ArrowRight size={18} />
              </Link>
              <Link href="/case-studies" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#219EBC] text-[#219EBC] font-semibold hover:bg-[#219EBC]/10 transition-colors">
                See other client work
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
