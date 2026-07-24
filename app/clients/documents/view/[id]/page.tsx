import { auth } from '@/auth'
import { redirect, notFound } from 'next/navigation'
import Link from 'next/link'
import { SignPanel } from './SignPanel'

interface SessionUser {
  clientId?: string
  name?: string | null
}

interface HubDoc {
  id: string | number
  client_id?: string
  html_content?: string
  title?: string
  doc_number?: string
  status?: string
  client_signature?: string
  client_signed_date?: string
}

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  } catch {
    return dateStr
  }
}

export default async function DocumentViewPage({ params }: { params: Promise<{ id: string }> }) {
  const session = await auth()
  if (!session?.user) redirect('/clients/login')
  const user = session.user as SessionUser
  const { id } = await params
  const clientId = user.clientId
  const decoded = decodeURIComponent(id)

  const hubUrl = process.env.HUB_API_URL
  if (!hubUrl) return <div className="empty">Hub not configured</div>

  const res = await fetch(`${hubUrl}/api/public/client-docs/${decoded}`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    if (res.status === 404) return <div className="empty">Document not found</div>
    return <div className="empty">Failed to load document</div>
  }

  const doc: HubDoc = await res.json()

  if (!doc || !doc.html_content) return <div className="empty">Document not found</div>

  const isSigned = doc.status === 'signed'
  const clientName = session.user?.name ?? undefined

  return (
    <main style={{ minHeight: '100vh', background: '#F8F9FA', display: 'flex', flexDirection: 'column' }}>
      <div style={{
        background: '#fff',
        borderBottom: '1px solid #d4e8f0',
        padding: '12px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Link
            href="/clients/documents"
            style={{
              fontSize: 13,
              color: '#219EBC',
              textDecoration: 'none',
              fontWeight: 500,
            }}
          >
            ← Back to Documents
          </Link>
          <span style={{
            width: 1, height: 20, background: '#d4e8f0', display: 'inline-block',
          }} />
          <span style={{
            fontFamily: "'Outfit', Arial, sans-serif",
            fontSize: 15,
            fontWeight: 600,
            color: '#023047',
          }}>
            {doc.title || doc.doc_number}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {isSigned && doc.client_signature ? (
            <span style={{
              fontSize: 12,
              color: '#22c55e',
              background: 'rgba(34,197,94,.1)',
              border: '1px solid rgba(34,197,94,.2)',
              borderRadius: 999,
              padding: '3px 10px',
              fontWeight: 500,
            }}>
              Signed
            </span>
          ) : (
            <span style={{
              fontSize: 12,
              color: '#5a7d8f',
              background: 'rgba(142,202,230,.1)',
              border: '1px solid rgba(142,202,230,.3)',
              borderRadius: 999,
              padding: '3px 10px',
              fontWeight: 500,
            }}>
              Outstanding
            </span>
          )}
          <span style={{ fontSize: 13, color: '#5a7d8f' }}>
            {doc.doc_number}
          </span>
        </div>
      </div>
      <div style={{ flex: 1, position: 'relative' }}>
        <iframe
          srcDoc={doc.html_content}
          style={{ width: '100%', height: '100%', border: 'none', position: 'absolute', inset: 0 }}
          title={doc.title}
        />
      </div>

      {isSigned && doc.client_signature ? (
        <div style={{
          maxWidth: 560,
          margin: '0 auto',
          padding: '32px 24px',
        }}>
          <div style={{
            padding: '20px 24px',
            border: '1px solid #d4e8f0',
            borderRadius: 12,
            background: '#fff',
            fontSize: 13,
            color: '#023047',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#22c55e"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              style={{ flexShrink: 0 }}
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
            <span>
              Signed by <strong>{doc.client_signature}</strong>
              {doc.client_signed_date && (
                <> on {formatDate(doc.client_signed_date)}</>
              )}
            </span>
          </div>
        </div>
      ) : (
        <SignPanel docNumber={decoded} clientName={clientName} />
      )}
    </main>
  )
}
