import { NextRequest, NextResponse } from 'next/server'
import { AuthError } from 'next-auth'
import { signIn } from '@/auth'
import { loginRatelimit } from '@/lib/rate-limit'

function sanitiseCallbackUrl(url: string | undefined): string {
  if (!url) return '/clients/dashboard'
  if (url.startsWith('/') && !url.startsWith('//')) return url
  return '/clients/dashboard'
}

export async function POST(req: NextRequest) {
  const origin = req.headers.get('origin')
  const host = req.headers.get('host')
  if (origin && host) {
    try {
      const expectedOrigin = `https://${host}`
      if (origin !== expectedOrigin && origin !== `http://${host}`) {
        return NextResponse.json({ error: 'Invalid request origin.' }, { status: 403 })
      }
    } catch {
      return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
    }
  }

  const contentType = req.headers.get('content-type') || ''
  if (!contentType.includes('application/json')) {
    return NextResponse.json({ error: 'Invalid content type.' }, { status: 415 })
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || req.headers.get('cf-connecting-ip') || req.headers.get('x-real-ip') || 'unknown'

  const rateLimiter = loginRatelimit()
  if (rateLimiter) {
    const { success, remaining } = await rateLimiter.limit(ip)
    if (!success) {
      return NextResponse.json(
        { error: 'Too many login attempts. Please wait 15 minutes and try again.' },
        { status: 429 }
      )
    }
    if (remaining <= 1) {
      return NextResponse.json(
        { warning: 'Only 1 login attempt remaining before temporary lockout.' },
        { status: 200 }
      )
    }
  }

  try {
    const { email, password, callbackUrl } = await req.json()

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required.' }, { status: 400 })
    }

    if (typeof email !== 'string' || typeof password !== 'string') {
      return NextResponse.json({ error: 'Invalid input format.' }, { status: 400 })
    }

    if (email.length > 320 || password.length > 128) {
      return NextResponse.json({ error: 'Input too long.' }, { status: 400 })
    }

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    if (result?.error) {
      return NextResponse.json({ error: 'Invalid email or password.' }, { status: 401 })
    }

    return NextResponse.json({
      ok: true,
      redirectTo: sanitiseCallbackUrl(callbackUrl),
    })
  } catch (error) {
    if (error instanceof AuthError) {
      return NextResponse.json({ error: 'Invalid email or password.' }, { status: 401 })
    }
    console.error('[login] unexpected error:', error)
    return NextResponse.json(
      { error: 'Authentication service unavailable. Please try again.' },
      { status: 503 }
    )
  }
}
