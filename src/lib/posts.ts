import blogPosts from '@/data/blog-posts.json'

export interface BlogPost {
  id: string
  title: string
  subtitle: string
  category: string
  author: string
  date: string
  readTime: string
  excerpt: string
  tags: string[]
  featured: boolean
  published: boolean
  content: ContentBlock[]
  navigation?: {
    prev?: {
      title: string
      slug: string
    }
    next?: {
      title: string
      slug: string
    }
  }
}

export interface ContentBlock {
  type: 'heading' | 'paragraph' | 'list' | 'code'
  level?: number
  id?: string
  text?: string
  items?: string[]
  ordered?: boolean
  language?: string
  code?: string
}

export function getAllPosts(): BlogPost[] {
  return blogPosts.posts.filter(post => post.published) as BlogPost[]
}

export function getPostBySlug(slug: string): BlogPost | null {
  const post = blogPosts.posts.find(post => post.id === slug && post.published)
  return (post as BlogPost) || null
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.posts.filter(post => post.published && post.featured) as BlogPost[]
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.posts.filter(post => post.published && post.category === category) as BlogPost[]
}

export function getPostsByTag(tag: string): BlogPost[] {
  return blogPosts.posts.filter(post => 
    post.published && post.tags && post.tags.includes(tag)
  ) as BlogPost[]
}

export function searchPosts(query: string): BlogPost[] {
  const lowercaseQuery = query.toLowerCase()
  return blogPosts.posts.filter(post => 
    post.published && (
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.subtitle.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    )
  ) as BlogPost[]
}

export function getAllCategories(): string[] {
  const categorySet = new Set<string>()
  blogPosts.posts.forEach(post => {
    if (post.published && post.category) {
      categorySet.add(post.category)
    }
  })
  return Array.from(categorySet).sort()
}