import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ops Health Score | Decoded Ops',
  description: 'Rate your business across five operational dimensions with the free Ops Health Score: systems integration, process, data quality and team capability.',
  openGraph: {
    title: 'Ops Health Score | Decoded Ops',
    description: 'Rate your business across five operational dimensions with the free Ops Health Score: systems integration, process, data quality and team capability.',
    url: 'https://decodedops.co.uk/tools/ops-health-score',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ops Health Score | Decoded Ops',
    description: 'Rate your business across five operational dimensions with the free Ops Health Score: systems integration, process, data quality and team capability.',
  },
};

export default function OpsHealthScoreLayout({ children }: { children: React.ReactNode }) {
  return children;
}
