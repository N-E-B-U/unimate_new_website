import Link from 'next/link'
import { NAV_LINKS } from '@/lib/constants'
import { HamburgerMenu } from './HamburgerMenu'
import { LogoLink } from './LogoLink'

export function Header() {
  return (
    <header className="sticky top-0 z-30 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <LogoLink />

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-bold text-black hover:text-brand-magenta transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta rounded"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger (Client Component) */}
        <HamburgerMenu />
      </div>
    </header>
  )
}
