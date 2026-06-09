import Image from 'next/image'
import { ScrollToSection } from '@/components/ui/ScrollToSection'

export function HeroSection() {
  return (
    <section id="hero" className="relative w-full overflow-hidden brand-gradient snap-start min-h-screen flex flex-col justify-center">
      {/* Decorative background — node/circle motif echoing the logo */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full border-[40px] border-white" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full border-[24px] border-white" />
        <div className="absolute top-1/2 left-1/4 w-1/2 h-0.5 bg-white rotate-12" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          {/* Icon mark */}
          <div className="mb-6 flex">
            <Image
              src="/logo/unimate-icon.png"
              alt=""
              width={56}
              height={56}
              className="h-14 w-auto object-contain"
              priority
            />
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            The platform where students meet opportunities
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-white/90 font-bold leading-relaxed mb-10 max-w-xl">
            Discover friends and communities based on your interests and hobbies
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/join-us"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-bold text-brand-magenta shadow hover:bg-white/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-magenta"
            >
              Join Us
            </a>
            <ScrollToSection
              targetId="how-it-works"
              className="inline-flex items-center gap-2 text-base font-bold text-white/90 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded cursor-pointer"
            >
              How does it work
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </ScrollToSection>
          </div>
        </div>
      </div>
    </section>
  )
}
