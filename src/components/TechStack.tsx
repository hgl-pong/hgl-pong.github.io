'use client'

import { useState, useEffect } from 'react'

const TechStack = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [animateSkills, setAnimateSkills] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Delay skill bar animations
          setTimeout(() => setAnimateSkills(true), 500)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('tech-stack')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])
  const techStacks = [
    { name: 'C++', level: 95, color: 'bg-blue-600' },
    { name: 'DirectX 11', level: 90, color: 'bg-blue-500' },
    { name: 'PhysX', level: 85, color: 'bg-green-600' },
    { name: 'HLSL', level: 88, color: 'bg-yellow-600' },
    { name: 'Win32 API', level: 80, color: 'bg-gray-600' },
    { name: '自研引擎', level: 85, color: 'bg-purple-600' },
    { name: '3D数学', level: 90, color: 'bg-red-600' },
    { name: 'Visual Studio', level: 85, color: 'bg-blue-800' },
  ]

  const categories = [
    {
      title: '图形编程',
      techs: ['DirectX 11', 'HLSL', 'Shader编程', '渲染管线'],
      icon: '🎨'
    },
    {
      title: '物理引擎',
      techs: ['PhysX', '碰撞检测', '刚体动力学', '约束系统'],
      icon: '⚡'
    },
    {
      title: '引擎开发',
      techs: ['C++', '自研引擎', '资源管理', '性能优化'],
      icon: '🎮'
    }
  ]

  return (
    <section id="tech-stack" className="py-24 relative overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-gray-400/10 to-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-white/10 to-gray-300/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-gray-500/10 to-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-900 rounded-2xl mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 bg-clip-text text-transparent mb-6">
            技术栈
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            我熟悉的游戏引擎开发技术和工具，专注于高性能图形渲染和物理模拟
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full mx-auto"></div>
        </div>

        {/* Tech Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className={`
                group relative overflow-hidden bg-white/80 backdrop-blur-sm border border-white/20
                rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500
                hover:transform hover:-translate-y-2 text-center
                ${isVisible ? `animate-fade-in-up animate-delay-${(index + 1) * 200}` : 'opacity-0'}
              `}
            >
              {/* Icon with gradient background */}
              <div className="relative mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl text-white text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                  {category.icon}
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-gray-400/20 to-white/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-gray-600 transition-colors duration-300">
                {category.title}
                <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-gray-700 to-gray-900 transition-all duration-500 mt-2 mx-auto"></div>
              </h3>

              <div className="flex flex-wrap justify-center gap-3">
                {category.techs.map((tech, techIndex) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200/50 text-gray-700 text-sm font-semibold rounded-full hover:from-gray-100 hover:to-gray-200 hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 via-white/5 to-gray-300/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            </div>
          ))}
        </div>

        {/* Skill Levels */}
        <div className={`relative overflow-hidden bg-white/80 backdrop-blur-sm border border-white/20 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 ${isVisible ? 'animate-fade-in-up animate-delay-600' : 'opacity-0'}`}>
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-900 rounded-2xl mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 bg-clip-text text-transparent mb-4">
              技能熟练度
            </h3>
            <p className="text-gray-600">
              基于项目经验和实际应用的技能评估
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {techStacks.map((tech, index) => (
              <div
                key={tech.name}
                className={`
                  group p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300
                  ${animateSkills ? `animate-fade-in-left animate-delay-${index * 100}` : 'opacity-0'}
                `}
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-gray-800 group-hover:text-gray-600 transition-colors duration-300">
                    {tech.name}
                  </span>
                  <span className="text-sm font-bold text-gray-600 bg-gray-100 px-3 py-1 rounded-full group-hover:bg-gray-200 group-hover:text-gray-700 transition-all duration-300">
                    {tech.level}%
                  </span>
                </div>

                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
                    <div
                      className={`h-4 rounded-full ${tech.color} transition-all duration-1000 ease-out relative overflow-hidden`}
                      style={{
                        width: animateSkills ? `${tech.level}%` : '0%',
                        transitionDelay: `${index * 150}ms`
                      }}
                    >
                      {/* Animated shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 animate-pulse"></div>

                      {/* Skill level indicator */}
                      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-sm opacity-80"></div>
                    </div>
                  </div>

                  {/* Skill level labels */}
                  <div className="flex justify-between text-xs text-gray-400 mt-2">
                    <span>初学</span>
                    <span>熟练</span>
                    <span>精通</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Background decoration */}
          <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-gray-400/10 to-white/10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  )
}

export default TechStack