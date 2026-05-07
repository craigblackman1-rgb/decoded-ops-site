import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Readiness Check | Decoded Ops',
  description: 'Six quick questions to find out whether your business is ready to adopt AI — or whether you need to fix your foundation first.',
  alternates: { canonical: '/tools/ai-readiness-check' },
  openGraph: {
    title: 'AI Readiness Check | Decoded Ops',
    description: 'Six questions to assess your readiness for AI in your print or decoration business.',
    url: 'https://decodedops.co.uk/tools/ai-readiness-check',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Readiness Check | Decoded Ops',
    description: 'Six questions to assess your readiness for AI in your print or decoration business.',
  },
};

export default function AIReadinessLayout({ children }: { children: React.ReactNode }) {
  return children;
}
