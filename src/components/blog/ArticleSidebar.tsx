'use client'

import { BlogPost } from '@/lib/posts'
import { getRelatedPosts } from '@/lib/utils'
import Card from '@/components/ui/Card'
import Typography from '@/components/ui/Typography'
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import MotionWrapper from '@/components/MotionWrapper'

interface ArticleSidebarProps {
  post: BlogPost
  allPosts: BlogPost[]
  className?: string
}

export default function ArticleSidebar({ post, allPosts, className }: ArticleSidebarProps) {
  const relatedPosts = getRelatedPosts(post, allPosts, 3)

  return (
    <div className={className}>
      <div className="space-y-6">
        {/* Article Info */}
        <MotionWrapper
          type="fade"
          direction="up"
          duration={0.6}
          delay={0.3}
        >
          <Card variant="professional" padding="lg">
            <Typography variant="h4" color="professional" className="mb-4 text-base sm:text-lg">
              文章信息
            </Typography>
            
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-600">
                <Calendar size={14} className="mr-2 text-blue-500" />
                <span className="text-xs sm:text-sm">{post.date}</span>
              </div>
              
              <div className="flex items-center text-sm text-gray-600">
                <Clock size={14} className="mr-2 text-blue-500" />
                <span className="text-xs sm:text-sm">{post.readTime}</span>
              </div>
              
              <div className="flex items-start text-sm text-gray-600">
                <Tag size={14} className="mr-2 text-blue-500 mt-0.5" />
                <div className="flex flex-wrap gap-1">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs hover:bg-blue-100 hover:text-blue-700 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </MotionWrapper>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <MotionWrapper
            type="fade"
            direction="up"
            duration={0.6}
            delay={0.4}
          >
            <Card variant="professional" padding="lg">
              <Typography variant="h4" color="professional" className="mb-4 text-base sm:text-lg">
                相关文章
              </Typography>
              
              <div className="space-y-4">
                {relatedPosts.map((relatedPost, index) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.id}`}
                    className="block group"
                  >
                    <div className="border-l-2 border-transparent hover:border-blue-500 transition-colors pl-3">
                      <Typography
                        variant="body"
                        color="secondary"
                        className="font-medium mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors text-xs sm:text-sm"
                      >
                        {relatedPost.title}
                      </Typography>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center text-xs text-gray-500 gap-1 sm:gap-2">
                        <div className="flex items-center">
                          <Calendar size={12} className="mr-1" />
                          <span>{relatedPost.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock size={12} className="mr-1" />
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center mt-2 text-xs text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>阅读更多</span>
                        <ArrowRight size={12} className="ml-1" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </Card>
          </MotionWrapper>
        )}

        {/* Share Section */}
        <MotionWrapper
          type="fade"
          direction="up"
          duration={0.6}
          delay={0.5}
        >
          <Card variant="professional" padding="lg">
            <Typography variant="h4" color="professional" className="mb-4 text-base sm:text-lg">
              分享文章
            </Typography>
            
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => {
                  const url = window.location.href
                  navigator.clipboard.writeText(url)
                }}
                className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-xs sm:text-sm hover:bg-blue-100 transition-colors"
              >
                复制链接
              </button>
              
              <button
                onClick={() => {
                  const url = window.location.href
                  const text = post.title
                  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank')
                }}
                className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-xs sm:text-sm hover:bg-blue-100 transition-colors"
              >
                分享到 Twitter
              </button>
              
              <button
                onClick={() => {
                  const url = window.location.href
                  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')
                }}
                className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-xs sm:text-sm hover:bg-blue-100 transition-colors"
              >
                分享到 LinkedIn
              </button>
            </div>
          </Card>
        </MotionWrapper>
      </div>
    </div>
  )
}