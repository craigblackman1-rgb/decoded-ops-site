'use client'

import { signOut } from 'next-auth/react'
import { LogOut } from 'lucide-react'

export function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/clients/login' })}
      className="flex items-center gap-2 px-4 py-2 bg-white border border-[#d4e8f0] text-[#023047] text-sm rounded-lg hover:bg-[#F8F9FA] hover:border-[#219EBC]/40 transition-colors cursor-pointer"
    >
      <LogOut size={14} />
      Sign out
    </button>
  )
}
