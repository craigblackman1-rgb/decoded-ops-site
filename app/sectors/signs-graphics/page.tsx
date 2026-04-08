import { SectorPage } from '@/components/SectorPage';

export default function SignsGraphicsPage() {
  return (
    <SectorPage
      sector="Signs & graphics"
      tagline="Large format and signage businesses run on ||tight margins and complex survey-to-fit workflows.||"
      intro="Signs and graphics businesses have production processes that generic ERP systems struggle to model. The result is usually spreadsheets, whiteboards, and people carrying information in their heads."
      heroImage="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80"
      challenges={[
        { title: 'Survey-to-installation workflow', body: "The job doesn't start when the order is placed — it starts with a site survey. Most systems can't track a job from survey through design, production, installation, and sign-off as a single connected workflow." },
        { title: 'Substrate and finish complexity', body: "The number of variables in a signage job — substrate, finish, size, fixing method, installation requirements — makes job costing genuinely difficult. Manual approaches mean margin leakage on every complex job." },
        { title: 'Installation scheduling', body: "Coordinating installation teams, site access, third-party contractors, and delivery of materials is a logistics challenge that most job management systems don't handle well." },
        { title: 'Artwork and proof management', body: "Client approval of artwork before production is critical in this sector. Managing that process outside of the production system creates delay, rework, and missed deadlines." },
      ]}
      whatIdo={[
        'Map your full workflow from enquiry through survey, design, production, installation and sign-off',
        'Identify where jobs fall between system gaps and into manual processes',
        'Review your job costing model for margin leakage on complex projects',
        'Assess your installation scheduling approach and its connection to production',
        'Audit your artwork and proof management process',
        'Recommend technology suited to the specific operational model of a signs and graphics business',
      ]}
      cta="Understand where your signs business is losing time and margin"
    />
  );
}
