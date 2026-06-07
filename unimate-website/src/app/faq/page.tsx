import type { Metadata } from 'next'
import { AccordionItem } from '@/components/ui/AccordionItem'
import { FAQ_ITEMS, SUPPORT_EMAIL } from '@/lib/constants'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'FAQ — Unimate',
  description:
    'Frequently asked questions about the Unimate platform for students.',
}

export default function FAQPage() {
  return (
    <div className="w-full">
      {/* Page hero */}
      <section className="w-full brand-gradient py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl md:text-6xl text-white leading-tight">
            FAQ
          </h1>
          <p className="mt-4 text-xl text-white/90 font-bold">
            Frequently Asked Questions
          </p>
        </div>
      </section>

      {/* Accordion */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Support note */}
          <p className="mb-10 text-base font-bold text-gray-600 leading-relaxed">
            Have more questions? You can also contact support via the chat window
            at the bottom of the website or via email at{' '}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-brand-magenta hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta rounded"
            >
              {SUPPORT_EMAIL}
            </a>
            .
          </p>

          {/* FAQ items */}
          <div>
            {FAQ_ITEMS.map((item) => (
              <AccordionItem
                key={item.id}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
