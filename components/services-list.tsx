"use client"

import { motion } from "framer-motion"
import { Search, BarChart, ShoppingCart, Camera, MessageSquare, TrendingUp, TriangleRight, Code } from "lucide-react"

export function ServicesList() {
  const services = [
    {
      icon: <Search className="h-12 w-12 text-primary mb-4" />,
      title: "Amazon SEO",
      description:
        "Optimize your product listings to rank higher in Amazon’s search results, driving more organic traffic and increasing visibility",
      link: "/our-services",
    },
    {
      icon: <BarChart className="h-12 w-12 text-primary mb-4" />,
      title: "PPC Management",
      description:
        "Design and optimize high-performance advertising campaigns that boost visibility, drive conversions, and minimize ACoS (Advertising Cost of Sales)",
      link: "/ppc-management",
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-primary mb-4" />,
      title: "Listing Optimization",
      description:
        "Craft compelling product titles, bullet points, descriptions, and backend keywords to improve listing quality and increase conversion rates  ",
      link: "/our-services",
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-primary mb-4" />,
      title: "Brand Growth",
      description:
        "Create high-quality, professional-grade images that showcase your products effectively, boosting engagement and conversion rates",
      link: "/our-services",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: "Review Management",
      description: "Implement strategies to generate authentic positive reviews and manage customer feedback, enhancing your product credibility and sales potential.",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: "Brand Growth",
      description: "Develop comprehensive brand-building strategies to strengthen your presence on Amazon, build trust, and grow long-term customer loyalty.",
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Shopify Theme Development",
      description: "Design and develop custom Shopify themes tailored to your brand identity, ensuring a seamless user experience and maximizing conversions.",
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

