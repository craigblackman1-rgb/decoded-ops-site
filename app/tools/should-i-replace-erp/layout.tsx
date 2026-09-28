import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ERP for Manufacturing, Should You Replace It | Decoded Ops',
  description: 'Not sure if your ERP for manufacturing needs replacing, upgrading or extending. Answer eight questions and get a clear recommendation, free, no signup.',
  alternates: { canonical: '/tools/should-i-replace-erp' },
  openGraph: {
    type: 'website',
    title: 'ERP for Manufacturing, Should You Replace It | Decoded Ops',
    description: 'Not sure if your ERP for manufacturing needs replacing, upgrading or extending. Answer eight questions and get a clear recommendation, free, no signup.',
    url: 'https://decodedops.co.uk/tools/should-i-replace-erp',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ERP for Manufacturing, Should You Replace It | Decoded Ops',
    description: 'Not sure if your ERP for manufacturing needs replacing, upgrading or extending. Answer eight questions and get a clear recommendation, free, no signup.',
  },
};

export default function ShouldIReplaceErpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
