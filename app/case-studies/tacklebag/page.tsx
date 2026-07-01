import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';

// Target keyword: "stock control app decorated goods" (secondary: "tacklebag decoded ops")
export const metadata = {
  title: 'TackleBag — Clarity Audit to Stock Control Build | Decoded Ops',
  description: 'A Clarity Audit into a Deliver engagement for TackleBag, building a Stock Control module that feeds clean data into their ERP implementation.',
  alternates: { canonical: '/case-studies/tacklebag' },
  openGraph: {
    type: 'article',
    title: 'TackleBag — Clarity Audit to Stock Control Build | Decoded Ops',
    description: 'A Clarity Audit into a Deliver engagement, building a Stock Control module that feeds clean data into their ERP implementation.',
    url: 'https://decodedops.co.uk/case-studies/tacklebag',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TackleBag — Clarity Audit to Stock Control Build | Decoded Ops',
    description: 'A Clarity Audit into a Deliver engagement, building a Stock Control module.',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'TackleBag — Clarity Audit to Stock Control Build',
      description: 'A Clarity Audit into a Deliver engagement for TackleBag, building a Stock Control module that feeds clean data into their ERP implementation.',
      author: { '@type': 'Person', name: 'Craig Blackman' },
      publisher: { '@type': 'Organization', name: 'Decoded Ops' },
      url: 'https://decodedops.co.uk/case-studies/tacklebag',
    },
  ],
};

export default function TackleBagCaseStudyPage() {
  return (
    <main>
      <JsonLd data={schema} />
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-6">
            <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">— In Deliver · Branded Apparel &amp; Decoration</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#023047] leading-tight mb-6">
            TackleBag: building the data foundation before the ERP goes in
          </h1>
          <p className="text-lg text-[#023047]/70 leading-relaxed">
            TackleBag came in for a Clarity Audit. What it found moved straight into a Deliver engagement, with a Stock Control module now doing the groundwork their eventual Khaos Control implementation would otherwise have to do the hard way.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">

          <h2 className="text-2xl font-bold text-[#023047] mb-4">The problem</h2>
          <p className="text-[#023047]/80 leading-relaxed mb-8">
            Stock and SKU data was spread across spreadsheets and manual processes, with no single source of truth for bin locations or supplier feeds. That's a normal starting point for a decorated goods business at this scale, but it's exactly the kind of mess that gets carried straight into a new ERP if nobody deals with it first. Khaos Control implementation typically starts once the software's in, with data prep left to the client to sort out on the way.
          </p>

          <h2 className="text-2xl font-bold text-[#023047] mb-4">What we're building</h2>
          <div className="space-y-4 mb-8">
            {[
              'A Stock Control module with SKU standards and bin locations built in, so the data has a proper home before the ERP arrives',
              'Direct data ports from the module into Khaos Control once implementation starts — no manual re-entry, no re-cleaning the same data twice',
              'Supplier feed sanitisation built into the module, replacing spreadsheets that were never designed to hold this much detail reliably',
              'A module that keeps running after Khaos Control goes live — the ERP doesn\'t clean incoming supplier data on its own, this does',
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <CheckCircle2 size={20} className="flex-shrink-0 mt-1 text-[#219EBC]" />
                <p className="text-[#023047]/80 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-2xl bg-[#219EBC]/10 border border-[#219EBC]/25 mb-8">
            <h3 className="text-lg font-bold text-[#023047] mb-3">Why this order matters</h3>
            <p className="text-[#023047]/80 leading-relaxed">
              Khaos Control implementation is where the real project cost sits. Every hour spent cleaning and standardising data before that starts is an hour that doesn't get spent firefighting during implementation. The module isn't a stopgap that gets thrown away when the ERP lands. It's the thing doing the job the ERP was never going to do well on its own.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#023047] mb-4">Status</h2>
          <p className="text-[#023047]/80 leading-relaxed mb-8">
            Active Deliver engagement, following a completed Clarity Audit. The Stock Control module is in build, ahead of the Khaos Control implementation it's designed to feed.
          </p>

          <div className="p-8 rounded-2xl bg-[#023047]">
            <h3 className="text-lg font-bold text-[#F8F9FA] mb-3">Recognise this pattern?</h3>
            <p className="text-[#8ECAE6] leading-relaxed mb-6">
              If your stock data is spread across spreadsheets and you're eyeing an ERP, a Clarity Audit is the fastest way to find out what's actually going on before you commit to anything.
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
