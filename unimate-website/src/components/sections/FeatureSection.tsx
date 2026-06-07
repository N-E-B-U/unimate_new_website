interface FeatureSectionProps {
  eyebrow?: string
  title: string
  body: string
  /** 'light' = white bg, 'tinted' = very light gray */
  bg?: 'light' | 'tinted'
  /** Icon slot — pass an SVG element */
  icon?: React.ReactNode
  /** If provided, shown on the opposite side to text */
  imagePlaceholder?: boolean
  reverse?: boolean
}

export function FeatureSection({
  eyebrow,
  title,
  body,
  bg = 'light',
  icon,
  imagePlaceholder = false,
  reverse = false,
}: FeatureSectionProps) {
  const bgClass = bg === 'tinted' ? 'bg-gray-50' : 'bg-white'

  return (
    <section className={`w-full ${bgClass} py-16 md:py-24`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col gap-10 md:items-center ${
            imagePlaceholder
              ? `md:flex-row ${reverse ? 'md:flex-row-reverse' : ''}`
              : ''
          }`}
        >
          {/* Text block */}
          <div className={`flex flex-col gap-4 ${imagePlaceholder ? 'md:flex-1' : 'max-w-2xl'}`}>
            {icon && (
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl brand-gradient text-white shadow-md">
                {icon}
              </div>
            )}

            {eyebrow && (
              <p className="text-sm font-bold uppercase tracking-widest text-brand-magenta">
                {eyebrow}
              </p>
            )}

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-black leading-tight">
              {title}
            </h2>

            <p className="text-base md:text-lg font-bold text-gray-600 leading-relaxed">
              {body}
            </p>
          </div>

          {/* Image placeholder */}
          {imagePlaceholder && (
            <div className="md:flex-1 flex items-center justify-center">
              <div className="w-full max-w-sm aspect-square rounded-3xl bg-gradient-to-br from-brand-lavender/30 to-brand-pink/30 flex items-center justify-center border border-brand-lavender/40">
                <div className="text-center text-gray-400 text-sm font-bold px-6">
                  {/* ⚠️ Replace with actual illustration / image from live site */}
                  [Image placeholder]
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
