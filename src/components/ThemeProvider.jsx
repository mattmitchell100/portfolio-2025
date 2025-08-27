import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'

const ThemeContext = createContext({ theme: 'light', toggle: () => {}, setTheme: () => {} })

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')

  // initialize from storage / system
  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme')
      if (stored === 'dark' || stored === 'light') {
        setTheme(stored)
        document.documentElement.classList.toggle('dark', stored === 'dark')
        return
      }
    } catch {}
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(systemDark ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', systemDark)
  }, [])

  // persist + class sync
  const apply = useCallback((next) => {
    setTheme(next)
    try { localStorage.setItem('theme', next) } catch {}
    document.documentElement.classList.toggle('dark', next === 'dark')
  }, [])

  const toggle = useCallback(() => {
    apply(theme === 'dark' ? 'light' : 'dark')
  }, [theme, apply])

  return (
    <ThemeContext.Provider value={{ theme, setTheme: apply, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
