'use client'

import { forwardRef } from 'react'
// import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'overline'
  color?: 'primary' | 'secondary' | 'accent' | 'muted' | 'professional'
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'
  align?: 'left' | 'center' | 'right'
  as?: keyof JSX.IntrinsicElements
}

const Typography = forwardRef<any, TypographyProps>(
  ({ 
    className, 
    variant = 'body', 
    color = 'primary', 
    weight = 'normal',
    align = 'left',
    as,
    children, 
    ...props 
  }, ref) => {
    const variants = {
      h1: 'text-4xl md:text-5xl lg:text-6xl font-bold leading-tight',
      h2: 'text-3xl md:text-4xl lg:text-5xl font-bold leading-tight',
      h3: 'text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug',
      h4: 'text-xl md:text-2xl lg:text-3xl font-semibold leading-snug',
      h5: 'text-lg md:text-xl lg:text-2xl font-medium leading-normal',
      h6: 'text-base md:text-lg lg:text-xl font-medium leading-normal',
      body: 'text-base leading-relaxed',
      caption: 'text-sm leading-normal',
      overline: 'text-xs uppercase tracking-wider font-medium'
    }
    
    const colors = {
      primary: 'text-gray-900',
      secondary: 'text-gray-700',
      accent: 'text-blue-600',
      muted: 'text-gray-500',
      professional: 'text-slate-800'
    }
    
    const weights = {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold'
    }
    
    const alignments = {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right'
    }
    
    const defaultTags = {
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      h4: 'h4',
      h5: 'h5',
      h6: 'h6',
      body: 'p',
      caption: 'span',
      overline: 'span'
    }
    
    const tagName = as || defaultTags[variant]
    
    const Component = tagName as any
    
    return (
      <Component
        ref={ref}
        className={cn(
          variants[variant],
          colors[color],
          weights[weight],
          alignments[align],
          className
        )}
        onClick={props.onClick}
        id={props.id}
        style={props.style}
      >
        {children}
      </Component>
    )
  }
)

Typography.displayName = 'Typography'

export default Typography