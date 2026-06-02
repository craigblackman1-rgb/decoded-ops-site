import { auth } from '@/auth'
import { redirect } from 'next/navigation'

interface SessionUser {
  clientId?: string
}

export default async function DocumentViewPage({ params }: { params: Promise<{ id: string }> }) {
  const session = await auth()
  if (!session?.user) redirect('/clients/login')
  const user = session.user as SessionUser
  const { id } = await params
  const clientId = user.clientId

  const hubUrl = process.env.HUB_API_URL
  if (!hubUrl) return <div className="empty">Hub not configured</div>

  const res = await fetch(`${hubUrl}/api/public/client-docs?clientId=${clientId}`, {
    next: { revalidate: 60 },
  })

  if (!res.ok) return <div className="empty">Document not found</div>

  const docs = await res.json()
  const doc = docs.find((d: any) => d.id === id)

  if (!doc || !doc.html_content) return <div className="empty">Document not found</div>

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'auto' }}>
      <iframe
        srcDoc={doc.html_content}
        style={{ width: '100%', height: '100%', border: 'none' }}
        title={doc.title}
      />
    </div>
  )
}
