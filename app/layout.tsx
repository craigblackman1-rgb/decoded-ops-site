import type { Metadata } from 'next';
import { Outfit, DM_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Decoded Ops — Technology made simple for print, embroidery & workwear businesses',
  description: 'Operations and technology consultancy for businesses that print, embroider, decorate and make. Plain English. Real answers. 25 years in the sector.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full antialiased ${outfit.variable} ${dmSans.variable}`}>
      <body className="min-h-full flex flex-col bg-[#F8F9FA] text-[#023047]" style={{ fontFamily: 'var(--font-dm-sans), ui-sans-serif, system-ui, sans-serif' }}>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
