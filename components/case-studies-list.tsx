"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FallbackImage } from "@/components/fallback-image"
import Link from "next/link"

export function CaseStudiesList() {
  const caseStudies = [
    {
      title: "Health & Wellness Brand",
      category: "Supplements",
      description: "Increased sales by 215% in 6 months through strategic PPC campaigns and listing optimization.",
      metrics: [
        { label: "Sales Growth", value: "215%" },
        { label: "ACoS Reduction", value: "32%" },
        { label: "Organic Ranking", value: "Top 5" },
      ],
      image: "/case-study-1.svg",
      slug: "health-wellness-brand",
    },
    {
      title: "Kitchen Gadget Startup",
      category: "Home & Kitchen",
      description: "Launched a new product that reached #1 Best Seller status in its category within 3 months.",
      metrics: [
        { label: "Category Rank", value: "#1" },
        { label: "Monthly Sales", value: "$125K" },
        { label: "Review Rate", value: "8.5%" },
      ],
      image: "/case-study-2.svg",
      slug: "kitchen-gadget-startup",
    },
    {
      title: "Beauty Brand Expansion",
      category: "Beauty & Personal Care",
      description: "Scaled from 2 to 12 products while maintaining profitability and brand consistency.",
      metrics: [
        { label: "Product Growth", value: "500%" },
        { label: "Revenue Growth", value: "380%" },
        { label: "Profit Margin", value: "42%" },
      ],
      image: "/case-study-3.svg",
      slug: "beauty-brand-expansion",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
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
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 w-full">
                <FallbackImage
                  src={study.image}
                  alt={study.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
                  {study.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{study.title}</h3>
                <p className="text-gray-600 mb-6">{study.description}</p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-primary font-bold text-xl">{metric.value}</div>
                      <div className="text-gray-500 text-sm">{metric.label}</div>
                    </div>
                  ))}
                </div>
                <Link href={`/case-studies/${study.slug}`}>
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                    Read Case Study
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

