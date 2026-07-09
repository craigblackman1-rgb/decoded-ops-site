import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
import { locations } from '@/data/locations';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Hire a Fractional CTO | Decoded Ops — Print & Decoration Specialists',
  description: 'Hire a fractional CTO with 25+ years in print, embroidery, and decoration operations. Independent technology leadership — not a vendor. Available UK-wide.',
  alternates: { canonical: '/locations/fractional-cto' },
  openGraph: {
    title: 'Hire a Fractional CTO | Decoded Ops — Print & Decoration Specialists',
    description: 'Hire a fractional CTO with 25+ years in print, embroidery, and decoration operations. Independent technology leadership — not a vendor. Available UK-wide.',
    url: 'https://decodedops.co.uk/locations/fractional-cto',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire a Fractional CTO | Decoded Ops — Print & Decoration Specialists',
    description: 'Hire a fractional CTO with 25+ years in print, embroidery, and decoration operations. Independent technology leadership — not a vendor. Available UK-wide.',
  },
};

const counties = ['West Sussex', 'East Sussex', 'Surrey'] as const;

const locationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Where does the fractional CTO service cover?',
          acceptedAnswer: { '@type': 'Answer', text: 'Based in West Sussex, the fractional CTO service covers businesses across Sussex, Surrey, and the wider UK. On-site days are available throughout the UK for businesses that need hands-on involvement.' },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between hiring a fractional CTO and using managed IT support?',
          acceptedAnswer: { '@type': 'Answer', text: 'Managed IT support services handle day-to-day IT issues — helpdesk, hardware, network. A fractional CTO provides strategic technology leadership: ERP selection, system architecture, vendor management, and technology roadmap ownership. Fractional CTO services address the decisions that determine where the business is going; managed IT support keeps the current setup running.' },
        },
        {
          '@type': 'Question',
          name: 'Do you offer fractional CTO services for print businesses in Sussex?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Fractional CTO for print and decoration businesses in West Sussex and across the South East is a core offering. The service combines sector-specific experience in print, embroidery, and decorated goods with technology leadership — not generic IT consultancy.' },
        },
      ],
    },
  ],
};

export default function FractionalCTOLocationsHub() {
  return (
    <>
      <JsonLd data={locationSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Fractional CTO Locations', url: 'https://decodedops.co.uk/locations/fractional-cto' },
      ]} />
      {/* HERO */}
      <section className="pt-24 pb-20 lg:pt-32 lg:pb-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-6">
            <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">— Fractional CTO</span>
          </div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#023047] leading-tight mb-6">
            Hire a fractional CTO{' '}
            <span className="text-[#219EBC]">across Sussex, Surrey, and the UK</span>
          </h1>
          <p className="text-lg text-[#023047]/70 leading-relaxed mb-8 max-w-2xl">
            Hire a fractional CTO for your print, embroidery, or decoration business — with 25+ years of sector-specific experience and no vendor ties. Technology leadership without the full-time cost. Based in West Sussex, on-site wherever you need it across the UK.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors"
          >
            Book a free call <ArrowRight size={18} />
          </Link>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-[#219EBC] hover:text-[#023047] font-medium inline-flex items-center gap-1 mt-3">Or book a call directly <ArrowRight size={14} /></a>
        </div>
      </section>

      {/* FRACTIONAL CTO SERVICES SECTION */}
      <section className="py-12 bg-[#023047]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-[#023047] mb-4">Fractional CTO services for print and decoration businesses</h2>
            <p className="text-[#023047]/70 leading-relaxed mb-4">
              Fractional CTO services give you the technology leadership a growing business needs — without recruiting for a role your business may not yet be ready to support full-time. Vendor oversight, technology roadmap ownership, and a direct line to someone who understands ERP for small business in the print and decoration sector.
            </p>
            <p className="text-[#023047]/70 leading-relaxed">
              Available UK-wide. Based in West Sussex. On-site where the work requires it.
            </p>
          </div>
        </div>
      </section>

      {/* LOCATIONS BY COUNTY */}
      {counties.map((county) => {
        const countyLocations = locations.filter((l) => l.county === county);
        return (
          <section key={county} className="py-16 lg:py-20 border-b border-[#8ECAE6]/20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-10">
                <MapPin size={18} className="text-[#219EBC]" />
                <h2 className="text-2xl font-bold text-[#023047]">{county}</h2>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {countyLocations.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/locations/fractional-cto/${loc.slug}`}
                    className="group flex items-center justify-between p-5 rounded-xl border border-[#8ECAE6]/40 bg-[#F8F9FA] hover:border-[#219EBC]/60 hover:shadow-md transition-all duration-200"
                  >
                    <div>
                      <div className="font-semibold text-[#023047] group-hover:text-[#219EBC] transition-colors">
                        {loc.name}
                      </div>
                      <div className="text-xs text-[#023047]/50 mt-0.5">Fractional CTO</div>
                    </div>
                    <ArrowRight size={16} className="text-[#219EBC] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CROSS-LINK TO AUDIT HUB */}
      <section className="py-16 lg:py-20 bg-[#023047]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-[#8ECAE6] text-sm uppercase tracking-wider mb-3">Not sure where to start?</p>
          <h2 className="text-2xl lg:text-3xl font-bold text-[#F8F9FA] mb-4">
            Start with a Clarity Audit
          </h2>
          <p className="text-[#8ECAE6] max-w-xl mx-auto mb-8">
            A fixed-price, one-day diagnostic. Find out what your systems are costing you before committing to anything ongoing.
          </p>
          <Link
            href="/locations/tech-audit"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#219EBC] text-[#219EBC] font-semibold hover:bg-[#219EBC]/10 transition-colors"
          >
            View audit locations <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
