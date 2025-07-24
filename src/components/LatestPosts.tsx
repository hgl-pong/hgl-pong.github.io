import Link from 'next/link'
import { Calendar, Clock, Tag } from 'lucide-react'

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
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">最新文章</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            分享最新的技术心得和项目经验
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mockPosts.map((post) => (
            <article key={post.id} className="card group cursor-pointer">
              <Link href={`/blog/${post.slug}`}>
                <div>
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={16} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex items-center space-x-2">
                    <Tag size={16} className="text-gray-400" />
                    <div className="flex flex-wrap gap-2">
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
              </Link>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/blog" className="btn-primary">
            查看所有文章
          </Link>
        </div>
      </div>
    </section>
  )
}

export default LatestPosts