"use client";

import ClientOnly from "@/components/client-only";
import { FallbackImage } from "@/components/fallback-image";
import { motion } from "framer-motion";

export function VisibilitySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ClientOnly
          fallback={
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="relative w-full h-[400px] rounded-lg overflow-hidden bg-purple-100"></div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-xl text-gray-700 mb-2">
                  Get on the First Page
                </h2>
                <h3 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6">
                  Visibility is Key to Amazon Success
                </h3>
                <div className="w-16 h-1 bg-primary mb-6"></div>
                <p className="text-lg text-gray-700 mb-6">
                Think of Amazon like a vast supermarket, similar to Walmart. Just as products on the front shelves grab attention, your Amazon product listing needs prime visibility to succeed.
                </p>
                <p className="text-lg text-gray-700">
                Our proven SEO strategies ensure your products appear where customers are looking, driving more traffic and increasing sales potential."
                </p>
              </div>
            </div>
          }
        >
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={itemVariants} className="order-2 md:order-1">
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                <FallbackImage
                  src="/placeholder.svg"
                  alt="Amazon Product Listing"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="order-1 md:order-2">
              <h2 className="text-xl text-gray-700 mb-2">
                Get on the First Page
              </h2>
              <h3 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6">
                Visibility is Key to Amazon Success
              </h3>
              <div className="w-16 h-1 bg-primary mb-6"></div>
              <p className="text-lg text-gray-700 mb-6">
              Think of Amazon like a vast supermarket, similar to Walmart. Just as products on the front shelves grab attention, your Amazon product listing needs prime visibility to succeed.
              </p>
              <p className="text-lg text-gray-700">
              Our proven SEO strategies ensure your products appear where customers are looking, driving more traffic and increasing sales potential."
              </p>
            </motion.div>
          </motion.div>
        </ClientOnly>
      </div>
    </section>
  );
}
