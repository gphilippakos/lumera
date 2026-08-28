'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Logo } from './Logo'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-ivory/95 backdrop-blur-sm border-b border-gold-light shadow-sm'
            : 'bg-transparent'
        }`}
        style={{ top: 'var(--announcement-height, 0px)' }}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Luméra Skin Studio — home">
            <Logo variant={scrolled ? 'dark' : 'light'} />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`font-sans text-xs tracking-widest uppercase transition-colors hover:text-gold ${
                    scrolled ? 'text-charcoal' : 'text-ivory'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Book Now CTA */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNavClick('#booking')}
              className="hidden md:inline-flex items-center px-5 py-2.5 bg-gold text-charcoal font-sans text-xs tracking-widest uppercase font-medium hover:bg-gold-light transition-colors"
            >
              Book Now
            </button>

            {/* Mobile Book Now (always visible) */}
            <button
              onClick={() => handleNavClick('#booking')}
              className="md:hidden inline-flex items-center px-4 py-2 bg-gold text-charcoal font-sans text-xs tracking-widest uppercase font-medium hover:bg-gold-light transition-colors"
            >
              Book
            </button>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span
                className={`block w-6 h-px transition-all duration-300 ${
                  scrolled ? 'bg-charcoal' : 'bg-ivory'
                } ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`}
              />
              <span
                className={`block w-6 h-px transition-all duration-300 ${
                  scrolled ? 'bg-charcoal' : 'bg-ivory'
                } ${menuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block w-6 h-px transition-all duration-300 ${
                  scrolled ? 'bg-charcoal' : 'bg-ivory'
                } ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile slide menu */}
      <div
        className={`fixed inset-0 z-40 bg-ivory flex flex-col items-center justify-center transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="font-display text-4xl font-light text-charcoal tracking-wider hover:text-gold transition-colors"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleNavClick('#booking')}
              className="mt-4 px-10 py-4 bg-gold text-charcoal font-sans text-xs tracking-widest uppercase font-medium hover:bg-gold-light transition-colors"
            >
              Book Now
            </button>
          </li>
        </ul>
      </div>
    </>
  )
}
