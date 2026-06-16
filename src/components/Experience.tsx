import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import { experience } from '../data/portfolio'

export default function Experience() {
  const ref = useReveal<HTMLElement>(0.12)

  return (
    <section ref={ref} id="work" className="px-6 py-28 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="03" title="Experience" />

        <div className="rule border-t">
          {experience.map((job) => (
            <div
              key={job.role + job.period}
              className="reveal rule grid gap-6 border-b py-10 md:grid-cols-[1fr_1.4fr]"
            >
              {/* Left: role + company + period */}
              <div>
                <span className="label text-mist">{job.period}</span>
                <h3 className="display mt-3 text-2xl md:text-3xl">{job.role}</h3>
                <p className="mt-2 text-accent">{job.company}</p>
              </div>

              {/* Right: contributions */}
              <ul className="space-y-3">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-4 text-lg leading-snug text-ink/80">
                    <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
