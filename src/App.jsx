import React, { useEffect, lazy, Suspense } from 'react'
import Lenis from 'lenis'
import { BackgroundMeshGlow } from './components/BackgroundMeshGlow'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'

// Code splitting for below-the-fold components to reduce initial JS payload
const Projects = lazy(() => import('./components/Projects').then(m => ({ default: m.Projects })))
const Services = lazy(() => import('./components/Services').then(m => ({ default: m.Services })))
const Process = lazy(() => import('./components/Process').then(m => ({ default: m.Process })))
const Pricing = lazy(() => import('./components/Pricing').then(m => ({ default: m.Pricing })))
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })))

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
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <Projects />
          <Services />
          <Process />
          <Pricing />
        </Suspense>
      </main>
      
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
