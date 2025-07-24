import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, Tag, Search } from 'lucide-react'
import Link from 'next/link'

// 模拟博客数据
const blogPosts = [
  {
    id: 1,
    title: 'DirectX 11渲染管线深度解析',
    excerpt: '深入探讨DirectX 11的渲染管线架构，包括输入装配器、顶点着色器、像素着色器等各个阶段的详细实现，以及如何优化渲染性能...',
    date: '2024-01-15',
    readTime: '10分钟',
    category: 'DirectX',
    tags: ['DirectX 11', '渲染管线', 'HLSL'],
    slug: 'directx11-rendering-pipeline'
  },
  {
    id: 2,
    title: 'PhysX物理引擎集成实战',
    excerpt: '详细介绍如何在自研游戏引擎中集成PhysX物理引擎，包括刚体创建、碰撞检测、约束系统等核心功能的实现和优化技巧...',
    date: '2024-01-10',
    readTime: '12分钟',
    category: 'PhysX',
    tags: ['PhysX', '物理引擎', '碰撞检测'],
    slug: 'physx-integration-guide'
  },
  {
    id: 3,
    title: 'HLSL着色器编程技巧',
    excerpt: '分享HLSL着色器开发中的实用技巧，包括光照模型、阴影映射、后处理效果等高级渲染技术的实现方法...',
    date: '2024-01-05',
    readTime: '8分钟',
    category: 'HLSL',
    tags: ['HLSL', '着色器', '光照'],
    slug: 'hlsl-shader-programming'
  },
  {
    id: 4,
    title: 'C++游戏引擎架构设计',
    excerpt: '探讨现代C++游戏引擎的架构设计原则，包括组件系统、资源管理、渲染抽象层等核心模块的设计思路...',
    date: '2023-12-28',
    readTime: '15分钟',
    category: 'C++',
    tags: ['C++', '引擎架构', '设计模式'],
    slug: 'cpp-game-engine-architecture'
  },
  {
    id: 5,
    title: 'DirectX 11纹理和采样器优化',
    excerpt: '深入分析DirectX 11中纹理资源的管理和采样器状态的优化，包括纹理压缩、Mipmap生成、各向异性过滤等技术...',
    date: '2023-12-20',
    readTime: '9分钟',
    category: 'DirectX',
    tags: ['DirectX 11', '纹理', '性能优化'],
    slug: 'directx11-texture-optimization'
  },
  {
    id: 6,
    title: 'PhysX刚体动力学详解',
    excerpt: '详细讲解PhysX中刚体动力学的实现原理，包括质量、惯性、力和扭矩的计算，以及如何创建逼真的物理效果...',
    date: '2023-12-15',
    readTime: '11分钟',
    category: 'PhysX',
    tags: ['PhysX', '刚体', '动力学'],
    slug: 'physx-rigid-body-dynamics'
  }
]

const categories = ['全部', 'DirectX', 'PhysX', 'HLSL', 'C++', '性能优化']

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Page Header */}
        <section className="bg-white border-b border-gray-200 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">技术博客</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                分享DirectX 11图形编程和PhysX物理引擎开发经验
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Search and Filter */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="搜索文章..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Blog Posts */}
              <div className="space-y-8">
                {blogPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <Link href={`/blog/${post.slug}`}>
                      <div className="cursor-pointer">
                        {/* Category Badge */}
                        <div className="mb-3">
                          <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                            {post.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors">
                          {post.title}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {post.excerpt}
                        </p>

                        {/* Meta Info */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Calendar size={16} />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock size={16} />
                              <span>{post.readTime}</span>
                            </div>
                          </div>

                          {/* Tags */}
                          <div className="flex items-center space-x-2">
                            <Tag size={16} className="text-gray-400" />
                            <div className="flex space-x-2">
                              {post.tags.slice(0, 2).map((tag) => (
                                <span
                                  key={tag}
                                  className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                                >
                                  {tag}
                                </span>
                              ))}
                              {post.tags.length > 2 && (
                                <span className="text-xs text-gray-400">
                                  +{post.tags.length - 2}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <nav className="flex space-x-2">
                  <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                    上一页
                  </button>
                  <button className="px-3 py-2 text-sm font-medium text-white bg-primary-600 border border-primary-600 rounded-md">
                    1
                  </button>
                  <button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                    2
                  </button>
                  <button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                    3
                  </button>
                  <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                    下一页
                  </button>
                </nav>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="space-y-8">
                {/* Categories */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">技术分类</h3>
                  <div className="space-y-2">
                    {categories.slice(1).map((category) => (
                      <a
                        key={category}
                        href={`/blog?category=${category.toLowerCase()}`}
                        className="block text-gray-600 hover:text-primary-600 py-1 transition-colors"
                      >
                        {category}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Popular Tags */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">热门标签</h3>
                  <div className="flex flex-wrap gap-2">
                    {['DirectX 11', 'PhysX', 'HLSL', 'C++', '渲染管线', '物理引擎', '着色器', '性能优化'].map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-primary-100 hover:text-primary-700 cursor-pointer transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Recent Posts */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">最新文章</h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <div key={post.id}>
                        <Link href={`/blog/${post.slug}`} className="block hover:text-primary-600 transition-colors">
                          <h4 className="font-medium text-gray-900 mb-1 line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-sm text-gray-500">{post.date}</p>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}