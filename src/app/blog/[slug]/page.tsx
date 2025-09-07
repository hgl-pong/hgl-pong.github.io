import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import PageTransition from '@/components/PageTransition'
import Section from '@/components/ui/Section'
import ArticleHeader from '@/components/blog/ArticleHeader'
import ArticleContent from '@/components/blog/ArticleContent'
import ArticleNavigation from '@/components/blog/ArticleNavigation'
import TableOfContents from '@/components/blog/TableOfContents'
import ArticleSidebar from '@/components/blog/ArticleSidebar'
import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { Metadata } from 'next'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: '文章未找到',
      description: '您访问的文章不存在或已被删除。'
    }
  }

  return {
    title: `${post.title} - HGL技术博客`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.id,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)
  const allPosts = getAllPosts()

  if (!post) {
    notFound()
  }

  return (
    <PageTransition>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
        {/* Article Header */}
        <div className="min-h-[60vh] flex items-center w-full bg-gradient-to-br from-white to-gray-50">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            <ArticleHeader post={post} />
          </div>
        </div>

        {/* Article Content */}
        <Section variant="professional" padding="lg">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Content */}
              <div className="flex-1 lg:max-w-4xl">
                <ArticleContent post={post} />
              </div>

              {/* Mobile Sidebar */}
              <div className="lg:hidden w-full">
                <div className="space-y-6">
                  <TableOfContents post={post} />
                  <ArticleSidebar post={post} allPosts={allPosts} />
                </div>
              </div>

              {/* Desktop Sidebar */}
              <div className="hidden lg:block w-80">
                <div className="sticky top-24 space-y-6">
                  <TableOfContents post={post} />
                  <ArticleSidebar post={post} allPosts={allPosts} />
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Navigation */}
        <Section variant="professional" padding="lg">
          <div className="max-w-4xl mx-auto">
            <ArticleNavigation post={post} />
          </div>
        </Section>
      </main>
      <Footer />
      <BackToTop />
    </PageTransition>
  )
}