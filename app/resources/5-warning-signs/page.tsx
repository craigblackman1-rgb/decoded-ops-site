import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';

// Target keyword: "warning signs your business systems are failing" (secondary: "signs you need a technology audit")
export const metadata = {
  title: '5 Warning Signs Your Systems Are Holding You Back | Decoded Ops',
  description: 'Five signs your current technology and processes are costing you more than a replacement would — from 25+ years running operations in this sector, not vendor theory.',
  alternates: { canonical: '/resources/5-warning-signs' },
  openGraph: {
    type: 'website',
    title: '5 Warning Signs Your Systems Are Holding You Back | Decoded Ops',
    description: 'Five signs your current technology and processes are costing you more than a replacement would.',
    url: 'https://decodedops.co.uk/resources/5-warning-signs',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '5 Warning Signs Your Systems Are Holding You Back | Decoded Ops',
    description: 'Five signs your current technology and processes are costing you more than a replacement would.',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: '5 Warning Signs Your Systems Are Holding You Back',
      description: 'Five signs your current technology and processes are costing you more than a replacement would.',
      author: { '@type': 'Person', name: 'Craig Blackman' },
      publisher: { '@type': 'Organization', name: 'Decoded Ops' },
      url: 'https://decodedops.co.uk/resources/5-warning-signs',
    },
  ],
};

const signs = [
  {
    title: '1. Nobody can tell you what it\'s actually costing you',
    body: "Ask most business owners in this sector what their disconnected systems cost them a month and you'll get a shrug, not a number. The cost is real. It's in re-keyed orders, stock that doesn't match, and hours spent reconciling data by hand. It's just never been added up. If you can't put a figure on it, you can't decide whether fixing it is worth the money — and that's usually the point where a proper audit pays for itself before you've spent a penny on anything else.",
  },
  {
    title: '2. Your business runs on what\'s in one or two people\'s heads',
    body: "I've seen this at every scale, not just small operations. One business I spoke to had their entire production schedule sitting in their office manager's head — she'd been there sixteen years. Nothing written down. When she was off, the business was exposed. If losing one person for a fortnight would genuinely hurt, that's not a people problem. It's an operational risk, and it's fixable with documentation and process — not by hiring more people.",
  },
  {
    title: '3. Everyone has their own workaround',
    body: 'A spreadsheet here. A sticky note system there. A "just email me and I\'ll sort it" arrangement between two departments. Workarounds exist because the system doesn\'t fit how the job actually gets done. Every workaround is data living outside the system that\'s supposed to be the source of truth — and every one of them is a small, silent failure of the last implementation.',
  },
  {
    title: '4. Growth feels harder than it should',
    body: "Orders are up. Revenue's moving in the right direction. And somehow it feels like wading through mud rather than building momentum. That's almost always a systems and process constraint, not a people or demand problem — the operation hasn't been built to take the extra volume without extra pain. I've run production at over 1,000 orders a day at peak. Scale exposes exactly where the process breaks first.",
  },
  {
    title: '5. You bought your last system off the back of a demo',
    body: "This is the one I see most often, and it's the most expensive. A business bought an ERP system after a good demo. No requirements brief. No assessment of how it would talk to their eCommerce platform. It couldn't handle the production and artwork workflows that were central to how the business actually operated. Result: £150,000 spent, eighteen months of disruption, and around 125 hours a month of internal management time swallowed up fixing it. An audit upfront would have cost around £10,000 — 6.7% of what the failed project ended up costing. Not insurance. Near-certain cost avoidance.",
  },
];

export default function FiveWarningSignsPage() {
  return (
    <main>
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-6">
            <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">— Free Resource</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#023047] leading-tight mb-6">
            5 Warning Signs Your Systems Are Holding You Back
          </h1>
          <p className="text-lg text-[#023047]/70 leading-relaxed">
            Real warning signs from 25+ years running operations in print, embroidery, decoration, and similar product-based businesses — not vendor theory. If two or more of these sound familiar, it's worth a closer look.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">

          <div className="space-y-12 mb-16">
            {signs.map((sign, i) => (
              <div key={i}>
                <h2 className="text-2xl font-bold text-[#023047] mb-4">{sign.title}</h2>
                <p className="text-[#023047]/80 leading-relaxed">{sign.body}</p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-2xl bg-[#219EBC]/10 border border-[#219EBC]/25 mb-16">
            <h2 className="text-xl font-bold text-[#023047] mb-4">What I'm doing about this right now</h2>
            <p className="text-[#023047]/80 leading-relaxed">
              These aren't hypothetical scenarios. I'm currently running Deliver engagements with clients tackling exactly this — building the data foundation and connector work before their ERP goes live, not after, and putting a Process Register in place so operational knowledge doesn't sit in one person's head. It's the same approach on every engagement, whatever the sector.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#FFB703]/10 border border-[#FFB703]/30 mb-16">
            <div className="flex gap-4 items-start mb-4">
              <CheckCircle2 size={22} className="flex-shrink-0 mt-1 text-[#FB8500]" />
              <p className="text-[#023047]/80 leading-relaxed">
                <strong className="text-[#023047]">The 3× Clarity Guarantee:</strong> if a Clarity Audit doesn't identify at least 3× the fee in recoverable cost or lost revenue, you get a full refund. No conditions. No questions.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#023047]">
            <h3 className="text-lg font-bold text-[#F8F9FA] mb-3">Recognise two or more of these?</h3>
            <p className="text-[#8ECAE6] leading-relaxed mb-6">
              A Clarity Audit finds where the cost is hiding, quantifies it, and gives you a specific, costed plan to fix it — in plain English, with no vendor agenda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
                Book a free discovery call <ArrowRight size={18} />
              </Link>
              <Link href="/clarity" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#219EBC] text-[#219EBC] font-semibold hover:bg-[#219EBC]/10 transition-colors">
                See what a Clarity Audit covers
              </Link>
            </div>
          </div>

        </div>
      </section>
      <JsonLd data={schema} />
    </main>
  );
}
