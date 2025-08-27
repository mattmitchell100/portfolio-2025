import React from 'react'
import { Link } from 'react-router-dom'
import caseStudies from '../data/caseStudies.js'

export default function Work() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Work</h1>
      {/* Case studies temporarily hidden while content is refreshed.
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {caseStudies.map((cs) => (
          <Link key={cs.slug} to={`/case/${cs.slug}`} className="group block rounded-2xl border bg-white overflow-hidden hover:shadow-lg transition">
            <div className="h-40 bg-gray-200 flex items-center justify-center text-gray-500 text-sm"><img src={cs.image} alt={cs.title} className="object-cover h-full w-full" /></div>
            <div className="p-5">
              <h2 className="text-lg font-semibold group-hover:underline">{cs.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{cs.summary}</p>
              <div className="mt-3 text-sm text-indigo-600">Read case study →</div>
            </div>
          </Link>
        ))}
      </div> */}

      <div className="flex flex-col items-start md:items-center justify-start md:justify-center text-left md:text-center rounded-2xl border border-dashed bg-white/60 px-8 py-12">
        <div className="text-sm mb-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 font-medium">🚧 In Progress</div>
        <h2 className="text-2xl font-semibold mb-4 max-w-2xl">I&apos;m curating fresh, deeper case studies.</h2>
        <p className="text-gray-600 max-w-xl leading-relaxed mb-6">
          I&apos;m rewriting and expanding this section with more recent design artifacts and an overall more detailed display of professional experience. Check back soon or reach out if you&apos;d like an early walkthrough.
        </p>
        <div className="flex gap-4">
          <Link to="/contact" className="rounded-full bg-indigo-600 text-white text-sm font-medium px-4 py-2 hover:bg-indigo-700 transition">Contact Me</Link>
          <Link to="/resume" className="rounded-full border text-sm font-medium px-5 py-2 hover:bg-gray-100 transition">View Resume</Link>
        </div>
      </div>
    </section>
  )
}
