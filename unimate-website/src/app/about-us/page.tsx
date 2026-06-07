import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'About Us — Unimate',
  description:
    'Unimate is a community-driven platform designed for students to connect, build communities, and participate in various activities.',
}

export default function AboutUsPage() {
  return (
    <div className="w-full">

      {/* ── Page hero ─────────────────────────────────────────────── */}
      <section className="w-full brand-gradient py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl md:text-6xl text-white leading-tight">
            Where Students<br />Meet Opportunities
          </h1>
        </div>
      </section>

      {/* ── Core description ─────────────────────────────────────── */}
      <section className="w-full bg-white py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-lg md:text-xl font-bold text-gray-800 leading-relaxed">
            Unimate is a community-driven platform designed for students to connect,
            build communities, and participate in various activities.
          </p>
        </div>
      </section>

      {/* ── Our Mission ──────────────────────────────────────────── */}
      <section className="w-full bg-gray-50 py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-4">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-magenta">
            Student Movement
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-black">Our Mission</h2>
          <p className="text-base md:text-lg font-bold text-gray-600 leading-relaxed">
            We&apos;re reshaping the student experience by empowering young people to build
            meaningful connections, unlock personal and professional growth, and enjoy
            university life to the fullest. Our vision is to turn everyday campus moments
            into lifelong friendships, career opportunities, and unforgettable adventures.
          </p>
        </div>
      </section>

      {/* ── What We Do ───────────────────────────────────────────── */}
      <section className="w-full bg-white py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-display text-3xl md:text-4xl text-black">What We Do</h2>
          <p className="text-base md:text-lg font-bold text-gray-600 leading-relaxed">
            Unimate is a community-driven platform built to enrich student life — socially,
            academically, and professionally. Here&apos;s what we offer:
          </p>
          <ul className="space-y-3">
            {[
              'Discover and Join Communities: Explore interest-based groups and students.',
              'Engage in Events & Activities: Stay active through events, meetups, and collaborative projects organized by students.',
              'Communicate with Ease: Use built-in chat and forums for group discussions, direct messaging, and community interactions.',
              'Grow Through: Participate in quests, challenges and level up through activity-based rewards.',
              'Build Your Network: Connect with peers, mentors, and potential employers — all in one place.',
            ].map((item) => (
              <li key={item} className="flex gap-3 font-bold text-base text-gray-700 leading-relaxed">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full brand-gradient" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Who We Serve ─────────────────────────────────────────── */}
      <section className="w-full bg-gray-50 py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="font-display text-3xl md:text-4xl text-black">Who We Serve</h2>
          <p className="text-base md:text-lg font-bold text-gray-600 leading-relaxed">
            Unimate is for every student — from curious first-years finding their way to club
            leaders building communities to ambitious upperclassmen preparing for their careers.
            Whether you&apos;re looking for new friends, meaningful projects, personal growth, or
            professional opportunities, there&apos;s a place for you here.
          </p>
        </div>
      </section>

      {/* ── Our Values ───────────────────────────────────────────── */}
      <section className="w-full bg-white py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl text-black mb-10">Our Values</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: 'Community-Driven',
                body: 'We believe the best experiences are built together. Students shape Unimate — we just amplify their voices.',
              },
              {
                title: 'Radical Inclusivity',
                body: 'Everyone belongs. Different backgrounds, interests, and personalities make our communities stronger.',
              },
              {
                title: 'Opportunity for All',
                body: 'Whether it\'s a new friendship, a community, or a career move — we exist to open doors for every student.',
              },
              {
                title: 'Transparency & Trust',
                body: 'We communicate openly, build responsibly, and grow alongside our users — always with honesty.',
              },
            ].map((v) => (
              <div key={v.title} className="rounded-2xl border border-gray-100 bg-gray-50 p-7 space-y-2">
                <h3 className="font-display text-xl text-brand-navy">{v.title}</h3>
                <p className="font-bold text-base text-gray-600 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partners & Endorsements ───────────────────────────────── */}
      <section className="w-full bg-gray-50 py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mb-10">
          <h2 className="font-display text-3xl md:text-4xl text-black text-center">
            Partners &amp; Endorsements
          </h2>
        </div>
        {/* Infinite scrolling marquee — two identical sets side by side; animation
            shifts left by exactly 50% then loops, creating a seamless ticker. */}
        <div className="overflow-hidden">
          <div className="partner-marquee">
            {[
              { src: '/partners/partner-gipa.png',                   alt: 'GIPA – Georgian Institute of Public Affairs' },
              { src: '/partners/partner-university-of-georgia.png',  alt: 'University of Georgia' },
              { src: '/partners/partner-bau.png',                    alt: 'BAU International University Batumi' },
              { src: '/partners/partner-btu.png',                    alt: 'BTU – Business and Technology University' },
              { src: '/partners/partner-sulkhan-saba.png',           alt: 'Sulkhan-Saba Orbeliani University' },
              { src: '/partners/partner-startup.png',                alt: 'StartUP Factory' },
              { src: '/partners/partner-jobs-ge.png',                alt: 'jobs.ge' },
              { src: '/partners/partner-dk-jobs.png',                alt: 'DK. Jobs' },
              { src: '/partners/partner-awork.png',                  alt: 'Awork' },
              { src: '/partners/partner-premiumcard.png',            alt: 'Premium Card' },
              { src: '/partners/partner-palitra.png',                alt: 'Palitra L' },
              { src: '/partners/partner-pirveli.png',                alt: 'Pirveli' },
              { src: '/partners/partner-board-games-corner.png',     alt: 'Board Games Corner' },
              { src: '/partners/partner-bitisi.png',                 alt: 'Bitisi Youth Organisation' },
              { src: '/partners/partner-j.png',                      alt: 'Partner' },
              /* duplicate set for seamless loop */
              { src: '/partners/partner-gipa.png',                   alt: 'GIPA – Georgian Institute of Public Affairs' },
              { src: '/partners/partner-university-of-georgia.png',  alt: 'University of Georgia' },
              { src: '/partners/partner-bau.png',                    alt: 'BAU International University Batumi' },
              { src: '/partners/partner-btu.png',                    alt: 'BTU – Business and Technology University' },
              { src: '/partners/partner-sulkhan-saba.png',           alt: 'Sulkhan-Saba Orbeliani University' },
              { src: '/partners/partner-startup.png',                alt: 'StartUP Factory' },
              { src: '/partners/partner-jobs-ge.png',                alt: 'jobs.ge' },
              { src: '/partners/partner-dk-jobs.png',                alt: 'DK. Jobs' },
              { src: '/partners/partner-awork.png',                  alt: 'Awork' },
              { src: '/partners/partner-premiumcard.png',            alt: 'Premium Card' },
              { src: '/partners/partner-palitra.png',                alt: 'Palitra L' },
              { src: '/partners/partner-pirveli.png',                alt: 'Pirveli' },
              { src: '/partners/partner-board-games-corner.png',     alt: 'Board Games Corner' },
              { src: '/partners/partner-bitisi.png',                 alt: 'Bitisi Youth Organisation' },
              { src: '/partners/partner-j.png',                      alt: 'Partner' },
            ].map((logo, i) => (
              <div
                key={`${logo.src}-${i}`}
                className="shrink-0 flex items-center justify-center mr-10 w-56 h-32"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={224}
                  height={128}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Join the Movement CTA ─────────────────────────────────── */}
      <section className="w-full brand-gradient py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="font-display text-4xl md:text-5xl text-white">Join the Movement</h2>
          <p className="text-lg font-bold text-white/90 leading-relaxed">
            Become a Unimate ambassador or partner and help shape the future of student life.
          </p>
          <p className="text-base font-bold text-white/80">We&apos;d love to connect.</p>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-bold text-brand-magenta hover:bg-white/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white mt-2"
          >
            Reach out to us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
