'use client'

interface LogoProps {
  variant?: 'dark' | 'light'
  className?: string
}

export function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const primary = variant === 'light' ? '#F5F0EB' : '#2C2C2C'
  const accent = '#C9A96E'

  return (
    <svg
      viewBox="0 0 220 60"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Luméra Skin Studio"
      role="img"
      className={className}
      style={{ width: '160px', height: 'auto' }}
    >
      {/* LUMÉRA — display wordmark */}
      <text
        x="110"
        y="28"
        textAnchor="middle"
        fontFamily="var(--font-cormorant), Georgia, serif"
        fontWeight="300"
        fontSize="26"
        letterSpacing="6"
        fill={primary}
      >
        LUMÉRA
      </text>

      {/* Gold rule */}
      <line x1="18" y1="36" x2="202" y2="36" stroke={accent} strokeWidth="0.75" />

      {/* SKIN STUDIO — sub-line */}
      <text
        x="110"
        y="52"
        textAnchor="middle"
        fontFamily="var(--font-dm-sans), system-ui, sans-serif"
        fontWeight="300"
        fontSize="9"
        letterSpacing="5"
        fill={primary}
        opacity="0.85"
      >
        SKIN STUDIO
      </text>
    </svg>
  )
}

export function LogoLight({ className = '' }: { className?: string }) {
  return <Logo variant="light" className={className} />
}
