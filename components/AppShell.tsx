'use client';

import { usePathname } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideShell = pathname === '/skills-system';

  return (
    <>
      {!hideShell && <Header />}
      {children}
      {!hideShell && <Footer />}
    </>
  );
}
