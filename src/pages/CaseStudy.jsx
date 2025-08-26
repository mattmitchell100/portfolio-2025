import React from 'react'
import { useParams, Link } from 'react-router-dom'
import caseStudies from '../data/caseStudies.js'
import { Card, CardContent } from '../components/ui/card.jsx'

export default function CaseStudy() {
  const { slug } = useParams()
  const cs = caseStudies.find(c => c.slug === slug)

  if (!cs) {
    return (
      <section className="py-24 px-6 max-w-2xl mx-auto flex flex-col items-center justify-center">
        <Card className="w-full">
          <CardContent className="text-center">
            <h1 className="text-3xl font-bold mb-2">Case study not found</h1>
            <p className="mb-4 text-gray-600">Sorry, we couldn't find that case study.</p>
            <Link to="/work" className="inline-block rounded-xl px-4 py-2 bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">Back to work</Link>
          </CardContent>
        </Card>
      </section>
    )
  }

  return (
    <section className="py-24 px-6 max-w-3xl mx-auto">
      <div className="mb-8">
        <Link to="/work" className="inline-flex items-center gap-1 text-sm text-indigo-600 hover:underline">← All work</Link>
      </div>
      <Card className="w-full mb-8 shadow">
        <div className="h-64 rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center">
          <img src={cs.image} alt={cs.title} className="object-cover h-full w-full" />
        </div>
        <CardContent>
          <h1 className="text-4xl font-bold mb-2">{cs.title}</h1>
          <p className="text-lg text-gray-500 mb-2">{cs.role} • {cs.year}</p>
        </CardContent>
      </Card>
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-indigo-700">Context</h2>
          <p className="text-gray-700 leading-relaxed">{cs.summary}</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-indigo-700">My Role</h2>
          <ul className="list-disc pl-6 text-gray-700">
            {cs.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-indigo-700">Process</h2>
          <p className="text-gray-700 leading-relaxed">{cs.process}</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-indigo-700">Outcome</h2>
          <ul className="list-disc pl-6 text-gray-700">
            {cs.outcomes.map((o, i) => <li key={i}>{o}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
