import { ProblemPage } from '@/components/ProblemPage';

export default function SystemsDontTalkPage() {
  return (
    <ProblemPage
      problem="Systems don't talk to each other"
      headline="You have five systems. ||None of them know what the others are doing.||"
      intro="The average decoration or print business has between four and seven separate software systems. Order management, ERP, accounts, artwork, eCommerce, despatch. Each one is an island. The bridges between them are people, spreadsheets, and emails."
      symptoms={[
        'Data is being entered manually into more than one system',
        'You can\'t get a complete picture of an order without checking multiple places',
        'Reporting requires someone to pull data from several systems and combine it',
        'Mistakes happen when data is transferred between systems',
        'Different departments are working from different versions of the same information',
        'You\'ve normalised a level of administrative overhead that shouldn\'t exist',
        'Every time you add a system, the administration gets worse not better',
      ]}
      causes={[
        {
          title: 'Systems selected in isolation',
          body: 'Each system was chosen to solve a specific problem — without asking how it would connect to everything else. The integration question was deferred and never properly answered.',
        },
        {
          title: 'No integration architecture',
          body: 'Without a view of the whole technology ecosystem, you can\'t make good decisions about individual components. Systems accumulate. Complexity compounds.',
        },
        {
          title: 'Vendor lock-in and API limitations',
          body: 'Some systems in this sector have limited or proprietary APIs that make integration technically difficult or commercially prohibitive. That constraint is rarely disclosed at the point of sale.',
        },
        {
          title: 'The cost of the workaround is invisible',
          body: 'The cost of manual data re-entry, reporting overhead, and error correction doesn\'t appear on any invoice. It\'s buried in staff time that gets attributed to everything except the real cause.',
        },
      ]}
      howIHelp="I map your entire technology ecosystem — every system, every data flow, every manual bridge — and give you a clear view of what it\'s actually costing you. Then I give you independent options: integration where it\'s practical, consolidation where it makes more sense, and replacement where the current stack is the problem. No vendor relationships. No preferred solutions. Just a clear picture and a practical path forward."
    />
  );
}
