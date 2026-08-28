'use client'

import { useState } from 'react'
import { services, categories } from '@/lib/services'

export function Services() {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const filtered =
    activeCategory === 'all'
      ? services
      : services.filter((s) => s.category === activeCategory)

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className="py-28 bg-blush">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16 fade-up">
          <p className="font-sans text-xs tracking-widest uppercase text-warm-grey mb-4">
            What We Offer
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal mb-4">
            Our Treatments
          </h2>
          <p className="font-sans text-base text-warm-grey max-w-md mx-auto">
            Every service at Luméra is customized — never one-size-fits-all.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-14 fade-up">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 font-sans text-xs tracking-widest uppercase transition-colors ${
                activeCategory === cat.key
                  ? 'bg-gold text-charcoal'
                  : 'bg-ivory text-warm-grey border border-gold-light hover:bg-gold-light'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((service, i) => (
            <div
              key={service.id}
              className="bg-ivory border border-gold-light p-8 flex flex-col gap-4 fade-up hover:border-gold transition-colors"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Icon + category */}
              <div className="flex items-center justify-between">
                <span className="text-2xl text-gold" aria-hidden="true">
                  {service.icon}
                </span>
                <span className="px-3 py-1 bg-blush text-warm-grey font-sans text-xs tracking-wider uppercase">
                  {service.categoryLabel}
                </span>
              </div>

              {/* Name */}
              <h3 className="font-display text-2xl font-light text-charcoal leading-snug">
                {service.name}
              </h3>

              {/* Description */}
              <p className="font-sans text-sm text-warm-grey leading-relaxed flex-1">
                {service.description}
              </p>

              {/* Duration + price row */}
              <div className="flex items-center justify-between pt-2 border-t border-gold-light">
                <span className="font-sans text-xs tracking-wider text-warm-grey uppercase">
                  {service.duration}
                </span>
                <span className="font-display text-xl font-light text-gold">
                  {service.price}
                </span>
              </div>

              {/* CTA */}
              <button
                onClick={scrollToBooking}
                className="mt-2 w-full py-3 bg-charcoal text-ivory font-sans text-xs tracking-widest uppercase hover:bg-gold hover:text-charcoal transition-colors"
              >
                Book This →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
