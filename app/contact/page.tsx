import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { PopupForm } from "@/components/popup-form"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Funnelar | Get in Touch with Our Amazon Experts",
  description:
    "Have questions about Amazon marketing? Contact Funnelar today! Our team is ready to help with PPC, listing optimization, and account management solutions.",
};


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

