'use client'

import { signOut } from 'next-auth/react'
import { LogOut } from 'lucide-react'

export function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/clients/login' })}
      className="flex items-center gap-2 px-4 py-2 bg-white border border-[#d4e8f0] text-prussian-blue text-sm rounded-lg hover:bg-off-white hover:border-cerulean/40 transition-colors cursor-pointer"
    >
      <LogOut size={14} />
      Sign out
    </button>
  )
}
