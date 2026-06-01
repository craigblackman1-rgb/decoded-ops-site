import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        try {
          const usersJson = process.env.CLIENT_USERS
          if (!usersJson) return null

          const users: { email: string; passwordHash: string; name: string; clientId: string }[] = JSON.parse(usersJson)
          const user = users.find((u) => u.email === credentials.email)

          if (!user) return null

          const isValid = await bcrypt.compare(credentials.password as string, user.passwordHash)
          if (!isValid) return null

          return {
            id: user.email,
            email: user.email,
            name: user.name,
            clientId: user.clientId,
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
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        ;(session.user as any).clientId = token.clientId
      }
      return session
    },
  },
  pages: {
    signIn: '/clients/login',
  },
  session: {
    strategy: 'jwt',
  },
  trustHost: true,
})
