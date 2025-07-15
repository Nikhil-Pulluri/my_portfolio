'use client'
import HeroSection from '@/components/heroSection'
import { About } from '@/components/about'
import { FloatingDockDemo } from '@/components/navDock'

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <FloatingDockDemo />
    </>
  )
}
