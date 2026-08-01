import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
import { JsonLd } from '@/components/JsonLd';

// Target keyword: "stock control app decorated goods" (secondary: "tacklebag decoded ops")
export const metadata = {
  title: 'TackleBag — Clarity Audit to Stock Control Build | Decoded Ops',
  description: 'A Clarity Audit into a Deliver engagement for TackleBag, building a Stock Control module that feeds clean data straight into their ERP implementation.',
  alternates: { canonical: '/case-studies/tacklebag' },
  openGraph: {
    type: 'article',
    title: 'TackleBag — Clarity Audit to Stock Control Build | Decoded Ops',
    description: 'A Clarity Audit into a Deliver engagement, building a Stock Control module that feeds clean data straight into their ERP implementation.',
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
      description: 'A Clarity Audit into a Deliver engagement for TackleBag, building a Stock Control module that feeds clean data straight into their ERP implementation.',
      author: { '@type': 'Person', name: 'Craig Blackman' },
      publisher: { '@type': 'Organization', name: 'Decoded Ops' },
      url: 'https://decodedops.co.uk/case-studies/tacklebag',
    },
  ],
};

const supplierFeeds = [
  'Joma', 'Speedo', 'Canterbury', 'Mizuno', 'Adidas',
  'Banner', 'Chadwick', 'Reydon', 'Surridge',
];

export default function TackleBagCaseStudyPage() {
  return (
    <main>
      <JsonLd data={schema} />

      {/* ── 1. HERO ── */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-6">
            <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">— Client work · branded apparel &amp; decoration</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#023047] leading-tight mb-6">
            The diagnostic came before the decision.
          </h1>
          <p className="text-lg text-[#023047]/70 leading-relaxed max-w-3xl mx-auto">
            TackleBag sells teamwear and schoolwear. Multiple suppliers, decorated and plain stock side by side, and an eCommerce platform, Symphony, that needed to reflect live stock accurately across nine supplier feeds at once.
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
            Nine feeds, automated end to end.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 max-w-2xl">
            <div>
              <p className="text-[clamp(2.2rem,4vw,3.2rem)] font-extrabold text-[#FFB703] leading-none" style={{ fontFamily: 'var(--font-outfit)', fontVariantNumeric: 'tabular-nums' }}>9</p>
              <p className="mt-2.5 text-[#8ECAE6] text-base max-w-[26ch]">supplier feeds running automated stock sync</p>
            </div>
            <div>
              <p className="text-[clamp(2.2rem,4vw,3.2rem)] font-extrabold text-[#FFB703] leading-none" style={{ fontFamily: 'var(--font-outfit)', fontVariantNumeric: 'tabular-nums' }}>20–40</p>
              <p className="mt-2.5 text-[#8ECAE6] text-base max-w-[26ch]">hours a week of admin time projected saved</p>
            </div>
          </div>

          <p className="text-[#8ECAE6] leading-relaxed mb-4">Supplier feeds automated:</p>
          <div className="flex flex-wrap gap-2">
            {supplierFeeds.map((feed) => (
              <span key={feed} className="px-3.5 py-1.5 rounded-full bg-white border border-[#d4e8f0] text-xs font-semibold text-[#023047]">
                {feed}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. THE STORY ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">

          <h2 className="text-2xl font-bold text-[#023047] mb-4">The situation before</h2>
          <p className="text-[#023047]/70 leading-relaxed mb-8">
            Manual admin around stock, supplier feeds, and getting products live on Symphony was eating hours every week that should have gone into running the business.
          </p>

          <h2 className="text-2xl font-bold text-[#023047] mb-4">What was done</h2>
          <p className="text-[#023047]/70 leading-relaxed mb-4">
            Symphony stayed as the eCommerce platform — it was the right tool for that job. The Data App was built alongside it to automate the parts Symphony was never going to do: nine supplier feeds kept current, decorated and plain stock tracked separately, warehouse floor operations (bin assignment, live camera barcode scanning, batch picking) run from a phone, and new products pushed live to Symphony automatically, including newly added variants on an existing product.
          </p>
          <p className="text-[#023047]/70 leading-relaxed mb-8">
            Live Symphony integration was proven in production on 27 July 2026, including new-variant publishing — a real gap in the initial build, found and fixed live.
          </p>

          <div className="p-6 lg:p-7 rounded-2xl bg-[#FFB703]/10 border border-[#FFB703]/30 mb-8">
            <h3 className="text-lg font-bold text-[#023047] mb-2">What's still in progress</h3>
            <p className="text-[#023047]/70 text-sm leading-relaxed">
              The Data App continues to expand: warehouse floor tooling and further supplier automation are active, ongoing work, not a finished state being presented as complete.
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
            This is a Systems (rung 2) example. For a diagnosis of what your own operation actually needs, book a Discovery Day.
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
