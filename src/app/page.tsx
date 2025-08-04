import Header from '@/components/Header'
import Hero from '@/components/Hero'
import LatestPosts from '@/components/LatestPosts'
import TechStack from '@/components/TechStack'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import PageTransition from '@/components/PageTransition'

export default function Home() {
  return (
    <PageTransition>
      <Header />
      <main>
        <Hero />
        <LatestPosts />
        <TechStack />
      </main>
      <Footer />
      <ScrollToTop />
    </PageTransition>
  )
}