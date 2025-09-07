'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

interface CodeBlockProps {
  code: string
  language: string
  title?: string
  showLineNumbers?: boolean
}

const CodeBlock = ({ code, language, title, showLineNumbers = false }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false)

  // Simple syntax highlighting function
  const highlightCode = (code: string, lang: string): string => {
    // Escape HTML first
    let highlighted = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')

    // Strings
    highlighted = highlighted.replace(/"(?:[^"\\]|\\.)*"/g, '<span class="token string">$&</span>')
    highlighted = highlighted.replace(/'(?:[^'\\]|\\.)*'/g, '<span class="token string">$&</span>')

    // Comments (// and /* */), Python uses # for comments
    highlighted = highlighted.replace(/\/\/.*$/gm, '<span class="token comment">$&</span>')
    highlighted = highlighted.replace(/\/\*[\s\S]*?\*\//g, '<span class="token comment">$&</span>')
    if (lang.toLowerCase() === 'python') {
      highlighted = highlighted.replace(/#.*$/gm, '<span class="token comment">$&</span>')
    } else {
      // Preprocessor like #include/#define
      highlighted = highlighted.replace(/^\s*#\s*\w+.*$/gm, '<span class="token builtin">$&</span>')
    }

    // Keywords
    const keywords = ['if', 'else', 'for', 'while', 'return', 'function', 'class', 'const', 'let', 'var', 'int', 'void', 'bool', 'float', 'double', 'struct', 'public', 'private', 'protected', 'virtual', 'static', 'template', 'typename', 'using', 'namespace']
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'g')
      highlighted = highlighted.replace(regex, '<span class="token keyword">$&</span>')
    })

    // Numbers
    highlighted = highlighted.replace(/\b\d+\.?\d*f?\b/g, '<span class="token number">$&</span>')

    // Function calls
    highlighted = highlighted.replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g, '<span class="token function">$1</span>(')

    // Constants/macros
    highlighted = highlighted.replace(/\b[A-Z_]{2,}\b/g, '<span class="token builtin">$&</span>')

    return highlighted
  }

  // Get language display name
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

  const highlighted = highlightCode(code, language)

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
    <div className="code-block relative bg-gray-900 rounded-2xl overflow-hidden my-6 group animate-fade-in-up">
      {/* Header */}
      <div className="code-header flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
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

      {/* Code Content */}
      <div className="relative">
        <div className={`p-4 overflow-x-auto ${showLineNumbers ? 'pl-16' : ''}`}>
          <pre
            className="text-sm text-gray-100"
            style={{
              fontFamily: 'Fira Code, Monaco, Consolas, "Ubuntu Mono", monospace',
              lineHeight: '1.6'
            }}
          >
            <code
              className={`language-${language} block`}
              style={{
                fontFamily: 'Fira Code, Monaco, Consolas, "Ubuntu Mono", monospace',
                lineHeight: '1.6'
              }}
              dangerouslySetInnerHTML={{ __html: highlighted }}
            />
          </pre>
        </div>

        {/* Line numbers */}
        {showLineNumbers && (
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gray-800 border-r border-gray-700 flex flex-col text-gray-500 text-xs pt-4">
            {code.split('\n').map((_, index) => (
              <div key={index} className="px-2 leading-6 text-right">
                {index + 1}
              </div>
            ))}
          </div>
        )}

        {/* Gradient overlay for long code */}
        <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-gray-900 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  )
}

export default CodeBlock