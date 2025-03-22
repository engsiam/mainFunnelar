import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PopupForm } from "@/components/popup-form"
import { BlogPost } from "@/components/blog-post"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navbar />
      <BlogPost slug={params.slug} />
      <Footer />
      <PopupForm />
    </main>
  )
}

