import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  const { email } = await req.json()

  if (!email || typeof email !== 'string') {
    return NextResponse.json({ error: 'Email is required.' }, { status: 400 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const { error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'levan.nebulishvili.1@gmail.com',
    subject: 'New Unimate Signup',
    text: `New signup request\n\nEmail: ${email}`,
  })

  if (error) {
    console.error('[/api/join] Resend error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
