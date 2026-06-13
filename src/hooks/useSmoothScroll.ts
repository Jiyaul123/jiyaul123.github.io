import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Wires Lenis smooth scrolling into GSAP's ticker so ScrollTrigger
 * animations stay in sync with the eased scroll position.
 */
export function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    lenis.on('scroll', ScrollTrigger.update)

    const onTick = (time: number) => {
      // GSAP ticker reports seconds; Lenis expects milliseconds
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(onTick)
    gsap.ticker.lagSmoothing(0)

    // Anchor links → smooth scroll via Lenis
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null
      if (!anchor) return
      const id = anchor.getAttribute('href')
      if (!id || id === '#') return
      const el = document.querySelector(id)
      if (el) {
        e.preventDefault()
        lenis.scrollTo(el as HTMLElement, { offset: -20 })
      }
    }
    document.addEventListener('click', onClick)

    // Recalculate trigger positions once fonts and the lazy 3D chunk have
    // settled — otherwise some sections can be measured before final layout.
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)
    if (document.fonts?.ready) document.fonts.ready.then(refresh)
    const t = window.setTimeout(refresh, 600)

    return () => {
      window.removeEventListener('load', refresh)
      window.clearTimeout(t)
      document.removeEventListener('click', onClick)
      gsap.ticker.remove(onTick)
      lenis.destroy()
    }
  }, [])
}
