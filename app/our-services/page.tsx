import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services-hero"
import { ServicesList } from "@/components/services-list"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Funnelar - Our Services",
  description:
   "Discover our expert Amazon marketing services at Funnelar. We help businesses grow with advanced PPC campaigns, listing optimization, brand strategy, and full-service account management.",
};

export default function OurServices() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navbar />
      <ServicesHero />
      <ServicesList />
      <Footer />
    </main>
  )
}

