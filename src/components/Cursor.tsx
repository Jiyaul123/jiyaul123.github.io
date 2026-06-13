import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

/**
 * A trailing dual-ring cursor. Disabled on touch / coarse-pointer devices.
 */
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    const xTo = gsap.quickTo(ring.current, 'x', { duration: 0.5, ease: 'power3' })
    const yTo = gsap.quickTo(ring.current, 'y', { duration: 0.5, ease: 'power3' })
    const dxTo = gsap.quickTo(dot.current, 'x', { duration: 0.12, ease: 'power3' })
    const dyTo = gsap.quickTo(dot.current, 'y', { duration: 0.12, ease: 'power3' })

    const move = (e: MouseEvent) => {
      xTo(e.clientX)
      yTo(e.clientY)
      dxTo(e.clientX)
      dyTo(e.clientY)
    }

    const grow = () =>
      gsap.to(ring.current, { scale: 2.2, opacity: 0.5, duration: 0.3 })
    const shrink = () =>
      gsap.to(ring.current, { scale: 1, opacity: 1, duration: 0.3 })

    window.addEventListener('mousemove', move)
    const interactive = document.querySelectorAll(
      'a, button, [data-hover]'
    )
    interactive.forEach((el) => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      interactive.forEach((el) => {
        el.removeEventListener('mouseenter', grow)
        el.removeEventListener('mouseleave', shrink)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-accent md:block"
      />
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent md:block"
      />
    </>
  )
}
