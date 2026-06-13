import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import { skills } from '../data/portfolio'

export default function Skills() {
  const ref = useReveal<HTMLElement>(0.08)

  return (
    <section ref={ref} id="skills" className="px-6 py-28 md:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="02" title="Skills & Stack" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <div
              key={group.title}
              data-hover
              className="glass-card reveal group rounded-2xl p-6"
            >
              <h3 className="font-display text-lg font-semibold text-ink">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="glass-pill rounded-full px-3 py-1 text-sm text-mist transition-colors group-hover:text-ink"
                  >
                    {item}
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
