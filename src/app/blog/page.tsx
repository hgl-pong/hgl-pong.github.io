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
    excerpt: '从零开始集成PhysX物理引擎到游戏项目中，包括刚体物理、碰撞检测、约束系统等核心功能的实现和优化技巧...',
    date: '2024-01-10',
    readTime: '15分钟',
    category: 'PhysX',
    tags: ['PhysX', '物理引擎', 'C++'],
    slug: 'physx-integration-guide'
  },
  {
    id: 3,
    title: 'HLSL着色器编程技巧',
    excerpt: '分享HLSL着色器开发中的实用技巧，包括顶点着色器、像素着色器的优化方法，以及常用的视觉效果实现...',
    date: '2024-01-05',
    readTime: '12分钟',
    category: 'HLSL',
    tags: ['HLSL', '着色器', '渲染'],
    slug: 'hlsl-shader-programming'
  }
]

const categories = ['全部', 'DirectX', 'PhysX', 'HLSL', 'C++', '性能优化']

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Page Header */}
        <section className="bg-black/40 border-b border-white/10 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">技术博客</h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                分享DirectX 11图形编程和PhysX物理引擎开发经验
              </p>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-8">
              {/* Main Content */}
              <div className="flex-1">
                {/* Search and Filter */}
                <div className="bg-black/40 rounded-3xl shadow-lg border border-white/10 p-6 mb-8 glass-highlight glass-noise">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="text"
                        placeholder="搜索文章..."
                        className="w-full pl-10 pr-4 py-2 border border-white/20 bg-black/30 text-gray-200 placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-white/30 focus:border-transparent"
                      />
                    </div>
                    <select className="px-4 py-2 border border-white/20 bg-black/30 text-gray-200 rounded-xl focus:ring-2 focus:ring-white/30 focus:border-transparent">
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
                    <article key={post.id} className="bg-black/40 rounded-3xl shadow-lg border border-white/10 p-6 hover:shadow-2xl transition-shadow glass-highlight glass-noise">
                      <Link href={`/blog/${post.slug}`}>
                        <div className="cursor-pointer">
                          {/* Category Badge */}
                          <div className="mb-3">
                            <span className="inline-block bg-white/10 text-gray-200 px-3 py-1 rounded-full text-sm font-medium">
                              {post.category}
                            </span>
                          </div>

                          {/* Title */}
                          <h2 className="text-2xl font-bold text-white mb-3 hover:text-gray-300 transition-colors">
                            {post.title}
                          </h2>

                          {/* Excerpt */}
                          <p className="text-gray-300 mb-4 leading-relaxed">
                            {post.excerpt}
                          </p>

                          {/* Meta Info */}
                          <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
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
                                  className="text-xs bg-white/10 text-gray-200 px-2 py-1 rounded"
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
                      </Link>
                    </article>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-12">
                  <nav className="flex space-x-2">
                    <button className="btn btn-secondary rounded-xl px-4 py-2 text-sm">上一页</button>
                    <button className="btn btn-primary rounded-xl px-4 py-2 text-sm">1</button>
                    <button className="btn btn-secondary rounded-xl px-4 py-2 text-sm">2</button>
                    <button className="btn btn-secondary rounded-xl px-4 py-2 text-sm">3</button>
                    <button className="btn btn-secondary rounded-xl px-4 py-2 text-sm">下一页</button>
                  </nav>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:w-1/3">
                <div className="space-y-8">
                  {/* Categories */}
                  <div className="bg-black/40 rounded-3xl shadow-lg border border-white/10 p-6 glass-highlight glass-noise">
                    <h3 className="text-lg font-semibold text-white mb-4">技术分类</h3>
                    <div className="space-y-2">
                      {categories.slice(1).map((category) => (
                        <a
                          key={category}
                          href={`/blog?category=${category.toLowerCase()}`}
                          className="block text-gray-300 hover:text-white py-1 transition-colors"
                        >
                          {category}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Popular Tags */}
                  <div className="bg-black/40 rounded-3xl shadow-lg border border-white/10 p-6 glass-highlight glass-noise">
                    <h3 className="text-lg font-semibold text-white mb-4">热门标签</h3>
                    <div className="flex flex-wrap gap-2">
                      {['DirectX 11', 'PhysX', 'HLSL', 'C++', '渲染管线', '物理引擎', '着色器', '性能优化'].map((tag) => (
                        <span
                          key={tag}
                          className="bg-white/10 text-gray-200 px-3 py-1 rounded-full text-sm hover:bg-white/20 hover:text-white cursor-pointer transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Recent Posts */}
                  <div className="bg-black/40 rounded-3xl shadow-lg border border-white/10 p-6 glass-highlight glass-noise">
                    <h3 className="text-lg font-semibold text-white mb-4">最新文章</h3>
                    <div className="space-y-4">
                      {blogPosts.slice(0, 3).map((post) => (
                        <div key={post.id}>
                          <Link href={`/blog/${post.slug}`} className="block hover:text-white transition-colors">
                            <h4 className="font-medium text-white mb-1 line-clamp-2">
                              {post.title}
                            </h4>
                            <p className="text-sm text-gray-400">{post.date}</p>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
