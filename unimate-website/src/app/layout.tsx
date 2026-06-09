import type { Metadata } from 'next'
import { Anton } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Unimate — Where Students Meet Opportunities',
  description:
    'A community-driven platform designed for students to connect, build communities, and participate in various activities.',
  openGraph: {
    title: 'Unimate — Where Students Meet Opportunities',
    description:
      'Discover friends and communities based on your interests and hobbies.',
    url: 'https://unimate.ge',
    siteName: 'Unimate',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={anton.variable} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col antialiased" suppressHydrationWarning>
        {/* Skip-to-content for keyboard / screen-reader users */}
        <a
          href="#main-content"
          className="skip-link fixed left-4 top-4 z-[100] rounded bg-white px-4 py-2 text-sm font-bold text-brand-navy ring-2 ring-brand-magenta focus:outline-none"
        >
          Skip to main content
        </a>

        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
      </body>
    </html>
  )
}
