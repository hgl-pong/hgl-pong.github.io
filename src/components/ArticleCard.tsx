import Link from 'next/link'
import { Calendar, Clock, Tag, User } from 'lucide-react'
import TechTags from './TechTags'

interface Article {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  tags: string[]
  slug: string
  author?: string
}

interface ArticleCardProps {
  article: Article
  variant?: 'default' | 'compact' | 'featured'
}

const ArticleCard = ({ article, variant = 'default' }: ArticleCardProps) => {
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'DirectX': 'bg-white/10 text-gray-200 border border-white/20',
      'PhysX': 'bg-white/10 text-gray-200 border border-white/20',
      'HLSL': 'bg-white/10 text-gray-200 border border-white/20',
      'C++': 'bg-white/10 text-gray-200 border border-white/20',
      '引擎架构': 'bg-white/10 text-gray-200 border border-white/20',
      '性能优化': 'bg-white/10 text-gray-200 border border-white/20'
    }
    return colors[category] || 'bg-white/10 text-gray-200 border border-white/20'
  }

  if (variant === 'compact') {
    return (
      <Link href={`/blog/${article.slug}`}>
        <div className="block p-4 hover:bg-white/5 transition-colors border-b border-white/10 last:border-b-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="font-medium text-white mb-1 hover:text-gray-300 transition-colors">
                {article.title}
              </h3>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span className="flex items-center space-x-1">
                  <Calendar size={14} />
                  <span>{article.date}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Clock size={14} />
                  <span>{article.readTime}</span>
                </span>
              </div>
            </div>
            <span className={`ml-4 px-2 py-1 rounded text-xs font-medium ${getCategoryColor(article.category)}`}>
              {article.category}
            </span>
          </div>
        </div>
      </Link>
    )
  }

  if (variant === 'featured') {
    return (
      <Link href={`/blog/${article.slug}`}>
        <article className="bg-gradient-to-r from-white/5 to-white/10 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10 glass-highlight glass-noise">
          <div className="mb-4">
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
              {article.category}
            </span>
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-4 hover:text-gray-300 transition-colors">
            {article.title}
          </h2>
          
          <p className="text-gray-300 mb-6 leading-relaxed">
            {article.excerpt}
          </p>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              {article.author && (
                <div className="flex items-center space-x-1">
                  <User size={16} />
                  <span>{article.author}</span>
                </div>
              )}
              <div className="flex items-center space-x-1">
                <Calendar size={16} />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock size={16} />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
          
          <TechTags tags={article.tags.slice(0, 3)} />
        </article>
      </Link>
    )
  }

  return (
    <Link href={`/blog/${article.slug}`}>
      <article className="bg-black/40 light:bg-white/70 rounded-3xl shadow-lg border border-white/10 light:border-black/10 p-6 hover:shadow-2xl transition-shadow glass-highlight glass-noise">
        <div className="mb-3">
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
            {article.category}
          </span>
        </div>

        <h2 className="text-xl font-bold text-white mb-3 hover:text-gray-300 transition-colors">
          {article.title}
        </h2>

        <p className="text-gray-300 light:text-gray-800 mb-4 leading-relaxed">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center space-x-1">
              <Calendar size={16} />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock size={16} />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <TechTags tags={article.tags.slice(0, 2)} />
          {article.tags.length > 2 && (
            <span className="text-xs text-gray-400">
              +{article.tags.length - 2}
            </span>
          )}
        </div>
      </article>
    </Link>
  )
}

export default ArticleCard