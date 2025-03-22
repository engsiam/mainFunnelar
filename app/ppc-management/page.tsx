import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PPCHero } from "@/components/ppc-hero"
import { PPCFeatures } from "@/components/ppc-features"

export default function PPCManagement() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navbar />
      <PPCHero />
      <PPCFeatures />
      <Footer />
    </main>
  )
}

