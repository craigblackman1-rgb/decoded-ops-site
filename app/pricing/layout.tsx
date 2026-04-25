import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | Decoded Ops',
  description: 'Transparent pricing for all Decoded Ops services. Clarity Audit from £395, project delivery, transformation programmes, and retained CTO. No hidden costs.',
  alternates: { canonical: '/pricing' },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
