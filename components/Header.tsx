'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const services = [
  { label: 'Clarity — Operational audit', href: '/clarity' },
  { label: 'Deliver — Project delivery', href: '/deliver' },
  { label: 'Transform — Digital transformation', href: '/transform' },
  { label: 'Retained — Fractional CTO', href: '/retained' },
];

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
  { label: 'eCommerce not connected to production', href: '/problems/ecommerce-not-connected' },
  { label: "Systems don't talk to each other", href: '/problems/systems-dont-talk' },
  { label: 'Wrong ERP software', href: '/problems/wrong-erp-software' },
];

function Dropdown({ label, items }: { label: string; items: { label: string; href: string }[] }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button
        className="flex items-center gap-1 text-[#023047] hover:text-[#219EBC] transition-colors text-sm font-medium"
        aria-haspopup="true"
        aria-expanded={open}
      >
        {label} <ChevronDown size={14} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      {open && (
        <div
          className="absolute top-full left-0 pt-2 z-50"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          role="menu"
        >
          <div className="w-64 bg-[#F8F9FA] border border-[#8ECAE6]/40 rounded-2xl shadow-xl py-2 overflow-hidden">
            {items.map(item => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                role="menuitem"
                className="block px-4 py-2.5 text-sm text-[#023047] hover:bg-[#219EBC]/10 hover:text-[#219EBC] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSectorsOpen, setMobileSectorsOpen] = useState(false);
  const [mobileProblemsOpen, setMobileProblemsOpen] = useState(false);

  return (
    <>
      {/* Skip to main content — hidden until focused */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#FFB703] focus:text-[#023047] focus:font-semibold focus:text-sm focus:outline-none focus:ring-2 focus:ring-[#023047]"
      >
        Skip to main content
      </a>

      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F8F9FA]/95 backdrop-blur-sm border-b border-[#8ECAE6]/30">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8" aria-label="Main navigation">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="text-2xl font-bold tracking-tight text-[#023047]" aria-label="Decoded Ops — home">
              Decoded<span className="text-[#219EBC]" aria-hidden="true">Ops</span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-6">
              <Dropdown label="Services" items={services} />
              <Dropdown label="Sectors" items={sectors} />
              <Dropdown label="Problems" items={problems} />
              <Link href="/pricing" className="text-[#023047] hover:text-[#219EBC] transition-colors text-sm font-medium">Pricing</Link>
              <Link href="/about" className="text-[#023047] hover:text-[#219EBC] transition-colors text-sm font-medium">About</Link>
              <Link href="/case-study" className="text-[#023047] hover:text-[#219EBC] transition-colors text-sm font-medium">Case study</Link>
              <Link
                href="/contact"
                className="px-5 py-2.5 bg-[#FFB703] text-[#023047] rounded-full hover:bg-[#FB8500] transition-colors text-sm font-semibold"
              >
                Book a free call
              </Link>
            </div>

            <button
              className="md:hidden p-2 text-[#023047] hover:text-[#219EBC]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div id="mobile-menu" className="md:hidden py-4 border-t border-[#8ECAE6]/30 space-y-1" role="navigation" aria-label="Mobile navigation">
              {[
                { label: 'Pricing', href: '/pricing' },
                { label: 'About', href: '/about' },
                { label: 'Case study', href: '/case-study' },
              ].map(link => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-medium text-[#023047] hover:text-[#219EBC] transition-colors py-2 border-b border-[#8ECAE6]/20"
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Services accordion */}
              <div className="border-b border-[#8ECAE6]/20">
                <button
                  className="flex items-center justify-between w-full text-sm font-medium text-[#023047] py-2"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  aria-expanded={mobileServicesOpen}
                >
                  Services <ChevronDown size={14} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                {mobileServicesOpen && (
                  <div className="pl-4 pb-2 space-y-1">
                    {services.map(link => (
                      <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                        className="block text-sm text-[#023047] hover:text-[#219EBC] py-1.5 transition-colors">
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Sectors accordion */}
              <div className="border-b border-[#8ECAE6]/20">
                <button
                  className="flex items-center justify-between w-full text-sm font-medium text-[#023047] py-2"
                  onClick={() => setMobileSectorsOpen(!mobileSectorsOpen)}
                  aria-expanded={mobileSectorsOpen}
                  aria-controls="mobile-sectors"
                >
                  Sectors <ChevronDown size={14} className={`transition-transform ${mobileSectorsOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                {mobileSectorsOpen && (
                  <div id="mobile-sectors" className="pl-4 pb-2 space-y-1">
                    {sectors.map(link => (
                      <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                        className="block text-sm text-[#023047] hover:text-[#219EBC] py-1.5 transition-colors">
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Problems accordion */}
              <div className="border-b border-[#8ECAE6]/20">
                <button
                  className="flex items-center justify-between w-full text-sm font-medium text-[#023047] py-2"
                  onClick={() => setMobileProblemsOpen(!mobileProblemsOpen)}
                  aria-expanded={mobileProblemsOpen}
                  aria-controls="mobile-problems"
                >
                  Problems <ChevronDown size={14} className={`transition-transform ${mobileProblemsOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                {mobileProblemsOpen && (
                  <div id="mobile-problems" className="pl-4 pb-2 space-y-1">
                    {problems.map(link => (
                      <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                        className="block text-sm text-[#023047] hover:text-[#219EBC] py-1.5 transition-colors">
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-2">
                <Link href="/contact" onClick={() => setMobileOpen(false)}
                  className="inline-block px-6 py-2.5 bg-[#FFB703] text-[#023047] rounded-full hover:bg-[#FB8500] transition-colors text-sm font-semibold">
                  Book a free call
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
