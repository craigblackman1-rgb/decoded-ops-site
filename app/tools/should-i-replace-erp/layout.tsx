import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Should I Replace My ERP? | Decoded Ops',
  description: 'Eight yes/no questions to help you decide whether your current ERP is fixable or it\'s time to plan an exit.',
  alternates: { canonical: '/tools/should-i-replace-erp' },
  openGraph: {
    title: 'Should I Replace My ERP? | Decoded Ops',
    description: 'Eight questions to help you decide whether to replace your ERP or fix what you have.',
    url: 'https://decodedops.co.uk/tools/should-i-replace-erp',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Should I Replace My ERP? | Decoded Ops',
    description: 'Eight questions to help you decide whether to replace your ERP.',
  },
};

export default function ShouldReplaceERPLayout({ children }: { children: React.ReactNode }) {
  return children;
}
