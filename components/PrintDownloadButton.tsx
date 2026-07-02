'use client';

import { Download } from 'lucide-react';

// TODO(puppeteer): swap this for a static PDF link once Craig approves
// `npm install puppeteer` and decoded-ops-hub/scripts/generate-pdfs.js is
// wired up to render this page to /public/downloads/<slug>.pdf. At that
// point this becomes `<a href="/downloads/<slug>.pdf" download>` — a
// one-line change, no layout impact.
export function PrintDownloadButton({ label = 'Download PDF' }: { label?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="print:hidden inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#023047] text-[#023047] font-semibold hover:bg-[#023047]/5 transition-colors"
    >
      <Download size={18} /> {label}
    </button>
  );
}
