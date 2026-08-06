import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
import { LogoWordmark } from '@/components/LogoWordmark';

interface FooterLink {
  label: string;
  href: string;
}

const diagnoseLinks: FooterLink[] = [
  { label: 'Clarity Audit', href: '/clarity' },
  { label: 'Technology audit', href: '/locations/tech-audit' },
];

const buyVsBuildLinks: FooterLink[] = [
  { label: 'How I build', href: '/how-i-build' },
  { label: 'Data App', href: '/apps/data-app' },
  { label: 'Artwork Manager', href: '/apps/artwork-manager' },
];

const ongoingLeadershipLinks: FooterLink[] = [
  { label: 'Retained', href: '/retained' },
  { label: 'Fractional CTO', href: '/locations/fractional-cto' },
];

const companyLinks: FooterLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Small business suite', href: '/small-business' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Client Login', href: '/clients/login' },
];

const sectorChips: FooterLink[] = [
  { label: 'Garment decoration', href: '/sectors/garment-decoration' },
  { label: 'Workwear', href: '/sectors/workwear' },
  { label: 'Teamwear', href: '/sectors/teamwear-clubwear' },
  { label: 'Schoolwear', href: '/sectors/schoolwear' },
  { label: 'Promo', href: '/sectors/promotional-merchandise' },
  { label: 'Print', href: '/sectors/print-promotional' },
  { label: 'Signage', href: '/sectors/signs-graphics' },
  { label: 'Awards & engraving', href: '/sectors/awards-engraving' },
  { label: 'Labels & packaging', href: '/sectors/labels-packaging' },
];

const problemChips: FooterLink[] = [
  { label: 'ERP failure', href: '/problems/erp-implementation-failure' },
  { label: 'Data scattered', href: '/problems/data-scattered' },
  { label: 'Buy vs build', href: '/problems/buy-vs-build' },
  { label: 'No ops owner', href: '/problems/no-ops-owner' },
  { label: 'AI paralysis', href: '/problems/ai-paralysis' },
  { label: 'Growth bottleneck', href: '/problems/bottleneck-growth' },
  { label: 'Ops in owner\'s head', href: '/problems/ops-in-owners-head' },
  { label: 'Seasonal peaks', href: '/problems/seasonal-peaks' },
  { label: 'Spreadsheet addiction', href: '/problems/spreadsheet-addiction' },
];

function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <h2 className="text-xs font-semibold tracking-widest uppercase text-[#F8F9FA] mb-4">{title}</h2>
      <ul className="space-y-2.5">
        {links.map(link => (
          <li key={link.href + link.label}>
            <Link href={link.href} className="text-sm text-[#8ECAE6] hover:text-white transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#023047] text-white" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-7 lg:gap-8 mb-0">
          <div>
            <LogoWordmark variant="footer" className="block mb-4" />
            <p className="text-sm text-[#8ECAE6] leading-relaxed mb-5 max-w-xs">
              Independent technology and operations consultancy for the decorated-goods sector. No vendor agenda.
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
              <div className="pt-2">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-[#F8F9FA] border border-[#8ECAE6]/60 rounded-lg hover:bg-[#219EBC]/15 hover:border-[#8ECAE6] transition-colors"
                >
                  Book a free 60-min call <ArrowRight size={14} />
                </a>
              </div>
            </div>
            <p className="text-xs text-[#F8F9FA]/55 max-w-xs">Based in Worthing, West Sussex &middot; working across the UK</p>
          </div>

          <FooterColumn title="Diagnose" links={diagnoseLinks} />
          <FooterColumn title="Buy vs build" links={buyVsBuildLinks} />
          <FooterColumn title="Ongoing leadership" links={ongoingLeadershipLinks} />
          <FooterColumn title="Company" links={companyLinks} />
        </div>

        <div className="border-t border-[#F8F9FA]/12 mt-9 pt-5">
          <div className="flex flex-wrap items-baseline gap-y-2 mb-2.5">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#F8F9FA]/55 min-w-[82px]">Sectors</span>
            <span className="flex flex-wrap gap-x-4 gap-y-2">
              {sectorChips.map(link => (
                <Link key={link.href} href={link.href} className="text-sm text-[#8ECAE6] hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </span>
          </div>
          <div className="flex flex-wrap items-baseline gap-y-2">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#F8F9FA]/55 min-w-[82px]">Problems</span>
            <span className="flex flex-wrap gap-x-4 gap-y-2">
              {problemChips.map(link => (
                <Link key={link.href} href={link.href} className="text-sm text-[#8ECAE6] hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
              <Link href="/problems" className="text-sm font-semibold text-[#FFB703] hover:text-white transition-colors">
                All problems &rarr;
              </Link>
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-7">
          <p className="text-xs text-[#8ECAE6]">&copy; {new Date().getFullYear()} Decoded Ops. All rights reserved.</p>
          <p className="text-xs text-[#8ECAE6]">Plain English. No jargon. No vendor agenda.</p>
        </div>
      </div>
    </footer>
  );
}
