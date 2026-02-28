import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { FeaturesOverview } from "@/components/features-overview"
import { DeepResearch } from "@/components/deep-research"
import { PaperBreaker } from "@/components/paper-breaker"
import { PathFinder } from "@/components/pathfinder"
import { WhySection } from "@/components/why-section"
import { Footer } from "@/components/footer"

export const dynamic = 'force-dynamic'

export default async function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturesOverview />
      <DeepResearch />
      <PaperBreaker />
      <PathFinder />
      <WhySection />
      <Footer />
    </main>
  )
}
