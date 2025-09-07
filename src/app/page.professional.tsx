'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import LatestPosts from '@/components/LatestPosts'
import TechStack from '@/components/TechStack'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import PageTransition from '@/components/PageTransition'

export default function ProfessionalHome() {
  return (
    <PageTransition mode="fade">
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-16">
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