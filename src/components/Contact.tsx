import { useReveal } from '../hooks/useReveal'
import { profile } from '../data/portfolio'

export default function Contact() {
  const ref = useReveal<HTMLElement>(0.1)

  return (
    <section ref={ref} id="contact" className="px-6 py-32 md:px-12">
      <div className="mx-auto max-w-4xl text-center">
        <p className="reveal mb-6 text-sm uppercase tracking-[0.3em] text-accent">
          Let's build something
        </p>

        <h2 className="reveal font-display text-[clamp(2.5rem,8vw,6rem)] font-bold leading-none tracking-tight">
          Get in <span className="text-gradient">touch</span>
        </h2>

        <p className="reveal mx-auto mt-8 max-w-xl text-lg text-mist">
          Open to senior React Native roles and ambitious real-time / AI mobile
          projects. The fastest way to reach me is email.
        </p>

        <div className="reveal mt-10">
          <a
            href={`mailto:${profile.email}`}
            className="inline-block rounded-full bg-accent px-8 py-4 text-lg font-medium text-white shadow-lg shadow-accent/30 transition-transform hover:scale-105"
          >
            {profile.email}
          </a>
        </div>

        <div className="reveal mt-12 flex flex-wrap items-center justify-center gap-8 text-mist">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-ink"
          >
            LinkedIn
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, '')}`}
            className="transition-colors hover:text-ink"
          >
            {profile.phone}
          </a>
        </div>
      </div>

      <footer className="reveal mx-auto mt-28 flex max-w-6xl flex-col items-center justify-center gap-4 border-t border-ink/10 pt-8 text-sm text-mist sm:flex-row">
        <span className = "">© {new Date().getFullYear()} {profile.name}</span>
        {/* <span>Built with React, Three.js, GSAP & Tailwind</span> */}
      </footer>
    </section>
  )
}
