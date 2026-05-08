'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface JourneyData {
  tag: string;
  title: string;
  subtitle: string;
  now: string[];
  future: string[];
}

export default function JourneySection({ data }: { data: JourneyData }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          scrub: false,
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#010f17] text-white px-8 py-20 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="text-xs font-bold tracking-widest text-[#219EBC] uppercase mb-3">
            {data.tag}
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-4 leading-tight max-w-3xl">
            {data.title.split('\n').map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </h2>
          <p className="text-base lg:text-lg text-[rgba(255,255,255,0.55)] max-w-4xl leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Three column layout: Now | Arrows | Future */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2">
           {/* NOW Column */}
           <div>
             <div className="bg-[#FB8500] px-5 py-3 rounded-t-xl font-bold text-white text-sm text-center uppercase tracking-wide">
               Now
             </div>
             <div className="space-y-2">
               {data.now.map((item, i) => (
                 <div
                   key={i}
                   className="p-4 rounded-lg text-sm flex items-start gap-3 bg-[rgba(251,133,0,0.1)] border border-[rgba(251,133,0,0.2)] text-[rgba(255,255,255,0.8)]"
                 >
                   <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold bg-[rgba(251,133,0,0.2)] text-[#FB8500]">
                     ✕
                   </div>
                   <div>{item}</div>
                 </div>
               ))}
             </div>
           </div>

          {/* ARROWS Column */}
          <div className="hidden md:flex flex-col items-center justify-start pt-12 gap-3">
            {[...Array(data.now.length)].map((_, i) => (
              <div key={i} className="text-2xl font-black text-[#FFB703]">
                →
              </div>
            ))}
          </div>

           {/* FUTURE Column */}
           <div>
             <div className="bg-[#219EBC] px-5 py-3 rounded-t-xl font-bold text-white text-sm text-center uppercase tracking-wide">
               Future
             </div>
             <div className="space-y-2">
               {data.future.map((item, i) => (
                 <div
                   key={i}
                   className="p-4 rounded-lg text-sm flex items-start gap-3 bg-[rgba(33,158,188,0.1)] border border-[rgba(33,158,188,0.2)] text-white"
                 >
                   <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold bg-[rgba(33,158,188,0.2)] text-[#219EBC]">
                     ✓
                   </div>
                   <div>{item}</div>
                 </div>
               ))}
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
