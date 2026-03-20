import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import PlayersSection from '@/components/PlayersSection'
import FeaturesSection from '@/components/FeaturesSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <Header />
      <HeroSection />
      <PlayersSection />
      <FeaturesSection />
      <Footer />
    </main>
  )
}
