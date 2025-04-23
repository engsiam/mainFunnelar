"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BarChart, Search, ShoppingCart, TrendingUp } from "lucide-react";
import Link from "next/link";

export function ServicesHighlights() {
  const services = [
    {
      icon: <Search className="h-12 w-12 text-primary mb-4" />,
      title: "Amazon SEO",
      description:
        "Optimize your product listings to rank higher in Amazon’s search results, driving more organic traffic and increasing visibility",
      link: "/our-services/amazon-seo",
    },
    {
      icon: <BarChart className="h-12 w-12 text-primary mb-4" />,
      title: "PPC Management",
      description:
        "Design and optimize high-performance advertising campaigns that boost visibility, drive conversions, and minimize ACoS (Advertising Cost of Sales)",
      link: "/our-services/ppc-managementt",
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-primary mb-4" />,
      title: "Listing Optimization",
      description:
        "Craft compelling product titles, bullet points, descriptions, and backend keywords to improve listing quality and increase conversion rates  ",
      link: "/our-services/listing-optimization",
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-primary mb-4" />,
      title: "Brand Growth",
      description:
        "Create high-quality, professional-grade images that showcase your products effectively, boosting engagement and conversion rates",
      link: "/our-services/brand-growth",
    },
  ];

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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Boost Amazon Sales with Expert Marketing
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Drive sales & visibility on Amazon w/ SEO, PPC, listing optimization
            & brand growth. Maximize ROI today!
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
  );
}
