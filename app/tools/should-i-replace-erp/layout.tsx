import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Should I Replace My ERP? Free Decision Tool | Decoded Ops',
  description: 'Not sure if you should replace your ERP, upgrade it, or extend it? Answer 8 questions and get a clear recommendation — plus what an honest assessment would cost.',
  alternates: { canonical: '/tools/should-i-replace-erp' },
  openGraph: {
    title: 'Should I Replace My ERP? Free Decision Tool | Decoded Ops',
    description: 'Not sure if you should replace your ERP, upgrade it, or extend it? Answer 8 questions and get a clear recommendation — plus what an honest assessment would cost.',
    url: 'https://decodedops.co.uk/tools/should-i-replace-erp',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Should I Replace My ERP? Free Decision Tool | Decoded Ops',
    description: 'Not sure if you should replace your ERP, upgrade it, or extend it? Answer 8 questions and get a clear recommendation — plus what an honest assessment would cost.',
  },
};

export default function ShouldReplaceERPLayout({ children }: { children: React.ReactNode }) {
  return children;
}
