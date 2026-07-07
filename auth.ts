import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import { getDb, type DbUser } from '@/lib/supabase'
import type { Pool } from 'pg'
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

        const db = getDb()
        if (!db) {
          console.log('[authorize] db not available - check DATABASE_URL')
          return null
        }
        console.log('[authorize] db connected')

        const email = (credentials.email as string).toLowerCase().trim()
        const ipAddress = await getClientIp()

        try {
          const { rows } = await db.query<DbUser>(
            `SELECT id, email, password_hash, name, client_id, role, is_active, failed_attempts, locked_until
             FROM client_users WHERE email = $1`,
            [email]
          )
          const user = rows[0] ?? null

          if (!user) {
            console.log('[authorize] user not found')
            await logAuditEvent(db, 'login_failed', email, null, ipAddress, null, { reason: 'user_not_found' })
            return null
          }

          if (!user.is_active) {
            await logAuditEvent(db, 'login_failed', email, user.client_id, ipAddress, null, { reason: 'account_disabled' })
            return null
          }

          if (user.locked_until && new Date(user.locked_until) > new Date()) {
            await logAuditEvent(db, 'login_failed', email, user.client_id, ipAddress, null, { reason: 'account_locked' })
            return null
          }

          console.log('[authorize] user found, comparing password')
          const isValid = await bcrypt.compare(credentials.password as string, user.password_hash)
          console.log('[authorize] password valid:', isValid)

          if (!isValid) {
            const newFailedAttempts = user.failed_attempts + 1

            if (newFailedAttempts >= MAX_FAILED_ATTEMPTS) {
              const lockedUntil = new Date(Date.now() + LOCKOUT_DURATION_MINUTES * 60 * 1000)
              await db.query(
                `UPDATE client_users SET failed_attempts = $1, locked_until = $2 WHERE id = $3`,
                [newFailedAttempts, lockedUntil.toISOString(), user.id]
              )
              await logAuditEvent(db, 'account_locked', email, user.client_id, ipAddress, null, { attempts: newFailedAttempts })
            } else {
              await db.query(
                `UPDATE client_users SET failed_attempts = $1 WHERE id = $2`,
                [newFailedAttempts, user.id]
              )
            }

            await logAuditEvent(db, 'login_failed', email, user.client_id, ipAddress, null, { attempts: newFailedAttempts })
            return null
          }

          await db.query(
            `UPDATE client_users SET failed_attempts = 0, locked_until = NULL, last_login = $1 WHERE id = $2`,
            [new Date().toISOString(), user.id]
          )

          await logAuditEvent(db, 'login_success', email, user.client_id, ipAddress, null)

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
  db: Pool,
  eventType: string,
  email: string | null,
  clientId: string | null,
  ipAddress: string | null,
  _userAgent: string | null,
  details?: Record<string, unknown>
) {
  try {
    await db.query(
      `INSERT INTO auth_audit_log (event_type, email, client_id, ip_address, details) VALUES ($1, $2, $3, $4, $5)`,
      [eventType, email, clientId, ipAddress, JSON.stringify(details || {})]
    )
  } catch (error) {
    console.error('[auth audit] failed to log event:', error)
  }
}
