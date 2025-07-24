import Header from '@/components/Header'
import Hero from '@/components/Hero'
import LatestPosts from '@/components/LatestPosts'
import TechStack from '@/components/TechStack'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LatestPosts />
        <TechStack />
      </main>
      <Footer />
    </>
  )
}