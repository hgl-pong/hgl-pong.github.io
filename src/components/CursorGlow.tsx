'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CursorGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        (typeof target.closest === 'function' && target.closest('button')) ||
        (typeof target.closest === 'function' && target.closest('a')) ||
        (target.classList && target.classList.contains('interactive'))
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
    }
  }, [])

  return (
    <>
      {/* Main cursor glow */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-screen"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5
        }}
      >
        <div 
          className={`w-[400px] h-[400px] rounded-full transition-all duration-300 ${
            isHovering 
              ? 'bg-gradient-radial from-blue-500/30 via-blue-500/10 to-transparent' 
              : 'bg-gradient-radial from-blue-500/20 via-blue-500/5 to-transparent'
          }`}
          style={{
            background: isHovering 
              ? 'radial-gradient(circle, rgba(22, 119, 255, 0.3) 0%, rgba(22, 119, 255, 0.1) 40%, transparent 70%)'
              : 'radial-gradient(circle, rgba(22, 119, 255, 0.2) 0%, rgba(22, 119, 255, 0.05) 40%, transparent 70%)',
            filter: 'blur(40px)'
          }}
        />
      </motion.div>

      {/* Secondary cursor trail */}
      <motion.div
        className="fixed pointer-events-none z-[9998] mix-blend-screen"
        animate={{
          x: mousePosition.x - 100,
          y: mousePosition.y - 100,
        }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 150,
          mass: 1
        }}
      >
        <div 
          className="w-[200px] h-[200px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(114, 46, 209, 0.15) 0%, transparent 60%)',
            filter: 'blur(30px)',
            transform: isHovering ? 'scale(1.2)' : 'scale(1)',
            transition: 'transform 0.3s ease'
          }}
        />
      </motion.div>

      {/* Small cursor dot */}
      <motion.div
        className="fixed pointer-events-none z-[10000]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "spring",
          damping: 100,
          stiffness: 2000,
          mass: 0.1
        }}
      >
        <div 
          className={`w-2 h-2 rounded-full transition-all duration-200 ${
            isHovering 
              ? 'bg-white scale-150 shadow-[0_0_20px_rgba(255,255,255,0.5)]' 
              : 'bg-blue-400 shadow-[0_0_10px_rgba(22,119,255,0.5)]'
          }`}
        />
      </motion.div>
    </>
  )
}

export default CursorGlow
