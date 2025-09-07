'use client'

import { BlogPost } from '@/lib/posts'
import ContentRenderer from './ContentRenderer'
import Card from '@/components/ui/Card'
import MotionWrapper from '@/components/MotionWrapper'

interface ArticleContentProps {
  post: BlogPost
}

export default function ArticleContent({ post }: ArticleContentProps) {
  return (
    <MotionWrapper
      type="fade"
      direction="up"
      duration={0.8}
      delay={0.2}
    >
      <Card variant="professional" padding="lg" className="relative">
        <div className="prose prose-neutral prose-sm sm:prose-base max-w-none">
          <ContentRenderer content={post.content} />
        </div>
      </Card>
    </MotionWrapper>
  )
}