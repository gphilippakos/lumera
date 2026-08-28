import Image from 'next/image'
import { LogoLight } from './Logo'

export function Hero() {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ minHeight: 'calc(100svh - 0px)' }}
    >
      {/* Background image — mobile-optimised focal point */}
      <Image
        src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=85&auto=format&fit=crop"
        alt="Luxurious facial treatment at Luméra Skin Studio"
        fill
        priority
        sizes="100vw"
        className="object-cover object-top md:object-center"
      />

      {/* Gradient overlay — stronger at bottom for text legibility on mobile */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/25 to-charcoal/60 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-3xl mx-auto py-24 md:py-0">
        <div className="flex justify-center mb-6 md:mb-8">
          <LogoLight className="w-44 sm:w-56 md:w-72" />
        </div>

        <p className="font-sans text-xs tracking-widest uppercase text-ivory/80 mb-4 mt-1">
          Where science meets self-care.
        </p>

        <p className="font-display text-lg sm:text-xl md:text-2xl font-light text-ivory/90 leading-relaxed mb-8 md:mb-10 max-w-xl mx-auto">
          Personalized skincare treatments in a calm, results-driven studio environment.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
          <a
            href="#booking"
            className="w-full sm:w-auto px-8 py-4 bg-gold text-charcoal font-sans text-xs tracking-widest uppercase font-medium hover:bg-gold-light transition-colors text-center justify-center"
          >
            Book Your Appointment
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-4 border border-ivory/80 text-ivory font-sans text-xs tracking-widest uppercase font-medium hover:bg-ivory/10 transition-colors text-center justify-center"
          >
            Explore Services ↓
          </a>
        </div>
      </div>
    </section>
  )
}
