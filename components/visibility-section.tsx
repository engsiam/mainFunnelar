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
                {/* <h2 className="text-xl text-gray-700 mb-2">
                  Amazon Growth & Optimization
                </h2> */}
                <h3 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6">
                  VAmazon Growth & Optimization
                </h3>
                <div className="w-16 h-1 bg-primary mb-6"></div>
                <p className="text-lg text-gray-700 mb-6">
                  Unlock the full potential of your Amazon store with expert
                  product listing optimization, PPC management, and brand growth
                  strategies.
                </p>
                <p className="text-lg text-gray-700">
                  We specialize in increasing Amazon visibility and sales with
                  customized strategies for product listings, PPC campaigns, and
                  A+ content creation. Let us help you drive more traffic,
                  increase conversions, and boost profitability.
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
                  src="/Visibility-is-Key-to-Amazon-Success.webp"
                  alt="Amazon Product Listing"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="order-1 md:order-2">
              {/* <h2 className="text-xl text-gray-700 mb-2">
                Amazon Growth & Optimization
              </h2> */}
              <h3 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6">
                Amazon Growth & Optimization
              </h3>
              <div className="w-16 h-1 bg-primary mb-6"></div>
              <p className="text-lg text-gray-700 mb-6">
                Unlock the full potential of your Amazon store with expert
                product listing optimization, PPC management, and brand growth
                strategies.
              </p>
              <p className="text-lg text-gray-700">
                We specialize in increasing Amazon visibility and sales with
                customized strategies for product listings, PPC campaigns, and
                A+ content creation. Let us help you drive more traffic,
                increase conversions, and boost profitability.
              </p>
            </motion.div>
          </motion.div>
        </ClientOnly>
      </div>
    </section>
  );
}
