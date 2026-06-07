import type { Metadata } from 'next'
import { ContactForm } from '@/components/ui/ContactForm'
import { SUPPORT_EMAIL } from '@/lib/constants'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Contact Us — Unimate',
  description: "Get in touch with the Unimate team. We'd love to hear from you.",
}

// Social platform icon components
function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}
function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}
function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
    </svg>
  )
}
function TikTokIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  )
}

const SOCIAL = [
  { label: 'Facebook',  href: 'https://facebook.com/unimate.ge',        Icon: FacebookIcon  },
  { label: 'Instagram', href: 'https://instagram.com/unimate.ge',        Icon: InstagramIcon },
  { label: 'LinkedIn',  href: 'https://linkedin.com/company/unimate',    Icon: LinkedInIcon  },
  { label: 'TikTok',   href: 'https://tiktok.com/@unimate.ge',          Icon: TikTokIcon    },
]

export default function ContactUsPage() {
  return (
    <div className="w-full">

      {/* ── Page hero ─────────────────────────────────────────────── */}
      <section className="w-full brand-gradient py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            Let&apos;s Talk!
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-white/90 font-bold">
            We&apos;d Love to Hear From You.
          </p>
        </div>
      </section>

      {/* ── Form + sidebar ────────────────────────────────────────── */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-5">

            {/* Form */}
            <div className="md:col-span-3">
              <ContactForm />
            </div>

            {/* Sidebar */}
            <aside className="md:col-span-2 flex flex-col gap-8">
              {/* Email */}
              <div>
                <h2 className="font-display text-2xl text-black mb-2">Contact Us</h2>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-brand-magenta font-bold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta rounded"
                >
                  {SUPPORT_EMAIL}
                </a>
              </div>

              {/* Social */}
              <div>
                <h3 className="font-display text-xl text-black mb-4">Follow Us</h3>
                <ul className="flex flex-wrap gap-4">
                  {SOCIAL.map(({ label, href, Icon }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-brand-magenta hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta"
                      >
                        <Icon />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
