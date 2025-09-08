import React, { useState, useCallback, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * items: [ { type: 'image'|'video', src, alt?, poster? } ]
 */
export default function Carousel({ items = [], className = '', autoFocus = false, onIndexChange }) {
  const [index, setIndex] = useState(0)
  const touchStartX = useRef(null)
  const containerRef = useRef(null)

  const safeItems = items.length ? items : []

  const go = useCallback((dir) => {
    setIndex(i => {
      const next = (i + dir + safeItems.length) % safeItems.length
      if (onIndexChange) onIndexChange(next)
      return next
    })
  }, [safeItems.length, onIndexChange])

  const goTo = useCallback((i) => {
    setIndex(i)
    if (onIndexChange) onIndexChange(i)
  }, [onIndexChange])

  useEffect(() => {
    if (!autoFocus) return
    containerRef.current?.focus()
  }, [autoFocus])

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight') go(1)
      else if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [go])

  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX
  }
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 40) {
      go(dx < 0 ? 1 : -1)
    }
    touchStartX.current = null
  }

  const current = safeItems[index]

  return (
    <div className={`relative select-none ${className}`} ref={containerRef} tabIndex={-1}
      onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}
      aria-roledescription="carousel" aria-label="Media carousel">
      <div className="overflow-hidden rounded-2xl bg-gray-100 aspect-video flex items-center justify-center">
        <AnimatePresence initial={false} custom={index}>
          <motion.div
            key={index}
            custom={index}
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -80, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 30, opacity: { duration: 0.2 } }}
            className="w-full h-full flex items-center justify-center"
          >
            {current?.type === 'video' ? (
              <video
                src={current.src}
                poster={current.poster}
                controls
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={current?.src}
                alt={current?.alt || ''}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      {safeItems.length > 1 && (
        <>
          <button
            onClick={() => go(-1)}
            aria-label="Previous item"
            className="absolute top-1/2 -translate-y-1/2 left-3 bg-white/80 hover:bg-white text-gray-700 rounded-full w-10 h-10 flex items-center justify-center shadow border border-gray-200 backdrop-blur-sm"
          >
            ‹
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next item"
            className="absolute top-1/2 -translate-y-1/2 right-3 bg-white/80 hover:bg-white text-gray-700 rounded-full w-10 h-10 flex items-center justify-center shadow border border-gray-200 backdrop-blur-sm"
          >
            ›
          </button>
          <div className="mt-4 flex justify-center gap-2 flex-wrap">
            {safeItems.map((item, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-14 w-20 rounded-lg overflow-hidden border ${i === index ? 'ring-2 ring-brand-orange-500 border-brand-orange-500' : 'border-gray-200 opacity-70 hover:opacity-100'}`}
                aria-label={`Go to item ${i + 1}`}
              >
                {item.type === 'video' ? (
                  <div className="w-full h-full bg-black text-white flex items-center justify-center text-xs font-medium">VID</div>
                ) : (
                  <img src={item.src} alt="" className="object-cover w-full h-full" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
      <div className="sr-only" aria-live="polite">Item {index + 1} of {safeItems.length}</div>
    </div>
  )
}
