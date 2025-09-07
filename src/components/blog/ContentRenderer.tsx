'use client'

import { ContentBlock } from '@/lib/posts'
import CodeBlock from '@/components/CodeBlock'
import Typography from '@/components/ui/Typography'
import { cn } from '@/lib/utils'

interface ContentRendererProps {
  content: ContentBlock[]
  className?: string
}

export default function ContentRenderer({ content, className }: ContentRendererProps) {
  const renderContentBlock = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case 'heading':
        const HeadingTag = `h${block.level}` as keyof JSX.IntrinsicElements
        return (
          <HeadingTag
            key={index}
            id={block.id}
            className={cn(
              'scroll-mt-20',
              block.level === 2 && 'text-2xl font-bold mt-8 mb-4 text-gray-900',
              block.level === 3 && 'text-xl font-semibold mt-6 mb-3 text-gray-800',
              block.level === 4 && 'text-lg font-medium mt-4 mb-2 text-gray-700',
              block.level === 5 && 'text-base font-medium mt-3 mb-2 text-gray-600',
              block.level === 6 && 'text-sm font-medium mt-2 mb-1 text-gray-500'
            )}
          >
            {block.text}
          </HeadingTag>
        )

      case 'paragraph':
        return (
          <p
            key={index}
            className={cn(
              'text-gray-700 leading-relaxed mb-4',
              'prose prose-neutral max-w-none'
            )}
          >
            {block.text}
          </p>
        )

      case 'list':
        const ListTag = block.ordered ? 'ol' : 'ul'
        return (
          <ListTag
            key={index}
            className={cn(
              'mb-4 space-y-2',
              block.ordered ? 'list-decimal list-inside' : 'list-disc list-inside'
            )}
          >
            {block.items?.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className={cn(
                  'text-gray-700 leading-relaxed',
                  'prose prose-neutral max-w-none'
                )}
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ))}
          </ListTag>
        )

      case 'code':
        return (
          <div key={index} className="mb-6">
            <CodeBlock
              language={block.language || 'text'}
              code={block.code || ''}
            />
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className={cn('prose prose-neutral max-w-none', className)}>
      {content.map(renderContentBlock)}
    </div>
  )
}