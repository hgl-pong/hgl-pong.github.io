'use client'

import Link from 'next/link'
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp, Eye } from 'lucide-react'
import { motion } from 'framer-motion'
import Section from './ui/Section'
import Typography from './ui/Typography'
import Card from './ui/Card'
import Button from './ui/Button'
import ProfessionalBackground from './ui/ProfessionalBackground'

// 专业的模拟数据
const featuredPosts = [
  {
    id: 1,
    title: 'DirectX 11渲染管线深度解析与性能优化',
    excerpt: '深入探讨DirectX 11渲染管线的核心架构，包括输入装配器、顶点着色器、像素着色器等各个阶段的详细实现。通过实际案例分析如何进行渲染性能优化，提升游戏帧率表现。',
    date: '2024-01-15',
    readTime: '12分钟',
    category: 'DirectX',
    tags: ['DirectX 11', '渲染管线', 'HLSL', '性能优化'],
    slug: 'directx11-rendering-pipeline',
    views: '2.1k',
    featured: true,
    difficulty: '高级'
  },
  {
    id: 2,
    title: 'PhysX物理引擎集成实战指南',
    excerpt: '详细介绍如何在自研游戏引擎中集成PhysX物理引擎，涵盖刚体创建、碰撞检测、约束系统等核心功能的实现。包含完整的代码示例和最佳实践。',
    date: '2024-01-10',
    readTime: '15分钟',
    category: 'PhysX',
    tags: ['PhysX', '物理引擎', '碰撞检测', '游戏开发'],
    slug: 'physx-integration-guide',
    views: '1.8k',
    featured: false,
    difficulty: '中级'
  },
  {
    id: 3,
    title: 'HLSL着色器编程进阶技巧',
    excerpt: '分享HLSL着色器开发中的高级技巧，包括PBR光照模型、阴影映射、屏幕空间反射等现代渲染技术的实现方法和优化策略。',
    date: '2024-01-05',
    readTime: '10分钟',
    category: 'HLSL',
    tags: ['HLSL', '着色器', 'PBR', '光照'],
    slug: 'hlsl-shader-programming',
    views: '1.5k',
    featured: false,
    difficulty: '高级'
  }
]

const LatestPosts = () => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case '初级': return 'bg-green-100 text-green-700 border-green-200'
      case '中级': return 'bg-yellow-100 text-yellow-700 border-yellow-200'
      case '高级': return 'bg-red-100 text-red-700 border-red-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  return (
    <Section variant="default" padding="xl" className="relative">
      <ProfessionalBackground variant="subtle" />
      
      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-6">
            <BookOpen size={16} />
            技术分享
          </div>
          
          <Typography variant="h2" color="professional" className="mb-6">
            最新技术文章
          </Typography>
          
          <Typography variant="body" color="secondary" className="text-lg max-w-3xl mx-auto">
            分享游戏引擎开发的核心技术和实战经验，帮助开发者掌握前沿技术
          </Typography>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Card variant="professional" padding="none" hover className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Content */}
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-medium">
                    精选文章
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(featuredPosts[0].difficulty)}`}>
                    {featuredPosts[0].difficulty}
                  </span>
                </div>
                
                <Typography variant="h3" color="professional" className="mb-4 leading-tight">
                  <Link href={`/blog/${featuredPosts[0].slug}`} className="hover:text-blue-600 transition-colors duration-300">
                    {featuredPosts[0].title}
                  </Link>
                </Typography>
                
                <Typography variant="body" color="secondary" className="mb-6 leading-relaxed">
                  {featuredPosts[0].excerpt}
                </Typography>
                
                {/* Meta Info */}
                <div className="flex items-center gap-6 mb-6 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{featuredPosts[0].date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{featuredPosts[0].readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye size={14} />
                    <span>{featuredPosts[0].views}</span>
                  </div>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPosts[0].tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors duration-300 cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button variant="professional" rightIcon={<ArrowRight size={16} />}>
                  阅读全文
                </Button>
              </div>
              
              {/* Visual */}
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 lg:p-10 flex items-center justify-center">
                <div className="w-full max-w-sm">
                  <div className="aspect-square bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <BookOpen size={32} className="text-white" />
                      </div>
                      <Typography variant="h5" color="professional" className="mb-2">
                        深度技术
                      </Typography>
                      <Typography variant="caption" color="muted">
                        专业解析
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredPosts.slice(1).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
            >
              <Card variant="professional" padding="lg" hover className="h-full">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(post.difficulty)}`}>
                      {post.difficulty}
                    </span>
                  </div>
                  
                  <Typography variant="h4" color="professional" className="mb-3 leading-tight hover:text-blue-600 transition-colors duration-300">
                    {post.title}
                  </Typography>
                  
                  <Typography variant="body" color="secondary" className="mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </Typography>
                  
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp size={14} />
                      <span>{post.views}</span>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                        +{post.tags.length - 2}
                      </span>
                    )}
                  </div>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Button 
            variant="outline" 
            size="lg"
            rightIcon={<ArrowRight size={20} />}
            className="group"
          >
            查看所有文章
            <motion.div
              className="ml-1"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </Button>
          
          <Typography variant="caption" color="muted" className="mt-4 block">
            持续更新中，敬请期待更多技术分享
          </Typography>
        </motion.div>
      </div>
    </Section>
  )
}

export default LatestPosts