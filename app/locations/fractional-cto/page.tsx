import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
import { locations } from '@/data/locations';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Hire a Fractional CTO | Decoded Ops, Print & Decoration Specialists',
  description: 'Hire a fractional CTO with 25+ years in print, embroidery, and decoration operations. Independent technology leadership, not a vendor. Available UK-wide.',
  alternates: { canonical: '/locations/fractional-cto' },
  openGraph: {
    title: 'Hire a Fractional CTO | Decoded Ops, Print & Decoration Specialists',
    description: 'Hire a fractional CTO with 25+ years in print, embroidery, and decoration operations. Independent technology leadership, not a vendor. Available UK-wide.',
    url: 'https://decodedops.co.uk/locations/fractional-cto',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire a Fractional CTO | Decoded Ops, Print & Decoration Specialists',
    description: 'Hire a fractional CTO with 25+ years in print, embroidery, and decoration operations. Independent technology leadership, not a vendor. Available UK-wide.',
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
          acceptedAnswer: { '@type': 'Answer', text: 'Managed IT support services handle day-to-day IT issues: helpdesk, hardware, network. A fractional CTO provides strategic technology leadership: ERP selection, system architecture, vendor management, and technology roadmap ownership. Fractional CTO services address the decisions that determine where the business is going; managed IT support keeps the current setup running.' },
        },
        {
          '@type': 'Question',
          name: 'Do you offer fractional CTO services for print businesses in Sussex?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Fractional CTO for print and decoration businesses in West Sussex and across the South East is a core offering. The service combines sector-specific experience in print, embroidery, and decorated goods with technology leadership, not generic IT consultancy.' },
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
      <section className="g-off">
        <div className="wrap">
          <div style={{ maxWidth: 720 }}>
            <span className="eyebrow" style={{ marginBottom: 22 }}>Fractional CTO</span>
            <h1 className="h1">Hire a fractional CTO <em>across Sussex, Surrey, and the UK</em></h1>
            <p className="lede">
              Hire a fractional CTO for your print, embroidery, or decoration business, with 25+ years of sector-specific experience and no vendor ties. Technology leadership without the full-time cost. Based in West Sussex, on-site wherever you need it across the UK.
            </p>
            <div className="btn-row">
              <Link href="/contact" className="btn btn--primary">
                Book a free call <ArrowRight size={18} />
              </Link>
            </div>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-cerulean)', fontWeight: 'var(--do-weight-medium)', display: 'inline-flex', alignItems: 'center', gap: 4 }}>Or book a call directly <ArrowRight size={14} /></a>
          </div>
        </div>
      </section>

      {/* FRACTIONAL CTO SERVICES SECTION */}
      <section className="g-tint">
        <div className="wrap">
          <div style={{ maxWidth: '42ch' }}>
            <h2 className="h2">Fractional CTO services for print and decoration businesses</h2>
            <p style={{ color: 'var(--do-text-secondary)', fontSize: 'var(--do-text-base)', lineHeight: 1.75, marginBottom: 16 }}>
              Fractional CTO services give you the technology leadership a growing business needs, without recruiting for a role your business may not yet be ready to support full-time. Vendor oversight, technology roadmap ownership, and a direct line to someone who understands ERP for small business in the print and decoration sector.
            </p>
            <p style={{ color: 'var(--do-text-secondary)', fontSize: 'var(--do-text-base)', lineHeight: 1.75 }}>
              Available UK-wide. Based in West Sussex. On-site where the work requires it.
            </p>
          </div>
        </div>
      </section>

      {/* LOCATIONS BY COUNTY */}
      {counties.map((county) => {
        const countyLocations = locations.filter((l) => l.county === county);
        return (
          <section key={county} className="g-off" style={{ borderBottom: '1px solid var(--do-border-subtle)' }}>
            <div className="wrap">
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 40 }}>
                <MapPin size={18} style={{ color: 'var(--do-cerulean)' }} />
                <h2 className="h2" style={{ fontSize: 'var(--do-text-2xl)' }}>{county}</h2>
              </div>
              <div className="grid grid--3">
                {countyLocations.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/locations/fractional-cto/${loc.slug}`}
                    className="card"
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', textDecoration: 'none' }}
                  >
                    <div>
                      <div style={{ fontWeight: 'var(--do-weight-semibold)', color: 'var(--do-text-primary)', fontSize: 'var(--do-text-base)' }}>
                        {loc.name}
                      </div>
                      <div style={{ fontSize: 'var(--do-text-xs)', color: 'var(--do-text-subtle)', marginTop: 4 }}>Fractional CTO</div>
                    </div>
                    <ArrowRight size={16} style={{ color: 'var(--do-cerulean)', opacity: 0, transition: 'opacity 0.2s' }} />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CROSS-LINK TO AUDIT HUB */}
      <section className="g-navy">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="eyebrow" style={{ marginBottom: 22 }}>Not sure where to start?</span>
          <h2 className="h2">Start with a Clarity Audit</h2>
          <p className="lede">
            A fixed-price, one-day diagnostic. Find out what your systems are costing you before committing to anything ongoing.
          </p>
          <div className="btn-row" style={{ justifyContent: 'center', marginTop: 32 }}>
            <Link href="/locations/tech-audit" className="btn btn--outline">
              View audit locations <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
