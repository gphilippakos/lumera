const reviews = [
  {
    name: 'Sarah M.',
    location: 'New York',
    rating: 5,
    text: "I've tried every facial in the city. Luméra is different. My skin has never looked — or felt — this good. I'm not going anywhere else.",
  },
  {
    name: 'Priya K.',
    location: 'verified client',
    rating: 5,
    text: "The microneedling series changed everything for my acne scars. Three sessions and I've stopped wearing foundation. Life-changing, honestly.",
  },
  {
    name: 'Danielle R.',
    location: 'returning client',
    rating: 5,
    text: 'The atmosphere, the care, the results — Luméra hits differently. My aesthetician remembered every detail of my skin history from visit one.',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-gold text-sm" aria-hidden="true">★</span>
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="py-16 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16 fade-up">
          <p className="font-sans text-xs tracking-widest uppercase text-warm-grey mb-3 md:mb-4">
            Client Love
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-charcoal mb-4">
            What Our Clients Say
          </h2>
        </div>

        {/* Review cards — single col on mobile, 3 col on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mb-10 md:mb-12">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className="bg-blush border border-gold-light p-6 md:p-8 flex flex-col gap-3 md:gap-4 fade-up"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Stars count={r.rating} />
              <p className="font-display text-lg md:text-xl font-light text-charcoal leading-relaxed italic flex-1">
                "{r.text}"
              </p>
              <div className="pt-3 md:pt-4 border-t border-gold-light">
                <p className="font-sans text-sm font-medium text-charcoal">{r.name}</p>
                <p className="font-sans text-xs text-warm-grey tracking-wide">{r.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate rating */}
        <div className="text-center fade-up">
          <p className="font-sans text-sm text-warm-grey mb-3">
            <span className="text-gold">★</span> 4.9 on Google · 200+ five-star reviews
          </p>
          <a
            href="https://g.page/r/lumeraskinstudio/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-sans text-xs tracking-widest uppercase text-gold border-b border-gold pb-0.5 hover:text-gold-light hover:border-gold-light transition-colors"
          >
            Read More Reviews →
          </a>
        </div>
      </div>
    </section>
  )
}
