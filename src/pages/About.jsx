import React from 'react'
import mattPhoto from '../assets/TAS-me_square.png'

export default function About() {
  return (
    <section className="py-16 px-6 max-w-3xl mx-auto text-slate-900 dark:text-slate-100">
      <h1 className="text-3xl font-bold mb-6">About</h1>

      <img
        src={mattPhoto}
        alt="Matt"
        className="rounded-full shadow-lg w-40 h-40 md:w-48 md:h-48 mx-auto mb-8"
      />
      <div className="max-w-2xl mx-auto mb-12 md:text-left">
  <p className="text-lg text-gray-700 dark:text-slate-300 mb-8">
          Hi, I’m Matt, a UX designer who’s been crafting digital experiences for nearly two decades. I’ve always believed design is less about pixels and more about people. That belief has guided me from my early days building e-commerce platforms to my current role leading a team of designers at Beck’s, where I get to mentor, collaborate, and help shape products that actually make a difference.
        </p>
  <p className="text-lg text-gray-700 dark:text-slate-300 mb-8">
          {/* Over the years, I’ve honed a design approach that’s equal parts user-centered research and iterative prototyping. I thrive on collaboration, whether it’s with cross-functional teams or directly with users, to uncover insights that drive impactful design solutions. */}
          I love digging into complex problems, untangling them, and finding elegant, intuitive solutions. Over the years I’ve worked across industries, from education and healthcare to finance and agriculture, and each challenge has always seemed to reinforced the idea that great design is rooted in empathy and a deep understanding of what the user needs.
        </p>
  <p className="text-lg text-gray-700 dark:text-slate-300 mb-8">
          Outside of work, I’m usually biking or exploring new tech. Whether on the screen or off, I’m always curious, always learning, and always chasing the next way to make something just a little bit better.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Focus Areas</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>UX strategy & discovery</li>
            <li>Design systems</li>
            <li>Prototyping & wireframing</li>
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

      {/* <div className="mt-10">
        <h2 className="text-xl font-semibold mb-2">Outside of work</h2>
        <p className="text-gray-700">Additional details (concise, personable).</p>
      </div> */}
    </section>
  )
}