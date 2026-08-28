export function Booking() {
  const calUrl = process.env.NEXT_PUBLIC_CAL_URL || 'https://cal.com'

  return (
    <section id="booking" className="py-16 md:py-28 bg-ivory">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 fade-up">
          <p className="font-sans text-xs tracking-widest uppercase text-warm-grey mb-3 md:mb-4">
            Reserve Your Visit
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-charcoal mb-4">
            Book Your Appointment
          </h2>
          <p className="font-sans text-sm md:text-base text-warm-grey max-w-lg mx-auto">
            Real-time availability. Instant confirmation. Automated reminders sent to your phone and email.
          </p>
        </div>

        {/* Cal.com embed — clamps height on mobile to avoid enormous blank space */}
        <div className="border border-gold-light bg-white fade-up overflow-hidden">
          <iframe
            src={calUrl}
            style={{ width: '100%', height: 'min(700px, 80vh)', border: 'none' }}
            title="Book an appointment at Luméra Skin Studio"
            loading="lazy"
          />
        </div>

        {/* Policy note */}
        <p className="mt-5 md:mt-6 text-center font-sans text-xs text-warm-grey leading-relaxed px-2">
          A credit card is required to hold your appointment. Cancellations within 24 hours will incur a 50% service fee.{' '}
          <a href="/cancellation" className="underline underline-offset-2 hover:text-gold transition-colors">
            See our full Cancellation Policy →
          </a>
        </p>
      </div>
    </section>
  )
}
