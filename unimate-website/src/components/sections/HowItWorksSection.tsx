import Image from 'next/image'

const STEPS = [
  {
    n: '1',
    title: 'Sign Up',
    text: 'Register with your university email and verify your student status',
    img: '/steps/step-1-pr.png',
  },
  {
    n: '2',
    title: 'Set Your Profile',
    text: "Set up your profile with your interests and what you're looking for",
    img: '/steps/step-2-pr.png',
  },
  {
    n: '3',
    title: 'Explore',
    text: 'Explore communities, join activities, and discover events',
    img: '/steps/step-3-pr.png',
  },
  {
    n: '4',
    title: 'Connect',
    text: 'Collaborate with students, level up, and grow together',
    img: '/steps/step-4-pr.png',
  },
] as const

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative w-full bg-white py-12 md:py-16 snap-start min-h-screen flex items-center overflow-hidden"
    >
      <div className="relative mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-10 w-full">

        {/* ── Section header — tight margin so eyebrow owns the flow ── */}
        <div className="text-center mb-6 md:mb-7">
          <span className="inline-flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-brand-magenta/40" />
            <span className="text-brand-magenta font-bold text-base tracking-[0.2em] uppercase">
              How Unimate Works
            </span>
            <span className="h-px w-10 bg-brand-magenta/40" />
          </span>
        </div>

        {/* ── Desktop layout (md+) ─────────────────────────────────── */}
        {/* Light panel groups all 4 steps as one cohesive module */}
        <div className="hidden md:block rounded-3xl bg-gray-50/70 border border-gray-100 px-6 py-8 lg:px-10 lg:py-10">
          <div className="grid grid-cols-4 gap-x-2 lg:gap-x-3 xl:gap-x-4">

            {/* ── Row 1: single connector + directional chevrons + badges ── */}
            {/*   col-span-4 keeps badge centers aligned with grid columns    */}
            <div className="col-span-4 relative py-2">
              {/* One continuous line from badge 1 centre → badge 4 centre */}
              <span
                aria-hidden="true"
                className="absolute top-1/2 -translate-y-1/2 h-0.5 brand-gradient opacity-50 pointer-events-none"
                style={{ left: '12.5%', right: '12.5%' }}
              />
              {/* Chevrons at the midpoint between each adjacent pair */}
              {([25, 50, 75] as const).map((pct) => (
                <span
                  key={pct}
                  aria-hidden="true"
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 pointer-events-none"
                  style={{ left: `${pct}%` }}
                >
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M4 2L8 6L4 10"
                      stroke="#CE6ABF"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              ))}
              {/* Badges — inner grid mirrors outer grid for precise alignment */}
              <div className="grid grid-cols-4 gap-x-2 lg:gap-x-3 xl:gap-x-4">
                {STEPS.map((step) => (
                  <div key={`badge-${step.n}`} className="flex justify-center items-center">
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full brand-gradient shadow-lg">
                      <span className="font-display text-2xl text-white leading-none">{step.n}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Row 2: titles ── */}
            {STEPS.map((step) => (
              <h3
                key={`title-${step.n}`}
                className="font-display text-xl lg:text-2xl text-black text-center leading-snug px-2 pt-1"
              >
                {step.title}
              </h3>
            ))}

            {/* ── Row 3: descriptions — capped at 2 lines for equal height ── */}
            {STEPS.map((step) => (
              <p
                key={`desc-${step.n}`}
                className="text-gray-500 font-bold text-xs lg:text-sm leading-relaxed text-center px-2 pt-1 pb-3 line-clamp-2"
              >
                {step.text}
              </p>
            ))}

            {/* ── Row 4: images — shrunk ~18%, tops on shared baseline ── */}
            {STEPS.map((step) => (
              <div key={`img-${step.n}`} className="flex justify-center">
                <Image
                  src={step.img}
                  alt={`Step ${step.n}: ${step.title}`}
                  width={800}
                  height={1600}
                  className="w-full max-w-[200px] lg:max-w-[240px] xl:max-w-[280px] h-auto object-contain drop-shadow-xl transition-transform duration-300 hover:scale-[1.04] hover:drop-shadow-2xl"
                />
              </div>
            ))}

          </div>
        </div>

        {/* ── Mobile layout: single-column stepped list ─────────────── */}
        <div className="md:hidden flex flex-col gap-10">
          {STEPS.map((step) => (
            <div key={step.n} className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full brand-gradient shadow-lg mb-3">
                <span className="font-display text-2xl text-white leading-none">
                  {step.n}
                </span>
              </div>
              <h3 className="font-display text-2xl text-black mb-1">{step.title}</h3>
              <p className="text-gray-500 font-bold text-sm leading-relaxed max-w-[280px] mb-5 line-clamp-2">
                {step.text}
              </p>
              <Image
                src={step.img}
                alt={`Step ${step.n}: ${step.title}`}
                width={800}
                height={1600}
                className="w-full max-w-[240px] h-auto object-contain drop-shadow-xl"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
