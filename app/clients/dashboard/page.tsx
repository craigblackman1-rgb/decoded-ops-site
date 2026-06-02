import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { SignOutButton } from '@/components/SignOutButton'
import { FileText, ArrowRight } from 'lucide-react'

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
    { label: 'Operational Systems Proposal — Scotshirts', href: '/clients/scotshirts' },
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
  const proposals = proposalLinks[clientId] || []
  const isAdmin = clientId === 'admin'

  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <Link href="/" className="text-lg font-bold tracking-tight">
              <span className="text-[#023047]">Decoded</span><span className="text-[#FFB703]">Ops</span>
            </Link>
          </div>
          <SignOutButton />
        </div>

        {/* Welcome */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-[#023047] mb-2">
            Welcome, {user.name || 'Client'}
          </h1>
          <p className="text-[#5a7d8f]">
            {clientName} portal — documents, proposals, and project resources.
          </p>
        </div>

        {/* Quick links */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          <Link
            href="/clients/documents"
            className="p-6 border border-[#d4e8f0] rounded-xl bg-white hover:border-[#219EBC]/40 hover:shadow-[var(--do-shadow-md)] transition-all group"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-[#219EBC]/10 flex items-center justify-center">
                <FileText size={20} className="text-[#219EBC]" />
              </div>
              <h2 className="text-lg font-bold text-[#023047] group-hover:text-[#219EBC] transition-colors">
                Document Library
              </h2>
            </div>
            <p className="text-sm text-[#5a7d8f] mb-3">
              Access proposals, invoices, reports and project documents.
            </p>
            <span className="text-sm text-[#219EBC] font-medium group-hover:text-[#023047] flex items-center gap-1">
              Browse documents <ArrowRight size={14} />
            </span>
          </Link>

          <Link
            href="/clients/documents"
            className="p-6 border border-[#d4e8f0] rounded-xl bg-white hover:border-[#219EBC]/40 hover:shadow-[var(--do-shadow-md)] transition-all group"
          >
            <h2 className="text-sm font-semibold text-[#5a7d8f] uppercase tracking-wider mb-3">
              Recent Documents
            </h2>
            <p className="text-sm text-[#5a7d8f] mb-3">
              View and download proposals, invoices, reports and project documents.
            </p>
            <span className="text-sm text-[#219EBC] font-medium group-hover:text-[#023047] flex items-center gap-1">
              Browse all documents <ArrowRight size={14} />
            </span>
          </Link>
        </div>

        {/* Proposals */}
        {proposals.length > 0 && (
          <div className="mb-10">
            <h2 className="text-sm font-semibold text-[#5a7d8f] uppercase tracking-wider mb-4">
              Proposals
            </h2>
            <div className="space-y-3">
              {proposals.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="block p-5 border border-[#d4e8f0] rounded-lg bg-white hover:border-[#219EBC]/40 hover:shadow-[var(--do-shadow-sm)] transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[#023047] font-medium group-hover:text-[#219EBC] transition-colors">
                      {p.label}
                    </span>
                    <ArrowRight size={16} className="text-[#d4e8f0] group-hover:text-[#219EBC] transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Admin overview */}
        {isAdmin && (
          <div className="border-t border-[#d4e8f0] pt-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-[#5a7d8f] uppercase tracking-wider">
                Admin
              </h2>
              <span className="text-xs text-[#5a7d8f]">
                Document publishing moved to Hub
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {Object.entries(clientNames)
                .filter(([id]) => id !== 'admin')
                .map(([id, name]) => (
                  <Link
                    key={id}
                    href={`/clients/${id}`}
                    className="p-4 border border-[#d4e8f0] rounded-lg bg-white hover:border-[#219EBC]/40 hover:shadow-[var(--do-shadow-sm)] transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[#023047] font-medium text-sm">{name}</span>
                      <ArrowRight size={14} className="text-[#d4e8f0]" />
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
