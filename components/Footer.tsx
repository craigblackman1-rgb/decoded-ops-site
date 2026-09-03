import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

// ── Direction A, "Three columns and a drawer" ───────────────────────────
// design-systems/decoded-marketing/footer-optimised.html, Direction A,
// rendered with the real ds-footer.css classes (f-tight/f-top/f-col/f-more)
// rather than a Tailwind re-implementation, so it visually matches the
// mockup and not just its content. Structure ported faithfully; every href
// reconciled against the actual routes on this branch (the mockup's
// /systems, /fractional-cto, /work, /pages, /clients don't exist here).

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

// A curated 7 of 18 (the mockup's own set, all verified real routes) plus
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
  { label: 'The Decoded Method', href: '/resources/decoded-method' },
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
    <div className="f-col">
      <h4>{title}</h4>
      {links.map(link => (
        <Link key={link.href + link.label} href={link.href}>{link.label}</Link>
      ))}
    </div>
  );
}

function ChipRow({ label, chips, allLink }: { label: string; chips: FooterLink[]; allLink?: FooterLink }) {
  return (
    <div className="f-row">
      <span className="f-row-lbl">{label}</span>
      <span className="f-chips">
        {chips.map(link => (
          <Link key={link.href + link.label} href={link.href}>{link.label}</Link>
        ))}
        {allLink && <Link className="f-all" href={allLink.href}>{allLink.label} &rarr;</Link>}
      </span>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="f-tight g-navy" aria-label="Site footer">
      <div className="wrap">

        <div className="f-top">
          <div className="f-brand">
            <Link className="logo" href="/">Decoded<span>Ops</span></Link>
            <p className="f-blurb">Independent technology and operations consultancy for the
              decorated-goods sector. No vendor agenda.</p>
            <div className="f-reach">
              <Link className="f-cta" href="/contact">Book a free 60-min call</Link>
            </div>
            <div className="f-contact">
              <a href="mailto:craig@decodedops.co.uk">craig@decodedops.co.uk</a>
              <span className="sep" aria-hidden="true">&middot;</span>
              <a href="tel:+447735620603">07735 620603</a>
            </div>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Craig Blackman on LinkedIn (opens in new tab)"
              style={{ marginTop: 14 }}
              className="inline-flex w-9 h-9 rounded-lg bg-cerulean/20 hover:bg-cerulean items-center justify-center transition-colors"
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

        <details className="f-more" data-od-id="footer-drawer">
          <summary>
            <ChevronDown className="chev" size={16} aria-hidden="true" />
            Browse by sector, problem, guide or location
          </summary>
          <div className="f-more-body">
            <ChipRow label="Sectors" chips={sectorChips} />
            <ChipRow label="Problems" chips={problemChips} allLink={{ label: 'All 18 problems', href: '/problems' }} />
            <ChipRow label="Guides" chips={guideChips} allLink={{ label: 'All resources', href: '/resources' }} />
            <ChipRow label="Locations" chips={locationChips} />
          </div>
        </details>

        <div className="f-base">
          <span>&copy; {new Date().getFullYear()} Decoded Ops &middot; Worthing, West Sussex &middot; working across the UK</span>
          <nav aria-label="Legal and account">
            <Link href="/clients/login">Client login</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/cookies">Cookies</Link>
          </nav>
        </div>

      </div>
    </footer>
  );
}
