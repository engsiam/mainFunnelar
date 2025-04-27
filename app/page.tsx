import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { VisibilitySection } from "@/components/visibility-section"
import { ServicesHighlights } from "@/components/services-highlights"
import { BenefitsSection } from "@/components/benefits-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { PopupForm } from "@/components/popup-form"
import { EcommerceStrategySection } from "@/components/EcommerceStrategySection"
import { ProductSaasSection } from "@/components/ProductSaasSection"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white grid-pattern-bg">
      <Navbar />
      <HeroSection />
      <VisibilitySection />
      <EcommerceStrategySection />
      <ProductSaasSection/>
      <ServicesHighlights />
      <BenefitsSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
      <PopupForm />
    </main>
  )
}

