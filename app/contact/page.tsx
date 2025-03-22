import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { PopupForm } from "@/components/popup-form"

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navbar />
      <ContactHero />
      <ContactForm />
      <Footer />
      <PopupForm />
    </main>
  )
}

