'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function LogoLink() {
  const pathname = usePathname()

  function handleClick(e: React.MouseEvent) {
    if (pathname === '/') {
      e.preventDefault()
      document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Link
      href="/"
      aria-label="Unimate — go to homepage"
      className="flex items-center gap-2 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta rounded"
      onClick={handleClick}
    >
      <Image
        src="/logo/unimate-full.png"
        alt="Unimate — Where Students Meet Opportunities"
        width={200}
        height={60}
        className="h-14 w-auto object-contain"
        priority
      />
    </Link>
  )
}
