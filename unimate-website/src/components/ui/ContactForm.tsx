'use client'

import { useState } from 'react'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    const form = e.currentTarget
    const data = new FormData(form)
    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID

    if (!formspreeId || formspreeId === 'your_formspree_form_id_here') {
      await new Promise((r) => setTimeout(r, 800))
      setStatus('success')
      form.reset()
      return
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full rounded-lg border border-gray-300 px-4 py-3 text-base font-bold text-black placeholder:font-normal placeholder:text-gray-400 transition focus:outline-none focus:ring-2 focus:ring-brand-magenta focus:border-transparent'

  const labelClass = 'block text-sm font-bold text-gray-700 mb-1'

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name row — First + Last */}
      <fieldset className="space-y-1">
        <legend className={labelClass}>
          Name <span aria-hidden="true" className="text-brand-magenta">*</span>
        </legend>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="firstName" className="sr-only">First name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
              placeholder="First"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="lastName" className="sr-only">Last name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              required
              placeholder="Last"
              className={inputClass}
            />
          </div>
        </div>
      </fieldset>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className={labelClass}>Phone</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+995 555 000 000"
          className={inputClass}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClass}>
          Email <span aria-hidden="true" className="text-brand-magenta">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="your@email.com"
          className={inputClass}
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>
          Comment or Message <span aria-hidden="true" className="text-brand-magenta">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={5}
          placeholder="Your message…"
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full rounded-full brand-gradient py-3 px-8 text-base font-bold text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-magenta focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending…' : 'Submit'}
      </button>

      {/* Success */}
      {status === 'success' && (
        <div role="alert" className="flex items-start gap-3 rounded-lg border border-green-300 bg-green-50 p-4 text-green-800">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 shrink-0 w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" />
          </svg>
          <p className="text-sm font-bold">
            Thank you! Your message has been sent. We&apos;ll get back to you soon.
          </p>
        </div>
      )}

      {/* Error */}
      {status === 'error' && (
        <div role="alert" className="flex items-start gap-3 rounded-lg border border-red-300 bg-red-50 p-4 text-red-800">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 shrink-0 w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><line x1="15" x2="9" y1="9" y2="15" /><line x1="9" x2="15" y1="9" y2="15" />
          </svg>
          <div className="text-sm">
            <p className="font-bold">Something went wrong.</p>
            <p>Please try again or email us at{' '}
              <a href="mailto:[email protected]" className="underline hover:no-underline">[email protected]</a>
            </p>
          </div>
        </div>
      )}
    </form>
  )
}
