import React from 'react'

export function Button({ className = '', children, ...props }) {
  return (
    <button
  className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-50 text-indigo-700 font-medium hover:bg-indigo-100 dark:bg-indigo-600/20 dark:text-indigo-300 dark:hover:bg-indigo-600/30 transition shadow ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
