'use client'

import { forwardRef } from 'react'
// import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'professional'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    isLoading = false,
    leftIcon,
    rightIcon,
    children, 
    disabled,
    ...props 
  }, ref) => {
    const baseStyles = `
      inline-flex items-center justify-center gap-2 rounded-lg font-medium
      transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden
    `
    
    const variants = {
      primary: `
        bg-gradient-to-r from-blue-600 to-blue-700 text-white
        hover:from-blue-700 hover:to-blue-800 focus:ring-blue-500
        shadow-lg hover:shadow-xl
      `,
      secondary: `
        bg-gray-100 text-gray-900 hover:bg-gray-200
        focus:ring-gray-500 shadow-sm hover:shadow-md
      `,
      outline: `
        border-2 border-gray-300 text-gray-700 hover:bg-gray-50
        focus:ring-gray-500 hover:border-gray-400
      `,
      ghost: `
        text-gray-600 hover:bg-gray-100 hover:text-gray-900
        focus:ring-gray-500
      `,
      professional: `
        bg-gradient-to-r from-slate-800 to-slate-900 text-white
        hover:from-slate-900 hover:to-black focus:ring-slate-500
        shadow-lg hover:shadow-xl border border-slate-700
      `
    }
    
    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-sm',
      lg: 'px-6 py-3 text-base',
      xl: 'px-8 py-4 text-lg'
    }
    
    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        disabled={disabled || isLoading}
        onClick={props.onClick}
        type={props.type}
        name={props.name}
        value={props.value}
        id={props.id}
        aria-label={props['aria-label']}
        title={props.title}
      >
        {/* Shimmer effect */}
        <div className="absolute inset-0 -top-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 transform -skew-x-12" />
        
        {isLoading && (
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        )}
        {!isLoading && leftIcon && leftIcon}
        {children}
        {!isLoading && rightIcon && rightIcon}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button