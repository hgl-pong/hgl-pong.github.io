'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'

interface MotionWrapperProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  type?: 'fade' | 'slide' | 'scale' | 'rotate' | 'glitch'
  direction?: 'up' | 'down' | 'left' | 'right'
}

export default function MotionWrapper({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  type = 'fade',
  direction = 'up'
}: MotionWrapperProps) {
  const getVariants = () => {
    switch (type) {
      case 'slide':
        return {
          hidden: {
            opacity: 0,
            x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
            y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
          },
          visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
              duration,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
        }
      
      case 'scale':
        return {
          hidden: {
            opacity: 0,
            scale: 0.8,
          },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              duration,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
        }
      
      case 'rotate':
        return {
          hidden: {
            opacity: 0,
            rotate: -10,
            scale: 0.9,
          },
          visible: {
            opacity: 1,
            rotate: 0,
            scale: 1,
            transition: {
              duration,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
        }
      
      case 'glitch':
        return {
          hidden: {
            opacity: 0,
            x: -5,
            filter: 'hue-rotate(90deg)',
          },
          visible: {
            opacity: 1,
            x: 0,
            filter: 'hue-rotate(0deg)',
            transition: {
              duration: duration * 0.8,
              delay,
              ease: 'easeOut',
            },
          },
        }
      
      default: // fade
        return {
          hidden: {
            opacity: 0,
            y: 20,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
        }
    }
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={getVariants()}
    >
      {children}
    </motion.div>
  )
}

// 页面过渡组件
interface PageTransitionProps {
  children: ReactNode
  className?: string
}

export function PageTransition({ children, className = '' }: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

// 滚动触发动画组件
interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  threshold?: number
}

export function ScrollAnimation({ 
  children, 
  className = '',
  threshold = 0.1 
}: ScrollAnimationProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: threshold }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  )
}

// 悬浮动画组件
interface HoverAnimationProps {
  children: ReactNode
  className?: string
  scale?: number
  glow?: boolean
}

export function HoverAnimation({ 
  children, 
  className = '',
  scale = 1.05,
  glow = false
}: HoverAnimationProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        scale,
        boxShadow: glow ? '0 0 30px rgba(0, 255, 255, 0.5)' : undefined,
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        duration: 0.2,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  )
}

// 打字机效果组件
interface TypewriterProps {
  text: string
  className?: string
  delay?: number
  speed?: number
}

export function Typewriter({ 
  text, 
  className = '',
  delay = 0,
  speed = 0.05 
}: TypewriterProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: delay + index * speed,
            duration: 0.1,
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  )
}
