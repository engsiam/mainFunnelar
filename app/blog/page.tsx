import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BlogHero } from "@/components/blog-hero"
import { BlogList } from "@/components/blog-list"
import { PopupForm } from "@/components/popup-form"

export default function Blog() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navbar />
      <BlogHero />
      <BlogList />
      <Footer />
      <PopupForm />
    </main>
  )
}

