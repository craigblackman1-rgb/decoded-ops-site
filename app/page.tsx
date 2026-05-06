import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="px-8 py-20 max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Decoded Ops</h1>
          <p className="text-lg text-slate-300">
            Operations & Systems Transformation for Garment Decoration & Sportswear
          </p>
        </div>

        <div className="grid gap-6 max-w-2xl mx-auto">
          <Link href="/clients">
            <div className="p-8 border border-blue-500/20 rounded-lg bg-blue-950/10 hover:bg-blue-950/20 hover:border-blue-400/40 transition-all cursor-pointer group">
              <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300">
                Client Proposals
              </h2>
              <p className="text-slate-300">
                Access gated client project proposals and documentation
              </p>
              <div className="mt-4 text-blue-400 font-medium group-hover:text-blue-300">
                View proposals →
              </div>
            </div>
          </Link>

          <Link href="/clarity">
            <div className="p-8 border border-slate-500/20 rounded-lg bg-slate-800/10 hover:bg-slate-800/20 hover:border-slate-400/40 transition-all cursor-pointer group">
              <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-slate-300">
                Services
              </h2>
              <p className="text-slate-300">
                Clarity audits, delivery, transformation, and retained advisory
              </p>
              <div className="mt-4 text-slate-400 font-medium group-hover:text-slate-300">
                Learn more →
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
