'use client'

import { useEffect, useState } from 'react'
import { extractHeadings } from '@/lib/utils'
import { BlogPost } from '@/lib/posts'
import Card from '@/components/ui/Card'
import Typography from '@/components/ui/Typography'
import MotionWrapper from '@/components/MotionWrapper'

interface TableOfContentsProps {
  post: BlogPost
  className?: string
}

interface Heading {
  id: string
  title: string
  level: number
}

export default function TableOfContents({ post, className }: TableOfContentsProps) {
  const [activeHeading, setActiveHeading] = useState<string>('')
  const [headings, setHeadings] = useState<Heading[]>([])

  useEffect(() => {
    const extractedHeadings = extractHeadings(post.content)
    setHeadings(extractedHeadings)

    // Set up intersection observer for active heading tracking
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveHeading(entry.target.id)
        }
      })
    }, observerOptions)

    // Observe all heading elements
    extractedHeadings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [post.content])

  const scrollToHeading = (headingId: string) => {
    const element = document.getElementById(headingId)
    if (element) {
      const offset = 80 // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  if (headings.length === 0) {
    return null
  }

  return (
    <MotionWrapper
      type="slide"
      direction="right"
      duration={0.6}
      delay={0.4}
      className={className}
    >
      <Card variant="professional" padding="lg" className="lg:sticky lg:top-24">
        <Typography variant="h4" color="professional" className="mb-4 text-base sm:text-lg">
          目录
        </Typography>
        
        <nav className="space-y-1">
          {headings.map((heading) => (
            <button
              key={heading.id}
              onClick={() => scrollToHeading(heading.id)}
              className={`
                block w-full text-left transition-all duration-200
                ${activeHeading === heading.id 
                  ? 'text-blue-600 font-medium bg-blue-50 border-l-2 border-blue-600 pl-3' 
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }
                ${heading.level === 2 ? 'text-xs sm:text-sm' : 'text-xs pl-4'}
                py-1 sm:py-2 px-2 rounded-lg
              `}
            >
              {heading.title}
            </button>
          ))}
        </nav>
      </Card>
    </MotionWrapper>
  )
}