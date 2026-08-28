import Image from 'next/image'
import { LogoLight } from './Logo'

export function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=85&auto=format&fit=crop"
        alt="Luxurious facial treatment at Luméra Skin Studio"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-ivory/80 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-3xl mx-auto">
        <div className="flex justify-center mb-8">
          <LogoLight className="w-56 md:w-72" />
        </div>

        <p className="font-sans text-xs tracking-widest uppercase text-ivory/80 mb-5 mt-2">
          Where science meets self-care.
        </p>

        <p className="font-display text-xl md:text-2xl font-light text-ivory/90 leading-relaxed mb-10 max-w-xl mx-auto">
          Personalized skincare treatments in a calm,<br className="hidden md:block" /> results-driven studio environment.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#booking"
            className="w-full sm:w-auto px-10 py-4 bg-gold text-charcoal font-sans text-xs tracking-widest uppercase font-medium hover:bg-gold-light transition-colors text-center"
          >
            Book Your Appointment
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto px-10 py-4 border border-ivory text-ivory font-sans text-xs tracking-widest uppercase font-medium hover:bg-ivory/10 transition-colors text-center"
          >
            Explore Services ↓
          </a>
        </div>
      </div>
    </section>
  )
}
