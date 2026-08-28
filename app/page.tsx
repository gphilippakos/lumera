'use client'

import { useEffect, useRef } from 'react'
import { AnnouncementBar } from '@/components/AnnouncementBar'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Services } from '@/components/Services'
import { Booking } from '@/components/Booking'
import { BeforeAfter } from '@/components/BeforeAfter'
import { Testimonials } from '@/components/Testimonials'
import { Aesthetician } from '@/components/Aesthetician'
import { InstagramGrid } from '@/components/InstagramGrid'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  // Intersection Observer for fade-up animations
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 }
    )

    const els = document.querySelectorAll('.fade-up')
    els.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Booking />
        <BeforeAfter />
        <Testimonials />
        <Aesthetician />
        <InstagramGrid />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
