import { ProblemPage } from '@/components/ProblemPage';
import { SystemsDisconnectedGraphic } from '@/components/graphics/SystemsDisconnectedGraphic';

export default function ERPImplementationFailurePage() {
  return (
    <ProblemPage
      problem="ERP implementation failure"
      headline="Your ERP implementation has gone wrong. ||Here's what to do next.||"
      intro="ERP implementations fail in this sector more often than vendors will admit. Usually not because the software is bad — but because the implementation wasn't designed around how decoration and print businesses actually work."
      heroGraphic={<SystemsDisconnectedGraphic connected={false} />}
      symptoms={[
        "The system went live but the team are still using spreadsheets alongside it",
        "You went live late, over budget, or both",
        "The vendor is still on-site months after the planned go-live",
        "Key processes still can't be done in the system",
        "You're paying for a system you're only using 40% of",
        "Your team have lost confidence in the data",
        "You're thinking about starting the selection process again",
      ]}
      causes={[
        { title: 'Scoping done by the vendor', body: "When the vendor scopes their own implementation, they scope for the software — not for your business. The gaps only become visible after go-live." },
        { title: 'No independent oversight', body: "Without someone in your corner who understands both the sector and the software, there's no one to hold the vendor to account when they miss requirements or cut corners." },
        { title: 'Data not prepared', body: "Most implementation failures trace back to data quality. Clean data migration is unglamorous work that vendors underprice and businesses underestimate." },
        { title: 'Wrong software for the business model', body: "Sometimes the implementation fails because the software was the wrong choice from the start — selected on demo, not on fit." },
      ]}
      howIHelp="I come in after a failed or struggling implementation and give you an honest assessment of where it is, why it went wrong, and what the options are. Sometimes that means getting more out of the existing system. Sometimes it means a recovery plan. Sometimes it means acknowledging the sunk cost and starting over — with a proper independent brief this time. Either way, you get a clear picture and a practical path forward."
    />
  );
}
