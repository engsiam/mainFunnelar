import type React from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PopupForm } from "@/components/popup-form"

interface MainLayoutProps {
  children: React.ReactNode
  showPopup?: boolean
  className?: string
}

export function MainLayout({ children, showPopup = true, className = "" }: MainLayoutProps) {
  return (
    <main className={`min-h-screen bg-gradient-to-b from-purple-50 to-white ${className}`}>
      <Navbar />
      {children}
      <Footer />
      <PopupForm />
    </main>
  )
}
