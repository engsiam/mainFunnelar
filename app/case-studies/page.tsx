import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CaseStudiesHero } from "@/components/case-studies-hero"
import { CaseStudiesList } from "@/components/case-studies-list"

export default function CaseStudies() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navbar />
      <CaseStudiesHero />
      <CaseStudiesList />
      <Footer />
    </main>
  )
}

