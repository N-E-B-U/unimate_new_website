import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  const { name, phone, email, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 })
  }

  const body = [
    `Name:    ${name}`,
    `Phone:   ${phone || '—'}`,
    `Email:   ${email}`,
    `Message:\n${message}`,
  ].join('\n')

  const resend = new Resend(process.env.RESEND_API_KEY)
  const { error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'info@unimate.ge',
    subject: 'New Contact Message',
    text: body,
  })

  if (error) {
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
