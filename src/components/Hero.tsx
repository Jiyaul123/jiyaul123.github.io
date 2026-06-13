import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { profile, stats } from '../data/portfolio'

export default function Hero() {
  const root = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

      tl.from('.hero-eyebrow', { y: 20, opacity: 0, duration: 0.8, delay: 0.2 })
        .from(
          '.hero-line span',
          { yPercent: 120, duration: 1, stagger: 0.12 },
          '-=0.4'
        )
        .from('.hero-sub', { y: 24, opacity: 0, duration: 0.8 }, '-=0.5')
        .from('.hero-cta', { y: 20, opacity: 0, duration: 0.7 }, '-=0.5')
        .from(
          '.hero-stat',
          { y: 30, opacity: 0, duration: 0.7, stagger: 0.1 },
          '-=0.4'
        )
        .from('.hero-scroll', { opacity: 0, duration: 0.8 }, '-=0.2')

      // Subtle continuous float on the scroll hint
      gsap.to('.hero-scroll-dot', {
        y: 8,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: 'sine.inOut',
      })
    }, root)

    return () => ctx.revert()
  }, [])

  const titleWords = ['React', 'Native', 'Engineer']

  return (
    <section
      ref={root}
      id="top"
      className="relative flex min-h-screen flex-col justify-center px-6 pt-28 md:px-12"
    >
      <div className="mx-auto w-full max-w-6xl">
        <p className="hero-eyebrow mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-accent">
          <span className="h-px w-10 bg-accent" />
          {profile.role}
        </p>

        <h1 className="font-display text-[clamp(2.8rem,9vw,7.5rem)] font-bold leading-[0.95] tracking-tight">
          {titleWords.map((w) => (
            <span key={w} className="hero-line block overflow-hidden">
              <span className="inline-block">{w}</span>
            </span>
          ))}
        </h1>

        <p className="hero-sub mt-8 max-w-xl text-lg text-mist md:text-xl">
          {profile.tagline} I ship voice-enabled, WebRTC, and on-device AI
          systems — from design to production.
        </p>

        <div className="hero-cta mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-accent px-7 py-3.5 font-medium text-white shadow-lg shadow-accent/30 transition-transform hover:scale-105"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="glass-pill rounded-full px-7 py-3.5 font-medium transition-transform hover:scale-105"
          >
            Get in touch
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="hero-stat">
              <div className="font-display text-3xl font-bold text-gradient md:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-mist">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 text-mist">
        <div className="flex h-10 w-6 justify-center rounded-full border border-ink/25 pt-2">
          <span className="hero-scroll-dot h-2 w-1 rounded-full bg-accent" />
        </div>
      </div>
    </section>
  )
}
