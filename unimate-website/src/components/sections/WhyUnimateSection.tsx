const REASONS = [
  {
    title: 'Built only for students',
    body: 'No outsiders, no noise — just students on the same journey, with the same interests and opportunities.',
  },
  {
    title: 'Student experience, first',
    body: 'Built around real student needs — communities, events, and connections tied to your daily campus life.',
  },
  {
    title: 'Fun learning and real growth',
    body: 'Study groups, friendly challenges, and projects — grow alongside peers while actually having fun.',
  },
] as const

export function WhyUnimateSection() {
  return (
    <section className="w-full bg-white snap-start min-h-screen flex items-center py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full">

        {/* ── Header ──────────────────────────────────────────────── */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-display text-4xl md:text-5xl text-black mb-2">
            Why Unimate
          </h2>
          <p className="text-gray-400 font-bold text-sm">
            What makes us different from every other student platform
          </p>
        </div>

        {/* ── Cards ───────────────────────────────────────────────── */}
        <div className="grid gap-10 md:gap-14 md:grid-cols-3">
          {REASONS.map((r) => (
            <div
              key={r.title}
              className="group overflow-hidden rounded-2xl bg-gray-50 border border-transparent hover:bg-white hover:border-brand-magenta/15 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* Full-width accent bar anchored to card top */}
              <div className="h-1 brand-gradient" />

              {/* Card body */}
              <div className="p-6">
                <h3 className="font-display text-xl md:text-2xl text-black leading-tight mb-2 md:min-h-[3.5rem]">
                  {r.title}
                </h3>
                <p className="font-bold text-sm text-gray-500 leading-snug">
                  {r.body}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
