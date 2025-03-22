import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { AboutContent } from "@/components/about-content"
import { PopupForm } from "@/components/popup-form"

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navbar />
      <AboutHero />
      <AboutContent />
      <Footer />
      <PopupForm />
    </main>
  )
}

