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
};

export default function ContactPage() {
  return <ContactClient />;
}
