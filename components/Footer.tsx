import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';

const sectors = [
  { label: 'Garment decoration', href: '/sectors/garment-decoration' },
  { label: 'Print & promotional', href: '/sectors/print-promotional' },
  { label: 'Workwear & teamwear', href: '/sectors/workwear-teamwear' },
  { label: 'Signs & graphics', href: '/sectors/signs-graphics' },
  { label: 'Awards & engraving', href: '/sectors/awards-engraving' },
  { label: 'Labels & packaging', href: '/sectors/labels-packaging' },
];

const problems = [
  { label: 'ERP implementation failure', href: '/problems/erp-implementation-failure' },
  { label: 'eCommerce not connected', href: '/problems/ecommerce-not-connected' },
  { label: "Systems don't talk to each other", href: '/problems/systems-dont-talk' },
  { label: 'Wrong ERP software', href: '/problems/wrong-erp-software' },
  { label: 'Disaster recovery & outage', href: '/problems/disaster-recovery' },
  { label: 'No operations owner', href: '/problems/no-ops-owner' },
  { label: 'Manual workarounds', href: '/problems/manual-workarounds' },
  { label: 'AI paralysis', href: '/problems/ai-paralysis' },
];

const services = [
  { label: 'Clarity — Operational audit', href: '/clarity' },
  { label: 'Deliver — Project delivery', href: '/deliver' },
  { label: 'Transform — Digital transformation', href: '/transform' },
  { label: 'Retained — Fractional CTO', href: '/retained' },
];

const resources = [
  { label: 'Calculators & tools', href: '/tools' },
  { label: 'Audit checklist', href: '/resources/audit-checklist' },
  { label: 'Software reviews', href: '/resources/software-reviews' },
  { label: 'Blog', href: '/blog' },
];

const locations = [
  { label: 'Fractional CTO — all locations', href: '/locations/fractional-cto' },
  { label: 'Technology Audit — all locations', href: '/locations/tech-audit' },
  { label: 'West Sussex', href: '/locations/fractional-cto/chichester' },
  { label: 'East Sussex', href: '/locations/fractional-cto/brighton' },
  { label: 'Surrey', href: '/locations/fractional-cto/guildford' },
];

export function Footer() {
  return (
    <footer className="bg-[#023047] text-white" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand + Company */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-tight block mb-4" aria-label="Decoded Ops — home">
              Decoded<span className="text-[#FFB703]" aria-hidden="true">Ops</span>
            </Link>
            <p className="text-sm text-[#8ECAE6] leading-relaxed mb-5 max-w-xs">
              Operations and technology consultancy for businesses that print, embroider, decorate and make. Plain English. Real answers. 25 years in the sector.
            </p>
            <div className="flex gap-3 mb-5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Craig Blackman on LinkedIn (opens in new tab)"
                className="w-10 h-10 rounded-lg bg-[#219EBC]/20 hover:bg-[#219EBC] flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
            <div className="text-sm text-[#8ECAE6] mb-5 space-y-1">
              <div><a href="mailto:craig@decodedops.co.uk" className="hover:text-white transition-colors">craig@decodedops.co.uk</a></div>
              <div><a href="tel:+447735620603" className="hover:text-white transition-colors">07735 620 603</a></div>
              <div className="pt-2"><a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-[#8ECAE6] hover:text-white font-medium inline-flex items-center gap-1">Book a call directly <ArrowRight size={14} /></a></div>
            </div>
            <nav aria-label="Company links">
              <ul className="space-y-2">
                <li><Link href="/about" className="text-sm text-[#8ECAE6] hover:text-white transition-colors">About</Link></li>
                <li><Link href="/contact" className="text-sm text-[#8ECAE6] hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/clients/login" className="text-sm text-[#8ECAE6] hover:text-white transition-colors">Client Login</Link></li>
                <li><Link href="/privacy" className="text-sm text-[#8ECAE6] hover:text-white transition-colors">Privacy policy</Link></li>
              </ul>
            </nav>
          </div>

          {/* Services + Resources */}
          <div>
            <nav aria-label="Services and resources links">
              <h2 className="text-xs font-semibold tracking-widest uppercase text-[#F8F9FA] mb-4">Services</h2>
              <ul className="space-y-2.5 mb-8">
                {services.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-[#8ECAE6] hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <h2 className="text-xs font-semibold tracking-widest uppercase text-[#F8F9FA] mb-4">Resources</h2>
              <ul className="space-y-2.5">
                {resources.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-[#8ECAE6] hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Sectors */}
          <div>
            <nav aria-label="Sector links">
              <h2 className="text-xs font-semibold tracking-widest uppercase text-[#F8F9FA] mb-4">Sectors</h2>
              <ul className="space-y-2.5">
                {sectors.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-[#8ECAE6] hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Problems */}
          <div>
            <nav aria-label="Problems we solve links">
              <h2 className="text-xs font-semibold tracking-widest uppercase text-[#F8F9FA] mb-4">Problems we solve</h2>
              <ul className="space-y-2.5">
                {problems.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-[#8ECAE6] hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Locations — inline strip */}
        <div className="border-t border-[#F8F9FA]/10 pt-6 pb-6 mb-6">
          <nav aria-label="Location links" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#8ECAE6]">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#F8F9FA]">Locations</span>
            {locations.map(link => (
              <Link key={link.href} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#8ECAE6]">&copy; {new Date().getFullYear()} Decoded Ops. All rights reserved.</p>
          <p className="text-xs text-[#8ECAE6]">Built with precision and purpose.</p>
        </div>
      </div>
    </footer>
  );
}
