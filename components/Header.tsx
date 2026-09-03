'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

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
  title: 'Software I’ve already built',
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
    { label: 'The Decoded Method', href: '/resources/decoded-method' },
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
const smallBusinessProducts: (NavLink & { sub: string })[] = [
  { label: 'Clarity Check', sub: 'A written plan, no visit needed', href: '/small-business' },
  { label: 'Deliver', sub: 'I fix things, month by month', href: '/small-business' },
  { label: 'Transform', sub: 'Rebuild how you work', href: '/small-business' },
  { label: 'Retained', sub: 'Someone to ask, every month', href: '/small-business' },
  { label: 'AI Readiness Check', sub: 'Assessed for you, not a self-test', href: '/small-business' },
  { label: 'Quarterly Sprint', sub: 'One intensive look, no monthly tie-in', href: '/small-business' },
];
const smallBusinessStart: NavGroup = {
  title: 'Start free',
  items: [
    { label: 'Ops health score', sub: 'Five areas, two minutes', href: '/tools/ops-health-score' },
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
    { label: 'SOP template for decoration businesses', href: '/resources/sop-template' },
    { label: 'ERP selection guide', href: '/resources/erp-selection-playbook' },
    { label: 'Artwork approval playbook', href: '/resources/artwork-approval-playbook' },
    { label: 'The Decoded Method', href: '/resources/decoded-method' },
    { label: 'Six Sigma, explained simply', href: '/resources/six-sigma' },
    { label: 'Building a quality system', href: '/process-quality-system' },

    { label: 'The blog', href: '/blog' },
  ],
};

type PanelKey = 'wrong' | 'help' | 'industry' | 'small' | 'proof';

function MegaGroup({ group, onNavigate }: { group: NavGroup; onNavigate: () => void }) {
  return (
    <div className="mega-group">
      <h3>{group.title}</h3>
      <ul className="mega-list">
        {group.items.map(item => (
          <li key={item.href + item.label}>
            <Link href={item.href} onClick={onNavigate}>
              {item.label}
              {item.sub && <small>{item.sub}</small>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MegaRail({ heading, note, ctaHref = '/contact', ctaLabel = 'Book a free 60-min call', extra }: {
  heading: string; note: string; ctaHref?: string; ctaLabel?: string; extra?: { label: string; href: string };
}) {
  return (
    <div className="mega-rail">
      <h3>{heading}</h3>
      <p>{note}</p>
      <Link className="btn btn--primary btn--sm" href={ctaHref}>{ctaLabel}</Link>
      {extra && <Link className="rail-all" href={extra.href}>{extra.label}</Link>}
    </div>
  );
}

export function Header() {
  const [openPanel, setOpenPanel] = useState<PanelKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const isMobile = () => typeof window !== 'undefined' && window.matchMedia('(max-width:1100px)').matches;

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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const openViaClick = (key: PanelKey) => setOpenPanel(p => (p === key ? null : key));
  const openViaHover = (key: PanelKey) => {
    if (isMobile()) return;
    setOpenPanel(p => (p !== null && p !== key ? key : p));
  };
  const closePanel = () => setOpenPanel(null);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-amber focus:text-prussian-blue focus:font-semibold focus:text-sm focus:outline-none focus:ring-2 focus:ring-prussian-blue"
      >
        Skip to main content
      </a>

      <header ref={headerRef} className="site-head site-head--mega">
        <div className="container head-inner">
          <Link className="logo" href="/">Decoded<span>Ops</span></Link>

          <button
            className="nav-toggle"
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="site-nav"
            aria-label={mobileOpen ? 'Close menu' : 'Menu'}
            onClick={() => { setMobileOpen(o => !o); if (mobileOpen) closePanel(); }}
          >
            {mobileOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
            )}
          </button>

          <nav className={`site-nav${mobileOpen ? ' is-open' : ''}`} id="site-nav" aria-label="Primary">

            {/* 1 · symptoms, in the customer's words */}
            <div className="nav-item">
              <button className="nav-trigger" type="button" aria-expanded={openPanel === 'wrong'} aria-controls="mega-wrong"
                onClick={() => openViaClick('wrong')} onMouseEnter={() => openViaHover('wrong')}>
                What&rsquo;s going wrong
                <svg className="nav-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
              </button>
              <div className="mega" id="mega-wrong" hidden={openPanel !== 'wrong'}>
                <div className="container mega-inner">
                  {wrongGroups.map(g => <MegaGroup key={g.title} group={g} onNavigate={() => { closePanel(); setMobileOpen(false); }} />)}
                  <MegaRail heading="None of these quite fit?" note="Three questions, thirty seconds, and I'll point you at the right page." />
                </div>
              </div>
            </div>

            {/* 2 · services as a numbered ladder */}
            <div className="nav-item">
              <button className="nav-trigger" type="button" aria-expanded={openPanel === 'help'} aria-controls="mega-help"
                onClick={() => openViaClick('help')} onMouseEnter={() => openViaHover('help')}>
                How I help
                <svg className="nav-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
              </button>
              <div className="mega" id="mega-help" hidden={openPanel !== 'help'}>
                <div className="container mega-inner cols-3">
                  <div className="mega-group">
                    <h3>The four steps</h3>
                    <ul className="ladder">
                      {helpLadder.map(step => (
                        <li key={step.href}>
                          <Link href={step.href} onClick={() => { closePanel(); setMobileOpen(false); }}>
                            <span className="rung" aria-hidden="true" />
                            <span>
                              <strong>{step.label}</strong>
                              <small>{step.sub}</small>
                              {step.startHere && <span className="start-here">Most people start here</span>}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <MegaGroup group={helpBuilt} onNavigate={() => { closePanel(); setMobileOpen(false); }} />
                  <MegaGroup group={helpHow} onNavigate={() => { closePanel(); setMobileOpen(false); }} />
                  <MegaRail heading="Not sure which step?" note="Almost everyone starts with Clarity, a day on site and a plan you own, whether you hire me after or not."
                    extra={{ label: 'See what each step costs', href: '/pricing' }} />
                </div>
              </div>
            </div>

            {/* 3 · sectors — the easiest question anyone can answer */}
            <div className="nav-item">
              <button className="nav-trigger" type="button" aria-expanded={openPanel === 'industry'} aria-controls="mega-industry"
                onClick={() => openViaClick('industry')} onMouseEnter={() => openViaHover('industry')}>
                Your industry
                <svg className="nav-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
              </button>
              <div className="mega" id="mega-industry" hidden={openPanel !== 'industry'}>
                <div className="container mega-inner">
                  <p className="panel-note">Pick what you make. Every page below is written for that trade, same problems, your language, your machines.</p>
                  <div className="sector-grid">
                    {sectors.map(s => (
                      <Link key={s.href} href={s.href} onClick={() => { closePanel(); setMobileOpen(false); }}>
                        {s.label}
                      </Link>
                    ))}
                  </div>
                  <MegaRail heading="Don't see your trade?" note="The problems are the same across decorated goods. Start with the symptom instead."
                    extra={{ label: 'Read a case study first', href: '/case-studies' }} />
                </div>
              </div>
            </div>

            {/* 4 · small business gets its own top-level slot */}
            <div className="nav-item">
              <button className="nav-trigger" type="button" aria-expanded={openPanel === 'small'} aria-controls="mega-small"
                onClick={() => openViaClick('small')} onMouseEnter={() => openViaHover('small')}>
                Small business
                <svg className="nav-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
              </button>
              <div className="mega" id="mega-small" hidden={openPanel !== 'small'}>
                <div className="container mega-inner cols-2">
                  <p className="panel-note">Turning over under &pound;500k and running it yourself? This is the same work, done remotely, at a price that fits.</p>
                  <div className="mega-group">
                    <h3>Fixed-price, done remotely</h3>
                    <ul className="price-list">
                      {smallBusinessProducts.map(p => (
                        <li key={p.label}>
                          <Link href={p.href} onClick={() => { closePanel(); setMobileOpen(false); }}>
                            <span>{p.label}<small>{p.sub}</small></span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <MegaGroup group={smallBusinessStart} onNavigate={() => { closePanel(); setMobileOpen(false); }} />
                  <MegaRail heading="Bigger than £500k?" note="Then the on-site work is a better fit, same steps, done in person."
                    ctaLabel="Book a free 60-min call" extra={{ label: 'See Clarity', href: '/clarity' }} />
                </div>
              </div>
            </div>

            {/* 5 · proof, tools and reading */}
            <div className="nav-item">
              <button className="nav-trigger" type="button" aria-expanded={openPanel === 'proof'} aria-controls="mega-proof"
                onClick={() => openViaClick('proof')} onMouseEnter={() => openViaHover('proof')}>
                Proof &amp; free tools
                <svg className="nav-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
              </button>
              <div className="mega" id="mega-proof" hidden={openPanel !== 'proof'}>
                <div className="container mega-inner cols-3">
                  <MegaGroup group={proofWork} onNavigate={() => { closePanel(); setMobileOpen(false); }} />
                  <MegaGroup group={proofTools} onNavigate={() => { closePanel(); setMobileOpen(false); }} />
                  <MegaGroup group={proofGuides} onNavigate={() => { closePanel(); setMobileOpen(false); }} />
                  <MegaRail heading="Start with the score" note="Twelve questions about how you run today. You get a score and the three things to fix first."
                    ctaHref="/tools/ops-health-score" ctaLabel="Take the 2-minute score" extra={{ label: 'Or browse everything', href: '/resources' }} />
                </div>
              </div>
            </div>

            <Link className="nav-flat" href="/pricing" onClick={() => setMobileOpen(false)}>Pricing</Link>
            <Link className="nav-flat" href="/clients/login" onClick={() => setMobileOpen(false)}>Client Login</Link>

            <div className="nav-tools">
              <Link className="btn btn--outline btn--sm" href="/contact" onClick={() => setMobileOpen(false)}>Book a free call</Link>
            </div>
          </nav>
        </div>
      </header>
      <div className="scrim" hidden={!(openPanel && !mobileOpen)} data-scrim onClick={closePanel} />
    </>
  );
}
