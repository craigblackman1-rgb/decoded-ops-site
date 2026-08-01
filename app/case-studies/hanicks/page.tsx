import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
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

      {/* ── 1. HERO ── */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-6">
            <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">— Client work · heating spares &amp; eCommerce</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#023047] leading-tight mb-6">
            The platform stayed. The layer around it changed.
          </h1>
          <p className="text-lg text-[#023047]/70 leading-relaxed max-w-3xl mx-auto">
            Hanicks is a heating spares business — not decorated goods, but the same underlying problem: a large product catalogue arriving from multiple suppliers in inconsistent formats, needing to be clean and current across every channel it sells on.
          </p>
        </div>
      </section>

      {/* ── 2. THE NUMBERS ── */}
      <section className="py-16 lg:py-20 bg-[#023047]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFB703]/15 border border-[#FFB703]/30 mb-4">
            <span className="text-xs font-semibold text-[#FFB703] tracking-wider uppercase">— The numbers</span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-[#F8F9FA] leading-tight mb-10">
            Not projected. Not modelled. What actually happened.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
            <div>
              <p className="text-[clamp(2.2rem,4vw,3.2rem)] font-extrabold text-[#FFB703] leading-none" style={{ fontFamily: 'var(--font-outfit)', fontVariantNumeric: 'tabular-nums' }}>164,752</p>
              <p className="mt-2.5 text-[#8ECAE6] text-base max-w-[24ch]">WooCommerce products imported</p>
            </div>
            <div>
              <p className="text-[clamp(2.2rem,4vw,3.2rem)] font-extrabold text-[#FFB703] leading-none" style={{ fontFamily: 'var(--font-outfit)', fontVariantNumeric: 'tabular-nums' }}>127,135</p>
              <p className="mt-2.5 text-[#8ECAE6] text-base max-w-[24ch]">matched automatically — a 77% first-run match rate</p>
            </div>
            <div>
              <p className="text-[clamp(2.2rem,4vw,3.2rem)] font-extrabold text-[#FFB703] leading-none" style={{ fontFamily: 'var(--font-outfit)', fontVariantNumeric: 'tabular-nums' }}>11,064</p>
              <p className="mt-2.5 text-[#8ECAE6] text-base max-w-[24ch]">push-eligible products live to Khaos Control</p>
            </div>
          </div>

          <p className="text-[#8ECAE6] leading-relaxed max-w-3xl">
            Also: 2,872 new products and 28 new suppliers identified from a stock-take reconciliation, and 3,844 Amazon ASINs re-optimised ahead of a title-format deadline.
          </p>
        </div>
      </section>

      {/* ── 3. THE STORY ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">

          <h2 className="text-2xl font-bold text-[#023047] mb-4">The situation before</h2>
          <p className="text-[#023047]/70 leading-relaxed mb-8">
            Product data was scattered across supplier feeds, no consistent SKU matching, no reliable way to know what was actually in stock or where. The business needed a proper ERP, but going into that with dirty data would have meant paying to migrate a mess.
          </p>

          <h2 className="text-2xl font-bold text-[#023047] mb-4">What was done</h2>
          <p className="text-[#023047]/70 leading-relaxed mb-4">
            Discovery Day identified the platform first: Khaos Control, an off-the-shelf ERP. Khaos does not do supplier feed ingestion, data enrichment, or catalogue maintenance across channels well — so the Data App was built to do exactly that, sitting alongside Khaos rather than replacing it. This is rung 2 of how Decoded Ops works: keep the platform that fits, build the layer it does not do.
          </p>
          <p className="text-[#023047]/70 leading-relaxed mb-8">
            The Data App ingested every supplier catalogue, matched it against what Hanicks already sold, and pushed the clean result live to Khaos Control.
          </p>

          <div className="p-6 lg:p-7 rounded-2xl bg-[#FFB703]/10 border border-[#FFB703]/30 mb-8">
            <h3 className="text-lg font-bold text-[#023047] mb-2">What's still in progress</h3>
            <p className="text-[#023047]/70 text-sm leading-relaxed">
              The remaining 23% of unmatched products are a known, visible list, not a hidden gap. They are being worked through rather than papered over.
            </p>
          </div>

        </div>
      </section>

      {/* ── 4. CTA STRIP ── */}
      <section className="py-16 lg:py-20 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#023047] mb-4">
            See how the Data App does this.
          </h2>
          <p className="text-lg text-[#023047]/70 leading-relaxed mb-8 max-w-xl mx-auto">
            This is a Systems (rung 2) example. For a diagnosis of what your own data actually looks like, book a Discovery Day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
              Book a free discovery call <ArrowRight size={18} />
            </Link>
            <Link href="/apps/data-app" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#219EBC] text-[#219EBC] font-semibold hover:bg-[#219EBC]/10 transition-colors">
              See the Data App <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
