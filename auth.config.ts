import type { NextAuthConfig } from 'next-auth'

// Edge-safe NextAuth config — no database imports. The middleware runs on the
// Edge runtime, which cannot load `pg` (native Node module), so it must only
// ever import this file. The Credentials provider (which queries Postgres)
// lives in auth.ts and is only loaded in the Node runtime.
export const authConfig = {
  trustHost: true,
  providers: [],
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
} satisfies NextAuthConfig
