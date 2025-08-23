import React from 'react'
import { Card, CardContent } from '../components/ui/card.jsx'
import { Button } from '../components/ui/button.jsx'
import { motion } from 'framer-motion'
import { Mail, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import caseStudies from '../data/caseStudies.js'

export default function Home() {
  const featured = caseStudies.slice(0, 3)
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-r from-indigo-500 to-blue-600 text-white">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl font-bold mb-4">
          Matthew G Mitchell
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-xl max-w-2xl mb-8">
          Lead UX Designer with 18+ years crafting user-centered, responsive, and impactful digital experiences.
        </motion.p>
        <div className="flex gap-4">
          <a href="#" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-white text-indigo-600 font-medium hover:bg-gray-100">
            <FileText size={18}/> View Resume
          </a>
          <a href="mailto:mattgmitch@gmail.com" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-indigo-700 hover:bg-indigo-800 text-white">
            <Mail size={18}/> Contact Me
          </a>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((cs) => (
            <Link key={cs.slug} to={`/case/${cs.slug}`} className="block">
              <div className="rounded-2xl border bg-white shadow hover:shadow-lg transition">
                <div className="p-6">
                  <div className="h-40 rounded-xl mb-4 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">{cs.thumb || 'Image'}</div>
                  <h3 className="text-xl font-semibold mb-2">{cs.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{cs.summary}</p>
                  <div className="inline-flex text-sm underline">View Case Study</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I design intuitive, accessible digital products that solve real problems. I balance creative vision with technical execution and have led work across e‑commerce, healthcare, and agriculture.
          </p>
        </div>
      </section>
    </div>
  )
}
