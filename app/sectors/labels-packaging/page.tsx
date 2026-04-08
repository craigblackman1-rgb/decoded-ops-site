import { SectorPage } from '@/components/SectorPage';

export default function LabelsPackagingPage() {
  return (
    <SectorPage
      sector="Labels & packaging"
      tagline="Variable data printing and compliance labelling ||requires operational precision most systems can't deliver.||"
      intro="Labels and packaging businesses operate at the intersection of print technology, compliance requirements, and supply chain — with zero tolerance for error and constant pressure on turnaround times."
      heroImage="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800&q=80"
      challenges={[
        { title: 'Compliance and specification management', body: "Label specifications change. Compliance requirements change. Managing version control across hundreds of label SKUs — and ensuring the right version is always in production — is a critical operational challenge." },
        { title: 'Variable data at speed', body: "Short-run, high-variation variable data jobs require print systems and production workflows that most generic MIS platforms weren't designed for. The workarounds are expensive." },
        { title: 'Substrate and press matching', body: "Matching the right substrate, adhesive, and finish specification to the right press configuration — and doing it without errors — requires product data management that most businesses manage in spreadsheets." },
        { title: 'Customer integration and EDI', body: "Larger label customers often expect EDI ordering, automated reorder triggers, or direct system integration. Setting that up — and maintaining it — is a specialist operational challenge." },
      ]}
      whatIdo={[
        'Audit your specification and version management process across your label SKU range',
        'Review your variable data workflow from file intake through to press-ready output',
        'Map substrate and press configuration management for accuracy and efficiency',
        'Assess your customer integration capability and EDI readiness',
        'Identify where compliance risk is sitting in your current processes',
        'Recommend systems suited to the specific demands of short-run variable data label production',
      ]}
      cta="Understand the operational risk and cost in your labels business"
    />
  );
}
