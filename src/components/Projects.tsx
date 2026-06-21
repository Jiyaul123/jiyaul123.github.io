import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import type { Project } from '../data/portfolio'
import { projects } from '../data/portfolio'

function ProjectRow({ p, i }: { p: Project; i: number }) {
  const inner = (
    <>
      {/* Sweeping accent fill behind the row on hover */}
      <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />

      <div className="relative z-10 grid grid-cols-[2rem_1fr_auto] items-center gap-6">
        <span className="label text-mist transition-colors group-hover:text-paper/70">
          0{i + 1}
        </span>

        <div className="min-w-0">
          <span className="label block text-mist transition-colors group-hover:text-paper/60">
            {p.category}
          </span>
          <h3 className="mt-2 display text-[clamp(1.8rem,4.5vw,3.5rem)] leading-none">
            {p.name}
          </h3>
          <p className="mt-3 max-w-2xl text-mist transition-colors group-hover:text-paper/80">
            {p.description}
          </p>

          <ul className="mt-5 grid max-w-2xl gap-2 sm:grid-cols-2">
            {p.contributions.map((c) => (
              <li
                key={c}
                className="flex gap-2 text-sm leading-snug text-mist transition-colors group-hover:text-paper/75"
              >
                <span aria-hidden className="mt-0.5 text-ink/40 transition-colors group-hover:text-paper/50">
                  ↳
                </span>
                <span>{c}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-ink/15 px-3 py-1 text-xs font-medium text-mist transition-colors group-hover:border-paper/30 group-hover:text-paper/80"
              >
                {s}
              </span>
            ))}
          </div>

          {p.links && (
            <div className="mt-6 flex flex-wrap gap-3">
              {p.links.map((l) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                  data-hover
                  className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-4 py-2 text-sm font-medium transition-colors group-hover:border-paper/40 group-hover:text-paper hover:!bg-paper hover:!text-ink"
                >
                  {l.label}
                  <span aria-hidden>↗</span>
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-6 justify-self-end">
          <span className="label hidden text-mist transition-colors group-hover:text-paper/70 md:block">
            {p.tag}
          </span>
          <span className="grid h-12 w-12 place-items-center rounded-full border border-ink/20 text-xl transition-all duration-300 group-hover:border-paper group-hover:bg-paper group-hover:text-ink">
            ↗
          </span>
        </div>
      </div>
    </>
  )

  const cls =
    'reveal group rule relative block overflow-hidden border-b px-2 py-10 transition-colors duration-300 hover:text-paper md:px-6'

  return (
    <div data-hover className={cls}>
      {inner}
    </div>
  )
}

export default function Projects() {
  const ref = useReveal<HTMLElement>(0.1)

  return (
    <section ref={ref} id="projects" className="px-6 py-28 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="04" title="Selected Work" />

        <div className="rule border-t">
          {projects.map((p, i) => (
            <ProjectRow key={p.name} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
