import { auth } from '@/auth'
import { redirect } from 'next/navigation'

export default async function ClientLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ clientId: string }>
}) {
  const session = await auth()
  if (!session) redirect('/clients/login')

  const { clientId } = await params
  if ((session.user as any).clientId !== clientId) redirect('/clients/dashboard')

  return <>{children}</>
}
