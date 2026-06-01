import { getPublishedDocs } from '@/data/documents-store'
import AdminDocumentsContent from './AdminDocumentsContent'

export const dynamic = 'force-dynamic'

export default function AdminDocumentsPage() {
  const initialPublished = getPublishedDocs()
  return <AdminDocumentsContent initialPublished={initialPublished} />
}
