import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { getClientDocuments } from '@/data/client-documents'
import { getPublishedDocs } from '@/data/documents-store'
import { ArrowLeft, FileText, FileSpreadsheet } from 'lucide-react'

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

const docTypeIcons: Record<string, typeof FileText> = {
  proposal: FileText,
  invoice: FileSpreadsheet,
  report: FileText,
  document: FileText,
}

function IconForType(type: string) {
  const Icon = docTypeIcons[type] || FileText
  return <Icon size={16} />
}

function DocTypeBadge({ type }: { type: string }) {
  const colors: Record<string, string> = {
    proposal: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    invoice: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    report: 'bg-green-500/20 text-green-300 border-green-500/30',
    document: 'bg-slate-500/20 text-slate-300 border-slate-500/30',
  }
  return (
    <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${colors[type] || colors.document}`}>
      {type}
    </span>
  )
}

export default async function ClientDocumentsPage() {
  const session = await auth()
  if (!session?.user) redirect('/clients/login')

  const user = session.user as SessionUser
  const clientId = user.clientId || 'client'
  const clientName = clientNames[clientId] || clientId
  const isAdmin = clientId === 'admin'
  const publishedState = getPublishedDocs()

  // Get all docs for this client (or all clients for admin)
  let docs = isAdmin
    ? Object.entries(clientNames)
        .filter(([id]) => id !== 'admin')
        .flatMap(([id]) =>
          getClientDocuments(id).map((d) => ({ ...d, clientRef: clientNames[id] || id }))
        )
    : getClientDocuments(clientId)

  // Filter by published state (admin sees everything)
  if (!isAdmin) {
    const clientPublished = publishedState[clientId] || {}
    docs = docs.filter((d) => clientPublished[d.id] === true)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back link */}
        <Link
          href="/clients/dashboard"
          className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          Back to dashboard
        </Link>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-white mb-2">Document Library</h1>
          {!isAdmin && (
            <p className="text-slate-400">
              Documents for <span className="text-white">{clientName}</span>.
            </p>
          )}
          {isAdmin && (
            <p className="text-slate-400">All client documents across the portal.</p>
          )}
        </div>

        {/* Document list */}
        {docs.length === 0 ? (
          <div className="p-10 border border-slate-700/50 rounded-xl bg-slate-800/20 text-center">
            <FileText size={32} className="mx-auto text-slate-600 mb-3" />
            <p className="text-slate-400 text-sm">No documents available yet.</p>
          </div>
        ) : (
          <div className="space-y-2">
            {docs.map((doc) => (
              <div
                key={doc.id}
                className="flex items-center justify-between p-4 border border-slate-700/50 rounded-lg bg-slate-800/20 hover:bg-slate-800/40 transition-colors"
              >
                <div className="flex items-start gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-slate-700/50 flex items-center justify-center shrink-0 mt-0.5 text-slate-400">
                    {IconForType(doc.type)}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      {'clientRef' in doc && (
                        <span className="text-xs text-[#8ECAE6] font-medium">
                          {(doc as any).clientRef}
                        </span>
                      )}
                      <DocTypeBadge type={doc.type} />
                    </div>
                    <p className="text-sm font-medium text-white truncate">
                      {doc.title}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {doc.description} <span className="text-slate-600">· {doc.date}</span>
                    </p>
                  </div>
                </div>
                {doc.href ? (
                  <a
                    href={doc.href}
                    target="_blank"
                    className="shrink-0 px-3 py-1.5 text-xs font-medium text-[#219EBC] border border-[#219EBC]/30 rounded-lg hover:bg-[#219EBC]/10 transition-colors ml-4"
                  >
                    View
                  </a>
                ) : (
                  <span className="shrink-0 px-3 py-1.5 text-xs text-slate-500 ml-4">
                    Coming soon
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
