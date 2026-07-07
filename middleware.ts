import NextAuth from 'next-auth'
import { authConfig } from '@/auth.config'
import { NextResponse } from 'next/server'

// Edge-safe auth instance — must NOT import from '@/auth' (it pulls in `pg`,
// a native Node module that cannot load on the Edge runtime).
const { auth } = NextAuth(authConfig)

// Proposal slugs that are publicly accessible (no login required)
const PUBLIC_PROPOSALS = [
  '/clients/tacklebag',
  '/clients/tacklebag-v2',
  '/clients/cobra-workwear',
  '/clients/hanicks',
  '/clients/cwear',
  '/clients/scotshirts',
]

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth

  // Block direct access to public client-docs directory
  if (nextUrl.pathname.startsWith('/client-docs/')) {
    return Response.redirect(new URL('/clients/login', nextUrl.origin))
  }

  // /clients root — redirect logged-in to dashboard, others to login
  if (nextUrl.pathname === '/clients' || nextUrl.pathname === '/clients/') {
    if (isLoggedIn) {
      return Response.redirect(new URL('/clients/dashboard', nextUrl.origin))
    }
    return Response.redirect(new URL('/clients/login', nextUrl.origin))
  }

  // /admin/* — require admin role
  if (nextUrl.pathname.startsWith('/admin')) {
    if (!isLoggedIn) {
      const loginUrl = new URL('/clients/login', nextUrl.origin)
      loginUrl.searchParams.set('callbackUrl', nextUrl.pathname)
      return Response.redirect(loginUrl)
    }
    const user = req.auth?.user as { role?: string } | undefined
    if (user?.role !== 'admin') {
      return Response.redirect(new URL('/clients/dashboard', nextUrl.origin))
    }
  }

  // Public proposal URLs — no auth required
  if (PUBLIC_PROPOSALS.includes(nextUrl.pathname)) {
    const response = NextResponse.next()
    response.headers.set('X-Robots-Tag', 'noindex, nofollow')
    return response
  }

  // Not logged in and visiting a protected client route → login
  if (!isLoggedIn && nextUrl.pathname.startsWith('/clients') && nextUrl.pathname !== '/clients/login') {
    const loginUrl = new URL('/clients/login', nextUrl.origin)
    loginUrl.searchParams.set('callbackUrl', nextUrl.pathname)
    return Response.redirect(loginUrl)
  }

  const response = NextResponse.next()
  response.headers.set('X-Robots-Tag', 'noindex, nofollow')
  return response
})

export const config = {
  matcher: ['/clients/:path*', '/admin/:path*', '/client-docs/:path*'],
}
