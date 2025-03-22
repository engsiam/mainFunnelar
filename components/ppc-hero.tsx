"use client"

import { motion } from "framer-motion"
import { WaveBackground } from "@/components/wave-background"
import { Button } from "@/components/ui/button"
import { FallbackImage } from "@/components/fallback-image"

export function PPCHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FC9F59] to-[#F9E0A6] py-20">
      <WaveBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Amazon PPC Management</h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Strategic advertising campaigns that maximize visibility and ROI while minimizing ACoS
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg">
              Get Started Today
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg">
              <FallbackImage
                src="/ppc-dashboard.svg"
                alt="Amazon PPC Dashboard"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

