'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import Image from 'next/image'

interface BAItem {
  before: string
  after: string
  treatment: string
  category: string
}

const items: BAItem[] = [
  {
    before:
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=85&auto=format&fit=crop',
    after:
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=85&auto=format&fit=crop',
    treatment: 'Luméra Glow Facial',
    category: 'facials',
  },
  {
    before:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=85&auto=format&fit=crop',
    after:
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=85&auto=format&fit=crop',
    treatment: 'Microneedling Series',
    category: 'advanced',
  },
  {
    before:
      'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=85&auto=format&fit=crop',
    after:
      'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&q=85&auto=format&fit=crop',
    treatment: 'Lash Lift & Tint',
    category: 'brow-lash',
  },
]

const filterTabs = [
  { key: 'all', label: 'All' },
  { key: 'facials', label: 'Facials' },
  { key: 'advanced', label: 'Advanced' },
  { key: 'brow-lash', label: 'Brow & Lash' },
]

function Slider({ item }: { item: BAItem }) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100))
    setPosition(pct)
  }, [])

  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true
    updatePosition(e.clientX)
  }
  const onTouchStart = (e: React.TouchEvent) => {
    dragging.current = true
    updatePosition(e.touches[0].clientX)
  }

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
      updatePosition(clientX)
    }
    const onUp = () => { dragging.current = false }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchmove', onMove, { passive: true })
    window.addEventListener('touchend', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('touchend', onUp)
    }
  }, [updatePosition])

  return (
    <div className="flex flex-col gap-4 fade-up">
      <div
        ref={containerRef}
        className="ba-slider relative w-full aspect-[4/3] cursor-col-resize select-none"
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        aria-label={`Before and after comparison for ${item.treatment}`}
        role="img"
      >
        {/* Before image (full width) */}
        <div className="absolute inset-0">
          <Image
            src={item.before}
            alt={`Before ${item.treatment}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover pointer-events-none"
          />
          <span className="absolute top-3 left-3 bg-charcoal/70 text-ivory font-sans text-xs tracking-wider uppercase px-3 py-1">
            Before
          </span>
        </div>

        {/* After image (clipped) */}
        <div
          className="ba-after"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={item.after}
            alt={`After ${item.treatment}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover pointer-events-none"
          />
          <span className="absolute top-3 right-3 bg-gold/90 text-charcoal font-sans text-xs tracking-wider uppercase px-3 py-1">
            After
          </span>
        </div>

        {/* Drag handle */}
        <div
          className="ba-handle"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        >
          <div className="ba-handle-icon">⟨ ⟩</div>
        </div>
      </div>

      <p className="text-center font-sans text-xs tracking-widest uppercase text-warm-grey">
        {item.treatment}
      </p>
    </div>
  )
}

export function BeforeAfter() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered =
    activeFilter === 'all' ? items : items.filter((i) => i.category === activeFilter)

  return (
    <section id="gallery" className="py-28 bg-blush">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14 fade-up">
          <p className="font-sans text-xs tracking-widest uppercase text-warm-grey mb-4">
            Real Results
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal mb-4">
            The Results
          </h2>
          <p className="font-sans text-base text-warm-grey max-w-md mx-auto">
            Real clients. Real results. No filters.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 fade-up">
          {filterTabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActiveFilter(t.key)}
              className={`px-5 py-2.5 font-sans text-xs tracking-widest uppercase transition-colors ${
                activeFilter === t.key
                  ? 'bg-gold text-charcoal'
                  : 'bg-ivory text-warm-grey border border-gold-light hover:bg-gold-light'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Sliders grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <Slider key={item.treatment} item={item} />
          ))}
        </div>

        <p className="text-center mt-10 font-sans text-xs text-warm-grey italic">
          Drag the handle left or right to compare before and after.
        </p>
      </div>
    </section>
  )
}
