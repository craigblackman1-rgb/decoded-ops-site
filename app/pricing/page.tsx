import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { PricingClient } from './PricingClient';

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
      <PricingClient />
    </>
  );
}
