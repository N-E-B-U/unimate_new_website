'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { NAV_LINKS } from '@/lib/constants'

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  // Close on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      {/* Hamburger button — visible only on mobile */}
      <button
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
        onClick={() => setIsOpen((v) => !v)}
        className="flex md:hidden flex-col justify-center items-center w-10 h-10 gap-[6px] rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta"
      >
        <span
          className={`block h-0.5 w-6 bg-black transition-all duration-300 origin-center ${
            isOpen ? 'translate-y-[8px] rotate-45' : ''
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
            isOpen ? 'opacity-0 scale-x-0' : ''
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-black transition-all duration-300 origin-center ${
            isOpen ? '-translate-y-[8px] -rotate-45' : ''
          }`}
        />
      </button>

      {/* Mobile drawer overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          aria-hidden="true"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile nav drawer */}
      <nav
        id="mobile-nav"
        aria-label="Mobile navigation"
        className={`fixed inset-y-0 right-0 z-50 w-72 bg-white shadow-2xl flex flex-col pt-20 px-8 gap-2 transition-transform duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="block py-3 text-lg font-bold border-b border-gray-100 text-black hover:text-brand-magenta transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </>
  )
}
