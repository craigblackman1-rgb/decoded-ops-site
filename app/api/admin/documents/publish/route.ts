import { NextResponse } from 'next/server'
import { auth } from '@/auth'
import { setPublished } from '@/data/documents-store'

export async function POST(req: Request) {
  const session = await auth()
  const user = session?.user as { clientId?: string } | undefined
  if (user?.clientId !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { clientId, docId, published } = await req.json()
  if (!clientId || !docId || typeof published !== 'boolean') {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
  }

  setPublished(clientId, docId, published)
  return NextResponse.json({ success: true })
}
