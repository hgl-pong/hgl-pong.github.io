'use client'

import { forwardRef } from 'react'
// import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'professional' | 'glass'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  hover?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', padding = 'md', hover = false, children, ...props }, ref) => {
    const baseStyles = `
      rounded-xl border transition-all duration-300 relative overflow-hidden
    `
    
    const variants = {
      default: `
        bg-white border-gray-200 shadow-sm hover:shadow-md
      `,
      elevated: `
        bg-white border-gray-200 shadow-lg hover:shadow-xl
      `,
      professional: `
        bg-gradient-to-br from-white to-gray-50 border-gray-200
        shadow-md hover:shadow-lg
      `,
      glass: `
        bg-white/80 backdrop-blur-sm border-white/20
        shadow-lg hover:shadow-xl
      `
    }
    
    const paddings = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
      xl: 'p-10'
    }
    
    const hoverEffects = hover ? 'hover:-translate-y-1 hover:scale-[1.02] cursor-pointer' : ''
    
    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          paddings[padding],
          hoverEffects,
          className
        )}
        onClick={props.onClick}
        id={props.id}
        style={props.style}
      >
        {/* Professional border accent */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export default Card