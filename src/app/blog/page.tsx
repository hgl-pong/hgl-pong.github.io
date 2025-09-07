import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
// import PageTransition from '@/components/PageTransition'
import Section from '@/components/ui/Section'
import Typography from '@/components/ui/Typography'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { Calendar, Clock, Tag, Search } from 'lucide-react'
import Link from 'next/link'
// import { motion } from 'framer-motion'

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
    <div>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
        {/* Page Header */}
        <Section variant="professional" padding="xl" className="min-h-[60vh] flex items-center relative overflow-hidden">
          <div className="relative z-10 w-full">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                技术博客
              </div>
              
              <Typography variant="h1" color="professional" className="leading-tight mb-4">
                <span className="block">技术博客</span>
                <span className="block text-3xl md:text-4xl font-normal text-gray-600 mt-2">
                  Technical Blog
                </span>
              </Typography>
              
              <Typography variant="body" color="secondary" className="text-lg max-w-3xl mx-auto">
                分享DirectX 11图形编程和PhysX物理引擎开发经验，
                探索游戏引擎底层技术实现
              </Typography>
            </div>
          </div>
        </Section>

        {/* Blog Content */}
        <Section variant="professional" padding="lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-8">
              {/* Main Content */}
              <div className="flex-1">
                {/* Search and Filter */}
                <Card variant="professional" padding="lg" className="mb-8">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="text"
                        placeholder="搜索文章..."
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 bg-white text-gray-700 placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/50 transition-all duration-300"
                      />
                    </div>
                    <select className="px-4 py-3 border border-gray-300 bg-white text-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/50 transition-all duration-300 cursor-pointer">
                      {categories.map((category) => (
                        <option key={category} value={category} className="bg-white">
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </Card>

                {/* Blog Posts */}
                <div className="space-y-8">
                  {blogPosts.map((post, index) => (
                    <article
                      key={post.id}
                    >
                      <Card variant="professional" padding="lg" className="hover:shadow-xl transition-all duration-300 group">
                        <Link href={`/blog/${post.slug}`}>
                          <div className="cursor-pointer">
                            {/* Category Badge */}
                            <div className="mb-3">
                              <span className="inline-block bg-blue-50 border border-blue-200 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                                {post.category}
                              </span>
                            </div>

                            {/* Title */}
                            <Typography variant="h3" color="professional" className="mb-3 group-hover:text-blue-600 transition-colors">
                              {post.title}
                            </Typography>

                            {/* Excerpt */}
                            <Typography variant="body" color="secondary" className="mb-4 leading-relaxed line-clamp-3">
                              {post.excerpt}
                            </Typography>

                            {/* Meta Info */}
                            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                              <div className="flex items-center space-x-1 group-hover:text-blue-600 transition-colors">
                                <Calendar size={16} className="text-blue-500" />
                                <span>{post.date}</span>
                              </div>
                              <div className="flex items-center space-x-1 group-hover:text-blue-600 transition-colors">
                                <Clock size={16} className="text-blue-500" />
                                <span>{post.readTime}</span>
                              </div>
                            </div>

                            {/* Tags */}
                            <div className="flex items-center space-x-2">
                              <Tag size={16} className="text-blue-500" />
                              <div className="flex flex-wrap gap-2">
                                {post.tags.slice(0, 2).map((tag) => (
                                  <span
                                    key={tag}
                                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md border border-gray-200 hover:bg-blue-100 hover:text-blue-700 transition-colors"
                                  >
                                    {tag}
                                  </span>
                                ))}
                                {post.tags.length > 2 && (
                                  <span className="text-xs text-gray-500">
                                    +{post.tags.length - 2}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </Link>
                      </Card>
                    </article>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-12">
                  <nav className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      上一页
                    </Button>
                    <Button variant="professional" size="sm">
                      1
                    </Button>
                    <Button variant="outline" size="sm">
                      2
                    </Button>
                    <Button variant="outline" size="sm">
                      3
                    </Button>
                    <Button variant="outline" size="sm">
                      下一页
                    </Button>
                  </nav>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:w-1/3">
                <div className="space-y-8">
                  {/* Categories */}
                  <Card variant="professional" padding="lg">
                    <Typography variant="h4" color="professional" className="mb-4">
                      技术分类
                    </Typography>
                    <div className="space-y-2">
                      {categories.slice(1).map((category) => (
                        <a
                          key={category}
                          href={`/blog?category=${category.toLowerCase()}`}
                          className="block text-gray-600 hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-blue-50 transition-all duration-300 border-l-2 border-transparent hover:border-blue-500"
                        >
                          {category}
                        </a>
                      ))}
                    </div>
                  </Card>

                  {/* Popular Tags */}
                  <Card variant="professional" padding="lg">
                    <Typography variant="h4" color="professional" className="mb-4">
                      热门标签
                    </Typography>
                    <div className="flex flex-wrap gap-2">
                      {['DirectX 11', 'PhysX', 'HLSL', 'C++', '渲染管线', '物理引擎', '着色器', '性能优化'].map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200 hover:bg-blue-100 hover:text-blue-700 transition-all duration-300 cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Card>

                  {/* Recent Posts */}
                  <Card variant="professional" padding="lg">
                    <Typography variant="h4" color="professional" className="mb-4">
                      最新文章
                    </Typography>
                    <div className="space-y-4">
                      {blogPosts.slice(0, 3).map((post) => (
                        <div key={post.id} className="group">
                          <Link href={`/blog/${post.slug}`} className="block">
                            <Typography variant="body" color="secondary" className="font-medium mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
                              {post.title}
                            </Typography>
                            <Typography variant="caption" color="muted">
                              {post.date}
                            </Typography>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
