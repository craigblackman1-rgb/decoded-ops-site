import type { Metadata } from 'next';
import { PricingClient } from './PricingClient';

export const metadata: Metadata = {
  title: 'Pricing | Decoded Ops',
  description: 'Transparent pricing for operational and technology consultancy. Clarity audit from £2,500. Project delivery, transformation programmes, and retained engagements priced by business size.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    type: 'website',
    title: 'Pricing | Decoded Ops',
    description: 'Transparent pricing for operational and technology consultancy. Clarity audit from £2,500. Project delivery, transformation programmes, and retained engagements priced by business size.',
    url: 'https://decodedops.co.uk/pricing',
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
