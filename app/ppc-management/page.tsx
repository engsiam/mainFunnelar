import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PPCHero } from "@/components/ppc-hero"
import { PPCFeatures } from "@/components/ppc-features"
import { Metadata } from "next";
import { PopupForm } from "@/components/popup-form";

export const metadata: Metadata = {
  title: "Amazon PPC Management | Maximize Your Advertising ROI with Funnelar",
  description:
    "Boost your Amazon sales with expert PPC management from Funnelar. Our data-driven strategies include keyword research, bid management, A/B testing, and performance tracking.",
};



export default function PPCManagement() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navbar />
      <PPCHero />
      <PPCFeatures />
      <Footer />
      <PopupForm />
    </main>
  )
}

