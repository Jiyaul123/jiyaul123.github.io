import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import { profile, education } from '../data/portfolio'

export default function About() {
  const ref = useReveal<HTMLElement>()

  return (
    <section ref={ref} id="about" className="px-6 py-28 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="01" title="About" />

        {/* Big editorial statement */}
        <p className="reveal display max-w-5xl text-[clamp(1.6rem,3.6vw,3rem)] leading-[1.15] tracking-[-0.02em]">
          I design and build <span className="text-accent">interfaces people enjoy using</span> —
          obsessing over motion, layout and the small details that make a
          product feel <span className="text-outline">premium</span>.
        </p>

        {/* Meta grid */}
        <div className="rule mt-20 grid gap-y-12 pt-12 md:grid-cols-3 md:gap-x-12">
          <div className="reveal">
            <span className="label text-mist">What I do</span>
            <p className="mt-4 text-lg leading-relaxed text-ink/85">
              {profile.summary}
            </p>
          </div>

          <div className="reveal">
            <span className="label text-mist">Education</span>
            <p className="mt-4 font-display text-xl font-semibold">
              {education.degree}
            </p>
            <p className="text-mist">{education.school}</p>
            <p className="text-sm text-mist">{education.period}</p>
          </div>

          <div className="reveal">
            <span className="label text-mist">Focus</span>
            <ul className="mt-4 space-y-2 text-lg text-ink/85">
              {['UI / UX engineering', 'Motion & micro-interactions', 'Real-time & on-device AI', 'Performance & accessibility'].map(
                (f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {f}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
