import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
import { locations } from '@/data/locations';
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Technology Audit for Sussex & Surrey SMEs | Decoded Ops',
  description:
    'Independent technology audits for SMEs across Sussex and Surrey. From £1,500. 3× Clarity Guarantee. Find your nearest location.',
  alternates: { canonical: '/locations/tech-audit' },
  openGraph: {
    title: 'Technology Audit for Sussex & Surrey SMEs | Decoded Ops',
    description:
      'Independent technology audits for SMEs across Sussex and Surrey. From £1,500. 3× Clarity Guarantee. Find your nearest location.',
    url: 'https://decodedops.co.uk/locations/tech-audit',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technology Audit for Sussex & Surrey SMEs | Decoded Ops',
    description:
      'Independent technology audits for SMEs across Sussex and Surrey. From £1,500. 3× Clarity Guarantee. Find your nearest location.',
  },
};

const counties = ['West Sussex', 'East Sussex', 'Surrey'] as const;

export default function TechAuditLocationsHub() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://decodedops.co.uk/' },
        { name: 'Tech Audit Locations', url: 'https://decodedops.co.uk/locations/tech-audit' },
      ]} />

      {/* HERO */}
      <section className="g-off">
        <div className="wrap">
          <div style={{ maxWidth: 720 }}>
            <span className="eyebrow" style={{ marginBottom: 22 }}>Technology Audit</span>
            <h1 className="h1">Technology audits for <em>Sussex and Surrey businesses</em></h1>
            <p className="lede">
              An independent audit that tells you exactly what your systems are costing you, and what to do about it. From £1,500.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 'var(--do-radius-full)', background: 'color-mix(in srgb, var(--do-prussian-blue) 5%, transparent)', border: '1px solid color-mix(in srgb, var(--do-prussian-blue) 10%, transparent)', marginBottom: 32 }}>
              <span style={{ fontSize: 'var(--do-text-sm)', fontWeight: 'var(--do-weight-semibold)', color: 'var(--do-text-primary)' }}>3× Clarity Guarantee</span>
              <span style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-text-muted)' }}>If I don&apos;t find 3× the fee in recoverable cost or lost revenue, you get a full refund</span>
            </div>
            <div>
              <Link href="/contact" className="btn btn--primary" style={{ marginBottom: 12 }}>
                Book a free call <ArrowRight size={18} />
              </Link>
              <div>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-cerulean)', fontWeight: 'var(--do-weight-medium)', display: 'inline-flex', alignItems: 'center', gap: 4 }}>Or book a call directly <ArrowRight size={14} /></a>
              </div>
            </div>
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
                    href={`/locations/tech-audit/${loc.slug}`}
                    className="card"
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', textDecoration: 'none' }}
                  >
                    <div>
                      <div style={{ fontWeight: 'var(--do-weight-semibold)', color: 'var(--do-text-primary)', fontSize: 'var(--do-text-base)' }}>
                        {loc.name}
                      </div>
                      <div style={{ fontSize: 'var(--do-text-xs)', color: 'var(--do-text-subtle)', marginTop: 4 }}>Technology Audit · from £1,500</div>
                    </div>
                    <ArrowRight size={16} style={{ color: 'var(--do-cerulean)', opacity: 0, transition: 'opacity 0.2s' }} />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CROSS-LINK TO FRACTIONAL CTO HUB */}
      <section className="g-navy">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="eyebrow" style={{ marginBottom: 22 }}>Need ongoing support?</span>
          <h2 className="h2">Fractional CTO engagement</h2>
          <p className="lede">
            After the audit, some businesses need me to stay involved and own the technology decisions. That&apos;s the fractional CTO model.
          </p>
          <div className="btn-row" style={{ justifyContent: 'center', marginTop: 32 }}>
            <Link href="/locations/fractional-cto" className="btn btn--outline">
              View fractional CTO locations <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
