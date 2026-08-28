'use client'

import { useState } from 'react'
import { services } from '@/lib/services'

interface FormState {
  name: string
  email: string
  phone: string
  service: string
  message: string
  contactPref: string
}

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  contactPref: 'email',
}

export function Contact() {
  const [form, setForm] = useState<FormState>(initialState)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const mapsKey = process.env.NEXT_PUBLIC_MAPS_KEY

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm(initialState)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-28 bg-blush">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16 fade-up">
          <p className="font-sans text-xs tracking-widest uppercase text-warm-grey mb-4">
            Get in Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal mb-4">
            Contact Us
          </h2>
          <p className="font-sans text-base text-warm-grey max-w-md mx-auto">
            Questions about a treatment? Ready to start your skin journey? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Form */}
          <div className="fade-up">
            {status === 'success' ? (
              <div className="bg-ivory border border-gold p-10 text-center">
                <p className="text-gold text-3xl mb-4" aria-live="polite">✦</p>
                <h3 className="font-display text-2xl font-light text-charcoal mb-3">
                  Thank You
                </h3>
                <p className="font-sans text-sm text-warm-grey">
                  We'll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="font-sans text-xs tracking-widest uppercase text-charcoal">
                    Full Name <span className="text-gold">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="border border-gold-light bg-ivory px-4 py-3 font-sans text-sm text-charcoal placeholder:text-warm-grey/60 focus:border-gold focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="font-sans text-xs tracking-widest uppercase text-charcoal">
                    Email <span className="text-gold">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="border border-gold-light bg-ivory px-4 py-3 font-sans text-sm text-charcoal placeholder:text-warm-grey/60 focus:border-gold focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="font-sans text-xs tracking-widest uppercase text-charcoal">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="border border-gold-light bg-ivory px-4 py-3 font-sans text-sm text-charcoal placeholder:text-warm-grey/60 focus:border-gold focus:outline-none transition-colors"
                    placeholder="(000) 000-0000"
                  />
                </div>

                {/* Service interest */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="service" className="font-sans text-xs tracking-widest uppercase text-charcoal">
                    Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="border border-gold-light bg-ivory px-4 py-3 font-sans text-sm text-charcoal focus:border-gold focus:outline-none transition-colors appearance-none"
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                    <option value="General inquiry">General inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="font-sans text-xs tracking-widest uppercase text-charcoal">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="border border-gold-light bg-ivory px-4 py-3 font-sans text-sm text-charcoal placeholder:text-warm-grey/60 focus:border-gold focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your skin goals..."
                  />
                </div>

                {/* Preferred contact */}
                <fieldset>
                  <legend className="font-sans text-xs tracking-widest uppercase text-charcoal mb-3">
                    Preferred Contact Method
                  </legend>
                  <div className="flex gap-6">
                    {['email', 'phone', 'text'].map((method) => (
                      <label key={method} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="contactPref"
                          value={method}
                          checked={form.contactPref === method}
                          onChange={handleChange}
                          className="accent-gold"
                        />
                        <span className="font-sans text-sm text-charcoal capitalize">{method}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="py-4 bg-gold text-charcoal font-sans text-xs tracking-widest uppercase font-medium hover:bg-gold-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Sending…' : 'Send Message →'}
                </button>

                {status === 'error' && (
                  <p className="text-sm text-red-600 font-sans" role="alert">
                    Something went wrong. Please try again or email us directly at hello@lumeraskinstudio.com.
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Studio info */}
          <div className="flex flex-col gap-10 fade-up">
            <div>
              <h3 className="font-display text-2xl font-light text-charcoal mb-5">Studio Hours</h3>
              <ul className="space-y-3 font-sans text-sm text-warm-grey">
                <li className="flex justify-between border-b border-gold-light pb-3">
                  <span className="text-charcoal">Tuesday – Friday</span>
                  <span>10:00 AM – 7:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-gold-light pb-3">
                  <span className="text-charcoal">Saturday</span>
                  <span>9:00 AM – 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-charcoal">Sunday – Monday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-2xl font-light text-charcoal mb-4">Find Us</h3>
              <address className="not-italic font-sans text-sm text-warm-grey space-y-2 mb-4">
                <p>[Your Studio Address]</p>
                <p>[City, State ZIP]</p>
                <p>
                  <a href="tel:+10000000000" className="hover:text-gold transition-colors">
                    [Your Phone Number]
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:hello@lumeraskinstudio.com"
                    className="hover:text-gold transition-colors"
                  >
                    hello@lumeraskinstudio.com
                  </a>
                </p>
              </address>

              {/* Google Map embed */}
              {mapsKey ? (
                <iframe
                  src={`https://www.google.com/maps/embed/v1/place?key=${mapsKey}&q=Luméra+Skin+Studio`}
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Luméra Skin Studio location map"
                  className="border border-gold-light"
                />
              ) : (
                <div className="bg-ivory border border-gold-light h-48 flex items-center justify-center">
                  <p className="font-sans text-xs text-warm-grey tracking-wider uppercase">
                    Map — add NEXT_PUBLIC_MAPS_KEY env var
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
