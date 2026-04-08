import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Decoded Ops — Technology made simple for print, embroidery & workwear businesses',
  description: 'Operations and technology consultancy for businesses that print, embroider, decorate and make. Plain English. Real answers. 25 years in the sector.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#FDFDFF] text-[#393D3F]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
