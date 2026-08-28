import Image from 'next/image'

export function Hero() {
  return (
    <section
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ minHeight: 'calc(100svh - 0px)' }}
    >
      {/* Background image — mobile focal point top */}
      <Image
        src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=85&auto=format&fit=crop"
        alt="Luxurious facial treatment at Luméra Skin Studio"
        fill
        priority
        sizes="100vw"
        className="object-cover object-top md:object-center"
      />

      {/* Overlay — lighter overall, strong only at very bottom edge for text legibility */}
      <div className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(to bottom, rgba(44,44,44,0.25) 0%, rgba(44,44,44,0.10) 40%, rgba(44,44,44,0.45) 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-3xl mx-auto py-24 md:py-0">

        {/* Tagline */}
        <p className="font-sans text-xs tracking-widest uppercase mb-4"
          style={{ color: 'rgba(255,255,255,1)', textShadow: '0 1px 6px rgba(0,0,0,0.6)' }}
        >
          Where science meets self-care.
        </p>

        {/* Sub-tagline */}
        <p className="font-display text-lg sm:text-xl md:text-2xl font-light leading-relaxed mb-8 md:mb-10 max-w-xl mx-auto"
          style={{ color: 'rgba(255,255,255,1)', textShadow: '0 1px 8px rgba(0,0,0,0.55)' }}
        >
          Personalized skincare treatments in a calm, results-driven studio environment.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
          <a
            href="#booking"
            className="w-full sm:w-auto px-8 py-4 bg-gold text-charcoal font-sans text-xs tracking-widest uppercase font-medium hover:bg-gold-light transition-colors text-center justify-center"
          >
            Book Your Appointment
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-4 font-sans text-xs tracking-widest uppercase font-medium transition-colors text-center justify-center"
            style={{
              border: '1px solid rgba(255,255,255,0.75)',
              color: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(2px)',
            }}
          >
            Explore Services ↓
          </a>
        </div>
      </div>
    </section>
  )
}
