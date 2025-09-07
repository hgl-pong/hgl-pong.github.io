'use client'

import { forwardRef } from 'react'
// import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'professional' | 'accent'
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = 'default', padding = 'lg', maxWidth = 'xl', children, ...props }, ref) => {
    const baseStyles = `
      relative w-full
    `
    
    const variants = {
      default: 'bg-white',
      professional: 'bg-gradient-to-b from-gray-50 to-white',
      accent: 'bg-gradient-to-br from-blue-50 to-white'
    }
    
    const paddings = {
      sm: 'py-12',
      md: 'py-16',
      lg: 'py-20',
      xl: 'py-24'
    }
    
    const maxWidths = {
      sm: 'max-w-2xl',
      md: 'max-w-4xl',
      lg: 'max-w-6xl',
      xl: 'max-w-7xl',
      '2xl': 'max-w-8xl',
      full: 'max-w-full'
    }
    
    return (
      <section
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          paddings[padding],
          className
        )}
        {...props}
      >
        <div className={cn('mx-auto px-4 sm:px-6 lg:px-8', maxWidths[maxWidth])}>
          {children}
        </div>
      </section>
    )
  }
)

Section.displayName = 'Section'

export default Section