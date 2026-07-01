import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';
import { ContactClient } from './ContactClient';

export const metadata: Metadata = {
  title: 'Book a Free Discovery Call | Decoded Ops',
  description: 'Book a free 60-minute discovery call with Craig Blackman. Technology and operations consultancy for print, embroidery, and decoration businesses. No commitment, no pitch.',
  alternates: { canonical: '/contact' },
  openGraph: {
    type: 'website',
    title: 'Book a Free Discovery Call | Decoded Ops',
    description: 'Book a free 60-minute discovery call with Craig Blackman. Technology and operations consultancy for print, embroidery, and decoration businesses.',
    url: 'https://decodedops.co.uk/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Free Discovery Call | Decoded Ops',
    description: 'Get in touch with Craig Blackman for operational and technology consultancy. Free 60-minute discovery call. Based in Worthing, serving the UK.',
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
