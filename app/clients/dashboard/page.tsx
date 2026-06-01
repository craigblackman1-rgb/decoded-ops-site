import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { getClientDocuments } from '@/data/client-documents'
import { SignOutButton } from '@/components/SignOutButton'
import { FileText, FileCheck, ArrowRight } from 'lucide-react'

interface SessionUser {
  name?: string | null
  email?: string | null
  image?: string | null
  clientId?: string
}

const clientNames: Record<string, string> = {
  tacklebag: 'TackleBag',
  'cobra-workwear': 'Cobra Workwear',
  hanicks: 'Hanicks Ltd',
  cwear: 'Corporatewear UK (Cwear)',
  scotshirts: 'ScotShirts',
  admin: 'Decoded Ops',
}

const proposalLinks: Record<string, { label: string; href: string }[]> = {
  tacklebag: [
    { label: 'Operations Transformation Proposal', href: '/clients/tacklebag' },
    { label: 'Data App Follow-On', href: '/clients/tacklebag-v2' },
  ],
  'cobra-workwear': [
    { label: 'Operational Clarity Proposal', href: '/clients/cobra-workwear' },
  ],
  hanicks: [
    { label: 'eCommerce Ops Programme Proposal', href: '/clients/hanicks' },
  ],
  cwear: [
    { label: 'ERP Migration Discovery Proposal', href: '/clients/cwear' },
  ],
  scotshirts: [
    { label: 'Proposal', href: '/clients/scotshirts' },
  ],
  admin: [
    { label: 'TackleBag', href: '/clients/tacklebag' },
    { label: 'Cobra Workwear', href: '/clients/cobra-workwear' },
    { label: 'Hanicks Ltd', href: '/clients/hanicks' },
    { label: 'Corporatewear UK', href: '/clients/cwear' },
    { label: 'ScotShirts', href: '/clients/scotshirts' },
  ],
}

export default async function ClientDashboardPage() {
  const session = await auth()
  if (!session?.user) redirect('/clients/login')

  const user = session.user as SessionUser
  const clientId = user.clientId || 'client'
  const clientName = clientNames[clientId] || clientId
  const docs = getClientDocuments(clientId)
  const proposals = proposalLinks[clientId] || []
  const isAdmin = clientId === 'admin'

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <Link href="/" className="text-lg font-bold tracking-tight">
              <span className="text-white">Decoded</span><span className="text-[#FFB703]">Ops</span>
            </Link>
          </div>
          <SignOutButton />
        </div>

        {/* Welcome */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome, {user.name || 'Client'}
          </h1>
          <p className="text-slate-400">
            {clientName} portal — documents, proposals, and project resources.
          </p>
        </div>

        {/* Quick links */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          <Link
            href="/clients/documents"
            className="p-6 border border-blue-500/20 rounded-xl bg-blue-950/10 hover:bg-blue-950/20 hover:border-blue-400/40 transition-all group"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-[#219EBC]/20 flex items-center justify-center">
                <FileText size={20} className="text-[#219EBC]" />
              </div>
              <h2 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                Document Library
              </h2>
            </div>
            <p className="text-sm text-slate-400 mb-3">
              Access proposals, invoices, reports and project documents.
            </p>
            <span className="text-sm text-[#219EBC] font-medium group-hover:text-blue-300 flex items-center gap-1">
              Browse documents <ArrowRight size={14} />
            </span>
          </Link>

          <div className="p-6 border border-slate-700/50 rounded-xl bg-slate-800/20">
            <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3">
              Recent Activity
            </h2>
            {docs.length > 0 ? (
              <ul className="space-y-2">
                {docs.slice(0, 3).map((doc) => (
                  <li key={doc.id} className="text-sm text-slate-400 flex items-start gap-2">
                    <FileCheck size={14} className="mt-0.5 shrink-0 text-[#219EBC]" />
                    <span>{doc.title} <span className="text-slate-500">— {doc.date}</span></span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-slate-500">No documents yet.</p>
            )}
          </div>
        </div>

        {/* Proposals */}
        {proposals.length > 0 && (
          <div className="mb-10">
            <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Proposals
            </h2>
            <div className="space-y-3">
              {proposals.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="block p-5 border border-blue-500/20 rounded-lg bg-blue-950/10 hover:bg-blue-950/20 hover:border-blue-400/40 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium group-hover:text-blue-300 transition-colors">
                      {p.label}
                    </span>
                    <ArrowRight size={16} className="text-slate-500 group-hover:text-[#219EBC] transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Admin overview */}
        {isAdmin && (
          <div className="border-t border-slate-700/50 pt-8">
            <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
              All Clients
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {Object.entries(clientNames)
                .filter(([id]) => id !== 'admin')
                .map(([id, name]) => (
                  <Link
                    key={id}
                    href={`/clients/${id}`}
                    className="p-4 border border-slate-700/50 rounded-lg bg-slate-800/20 hover:bg-slate-800/40 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium text-sm">{name}</span>
                      <ArrowRight size={14} className="text-slate-500" />
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
