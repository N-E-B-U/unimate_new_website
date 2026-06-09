import Image from 'next/image'

export function DownloadAppSection() {
  return (
    <section className="relative w-full snap-start min-h-screen flex items-center bg-white overflow-hidden">

      <div className="relative mx-auto max-w-6xl w-full px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-10">

          {/* ── Left: text block ──────────────────────────────── */}
          <div className="flex flex-col items-start shrink-0">

            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 mb-5">
              <span className="h-px w-8 bg-brand-magenta" />
              <span className="text-brand-magenta text-xs font-bold tracking-[0.2em] uppercase">
                Mobile App
              </span>
            </span>

            {/* Heading */}
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-black leading-none mb-5">
              Download
              <br />
              <span className="brand-gradient-text">the App</span>
            </h2>

            {/* Coming Soon */}
            <div className="mb-10 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-magenta opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-magenta" />
              </span>
              <span className="font-display text-2xl sm:text-3xl text-brand-navy tracking-wide">
                Coming Soon
              </span>
            </div>

            {/* Store buttons */}
            <div className="flex flex-col sm:flex-row gap-4">

              {/* App Store */}
              <button
                disabled
                aria-label="Download on the App Store — Coming Soon"
                className="relative flex items-center gap-3.5 rounded-2xl border border-gray-200 bg-gray-50 px-6 py-4 cursor-not-allowed opacity-70"
              >
                <svg viewBox="0 0 24 24" className="h-8 w-8 fill-black shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-gray-500 text-[10px] font-bold uppercase tracking-wider leading-none mb-0.5">Download on the</div>
                  <div className="text-black text-lg font-bold leading-tight">App Store</div>
                </div>
                <span className="absolute -top-2.5 -right-2.5 bg-brand-magenta text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                  Soon
                </span>
              </button>

              {/* Google Play */}
              <button
                disabled
                aria-label="Get it on Google Play — Coming Soon"
                className="relative flex items-center gap-3.5 rounded-2xl border border-gray-200 bg-gray-50 px-6 py-4 cursor-not-allowed opacity-70"
              >
                <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="gp1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00C6FF"/>
                      <stop offset="100%" stopColor="#0072FF"/>
                    </linearGradient>
                    <linearGradient id="gp2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FF5F6D"/>
                      <stop offset="100%" stopColor="#FFC371"/>
                    </linearGradient>
                    <linearGradient id="gp3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#11998e"/>
                      <stop offset="100%" stopColor="#38ef7d"/>
                    </linearGradient>
                    <linearGradient id="gp4" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f7971e"/>
                      <stop offset="100%" stopColor="#ffd200"/>
                    </linearGradient>
                  </defs>
                  <path d="M3.18 23.76A2 2 0 0 1 2 22V2a2 2 0 0 1 1.18-1.76l11.65 11.76z" fill="url(#gp1)"/>
                  <path d="M20.82 10.26 17.35 8.3 13.6 12l3.75 3.7 3.47-1.95A2 2 0 0 0 20.82 10.26z" fill="url(#gp4)"/>
                  <path d="M3.18.24 14.83 12 11.08 15.7 3.18.24z" fill="url(#gp2)" opacity=".9"/>
                  <path d="M3.18 23.76l7.9-15.46L14.83 12 3.18 23.76z" fill="url(#gp3)"/>
                </svg>
                <div className="text-left">
                  <div className="text-gray-500 text-[10px] font-bold uppercase tracking-wider leading-none mb-0.5">Get it on</div>
                  <div className="text-black text-lg font-bold leading-tight">Google Play</div>
                </div>
                <span className="absolute -top-2.5 -right-2.5 bg-brand-navy text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                  Soon
                </span>
              </button>
            </div>

            {/* Fine print */}
            <p className="mt-6 text-gray-400 text-xs font-bold">
              Available on iOS and Android · Notify me when it&apos;s live
            </p>
          </div>

          {/* ── Right: phones — massively enlarged, dominant hero ── */}
          <div className="flex-1 flex items-center justify-start min-w-0">
            <Image
              src="/app-mockup.png"
              alt="Unimate mobile app preview"
              width={900}
              height={1170}
              className="h-[52vh] sm:h-[65vh] lg:h-[82vh] xl:h-[88vh] w-auto object-contain"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  )
}
