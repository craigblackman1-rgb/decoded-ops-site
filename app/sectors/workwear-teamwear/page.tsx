import { SectorPage } from '@/components/SectorPage';

export default function WorkwearTeamwearPage() {
  return (
    <SectorPage
      sector="Workwear & teamwear"
      tagline="Managed accounts and repeat orders ||should be your most efficient business. Usually they're not.||"
      intro="Workwear and teamwear businesses have the best opportunity for systemised, scalable revenue — but only if the technology and processes can actually support it. Most can't."
      heroImage="https://images.unsplash.com/photo-1530023367847-a683933f4172?w=800&q=80"
      challenges={[
        { title: 'Managed account complexity', body: "Each managed account has its own pricing, its own approved products, its own approval hierarchy, and its own delivery rules. Managing that at scale requires systems specifically built for it — not workarounds in a generic platform." },
        { title: 'The uniform specification problem', body: "Keeping embroidery specifications, sizing matrices, and decoration requirements accurate across hundreds of SKUs per client is an enormous data management challenge. One wrong spec means a rerun." },
        { title: 'Online shop management', body: "Corporate online shops promise efficiency but often create more administration than they save — if the backend isn't connected to your production and despatch systems properly." },
        { title: 'Re-order and replenishment', body: "Repeat orders should be the simplest part of the workwear business. They're often the most error-prone — because the original order data isn't held in a way that makes re-ordering reliable." },
      ]}
      whatIdo={[
        'Audit your managed account setup process and ongoing administration burden',
        'Review your product data and specification management across client accounts',
        'Assess your online shop infrastructure and back-end integration',
        'Map the re-order and replenishment process for inefficiencies',
        'Identify where client-specific pricing and approval rules are creating manual overhead',
        'Produce independent recommendations for technology that actually supports this model',
      ]}
      cta="Find out what your managed accounts are really costing you to run"
    />
  );
}
