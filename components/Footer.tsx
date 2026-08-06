import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BOOKING_URL } from '@/lib/constants';
import { LogoWordmark } from '@/components/LogoWordmark';

interface FooterLink {
  label: string;
  href: string;
}

// Column headings mirror the header's five groups so the two agree.
const helpLinks: FooterLink[] = [
  { label: 'Clarity Audit', href: '/clarity' },
  { label: 'Deliver', href: '/deliver' },
  { label: 'Transform', href: '/transform' },
  { label: 'Retained', href: '/retained' },
  { label: 'Small business suite', href: '/small-business' },
  { label: 'The Decoded Method', href: '/decoded-method' },
];

const appsLinks: FooterLink[] = [
  { label: 'Data App', href: '/apps/data-app' },
  { label: 'Artwork Manager', href: '/apps/artwork-manager' },
  { label: 'Trade store', href: '/apps/commerce' },
  { label: 'Decoded CRM', href: '/apps/crm' },
  { label: 'All apps', href: '/apps' },
  { label: 'How I build', href: '/how-i-build' },
];

const toolLinks: FooterLink[] = [
  { label: 'Ops health score', href: '/tools/ops-health-score' },
  { label: 'Cost of downtime', href: '/tools/downtime-cost-calculator' },
  { label: 'Automation ROI', href: '/tools/automation-roi-calculator' },
  { label: 'Recovery time', href: '/tools/rto-calculator' },
  { label: 'AI readiness', href: '/tools/ai-readiness-check' },
  { label: 'Replace my ERP?', href: '/tools/should-i-replace-erp' },
  { label: 'All calculators', href: '/tools' },
];

const companyLinks: FooterLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Case studies', href: '/case-studies' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
  { label: 'Client Login', href: '/clients/login' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Cookies', href: '/cookies' },
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
  { label: "Systems don't talk", href: '/problems/systems-dont-talk' },
  { label: 'Wrong ERP software', href: '/problems/wrong-erp-software' },
  { label: 'ERP failure', href: '/problems/erp-implementation-failure' },
  { label: 'Legacy system', href: '/problems/legacy-system' },
  { label: 'eCommerce disconnected', href: '/problems/ecommerce-not-connected' },
  { label: 'Slow processes', href: '/problems/slow-processes' },
  { label: "Can't scale", href: '/problems/cant-scale-operations' },
  { label: 'Growth bottleneck', href: '/problems/bottleneck-growth' },
  { label: 'Seasonal peaks', href: '/problems/seasonal-peaks' },
  { label: 'Spreadsheet addiction', href: '/problems/spreadsheet-addiction' },
  { label: 'Manual workarounds', href: '/problems/manual-workarounds' },
  { label: 'Data scattered', href: '/problems/data-scattered' },
  { label: 'Inventory blind', href: '/problems/inventory-blind' },
  { label: "Ops in owner's head", href: '/problems/ops-in-owners-head' },
  { label: 'No ops owner', href: '/problems/no-ops-owner' },
  { label: 'Disaster recovery', href: '/problems/disaster-recovery' },
  { label: 'AI paralysis', href: '/problems/ai-paralysis' },
  { label: 'Buy vs build', href: '/problems/buy-vs-build' },
];

const guideChips: FooterLink[] = [
  { label: 'Quality system', href: '/process-quality-system' },
  { label: 'Audit checklist', href: '/resources/audit-checklist' },
  { label: '5 warning signs', href: '/resources/5-warning-signs' },
  { label: 'Six Sigma explained', href: '/resources/six-sigma' },
  { label: 'Software reviews', href: '/resources/software-reviews' },
  { label: 'Blog', href: '/blog' },
];

const locationChips: FooterLink[] = [
  { label: 'Fractional CTO near you', href: '/locations/fractional-cto' },
  { label: 'Technology audit near you', href: '/locations/tech-audit' },
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

function ChipRow({ label, chips, allLink }: { label: string; chips: FooterLink[]; allLink?: FooterLink }) {
  return (
    <div className="flex flex-wrap items-baseline gap-y-2 mb-2.5 last:mb-0">
      <span className="text-xs font-semibold tracking-widest uppercase text-[#F8F9FA]/55 min-w-[82px]">{label}</span>
      <span className="flex flex-wrap gap-x-4 gap-y-2">
        {chips.map(link => (
          <Link key={link.href + link.label} href={link.href} className="text-sm text-[#8ECAE6] hover:text-white transition-colors">
            {link.label}
          </Link>
        ))}
        {allLink && (
          <Link href={allLink.href} className="text-sm font-semibold text-[#FFB703] hover:text-white transition-colors">
            {allLink.label} &rarr;
          </Link>
        )}
      </span>
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

          <FooterColumn title="How I help" links={helpLinks} />
          <FooterColumn title="Apps &amp; software" links={appsLinks} />
          <FooterColumn title="Free tools" links={toolLinks} />
          <FooterColumn title="Company" links={companyLinks} />
        </div>

        <div className="border-t border-[#F8F9FA]/12 mt-9 pt-5">
          <ChipRow label="Sectors" chips={sectorChips} />
          <ChipRow label="Problems" chips={problemChips} allLink={{ label: 'All problems', href: '/problems' }} />
          <ChipRow label="Guides" chips={guideChips} allLink={{ label: 'All resources', href: '/resources' }} />
          <ChipRow label="Locations" chips={locationChips} />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-7">
          <p className="text-xs text-[#8ECAE6]">&copy; {new Date().getFullYear()} Decoded Ops. All rights reserved.</p>
          <p className="text-xs text-[#8ECAE6]">Plain English. No jargon. No vendor agenda.</p>
        </div>
      </div>
    </footer>
  );
}
