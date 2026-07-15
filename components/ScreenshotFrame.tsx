import { ReactNode } from 'react';
import { Globe } from 'lucide-react';

interface ScreenshotFrameProps {
  children: ReactNode;
  rotate?: number;
  className?: string;
  url?: string;
  live?: boolean;
}

export function ScreenshotFrame({ children, rotate = 1.5, className = '', url = 'decodedops.co.uk', live = false }: ScreenshotFrameProps) {
  return (
    <div
      className={`rounded-2xl overflow-hidden border border-[#8ECAE6]/30 bg-[#F8F9FA] ${className}`}
      style={{
        boxShadow: '0 8px 40px 0 rgba(255,183,3,0.2), 0 2px 8px 0 rgba(2,48,71,0.06)',
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#8ECAE6]/20 bg-[#F8F9FA]">
        <div className="flex gap-1.5 shrink-0">
          <div className="w-3 h-3 rounded-full bg-[#FB8500]" aria-hidden="true" />
          <div className="w-3 h-3 rounded-full bg-[#FFB703]" aria-hidden="true" />
          <div className="w-3 h-3 rounded-full bg-[#219EBC]" aria-hidden="true" />
        </div>
        <div className="flex-1 min-w-0 bg-[#023047]/[0.06] rounded-md px-3 py-1.5 flex items-center gap-1.5">
          <Globe size={12} className="text-[#023047]/30 shrink-0" aria-hidden="true" />
          <span className="text-xs text-[#023047]/35 truncate">{url}</span>
        </div>
        {live && (
          <span className="text-[9px] font-semibold tracking-wider uppercase text-[#219EBC] border border-[#219EBC]/40 rounded-full px-2 py-0.5 shrink-0">
            Live
          </span>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
}
