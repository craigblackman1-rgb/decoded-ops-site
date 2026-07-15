import Image from 'next/image';
import { ScreenshotFrame } from '@/components/ScreenshotFrame';

/**
 * Homepage hero visual — replaces the Discovery Day audit-flow schematic.
 * Craig's read (2026-07-15): that schematic represented the audit product,
 * not what he does day to day. This pairs a real industry photo with a
 * live-software card, so the hero says "I work in this world AND I build
 * the tools" rather than "step 1: audit."
 */
export function HeroVisual() {
  return (
    <div className="relative w-full pb-12 pr-6">
      <div className="relative w-full aspect-[4/3.2] rounded-2xl overflow-hidden shadow-xl">
        <Image
          src="/images/hero-craft.jpg"
          alt="Hands preparing a garment on a heat press"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      <div className="absolute -bottom-2 -right-2 w-[260px] sm:w-[280px]">
        <ScreenshotFrame url="hub.decodedops.co.uk/sprints" live rotate={-2}>
          <div className="p-3.5 space-y-1.5">
            <p className="text-[11px] font-bold text-[#023047] mb-1.5">Order Sync Queue</p>
            {[
              { label: 'Polo, navy / L', tone: '#219EBC' },
              { label: 'Polo, navy / XL', tone: '#FFB703' },
              { label: 'Shorts, black', tone: '#219EBC' },
            ].map(row => (
              <div key={row.label} className="flex items-center gap-2 text-[10px] text-[#023047]/70">
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: row.tone }} aria-hidden="true" />
                <span className="truncate">{row.label}</span>
              </div>
            ))}
          </div>
        </ScreenshotFrame>
      </div>

      <div className="absolute -top-3 -left-3 bg-[#023047] rounded-xl shadow-lg px-4 py-3">
        <div className="text-xl font-bold text-white leading-none">25+</div>
        <div className="text-[10px] font-semibold text-white/70 uppercase tracking-wide">years in the sector</div>
      </div>
    </div>
  );
}
