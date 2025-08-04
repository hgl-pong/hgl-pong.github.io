'use client'

import Image from 'next/image'
import { Github, Mail, MapPin, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ParticleBackground from './ParticleBackground'
import { Typewriter, HoverAnimation, ScrollAnimation } from './MotionWrapper'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Elegant Particle Background */}
      <ParticleBackground theme="neon" />

      {/* Clean Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

      {/* Subtle Animated Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle floating orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.02) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        {/* Minimal geometric shapes */}
        <motion.div
          className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full opacity-30"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-40 right-32 w-3 h-3 bg-gray-400 rounded-full opacity-20"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-32 left-1/3 w-1 h-1 bg-gray-300 rounded-full opacity-40"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        <div className="text-center">
          {/* Elegant Avatar */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-40 h-40 mx-auto">
              {/* Subtle rotating ring */}
              <motion.div
                className="absolute inset-0 rounded-full p-1"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{
                  background: 'linear-gradient(45deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1), rgba(255,255,255,0.2))',
                }}
              >
                <div className="w-full h-full bg-black rounded-full"></div>
              </motion.div>

              {/* Avatar container */}
              <HoverAnimation scale={1.05}>
                <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl">
                  <Image
                    src="/avatar.jpg"
                    alt="个人头像"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10 rounded-full"></div>
                </div>
              </HoverAnimation>

              {/* Minimal floating elements */}
              <motion.div
                className="absolute -top-3 -right-3 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg opacity-80"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles size={12} className="text-black" />
              </motion.div>
              <motion.div
                className="absolute -bottom-2 -left-3 w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center shadow-lg opacity-60"
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <Sparkles size={8} className="text-gray-700" />
              </motion.div>
            </div>
          </motion.div>

          {/* Cyberpunk Name and Title */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Typewriter
              text="HGL"
              className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent leading-tight"
              delay={0.5}
              speed={0.2}
            />
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-200 mb-4">
                游戏引擎开发工程师
              </h2>
              <motion.div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-white to-gray-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 1, delay: 1.5 }}
              />
            </motion.div>
          </motion.div>

          {/* Elegant Specialization Tags */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            {['DirectX 11', 'PhysX物理引擎', 'HLSL着色器'].map((tag, index) => (
              <motion.span
                key={tag}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-gray-200 font-medium text-sm backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 1.8 + index * 0.2,
                  ease: "easeOut"
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  borderColor: 'rgba(255, 255, 255, 0.3)'
                }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* Clean Description */}
          <motion.p
            className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.4 }}
          >
            热爱游戏引擎底层技术，专注于DirectX 11渲染技术和PhysX物理模拟。
            在这里分享C++游戏引擎开发经验、HLSL着色器编程和物理引擎集成心得。
          </motion.p>

          {/* Contact Info */}
          <div className={`flex justify-center items-center space-x-8 text-gray-500 mb-12 ${isVisible ? 'animate-fade-in-up animate-delay-500' : 'opacity-0'}`}>
            <div className="group flex items-center space-x-2 hover:text-white transition-all duration-300 cursor-pointer">
              <div className="p-2 bg-gray-800 rounded-full group-hover:bg-gray-700 transition-colors duration-300">
                <MapPin size={18} />
              </div>
              <span className="font-medium">中国</span>
            </div>
            <div className="group flex items-center space-x-2 hover:text-white transition-all duration-300 cursor-pointer">
              <div className="p-2 bg-gray-800 rounded-full group-hover:bg-gray-700 transition-colors duration-300">
                <Mail size={18} />
              </div>
              <span className="font-medium">联系邮箱</span>
            </div>
            <div className="group flex items-center space-x-2 hover:text-white transition-all duration-300 cursor-pointer">
              <div className="p-2 bg-gray-800 rounded-full group-hover:bg-gray-700 transition-colors duration-300">
                <Github size={18} />
              </div>
              <span className="font-medium">GitHub</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row justify-center gap-4 ${isVisible ? 'animate-fade-in-up animate-delay-600' : 'opacity-0'}`}>
            <a
              href="/blog"
              className="btn btn-gradient btn-lg group"
            >
              <span>查看博客</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/about"
              className="btn btn-secondary btn-lg group"
            >
              <span>了解更多</span>
              <svg className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className={`mt-16 ${isVisible ? 'animate-fade-in-up animate-delay-700' : 'opacity-0'}`}>
            <div className="flex flex-col items-center text-gray-400">
              <span className="text-sm font-medium mb-2">向下滚动探索更多</span>
              <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero