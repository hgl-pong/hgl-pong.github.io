'use client'

import { BlogPost } from '@/lib/posts'
import Card from '@/components/ui/Card'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import MotionWrapper from '@/components/MotionWrapper'

interface ArticleNavigationProps {
  post: BlogPost
}

export default function ArticleNavigation({ post }: ArticleNavigationProps) {
  const { navigation } = post

  if (!navigation || (!navigation.prev && !navigation.next)) {
    return null
  }

  return (
    <MotionWrapper
      type="fade"
      direction="up"
      duration={0.6}
      delay={0.8}
    >
      <Card variant="professional" padding="lg" className="hover:shadow-lg transition-shadow">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          {/* Previous Post */}
          {navigation.prev && (
            <Link
              href={`/blog/${navigation.prev.slug}`}
              className="group flex items-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              <div className="flex items-center">
                <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <div className="text-xs text-gray-500 mb-1">上一篇</div>
                  <div className="font-medium text-sm sm:text-base group-hover:text-blue-600 transition-colors">
                    {navigation.prev.title}
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Spacer */}
          <div className="flex-1" />

          {/* Next Post */}
          {navigation.next && (
            <Link
              href={`/blog/${navigation.next.slug}`}
              className="group flex items-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              <div className="flex items-center">
                <div className="text-right">
                  <div className="text-xs text-gray-500 mb-1">下一篇</div>
                  <div className="font-medium text-sm sm:text-base group-hover:text-blue-600 transition-colors">
                    {navigation.next.title}
                  </div>
                </div>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          )}
        </div>
      </Card>
    </MotionWrapper>
  )
}