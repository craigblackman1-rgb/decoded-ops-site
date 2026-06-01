'use client'

import { signOut } from 'next-auth/react'
import { LogOut } from 'lucide-react'

export function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/clients/login' })}
      className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-slate-300 text-sm rounded-lg hover:bg-slate-700 transition-colors cursor-pointer"
    >
      <LogOut size={14} />
      Sign out
    </button>
  )
}
