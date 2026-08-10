'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { LogoWordmark } from '@/components/LogoWordmark';

type NavLink = { label: string; sub?: string; href: string };
type NavGroup = { title: string; items: NavLink[] };

// ── "What's going wrong", all 18 problem pages, grouped and in plain English ──
const wrongGroups: NavGroup[] = [
  {
    title: 'Systems & software',
    items: [
      { label: 'Nothing talks to anything else', href: '/problems/systems-dont-talk' },
      { label: "We're on the wrong software", href: '/problems/wrong-erp-software' },
      { label: 'The new system rollout went wrong', href: '/problems/erp-implementation-failure' },
      { label: 'Our system is ancient', href: '/problems/legacy-system' },
      { label: "The website isn't connected to the office", href: '/problems/ecommerce-not-connected' },
    ],
  },
  {
    title: 'Growth & capacity',
    items: [
      { label: 'Everything takes too long', href: '/problems/slow-processes' },
      { label: "We can't take on more work", href: '/problems/cant-scale-operations' },
      { label: 'One person is the bottleneck', href: '/problems/bottleneck-growth' },
      { label: 'Busy season breaks us', href: '/problems/seasonal-peaks' },
    ],
  },
  {
    title: 'Data & day to day',
    items: [
      { label: 'We run the place on spreadsheets', href: '/problems/spreadsheet-addiction' },
      { label: 'Everyone has their own workaround', href: '/problems/manual-workarounds' },
      { label: 'The numbers never agree', href: '/problems/data-scattered' },
      { label: "We don't know what stock we have", href: '/problems/inventory-blind' },
      { label: "It's all in the owner's head", href: '/problems/ops-in-owners-head' },
    ],
  },
  {
    title: 'Risk & what’s next',
    items: [
      { label: 'Nobody owns operations', href: '/problems/no-ops-owner' },
      { label: 'If the server died tomorrow…', href: '/problems/disaster-recovery' },
      { label: 'Everyone says use AI, where do I start?', href: '/problems/ai-paralysis' },
      { label: 'Buy it or build it?', href: '/problems/buy-vs-build' },
    ],
  },
];

// ── "How I help", the four-step ladder plus how Craig works ──
const helpLadder: (NavLink & { sub: string; startHere?: boolean })[] = [
  { label: 'Clarity', sub: 'A day on site, then a written plan', href: '/clarity', startHere: true },
  { label: 'Deliver', sub: 'I fix the two or three worst things', href: '/deliver' },
  { label: 'Transform', sub: 'Rebuild how the business runs', href: '/transform' },
  { label: 'Retained', sub: 'A technology director, part time', href: '/retained' },
];
const helpBuilt: NavGroup = {
  title: 'Software already built',
  items: [
    { label: 'Data App', sub: 'Supplier feeds into one clean catalogue', href: '/apps/data-app' },
    { label: 'Artwork Manager', sub: 'Versions, approvals and delivery', href: '/apps/artwork-manager' },
    { label: 'Trade store', sub: 'B2B ordering for your customers', href: '/apps/commerce' },
    { label: 'Decoded CRM', sub: 'Pipeline and client records', href: '/apps/crm' },
    { label: 'All apps', sub: "What's ready to buy today", href: '/apps' },
  ],
};
const helpHow: NavGroup = {
  title: 'How I work',
  items: [
    { label: 'The Decoded Method', href: '/decoded-method' },
    { label: 'How I build software', href: '/how-i-build' },
    { label: 'Prices, in plain numbers', href: '/pricing' },
    { label: 'About Craig', href: '/about' },
  ],
};

// ── "Your industry", all 9 sector pages ──
const sectors: NavLink[] = [
  { label: 'Garment decoration', href: '/sectors/garment-decoration' },
  { label: 'Print & promotional', href: '/sectors/print-promotional' },
  { label: 'Workwear', href: '/sectors/workwear' },
  { label: 'Teamwear & clubwear', href: '/sectors/teamwear-clubwear' },
  { label: 'Schoolwear', href: '/sectors/schoolwear' },
  { label: 'Signs & graphics', href: '/sectors/signs-graphics' },
  { label: 'Awards & engraving', href: '/sectors/awards-engraving' },
  { label: 'Labels & packaging', href: '/sectors/labels-packaging' },
  { label: 'Promotional merchandise', href: '/sectors/promotional-merchandise' },
];

// ── "Small business", new top-level slot, Craig's decision (2026-08-06) ──
// Order mirrors the six products on /small-business, which lists them as peers.
const smallBusinessProducts: (NavLink & { sub: string })[] = [
  { label: 'Clarity Check', sub: 'A written plan, no visit needed', href: '/small-business' },
  { label: 'Deliver', sub: 'I fix things, month by month', href: '/small-business' },
  { label: 'Transform', sub: 'Rebuild how you work', href: '/small-business' },
  { label: 'Retained', sub: 'Someone to ask, every month', href: '/small-business' },
  // Named to stay distinct from the free /tools/ai-readiness-check in the
  // adjacent column, same words, different thing: this one is done for you.
  { label: 'AI Readiness Check', sub: 'Assessed for you, not a self-test', href: '/small-business' },
  { label: 'Quarterly Sprint', sub: 'One intensive look, no monthly tie-in', href: '/small-business' },
];
const smallBusinessStart: NavGroup = {
  title: 'Start free',
  items: [
    { label: 'Ops health score', sub: 'Two minutes, twelve questions', href: '/tools/ops-health-score' },
    { label: 'AI readiness check', sub: 'Free two-minute self-test', href: '/tools/ai-readiness-check' },
    { label: 'The audit checklist', sub: 'Run it on yourself', href: '/resources/audit-checklist' },
    { label: 'Read the whole thing', sub: "What's included, what isn't", href: '/small-business' },
  ],
};

// ── "Proof & free tools", case studies, calculators, guides ──
const proofWork: NavGroup = {
  title: "Work I've done",
  items: [
    { label: 'Cobra Workwear', href: '/case-studies/cobra-workwear' },
    { label: 'Hanicks', href: '/case-studies/hanicks' },
    { label: 'TackleBag', href: '/case-studies/tacklebag' },
    { label: 'Eternal Fitness', href: '/case-studies/eternal-fitness' },
    { label: 'All case studies', href: '/case-studies' },
  ],
};
const proofTools: NavGroup = {
  title: 'Free calculators',
  items: [
    { label: 'Ops health score', href: '/tools/ops-health-score' },
    { label: 'What downtime costs you', href: '/tools/downtime-cost-calculator' },
    { label: 'Is automation worth it?', href: '/tools/automation-roi-calculator' },
    { label: 'How fast could you recover?', href: '/tools/rto-calculator' },
    { label: 'Are you ready for AI?', href: '/tools/ai-readiness-check' },
    { label: 'Should I replace my ERP?', href: '/tools/should-i-replace-erp' },
  ],
};
const proofGuides: NavGroup = {
  title: 'Guides & writing',
  items: [
    { label: 'The ops audit checklist', href: '/resources/audit-checklist' },
    { label: '5 signs your systems are failing', href: '/resources/5-warning-signs' },
    { label: 'Six Sigma, explained simply', href: '/resources/six-sigma' },
    { label: 'Building a quality system', href: '/process-quality-system' },
    { label: 'Software reviews', href: '/resources/software-reviews' },
    { label: 'The blog', href: '/blog' },
  ],
};

type PanelKey = 'wrong' | 'help' | 'industry' | 'small' | 'proof';

const PANEL_LABEL: Record<PanelKey, string> = {
  wrong: "What's going wrong",
  help: 'How I help',
  industry: 'Your industry',
  small: 'Small business',
  proof: 'Proof & free tools',
};

function Rail({ note, ctaHref = '/contact', ctaLabel = 'Book a free 60-min call', extra }: { note: string; ctaHref?: string; ctaLabel?: string; extra?: { label: string; href: string } }) {
  return (
    <div className="w-64 shrink-0 bg-off-white border border-sky-blue/40 rounded-2xl p-5">
      <p className="text-sm text-prussian-blue/70 mb-3">{note}</p>
      <Link href={ctaHref} className="block text-center px-4 py-2.5 bg-amber text-prussian-blue rounded-full hover:bg-orange-brand transition-colors text-sm font-semibold mb-2">
        {ctaLabel}
      </Link>
      {extra && (
        <Link href={extra.href} className="block text-center text-xs text-prussian-blue/60 hover:text-cerulean transition-colors">
          {extra.label}
        </Link>
      )}
    </div>
  );
}

function GroupList({ group, onNavigate }: { group: NavGroup; onNavigate: () => void }) {
  return (
    <div>
      <h3 className="text-xs font-semibold tracking-widest uppercase text-prussian-blue/50 mb-2.5 pb-2 border-b border-sky-blue/30">
        {group.title}
      </h3>
      <ul className="space-y-0.5">
        {group.items.map(item => (
          <li key={item.href + item.label}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className="block -mx-2 px-2 py-2 rounded-lg text-sm text-prussian-blue hover:bg-cerulean/10 hover:text-cerulean transition-colors"
            >
              {item.label}
              {item.sub && <span className="block text-xs text-prussian-blue/50">{item.sub}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MegaTrigger({ panelKey, active, onToggle }: { panelKey: PanelKey; active: boolean; onToggle: (k: PanelKey) => void }) {
  return (
    <button
      type="button"
      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${active ? 'bg-cerulean/10 text-cerulean' : 'text-prussian-blue hover:text-cerulean'}`}
      aria-haspopup="true"
      aria-expanded={active}
      aria-controls={`panel-${panelKey}`}
      onClick={() => onToggle(panelKey)}
    >
      {PANEL_LABEL[panelKey]}
      <ChevronDown size={14} className={`transition-transform duration-200 ${active ? 'rotate-180' : ''}`} aria-hidden="true" />
    </button>
  );
}

export function Header() {
  const [openPanel, setOpenPanel] = useState<PanelKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<PanelKey | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setOpenPanel(null);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpenPanel(null);
    }
    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const togglePanel = (key: PanelKey) => setOpenPanel(p => (p === key ? null : key));
  const closePanel = () => setOpenPanel(null);

  return (
    <>
      {/* Skip to main content, hidden until focused */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-amber focus:text-prussian-blue focus:font-semibold focus:text-sm focus:outline-none focus:ring-2 focus:ring-prussian-blue"
      >
        Skip to main content
      </a>

      <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 bg-off-white/95 backdrop-blur-sm border-b border-sky-blue/30">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8" aria-label="Main navigation">
          <div className="flex items-center justify-between h-20">
            <LogoWordmark />

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              <MegaTrigger panelKey="wrong" active={openPanel === 'wrong'} onToggle={togglePanel} />
              <MegaTrigger panelKey="help" active={openPanel === 'help'} onToggle={togglePanel} />
              <MegaTrigger panelKey="industry" active={openPanel === 'industry'} onToggle={togglePanel} />
              <MegaTrigger panelKey="small" active={openPanel === 'small'} onToggle={togglePanel} />
              <MegaTrigger panelKey="proof" active={openPanel === 'proof'} onToggle={togglePanel} />
              <Link href="/pricing" className="px-3 py-2 text-prussian-blue hover:text-cerulean transition-colors text-sm font-medium">Pricing</Link>
              <Link href="/clients/login" className="px-3 py-2 text-prussian-blue/60 hover:text-cerulean transition-colors text-xs font-medium">Client Login</Link>
              <Link
                href="/contact"
                className="ml-2 px-5 py-2.5 bg-amber text-prussian-blue rounded-full hover:bg-orange-brand transition-colors text-sm font-semibold whitespace-nowrap"
              >
                Book a free call
              </Link>
            </div>

            <button
              className="lg:hidden p-2 text-prussian-blue hover:text-cerulean"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>

          {/* ═══ Desktop mega panels ═══ */}
          {openPanel === 'wrong' && (
            <div id="panel-wrong" role="menu" className="hidden lg:block absolute left-0 right-0 top-full bg-off-white border-t border-b border-sky-blue/40 shadow-xl">
              <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 grid grid-cols-5 gap-8">
                {wrongGroups.map(g => <GroupList key={g.title} group={g} onNavigate={closePanel} />)}
                <Rail note="None of these quite fit? Tell me what's going on and I'll point you at the right page." />
              </div>
            </div>
          )}

          {openPanel === 'help' && (
            <div id="panel-help" role="menu" className="hidden lg:block absolute left-0 right-0 top-full bg-off-white border-t border-b border-sky-blue/40 shadow-xl">
              <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 grid grid-cols-4 gap-8">
                <div>
                  <h3 className="text-xs font-semibold tracking-widest uppercase text-prussian-blue/50 mb-2.5 pb-2 border-b border-sky-blue/30">The four steps</h3>
                  <ul className="space-y-1">
                    {helpLadder.map((step, i) => (
                      <li key={step.href}>
                        <Link href={step.href} onClick={closePanel} className="flex gap-2.5 -mx-2 px-2 py-2 rounded-lg hover:bg-cerulean/10 transition-colors">
                          <span className="w-6 h-6 shrink-0 rounded-full border border-sky-blue/40 bg-off-white text-xs font-bold text-prussian-blue/60 flex items-center justify-center">{i + 1}</span>
                          <span>
                            <strong className="block text-sm font-semibold text-prussian-blue">{step.label}</strong>
                            <span className="block text-xs text-prussian-blue/50">{step.sub}</span>
                            {step.startHere && (
                              <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-amber/30 text-[10px] font-bold uppercase tracking-wide text-prussian-blue">Most people start here</span>
                            )}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <GroupList group={helpBuilt} onNavigate={closePanel} />
                <GroupList group={helpHow} onNavigate={closePanel} />
                <Rail note="Almost everyone starts with Clarity, a day on site and a plan you own, whether you hire me after or not." ctaLabel="Book a free 60-min call" extra={{ label: 'See what each step costs', href: '/pricing' }} />
              </div>
            </div>
          )}

          {openPanel === 'industry' && (
            <div id="panel-industry" role="menu" className="hidden lg:block absolute left-0 right-0 top-full bg-off-white border-t border-b border-sky-blue/40 shadow-xl">
              <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex gap-8">
                <div className="flex-1">
                  <p className="text-sm text-prussian-blue/70 mb-3 px-3 py-2.5 rounded-lg bg-cerulean/10">Pick what you make. Every page below is written for that trade.</p>
                  <div className="grid grid-cols-3 gap-2.5">
                    {sectors.map(s => (
                      <Link key={s.href} href={s.href} onClick={closePanel} className="flex items-center px-3.5 py-3 min-h-14 border border-sky-blue/40 rounded-lg text-sm font-medium text-prussian-blue hover:border-cerulean hover:bg-cerulean/5 hover:text-cerulean transition-colors">
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <Rail note="Don't see your trade? The problems are the same across decorated goods." ctaLabel="Book a free 60-min call" extra={{ label: 'Read a case study first', href: '/case-studies' }} />
              </div>
            </div>
          )}

          {openPanel === 'small' && (
            <div id="panel-small" role="menu" className="hidden lg:block absolute left-0 right-0 top-full bg-off-white border-t border-b border-sky-blue/40 shadow-xl">
              <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 grid grid-cols-3 gap-8">
                <div className="col-span-2">
                  <p className="text-sm text-prussian-blue/70 mb-3 px-3 py-2.5 rounded-lg bg-cerulean/10">Turning over under £500k and running it yourself? Same work, done remotely, at a price that fits.</p>
                  <div className="grid grid-cols-2 gap-x-8">
                    <div>
                      <h3 className="text-xs font-semibold tracking-widest uppercase text-prussian-blue/50 mb-2.5 pb-2 border-b border-sky-blue/30">Fixed-price, done remotely</h3>
                      <ul className="space-y-0.5">
                        {smallBusinessProducts.map(p => (
                          <li key={p.label}>
                            <Link href={p.href} onClick={closePanel} className="flex items-baseline justify-between gap-3 -mx-2 px-2 py-2 rounded-lg text-sm text-prussian-blue hover:bg-cerulean/10 hover:text-cerulean transition-colors">
                              <span>
                                {p.label}
                                <span className="block text-xs text-prussian-blue/50">{p.sub}</span>
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <GroupList group={smallBusinessStart} onNavigate={closePanel} />
                  </div>
                </div>
                <Rail note="Bigger than £500k? Then the on-site work is a better fit, same steps, done in person." ctaLabel="Book a free 60-min call" extra={{ label: 'See Clarity', href: '/clarity' }} />
              </div>
            </div>
          )}

          {openPanel === 'proof' && (
            <div id="panel-proof" role="menu" className="hidden lg:block absolute left-0 right-0 top-full bg-off-white border-t border-b border-sky-blue/40 shadow-xl">
              <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 grid grid-cols-4 gap-8">
                <GroupList group={proofWork} onNavigate={closePanel} />
                <GroupList group={proofTools} onNavigate={closePanel} />
                <GroupList group={proofGuides} onNavigate={closePanel} />
                <Rail note="Twelve questions about how you run today. You get a score and the three things to fix first." ctaHref="/tools/ops-health-score" ctaLabel="Take the 2-minute score" extra={{ label: 'Or browse everything', href: '/resources' }} />
              </div>
            </div>
          )}

          {/* Mobile menu */}
          {mobileOpen && (
            <div id="mobile-menu" className="lg:hidden py-4 border-t border-sky-blue/30 space-y-1" role="navigation" aria-label="Mobile navigation">
              {([
                { key: 'wrong' as PanelKey, groups: wrongGroups },
                { key: 'industry' as PanelKey, groups: [{ title: 'Sectors', items: sectors }] },
                { key: 'small' as PanelKey, groups: [{ title: 'Fixed-price, done remotely', items: smallBusinessProducts.map(p => ({ label: p.label, sub: p.sub, href: p.href })) }, smallBusinessStart] },
                { key: 'proof' as PanelKey, groups: [proofWork, proofTools, proofGuides] },
              ]).map(({ key, groups }) => (
                <div key={key} className="border-b border-sky-blue/20">
                  <button
                    className="flex items-center justify-between w-full text-sm font-medium text-prussian-blue py-2"
                    onClick={() => setMobileAccordion(a => (a === key ? null : key))}
                    aria-expanded={mobileAccordion === key}
                  >
                    {PANEL_LABEL[key]} <ChevronDown size={14} className={`transition-transform ${mobileAccordion === key ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </button>
                  {mobileAccordion === key && (
                    <div className="pl-4 pb-2 space-y-3">
                      {groups.map(g => (
                        <div key={g.title}>
                          <p className="text-[11px] font-semibold tracking-widest uppercase text-prussian-blue/40 mt-2 mb-1">{g.title}</p>
                          {g.items.map(item => (
                            <Link key={item.href + item.label} href={item.href} onClick={() => setMobileOpen(false)}
                              className="block text-sm text-prussian-blue hover:text-cerulean py-1.5 transition-colors">
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* "How I help" mobile accordion, ladder needs its own simple layout */}
              <div className="border-b border-sky-blue/20">
                <button
                  className="flex items-center justify-between w-full text-sm font-medium text-prussian-blue py-2"
                  onClick={() => setMobileAccordion(a => (a === 'help' ? null : 'help'))}
                  aria-expanded={mobileAccordion === 'help'}
                >
                  How I help <ChevronDown size={14} className={`transition-transform ${mobileAccordion === 'help' ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                {mobileAccordion === 'help' && (
                  <div className="pl-4 pb-2 space-y-3">
                    <div>
                      {helpLadder.map((step, i) => (
                        <Link key={step.href} href={step.href} onClick={() => setMobileOpen(false)}
                          className="flex gap-2.5 py-1.5">
                          <span className="w-5 h-5 shrink-0 rounded-full border border-sky-blue/40 text-[10px] font-bold text-prussian-blue/60 flex items-center justify-center">{i + 1}</span>
                          <span className="text-sm text-prussian-blue">{step.label}<span className="block text-xs text-prussian-blue/50">{step.sub}</span></span>
                        </Link>
                      ))}
                    </div>
                    {[helpBuilt, helpHow].map(g => (
                      <div key={g.title}>
                        <p className="text-[11px] font-semibold tracking-widest uppercase text-prussian-blue/40 mt-2 mb-1">{g.title}</p>
                        {g.items.map(item => (
                          <Link key={item.href + item.label} href={item.href} onClick={() => setMobileOpen(false)}
                            className="block text-sm text-prussian-blue hover:text-cerulean py-1.5 transition-colors">
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {[
                { label: 'Pricing', href: '/pricing' },
                { label: 'About', href: '/about' },
                { label: 'Client Login', href: '/clients/login' },
              ].map(link => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-medium text-prussian-blue hover:text-cerulean transition-colors py-2 border-b border-sky-blue/20"
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-2">
                <Link href="/contact" onClick={() => setMobileOpen(false)}
                  className="inline-block px-6 py-2.5 bg-amber text-prussian-blue rounded-full hover:bg-orange-brand transition-colors text-sm font-semibold">
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
