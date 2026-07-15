import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { PricingClient, PricingTable } from './PricingClient';

export const metadata: Metadata = {
  title: 'Consultancy Pricing — Clarity, Deliver, Transform | Decoded Ops',
  description: 'Transparent pricing for operational and technology consultancy. Clarity audit from £395. Project delivery, transformation programmes, and retained engagements.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    type: 'website',
    title: 'Consultancy Pricing — Clarity, Deliver, Transform | Decoded Ops',
    description: 'Transparent pricing for operational and technology consultancy. Clarity audit from £395. Project delivery, transformation programmes, and retained engagements.',
    url: 'https://decodedops.co.uk/pricing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consultancy Pricing — Clarity, Deliver, Transform | Decoded Ops',
    description: 'Transparent pricing for operational and technology consultancy. Clarity audit from £395.',
  },
};

export default function PricingPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Pricing', url: 'https://decodedops.co.uk/pricing' },
      ]} />
      <section className="py-16 bg-white border-b border-[#8ECAE6]/20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#023047] mb-2">Indicative pricing by business size</h2>
          <p className="text-sm text-[#023047]/70 mb-8">No VAT — Craig is not VAT registered. Vendor and software costs are separate, confirmed once a brief exists.</p>
          <PricingTable />
        </div>
      </section>
      <PricingClient />
    </>
  );
}
