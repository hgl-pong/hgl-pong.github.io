'use client'

import Link from 'next/link'
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'

// 模拟数据，后续会从实际数据源获取
const mockPosts = [
  {
    id: 1,
    title: 'DirectX 11渲染管线深度解析',
    excerpt: '深入探讨DirectX 11的渲染管线架构，包括输入装配器、顶点着色器、像素着色器等各个阶段的详细实现...',
    date: '2024-01-15',
    readTime: '10分钟',
    category: 'DirectX',
    tags: ['DirectX 11', '渲染管线', 'HLSL'],
    slug: 'directx11-rendering-pipeline'
  },
  {
    id: 2,
    title: 'PhysX物理引擎集成实战',
    excerpt: '详细介绍如何在自研游戏引擎中集成PhysX物理引擎，包括刚体创建、碰撞检测、约束系统等核心功能...',
    date: '2024-01-10',
    readTime: '12分钟',
    category: 'PhysX',
    tags: ['PhysX', '物理引擎', '碰撞检测'],
    slug: 'physx-integration-guide'
  },
  {
    id: 3,
    title: 'HLSL着色器编程技巧',
    excerpt: '分享HLSL着色器开发中的实用技巧，包括光照模型、阴影映射、后处理效果等高级渲染技术...',
    date: '2024-01-05',
    readTime: '8分钟',
    category: 'HLSL',
    tags: ['HLSL', '着色器', '光照'],
    slug: 'hlsl-shader-programming'
  }
]

const LatestPosts = () => {
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

    const section = document.getElementById('latest-posts')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="latest-posts" className="py-24 relative">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white"></div>
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-900 rounded-2xl mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 bg-clip-text text-transparent mb-6">
            最新文章
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            分享最新的技术心得和项目经验，探索游戏引擎开发的前沿技术
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full mx-auto"></div>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mockPosts.map((post, index) => (
            <article
              key={post.id}
              className={`
                group relative overflow-hidden bg-white/80 backdrop-blur-sm border border-white/20
                rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500
                hover:transform hover:-translate-y-2 hover:scale-[1.02]
                ${isVisible ? `animate-fade-in-up animate-delay-${(index + 1) * 200}` : 'opacity-0'}
              `}
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative z-10">
                  {/* Category Badge */}
                  <div className="mb-6">
                    <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-500/10 to-white/10 border border-gray-200/50 rounded-full text-sm font-semibold text-gray-700 hover:from-gray-500/20 hover:to-white/20 transition-all duration-300 hover:scale-105">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mr-2"></div>
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-600 transition-all duration-300 leading-tight">
                    {post.title}
                    <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-gray-700 to-gray-900 transition-all duration-500 mt-2"></div>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-6 line-clamp-3 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2 hover:text-gray-600 transition-colors duration-300">
                        <div className="p-1 bg-gray-50 rounded-full">
                          <Calendar size={14} />
                        </div>
                        <span className="font-medium">{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 hover:text-gray-600 transition-colors duration-300">
                        <div className="p-1 bg-gray-50 rounded-full">
                          <Clock size={14} />
                        </div>
                        <span className="font-medium">{post.readTime}</span>
                      </div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight size={18} className="text-gray-500 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full hover:bg-gray-200 hover:text-gray-700 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                      >
                        <Tag size={10} className="mr-1" />
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-xs font-medium rounded-full">
                        +{post.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Hover Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 via-white/5 to-gray-300/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                  {/* Decorative corner element */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-gray-400/20 to-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className={`text-center ${isVisible ? 'animate-fade-in-up animate-delay-600' : 'opacity-0'}`}>
          <Link href="/blog" className="btn btn-gradient btn-xl group inline-flex items-center">
            <span>查看所有文章</span>
            <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <p className="text-gray-500 text-sm mt-4">
            探索更多技术文章和开发心得
          </p>
        </div>
      </div>
    </section>
  )
}

export default LatestPosts