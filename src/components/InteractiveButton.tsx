'use client'

import { motion } from 'framer-motion'
import { ReactNode, useState } from 'react'

interface InteractiveButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function InteractiveButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = ''
}: InteractiveButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const baseClasses = 'relative inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 overflow-hidden'
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-gray-800 to-gray-900 text-white border border-white/20',
    secondary: 'bg-white/10 text-gray-200 border border-white/20',
    ghost: 'bg-transparent text-gray-300 border border-transparent'
  }
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  const buttonContent = (
    <motion.button
      className={buttonClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 bg-white/10 rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%' }}
        animate={{ x: isHovered ? '100%' : '-100%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      
      {/* Ripple effect on click */}
      <motion.div
        className="absolute inset-0 bg-white/20 rounded-full"
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 0, opacity: 1 }}
        whileTap={{ scale: 4, opacity: 0 }}
        transition={{ duration: 0.4 }}
      />
    </motion.button>
  )

  if (href) {
    return (
      <a href={href} className="inline-block">
        {buttonContent}
      </a>
    )
  }

  return buttonContent
}
