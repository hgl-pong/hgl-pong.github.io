'use client'

import { ReactNode } from 'react'
import CodeBlock from './CodeBlock'
import InlineCode from './InlineCode'

interface MarkdownRendererProps {
  content: string
  className?: string
}

// 简单的Markdown解析器（用于演示）
const MarkdownRenderer = ({ content, className = '' }: MarkdownRendererProps) => {
  const parseMarkdown = (text: string): ReactNode[] => {
    const lines = text.split('\n')
    const elements: ReactNode[] = []
    let i = 0

    while (i < lines.length) {
      const line = lines[i]

      // 代码块处理
      if (line.startsWith('```')) {
        const language = line.slice(3).trim() || 'text'
        const codeLines: string[] = []
        i++

        while (i < lines.length && !lines[i].startsWith('```')) {
          codeLines.push(lines[i])
          i++
        }

        elements.push(
          <CodeBlock
            key={elements.length}
            code={codeLines.join('\n')}
            language={language}
            showLineNumbers={codeLines.length > 5}
          />
        )
        i++
        continue
      }

      // 标题处理
      if (line.startsWith('#')) {
        const level = line.match(/^#+/)?.[0].length || 1
        const text = line.replace(/^#+\s*/, '')
        const HeadingTag = `h${Math.min(level, 6)}` as keyof JSX.IntrinsicElements

        elements.push(
          <HeadingTag
            key={elements.length}
            className={`
              font-bold text-gray-900 mb-4 mt-8
              ${level === 1 ? 'text-3xl' : ''}
              ${level === 2 ? 'text-2xl' : ''}
              ${level === 3 ? 'text-xl' : ''}
              ${level >= 4 ? 'text-lg' : ''}
            `}
          >
            {parseInlineElements(text)}
          </HeadingTag>
        )
      }
      // 段落处理
      else if (line.trim()) {
        elements.push(
          <p key={elements.length} className="mb-4 leading-7 text-gray-700">
            {parseInlineElements(line)}
          </p>
        )
      }
      // 空行
      else {
        elements.push(<br key={elements.length} />)
      }

      i++
    }

    return elements
  }

  // 解析内联元素（粗体、斜体、内联代码等）
  const parseInlineElements = (text: string): ReactNode[] => {
    const elements: ReactNode[] = []
    let currentText = text

    // 内联代码处理
    const codeRegex = /`([^`]+)`/g
    let lastIndex = 0
    let match

    while ((match = codeRegex.exec(currentText)) !== null) {
      // 添加代码前的文本
      if (match.index > lastIndex) {
        const beforeText = currentText.slice(lastIndex, match.index)
        if (beforeText) {
          elements.push(beforeText)
        }
      }

      // 添加内联代码
      elements.push(
        <InlineCode key={`code-${match.index}`}>
          {match[1]}
        </InlineCode>
      )

      lastIndex = match.index + match[0].length
    }

    // 添加剩余文本
    if (lastIndex < currentText.length) {
      elements.push(currentText.slice(lastIndex))
    }

    return elements.length > 0 ? elements : [text]
  }

  return (
    <div className={`prose max-w-none ${className}`}>
      {parseMarkdown(content)}
    </div>
  )
}

export default MarkdownRenderer
