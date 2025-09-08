import React from 'react'
import { Card, CardContent } from '../components/ui/card.jsx'
import { Button } from '../components/ui/button.jsx'
import { motion } from 'framer-motion'
import { Mail, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import caseStudies from '../data/caseStudies.js'

export default function Home() {
  const featured = caseStudies.filter(cs => cs.featured)
  return (
  <div className="min-h-screen bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-slate-100 transition-colors">
      {/* Hero Section */}
  <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-r from-indigo-500 to-blue-600 dark:from-indigo-600 dark:to-blue-700 text-white">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl font-bold mb-4">
          Matthew G Mitchell
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-xl max-w-2xl mb-8">
          Lead UX Designer with 18+ years crafting user-centered, responsive, and impactful digital experiences.
        </motion.p>
        <div className="flex gap-4">
          <Link to="/resume">
            <Button className="bg-white text-indigo-700 hover:bg-indigo-100 dark:bg-slate-800 dark:text-indigo-200 dark:hover:bg-slate-700 shadow">
              <FileText size={18}/> View Resume
            </Button>
          </Link>
          <Link to="/contact">
            <Button className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-400 dark:hover:bg-slate-700 shadow text-white dark:text-white">
              <Mail size={18}/> Contact Me
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Work Section */}
  <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((cs) => (
            <Link key={cs.slug} to={`/case/${cs.slug}`} className="block h-96">
              <div className="h-full flex flex-col rounded-2xl border bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 shadow hover:shadow-lg transition">
                <div className="p-6 flex-1 flex flex-col">
                  <div className="h-40 rounded-xl mb-4 bg-gray-200 dark:bg-slate-700 flex items-center justify-center text-gray-500 dark:text-slate-300 text-sm"><img src={cs.image} alt={cs.title} className="object-cover h-full w-full" /></div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100">{cs.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-slate-400 mb-4">{cs.summary}</p>
                  <div className="inline-flex text-sm underline text-indigo-600 dark:text-indigo-400">View Case Study</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-left md:text-center mb-10">Featured Work</h2>
        <div className="flex flex-col items-start md:items-center justify-center text-left md:text-center rounded-2xl border border-dashed bg-white/70 px-8 py-12">
          <div className="text-sm mb-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 font-medium">🚧 Updating</div>
          <h3 className="text-2xl font-semibold mb-4 max-w-2xl">I&apos;m polishing new featured case studies.</h3>
          <p className="text-gray-600 max-w-2xl leading-relaxed mb-6">
            I&apos;m curating a more recent set of stories that better highlight strategy, systems thinking, and measurable outcomes. They&apos;ll be live soon but feel free to explore my resume or reach out directly in the meantime.
          </p>
          <div className="flex flex-wrap gap-4 justify-start md:justify-center">
            <Link to="/resume" className="rounded-full bg-indigo-600 text-white text-sm font-medium px-4 py-2 hover:bg-indigo-700 transition">View Resume</Link>
            <Link to="/contact" className="rounded-full border text-sm font-medium px-4 py-2 hover:bg-gray-100 transition">Get in Touch</Link>
          </div>
        </div>
      </section> */}

      {/* About Section */}
    <section className="bg-white dark:bg-slate-800 py-20 px-6 border-t border-b border-transparent dark:border-slate-700/50">
        <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-100">About Me</h2>
      <p className="text-lg text-gray-700 dark:text-slate-300 leading-relaxed">
            I design intuitive, accessible digital products that solve real problems. I balance creative vision with technical execution and have led work across e‑commerce, healthcare, and agriculture.
          </p>
          <div className="flex flex-wrap gap-4 justify-start justify-center mt-6">
            <Link to="/about" className="rounded-full bg-indigo-600 text-white text-sm font-medium px-5 py-2 hover:bg-indigo-700 transition">My Story</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
