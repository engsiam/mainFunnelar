"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { WaveBackground } from "@/components/wave-background"
import { FallbackImage } from "@/components/fallback-image"
import ClientOnly from "@/components/client-only"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-300 to-purple-100 py-20 md:py-32">
      <WaveBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ClientOnly
            fallback={
              <div className="max-w-xl">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  100s of Millions
                  <br />
                  In Amazon Sales
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-8">
                  Delivering stunning brands, relatable products, & results oriented marketing strategy & execution
                </p>
                <div className="h-14 w-48 bg-primary rounded-full"></div>
              </div>
            }
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-xl"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                100s of Millions
                <br />
                In Amazon Sales
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Delivering stunning brands, relatable products, & results oriented marketing strategy & execution
              </p>
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
            </motion.div>
          </ClientOnly>

          <ClientOnly
            fallback={
              <div className="hidden md:block">
                <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-2xl bg-purple-100"></div>
              </div>
            }
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden md:block"
            >
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-2xl">
                <FallbackImage
                  src="/placeholder.svg"
                  alt="Amazon Marketing Dashboard"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-transparent"></div>
              </div>
            </motion.div>
          </ClientOnly>
        </div>
      </div>
    </section>
  )
}

