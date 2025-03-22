"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { WaveBackground } from "@/components/wave-background"

export function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-200 to-purple-100 relative overflow-hidden">
      <WaveBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Grow Your Amazon Business?</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Join hundreds of successful brands who have transformed their Amazon presence with our proven strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg"
              onClick={() => {
                const popupButton = document.querySelector(".fixed.bottom-4.right-4") as HTMLButtonElement
                if (popupButton) popupButton.click()
              }}
            >
              Get a Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 text-lg border-gray-700 text-gray-700 hover:bg-gray-100"
            >
              View Case Studies
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">215%</p>
              <p className="text-gray-700">Avg. Sales Growth</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">100+</p>
              <p className="text-gray-700">Clients Served</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">32%</p>
              <p className="text-gray-700">Avg. ACoS Reduction</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">98%</p>
              <p className="text-gray-700">Client Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

