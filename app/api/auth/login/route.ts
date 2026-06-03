import { NextRequest, NextResponse } from 'next/server'
import { signIn } from '@/auth'
import { loginRatelimit } from '@/lib/rate-limit'

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown'

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
      redirectTo: callbackUrl || '/clients/dashboard',
    })
  } catch {
    return NextResponse.json(
      { error: 'Authentication service unavailable. Please try again.' },
      { status: 503 }
    )
  }
}
