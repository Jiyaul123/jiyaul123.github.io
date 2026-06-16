import { Suspense, lazy } from 'react'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

// Three.js is heavy — load the background scene lazily so it doesn't block
// first paint of the content.
const Background3D = lazy(() => import('./components/Background3D'))

export default function App() {
  useSmoothScroll()

  return (
    <>
      <Suspense fallback={null}>
        <Background3D />
      </Suspense>
      <Cursor />
      <Navbar />
      <main className="relative">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
