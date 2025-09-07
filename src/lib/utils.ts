import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

export function extractHeadings(content: any[]): any[] {
  return content
    .filter(item => item.type === 'heading')
    .map(item => ({
      id: item.id,
      title: item.text,
      level: item.level
    }))
}

export function getRelatedPosts(currentPost: any, allPosts: any[], limit: number = 3): any[] {
  return allPosts
    .filter(post => post.id !== currentPost.id && post.published)
    .sort((a, b) => {
      // 优先显示相同分类的文章
      const aSameCategory = a.category === currentPost.category ? 1 : 0
      const bSameCategory = b.category === currentPost.category ? 1 : 0
      
      if (aSameCategory !== bSameCategory) {
        return bSameCategory - aSameCategory
      }
      
      // 然后按日期排序
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    .slice(0, limit)
}

export function estimateReadingTime(content: any[]): string {
  const text = content
    .filter(item => item.type === 'paragraph' || item.type === 'heading')
    .map(item => item.text || '')
    .join(' ')
  
  const wordsPerMinute = 200
  const wordCount = text.length / 5 // 假设平均每个单词5个字符
  const minutes = Math.ceil(wordCount / wordsPerMinute)
  
  return `${minutes}分钟`
}

export function getAllTags(posts: any[]): string[] {
  const tagSet = new Set<string>()
  posts.forEach(post => {
    if (post.tags && Array.isArray(post.tags)) {
      post.tags.forEach((tag: string) => tagSet.add(tag))
    }
  })
  return Array.from(tagSet).sort()
}

export function getAllCategories(posts: any[]): string[] {
  const categorySet = new Set<string>()
  posts.forEach(post => {
    if (post.category) {
      categorySet.add(post.category)
    }
  })
  return Array.from(categorySet).sort()
}