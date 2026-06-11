import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import { getSupabase, type DbUser } from '@/lib/supabase'
import { headers } from 'next/headers'

const MAX_FAILED_ATTEMPTS = 5
const LOCKOUT_DURATION_MINUTES = 30

async function getClientIp(): Promise<string | null> {
  try {
    const hdrs = await headers()
    return hdrs.get('x-forwarded-for') || hdrs.get('x-real-ip') || hdrs.get('cf-connecting-ip') || null
  } catch {
    return null
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        console.log('[authorize] called with email:', credentials?.email)
        if (!credentials?.email || !credentials?.password) {
          console.log('[authorize] missing credentials')
          return null
        }

        const supabase = getSupabase()
        if (!supabase) {
          console.log('[authorize] supabase not available - check SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY')
          return null
        }
        console.log('[authorize] supabase connected')

        const email = (credentials.email as string).toLowerCase().trim()
        const ipAddress = await getClientIp()

        try {
          const { data: user, error } = await (supabase as any)
            .from('client_users')
            .select('id, email, password_hash, name, client_id, role, is_active, failed_attempts, locked_until')
            .eq('email', email)
            .single() as { data: DbUser | null; error: unknown }

          if (error || !user) {
            console.log('[authorize] user not found or query error:', JSON.stringify(error))
            await logAuditEvent(supabase, 'login_failed', email, null, ipAddress, null, { reason: 'user_not_found' })
            return null
          }

          if (!user.is_active) {
            await logAuditEvent(supabase, 'login_failed', email, user.client_id, ipAddress, null, { reason: 'account_disabled' })
            return null
          }

          if (user.locked_until && new Date(user.locked_until) > new Date()) {
            await logAuditEvent(supabase, 'login_failed', email, user.client_id, ipAddress, null, { reason: 'account_locked' })
            return null
          }

          console.log('[authorize] user found, comparing password')
          const isValid = await bcrypt.compare(credentials.password as string, user.password_hash)
          console.log('[authorize] password valid:', isValid)

          if (!isValid) {
            const newFailedAttempts = user.failed_attempts + 1

            if (newFailedAttempts >= MAX_FAILED_ATTEMPTS) {
              const lockedUntil = new Date(Date.now() + LOCKOUT_DURATION_MINUTES * 60 * 1000)
              await (supabase as any)
                .from('client_users')
                .update({ failed_attempts: newFailedAttempts, locked_until: lockedUntil.toISOString() })
                .eq('id', user.id)
              await logAuditEvent(supabase, 'account_locked', email, user.client_id, ipAddress, null, { attempts: newFailedAttempts })
            } else {
              await (supabase as any)
                .from('client_users')
                .update({ failed_attempts: newFailedAttempts })
                .eq('id', user.id)
            }

            await logAuditEvent(supabase, 'login_failed', email, user.client_id, ipAddress, null, { attempts: newFailedAttempts })
            return null
          }

          await (supabase as any)
            .from('client_users')
            .update({ failed_attempts: 0, locked_until: null, last_login: new Date().toISOString() })
            .eq('id', user.id)

          await logAuditEvent(supabase, 'login_success', email, user.client_id, ipAddress, null)

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            clientId: user.client_id,
            role: user.role,
          }
        } catch {
          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.clientId = (user as any).clientId
        token.role = (user as any).role
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        ;(session.user as any).clientId = token.clientId
        ;(session.user as any).role = token.role
      }
      return session
    },
  },
  pages: {
    signIn: '/clients/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 8 * 60 * 60,
  },
})

async function logAuditEvent(
  supabase: ReturnType<typeof getSupabase>,
  eventType: string,
  email: string | null,
  clientId: string | null,
  ipAddress: string | null,
  _userAgent: string | null,
  details?: Record<string, unknown>
) {
  if (!supabase) return
  try {
    await (supabase as any).from('auth_audit_log').insert({
      event_type: eventType,
      email,
      client_id: clientId,
      ip_address: ipAddress,
      details: details || {},
    })
  } catch (error) {
    console.error('[auth audit] failed to log event:', error)
  }
}
