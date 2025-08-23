import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Work from './pages/Work.jsx'
import CaseStudy from './pages/CaseStudy.jsx'
import About from './pages/About.jsx'
import Resume from './pages/Resume.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/case/:slug" element={<CaseStudy />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div className="p-10">Not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
