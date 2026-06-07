import Link from 'next/link'
import { Footer } from '@/components/layout/Footer'

export default function NotFound() {
  return (
    <div className="w-full">
    <div className="flex flex-1 flex-col items-center justify-center py-24 px-4 text-center">
      {/* Gradient number */}
      <p className="font-display text-[120px] md:text-[160px] leading-none brand-gradient-text">
        404
      </p>

      <h1 className="font-display text-3xl md:text-4xl text-black mt-2 mb-4">
        Page not found
      </h1>

      <p className="text-base font-bold text-gray-600 mb-8 max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-full brand-gradient px-8 py-3 text-base font-bold text-white hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta"
      >
        Back to Home
      </Link>
    </div>
    <Footer />
    </div>
  )
}
