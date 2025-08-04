'use client'

import { Github, Mail, Heart, ExternalLink } from 'lucide-react'
import { useState, useEffect } from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const footer = document.getElementById('footer')
    if (footer) observer.observe(footer)

    return () => observer.disconnect()
  }, [])

  return (
    <footer id="footer" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white/5 to-gray-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-gray-500/5 to-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-gray-400/5 to-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h-2zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z'/%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className={`md:col-span-2 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                HGL博客
              </h3>
            </div>

            <p className="text-gray-300 mb-8 max-w-md leading-relaxed text-lg">
              专注于DirectX 11和PhysX游戏引擎开发，记录C++底层编程和引擎架构的学习心得。
              希望我的经验能帮助到更多的游戏开发者朋友。
            </p>

            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-gray-800/50 hover:bg-gray-600 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/25"
              >
                <Github size={24} className="text-gray-300 group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="group p-3 bg-gray-800/50 hover:bg-gray-600 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/25"
              >
                <Mail size={24} className="text-gray-300 group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-gray-800/50 hover:bg-gray-600 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/25"
              >
                <ExternalLink size={24} className="text-gray-300 group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={`${isVisible ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
            <h4 className="text-lg font-semibold mb-4 text-primary-300">快速链接</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 block py-1">
                  首页
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 block py-1">
                  博客
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 block py-1">
                  关于
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 block py-1">
                  联系
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className={`${isVisible ? 'animate-fade-in-up animate-delay-300' : 'opacity-0'}`}>
            <h4 className="text-lg font-semibold mb-4 text-primary-300">技术分类</h4>
            <ul className="space-y-2">
              <li>
                <a href="/blog?category=directx" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 block py-1">
                  DirectX 11
                </a>
              </li>
              <li>
                <a href="/blog?category=physx" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 block py-1">
                  PhysX物理
                </a>
              </li>
              <li>
                <a href="/blog?category=hlsl" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 block py-1">
                  HLSL着色器
                </a>
              </li>
              <li>
                <a href="/blog?category=cpp" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 block py-1">
                  C++引擎
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center ${isVisible ? 'animate-fade-in-up animate-delay-400' : 'opacity-0'}`}>
          <p className="text-gray-300 text-sm hover:text-white transition-colors duration-300">
            © {currentYear} HGL博客. 保留所有权利.
          </p>
          <p className="text-gray-300 text-sm flex items-center mt-4 md:mt-0 hover:text-white transition-colors duration-300">
            Made with <Heart size={16} className="mx-1 text-white animate-pulse" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer