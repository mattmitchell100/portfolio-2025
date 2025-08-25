// /api/contact.js
import nodemailer from 'nodemailer'

export default async function contact(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' })

  const { name, email, message, token } = req.body || {}
  if (!name || !email || !message) return res.status(400).json({ message: 'Missing fields' })
  if (!token) return res.status(400).json({ message: 'Captcha required' })

  try {
    const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token
      })
    }).then(r => r.json())
    if (!verifyRes?.success) return res.status(400).json({ message: 'Captcha failed' })
  } catch {
    return res.status(502).json({ message: 'Captcha verification unavailable' })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.MAIL_FROM, pass: process.env.MAIL_APP_PASSWORD }
  })

  await transporter.sendMail({
    from: process.env.MAIL_FROM,
    to: 'mattgmitch@gmail.com',
    replyTo: `${name} <${email}>`,
    subject: `New portfolio contact from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`
  })

  res.status(200).json({ message: 'Thanks — your message was sent.' })
}