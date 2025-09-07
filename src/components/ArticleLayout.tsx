import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import dynamic from 'next/dynamic';
const TableOfContents = dynamic(() => import('./TableOfContents'), { 
  ssr: false,
  loading: () => <div className="w-80 h-8 bg-gray-700 rounded animate-pulse"></div>
});
import { Calendar, Clock, Tag, ArrowLeft, User } from 'lucide-react'
import Link from 'next/link'

type ArticleLayoutProps = {
  title: string
  date: string
  readTime: string
  category: string
  tags: string[]
  headings: { id: string; title: string; level: number }[]
  children: ReactNode
  prevArticle?: { title: string; href: string }
  nextArticle?: { title: string; href: string }
}

export default function ArticleLayout({
  title,
  date,
  readTime,
  category,
  tags,
  headings,
  children,
  prevArticle,
  nextArticle,
}: ArticleLayoutProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Article Header */}
        <section className="bg-gray-900 border-b border-gray-700 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <div className="mb-8">
              <Link 
                href="/blog" 
                className="inline-flex items-center text-gray-300 hover:text-white transition-colors group"
              >
                <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                返回博客列表
              </Link>
            </div>

            {/* Category */}
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-gray-800 rounded-full text-gray-300 font-medium text-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                {category}
              </span>
            </div>

            {/* Title */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {title}
              </h1>
              <div className="w-24 h-1 bg-blue-500 rounded-full"></div>
            </div>

            {/* Meta Info */}
            <div className="flex items-center space-x-8 text-gray-400 mb-8">
              <div className="flex items-center space-x-2">
                <div className="p-1 bg-gray-800 rounded-full">
                  <User size={14} />
                </div>
                <span className="font-medium">HGL</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-1 bg-gray-800 rounded-full">
                  <Calendar size={14} />
                </div>
                <span className="font-medium">{date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-1 bg-gray-800 rounded-full">
                  <Clock size={14} />
                </div>
                <span className="font-medium">{readTime}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-12">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-2 bg-gray-800 text-gray-300 text-sm font-medium rounded-full"
                >
                  <Tag size={12} className="mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-8">
              {/* Main Content */}
              <div className="flex-1 max-w-4xl">
                <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6">
                  {children}
                </div>
              </div>

              {/* Sidebar with Table of Contents */}
              <div className="hidden lg:block w-80">
                <div className="sticky top-24">
                  <TableOfContents headings={headings} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        {(prevArticle || nextArticle) && (
          <section className="py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6">
                <div className="flex justify-between items-center">
                  {prevArticle && (
                    <div>
                      <Link 
                        href={prevArticle.href} 
                        className="text-gray-300 hover:text-white transition-colors group"
                      >
                        <span className="group-hover:-translate-x-1 transition-transform inline-block">←</span> 
                        上一篇：{prevArticle.title}
                      </Link>
                    </div>
                  )}
                  {nextArticle && (
                    <div>
                      <Link 
                        href={nextArticle.href} 
                        className="text-gray-300 hover:text-white transition-colors group"
                      >
                        下一篇：{nextArticle.title} 
                        <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}