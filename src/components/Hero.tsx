import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { profile, stats } from '../data/portfolio'

export default function Hero() {
  const root = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

      tl.from('.hero-top', { y: 16, opacity: 0, duration: 0.7, delay: 0.15 })
        .from(
          '.hero-line span',
          { yPercent: 115, duration: 1.1, stagger: 0.1 },
          '-=0.3'
        )
        .from('.hero-sub', { y: 24, opacity: 0, duration: 0.8 }, '-=0.6')
        .from('.hero-cta', { y: 18, opacity: 0, duration: 0.6 }, '-=0.5')
        .from(
          '.hero-stat',
          { y: 24, opacity: 0, duration: 0.6, stagger: 0.08 },
          '-=0.4'
        )
        .from('.hero-scroll', { opacity: 0, duration: 0.8 }, '-=0.2')

      gsap.to('.hero-scroll-line', {
        scaleY: 0.3,
        repeat: -1,
        yoyo: true,
        duration: 1.1,
        ease: 'sine.inOut',
        transformOrigin: 'top',
      })
    }, root)

    return () => ctx.revert()
  }, [])

  // Headline reads as the craft, not just the job title
  const lines = ['Front-End', 'Engineer®']

  return (
    <section
      ref={root}
      id="top"
      className="relative flex min-h-screen flex-col justify-between px-6 pb-10 pt-32 md:px-10"
    >
      {/* Top meta row */}
      <div className="hero-top flex items-start justify-between">
        <p className="label max-w-[16rem] text-mist">
          {profile.name} — building interfaces with motion, performance & taste.
        </p>
        <p className="label hidden text-right text-mist md:block">
          Based in {profile.location}
          <br />
          {new Date().getFullYear()} — Available
        </p>
      </div>

      {/* Giant headline */}
      <div className="my-auto py-10">
        <h1 className="display text-[clamp(3.2rem,15vw,15rem)]">
          {lines.map((w, i) => (
            <span key={w} className="hero-line block overflow-hidden">
              <span className={`inline-block ${i === 1 ? 'text-outline' : ''}`}>
                {w}
              </span>
            </span>
          ))}
        </h1>

        <p className="hero-sub mt-8 max-w-2xl text-lg leading-relaxed text-mist md:text-2xl">
          I'm a {profile.role.toLowerCase()} who cares about the details —
          {' '}
          <span className="text-ink">animation, accessibility and pixel-tight UI.</span>
          {' '}
          Shipping real-time, AI-powered products to the App Store & Play Store.
        </p>

        <div className="hero-cta mt-10 flex flex-wrap items-center gap-5">
          <a
            href="#work"
            className="group flex items-center gap-3 rounded-full bg-ink px-7 py-4 font-medium text-paper transition-colors hover:bg-accent"
            data-hover
          >
            Selected work
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a href="#contact" className="link-sweep font-medium" data-hover>
            Get in touch
          </a>
        </div>
      </div>

      {/* Bottom stats strip */}
      <div className="rule grid grid-cols-2 gap-y-6 pt-8 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="hero-stat">
            <div className="display text-4xl md:text-5xl">{s.value}</div>
            <div className="label mt-2 text-mist">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Scroll cue */}
      <div className="hero-scroll absolute bottom-10 right-6 hidden flex-col items-center gap-2 md:flex md:right-10">
        <span className="label rotate-90 text-mist">scroll</span>
        <span className="hero-scroll-line mt-6 block h-12 w-px bg-ink/40" />
      </div>
    </section>
  )
}
