"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FallbackImage } from "@/components/fallback-image"
import { ClientWrapper } from "@/components/client-wrapper"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Funnelar transformed our business. Their strategic approach to both organic and paid optimization delivered results beyond our expectations.",
      author: "Sarah Johnson",
      position: "Marketing Director, Health Essentials",
      image: "/testimonial-1.svg",
    },
    {
      quote:
        "As a startup, we had one shot to make our product successful. Their expertise in Amazon product launches was invaluable. They helped us achieve results we didn't think were possible.",
      author: "Michael Chen",
      position: "Founder, KitchenInnovate",
      image: "/testimonial-2.svg",
    },
    {
      quote:
        "They helped us transform from a product-focused seller to a true brand on Amazon. Their strategic approach to product expansion allowed us to grow rapidly while increasing our profit margins.",
      author: "Jessica Williams",
      position: "CEO, Glow Essentials",
      image: "/testimonial-3.svg",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with Funnelar.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <ClientWrapper
            fallback={
              <div className="bg-purple-50 rounded-lg p-8 md:p-12 shadow-lg">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 bg-purple-200"></div>
                  <div className="flex-1">
                    <div className="h-10 w-10 bg-primary/10 mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2 w-full"></div>
                    <div className="h-4 bg-gray-200 rounded mb-6 w-2/3"></div>
                    <div className="h-4 bg-gray-200 rounded mb-1 w-1/3"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            }
          >
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-purple-50 rounded-lg p-8 md:p-12 shadow-lg"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
                  <FallbackImage
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <Quote className="h-10 w-10 text-primary/30 mb-4" />
                  <p className="text-lg md:text-xl text-gray-700 italic mb-6">"{testimonials[currentIndex].quote}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonials[currentIndex].author}</p>
                    <p className="text-gray-600">{testimonials[currentIndex].position}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center mt-8 gap-4">
              <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full">
                <ChevronLeft className="h-5 w-5" />
              </Button>
              {testimonials.map((_, index) => (
                <Button
                  key={index}
                  variant={index === currentIndex ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentIndex(index)}
                  className="rounded-full w-2 h-2 p-0 min-w-8"
                >
                  <span className="sr-only">Testimonial {index + 1}</span>
                </Button>
              ))}
              <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </ClientWrapper>
        </div>
      </div>
    </section>
  )
}

