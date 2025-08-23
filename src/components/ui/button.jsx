import React from 'react'

export function Button({ className = '', children, ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium shadow-sm transition active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gray-900 text-white hover:bg-gray-800 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
