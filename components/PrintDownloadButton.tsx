import { Download } from 'lucide-react';

// Links the static PDF pre-rendered from the live page with headless Chrome
// into /public/downloads/<slug>.pdf (see scripts/generate-playbook-pdfs.sh).
// Server component, no client JS needed.
export function PrintDownloadButton({
  label = 'Download PDF',
  pdfHref,
}: {
  label?: string;
  pdfHref: string;
}) {
  return (
    <a
      href={pdfHref}
      download
      className="print:hidden inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-prussian-blue text-prussian-blue font-semibold hover:bg-prussian-blue/5 transition-colors"
    >
      <Download size={18} /> {label}
    </a>
  );
}
