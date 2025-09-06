import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { Code, Gamepad2, Cpu, Zap } from 'lucide-react'

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
      icon: <Gamepad2 className="w-8 h-8 text-white" />
    },
    {
      category: '图形编程',
      items: ['OpenGL', 'DirectX 11/12', 'Vulkan', 'Metal'],
      icon: <Code className="w-8 h-8 text-white" />
    },
    {
      category: '编程语言',
      items: ['C++', 'C#', 'HLSL', 'GLSL'],
      icon: <Cpu className="w-8 h-8 text-white" />
    },
    {
      category: '专业技能',
      items: ['渲染管线设计', '性能优化', 'Shader编程', '物理模拟'],
      icon: <Zap className="w-8 h-8 text-white" />
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-black/40 py-16 border-b border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
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
              <h1 className="text-4xl font-bold text-white mb-4">关于我</h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                游戏引擎开发工程师，专注于底层技术和性能优化
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card">
              <h2 className="text-2xl font-bold text-white mb-6">个人简介</h2>
              <div className="prose max-w-none">
                <p className="text-gray-300 leading-relaxed mb-4">
                  我是一名专注于游戏引擎开发的工程师，拥有多年的图形编程和引擎架构经验。
                  从最初的OpenGL图形编程开始，逐步深入到现代图形API如Vulkan和DirectX 12的应用。
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  在职业生涯中，我参与了多个游戏项目的开发，从移动端的休闲游戏到PC端的3A大作。
                  这些经历让我深刻理解了不同平台的性能特点和优化策略。
                </p>
                <p className="text-gray-300 leading-relaxed">
                  我热衷于分享技术知识，希望通过这个博客记录我在游戏引擎开发路上的心得体会，
                  与更多的开发者交流学习，共同推动游戏技术的发展。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-16 bg-black/40 border-y border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white text-center mb-12">专业技能</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill) => (
                <div key={skill.category} className="card text-center">
                  <div className="flex justify-center mb-4">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    {skill.category}
                  </h3>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li key={item} className="text-gray-300 text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white text-center mb-12">工作经历</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="card">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                      <p className="text-gray-300 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-gray-400 text-sm mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}