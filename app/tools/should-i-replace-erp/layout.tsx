import type { Metadata } from 'next';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Should I Replace My ERP | Decoded Ops',
  description: 'Not sure whether to replace your ERP, upgrade it or extend it. Answer eight questions and get a clear recommendation, plus what an honest assessment costs.',
  alternates: { canonical: '/tools/should-i-replace-erp' },
  openGraph: {
    title: 'Should I Replace My ERP | Decoded Ops',
    description: 'Not sure whether to replace your ERP, upgrade it or extend it. Answer eight questions and get a clear recommendation, plus what an honest assessment costs.',
    url: 'https://decodedops.co.uk/tools/should-i-replace-erp',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Should I Replace My ERP | Decoded Ops',
    description: 'Not sure whether to replace your ERP, upgrade it or extend it. Answer eight questions and get a clear recommendation, plus what an honest assessment costs.',
    images: [OG_IMAGE_PATH],
  },
};

export default function ShouldIReplaceERPLayout({ children }: { children: React.ReactNode }) {
  return children;
}
