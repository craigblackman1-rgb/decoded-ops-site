import type { Metadata } from 'next';
import { SectorPage } from '@/components/SectorPage';
import { SignsGraphicsSchematic } from '@/components/schematics/sectors/SignsGraphicsSchematic';
import { JsonLd } from '@/components/JsonLd';
import { sectorRouting } from '@/data/sector-routing';

export const metadata: Metadata = {
  title: 'Signs & Graphics Technology | Decoded Ops',
  description: 'Technology and operations consultancy for signs and graphics businesses. Systems audit, project delivery, and fractional CTO support.',
  alternates: { canonical: '/sectors/signs-graphics' },
  openGraph: {
    title: 'Signs & Graphics Technology | Decoded Ops',
    description: 'Technology and operations consultancy for signs and graphics businesses. Systems audit, project delivery, and fractional CTO support.',
    url: 'https://decodedops.co.uk/sectors/signs-graphics',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Signs & Graphics Technology | Decoded Ops',
    description: 'Technology and operations consultancy for signs and graphics businesses. Systems audit, project delivery, and fractional CTO support.',
  },
};

const sectorSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://decodedops.co.uk/sectors/signs-graphics#webpage',
  url: 'https://decodedops.co.uk/sectors/signs-graphics',
  name: 'Signs & Graphics Technology | Decoded Ops',
  description: 'Technology and operations consultancy for signs and graphics businesses. Systems audit, project delivery, and fractional CTO support.',
  isPartOf: { '@id': 'https://decodedops.co.uk/#organization' },
};

export default function SignsGraphicsPage() {
  return (
    <>
      <JsonLd data={sectorSchema} />
      <SectorPage
      sector="Signs & graphics"
      tagline="Large format and signage businesses run on ||tight margins and complex survey-to-fit workflows.||"
      intro="Signs and graphics businesses have production processes that generic ERP systems struggle to model. The result is usually spreadsheets, whiteboards, and people carrying information in their heads."
      heroGraphic={<SignsGraphicsSchematic />}
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
    
      slug="signs-graphics"
      targetService={sectorRouting['signs-graphics'].targetService}
      relatedProblems={sectorRouting['signs-graphics'].relatedProblems}
    />
    </>
  );
}
