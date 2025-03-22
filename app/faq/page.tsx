import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FaqHero } from "@/components/faq-hero"
import { FaqContent } from "@/components/faq-content"
import { PopupForm } from "@/components/popup-form"

export default function FAQ() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navbar />
      <FaqHero />
      <FaqContent />
      <Footer />
      <PopupForm />
    </main>
  )
}

