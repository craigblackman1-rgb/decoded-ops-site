import { auth } from '@/auth'
import { NextResponse } from 'next/server'

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth

  // Already logged in — redirect to dashboard from root listing or login
  if (isLoggedIn) {
    if (nextUrl.pathname === '/clients/login' || nextUrl.pathname === '/clients' || nextUrl.pathname === '/clients/') {
      return Response.redirect(new URL('/clients/dashboard', nextUrl.origin))
    }
  }

  // Not logged in and visiting a protected route → login
  if (!isLoggedIn && nextUrl.pathname !== '/clients/login') {
    const loginUrl = new URL('/clients/login', nextUrl.origin)
    loginUrl.searchParams.set('callbackUrl', nextUrl.pathname)
    return Response.redirect(loginUrl)
  }

  return NextResponse.next()
})

export const config = {
  matcher: ['/clients/:path*'],
}
