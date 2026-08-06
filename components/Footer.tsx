import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { LogoWordmark } from '@/components/LogoWordmark';

// ── Direction A, "Three columns and a drawer" ───────────────────────────
// design-systems/decoded-marketing/footer-optimised.html, Direction A.
// Structure ported faithfully; every href reconciled against the actual
// routes on this branch (the mockup's /systems, /fractional-cto, /work,
// /pages, /clients don't exist here — see commit message for the list).

interface FooterLink {
  label: string;
  href: string;
}

const workWithMeLinks: FooterLink[] = [
  { label: 'Clarity Audit', href: '/clarity' },
  { label: 'Deliver', href: '/deliver' },
  { label: 'Transform', href: '/transform' },
  { label: 'Retained', href: '/retained' },
  { label: 'Small business suite', href: '/small-business' },
  { label: 'How I build software', href: '/how-i-build' },
];

const appsLinks: FooterLink[] = [
  { label: 'Data App', href: '/apps/data-app' },
  { label: 'Artwork Manager', href: '/apps/artwork-manager' },
  { label: 'Trade store', href: '/apps/commerce' },
  { label: 'Decoded CRM', href: '/apps/crm' },
  { label: 'All apps', href: '/apps' },
];

const companyLinks: FooterLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Case studies', href: '/case-studies' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];

const sectorChips: FooterLink[] = [
  { label: 'Garment decoration', href: '/sectors/garment-decoration' },
  { label: 'Workwear', href: '/sectors/workwear' },
  { label: 'Teamwear', href: '/sectors/teamwear-clubwear' },
  { label: 'Schoolwear', href: '/sectors/schoolwear' },
  { label: 'Promo', href: '/sectors/promotional-merchandise' },
  { label: 'Print', href: '/sectors/print-promotional' },
  { label: 'Signage', href: '/sectors/signs-graphics' },
  { label: 'Awards', href: '/sectors/awards-engraving' },
  { label: 'Labels & packaging', href: '/sectors/labels-packaging' },
];

// A curated 7 of 18 (the mockup's own set — all verified real routes) plus
// the index. Deliberately not exhaustive; that's the whole point of the
// drawer over the old flat 18-chip row.
const problemChips: FooterLink[] = [
  { label: 'ERP failure', href: '/problems/erp-implementation-failure' },
  { label: "Systems don't talk", href: '/problems/systems-dont-talk' },
  { label: 'Data scattered', href: '/problems/data-scattered' },
  { label: 'Spreadsheet addiction', href: '/problems/spreadsheet-addiction' },
  { label: 'Buy vs build', href: '/problems/buy-vs-build' },
  { label: 'No ops owner', href: '/problems/no-ops-owner' },
  { label: 'AI paralysis', href: '/problems/ai-paralysis' },
];

const guideChips: FooterLink[] = [
  { label: 'The Decoded Method', href: '/decoded-method' },
  { label: 'Audit checklist', href: '/resources/audit-checklist' },
  { label: '5 warning signs', href: '/resources/5-warning-signs' },
  { label: 'Six Sigma explained', href: '/resources/six-sigma' },
  { label: 'Free calculators', href: '/tools' },
];

const locationChips: FooterLink[] = [
  { label: 'Fractional CTO near you', href: '/locations/fractional-cto' },
  { label: 'Technology audit near you', href: '/locations/tech-audit' },
];

function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <h2 className="text-xs font-semibold tracking-widest uppercase text-off-white/60 mb-3">{title}</h2>
      <ul className="space-y-2">
        {links.map(link => (
          <li key={link.href + link.label}>
            <Link href={link.href} className="text-sm text-sky-blue hover:text-white transition-colors">
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
    <div className="flex flex-wrap items-baseline gap-x-3.5 gap-y-1.5 mb-3 last:mb-0">
      <span className="text-xs font-semibold tracking-widest uppercase text-off-white/45 min-w-[76px]">{label}</span>
      {chips.map(link => (
        <Link key={link.href + link.label} href={link.href} className="text-sm text-sky-blue hover:text-white transition-colors">
          {link.label}
        </Link>
      ))}
      {allLink && (
        <Link href={allLink.href} className="text-sm font-semibold text-off-white hover:text-white transition-colors">
          {allLink.label} &rarr;
        </Link>
      )}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-prussian-blue text-white" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">

        {/* ── top: brand + three columns ─────────────────────────────── */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr_1fr] lg:items-start">
          <div className="sm:col-span-2 lg:col-span-1">
            <LogoWordmark variant="footer" className="block mb-3" />
            <p className="text-sm text-off-white/70 leading-snug max-w-[38ch] mb-4">
              Independent technology and operations consultancy for the decorated-goods sector. No vendor agenda.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-white border border-sky-blue/55 rounded-lg hover:bg-cerulean/15 hover:border-sky-blue transition-colors"
            >
              Book a free 60-min call <ArrowRight size={14} />
            </Link>
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 mt-3.5 text-sm text-sky-blue">
              <a href="mailto:craig@decodedops.co.uk" className="hover:text-white transition-colors">craig@decodedops.co.uk</a>
              <span className="text-off-white/35" aria-hidden="true">&middot;</span>
              <a href="tel:+447735620603" className="hover:text-white transition-colors">07735 620 603</a>
            </div>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Craig Blackman on LinkedIn (opens in new tab)"
              className="mt-3.5 inline-flex w-9 h-9 rounded-lg bg-cerulean/20 hover:bg-cerulean items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>

          <FooterColumn title="Work with me" links={workWithMeLinks} />
          <FooterColumn title="Apps" links={appsLinks} />
          <FooterColumn title="Company" links={companyLinks} />
        </div>

        {/* ── drawer: sectors / problems / guides / locations ────────── */}
        <details className="footer-drawer group border-t border-off-white/12 mt-8 pt-1">
          <summary className="list-none cursor-pointer flex items-center gap-2.5 py-3 text-sm font-medium text-sky-blue hover:text-white transition-colors [&::-webkit-details-marker]:hidden">
            <ChevronDown size={16} className="footer-drawer-chevron shrink-0" aria-hidden="true" />
            Browse by sector, problem, guide or location
          </summary>
          {/* explicit hidden/group-open:block rather than relying only on
              native <details> UA behaviour — belt and braces */}
          <div className="hidden group-open:block pb-4 pt-1.5">
            <ChipRow label="Sectors" chips={sectorChips} />
            <ChipRow label="Problems" chips={problemChips} allLink={{ label: 'All 18 problems', href: '/problems' }} />
            <ChipRow label="Guides" chips={guideChips} allLink={{ label: 'All resources', href: '/resources' }} />
            <ChipRow label="Locations" chips={locationChips} />
          </div>
        </details>

        {/* ── base bar: legal + account ───────────────────────────────── */}
        <div className="border-t border-off-white/12 pt-4 flex flex-wrap items-center justify-between gap-x-5 gap-y-2 text-xs text-off-white/55">
          <span>&copy; {new Date().getFullYear()} Decoded Ops &middot; Worthing, West Sussex &middot; working across the UK</span>
          <nav aria-label="Legal and account" className="flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/clients/login" className="hover:text-white transition-colors">Client login</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </nav>
        </div>

      </div>
    </footer>
  );
}
