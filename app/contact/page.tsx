import type { Metadata } from 'next';
import { ContactClient } from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact | Decoded Ops',
  description: 'Book a free 60-minute discovery call with Craig Blackman. Technology and operations consultancy for print, embroidery, and decoration businesses. No commitment, no pitch.',
  alternates: { canonical: '/contact' },
  openGraph: {
    type: 'website',
    title: 'Contact | Decoded Ops',
    description: 'Book a free 60-minute discovery call with Craig Blackman. Technology and operations consultancy for print, embroidery, and decoration businesses.',
    url: 'https://decodedops.co.uk/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Decoded Ops | Operational Technology Consultant',
    description: 'Get in touch with Craig Blackman for operational and technology consultancy. Free 60-minute discovery call. Based in Worthing, serving the UK.',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
