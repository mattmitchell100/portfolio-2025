import React, { useState } from 'react'
import { LinkedinIcon, EmailIcon } from '../components/ui/icons.jsx'

export default function Contact() {
  const [status, setStatus] = useState({ ok: null, msg: '' })
  const [submitting, setSubmitting] = useState(false)

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)

    // Honeypot: block bots that fill hidden field
    if (fd.get('company')) {
      setStatus({ ok: false, msg: 'Blocked.' })
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fd.get('name'),
          email: fd.get('email'),
          message: fd.get('message'),
          // Pass Turnstile token if present (auto-added hidden field name)
          token: fd.get('cf-turnstile-response') || undefined,
        })
      })

      let data = {}
      try { data = await res.json() } catch { /* non-JSON (e.g., 404 HTML) */ }

      if (!res.ok) {
        setStatus({ ok: false, msg: data.message || `Request failed (${res.status})` })
        return
      }

      setStatus({ ok: true, msg: data.message || 'Thanks — your message was sent.' })
      form.reset()
    } catch (err) {
      setStatus({ ok: false, msg: 'Network error. Check your connection or API route.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Contact</h1>
        <p className="text-gray-600 mb-8">Have a project or question? I’ll get back to you soon.</p>
        <div className="flex gap-4 mb-8">
          <a
            href="https://www.linkedin.com/in/matt-mitchell-3518993"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-50 text-indigo-700 font-medium hover:bg-indigo-100 transition shadow"
          >
            <LinkedinIcon className="w-5 h-5" />
            LinkedIn
          </a>
          <a
            href="mailto:mattgmitch@gmail.com"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-50 text-indigo-700 font-medium hover:bg-indigo-100 transition shadow"
          >
            <EmailIcon className="w-5 h-5" />
            Email
          </a>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          {/* Honeypot field (hidden from users) */}
          <div className="hidden">
            <label>Company
              <input name="company" type="text" autoComplete="off" />
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input name="name" required className="w-full border rounded-lg px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input name="email" type="email" required className="w-full border rounded-lg px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea name="message" rows="5" required className="w-full border rounded-lg px-3 py-2" />
          </div>

          <div 
            className="cf-turnstile" 
            data-sitekey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
            data-theme="light"   // options: "light" (default), "dark", "auto"
            data-size="normal"   // options: "normal", "compact"
            data-action="contact">
          </div>

          <button type="submit" disabled={submitting} className={`rounded-2xl px-4 py-2 text-white hover:bg-indigo-700 ${submitting ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600'}`}>
            {submitting ? 'Sending…' : 'Send'}
          </button>

          {status.msg && (
            <div className={`text-sm mt-2 ${status.ok ? 'text-green-600' : 'text-red-600'}`}>
              {status.msg}
            </div>
          )}
        </form>
      </div>
    </div>
  )
}