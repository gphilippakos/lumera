'use client'

import { useState } from 'react'

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="announcement-bar" role="banner">
      <p className="font-sans text-xs tracking-widest uppercase">
        Now welcoming new clients —{' '}
        <a
          href="#booking"
          className="underline underline-offset-2 font-medium hover:opacity-80 transition-opacity"
        >
          Book your complimentary skin consultation today →
        </a>
      </p>
      <button
        className="close-btn"
        onClick={() => setVisible(false)}
        aria-label="Dismiss announcement"
      >
        ×
      </button>
    </div>
  )
}
