import Image from 'next/image'

const certifications = [
  'Licensed Aesthetician, State Board Certified',
  'Advanced Chemical Peel Certified',
  'HydraFacial™ Certified Provider',
  'PCA Skin Partner',
  'LED Light Therapy Trained',
]

export function Aesthetician() {
  return (
    <section className="py-28 bg-blush">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text — left on desktop */}
          <div className="fade-up order-2 lg:order-1">
            <p className="font-sans text-xs tracking-widest uppercase text-warm-grey mb-4">
              Your Practitioner
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal mb-8 leading-tight">
              Meet Your<br />
              <em className="italic text-gold">Aesthetician</em>
            </h2>
            <p className="font-sans text-base text-warm-grey leading-relaxed mb-5">
              I've spent years studying the science of skin — and even longer believing that how you feel in your skin shapes everything else. At Luméra, I bring clinical precision and a deeply personal approach to every treatment.
            </p>
            <p className="font-sans text-base text-warm-grey leading-relaxed mb-10">
              Your skin is unique. Your care should be too.
            </p>

            {/* Certifications */}
            <ul className="space-y-3 mb-10">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-start gap-3 font-sans text-sm text-charcoal">
                  <span className="text-gold mt-0.5" aria-hidden="true">✦</span>
                  {cert}
                </li>
              ))}
            </ul>

            <a
              href="#booking"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center px-8 py-4 bg-gold text-charcoal font-sans text-xs tracking-widest uppercase font-medium hover:bg-gold-light transition-colors"
            >
              Book Your Appointment →
            </a>
          </div>

          {/* Portrait image */}
          <div className="relative h-[480px] lg:h-[600px] overflow-hidden fade-up order-1 lg:order-2">
            <Image
              src="https://images.unsplash.com/photo-1559599101-f09722fb4948?w=800&q=85&auto=format&fit=crop"
              alt="Luméra Skin Studio aesthetician — expert skincare practitioner"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blush/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
