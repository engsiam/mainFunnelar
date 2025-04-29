"use client";

import { ClientWrapper } from "@/components/client-wrapper";
import { FallbackImage } from "@/components/fallback-image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Funnelar.io’s Amazon strategies helped us boost our sales by 40% within three months. The team knows how to build a funnel that actually converts.",
      author: "Sarah Johnson",
      position: "Marketing Director, Health Essentials",
      image: "/testimonial-1.svg",
    },
    {
      quote:
        "Thanks to Funnelar.io, our e-commerce store saw a 3x increase in conversions. Their Funnelar method is a game-changer.",
      author: "Michael Chen",
      position: "Founder, KitchenInnovate",
      image: "/testimonial-2.svg",
    },
    {
      quote:
        "Their SaaS marketing expertise and Funnelar system helped us launch with confidence. We saw traction right from day one.",
      author: "Jessica Williams",
      position: "CEO, Glow Essentials",
      image: "/testimonial-3.svg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Real success stories built with Funnelar precision.
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
                  <p className="text-lg md:text-xl text-gray-700 italic mb-6">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-gray-600">
                      {testimonials[currentIndex].position}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center mt-8 gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full"
              >
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
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </ClientWrapper>
        </div>
      </div>
    </section>
  );
}
