"use client"

import { motion } from "framer-motion"
import { Search, BarChart, ShoppingCart, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ServicesHighlights() {
  const services = [
    {
      icon: <Search className="h-12 w-12 text-primary mb-4" />,
      title: "Amazon SEO",
      description: "Optimize your listings to rank higher in Amazon's search results and drive more organic traffic.",
      link: "/our-services",
    },
    {
      icon: <BarChart className="h-12 w-12 text-primary mb-4" />,
      title: "PPC Management",
      description: "Strategic advertising campaigns that maximize visibility and ROI while minimizing ACoS.",
      link: "/ppc-management",
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-primary mb-4" />,
      title: "Listing Optimization",
      description: "Compelling product listings that convert browsers into buyers with strategic content and keywords.",
      link: "/our-services",
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-primary mb-4" />,
      title: "Brand Growth",
      description: "Comprehensive strategies to establish and grow your presence on Amazon's marketplace.",
      link: "/our-services",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Amazon Marketing Services</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We provide comprehensive solutions to help your business thrive on Amazon's marketplace
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link href={service.link}>
                <Button variant="outline" className="rounded-full">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

