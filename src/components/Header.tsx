'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
// import ThemeToggle from './ThemeToggle'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: '首页', href: '/' },
    { name: '博客', href: '/blog' },
    { name: '关于', href: '/about' },
    { name: '联系', href: '/contact' },
  ]

  // Theme toggle removed per request

  useEffect(() => {
    // Respect existing class; no toggle button
  }, [])

  return (
    <header
      className={`
        sticky top-0 z-50 transition-all duration-500 ease-out
        ${isScrolled
          ? 'bg-black/90 backdrop-blur-xl shadow-xl border-b border-white/10 light:bg-white/90'
          : 'bg-black/80 backdrop-blur-sm shadow-sm border-b border-gray-800 light:bg-white/80'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="group flex items-center space-x-3"
            >
              {/* Elegant Logo Icon */}
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-white/20">
                  <span className="text-white font-bold text-lg">H</span>
                </div>
                <div className="absolute inset-0 bg-white rounded-xl blur-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>

              {/* Clean Logo Text */}
              <div className="hidden sm:block">
                <span className="text-2xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-300 light:from-gray-900 light:via-gray-700 light:to-gray-800 bg-clip-text text-transparent group-hover:from-gray-100 group-hover:to-white light:group-hover:from-gray-800 light:group-hover:to-gray-900 transition-all duration-300">
                  HGL博客
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  group relative px-6 py-3 text-sm font-semibold text-gray-300 hover:text-white
                  transition-all duration-300 rounded-xl hover:bg-white/10
                  animate-fade-in-down animate-delay-${(index + 1) * 100}
                `}
              >
                <span className="relative z-10">{item.name}</span>

                {/* Clean hover background */}
                <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Simple active indicator */}
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white rounded-full group-hover:w-8 transition-all duration-300"></div>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-white/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
            {/* Theme toggle removed */}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="group relative p-3 text-gray-400 hover:text-white transition-all duration-300 hover:bg-white/10 rounded-xl"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <Menu
                  size={24}
                  className={`
                    absolute inset-0 transition-all duration-300 transform
                    ${isMenuOpen ? 'opacity-0 rotate-45 scale-75' : 'opacity-100 rotate-0 scale-100'}
                  `}
                />
                <X
                  size={24}
                  className={`
                    absolute inset-0 transition-all duration-300 transform
                    ${isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-45 scale-75'}
                  `}
                />
              </div>

              {/* Clean background glow */}
              <div className="absolute inset-0 bg-white/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-500 ease-out
            ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="px-4 pt-4 pb-6 space-y-2 bg-black/95 backdrop-blur-xl border-t border-white/10">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  group flex items-center justify-between px-6 py-4 text-base font-semibold text-gray-300 hover:text-white
                  hover:bg-white/10 rounded-2xl transition-all duration-300
                  transform translate-x-0 hover:translate-x-1 hover:scale-[1.02]
                  animate-fade-in-left animate-delay-${(index + 1) * 100}
                `}
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{item.name}</span>
                <div className="w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}

            {/* Clean mobile menu decoration */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <div className="flex justify-center">
                <div className="w-12 h-1 bg-white rounded-full opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header