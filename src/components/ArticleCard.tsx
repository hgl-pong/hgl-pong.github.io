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
      'DirectX': 'bg-blue-100 text-blue-700',
      'PhysX': 'bg-green-100 text-green-700',
      'HLSL': 'bg-yellow-100 text-yellow-700',
      'C++': 'bg-purple-100 text-purple-700',
      '引擎架构': 'bg-red-100 text-red-700',
      '性能优化': 'bg-orange-100 text-orange-700'
    }
    return colors[category] || 'bg-gray-100 text-gray-700'
  }

  if (variant === 'compact') {
    return (
      <Link href={`/blog/${article.slug}`}>
        <div className="block p-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="font-medium text-gray-900 mb-1 hover:text-primary-600 transition-colors">
                {article.title}
              </h3>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
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
        <article className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg p-8 hover:shadow-lg transition-all duration-300 border border-primary-100">
          <div className="mb-4">
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
              {article.category}
            </span>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-primary-600 transition-colors">
            {article.title}
          </h2>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            {article.excerpt}
          </p>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
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
      <article className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
        <div className="mb-3">
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
            {article.category}
          </span>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors">
          {article.title}
        </h2>

        <p className="text-gray-600 mb-4 leading-relaxed">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
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