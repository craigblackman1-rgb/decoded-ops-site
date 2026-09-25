import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ContactClient } from './ContactClient';
import { OG_IMAGE, OG_IMAGE_PATH } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Book a Free Discovery Call | Decoded Ops',
  description: 'Book a free 60-minute discovery call with Craig Blackman. Technology and operations consultancy for print, embroidery and decoration businesses.',
  alternates: { canonical: '/contact' },
  openGraph: {
    type: 'website',
    title: 'Book a Free Discovery Call | Decoded Ops',
    description: 'Book a free 60-minute discovery call with Craig Blackman. Technology and operations consultancy for print, embroidery and decoration businesses.',
    url: 'https://decodedops.co.uk/contact',
    images: OG_IMAGE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Free Discovery Call | Decoded Ops',
    description: 'Book a free 60-minute discovery call with Craig Blackman. Technology and operations consultancy for print, embroidery and decoration businesses.',
    images: [OG_IMAGE_PATH],
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Contact', url: 'https://decodedops.co.uk/contact' },
      ]} />
      <ContactClient />
    </>
  );
}
