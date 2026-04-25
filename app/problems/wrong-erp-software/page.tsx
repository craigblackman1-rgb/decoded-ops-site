import type { Metadata } from 'next';
import { ProblemPage } from '@/components/ProblemPage';
import { SystemsDisconnectedGraphic } from '@/components/graphics/SystemsDisconnectedGraphic';

export const metadata: Metadata = {
  title: 'Wrong ERP Software for Your Business | Decoded Ops',
  description: 'Bought ERP software that doesn\'t fit? You\'re not alone. Independent advice on whether to fix, replace, or make the best of what you have.',
  alternates: { canonical: '/problems/wrong-erp-software' },
};

export default function WrongERPSoftwarePage() {
  return (
    <ProblemPage
      problem="Wrong ERP software"
      headline="The system looked right in the demo. ||It doesn't fit your business.||"
      intro="Selecting the wrong ERP is one of the most expensive mistakes a business in this sector can make. The cost isn't just the software — it's the implementation, the disruption, the workarounds that accumulate, and the productivity you never recover."
      heroGraphic={<SystemsDisconnectedGraphic connected={false} />}
      symptoms={[
        "The system can't handle decoration method-specific workflows without heavy customisation",
        "You're maintaining manual processes alongside the system because it can't replace them",
        "The vendor keeps telling you it's a configuration issue, not a software limitation",
        "Your team have found ways around the system rather than working within it",
        "Customisation costs have exceeded the original software licence",
        "You selected based on a demo that showed a different kind of business",
        "The vendor's support team doesn't understand your industry",
      ]}
      causes={[
        { title: 'Selected on demo, not on fit', body: "Vendors are excellent at demos. They show you the things the software does well and move quickly past the things it doesn't. Without sector expertise on your side of the table, you're evaluating presentation skills." },
        { title: 'No independent specification written first', body: "A vendor brief — written by someone who understands your business model before you talk to any vendor — changes the selection process entirely. Without it, you're being sold to rather than making an informed choice." },
        { title: 'Reference sites in a different sector', body: "Generic ERP vendors often have good reference sites in manufacturing or distribution. Those references don't tell you how the software performs in a decoration business with mixed methods, variable artwork, and short-run personalisation." },
        { title: "The total cost wasn't modelled", body: "Implementation, training, customisation, integration, ongoing support. The total cost of ownership for an ERP is often two to three times the headline licence cost. That comparison rarely happens before selection." },
      ]}
      howIHelp="If you're in a system that doesn't fit, I give you an honest assessment of what your options are. Sometimes there's more capability in the existing system than you're using — the implementation was poor, not the software. Sometimes the software genuinely isn't right and you need to plan a managed exit. Either way, I help you understand the real cost of staying versus moving — and if you're moving, I write the independent vendor brief that makes sure you don't end up in the same situation again."
    />
  );
}
