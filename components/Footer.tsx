import Link from 'next/link'
import { Logo } from './Logo'

const serviceLinks = [
  { label: 'The Luméra Glow Facial', href: '#services' },
  { label: 'HydraFacial™ Treatment', href: '#services' },
  { label: 'Chemical Peel Series', href: '#services' },
  { label: 'Microneedling', href: '#services' },
  { label: 'Dermaplaning', href: '#services' },
  { label: 'Lash Lift & Tint', href: '#services' },
]

const studioLinks = [
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
  { label: 'Book Now', href: '#booking' },
]

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/lumeraskinstudio', icon: '◈' },
  { label: 'Facebook', href: 'https://facebook.com/lumeraskinstudio', icon: '◆' },
  { label: 'TikTok', href: 'https://tiktok.com/@lumeraskinstudio', icon: '✦' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-ivory/80 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 pb-16 border-b border-ivory/10">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Logo variant="light" />
            <p className="font-sans text-xs text-ivory/50 tracking-widest uppercase">
              Where science meets self-care.
            </p>
            <div className="flex gap-4 mt-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-gold hover:text-gold-light transition-colors text-lg"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-ivory/50 mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-sans text-sm text-ivory/70 hover:text-gold transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-ivory/50 mb-6">
              Studio
            </h4>
            <ul className="space-y-3 mb-8">
              {studioLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-sans text-sm text-ivory/70 hover:text-gold transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#booking"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center px-6 py-3 bg-gold text-charcoal font-sans text-xs tracking-widest uppercase font-medium hover:bg-gold-light transition-colors"
            >
              Book Now →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-ivory/40">
          <p>© {year} Luméra Skin Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cancellation" className="hover:text-gold transition-colors">
              Cancellation Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
