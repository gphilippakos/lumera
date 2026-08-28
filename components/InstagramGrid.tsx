import Image from 'next/image'

const gridImages = [
  { src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80&auto=format&fit=crop', alt: 'Facial treatment at Luméra' },
  { src: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=600&q=80&auto=format&fit=crop', alt: 'Serene treatment room ambiance' },
  { src: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80&auto=format&fit=crop', alt: 'Glowing skin results after treatment' },
  { src: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80&auto=format&fit=crop', alt: 'Skincare products and tools' },
  { src: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=600&q=80&auto=format&fit=crop', alt: 'Aesthetician at work' },
  { src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80&auto=format&fit=crop', alt: 'Luxury spa facial treatment' },
  { src: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80&auto=format&fit=crop', alt: 'Skincare treatment close-up' },
  { src: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80&auto=format&fit=crop', alt: 'Advanced skin treatment session' },
  { src: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=600&q=80&auto=format&fit=crop', alt: 'Beautiful lash and brow results' },
]

export function InstagramGrid() {
  return (
    <section className="py-16 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-14 fade-up">
          <p className="font-sans text-xs tracking-widest uppercase text-warm-grey mb-3 md:mb-4">
            Follow Our Work
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-charcoal mb-2">
            @lumeraskinstudio
          </h2>
        </div>

        {/* 3×3 grid — cells are larger on mobile to be more visible */}
        <div className="grid grid-cols-3 gap-1.5 md:gap-3 fade-up">
          {gridImages.map((img, i) => (
            <a
              key={i}
              href="https://instagram.com/lumeraskinstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden block"
              style={{ paddingBottom: '100%' /* 1:1 aspect ratio fallback */ }}
              aria-label={`View on Instagram: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 33vw, (max-width: 1280px) 25vw, 280px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover overlay — desktop only */}
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-300 hidden md:flex items-center justify-center">
                <span className="text-ivory text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true">♥</span>
              </div>
            </a>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="text-center mt-8 md:mt-10 fade-up">
          <a
            href="https://instagram.com/lumeraskinstudio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-charcoal text-charcoal font-sans text-xs tracking-widest uppercase hover:bg-charcoal hover:text-ivory transition-colors w-full sm:w-auto"
          >
            Follow on Instagram →
          </a>
        </div>
      </div>
    </section>
  )
}
