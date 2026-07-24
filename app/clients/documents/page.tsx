import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, FileText, FileSpreadsheet, FileBarChart } from 'lucide-react'

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
  status?: string
  client_signature?: string
  client_signed_date?: string
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

function StatusBadge({ status }: { status: string }) {
  if (status === 'signed') {
    return (
      <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border bg-[#22c55e]/10 text-[#157F3C] border-[#22c55e]/20">
        Signed
      </span>
    )
  }
  return (
    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border bg-[#8ECAE6]/10 text-[#023047] border-[#8ECAE6]/30">
      Outstanding
    </span>
  )
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' })
}

const ALL_CLIENT_IDS = ['tacklebag', 'cobra-workwear', 'hanicks', 'cwear', 'scotshirts']

async function fetchHubDocs(clientId: string): Promise<HubDoc[]> {
  const hubUrl = process.env.HUB_API_URL
  if (!hubUrl) return []
  const ids = clientId === 'admin' ? ALL_CLIENT_IDS : [clientId]
  try {
    const results = await Promise.all(
      ids.map(id =>
        fetch(`${hubUrl}/api/public/client-docs?clientId=${id}`, { cache: 'no-store' })
          .then(r => r.ok ? r.json() : [])
          .catch(() => [])
      )
    )
    return results.flat().sort((a: HubDoc, b: HubDoc) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    )
  } catch {
    return []
  }
}

export default async function ClientDocumentsPage() {
  const session = await auth()
  if (!session?.user) redirect('/clients/login')

  const user = session.user as SessionUser
  const clientId = user.clientId || 'client'

  const hubDocs = await fetchHubDocs(clientId)

  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link
          href="/clients/dashboard"
          className="inline-flex items-center gap-1.5 text-sm text-[#5a7d8f] hover:text-[#023047] transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          Back to dashboard
        </Link>

        <div className="mb-10">
          <h1 className="text-3xl font-bold text-[#023047] mb-2">Document Library</h1>
          <p className="text-[#5a7d8f]">
            Documents and resources from Decoded Ops.
          </p>
        </div>

        {hubDocs.length === 0 ? (
          <div className="p-10 border border-[#d4e8f0] rounded-xl bg-white text-center">
            <FileText size={32} className="mx-auto text-[#d4e8f0] mb-3" />
            <p className="text-[#5a7d8f] text-sm">No documents available yet.</p>
          </div>
        ) : (
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
                      {doc.status && <StatusBadge status={doc.status} />}
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
                  href={`/clients/documents/view/${encodeURIComponent(doc.doc_number)}`}
                  target="_blank"
                  className="shrink-0 px-3 py-1.5 text-xs font-medium text-[#219EBC] border border-[#219EBC]/30 rounded-lg hover:bg-[#219EBC]/10 transition-colors ml-4"
                >
                  View
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
