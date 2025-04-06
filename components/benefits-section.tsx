"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    "Boost your product rankings and appear where customers are actively searching.",
    "Craft compelling listings that convert browsers into buyers, driving more sales.",
    "Minimize ACoS (Advertising Cost of Sales) while maximizing ROI on your campaigns.",
    "Build trust and long-term relationships with your audience through targeted strategies.",
    "Stay ahead of trends with insights derived from comprehensive data analytics.",
    "Adapt seamlessly to evolving marketplace dynamics with continuous improvement.",
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-[#FC9F59] to-[#F9E0A6] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Funnelar.io for Amazon Success?</h2>
            <p className="text-lg text-gray-700 mb-8">
            Our team of Amazon specialists stays ahead of marketplace trends to ensure your business maintains a competitive edge. <strong>From Amazon SEO</strong> and <strong>PPC management</strong> to organic traffic growth and <strong>Shopify theme development</strong>,we provide tailored solutions to help you succeed.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Our Performance Metrics</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Average Sales Growth</span>
                  <span className="text-primary font-semibold">215%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Conversion Rate Improvement</span>
                  <span className="text-primary font-semibold">68%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "68%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Average ACoS Reduction</span>
                  <span className="text-primary font-semibold">32%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "32%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Client Satisfaction Rate</span>
                  <span className="text-primary font-semibold">98%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "98%" }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

