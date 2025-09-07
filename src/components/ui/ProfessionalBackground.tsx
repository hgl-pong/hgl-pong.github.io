'use client'

import { motion } from 'framer-motion'

interface ProfessionalBackgroundProps {
  variant?: 'subtle' | 'geometric' | 'gradient' | 'minimal'
  className?: string
}

export default function ProfessionalBackground({ 
  variant = 'subtle', 
  className = '' 
}: ProfessionalBackgroundProps) {
  const variants = {
    subtle: (
      <div className={`absolute inset-0 ${className}`}>
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30" />
        
        {/* Subtle dot pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>
    ),
    
    geometric: (
      <div className={`absolute inset-0 ${className}`}>
        {/* Professional geometric pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50" />
        
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="professional-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#e2e8f0" strokeWidth="0.5"/>
              <circle cx="30" cy="30" r="1" fill="#cbd5e1" opacity="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#professional-grid)" />
        </svg>
        
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 border border-blue-200 rounded-lg opacity-30"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-20 w-24 h-24 border border-teal-200 rounded-full opacity-20"
          animate={{
            rotate: [0, -360],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    ),
    
    gradient: (
      <div className={`absolute inset-0 ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50" />
        
        {/* Subtle animated gradients */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-teal-100/40 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
    ),
    
    minimal: (
      <div className={`absolute inset-0 ${className}`}>
        <div className="absolute inset-0 bg-white" />
        
        {/* Minimal line accents */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>
    )
  }
  
  return variants[variant]
}