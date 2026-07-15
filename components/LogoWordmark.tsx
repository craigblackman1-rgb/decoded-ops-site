import Link from 'next/link';

interface LogoWordmarkProps {
  variant?: 'header' | 'footer';
  className?: string;
}

export function LogoWordmark({ variant = 'header', className = '' }: LogoWordmarkProps) {
  const isFooter = variant === 'footer';
  const decodedColor = isFooter ? 'text-white' : 'text-[#023047]';
  const opsColor = isFooter ? 'text-[#FFB703]' : 'text-[#219EBC]';

  return (
    <Link
      href="/"
      className={`text-2xl font-bold inline-flex ${className}`}
      style={{ fontFamily: 'var(--font-outfit)', fontWeight: 800, letterSpacing: '-0.01em' }}
      aria-label="Decoded Ops — home"
    >
      <span className={decodedColor}>Decoded</span>
      <span className={opsColor}>Ops</span>
    </Link>
  );
}
