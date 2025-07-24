'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

interface CodeBlockProps {
  code: string
  language: string
  title?: string
}

const CodeBlock = ({ code, language, title }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('复制失败:', err)
    }
  }

  return (
    <div className="relative bg-gray-900 rounded-lg overflow-hidden my-6">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          {title && (
            <span className="text-gray-300 text-sm font-medium ml-3">{title}</span>
          )}
          <span className="text-gray-400 text-xs uppercase tracking-wide ml-2">
            {language}
          </span>
        </div>
        
        <button
          onClick={copyToClipboard}
          className="flex items-center space-x-1 px-2 py-1 text-gray-300 hover:text-white transition-colors"
          title="复制代码"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          <span className="text-xs">{copied ? '已复制' : '复制'}</span>
        </button>
      </div>

      {/* Code Content */}
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm text-gray-100">
          <code className={`language-${language}`}>
            {code}
          </code>
        </pre>
      </div>
    </div>
  )
}

export default CodeBlock