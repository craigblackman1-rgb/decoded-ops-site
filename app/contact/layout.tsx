import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Decoded Ops',
  description: 'Get in touch with Decoded Ops. Book a free discovery call, ask a question, or discuss your technology and operations challenges. Based in West Sussex.',
  alternates: { canonical: '/contact' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
