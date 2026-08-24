import React, { useEffect } from 'react'
import Lenis from 'lenis'
import { BackgroundMeshGlow } from './components/BackgroundMeshGlow'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { Process } from './components/Process'
import { Pricing } from './components/Pricing'
import { Footer } from './components/Footer'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="relative min-h-screen">
      <BackgroundMeshGlow />
      <Navbar />
      
      <main>
        <Hero />
        <Projects />
        <Services />
        <Process />
        <Pricing />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
