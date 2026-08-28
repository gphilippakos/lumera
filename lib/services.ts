// Luméra Skin Studio — Services Data
// Edit this file to update services across the entire site

export interface Service {
  id: string
  category: 'facials' | 'advanced' | 'brow-lash' | 'addons'
  categoryLabel: string
  name: string
  description: string
  duration: string
  price: string
  icon: string
}

export const services: Service[] = [
  // ── SIGNATURE FACIALS ──
  {
    id: 'lumera-glow',
    category: 'facials',
    categoryLabel: 'Signature Facials',
    name: 'The Luméra Glow Facial',
    description:
      'Our signature treatment combines deep cleansing, enzyme exfoliation, and a customized hydration infusion. Tailored to your skin\'s needs — every time.',
    duration: '75 min',
    price: 'from $145',
    icon: '✦',
  },
  {
    id: 'hydrafacial',
    category: 'facials',
    categoryLabel: 'Signature Facials',
    name: 'HydraFacial™ Treatment',
    description:
      'The celebrity-loved, clinically proven treatment that simultaneously cleanses, extracts, and infuses skin with nourishing serums. Instant, visible results.',
    duration: '60 min',
    price: 'from $185',
    icon: '◈',
  },
  // ── ADVANCED TREATMENTS ──
  {
    id: 'chemical-peel',
    category: 'advanced',
    categoryLabel: 'Advanced Treatments',
    name: 'Chemical Peel Series',
    description:
      'Medical-grade resurfacing peels targeting sun damage, hyperpigmentation, fine lines, and uneven texture. Available in light, medium, and advanced strengths.',
    duration: '45 min',
    price: 'from $125',
    icon: '◇',
  },
  {
    id: 'microneedling',
    category: 'advanced',
    categoryLabel: 'Advanced Treatments',
    name: 'Microneedling + Collagen Induction',
    description:
      'Precision micro-channels stimulate your skin\'s natural collagen production. Effective for acne scarring, enlarged pores, and loss of firmness.',
    duration: '90 min',
    price: 'from $275',
    icon: '⬡',
  },
  {
    id: 'dermaplaning',
    category: 'advanced',
    categoryLabel: 'Advanced Treatments',
    name: 'Dermaplaning',
    description:
      'Manual exfoliation removes peach fuzz and dead skin cells in one pass — revealing a smoother, brighter canvas. The perfect pre-event treatment.',
    duration: '45 min',
    price: 'from $95',
    icon: '✧',
  },
  // ── BROW & LASH ──
  {
    id: 'lash-lift',
    category: 'brow-lash',
    categoryLabel: 'Brow & Lash',
    name: 'Lash Lift & Tint',
    description:
      'A semi-permanent curl and volumizing tint that opens the eye without mascara. Wake up beautiful — results last up to 8 weeks.',
    duration: '60 min',
    price: 'from $110',
    icon: '◡',
  },
  {
    id: 'brow-lamination',
    category: 'brow-lash',
    categoryLabel: 'Brow & Lash',
    name: 'Brow Lamination + Design',
    description:
      'The "brow soap" effect, perfected. We sculpt, set, and tint your brows into your ideal shape — fluffy, full, and long-lasting.',
    duration: '45 min',
    price: 'from $90',
    icon: '⌒',
  },
  // ── ADD-ONS ──
  {
    id: 'led-therapy',
    category: 'addons',
    categoryLabel: 'Add-Ons',
    name: 'LED Light Therapy',
    description:
      'Clinically proven wavelengths target acne, inflammation, and collagen loss. Add to any facial for accelerated healing and enhanced results.',
    duration: '20 min add-on',
    price: '+$45',
    icon: '☀',
  },
]

export const categories = [
  { key: 'all', label: 'All Services' },
  { key: 'facials', label: 'Signature Facials' },
  { key: 'advanced', label: 'Advanced Treatments' },
  { key: 'brow-lash', label: 'Brow & Lash' },
  { key: 'addons', label: 'Add-Ons' },
] as const
