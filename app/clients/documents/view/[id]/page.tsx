import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { SignPanel } from './SignPanel'
import { QuestionnaireForm } from './QuestionnaireForm'
import { hubFetch } from '@/lib/hub-fetch'

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
  doc_type?: string
  description?: string | null
  status?: string
  client_signature?: string
  client_signed_date?: string
  signable?: boolean
}

const ALL_CLIENT_IDS = ['tacklebag', 'cobra-workwear', 'hanicks', 'cwear', 'scotshirts', 'key-supplies', 'david-sharp']

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

  // The hub's single-doc route requires a per-document access_token (added for
  // secure public sharing, hub commit 903097a) which the portal never holds.
  // The list route is scoped to the signed-in client, so fetch that and find the
  // document by number instead. This also enforces that a client can only view
  // their own published documents.
  const ids = clientId === 'admin' ? ALL_CLIENT_IDS : [clientId]
  const lists = await Promise.all(
    ids.map(id =>
      hubFetch(`${hubUrl}/api/public/client-docs?clientId=${id}`, { cache: 'no-store' })
        .then(r => {
          if (!r.ok) { console.error(`[hub] ${r.status} fetching docs for ${id}`); return []; }
          return r.json();
        })
        .catch(() => [])
    )
  )
  const docs: HubDoc[] = lists.flat()

  const doc = docs.find(d => d.doc_number === decoded)

  if (!doc) return <div className="empty">Document not found</div>
  if (doc.doc_type !== 'questionnaire' && !doc.html_content) return <div className="empty">Document not found</div>

  // Signing is only wired up for quotes and contracts; the hub marks those
  // `signable`. Anything else (meeting notes, invoices, terms uploaded as plain
  // documents) has no sign endpoint behind it, so it gets no panel and no
  // signed/outstanding badge. Absent field means not signable.
  const isSignable = doc.signable === true
  const isSigned = isSignable && doc.status === 'signed'
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
          {!isSignable ? null : isSigned && doc.client_signature ? (
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
      {doc.doc_type === 'questionnaire' ? (
        <QuestionnaireForm docNumber={decoded} title={doc.title} />
      ) : (
        <>
          <div
            style={{
              flex: 1,
              position: 'relative',
              minHeight: isSignable ? 'min(80vh, 760px)' : undefined,
            }}
          >
            <iframe
              srcDoc={doc.html_content}
              style={{ width: '100%', height: '100%', border: 'none', position: 'absolute', inset: 0 }}
              title={doc.title}
            />
          </div>

          {!isSignable ? null : isSigned && doc.client_signature ? (
            <div style={{ padding: '0 24px 16px' }}>
              <div style={{
                padding: '10px 16px',
                border: '1px solid #d4e8f0',
                borderRadius: 8,
                background: '#fff',
                fontSize: 13,
                color: '#023047',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
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
        </>
      )}
    </main>
  )
}
