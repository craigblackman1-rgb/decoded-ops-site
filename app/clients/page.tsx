import Link from 'next/link';

export const metadata = {
  title: 'Client Proposals — Decoded Ops',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ClientsPage() {
  const clients = [
    {
      id: 'tacklebag',
      name: 'TackleBag',
      description: '12-month operations transformation roadmap',
      industry: 'Garment Decoration & Screen Printing',
    },
    {
      id: 'cobra-workwear',
      name: 'Cobra Workwear',
      description: 'Operational Clarity Audit — Infrastructure, ERP, eCommerce & B2B Portal',
      industry: 'Workwear & Corporate Clothing',
    },
    {
      id: 'hanicks',
      name: 'Hanicks Ltd',
      description: 'eCommerce Operations & Technology Programme — IBasis App, ERP, Multi-Channel Automation',
      industry: 'Heating Spare Parts — eCommerce',
    },
    {
      id: 'cwear',
      name: 'Corporatewear UK (Cwear)',
      description: 'ERP Migration Discovery — Visualsoft to BlueCherry or Alternative',
      industry: 'Workwear & Corporate Clothing — Embroidery & Print',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="px-8 py-20 max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Client Proposals</h1>
          <p className="text-lg text-slate-300">
            Gated proposals and project documentation for our clients.
          </p>
        </div>

        <div className="grid gap-6">
          {clients.map((client) => (
            <Link key={client.id} href={`/clients/${client.id}`}>
              <div className="p-8 border border-blue-500/20 rounded-lg bg-blue-950/10 hover:bg-blue-950/20 hover:border-blue-400/40 transition-all cursor-pointer group">
                <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300">
                  {client.name}
                </h2>
                <p className="text-sm text-slate-400 mb-3">{client.industry}</p>
                <p className="text-base text-slate-300">{client.description}</p>
                <div className="mt-4 text-blue-400 font-medium group-hover:text-blue-300">
                  Access proposal →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
