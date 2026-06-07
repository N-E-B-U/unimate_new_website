import { HeroSection } from '@/components/sections/HeroSection'
import { DownloadAppSection } from '@/components/sections/DownloadAppSection'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { MainFunctionsSection } from '@/components/sections/MainFunctionsSection'
import { WhyUnimateSection } from '@/components/sections/WhyUnimateSection'
import { Footer } from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <HeroSection />

      {/* ── Download App ─────────────────────────────────────── */}
      <DownloadAppSection />

      {/* ── How does it work ─────────────────────────────────────── */}
      <HowItWorksSection />

      {/* ── Main Functions ───────────────────────────────────────── */}
      <MainFunctionsSection />

      {/* ── Why Unimate ──────────────────────────────────────────── */}
      <WhyUnimateSection />

      <Footer />
    </div>
  )
}
