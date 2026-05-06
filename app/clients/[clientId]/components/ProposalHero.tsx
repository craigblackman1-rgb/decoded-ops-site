'use client';

import { useEffect, useRef } from 'react';

interface HeroProps {
  tag: string;
  title: string;
  subtitle: string;
  stats: Array<{ num: string; label: string }>;
}

export default function ProposalHero({ tag, title, subtitle, stats }: HeroProps) {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // Animate stat numbers
        const nums = statsRef.current?.querySelectorAll('[data-stat-num]');
        nums?.forEach((el) => {
          const target = parseInt((el as HTMLElement).dataset.statNum || '0');
          let current = 0;
          const increment = target / 30;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              (el as HTMLElement).textContent = target.toString();
              clearInterval(timer);
            } else {
              (el as HTMLElement).textContent = Math.floor(current).toString();
            }
          }, 30);
        });
        observer.unobserve(entry.target);
      }
    });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
     <section className="min-h-screen bg-[#023047] relative overflow-hidden flex flex-col justify-center px-20 md:px-20 pt-30 md:pt-30 pb-20">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(33,158,188,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(33,158,188,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow effect */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none -translate-y-1/2 translate-x-1/2"
        style={{ background: 'radial-gradient(circle, rgba(33,158,188,0.15) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-5xl">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-[rgba(255,183,3,0.3)] bg-[rgba(255,183,3,0.1)]">
          <div className="w-1.5 h-1.5 rounded-full bg-[#FFB703] animate-pulse" />
          <span className="text-xs font-bold tracking-widest text-[#FFB703] uppercase">
            {tag}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight max-w-4xl">
          <div dangerouslySetInnerHTML={{
            __html: title
              .replace(/<span class="highlight">/g, '<span style="color:#219EBC">')
              .replace(/<span class="amber">/g, '<span style="color:#FFB703">')
          }} />
        </h1>

        {/* Subtitle */}
         <p className="text-lg md:text-xl text-[#8ECAE6] max-w-2xl mb-12 leading-relaxed">
          {subtitle}
        </p>

        {/* Stats Grid */}
         <div
           ref={statsRef}
           className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.06)] rounded-2xl overflow-hidden max-w-4xl"
         >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-6 md:p-8 bg-[rgba(255,255,255,0.02)]"
            >
               <div className="text-4xl md:text-5xl lg:text-6xl font-black text-[#FFB703] font-mono leading-tight">
                 <span data-stat-num={stat.num}>0</span>
              </div>
              <div className="text-xs text-[#8ECAE6] mt-1.5 font-medium tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-10 flex items-center gap-2.5 text-xs text-[rgba(255,255,255,0.3)] uppercase tracking-widest font-medium">
        <svg width="16" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 16 20" className="animate-bounce">
          <path d="M8 3v14M3 13l5 5 5-5" />
        </svg>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
