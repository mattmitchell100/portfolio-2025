import React from 'react'

export function Button({ className = '', children, ...props }) {
  // If caller passes their own bg-* or text-* utilities, don't include defaults
  const hasBg = /(^|\s)bg-/.test(className)
  const hasText = /(^|\s)text-/.test(className)
  const base = [
    'flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition shadow',
    hasBg ? '' : 'bg-gray-100 hover:bg-gray-200 dark:bg-slate-700/60 dark:hover:bg-slate-600',
    hasText ? '' : 'text-gray-800 dark:text-slate-100'
  ].filter(Boolean).join(' ')

  return (
    <button className={`${base} ${className}`} {...props}>
      {children}
    </button>
  )
}
