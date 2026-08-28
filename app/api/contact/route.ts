import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const TO = process.env.CONTACT_FORM_TO || 'hello@lumeraskinstudio.com'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY || 'placeholder')
  try {
    const body = await req.json()
    const { name, email, phone, service, message, contactPref } = body

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 })
    }

    const emailBody = `
New inquiry from Luméra Skin Studio website

Name:              ${name}
Email:             ${email}
Phone:             ${phone || 'Not provided'}
Service Interest:  ${service || 'Not specified'}
Preferred Contact: ${contactPref}

Message:
${message || 'No message provided.'}
    `.trim()

    const { error } = await resend.emails.send({
      from: 'Luméra Skin Studio <noreply@lumeraskinstudio.com>',
      to: [TO],
      reply_to: email,
      subject: `New inquiry from ${name} — Luméra Skin Studio`,
      text: emailBody,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Unexpected error.' }, { status: 500 })
  }
}
