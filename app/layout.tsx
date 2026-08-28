import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Luméra Skin Studio | Luxury Aesthetician Services',
  description:
    'Expert skincare treatments including HydraFacial, chemical peels, microneedling, and dermaplaning. Book your personalized appointment at Luméra Skin Studio.',
  keywords: [
    'aesthetician',
    'skincare',
    'facial',
    'HydraFacial',
    'chemical peel',
    'microneedling',
    'dermaplaning',
    'lash lift',
    'brow lamination',
    'Luméra Skin Studio',
  ],
  openGraph: {
    title: 'Luméra Skin Studio | Luxury Aesthetician Services',
    description:
      'Where science meets self-care. Book your personalized skin treatment today.',
    url: 'https://lumeraskinstudio.com',
    siteName: 'Luméra Skin Studio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=85&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Luméra Skin Studio — luxury aesthetician services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luméra Skin Studio | Luxury Aesthetician Services',
    description: 'Where science meets self-care.',
    images: [
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=85&auto=format&fit=crop',
    ],
  },
  robots: { index: true, follow: true },
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Luméra Skin Studio',
  description: 'Luxury aesthetician and skincare studio offering personalized treatments.',
  priceRange: '$$',
  telephone: '[Your Phone]',
  email: 'hello@lumeraskinstudio.com',
  url: 'https://lumeraskinstudio.com',
  image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=85&auto=format&fit=crop',
  openingHours: ['Tu-Fr 10:00-19:00', 'Sa 09:00-17:00'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '[Your Street Address]',
    addressLocality: '[Your City]',
    addressRegion: '[Your State]',
    postalCode: '[Your ZIP]',
    addressCountry: 'US',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
        {children}
        <Analytics />
      </body>
    </html>
  )
}
