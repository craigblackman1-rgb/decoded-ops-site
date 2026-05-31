import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Readiness Check for Small Businesses | Free Tool | Decoded Ops',
  description: 'Find out if your business is actually ready to benefit from AI. A free 5-minute assessment covering your data quality, process documentation, and systems integration.',
  alternates: { canonical: '/tools/ai-readiness-check' },
  openGraph: {
    title: 'AI Readiness Check for Small Businesses | Free Tool | Decoded Ops',
    description: 'Find out if your business is actually ready to benefit from AI. A free 5-minute assessment covering your data quality, process documentation, and systems integration.',
    url: 'https://decodedops.co.uk/tools/ai-readiness-check',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Readiness Check for Small Businesses | Free Tool | Decoded Ops',
    description: 'Find out if your business is actually ready to benefit from AI. A free 5-minute assessment covering your data quality, process documentation, and systems integration.',
  },
};

export default function AIReadinessLayout({ children }: { children: React.ReactNode }) {
  return children;
}
