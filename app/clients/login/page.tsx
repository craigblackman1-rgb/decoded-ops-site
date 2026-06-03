'use client'

import { Suspense, useState, FormEvent, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/clients/dashboard'
  const { status } = useSession()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [tooManyAttempts, setTooManyAttempts] = useState(false)

  useEffect(() => {
    if (status === 'authenticated') {
      router.push(callbackUrl)
    }
  }, [status, callbackUrl, router])

  if (status === 'loading') {
    return (
      <div className="text-center">
        <div className="text-2xl font-bold tracking-tight mb-6">
          <span className="text-[#023047]">Decoded</span><span className="text-[#FFB703]">Ops</span>
        </div>
        <p className="text-sm text-[#5a7d8f]">Loading...</p>
      </div>
    )
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    setTooManyAttempts(false)

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, callbackUrl }),
      })

      const data = await res.json()

      if (!res.ok) {
        if (res.status === 429) {
          setTooManyAttempts(true)
          setError(data.error || 'Too many attempts. Please wait before trying again.')
          setLoading(false)
          return
        }
        setError(data.error || 'Invalid email or password.')
        setLoading(false)
        return
      }

      if (data.warning) {
        setError(data.warning)
      }

      router.push(data.redirectTo)
      router.refresh()
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#F8F9FA] flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <Link href="/" className="text-2xl font-bold tracking-tight inline-block mb-6">
            <span className="text-[#023047]">Decoded</span><span className="text-[#FFB703]">Ops</span>
          </Link>
          <h1 className="text-2xl font-bold text-[#023047] mb-2">Client Portal</h1>
          <p className="text-sm text-[#5a7d8f]">Sign in to access your documents and proposals.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-xs font-medium text-[#023047] mb-1.5 uppercase tracking-wider">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.co.uk"
              required
              autoComplete="email"
              className="w-full px-4 py-3 bg-white border border-[#d4e8f0] rounded-lg text-[#023047] text-sm placeholder-[#5a7d8f] focus:outline-none focus:ring-2 focus:ring-[#219EBC] focus:border-transparent transition"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-xs font-medium text-[#023047] mb-1.5 uppercase tracking-wider">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
              required
              autoComplete="current-password"
              className="w-full px-4 py-3 bg-white border border-[#d4e8f0] rounded-lg text-[#023047] text-sm placeholder-[#5a7d8f] focus:outline-none focus:ring-2 focus:ring-[#219EBC] focus:border-transparent transition"
            />
          </div>

          {error && (
            <div className={`text-sm rounded-lg px-4 py-2.5 ${
              tooManyAttempts
                ? 'text-red-700 bg-red-50 border border-red-200'
                : 'text-[#FB8500] bg-[rgba(251,133,0,0.08)] border border-[rgba(251,133,0,0.25)]'
            }`}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full px-5 py-3 bg-[#FFB703] text-[#023047] rounded-lg hover:bg-[#FB8500] hover:text-white transition-colors text-sm font-bold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
      </div>
    </main>
  )
}

export default function ClientLoginPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-[#F8F9FA] flex items-center justify-center px-6">
          <div className="w-full max-w-sm text-center">
          <div className="text-2xl font-bold tracking-tight mb-6">
            <span className="text-[#023047]">Decoded</span><span className="text-[#FFB703]">Ops</span>
          </div>
          <p className="text-sm text-[#5a7d8f]">Loading...</p>
        </div>
      </main>
    }>
      <LoginForm />
    </Suspense>
  )
}
