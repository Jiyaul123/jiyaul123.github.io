import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Reveals elements matching `.reveal` inside the scoped container as they
 * scroll into view, with an optional stagger between siblings.
 *
 * Uses fromTo + immediateRender:false and toggleActions:'play none none none'
 * so elements are guaranteed to end visible even if ScrollTrigger's start
 * position is recalculated after async layout (fonts, lazy 3D chunk, Lenis).
 */
export function useReveal<T extends HTMLElement>(stagger = 0.12) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>('.reveal')
      gsap.fromTo(
        targets,
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          ease: 'power3.out',
          stagger,
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [stagger])

  return ref
}
