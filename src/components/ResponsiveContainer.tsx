'use client'

import { ReactNode } from 'react'

interface ResponsiveContainerProps {
  children: ReactNode
  className?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '7xl'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

export default function ResponsiveContainer({
  children,
  className = '',
  maxWidth = '7xl',
  padding = 'md'
}: ResponsiveContainerProps) {
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '4xl': 'max-w-4xl',
    '7xl': 'max-w-7xl'
  }

  const paddingClasses = {
    none: '',
    sm: 'px-4 sm:px-6',
    md: 'px-4 sm:px-6 lg:px-8',
    lg: 'px-6 sm:px-8 lg:px-12'
  }

  return (
    <div className={`${maxWidthClasses[maxWidth]} mx-auto ${paddingClasses[padding]} ${className}`}>
      {children}
    </div>
  )
}

// Responsive Grid Component
interface ResponsiveGridProps {
  children: ReactNode
  columns?: {
    sm?: number
    md?: number
    lg?: number
    xl?: number
  }
  gap?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export function ResponsiveGrid({
  children,
  columns = { sm: 1, md: 2, lg: 3, xl: 4 },
  gap = 'md',
  className = ''
}: ResponsiveGridProps) {
  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12'
  }

  const getGridCols = () => {
    const classes = []
    if (columns.sm) classes.push(`grid-cols-${columns.sm}`)
    if (columns.md) classes.push(`md:grid-cols-${columns.md}`)
    if (columns.lg) classes.push(`lg:grid-cols-${columns.lg}`)
    if (columns.xl) classes.push(`xl:grid-cols-${columns.xl}`)
    return classes.join(' ')
  }

  return (
    <div className={`grid ${getGridCols()} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  )
}

// Responsive Stack Component
interface ResponsiveStackProps {
  children: ReactNode
  direction?: {
    sm?: 'row' | 'col'
    md?: 'row' | 'col'
    lg?: 'row' | 'col'
  }
  gap?: 'sm' | 'md' | 'lg' | 'xl'
  align?: 'start' | 'center' | 'end' | 'stretch'
  justify?: 'start' | 'center' | 'end' | 'between' | 'around'
  className?: string
}

export function ResponsiveStack({
  children,
  direction = { sm: 'col', md: 'row' },
  gap = 'md',
  align = 'start',
  justify = 'start',
  className = ''
}: ResponsiveStackProps) {
  const gapClasses = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8'
  }

  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch'
  }

  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around'
  }

  const getFlexDirection = () => {
    const classes = []
    if (direction.sm) classes.push(`flex-${direction.sm}`)
    if (direction.md) classes.push(`md:flex-${direction.md}`)
    if (direction.lg) classes.push(`lg:flex-${direction.lg}`)
    return classes.join(' ')
  }

  return (
    <div className={`flex ${getFlexDirection()} ${gapClasses[gap]} ${alignClasses[align]} ${justifyClasses[justify]} ${className}`}>
      {children}
    </div>
  )
}
