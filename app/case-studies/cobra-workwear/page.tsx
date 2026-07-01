import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';

// Target keyword: "b2b ordering portal workwear" (secondary: "cobra workwear decoded ops")
export const metadata = {
  title: 'Cobra Workwear — B2B Portal & ERP Evaluation | Decoded Ops',
  description: 'Independent Clarity Audit and ERP evaluation for Cobra Workwear ahead of a B2B customer ordering portal build.',
  alternates: { canonical: '/case-studies/cobra-workwear' },
  openGraph: {
    type: 'article',
    title: 'Cobra Workwear — B2B Portal & ERP Evaluation | Decoded Ops',
    description: 'Independent Clarity Audit and ERP evaluation ahead of a B2B customer ordering portal build.',
    url: 'https://decodedops.co.uk/case-studies/cobra-workwear',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cobra Workwear — B2B Portal & ERP Evaluation | Decoded Ops',
    description: 'Independent Clarity Audit and ERP evaluation for a B2B ordering portal build.',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Cobra Workwear — B2B Portal and ERP Evaluation',
      description: 'Independent Clarity Audit and ERP evaluation for Cobra Workwear ahead of a B2B customer ordering portal build.',
      author: { '@type': 'Person', name: 'Craig Blackman' },
      publisher: { '@type': 'Organization', name: 'Decoded Ops' },
      url: 'https://decodedops.co.uk/case-studies/cobra-workwear',
    },
  ],
};

export default function CobraWorkwearCaseStudyPage() {
  return (
    <main>
      <JsonLd data={schema} />
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-6">
            <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">— Post-Audit · Workwear</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#023047] leading-tight mb-6">
            Cobra Workwear: an independent view before the ERP decision, not after
          </h1>
          <p className="text-lg text-[#023047]/70 leading-relaxed">
            Cobra Workwear needed a B2B customer ordering portal — logins, custom ranges per customer, credit terms, multi-site, Xero integration — plus an ERP that could actually support it. The Clarity Audit came first, before anything got built or signed off.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">

          <h2 className="text-2xl font-bold text-[#023047] mb-4">The problem</h2>
          <p className="text-[#023047]/80 leading-relaxed mb-8">
            Cobra were evaluating an ERP platform without an independent view on whether it actually fit their operation, running alongside Shopify with a B2B portal still to be scoped and built. Getting the platform choice wrong here doesn't just cost money on the software, it shapes the next 12 to 18 months of how the whole ordering and fulfilment process works. That's not a decision to make off the back of a vendor demo.
          </p>

          <h2 className="text-2xl font-bold text-[#023047] mb-4">What I did</h2>
          <div className="space-y-4 mb-8">
            {[
              'Ran a Clarity Audit against Cobra\'s actual, documented requirements, not the vendor\'s pitch',
              'Evaluated the ERP platform on the table independently, with no vendor relationship or referral fee riding on the outcome',
              'Scoped what the B2B portal actually needs to do: logins, custom ranges per customer, credit terms, multi-site support, and a clean Xero integration',
              'Positioned Decoded Ops as architect and project manager for the build, not the builder — a vetted third-party partner delivers the portal, keeping cost sensitive and avoiding a build-line markup',
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <CheckCircle2 size={20} className="flex-shrink-0 mt-1 text-[#219EBC]" />
                <p className="text-[#023047]/80 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-2xl bg-[#219EBC]/10 border border-[#219EBC]/25 mb-8">
            <h3 className="text-lg font-bold text-[#023047] mb-3">Why the audit came before the build</h3>
            <p className="text-[#023047]/80 leading-relaxed">
              A B2B portal that doesn't talk to the right ERP, chosen without an independent check, is exactly how a business ends up rebuilding the same thing twice. The audit exists to catch that before contracts are signed, not to write a report nobody acts on.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#023047] mb-4">Status</h2>
          <p className="text-[#023047]/80 leading-relaxed mb-8">
            Clarity Audit complete. Now negotiating the Deliver and Transform engagement to take the portal and ERP work from scope into build.
          </p>

          <div className="p-8 rounded-2xl bg-[#023047]">
            <h3 className="text-lg font-bold text-[#F8F9FA] mb-3">Weighing up a similar decision?</h3>
            <p className="text-[#8ECAE6] leading-relaxed mb-6">
              If you're choosing an ERP or scoping a customer portal and want an independent view before anything's signed, that's exactly what a Clarity Audit is for.
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
