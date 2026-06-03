import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { SignOutButton } from '@/components/SignOutButton'
import { FileText, ArrowRight, FileSpreadsheet, FileBarChart } from 'lucide-react'

interface SessionUser {
  name?: string | null
  email?: string | null
  image?: string | null
  clientId?: string
}

interface HubDoc {
  id: string
  doc_type: string
  doc_number: string
  title: string
  description: string | null
  html_content: string | null
  created_at: string
  updated_at: string
}

const clientNames: Record<string, string> = {
  tacklebag: 'TackleBag',
  'cobra-workwear': 'Cobra Workwear',
  hanicks: 'Hanicks Ltd',
  cwear: 'Corporatewear UK (Cwear)',
  scotshirts: 'ScotShirts',
  admin: 'Decoded Ops',
}

const docTypeIcons: Record<string, typeof FileText> = {
  proposal: FileText,
  invoice: FileSpreadsheet,
  report: FileBarChart,
  engagement_letter: FileText,
  terms: FileText,
  other: FileText,
}

function IconForType(type: string) {
  const Icon = docTypeIcons[type] || FileText
  return <Icon size={16} />
}

function DocTypeBadge({ type }: { type: string }) {
  const colors: Record<string, string> = {
    proposal: 'bg-[#219EBC]/10 text-[#023047] border-[#219EBC]/30',
    invoice: 'bg-[#FFB703]/15 text-[#023047] border-[#FFB703]/40',
    report: 'bg-[#8ECAE6]/15 text-[#023047] border-[#8ECAE6]/30',
    engagement_letter: 'bg-[#5a7d8f]/10 text-[#023047] border-[#5a7d8f]/30',
    terms: 'bg-[#5a7d8f]/10 text-[#023047] border-[#5a7d8f]/30',
    other: 'bg-[#5a7d8f]/10 text-[#023047] border-[#5a7d8f]/30',
  }
  return (
    <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${colors[type] || colors.other}`}>
      {type.replace('_', ' ')}
    </span>
  )
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' })
}

async function fetchHubDocs(clientId: string): Promise<HubDoc[]> {
  const hubUrl = process.env.HUB_API_URL
  if (!hubUrl) return []
  try {
    const res = await fetch(`${hubUrl}/api/public/client-docs?clientId=${clientId}`, {
      next: { revalidate: 60 },
    })
    if (res.ok) return await res.json()
    return []
  } catch {
    return []
  }
}

export default async function ClientDashboardPage() {
  const session = await auth()
  if (!session?.user) redirect('/clients/login')

  const user = session.user as SessionUser
  const clientId = user.clientId || 'client'
  const clientName = clientNames[clientId] || clientId
  const isAdmin = clientId === 'admin'

  const hubDocs = await fetchHubDocs(clientId)

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
              Browse all documents, proposals, invoices and reports.
            </p>
            <span className="text-sm text-[#219EBC] font-medium group-hover:text-[#023047] flex items-center gap-1">
              Browse documents <ArrowRight size={14} />
            </span>
          </Link>

          <div className="p-6 border border-[#d4e8f0] rounded-xl bg-white">
            <h2 className="text-sm font-semibold text-[#5a7d8f] uppercase tracking-wider mb-3">
              Documents ({hubDocs.length})
            </h2>
            <p className="text-sm text-[#5a7d8f] mb-3">
              {hubDocs.length > 0
                ? `${hubDocs.length} document${hubDocs.length > 1 ? 's' : ''} published from Decoded Ops.`
                : 'No documents published yet.'}
            </p>
            <Link
              href="/clients/documents"
              className="text-sm text-[#219EBC] font-medium hover:text-[#023047] flex items-center gap-1 transition-colors"
            >
              View all <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Published documents from Hub */}
        {hubDocs.length > 0 && (
          <div className="mb-10">
            <h2 className="text-sm font-semibold text-[#5a7d8f] uppercase tracking-wider mb-4">
              Published Documents
            </h2>
            <div className="space-y-2">
              {hubDocs.map((doc) => (
                <div
                  key={doc.id}
                  className="flex items-center justify-between p-4 border border-[#d4e8f0] rounded-lg bg-white hover:border-[#219EBC]/40 hover:shadow-[var(--do-shadow-sm)] transition-colors"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-[#F8F9FA] border border-[#d4e8f0] flex items-center justify-center shrink-0 mt-0.5 text-[#5a7d8f]">
                      {IconForType(doc.doc_type)}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <DocTypeBadge type={doc.doc_type} />
                        <span className="text-[10px] font-mono text-[#d4e8f0]">{doc.doc_number}</span>
                      </div>
                      <p className="text-sm font-medium text-[#023047] truncate">
                        {doc.title}
                      </p>
                      <p className="text-xs text-[#5a7d8f] mt-0.5">
                        Published {formatDate(doc.created_at)}
                        {doc.updated_at !== doc.created_at && (
                          <span className="text-[#d4e8f0]"> · Updated {formatDate(doc.updated_at)}</span>
                        )}
                      </p>
                    </div>
                  </div>
                  <a
                    href={`/clients/documents/view/${doc.id}`}
                    target="_blank"
                    className="shrink-0 px-3 py-1.5 text-xs font-medium text-[#219EBC] border border-[#219EBC]/30 rounded-lg hover:bg-[#219EBC]/10 transition-colors ml-4"
                  >
                    View
                  </a>
                </div>
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
                Document publishing managed via Hub
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
