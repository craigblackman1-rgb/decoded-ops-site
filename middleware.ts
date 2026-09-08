import NextAuth from 'next-auth'
import { authConfig } from '@/auth.config'
import { NextResponse } from 'next/server'

// Edge-safe auth instance — must NOT import from '@/auth' (it pulls in `pg`,
// a native Node module that cannot load on the Edge runtime).
const { auth } = NextAuth(authConfig)

const PRODUCTION_HOST = 'decodedops.co.uk';

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

  // Not logged in and visiting a protected client route → login
  if (!isLoggedIn && nextUrl.pathname.startsWith('/clients') && nextUrl.pathname !== '/clients/login') {
    const loginUrl = new URL('/clients/login', nextUrl.origin)
    loginUrl.searchParams.set('callbackUrl', nextUrl.pathname)
    return Response.redirect(loginUrl)
  }

  const response = NextResponse.next()

  // Block search engines on non-production hosts.
  // robots.txt prevents crawling; this header removes already-indexed pages.
  const host = req.headers.get('host') || '';
  const isProduction = host === PRODUCTION_HOST || host === `www.${PRODUCTION_HOST}`;
  if (!isProduction) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }

  return response
})

export const config = {
  matcher: [
    /*
     * Match all request paths except static files and Next.js internals.
     * The noindex header must reach every HTML page; static assets do not
     * need it and the auth checks never apply to them.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff|woff2|ttf|eot)$).*)',
  ],
}
