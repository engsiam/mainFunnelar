"use client"

import { motion } from "framer-motion"
import { Search, BarChart, ShoppingCart, Camera, MessageSquare, TrendingUp } from "lucide-react"

export function ServicesList() {
  const services = [
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: "Amazon SEO",
      description:
        "Optimize your product listings to rank higher in Amazon's search results and drive more organic traffic.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "PPC Management",
      description: "Strategic Amazon advertising campaigns that maximize visibility and ROI while minimizing ACoS.",
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-primary" />,
      title: "Listing Optimization",
      description:
        "Compelling product titles, bullet points, descriptions, and backend keywords that convert browsers into buyers.",
    },
    {
      icon: <Camera className="h-10 w-10 text-primary" />,
      title: "Product Photography",
      description: "High-quality product images that showcase your products and help increase conversion rates.",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: "Review Management",
      description: "Strategies to generate positive reviews and effectively manage customer feedback.",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: "Brand Growth",
      description: "Comprehensive brand building strategies to establish and grow your presence on Amazon.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

