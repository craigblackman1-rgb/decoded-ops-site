import { auth } from '@/auth'
import { NextResponse } from 'next/server'

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth

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
