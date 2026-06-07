import type { Metadata } from 'next'
import { JoinForm } from '@/components/ui/JoinForm'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Join Us — Unimate',
  description: 'Join the Unimate student community. Sign up with your university email.',
}

export default function JoinUsPage() {
  return (
    <div className="w-full">
      <section className="w-full bg-white py-16 md:py-24">
        <div className="mx-auto max-w-lg px-4 sm:px-6">
          <h1 className="font-display text-4xl md:text-5xl text-black text-center mb-3">
            Join Unimate
          </h1>
          <p className="text-center text-gray-600 font-bold mb-10">
            Enter your details below and we&apos;ll get you started.
          </p>
          <JoinForm />
        </div>
      </section>
      <Footer />
    </div>
  )
}
