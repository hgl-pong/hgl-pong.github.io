'use client'

import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

const ThemeToggle = () => {
  const [isLight, setIsLight] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const html = document.documentElement
      const saved = localStorage.getItem('theme')
      let light = false
      if (saved === 'light') {
        light = true
      } else if (saved === 'dark') {
        light = false
      } else if (typeof window !== 'undefined' && window.matchMedia) {
        light = window.matchMedia('(prefers-color-scheme: light)').matches
      }
      if (light) html.classList.add('light')
      else html.classList.remove('light')
      setIsLight(light)
    } catch {
      // ignore
    }
  }, [])

  const toggleTheme = () => {
    try {
      const html = document.documentElement
      const next = !isLight
      setIsLight(next)
      if (next) {
        html.classList.add('light')
        localStorage.setItem('theme', 'light')
      } else {
        html.classList.remove('light')
        localStorage.setItem('theme', 'dark')
      }
    } catch {
      // ignore
    }
  }

  const iconClass = isLight ? 'text-gray-700' : 'text-gray-200'

  return (
    <button
      onClick={toggleTheme}
      aria-label={isLight ? '切换到夜间模式' : '切换到日间模式'}
      className="group relative inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 transition-all duration-300 ml-1"
      title="主题切换"
    >
      {mounted ? (
        isLight ? <Moon size={18} className={iconClass} /> : <Sun size={18} className={iconClass} />
      ) : (
        <Sun size={18} className="text-gray-300" />
      )}
    </button>
  )
}

export default ThemeToggle


