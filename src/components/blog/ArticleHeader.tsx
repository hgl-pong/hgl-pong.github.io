'use client'

import { BlogPost } from '@/lib/posts'
import { formatDate } from '@/lib/utils'
import Typography from '@/components/ui/Typography'
import Card from '@/components/ui/Card'
import { Calendar, Clock, Tag, ArrowLeft, User } from 'lucide-react'
import Link from 'next/link'
import MotionWrapper from '@/components/MotionWrapper'

interface ArticleHeaderProps {
  post: BlogPost
  showBackButton?: boolean
}

export default function ArticleHeader({ post, showBackButton = true }: ArticleHeaderProps) {
  return (
    <div className="relative overflow-hidden w-full py-24">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <MotionWrapper
        type="fade"
        direction="up"
        duration={0.6}
        className="relative z-10 w-full"
      >
        {/* Back Button */}
        {showBackButton && (
          <div className="mb-8">
            <Link href="/blog" className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors group">
              <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              返回博客列表
            </Link>
          </div>
        )}

        {/* Category */}
        <div className="mb-6">
          <MotionWrapper
            type="slide"
            direction="left"
            delay={0.2}
            className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 font-medium text-sm"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
            {post.category}
          </MotionWrapper>
        </div>

        {/* Title */}
        <div className="mb-8">
          <MotionWrapper
            type="slide"
            direction="up"
            delay={0.3}
          >
            <Typography variant="h1" color="professional" className="leading-tight mb-4">
              <span className="block text-2xl sm:text-3xl md:text-4xl w-full text-left">{post.title}</span>
              <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-gray-600 mt-2 w-full text-left">
                {post.subtitle}
              </span>
            </Typography>
            <div className="w-16 sm:w-24 h-1 bg-blue-600 rounded-full" />
          </MotionWrapper>
        </div>

        {/* Meta Info */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4 sm:gap-6 text-gray-500 mb-8">
          <MotionWrapper
            type="slide"
            direction="left"
            delay={0.4}
            className="flex items-center space-x-2"
          >
            <div className="p-1 bg-blue-100 rounded-full">
              <User size={14} className="text-blue-600" />
            </div>
            <span className="font-medium text-sm sm:text-base">{post.author}</span>
          </MotionWrapper>

          <MotionWrapper
            type="slide"
            direction="left"
            delay={0.5}
            className="flex items-center space-x-2"
          >
            <div className="p-1 bg-blue-100 rounded-full">
              <Calendar size={14} className="text-blue-600" />
            </div>
            <span className="font-medium text-sm sm:text-base">{formatDate(post.date)}</span>
          </MotionWrapper>

          <MotionWrapper
            type="slide"
            direction="left"
            delay={0.6}
            className="flex items-center space-x-2"
          >
            <div className="p-1 bg-blue-100 rounded-full">
              <Clock size={14} className="text-blue-600" />
            </div>
            <span className="font-medium text-sm sm:text-base">{post.readTime}</span>
          </MotionWrapper>
        </div>

        {/* Tags */}
        <MotionWrapper
          type="fade"
          direction="up"
          delay={0.7}
          className="flex flex-wrap gap-2 sm:gap-3"
        >
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 sm:px-3 py-1 sm:py-2 bg-blue-50 text-blue-700 text-xs sm:text-sm font-medium rounded-full border border-blue-200 hover:bg-blue-100 transition-colors"
            >
              <Tag size={10} className="mr-1" />
              {tag}
            </span>
          ))}
        </MotionWrapper>
      </MotionWrapper>
    </div>
  )
}