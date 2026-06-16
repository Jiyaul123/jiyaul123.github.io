import { useEffect, useState } from 'react'
import { profile, navLinks } from '../data/portfolio'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`flex items-center justify-between px-6 transition-all duration-500 md:px-10 ${
          scrolled ? 'glass py-3' : 'bg-transparent py-5'
        }`}
      >
        {/* Name mark */}
        <a href="#top" className="font-display text-base font-bold tracking-tight">
          {profile.name.split(' ')[0]}
          <span className="text-accent">®</span>
        </a>

        {/* Center nav */}
        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className="link-sweep flex items-baseline gap-1.5 text-sm text-ink/80 transition-colors hover:text-ink"
            >
              <span className="label text-mist">0{i + 1}</span>
              {l.label}
            </a>
          ))}
        </nav>

        {/* Availability status */}
        <a
          href="#contact"
          className="hidden items-center gap-2 text-sm md:flex"
          data-hover
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Available for work
        </a>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={`h-0.5 w-6 bg-ink transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-ink transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="glass flex flex-col gap-1 px-6 py-4 md:hidden">
          {navLinks.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-3 py-3 text-2xl font-display font-semibold"
            >
              <span className="label text-mist">0{i + 1}</span>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
