import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { locations } from '@/data/locations';

export const metadata: Metadata = {
  title: 'Technology Audit for Sussex & Surrey SMEs | Decoded Ops',
  description:
    'Independent technology audits for SMEs across Sussex and Surrey. From £395. 3× Clarity Guarantee. Find your nearest location.',
  alternates: { canonical: '/locations/tech-audit' },
};

const counties = ['West Sussex', 'East Sussex', 'Surrey'] as const;

export default function TechAuditLocationsHub() {
  return (
    <>
      {/* HERO */}
      <section className="pt-24 pb-20 lg:pt-32 lg:pb-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#023047]/10 border border-[#023047]/20 mb-6">
              <span className="text-xs font-semibold text-[#023047] tracking-wider uppercase">— Technology Audit</span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#023047] leading-tight mb-6">
              Technology audits for{' '}
              <span className="text-[#219EBC]">Sussex and Surrey businesses</span>
            </h1>
            <p className="text-lg text-[#023047]/70 leading-relaxed mb-6 max-w-2xl">
              A structured, independent audit that tells you exactly what your systems are costing you — and what to do about it. Starting from £395.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#023047]/5 border border-[#023047]/10 mb-8">
              <span className="text-sm font-semibold text-[#023047]">3× Clarity Guarantee</span>
              <span className="text-sm text-[#023047]/60">— if we don&apos;t find 3× the fee in recoverable cost or lost revenue, full refund</span>
            </div>
            <div className="block">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FFB703] text-[#023047] font-semibold hover:bg-[#FB8500] transition-colors"
              >
                Book a free call <ArrowRight size={18} />
              </Link>
            </div>
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
                    href={`/locations/tech-audit/${loc.slug}`}
                    className="group flex items-center justify-between p-5 rounded-xl border border-[#8ECAE6]/40 bg-[#F8F9FA] hover:border-[#219EBC]/60 hover:shadow-md transition-all duration-200"
                  >
                    <div>
                      <div className="font-semibold text-[#023047] group-hover:text-[#219EBC] transition-colors">
                        {loc.name}
                      </div>
                      <div className="text-xs text-[#023047]/50 mt-0.5">Technology Audit · from £395</div>
                    </div>
                    <ArrowRight size={16} className="text-[#219EBC] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CROSS-LINK TO FRACTIONAL CTO HUB */}
      <section className="py-16 lg:py-20 bg-[#023047]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-[#8ECAE6] text-sm uppercase tracking-wider mb-3">Need ongoing support?</p>
          <h2 className="text-2xl lg:text-3xl font-bold text-[#F8F9FA] mb-4">
            Fractional CTO engagement
          </h2>
          <p className="text-[#8ECAE6] max-w-xl mx-auto mb-8">
            After the audit, some businesses need someone to stay involved and own the technology decisions. That&apos;s the fractional CTO model.
          </p>
          <Link
            href="/locations/fractional-cto"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#219EBC] text-[#219EBC] font-semibold hover:bg-[#219EBC]/10 transition-colors"
          >
            View fractional CTO locations <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
