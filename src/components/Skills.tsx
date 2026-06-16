import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import { skills } from '../data/portfolio'

export default function Skills() {
  const ref = useReveal<HTMLElement>(0.06)

  return (
    <section ref={ref} id="skills" className="px-6 py-28 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="02" title="Capabilities" />

        {/* Editorial rows — each capability group is a full-width line */}
        <div>
          {skills.map((group, i) => (
            <div
              key={group.title}
              data-hover
              className="reveal group rule grid grid-cols-1 items-baseline gap-4 border-b py-7 transition-colors last:border-b-0 hover:bg-ink/[0.02] md:grid-cols-[3rem_16rem_1fr]"
            >
              <span className="label text-mist">0{i + 1}</span>
              <h3 className="display text-2xl transition-transform duration-300 group-hover:translate-x-2 md:text-3xl">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-lg text-mist transition-colors group-hover:text-ink">
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
