import React, { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState({ ok: null, msg: '' })

  async function onSubmit(e) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)

    // Honeypot: block bots that fill hidden field
    if (fd.get('company')) {
      setStatus({ ok: false, msg: 'Blocked.' })
      return
    }

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: fd.get('name'),
        email: fd.get('email'),
        message: fd.get('message'),
        // pass Turnstile response if you wire it up (optional)
        // token: fd.get('cf-turnstile-response')
      })
    })
    const data = await res.json()
    setStatus({ ok: res.ok, msg: data.message || (res.ok ? 'Sent!' : 'Failed to send') })
    if (res.ok) e.currentTarget.reset()
  }

  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Contact</h1>
        <p className="text-gray-600 mb-8">Have a project or question? I’ll get back to you soon.</p>

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

          <div className="cf-turnstile" data-sitekey={import.meta.env.VITE_TURNSTILE_SITE_KEY}></div>
          

          <button className="rounded-2xl px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700">Send</button>

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