import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { useTheme } from './ThemeProvider.jsx'

export default function Layout() {
  const { theme, toggle } = useTheme()
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-surface-alt)] text-[var(--color-text)] transition-colors">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/75 backdrop-blur border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-6">
          <Link to="/" className="font-bold text-slate-900 dark:text-slate-100">Matt Mitchell</Link>
          <nav className="flex items-center gap-6 text-sm">
            <NavLink to="/work" className={({isActive}) => isActive ? 'font-semibold text-slate-900 dark:text-slate-100' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'}>Work</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? 'font-semibold text-slate-900 dark:text-slate-100' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'}>About</NavLink>
            <NavLink to="/resume" className={({isActive}) => isActive ? 'font-semibold text-slate-900 dark:text-slate-100' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'}>Resume</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? 'font-semibold text-slate-900 dark:text-slate-100' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'}>Contact</NavLink>
            <button
              type="button"
              onClick={toggle}
              className="ml-2 inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
            </button>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-slate-200 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-400 py-6 px-4 text-center">
        © {new Date().getFullYear()} Matthew G Mitchell
      </footer>
    </div>
  )
}
