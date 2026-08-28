import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cancellation Policy | Luméra Skin Studio',
}

export default function CancellationPage() {
  return (
    <main className="min-h-screen bg-ivory py-28 px-6">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="font-sans text-xs tracking-widest uppercase text-warm-grey hover:text-gold transition-colors mb-10 inline-block">
          ← Back to Home
        </Link>
        <h1 className="font-display text-4xl font-light text-charcoal mb-8">Cancellation Policy</h1>
        <div className="font-sans text-sm text-warm-grey leading-relaxed space-y-6">
          <p>We understand that life happens. We ask that you notify us as early as possible if you need to cancel or reschedule your appointment.</p>
          <h2 className="font-display text-2xl font-light text-charcoal">24-Hour Notice Required</h2>
          <p>Cancellations or rescheduling requests made <strong className="text-charcoal">less than 24 hours</strong> before your scheduled appointment will incur a <strong className="text-charcoal">50% service fee</strong> charged to the card on file.</p>
          <h2 className="font-display text-2xl font-light text-charcoal">No-Shows</h2>
          <p>Clients who do not show up without prior notice will be charged <strong className="text-charcoal">100% of the service fee</strong>.</p>
          <h2 className="font-display text-2xl font-light text-charcoal">Late Arrivals</h2>
          <p>We will do our best to accommodate late arrivals. Please note that your treatment time may be shortened to avoid affecting the next client's appointment.</p>
          <h2 className="font-display text-2xl font-light text-charcoal">How to Cancel</h2>
          <p>Use the link in your confirmation email or contact us directly at <a href="mailto:hello@lumeraskinstudio.com" className="text-gold hover:underline">hello@lumeraskinstudio.com</a>.</p>
        </div>
      </div>
    </main>
  )
}
