import React from 'react'

export default function Resume() {
  const pdfHref = '/resume/MattMitchell_2025.pdf'

  return (
    <>
      <style>
        {`
          @media print {
            header, nav {
              display: none !important;
            }
          }
        `}
      </style>
      <section className="py-16 px-6 max-w-3xl mx-auto">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex-1 w-full sm:w-auto">
            <h1 className="text-3xl font-bold">Matthew G Mitchell</h1>
            <div className="text-gray-700">
              <a className="underline underline-offset-2" href="mailto:mattgmitch@gmail.com">mattgmitch@gmail.com</a>
              {' '}·{' '}
              <a className="underline underline-offset-2" href="tel:+15082607224">508 260 7224</a>
              {/* {' '}·{' '} */}
              {/* <a className="underline underline-offset-2" href="https://www.mattgmitchell.com" target="_blank" rel="noreferrer">www.mattgmitchell.com</a> */}
            </div>
          </div>
        </div>

        <div className="mt-4 mb-4 sm:mt-0 flex items-center gap-2 print:hidden" aria-label="Resume actions">
          <button
            type="button"
            onClick={() => window.print()}
            title="Print"
            aria-label="Print resume"
            className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 hover:bg-gray-50"
          >
            {/* Printer icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M6 7V3h12v4H6zm0 10v4h12v-4H6zm-2-1h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2zm2-7h12v3H4V9h2z"/></svg>
            <span className="text-sm">Print</span>
          </button>
          <a
            href={pdfHref}
            title="Download PDF"
            aria-label="Download resume PDF"
            className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 hover:bg-gray-50"
            download
          >
            {/* Download icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 3v10.586l3.293-3.293 1.414 1.414L12 17.414l-4.707-4.707 1.414-1.414L11 13.586V3h1zM5 19h14v2H5z"/></svg>
            <span className="text-sm">PDF</span>
          </a>
        </div>

        {/* Summary */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Career Summary</h2>
          <p>
            Experienced UI/UX Designer with over 18 years of expertise in creating user-centered digital experiences. Skilled in design leadership, front-end development, and cross-functional collaboration to deliver high-quality products.
          </p>
        </section>

        {/* Areas of Experience */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Areas of Experience</h2>
          <ul className="list-disc pl-5 text-gray-700 grid gap-1 sm:grid-cols-2">
            <li>Design systems and component libraries</li>
            <li>Responsive UI design and prototyping</li>
            <li>Accessibility and usability best practices</li>
            <li>User-centered design and research</li>
            <li>HTML, CSS, JavaScript development</li>
            <li>React and Angular basics</li>
            <li>Figma and Adobe Creative Cloud</li>
            <li>Agile and SAFe collaboration methodologies</li>
          </ul>
        </section>

        {/* Career Highlights */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Career Highlights</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Led a major responsive redesign for MyPearsonStore.com, resulting in record sales growth.</li>
            <li>Developed and standardized UI best practices across 15+ eCommerce platforms using pattern libraries.</li>
            <li>Introduced responsive design and modern UI tooling across multiple organizations.</li>
          </ul>
        </section>

        {/* Professional Experience */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Professional Experience</h2>

          <article className="mb-6">
            <header className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold">Beck’s Hybrids</h3>
              <span className="text-sm text-gray-600">2020 – Present</span>
            </header>
            <p className="italic text-gray-700">Lead UX Designer (promoted from Sr. UX in 2024)</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 mt-2">
              <li>Lead designer on a 7-person UX team; partner with PMs, engineers, and stakeholders to shape roadmaps.</li>
              <li>Established and maintain a Figma-based design system used across customer and internal apps.</li>
              <li>Mentor junior designers; improved team efficiency and quality through workflows and critique.</li>
            </ul>
          </article>

          <article className="mb-6">
            <header className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold">Automotive Finance Corporation (AFC)</h3>
              <span className="text-sm text-gray-600">2018 – 2020</span>
            </header>
            <p className="italic text-gray-700">UI/UX Designer · Front-End Developer</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 mt-2">
              <li>Senior design lead for multiple customer-facing products; drove clickable prototypes for stakeholder buy-in.</li>
              <li>Created and maintained a UI pattern library to accelerate delivery and standardize UX.</li>
              <li>Partnered with engineering to ensure designs shipped as intended; provided production-ready HTML/CSS/JS.</li>
            </ul>
          </article>

          <article className="mb-6">
            <header className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold">Healthx</h3>
              <span className="text-sm text-gray-600">2015 – 2018</span>
            </header>
            <p className="italic text-gray-700">UI Designer · Front-End Developer</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 mt-2">
              <li>Implemented the company’s first responsive member portal; led provider portal redesign.</li>
              <li>Managed Android/iOS app submissions; improved team UI workflow and documentation.</li>
              <li>Led UI for CA Senate Bill-137 provider attestation and Medicare registration (heavy client-side validation).</li>
            </ul>
          </article>

          <article className="mb-2">
            <header className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold">Pearson</h3>
              <span className="text-sm text-gray-600">2007 – 2015</span>
            </header>
            <p className="italic text-gray-700">UI Designer · Front-End Developer</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 mt-2">
              <li>Prototyped concepts for UX testing and documentation; supported 15+ eCommerce platforms.</li>
              <li>Rolled out responsive design across new and existing projects; built CMS templates for marketing teams.</li>
              <li>Collaborated in Agile/SAFe environments; contributed to strategy and key product decisions.</li>
            </ul>
          </article>
        </section>

        {/* Education */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Education</h2>
          <ul className="text-gray-700 space-y-1">
            <li>
              <span className="font-medium">BS, New Media Arts & Sciences</span> — Indiana University (2007)
            </li>
            <li>
              <span className="font-medium">Certificate, Applied Computer Sciences</span> — Purdue University (2007)
            </li>
          </ul>
        </section>

        {/* PDF viewer fallback/alternate */}
        {/* <section className="rounded-2xl border overflow-hidden bg-white print:hidden" aria-labelledby="pdfHeading">
          <h2 id="pdfHeading" className="sr-only">PDF version</h2>
          <object
            data={`${pdfHref}#view=FitH`}
            type="application/pdf"
            className="w-full h-[70vh]"
          >
            <div className="p-6">
              <p className="mb-4">PDF preview not available in this browser.</p>
              <a
                className="inline-block rounded-2xl px-4 py-2 border hover:bg-gray-50"
                href={pdfHref}
                download
              >
                Download Résumé (PDF)
              </a>
            </div>
          </object>
        </section> */}
      </section>
    </>
  )
}