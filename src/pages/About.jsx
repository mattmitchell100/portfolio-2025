import React from 'react'

export default function About() {
  return (
    <section className="py-16 px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About</h1>

      <p className="text-lg text-gray-700 mb-8">
        Short intro about you. What you do, how you work, what you care about.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Focus Areas</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>UX strategy & discovery</li>
            <li>Design systems</li>
            <li>Prototyping & usability</li>
            <li>Frontend collaboration</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Tools</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Figma & FigJam</li>
            <li>Adobe CC</li>
            <li>HTML/CSS/JS</li>
            <li>React</li>
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-2">Outside of work</h2>
        <p className="text-gray-700">Add 2–3 human details (concise, personable).</p>
      </div>
    </section>
  )
}