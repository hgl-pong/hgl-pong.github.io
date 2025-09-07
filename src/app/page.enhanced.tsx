'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import LatestPosts from '@/components/LatestPosts'
import TechStack from '@/components/TechStack'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import PageTransition from '@/components/PageTransition'

export default function EnhancedHome() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        <Header />
        <main>
          <Hero />
          <LatestPosts />
          <TechStack />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </PageTransition>
  )
}