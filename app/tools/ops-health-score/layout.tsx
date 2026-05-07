import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ops Health Score | Decoded Ops',
  description: 'Rate your business across five operational dimensions — systems integration, processes, data quality, team capability, and technology strategy.',
  alternates: { canonical: '/tools/ops-health-score' },
  openGraph: {
    title: 'Ops Health Score | Decoded Ops',
    description: 'Rate your operations across five dimensions and see where to focus first.',
    url: 'https://decodedops.co.uk/tools/ops-health-score',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ops Health Score | Decoded Ops',
    description: 'Rate your operations across five dimensions and see where to focus first.',
  },
};

export default function OpsHealthScoreLayout({ children }: { children: React.ReactNode }) {
  return children;
}
