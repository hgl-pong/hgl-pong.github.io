import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
// import PageTransition from '@/components/PageTransition'
import Section from '@/components/ui/Section'
import Typography from '@/components/ui/Typography'
import Card from '@/components/ui/Card'
import Image from 'next/image'
import { Code, Gamepad2, Cpu, Zap } from 'lucide-react'
// import { motion } from 'framer-motion'

export default function AboutPage() {
  const experiences = [
    {
      title: '游戏引擎架构师',
      company: '某游戏公司',
      period: '2022 - 至今',
      description: '负责自研游戏引擎的架构设计和核心模块开发，包括渲染系统、物理系统、资源管理等。'
    },
    {
      title: 'Unity高级开发工程师',
      company: '独立游戏工作室',
      period: '2020 - 2022',
      description: '使用Unity引擎开发多款移动端和PC端游戏，专注于性能优化和渲染效果提升。'
    },
    {
      title: '图形程序员',
      company: '技术公司',
      period: '2018 - 2020',
      description: '专注于OpenGL和DirectX图形编程，开发实时渲染技术和Shader效果。'
    }
  ]

  const skills = [
    {
      category: '游戏引擎',
      items: ['Unity 3D', 'Unreal Engine 4/5', '自研引擎开发', 'Godot'],
      icon: <Gamepad2 className="w-8 h-8 text-blue-600" />
    },
    {
      category: '图形编程',
      items: ['OpenGL', 'DirectX 11/12', 'Vulkan', 'Metal'],
      icon: <Code className="w-8 h-8 text-blue-600" />
    },
    {
      category: '编程语言',
      items: ['C++', 'C#', 'HLSL', 'GLSL'],
      icon: <Cpu className="w-8 h-8 text-blue-600" />
    },
    {
      category: '专业技能',
      items: ['渲染管线设计', '性能优化', 'Shader编程', '物理模拟'],
      icon: <Zap className="w-8 h-8 text-blue-600" />
    }
  ]

  return (
    <div>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
        {/* Hero Section */}
        <Section variant="professional" padding="xl" className="min-h-[60vh] flex items-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white/20">
                <Image
                  src="/avatar.jpg"
                  alt="个人头像"
                  fill
                  className="object-cover"
                  priority
                  loading="eager"
                />
              </div>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                游戏引擎开发工程师
              </div>
              
              <Typography variant="h1" color="professional" className="leading-tight mb-4">
                <span className="block">关于我</span>
                <span className="block text-3xl md:text-4xl font-normal text-gray-600 mt-2">
                  About Me
                </span>
              </Typography>
              
              <Typography variant="body" color="secondary" className="text-lg max-w-3xl mx-auto">
                游戏引擎开发工程师，专注于DirectX 11图形编程和PhysX物理引擎开发，
                分享底层技术实现和性能优化经验
              </Typography>
            </div>
          </div>
        </Section>

        {/* Introduction */}
        <Section variant="professional" padding="lg">
          <div className="max-w-4xl mx-auto">
            <Card variant="professional" padding="lg">
              <Typography variant="h2" color="professional" className="mb-6">
                个人简介
              </Typography>
              <div className="space-y-4">
                <Typography variant="body" color="secondary" className="leading-relaxed">
                  我是一名专注于游戏引擎开发的工程师，拥有多年的图形编程和引擎架构经验。
                  从最初的OpenGL图形编程开始，逐步深入到现代图形API如Vulkan和DirectX 12的应用。
                </Typography>
                <Typography variant="body" color="secondary" className="leading-relaxed">
                  在职业生涯中，我参与了多个游戏项目的开发，从移动端的休闲游戏到PC端的3A大作。
                  这些经历让我深刻理解了不同平台的性能特点和优化策略。
                </Typography>
                <Typography variant="body" color="secondary" className="leading-relaxed">
                  我热衷于分享技术知识，希望通过这个博客记录我在游戏引擎开发路上的心得体会，
                  与更多的开发者交流学习，共同推动游戏技术的发展。
                </Typography>
              </div>
            </Card>
          </div>
        </Section>

        {/* Skills */}
        <Section variant="professional" padding="lg">
          <div className="max-w-6xl mx-auto">
            <Typography variant="h2" color="professional" className="text-center mb-12">
              专业技能
            </Typography>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <div
                  key={skill.category}
                >
                  <Card variant="professional" padding="lg" className="text-center hover:shadow-lg transition-all duration-300">
                    <div className="flex justify-center mb-4">
                      {skill.icon}
                    </div>
                    <Typography variant="h4" color="professional" align="center" className="mb-4">
                      {skill.category}
                    </Typography>
                    <ul className="space-y-2 text-center">
                      {skill.items.map((item) => (
                        <li key={item} className="text-gray-600 text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Experience */}
        <Section variant="professional" padding="lg">
          <div className="max-w-4xl mx-auto">
            <Typography variant="h2" color="professional" className="text-center mb-12">
              工作经历
            </Typography>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                >
                  <Card variant="professional" padding="lg" className="hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <Typography variant="h4" color="professional" className="mb-1">
                          {exp.title}
                        </Typography>
                        <Typography variant="body" color="secondary" className="font-medium">
                          {exp.company}
                        </Typography>
                      </div>
                      <Typography variant="caption" color="muted" className="mt-2 md:mt-0">
                        {exp.period}
                      </Typography>
                    </div>
                    <Typography variant="body" color="secondary" className="leading-relaxed">
                      {exp.description}
                    </Typography>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}