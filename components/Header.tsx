'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { LogoWordmark } from '@/components/LogoWordmark';

interface PathLink {
  label: string;
  href: string;
  desc?: string;
}

interface PathGroupData {
  label: string;
  descriptor: string;
  links: PathLink[];
}

const pathGroups: PathGroupData[] = [
  {
    label: "Something's wrong",
    descriptor: 'Start with a diagnostic',
    links: [
      { label: 'Discovery Day', href: '/clarity', desc: 'A full day on site, a written plan' },
      { label: 'Technology audit', href: '/locations/tech-audit', desc: 'Focused on one part of the business' },
    ],
  },
  {
    label: 'Buy vs build',
    descriptor: 'Systems & apps',
    links: [
      { label: 'How I build', href: '/how-i-build', desc: 'The buy-vs-build question' },
      { label: 'Data App', href: '/apps/data-app', desc: 'Supplier feeds into one catalogue' },
      { label: 'Artwork Manager', href: '/apps/artwork-manager', desc: 'Versions, approvals, delivery' },
    ],
  },
  {
    label: 'Ongoing leadership',
    descriptor: 'A standing CTO',
    links: [
      { label: 'Retained', href: '/retained', desc: 'Advisory, embedded or programme' },
    ],
  },
];

function PathGroup({ group }: { group: PathGroupData }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  const menuId = `path-menu-${group.label.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button
        className={`flex flex-col items-start gap-px py-2 pl-3 pr-8 text-left bg-transparent border border-transparent rounded-lg cursor-pointer transition-colors ${
          open
            ? 'bg-[#219EBC]/10 border-[#219EBC]/40'
            : 'hover:bg-[#219EBC]/8 hover:border-[#219EBC]/30'
        }`}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={menuId}
      >
        <span className="text-sm font-semibold text-[#023047] leading-tight">{group.label}</span>
        <span className="text-[11px] leading-tight text-[#023047]/55">{group.descriptor}</span>
        <ChevronDown
          size={14}
          className={`absolute right-2.5 top-1/2 -translate-y-1/2 text-[#023047]/55 transition-transform duration-150 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div
          id={menuId}
          className="absolute left-0 top-[calc(100%+6px)] z-50 min-w-[230px]"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          role="menu"
        >
          <div className="p-1.5 bg-white border border-[#d4e8f0] rounded-xl shadow-lg">
            {group.links.map(item => (
              <Link
                key={item.href + item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                role="menuitem"
                className="block px-3.5 py-2.5 rounded-md text-sm font-medium text-[#023047] hover:bg-[#219EBC]/8 transition-colors whitespace-nowrap"
              >
                {item.label}
                {item.desc && <span className="block text-[11px] font-normal text-[#023047]/55 mt-px">{item.desc}</span>}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const flatLinks = [
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Pricing', href: '/pricing' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOpenGroups, setMobileOpenGroups] = useState<Record<number, boolean>>({});

  const toggleMobileGroup = (idx: number) => {
    setMobileOpenGroups(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#FFB703] focus:text-[#023047] focus:font-semibold focus:text-sm focus:outline-none focus:ring-2 focus:ring-[#023047]"
      >
        Skip to main content
      </a>

      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F8F9FA]/95 backdrop-blur-sm border-b border-[#8ECAE6]/30">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8" aria-label="Main navigation">
          <div className="flex items-center justify-between h-20">
            <LogoWordmark />

            <div className="hidden md:flex items-center gap-2.5">
              {pathGroups.map(group => (
                <PathGroup key={group.label} group={group} />
              ))}
              {flatLinks.map(link => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  className="text-sm font-medium text-[#023047]/78 hover:text-[#023047] transition-colors py-2 px-1"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="ml-1 px-5 py-2.5 bg-[#FFB703] text-[#023047] rounded-full hover:bg-[#FB8500] transition-colors text-sm font-semibold"
              >
                Book a free 60-min call
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

          {mobileOpen && (
            <div id="mobile-menu" className="md:hidden py-4 border-t border-[#8ECAE6]/30 space-y-1" role="navigation" aria-label="Mobile navigation">
              {pathGroups.map((group, idx) => (
                <div key={group.label} className="border-b border-[#8ECAE6]/20">
                  <button
                    className="flex items-center justify-between w-full text-sm font-medium text-[#023047] py-2"
                    onClick={() => toggleMobileGroup(idx)}
                    aria-expanded={mobileOpenGroups[idx] || false}
                    aria-controls={`mobile-path-${idx}`}
                  >
                    <div className="flex flex-col items-start">
                      <span>{group.label}</span>
                      <span className="text-[11px] font-normal text-[#023047]/55">{group.descriptor}</span>
                    </div>
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${mobileOpenGroups[idx] ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                  {mobileOpenGroups[idx] && (
                    <div id={`mobile-path-${idx}`} className="pl-4 pb-2 space-y-1">
                      {group.links.map(link => (
                        <Link
                          key={link.href + link.label}
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="block text-sm text-[#023047] hover:text-[#219EBC] py-1.5 transition-colors"
                        >
                          {link.label}
                          {link.desc && <span className="block text-[11px] text-[#023047]/55">{link.desc}</span>}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {flatLinks.map(link => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-medium text-[#023047] hover:text-[#219EBC] transition-colors py-2 border-b border-[#8ECAE6]/20"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium text-[#023047]/70 hover:text-[#219EBC] transition-colors py-2 border-b border-[#8ECAE6]/20"
              >
                About
              </Link>

              <div className="pt-2">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-block px-6 py-2.5 bg-[#FFB703] text-[#023047] rounded-full hover:bg-[#FB8500] transition-colors text-sm font-semibold"
                >
                  Book a free 60-min call
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
