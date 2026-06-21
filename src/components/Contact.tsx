import { useReveal } from '../hooks/useReveal'
import { profile } from '../data/portfolio'

export default function Contact() {
  const ref = useReveal<HTMLElement>(0.1)

  return (
    <section ref={ref} id="contact" className="px-6 pt-28 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="rule flex items-center justify-between pt-5">
          <span className="label text-mist">(05)</span>
          <span className="label text-mist">/ Contact</span>
        </div>

        {/* Giant CTA */}
        <a
          href={`mailto:${profile.email}`}
          data-hover
          className="reveal group mt-16 block"
        >
          <p className="label mb-6 text-mist">Have a project in mind?</p>
          <h2 className="display text-[clamp(2.8rem,13vw,12rem)]">
            <span className="block overflow-hidden">
              <span className="inline-flex items-center gap-6">
                Let's talk
                <span className="inline-grid h-[0.7em] w-[0.7em] place-items-center rounded-full bg-accent text-[0.4em] text-paper transition-transform duration-500 group-hover:rotate-45">
                  ↗
                </span>
              </span>
            </span>
          </h2>
          <p className="mt-6 inline-block text-xl text-accent link-sweep md:text-3xl">
            {profile.email}
          </p>
        </a>

        {/* Contact meta row */}
        <div className="rule mt-20 grid grid-cols-2 gap-8 pt-10 md:grid-cols-4">
          <div>
            <span className="label text-mist">Email</span>
            <a
              href={`mailto:${profile.email}`}
              className="link-sweep mt-3 block break-all"
            >
              {profile.email}
            </a>
          </div>
          <div>
            <span className="label text-mist">Social</span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="link-sweep mt-3 block"
            >
              LinkedIn ↗
            </a>
          </div>
          <div>
            <span className="label text-mist">Location</span>
            <p className="mt-3">{profile.location}</p>
          </div>
        </div>
      </div>

      <footer className="mx-auto mt-24 flex max-w-7xl flex-col items-center justify-center gap-3 pb-10 text-sm text-mist sm:flex-row">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        {/* <span>Designed & built with React · GSAP · Three.js · Tailwind</span> */}
      </footer>
    </section>
  )
}
