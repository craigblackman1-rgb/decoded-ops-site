'use client'

import { Suspense, useState, FormEvent, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { signIn, useSession } from 'next-auth/react'
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

  useEffect(() => {
    if (status === 'authenticated') {
      router.push(callbackUrl)
    }
  }, [status, callbackUrl, router])

  if (status === 'loading') {
    return (
      <div className="text-center">
        <div className="text-2xl font-bold tracking-tight mb-6">
          <span className="text-white">Decoded</span><span className="text-[#FFB703]">Ops</span>
        </div>
        <p className="text-sm text-slate-400">Loading...</p>
      </div>
    )
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        setError('Invalid email or password.')
        setLoading(false)
        return
      }

      router.push(callbackUrl)
      router.refresh()
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <Link href="/" className="text-2xl font-bold tracking-tight inline-block mb-6">
            <span className="text-white">Decoded</span><span className="text-[#FFB703]">Ops</span>
          </Link>
          <h1 className="text-2xl font-bold text-white mb-2">Client Portal</h1>
          <p className="text-sm text-slate-400">Sign in to access your documents and proposals.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5 uppercase tracking-wider">
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
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#219EBC] focus:border-transparent transition"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-xs font-medium text-slate-300 mb-1.5 uppercase tracking-wider">
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
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#219EBC] focus:border-transparent transition"
            />
          </div>

          {error && (
            <div className="text-sm text-[#FB8500] bg-[rgba(251,133,0,0.1)] border border-[rgba(251,133,0,0.3)] rounded-lg px-4 py-2.5">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full px-5 py-3 bg-[#FFB703] text-[#023047] rounded-lg hover:bg-[#FB8500] transition-colors text-sm font-bold disabled:opacity-50 disabled:cursor-not-allowed"
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
      <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 flex items-center justify-center px-6">
          <div className="w-full max-w-sm text-center">
          <div className="text-2xl font-bold tracking-tight mb-6">
            <span className="text-white">Decoded</span><span className="text-[#FFB703]">Ops</span>
          </div>
          <p className="text-sm text-slate-400">Loading...</p>
        </div>
      </main>
    }>
      <LoginForm />
    </Suspense>
  )
}
