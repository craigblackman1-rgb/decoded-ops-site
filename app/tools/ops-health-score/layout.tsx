import type { Metadata } from 'next';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Ops Health Score | Decoded Ops',
  description: 'Rate your business across five operational dimensions with the free Ops Health Score: systems integration, process, data quality and team capability.',
  alternates: { canonical: '/tools/ops-health-score' },
  openGraph: {
    title: 'Ops Health Score | Decoded Ops',
    description: 'Rate your business across five operational dimensions with the free Ops Health Score: systems integration, process, data quality and team capability.',
    url: 'https://decodedops.co.uk/tools/ops-health-score',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ops Health Score | Decoded Ops',
    description: 'Rate your business across five operational dimensions with the free Ops Health Score: systems integration, process, data quality and team capability.',
    images: [OG_IMAGE_PATH],
  },
};

export default function OpsHealthScoreLayout({ children }: { children: React.ReactNode }) {
  return children;
}
