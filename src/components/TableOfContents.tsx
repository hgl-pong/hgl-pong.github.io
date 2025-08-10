'use client'

import { useState, useEffect } from 'react'
import { List } from 'lucide-react'

interface TOCItem {
  id: string
  title: string
  level: number
}

interface TableOfContentsProps {
  headings: TOCItem[]
}

const TableOfContents = ({ headings }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>('')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0% -35% 0%' }
    )

    headings.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [headings])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (headings.length === 0) return null

  return (
    <div className="sticky top-24">
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="lg:hidden w-full flex items-center justify-between p-3 bg-black/50 border border-white/10 rounded-xl mb-4 text-gray-200"
      >
        <span className="flex items-center space-x-2">
          <List size={18} />
          <span className="font-medium">目录</span>
        </span>
        <span className="text-gray-400">
          {isVisible ? '收起' : '展开'}
        </span>
      </button>

      {/* Table of Contents */}
      <div className={`bg-black/50 border border-white/10 rounded-xl p-4 ${
        isVisible ? 'block' : 'hidden lg:block'
      }`}>
        <h3 className="font-semibold text-white mb-3 flex items-center space-x-2">
          <List size={18} />
          <span>文章目录</span>
        </h3>
        
        <nav>
          <ul className="space-y-1">
            {headings.map(({ id, title, level }) => (
              <li key={id}>
                <button
                  onClick={() => scrollToHeading(id)}
                className={`block w-full text-left py-1 px-2 text-sm transition-colors rounded ${
                    activeId === id
                      ? 'text-white bg-white/10 font-medium'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                  style={{ paddingLeft: `${(level - 1) * 12 + 8}px` }}
                >
                  {title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default TableOfContents