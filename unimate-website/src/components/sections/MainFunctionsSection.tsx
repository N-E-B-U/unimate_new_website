const FEATURES = [
  {
    num: '01',
    title: 'Networking',
    body: 'Meet like-minded students and build meaningful connections.',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Communities',
    body: 'Create or join communities built around your interests.',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Opportunities',
    body: 'Discover projects, events, and collaborations for students.',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
] as const


export function MainFunctionsSection() {
  return (
    <section className="w-full bg-gray-50 snap-start min-h-screen flex items-center py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full">

        {/* ── Header ──────────────────────────────────────────────── */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-display text-4xl md:text-5xl text-black mb-2">
            Main Functions
          </h2>
          <p className="text-gray-400 font-bold text-sm">
            Three core experiences powering your student life
          </p>
        </div>

        {/* ── Cards ───────────────────────────────────────────────── */}
        <div className="grid gap-3 sm:gap-4 sm:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group flex flex-col items-center text-center rounded-2xl bg-white border border-gray-100 shadow-sm p-6 hover:shadow-md hover:-translate-y-1.5 hover:border-brand-magenta/20 transition-all duration-300"
            >
              {/* Numbered eyebrow */}
              <span className="font-bold text-[11px] text-brand-magenta tracking-[0.25em] mb-3">
                {f.num}
              </span>

              {/* Icon */}
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl brand-gradient text-white shadow-md group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                {f.icon}
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl text-black mb-2">{f.title}</h3>

              {/* Description — max-w constrains line width for consistent 2-line wrap */}
              <p className="font-bold text-sm text-gray-500 leading-snug mb-5 max-w-[180px]">
                {f.body}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
