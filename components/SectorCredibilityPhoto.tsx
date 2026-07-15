import Image from 'next/image';

const sectors = [
  'Garment decoration',
  'Print & promotional',
  'Workwear & teamwear',
  'Signs & graphics',
  'Awards & engraving',
  'Labels & packaging',
];

/**
 * Replaces the generic sector icon grid with a real photo (Field Notes
 * treatment: desaturated, grain, timestamp tag) and a sector spec-card
 * overlay — the credibility-section direction agreed 2026-07-15.
 */
export function SectorCredibilityPhoto() {
  return (
    <div className="relative pb-10 sm:pb-12">
      <div className="relative aspect-[4/3.1] rounded-2xl overflow-hidden shadow-xl">
        <Image
          src="/images/sector-credibility.jpg"
          alt="Garment decoration production floor"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover [filter:grayscale(0.5)_sepia(0.18)_contrast(1.05)_brightness(0.92)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          style={{ backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,.35) 0 1px, transparent 1px 3px)' }}
        />
        <span className="absolute left-3.5 bottom-3.5 text-[10px] font-mono tracking-wider text-[#FFB703] bg-[#023047]/80 px-2.5 py-1 rounded">
          25+ YEARS · SIX SECTORS
        </span>
      </div>

      <div className="absolute -right-3 -bottom-2 sm:right-0 sm:-bottom-4 w-[240px] bg-white rounded-xl shadow-2xl px-4 pt-4 pb-3.5 border-t-[3px] border-[#219EBC]">
        <h3 className="text-[11px] font-bold uppercase tracking-wide text-[#023047] mb-2.5 pb-2 border-b border-[#023047]/10">
          Sectors covered
        </h3>
        <ul className="space-y-1">
          {sectors.map(s => (
            <li key={s} className="flex items-center gap-2 text-xs text-[#023047]/75">
              <span className="w-1.5 h-1.5 rounded-full bg-[#219EBC] shrink-0" aria-hidden="true" />
              {s}
            </li>
          ))}
        </ul>
        <p className="mt-2.5 pt-2 border-t border-[#023047]/10 text-[9.5px] uppercase tracking-wide text-[#FB8500] font-bold">
          6 sectors &middot; 0 vendor ties
        </p>
      </div>
    </div>
  );
}
