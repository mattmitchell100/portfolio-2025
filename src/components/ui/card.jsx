import React from 'react'

export function Card({ className = '', children }) {
  return <div className={`rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 ${className}`}>{children}</div>
}

export function CardContent({ className = '', children }) {
  return <div className={`p-6 text-slate-700 dark:text-slate-300 ${className}`}>{children}</div>
}
