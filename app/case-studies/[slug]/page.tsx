import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CaseStudyDetail } from "@/components/case-study-detail"
import { PopupForm } from "@/components/popup-form"

export default function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navbar />
      <CaseStudyDetail slug={params.slug} />
      <Footer />
      <PopupForm />
    </main>
  )
}

