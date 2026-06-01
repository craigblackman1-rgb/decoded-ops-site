import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Portal — Decoded Ops',
  description: 'Secure client portal — proposals, documents, and project resources.',
  robots: { index: false, follow: false },
};

export default function ClientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
