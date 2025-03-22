"use client"

import { motion } from "framer-motion"
import { FallbackImage } from "@/components/fallback-image"

export function AboutContent() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6">
              Funnelar was founded in 2020 with a mission to help businesses navigate the complex world of Amazon
              selling. Our team of experts combines years of experience in e-commerce, digital marketing, and Amazon's
              ecosystem to deliver results-driven strategies for our clients.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We believe in a data-driven approach, constantly analyzing market trends and leveraging cutting-edge
              technologies to stay ahead of the curve. Our success is measured by the growth and success of our clients,
              and we're proud to have helped hundreds of businesses achieve their goals on Amazon.
            </p>
            <p className="text-lg text-gray-700">
              At Funnelar, we're not just consultants – we're partners in your success. We're committed to transparency,
              innovation, and delivering measurable results that drive your business forward in the competitive Amazon
              marketplace.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <FallbackImage
              src="/about-image.svg"
              alt="Funnelar Team"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

