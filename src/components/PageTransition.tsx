'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PageTransitionProps {
  children: React.ReactNode
  className?: string
  mode?: 'fade' | 'slide' | 'scale' | 'tech'
}

const PageTransition = ({ children, className = '', mode = 'tech' }: PageTransitionProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    return () => setIsVisible(false)
  }, [])

  const variants = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    },
    slide: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 }
    },
    scale: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 1.05 }
    },
    tech: {
      initial: { 
        opacity: 0, 
        y: 20,
        filter: 'blur(10px)'
      },
      animate: { 
        opacity: 1, 
        y: 0,
        filter: 'blur(0px)'
      },
      exit: { 
        opacity: 0, 
        y: -20,
        filter: 'blur(10px)'
      }
    }
  }

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          className={className}
          initial={variants[mode].initial}
          animate={variants[mode].animate}
          exit={variants[mode].exit}
          transition={{
            duration: mode === 'tech' ? 0.6 : 0.5,
            ease: mode === 'tech' ? [0.22, 1, 0.36, 1] : 'easeInOut'
          }}
        >
          {/* Tech Grid Lines Animation */}
          {mode === 'tech' && (
            <motion.div
              className="fixed inset-0 pointer-events-none z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 1.5 }}
            >
              <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(90deg, #1677ff20 1px, transparent 1px), linear-gradient(180deg, #1677ff20 1px, transparent 1px)`,
                backgroundSize: '50px 50px',
              }}></div>
            </motion.div>
          )}
          
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PageTransition
