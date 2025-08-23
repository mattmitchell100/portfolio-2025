// /api/contact.js
import nodemailer from 'nodemailer'

const MIN_FORM_TIME_MS = 1500 // simple bot throttle

let transporter
function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_FROM,          // your Gmail address
        pass: process.env.MAIL_APP_PASSWORD,  // Gmail App Password (not your login)
      },
    })
  }
  return transporter
}

export default async function handler(req, res) {
  const started = Date.now()
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' })
  try {
    const { name, email, message /*, token*/ } = req.body || {}

    // Basic validation
    if (!name || !email || !message) return res.status(400).json({ message: 'Missing fields' })

    // Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ message: 'Invalid email' })

    // Simple timing defense (bots post instantly)
    const elapsed = Date.now() - started
    if (elapsed < MIN_FORM_TIME_MS) await new Promise(r => setTimeout(r, MIN_FORM_TIME_MS - elapsed))

    // Optional: verify Cloudflare Turnstile
    if (!token) return res.status(400).json({ message: 'Captcha required' })
    const verify = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret: process.env.TURNSTILE_SECRET_KEY, response: token })
    }).then(r => r.json())
    if (!verify.success) return res.status(400).json({ message: 'Captcha failed' })

    // Compose and send
    const mail = {
      from: process.env.MAIL_FROM,
      to: 'mattgmitch@gmail.com',
      replyTo: `${name} <${email}>`,
      subject: `New portfolio contact from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    }

    await getTransporter().sendMail(mail)
    return res.status(200).json({ message: 'Thanks — your message was sent.' })
  } catch (e) {
    console.error(e)
    return res.status(500).json({ message: 'Server error sending email' })
  }
}