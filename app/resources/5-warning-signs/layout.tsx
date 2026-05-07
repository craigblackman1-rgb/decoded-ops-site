import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '5 Warning Signs Your Systems Are Holding You Back | Decoded Ops',
  description: 'Five signs that your current technology is costing you more than a replacement would. Practical and straight-talking from an operations consultant.',
  alternates: { canonical: '/resources/5-warning-signs' },
  openGraph: {
    title: '5 Warning Signs Your Systems Are Holding You Back | Decoded Ops',
    description: 'Five signs your current technology is costing you more than a replacement would.',
    url: 'https://decodedops.co.uk/resources/5-warning-signs',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '5 Warning Signs | Decoded Ops',
    description: 'Five signs your current technology is costing you more than a replacement would.',
  },
};

export default function WarningSignsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
