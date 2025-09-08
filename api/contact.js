// /api/contact.js
import { Resend } from 'resend'

export default async function contact(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' })

  const { name, email, message, token } = req.body || {}
  if (!name || !email || !message) return res.status(400).json({ message: 'Missing fields' })

  // Simple delay to mitigate bot bursts
  await new Promise(r => setTimeout(r, 600))

  // Optional: verify Cloudflare Turnstile token if both token and secret present
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (token && secret) {
    try {
      const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret,
          response: token
        })
      }).then(r => r.json())
      if (!verifyRes?.success) return res.status(400).json({ message: 'Captcha failed' })
    } catch {
      return res.status(502).json({ message: 'Captcha verification unavailable' })
    }
  }

  // Use Resend API instead of Gmail App Passwords
  const RESEND_API_KEY = process.env.RESEND_API_KEY
  const FROM = process.env.MAIL_FROM // must be a verified domain/sender in Resend

  if (!RESEND_API_KEY || !FROM) {
    return res.status(500).json({ message: 'Email service not configured' })
  }

  const resend = new Resend(RESEND_API_KEY)

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: 'mattgmitch@gmail.com',
      reply_to: `${name} <${email}>`,
      subject: `New portfolio contact from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`
    })

    if (error) {
      console.error('Resend error:', error)
      return res.status(502).json({ message: 'Failed to send message' })
    }

    return res.status(200).json({ message: 'Thanks — your message was sent.' })
  } catch (err) {
    console.error('Email send exception:', err)
    return res.status(502).json({ message: 'Failed to send message' })
  }
}