'use client'

import { useState, useEffect } from 'react'
import { Copy, Check } from 'lucide-react'
import { createHighlighter } from 'shiki'

interface CodeBlockProps {
  code: string
  language: string
  title?: string
  showLineNumbers?: boolean
}

const CodeBlock = ({ code, language, title, showLineNumbers = false }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false)
  const [highlightedCode, setHighlightedCode] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const highlightCode = async () => {
      try {
        const highlighter = await createHighlighter({
          themes: ['github-dark'],
          langs: ['javascript', 'typescript', 'cpp', 'python', 'glsl', 'hlsl', 'css', 'html', 'xml', 'json', 'bash']
        })
        
        const normalizedLanguage = getNormalizedLanguage(language)
        const result = highlighter.codeToHtml(code, {
          lang: normalizedLanguage,
          theme: 'github-dark'
        })
        
        setHighlightedCode(result)
      } catch (error) {
        console.error('代码高亮失败:', error)
        // 失败时使用简单转义
        const escapedCode = code
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
        setHighlightedCode(`<pre><code>${escapedCode}</code></pre>`)
      } finally {
        setIsLoading(false)
      }
    }

    highlightCode()
  }, [code, language])

  const getNormalizedLanguage = (lang: string): string => {
    const langMap: { [key: string]: string } = {
      'javascript': 'javascript',
      'js': 'javascript',
      'typescript': 'typescript',
      'ts': 'typescript',
      'jsx': 'javascript',
      'tsx': 'typescript',
      'cpp': 'cpp',
      'c++': 'cpp',
      'c': 'cpp',
      'cc': 'cpp',
      'h': 'cpp',
      'hpp': 'cpp',
      'python': 'python',
      'py': 'python',
      'glsl': 'glsl',
      'vert': 'glsl',
      'frag': 'glsl',
      'geom': 'glsl',
      'hlsl': 'hlsl',
      'fx': 'hlsl',
      'fxc': 'hlsl',
      'css': 'css',
      'scss': 'css',
      'sass': 'css',
      'html': 'html',
      'xml': 'xml',
      'json': 'json',
      'bash': 'bash',
      'shell': 'bash',
      'sh': 'bash',
      'sql': 'sql',
      'java': 'java',
      'rust': 'rust',
      'go': 'go',
      'php': 'php',
      'ruby': 'ruby',
      'yaml': 'yaml',
      'yml': 'yaml',
      'toml': 'toml',
      'markdown': 'markdown',
      'md': 'markdown'
    }
    return langMap[lang.toLowerCase()] || 'plaintext'
  }

  const getLanguageLabel = (lang: string) => {
    const labels: { [key: string]: string } = {
      'javascript': 'JavaScript',
      'typescript': 'TypeScript',
      'jsx': 'JSX',
      'tsx': 'TSX',
      'css': 'CSS',
      'scss': 'SCSS',
      'json': 'JSON',
      'bash': 'Bash',
      'cpp': 'C++',
      'c': 'C',
      'csharp': 'C#',
      'python': 'Python',
      'java': 'Java',
      'glsl': 'GLSL',
      'hlsl': 'HLSL',
      'rust': 'Rust',
      'go': 'Go',
      'php': 'PHP',
      'sql': 'SQL',
      'yaml': 'YAML',
      'toml': 'TOML'
    }
    return labels[lang] || lang.toUpperCase()
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('复制失败:', err)
    }
  }

  if (isLoading) {
    return (
      <div className="code-block relative bg-gray-900 rounded-2xl overflow-hidden my-6">
        <div className="p-4">
          <div className="animate-pulse bg-gray-800 h-6 rounded"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="code-block relative bg-gray-900 rounded-2xl overflow-hidden my-6 group animate-fade-in-up glass-highlight glass-noise">
      <div className="code-header flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-gray-300 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-gray-700 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
          {title && (
            <span className="text-gray-300 text-sm font-medium ml-3">{title}</span>
          )}
          <span className="text-gray-400 text-xs uppercase tracking-wide ml-2 bg-gray-700 px-2 py-1 rounded">
            {getLanguageLabel(language)}
          </span>
        </div>

        <button
          onClick={copyToClipboard}
          className="flex items-center space-x-1 px-3 py-1 text-gray-300 hover:text-white transition-all duration-300 hover:bg-gray-700 rounded opacity-0 group-hover:opacity-100"
          title="复制代码"
        >
          {copied ? <Check size={16} className="text-gray-200" /> : <Copy size={16} />}
          <span className="text-xs">{copied ? '已复制' : '复制'}</span>
        </button>
      </div>

      <div className="relative">
        <div className={`p-4 overflow-x-auto ${showLineNumbers ? 'pl-16' : ''}`}>
          <div 
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
            className="shiki-code-block"
            style={{
              fontFamily: 'Fira Code, Monaco, Consolas, "Ubuntu Mono", monospace',
              lineHeight: '1.6',
              fontSize: '14px'
            }}
          />
        </div>

        {showLineNumbers && (
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gray-800 border-r border-gray-700 flex flex-col text-gray-500 text-xs pt-4">
            {code.split('\n').map((_, index) => (
              <div key={index} className="px-2 leading-6 text-right">
                {index + 1}
              </div>
            ))}
          </div>
        )}

        <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-gray-900 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  )
}

export default CodeBlock