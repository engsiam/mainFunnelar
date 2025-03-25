import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FaqHero } from "@/components/faq-hero"
import { FaqContent } from "@/components/faq-content"
import { PopupForm } from "@/components/popup-form"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Funnelar FAQ | Answers to Your Amazon Selling Questions",
  description:
    "Find answers to common questions about Funnelar's Amazon marketing services. Learn about PPC, listing optimization, account management, and more.",
};


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

