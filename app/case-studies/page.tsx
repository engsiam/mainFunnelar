import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CaseStudiesHero } from "@/components/case-studies-hero"
import { CaseStudiesList } from "@/components/case-studies-list"
import { Metadata } from "next";
import { PopupForm } from "@/components/popup-form";

export const metadata: Metadata = {
  title: "Funnelar Case Studies | Proven Amazon Growth Strategies",
  description:
    "See how Funnelar has helped businesses grow on Amazon. Our case studies showcase successful PPC campaigns, listing optimizations, and brand strategies.",
};


export default function CaseStudies() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navbar />
      <CaseStudiesHero />
      <CaseStudiesList />
      <Footer />
      <PopupForm />
    </main>
  )
}

