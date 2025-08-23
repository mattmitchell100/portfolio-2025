import React from 'react'
import { Link } from 'react-router-dom'
import caseStudies from '../data/caseStudies.js'

export default function Work() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Work</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {caseStudies.map((cs) => (
          <Link key={cs.slug} to={`/case/${cs.slug}`} className="group block rounded-2xl border bg-white overflow-hidden hover:shadow-lg transition">
            <div className="h-40 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">{cs.thumb || 'Image'}</div>
            <div className="p-5">
              <h2 className="text-lg font-semibold group-hover:underline">{cs.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{cs.summary}</p>
              <div className="mt-3 text-sm text-indigo-600">Read case study →</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
