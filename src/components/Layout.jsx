import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="font-bold">Matt Mitchell</Link>
          <nav className="flex gap-6 text-sm">
            <NavLink to="/work" className={({isActive}) => isActive ? 'font-semibold' : 'text-gray-600 hover:text-gray-900'}>Work</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? 'font-semibold' : 'text-gray-600 hover:text-gray-900'}>About</NavLink>
            <NavLink to="/resume" className={({isActive}) => isActive ? 'font-semibold' : 'text-gray-600 hover:text-gray-900'}>Resume</NavLink>
            <a href="mailto:mattgmitch@gmail.com" className="text-gray-600 hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t text-xs text-gray-500 py-6 px-4 text-center">
        © {new Date().getFullYear()} Matthew G Mitchell
      </footer>
    </div>
  )
}
