import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionHeading from './SectionHeading'
import { projects } from '../data/portfolio'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const root = useRef<HTMLElement>(null)
  const track = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.fromTo(
        '.reveal',
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: {
            trigger: root.current,
            start: 'top 85%',
            once: true,
          },
        }
      )

      // Horizontal pinned scroll — only on wider screens where it reads well
      const mm = gsap.matchMedia()
      mm.add('(min-width: 768px)', () => {
        const el = track.current
        if (!el) return
        const distance = el.scrollWidth - window.innerWidth + 96
        gsap.to(el, {
          x: -distance,
          ease: 'none',
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: () => `+=${distance}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} id="projects" className="overflow-hidden py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <SectionHeading index="04" title="Selected Projects" />
      </div>

      <div
        ref={track}
        className="flex flex-col gap-6 px-6 md:flex-row md:gap-8 md:px-12"
      >
        {projects.map((p, i) => (
          <article
            key={p.name}
            data-hover
            className="glass-card reveal group relative flex min-h-[22rem] w-full flex-shrink-0 flex-col justify-between overflow-hidden rounded-3xl p-8 md:w-[34rem]"
          >
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-40"
              style={{
                background:
                  i % 3 === 0
                    ? '#5eead4'
                    : i % 3 === 1
                      ? '#818cf8'
                      : '#f472b6',
              }}
            />
            <div className="relative">
              <div className="mb-6 flex items-center justify-between">
                <span className="glass-pill rounded-full px-3 py-1 text-xs uppercase tracking-wider text-accent">
                  {p.tag}
                </span>
                <span className="font-display text-5xl font-bold text-ink/10">
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold md:text-3xl">
                {p.name}
              </h3>
              <p className="mt-4 max-w-md text-mist">{p.description}</p>
            </div>

            <div className="relative mt-6 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="glass-pill rounded-md px-2.5 py-1 text-xs text-mist"
                >
                  {s}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
