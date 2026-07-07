import { Pool } from 'pg'

let poolInstance: Pool | null = null

export function getDb() {
  if (poolInstance) return poolInstance

  const connectionString = process.env.DATABASE_URL

  if (!connectionString) {
    return null
  }

  poolInstance = new Pool({
    connectionString,
    ssl: { rejectUnauthorized: false },
  })

  return poolInstance
}

export type DbUser = {
  id: string
  email: string
  password_hash: string
  name: string
  client_id: string
  role: 'admin' | 'client'
  is_active: boolean
  failed_attempts: number
  locked_until: string | null
  last_login: string | null
  created_at: string
  updated_at: string
}

export type AuthAuditEvent = {
  id: string
  event_type: string
  email: string | null
  client_id: string | null
  ip_address: string | null
  user_agent: string | null
  details: Record<string, unknown> | null
  created_at: string
}
