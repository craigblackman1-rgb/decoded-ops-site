import { auth } from '@/auth'
import { redirect, notFound } from 'next/navigation'
import Link from 'next/link'

interface SessionUser {
  clientId?: string
}

interface HubDoc {
  id: string | number
  client_id?: string
  html_content?: string
  title?: string
  doc_number?: string
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
        <div style={{ fontSize: 13, color: '#5a7d8f' }}>
          {doc.doc_number}
        </div>
      </div>
      <div style={{ flex: 1, position: 'relative' }}>
        <iframe
          srcDoc={doc.html_content}
          sandbox=""
          style={{ width: '100%', height: '100%', border: 'none', position: 'absolute', inset: 0 }}
          title={doc.title}
        />
      </div>
    </main>
  )
}
