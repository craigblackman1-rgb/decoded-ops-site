'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

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
      <button className="flex items-center gap-1 text-[#393D3F] hover:text-[#62929E] transition-colors text-sm font-medium">
        {label} <ChevronDown size={14} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div
          className="absolute top-full left-0 pt-2 z-50"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <div className="w-64 bg-[#FDFDFF] border border-[#C6C5B9]/40 rounded-2xl shadow-xl py-2 overflow-hidden">
            {items.map(item => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 text-sm text-[#393D3F] hover:bg-[#62929E]/10 hover:text-[#62929E] transition-colors"
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
  const [mobileSectorsOpen, setMobileSectorsOpen] = useState(false);
  const [mobileProblemsOpen, setMobileProblemsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FDFDFF]/95 backdrop-blur-sm border-b border-[#C6C5B9]/30">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-semibold text-[#393D3F]">
            Decoded<span className="text-[#62929E]">Ops</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/audit" className="text-[#393D3F] hover:text-[#62929E] transition-colors text-sm font-medium">How it works</Link>
            <Link href="/audit" className="text-[#393D3F] hover:text-[#62929E] transition-colors text-sm font-medium">The audit</Link>
            <Dropdown label="Sectors" items={sectors} />
            <Dropdown label="Problems" items={problems} />
            <Link href="/fractional" className="text-[#393D3F] hover:text-[#62929E] transition-colors text-sm font-medium">Fractional</Link>
            <Link href="/pricing" className="text-[#393D3F] hover:text-[#62929E] transition-colors text-sm font-medium">Pricing</Link>
            <Link href="/about" className="text-[#393D3F] hover:text-[#62929E] transition-colors text-sm font-medium">About</Link>
            <Link href="/case-study" className="text-[#393D3F] hover:text-[#62929E] transition-colors text-sm font-medium">Case study</Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-[#62929E] text-white rounded-full hover:bg-[#546A7B] transition-colors text-sm font-semibold"
            >
              Book a free call
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-[#393D3F] hover:text-[#62929E]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-[#C6C5B9]/30 space-y-1">
            {[
              { label: 'How it works', href: '/audit' },
              { label: 'The audit', href: '/audit' },
              { label: 'Fractional', href: '/fractional' },
              { label: 'Pricing', href: '/pricing' },
              { label: 'About', href: '/about' },
              { label: 'Case study', href: '/case-study' },
            ].map(link => (
              <Link
                key={link.href + link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium text-[#393D3F] hover:text-[#62929E] transition-colors py-2 border-b border-[#C6C5B9]/20"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Sectors accordion */}
            <div className="border-b border-[#C6C5B9]/20">
              <button
                className="flex items-center justify-between w-full text-sm font-medium text-[#393D3F] py-2"
                onClick={() => setMobileSectorsOpen(!mobileSectorsOpen)}
              >
                Sectors <ChevronDown size={14} className={`transition-transform ${mobileSectorsOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileSectorsOpen && (
                <div className="pl-4 pb-2 space-y-1">
                  {sectors.map(link => (
                    <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                      className="block text-sm text-[#546A7B] hover:text-[#62929E] py-1.5 transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Problems accordion */}
            <div className="border-b border-[#C6C5B9]/20">
              <button
                className="flex items-center justify-between w-full text-sm font-medium text-[#393D3F] py-2"
                onClick={() => setMobileProblemsOpen(!mobileProblemsOpen)}
              >
                Problems <ChevronDown size={14} className={`transition-transform ${mobileProblemsOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileProblemsOpen && (
                <div className="pl-4 pb-2 space-y-1">
                  {problems.map(link => (
                    <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                      className="block text-sm text-[#546A7B] hover:text-[#62929E] py-1.5 transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-2">
              <Link href="/contact" onClick={() => setMobileOpen(false)}
                className="inline-block px-6 py-2.5 bg-[#62929E] text-white rounded-full hover:bg-[#546A7B] transition-colors text-sm font-semibold">
                Book a free call
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
