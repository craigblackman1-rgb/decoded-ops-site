import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Proposals — Decoded Ops',
  description: 'Gated client proposals and project documentation',
};

export default function ClientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
