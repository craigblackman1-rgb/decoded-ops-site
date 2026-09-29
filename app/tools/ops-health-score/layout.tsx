import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Operations Audit, Free Ops Health Score | Decoded Ops',
  description: 'This free operations audit rates your business across five dimensions: systems integration, process documentation, data quality, team capability and technology strategy. Get your score now.',
  alternates: { canonical: '/tools/ops-health-score' },
  openGraph: {
    type: 'website',
    title: 'Operations Audit, Free Ops Health Score | Decoded Ops',
    description: 'This free operations audit rates your business across five dimensions: systems integration, process documentation, data quality, team capability and technology strategy. Get your score now.',
    url: 'https://decodedops.co.uk/tools/ops-health-score',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Operations Audit, Free Ops Health Score | Decoded Ops',
    description: 'This free operations audit rates your business across five dimensions: systems integration, process documentation, data quality, team capability and technology strategy. Get your score now.',
  },
};

export default function OpsHealthScoreLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
