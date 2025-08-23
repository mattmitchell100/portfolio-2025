import React from 'react'

export default function Resume() {
  return (
    <section className="py-16 px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Résumé</h1>
      <p className="text-gray-700 mb-6">
        View or download the PDF below. I can also render a web-native version here later.
      </p>

      {/* PDF viewer fallback → make sure the file exists at /public/resume/MattMitchell_2025.pdf */}
      <div className="rounded-2xl border overflow-hidden bg-white">
        <object
          data="/resume/MattMitchell_2025.pdf#view=FitH"
          type="application/pdf"
          className="w-full h-[80vh]"
        >
          <div className="p-6">
            <p className="mb-4">PDF preview not available in this browser.</p>
            <a
              className="inline-block rounded-2xl px-4 py-2 border hover:bg-gray-50"
              href="/resume/MattMitchell_2025.pdf"
              download
            >
              Download Résumé (PDF)
            </a>
          </div>
        </object>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-2">Highlights</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Design systems leadership</li>
          <li>eCommerce + healthcare + agtech experience</li>
          <li>Responsive UI and prototyping</li>
        </ul>
      </div>
    </section>
  )
}