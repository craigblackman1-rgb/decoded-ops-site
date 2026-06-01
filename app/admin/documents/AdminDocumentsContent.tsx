'use client'

import { useState } from 'react'
import Link from 'next/link'
import { getClientDocuments } from '@/data/client-documents'
import { PublishedDocs } from '@/data/documents-store'
import { ArrowLeft, FileText, FileSpreadsheet, Eye } from 'lucide-react'

const clientNames: Record<string, string> = {
  tacklebag: 'TackleBag',
  'cobra-workwear': 'Cobra Workwear',
  hanicks: 'Hanicks Ltd',
  cwear: 'Corporatewear UK (Cwear)',
  scotshirts: 'ScotShirts',
}

const docTypeIcons: Record<string, typeof FileText> = {
  proposal: FileText,
  invoice: FileSpreadsheet,
  report: FileText,
  document: FileText,
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

function IconForType(type: string) {
  const Icon = docTypeIcons[type] || FileText
  return <Icon size={16} />
}

export default function AdminDocumentsContent({ initialPublished }: { initialPublished: PublishedDocs }) {
  const [published, setPublished] = useState<PublishedDocs>(initialPublished)
  const [loading, setLoading] = useState<string | null>(null)

  const clients = Object.keys(clientNames)

  async function toggleDoc(clientId: string, docId: string, current: boolean) {
    setLoading(`${clientId}-${docId}`)
    try {
      const res = await fetch('/api/admin/documents/publish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ clientId, docId, published: !current }),
      })
      if (res.ok) {
        setPublished((prev) => ({
          ...prev,
          [clientId]: { ...prev[clientId], [docId]: !current },
        }))
      }
    } finally {
      setLoading(null)
    }
  }

  const totalPublished = Object.values(published).reduce(
    (sum, client) => sum + Object.values(client).filter(Boolean).length, 0
  )

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <Link
              href="/clients/dashboard"
              className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors mb-4"
            >
              <ArrowLeft size={14} />
              Back to hub
            </Link>
            <h1 className="text-3xl font-bold text-white mb-1">Document Publisher</h1>
            <p className="text-slate-400 text-sm">
              Tick a document to publish it to the client portal. Untick to remove it from view.
            </p>
          </div>
          <div className="text-xs text-slate-500 bg-slate-800/40 px-3 py-1.5 rounded-lg border border-slate-700/50">
            {totalPublished} published
          </div>
        </div>

        {/* Clients */}
        <div className="space-y-8">
          {clients.map((clientId) => {
            const docs = getClientDocuments(clientId)
            if (docs.length === 0) return null

            return (
              <div key={clientId} className="border border-slate-700/50 rounded-xl bg-slate-800/20 overflow-hidden">
                {/* Client header */}
                <div className="px-6 py-4 bg-slate-800/40 border-b border-slate-700/50">
                  <h2 className="text-lg font-bold text-white">{clientNames[clientId]}</h2>
                </div>

                {/* Document rows */}
                <div className="divide-y divide-slate-700/30">
                  {docs.map((doc) => {
                    const isPublished = published[clientId]?.[doc.id] ?? false
                    const isLoading = loading === `${clientId}-${doc.id}`

                    return (
                      <div key={doc.id} className="flex items-center gap-4 px-6 py-4 hover:bg-slate-800/30 transition-colors">
                        {/* Toggle */}
                        <label className="relative inline-flex items-center cursor-pointer shrink-0">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={isPublished}
                            onChange={() => toggleDoc(clientId, doc.id, isPublished)}
                            disabled={isLoading}
                          />
                          <div className="w-9 h-5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#219EBC]"></div>
                        </label>

                        {/* Doc info */}
                        <div className="flex items-start gap-3 min-w-0 flex-1">
                          <div className="w-8 h-8 rounded-lg bg-slate-700/50 flex items-center justify-center shrink-0 mt-0.5 text-slate-400">
                            {IconForType(doc.type)}
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 flex-wrap mb-1">
                              <DocTypeBadge type={doc.type} />
                              {isPublished && (
                                <span className="text-[10px] font-semibold uppercase tracking-wider text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/30">
                                  Published
                                </span>
                              )}
                            </div>
                            <p className="text-sm font-medium text-white truncate">
                              {doc.title}
                            </p>
                            <p className="text-xs text-slate-500 mt-0.5">
                              {doc.description} <span className="text-slate-600">· {doc.date}</span>
                            </p>
                          </div>
                        </div>

                        {/* View link */}
                        {doc.href && (
                          <a
                            href={doc.href}
                            target="_blank"
                            className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#8ECAE6] border border-[#8ECAE6]/20 rounded-lg hover:bg-[#8ECAE6]/10 transition-colors"
                          >
                            <Eye size={13} />
                            View
                          </a>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
