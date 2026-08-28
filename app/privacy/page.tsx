import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Luméra Skin Studio',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-ivory py-28 px-6">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="font-sans text-xs tracking-widest uppercase text-warm-grey hover:text-gold transition-colors mb-10 inline-block">
          ← Back to Home
        </Link>
        <h1 className="font-display text-4xl font-light text-charcoal mb-8">Privacy Policy</h1>
        <div className="font-sans text-sm text-warm-grey leading-relaxed space-y-6">
          <p><strong className="text-charcoal">Last updated:</strong> {new Date().getFullYear()}</p>
          <p>Luméra Skin Studio ("we," "us," or "our") respects your privacy. This policy explains how we collect, use, and protect your personal information when you use our website.</p>
          <h2 className="font-display text-2xl font-light text-charcoal">Information We Collect</h2>
          <p>We collect information you provide directly — such as name, email, and phone number — when you contact us or book an appointment. We also collect standard web analytics data (page views, session duration) to improve our site.</p>
          <h2 className="font-display text-2xl font-light text-charcoal">How We Use Your Information</h2>
          <p>Your information is used solely to respond to inquiries, confirm appointments, and send service reminders. We do not sell or share your data with third parties except as required by law.</p>
          <h2 className="font-display text-2xl font-light text-charcoal">Data Security</h2>
          <p>We implement appropriate technical measures to protect your information. Appointment booking is handled by Cal.com, subject to their privacy policy.</p>
          <h2 className="font-display text-2xl font-light text-charcoal">Contact</h2>
          <p>Questions? Email us at <a href="mailto:hello@lumeraskinstudio.com" className="text-gold hover:underline">hello@lumeraskinstudio.com</a>.</p>
        </div>
      </div>
    </main>
  )
}
