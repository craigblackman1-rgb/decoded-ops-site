'use client';

import { useEffect, useState } from 'react';

const SHEETS = [
  { id: 's1', no: '01', label: 'What I do' },
  { id: 's2', no: '02', label: 'The cost' },
  { id: 's3', no: '03', label: 'How I help' },
  { id: 's4', no: '04', label: 'The guarantee' },
  { id: 's5', no: '05', label: 'On the day' },
  { id: 's6', no: '06', label: 'What it turns up' },
  { id: 's7', no: '07', label: 'The software' },
  { id: 's8', no: '08', label: 'Start here' },
];

export function SheetIndexRail() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = SHEETS
      .map(s => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <nav className="rail" aria-label="Page sections">
      <ol>
        {SHEETS.map(s => (
          <li key={s.id}>
            <a href={`#${s.id}`} className={active === s.id ? 'is-active' : ''} aria-current={active === s.id ? 'true' : undefined}>
              <span aria-hidden="true">{s.no}</span>
              <span className="lbl">{s.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
