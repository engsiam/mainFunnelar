"use client"

import { motion } from "framer-motion"
import { WaveBackground } from "@/components/wave-background"

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-200 to-purple-100 py-20">
      <WaveBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Funnelar</h1>
          <p className="text-lg md:text-xl text-gray-700">Empowering businesses to thrive in the Amazon marketplace</p>
        </motion.div>
      </div>
    </section>
  )
}

