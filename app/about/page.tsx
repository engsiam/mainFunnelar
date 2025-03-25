import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { AboutContent } from "@/components/about-content"
import { PopupForm } from "@/components/popup-form"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Funnelar | Amazon Selling Experts Since 2020",
  description:
    "Learn how Funnelar has helped businesses succeed on Amazon since 2020. Our expert team specializes in PPC campaigns, listing optimization, brand strategy, and full-service account management.",
};


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

