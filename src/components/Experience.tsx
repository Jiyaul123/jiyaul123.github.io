import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import { experience } from '../data/portfolio'

export default function Experience() {
  const ref = useReveal<HTMLElement>(0.15)

  return (
    <section ref={ref} id="work" className="px-6 py-28 md:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="03" title="Experience" />

        <div className="relative border-l border-ink/12 pl-8 md:pl-12">
          {experience.map((job) => (
            <div key={job.role + job.period} className="reveal relative mb-14 last:mb-0">
              {/* Timeline node */}
              <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-accent/15 md:-left-[53px]" />

              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <h3 className="font-display text-xl font-semibold md:text-2xl">
                  {job.role}
                </h3>
                <span className="text-sm text-mist">{job.period}</span>
              </div>
              <p className="mt-1 text-accent">{job.company}</p>

              <ul className="mt-4 space-y-2">
                {job.points.map((p) => (
                  <li
                    key={p}
                    className="flex gap-3 text-mist"
                  >
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent/60" />
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
