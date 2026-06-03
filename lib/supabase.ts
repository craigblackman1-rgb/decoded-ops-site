import { createClient } from '@supabase/supabase-js'

let supabaseInstance: ReturnType<typeof createClient> | null = null

export function getSupabase() {
  if (supabaseInstance) return supabaseInstance

  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !key) {
    return null
  }

  supabaseInstance = createClient(url, key, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })

  return supabaseInstance
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
