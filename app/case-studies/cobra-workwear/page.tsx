import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
import { JsonLd } from '@/components/JsonLd';

// Target keyword: "b2b ordering portal workwear" (secondary: "cobra workwear decoded ops")
export const metadata = {
  title: 'Cobra Workwear — B2B Portal & ERP Evaluation | Decoded Ops',
  description: 'Clarity Audit complete on a B2B ordering portal and ERP evaluation, now scoping the delivery engagement.',
  alternates: { canonical: '/case-studies/cobra-workwear' },
  openGraph: {
    type: 'article',
    title: 'Cobra Workwear — B2B Portal & ERP Evaluation | Decoded Ops',
    description: 'Clarity Audit complete on a B2B ordering portal and ERP evaluation, now scoping the delivery engagement.',
    url: 'https://decodedops.co.uk/case-studies/cobra-workwear',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cobra Workwear — B2B Portal & ERP Evaluation | Decoded Ops',
    description: 'Clarity Audit complete on a B2B ordering portal and ERP evaluation, now scoping the delivery engagement.',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Cobra Workwear — B2B Portal and ERP Evaluation',
      description: 'Clarity Audit complete on a B2B ordering portal and ERP evaluation, now scoping the delivery engagement.',
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

      {/* ── 1. HERO ── */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-20 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-6">
            <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">— Client work · workwear</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#023047] leading-tight mb-6">
            Architect and advisor, not the builder.
          </h1>
          <p className="text-lg text-[#023047]/70 leading-relaxed max-w-3xl mx-auto">
            Cobra Workwear needed a B2B trade portal, ERP evaluation, and a Shopify replacement. Discovery Day, followed by Deliver Consultancy: vendor requirements, procurement, and integration architecture.
          </p>
        </div>
      </section>

      {/* ── 2. STORY ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">

          <h2 className="text-2xl font-bold text-[#023047] mb-4">What was done</h2>
          <p className="text-[#023047]/70 leading-relaxed mb-4">
            The eCommerce build itself is being delivered by a third party on Medusa v2 and Next.js, with Craig acting as architect and advisor rather than builder. This is Shape A: advisory and oversight, where the client's implementation partner does the build.
          </p>
          <p className="text-[#023047]/70 leading-relaxed mb-8">
            The stack was chosen deliberately as a flagship, repeatable reference build rather than a one-off — the same architecture is reused where it fits future clients.
          </p>

          <h2 className="text-2xl font-bold text-[#023047] mb-4">The commercial shape</h2>
          <p className="text-[#023047]/70 leading-relaxed mb-8">
            Restructured from an initial six-month framing to a twelve-month minimum retainer covering the full build across the first four months, then ongoing weekly involvement. Named here only as a shape, not a price — pricing detail stays out of public case studies.
          </p>

          <div className="p-6 lg:p-7 rounded-2xl bg-[#FFB703]/10 border border-[#FFB703]/30 mb-8">
            <h3 className="text-lg font-bold text-[#023047] mb-2">What's still in progress</h3>
            <p className="text-[#023047]/70 text-sm leading-relaxed">
              The engagement is live and ongoing, not a completed, closed project.
            </p>
          </div>

        </div>
      </section>

      {/* ── 3. CTA STRIP (navy) ── */}
      <section className="py-16 lg:py-20 bg-[#023047]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#F8F9FA] mb-4">
            Evaluating an ERP or platform decision?
          </h2>
          <p className="text-lg text-[#8ECAE6] leading-relaxed mb-8 max-w-xl mx-auto">
            For a diagnosis of what your own ERP or platform situation needs, book a Discovery Day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors">
              Book a free discovery call <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
