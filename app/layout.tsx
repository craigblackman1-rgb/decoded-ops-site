import type { Metadata } from 'next';
import Script from 'next/script';
import { Outfit, DM_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CookieConsent } from '@/components/CookieConsent';
import { JsonLd } from '@/components/JsonLd';

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
  metadataBase: new URL('https://decodedops.co.uk'),
  title: 'Decoded Ops | Technology for Print & Embroidery Businesses',
  description: 'Operations and technology consultancy for businesses that print, embroider, decorate and make. Plain English. Real answers. 25 years in the sector.',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    siteName: 'Decoded Ops',
    locale: 'en_GB',
    url: 'https://decodedops.co.uk',
    title: 'Decoded Ops | Technology for Print & Embroidery Businesses',
    description: 'Operations and technology consultancy for businesses that print, embroider, decorate and make. Plain English. Real answers. 25 years in the sector.',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'Decoded Ops' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Decoded Ops | Technology for Print & Embroidery Businesses',
    description: 'Operations and technology consultancy for print and embroidery businesses. Plain English. Real answers.',
    images: ['/og-default.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full antialiased ${outfit.variable} ${dmSans.variable}`}>
      <body className="min-h-full flex flex-col bg-[#F8F9FA] text-[#023047]" style={{ fontFamily: 'var(--font-dm-sans), ui-sans-serif, system-ui, sans-serif' }}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SN2Z3J31CZ"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SN2Z3J31CZ');`}
        </Script>
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="GagP9ji+yt3Y0PukCnZybQ"
          strategy="afterInteractive"
        />

        <JsonLd data={{
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          '@id': 'https://decodedops.co.uk/#organisation',
          name: 'Decoded Ops',
          url: 'https://decodedops.co.uk',
          description: 'Technology and operations consultancy for print, embroidery and decoration businesses. Plain English. Real answers. 25 years in the sector.',
          founder: {
            '@type': 'Person',
            name: 'Craig Blackman',
            jobTitle: 'Founder & Principal Consultant',
          },
          areaServed: 'GB',
          knowsAbout: ['print technology', 'embroidery operations', 'ERP systems', 'fractional CTO', 'technology audit', 'eCommerce integration'],
          sameAs: ['https://www.linkedin.com/company/decoded-ops'],
        }} />
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
