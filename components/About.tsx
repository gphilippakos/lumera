import Image from 'next/image'

const credentials = [
  'Licensed Aesthetician',
  'PCA Skin Certified',
  'HydraFacial™ Certified',
  '500+ Clients Served',
  '5★ Google Rated',
]

export function About() {
  return (
    <section id="about" className="py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative h-[480px] lg:h-[560px] overflow-hidden fade-up">
            <Image
              src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=1200&q=80&auto=format&fit=crop"
              alt="Serene treatment room at Luméra Skin Studio"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            {/* Gold corner accent */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold" />
          </div>

          {/* Text */}
          <div className="fade-up">
            <p className="font-sans text-xs tracking-widest uppercase text-warm-grey mb-4">
              Our Philosophy
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal leading-tight mb-8">
              Your skin tells a story.<br />
              <em className="italic text-gold">We help you write the next chapter.</em>
            </h2>
            <p className="font-sans text-base text-warm-grey leading-relaxed mb-6">
              At Luméra, every treatment begins with listening — to your skin, your story, and your goals. We combine clinical expertise with a deeply personal approach to skincare that delivers real, lasting results.
            </p>
            <p className="font-sans text-base text-warm-grey leading-relaxed mb-10">
              This is a place where you slow down, and your skin catches up. No protocols. No one-size-fits-all menus. Just thoughtful, expert care — tailored to you.
            </p>

            {/* Credential badges */}
            <div className="flex flex-wrap gap-3">
              {credentials.map((c) => (
                <span
                  key={c}
                  className="px-4 py-2 border border-gold-light text-charcoal font-sans text-xs tracking-wider uppercase bg-blush"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
