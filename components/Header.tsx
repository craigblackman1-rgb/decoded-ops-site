'use client';
import { useState } from 'react';
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
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="flex items-center gap-1 text-[#C6C5B9] hover:text-[#393D3F] transition-colors text-sm">
        {label} <ChevronDown size={14} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-[#FDFDFF] border border-[#C6C5B9]/30 rounded-2xl shadow-lg py-2 z-50">
          {items.map(item => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-sm text-[#393D3F] hover:bg-[#62929E]/10 hover:text-[#62929E] transition-colors">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FDFDFF]/95 backdrop-blur-sm border-b border-[#C6C5B9]/30">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-semibold text-[#393D3F]">
            Decoded<span className="text-[#62929E]">Ops</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/audit" className="text-[#C6C5B9] hover:text-[#393D3F] transition-colors text-sm">How it works</Link>
            <Link href="/audit" className="text-[#C6C5B9] hover:text-[#393D3F] transition-colors text-sm">The audit</Link>
            <Dropdown label="Sectors" items={sectors} />
            <Dropdown label="Problems" items={problems} />
            <Link href="/fractional" className="text-[#C6C5B9] hover:text-[#393D3F] transition-colors text-sm">Fractional</Link>
            <Link href="/about" className="text-[#C6C5B9] hover:text-[#393D3F] transition-colors text-sm">About</Link>
            <Link href="/case-study" className="text-[#C6C5B9] hover:text-[#393D3F] transition-colors text-sm">Case study</Link>
            <Link href="/contact"
              className="px-6 py-2.5 bg-[#62929E] text-white rounded-lg hover:bg-[#546A7B] transition-colors text-sm font-medium">
              Book a free call
            </Link>
          </div>

          <button className="md:hidden p-2 text-[#C6C5B9] hover:text-[#393D3F]"
            onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-[#C6C5B9]/30">
            {[
              { label: 'How it works', href: '/audit' },
              { label: 'The audit', href: '/audit' },
              { label: 'Fractional', href: '/fractional' },
              { label: 'About', href: '/about' },
              { label: 'Case study', href: '/case-study' },
              ...sectors,
              ...problems,
            ].map(link => (
              <Link key={link.href + link.label} href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm text-[#C6C5B9] hover:text-[#393D3F] transition-colors py-1 border-b border-[#C6C5B9]/20">
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMobileOpen(false)}
              className="inline-block px-6 py-2.5 bg-[#62929E] text-white rounded-lg hover:bg-[#546A7B] transition-colors text-sm font-medium mt-2">
              Book a free call
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
