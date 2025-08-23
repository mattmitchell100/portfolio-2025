import React from 'react'
import { useParams, Link } from 'react-router-dom'
import caseStudies from '../data/caseStudies.js'

export default function CaseStudy() {
  const { slug } = useParams()
  const cs = caseStudies.find(c => c.slug === slug)

  if (!cs) {
    return (
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold">Case study not found</h1>
        <p className="mt-2"><Link to="/work" className="underline">Back to work</Link></p>
      </section>
    )
  }

  return (
    <article className="py-16 px-6 max-w-3xl mx-auto prose prose-gray">
      <p className="text-sm"><Link to="/work">← All work</Link></p>
      <h1 className="mb-2">{cs.title}</h1>
      <p className="!mt-0 text-gray-600">{cs.role} • {cs.year}</p>

      <div className="not-prose my-8 rounded-2xl overflow-hidden border">
        <div className="h-64 bg-gray-200 flex items-center justify-center text-gray-500">Hero Image</div>
      </div>

      <h2>Context</h2>
      <p>{cs.summary}</p>

      <h2>My role</h2>
      <ul>
        {cs.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
      </ul>

      <h2>Process</h2>
      <p>{cs.process}</p>

      <h2>Outcome</h2>
      <ul>
        {cs.outcomes.map((o, i) => <li key={i}>{o}</li>)}
      </ul>
    </article>
  )
}
