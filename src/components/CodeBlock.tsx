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

    // Common keywords for different languages
    const keywords: { [key: string]: string[] } = {
      cpp: ['#include', 'class', 'public', 'private', 'protected', 'virtual', 'const', 'static', 'void', 'int', 'float', 'double', 'char', 'bool', 'if', 'else', 'for', 'while', 'return', 'new', 'delete', 'namespace', 'using', 'template', 'typename', 'struct'],
      javascript: ['function', 'const', 'let', 'var', 'if', 'else', 'for', 'while', 'return', 'class', 'extends', 'import', 'export', 'default', 'async', 'await', 'try', 'catch', 'finally', 'this'],
      typescript: ['function', 'const', 'let', 'var', 'if', 'else', 'for', 'while', 'return', 'class', 'extends', 'import', 'export', 'default', 'async', 'await', 'try', 'catch', 'finally', 'interface', 'type', 'enum', 'this'],
      python: ['def', 'class', 'if', 'else', 'elif', 'for', 'while', 'return', 'import', 'from', 'as', 'try', 'except', 'finally', 'with', 'lambda', 'yield', 'self'],
      glsl: ['attribute', 'uniform', 'varying', 'vec2', 'vec3', 'vec4', 'mat2', 'mat3', 'mat4', 'sampler2D', 'float', 'int', 'bool', 'void', 'if', 'else', 'for', 'while', 'return'],
      hlsl: [
        'cbuffer', 'StructuredBuffer', 'RWStructuredBuffer', 'Texture2D', 'Texture2DArray', 'Texture3D', 'RWTexture2D', 'RWTexture3D',
        'SamplerState', 'SamplerComparisonState',
        'float', 'float2', 'float3', 'float4', 'float2x2', 'float3x3', 'float4x4', 'half', 'min16float',
        'int', 'int2', 'int3', 'int4', 'uint', 'uint2', 'uint3', 'uint4', 'bool', 'void', 'struct',
        'if', 'else', 'for', 'while', 'return',
        // semantics
        'SV_Position', 'SV_Target', 'SV_Target0', 'SV_Target1', 'SV_VertexID', 'SV_InstanceID', 'SV_DispatchThreadID', 'SV_GroupThreadID', 'SV_GroupID', 'SV_GroupIndex'
      ]
    }

    const normalized = (lang || '').toLowerCase()
    const aliasMap: { [key: string]: keyof typeof keywords } = {
      js: 'javascript', jsx: 'javascript', javascript: 'javascript',
      ts: 'typescript', tsx: 'typescript', typescript: 'typescript',
      c: 'cpp', cc: 'cpp', cpp: 'cpp', 'c++': 'cpp', h: 'cpp',hpp: 'cpp',
      py: 'python', python: 'python',
      glsl: 'glsl', vert: 'glsl', frag: 'glsl', geom: 'glsl',
      hlsl: 'hlsl', fx: 'hlsl', fxc: 'hlsl'
    }
    const resolvedLang = aliasMap[normalized] || (normalized in keywords ? (normalized as keyof typeof keywords) : 'cpp')
    const langKeywords = keywords[resolvedLang] || keywords.cpp

    // 1) Strings (real quotes)
    highlighted = highlighted.replace(/"(?:[^"\\]|\\.)*"/g, '<span class="string">$&</span>')
    highlighted = highlighted.replace(/'(?:[^'\\]|\\.)*'/g, '<span class="string">$&</span>')

    // 2) Comments (// and /* */), Python uses # for comments
    highlighted = highlighted.replace(/\/\/.*$/gm, '<span class="comment">$&</span>')
    highlighted = highlighted.replace(/\/\*[\s\S]*?\*\//g, '<span class="comment">$&</span>')
    if (resolvedLang === 'python') {
      highlighted = highlighted.replace(/#.*$/gm, '<span class="comment">$&</span>')
    } else {
      // Preprocessor like #include/#define treated as builtins for C/C++/HLSL/GLSL
      highlighted = highlighted.replace(/^\s*#\s*\w+.*$/gm, '<span class="builtin">$&</span>')
    }

    // 3) Keywords (safe boundaries)
    const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')
    langKeywords.sort((a, b) => b.length - a.length).forEach(keyword => {
      const escaped = escapeRegExp(keyword)
      const regex = new RegExp(`(?<![A-Za-z0-9_])${escaped}(?![A-Za-z0-9_])`, 'g')
      highlighted = highlighted.replace(regex, `<span class=\"keyword\">${keyword}</span>`)
    })

    // Highlight numbers
    highlighted = highlighted.replace(/\b\d+\.?\d*f?\b/g, '<span class="number">$&</span>')

    // Highlight function calls
    highlighted = highlighted.replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g, '<span class="function">$1</span>(')

    // Highlight ALL_CAPS constants/macros
    highlighted = highlighted.replace(/\b[A-Z_]{2,}\b/g, '<span class="builtin">$&</span>')

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
    <div className="code-block relative bg-gray-900 rounded-2xl overflow-hidden my-6 group animate-fade-in-up glass-highlight glass-noise">
      {/* Header */}
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
              dangerouslySetInnerHTML={{ __html: highlightCode(code, language) }}
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