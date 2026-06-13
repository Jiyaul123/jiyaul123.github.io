import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import { profile, education } from '../data/portfolio'

export default function About() {
  const ref = useReveal<HTMLElement>()

  return (
    <section ref={ref} id="about" className="px-6 py-28 md:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="01" title="About" />

        <div className="grid gap-12 md:grid-cols-5">
          <p className="reveal text-xl leading-relaxed text-ink/90 md:col-span-3 md:text-2xl">
            {profile.summary}
          </p>

          <div className="glass-card reveal space-y-8 rounded-3xl p-8 md:col-span-2">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-accent">
                Education
              </h3>
              <p className="mt-2 font-display text-lg font-medium">
                {education.degree}
              </p>
              <p className="text-mist">{education.school}</p>
              <p className="text-sm text-mist">{education.period}</p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-wider text-accent">
                Based in
              </h3>
              <p className="mt-2 font-display text-lg font-medium">
                {profile.location}
              </p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-wider text-accent">
                Focus
              </h3>
              <p className="mt-2 text-mist">
                Real-time systems · On-device AI · Offline-first ·
                Performance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
