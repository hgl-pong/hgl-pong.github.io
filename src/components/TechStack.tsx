'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Code2, Zap, Gamepad2, Settings } from 'lucide-react'
import Section from './ui/Section'
import Typography from './ui/Typography'
import Card from './ui/Card'
import ProfessionalBackground from './ui/ProfessionalBackground'

const TechStack = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [animateSkills, setAnimateSkills] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
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
    { name: 'C++', level: 95, category: '编程语言', years: '8+' },
    { name: 'DirectX 11', level: 90, category: '图形API', years: '5+' },
    { name: 'PhysX', level: 85, category: '物理引擎', years: '4+' },
    { name: 'HLSL', level: 88, category: '着色器', years: '5+' },
    { name: 'Win32 API', level: 80, category: '系统API', years: '6+' },
    { name: '游戏引擎架构', level: 85, category: '架构设计', years: '4+' },
  ]

  const categories = [
    {
      title: '图形渲染技术',
      description: '专注于现代图形API和渲染管线优化',
      icon: <Code2 size={24} />,
      techs: ['DirectX 11', 'HLSL Shaders', '渲染管线', 'GPU优化'],
      color: 'blue',
      projects: 15
    },
    {
      title: '物理引擎开发',
      description: '深入研究物理模拟和碰撞检测系统',
      icon: <Zap size={24} />,
      techs: ['PhysX SDK', '碰撞检测', '刚体动力学', '约束系统'],
      color: 'teal',
      projects: 12
    },
    {
      title: '引擎架构设计',
      description: '构建高性能、可扩展的游戏引擎架构',
      icon: <Gamepad2 size={24} />,
      techs: ['C++架构', '内存管理', '多线程', '性能优化'],
      color: 'purple',
      projects: 8
    }
  ]


  return (
    <Section id="tech-stack" variant="professional" padding="xl" className="relative">
      <ProfessionalBackground variant="gradient" />
      
      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-6">
            <Settings size={16} />
            技术栈
          </div>
          
          <Typography variant="h2" color="professional" className="mb-6">
            核心技术能力
          </Typography>
          
          <Typography variant="body" color="secondary" className="text-lg max-w-3xl mx-auto">
            专注于游戏引擎底层技术开发，在图形渲染、物理模拟和引擎架构方面拥有丰富经验
          </Typography>
        </motion.div>


        {/* Tech Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
            >
              <Card variant="professional" padding="lg" hover className="h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 bg-${category.color}-100 rounded-xl flex items-center justify-center text-${category.color}-600`}>
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <Typography variant="h5" color="professional">
                      {category.title}
                    </Typography>
                    <Typography variant="caption" color="muted">
                      {category.projects} 个相关项目
                    </Typography>
                  </div>
                </div>
                
                <Typography variant="body" color="secondary" className="mb-6">
                  {category.description}
                </Typography>
                
                <div className="space-y-2">
                  {category.techs.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg text-sm"
                    >
                      <div className={`w-2 h-2 bg-${category.color}-500 rounded-full`} />
                      <span className="font-medium text-gray-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skills Progress */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Card variant="professional" padding="lg">
            <div className="text-center mb-8">
              <Typography variant="h3" color="professional" className="mb-4">
                技能熟练度
              </Typography>
              <Typography variant="body" color="secondary">
                基于实际项目经验和技术实践
              </Typography>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {techStacks.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={animateSkills ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-3"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <Typography variant="h6" color="professional">
                        {tech.name}
                      </Typography>
                      <Typography variant="caption" color="muted">
                        {tech.category} • {tech.years} 年经验
                      </Typography>
                    </div>
                    <div className="text-right">
                      <Typography variant="h6" color="accent" className="font-bold">
                        {tech.level}%
                      </Typography>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className="h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full relative overflow-hidden"
                        initial={{ width: 0 }}
                        animate={animateSkills ? { width: `${tech.level}%` } : {}}
                        transition={{ duration: 1, delay: index * 0.15, ease: "easeOut" }}
                      >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-pulse" />
                      </motion.div>
                    </div>
                    
                    {/* Skill level indicators */}
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>初学</span>
                      <span>熟练</span>
                      <span>精通</span>
                      <span>精通</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  )
}

export default TechStack