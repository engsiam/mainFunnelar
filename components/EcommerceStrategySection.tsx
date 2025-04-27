"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export function EcommerceStrategySection() {
  return (
    <section className="py-20 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            E-Commerce Marketing Strategy
          </h2>
          <p className="text-xl text-gray-700">
            Comprehensive marketing services designed to grow your online store
            and customer base.
          </p>
        </motion.div> */}

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <ShoppingCart className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-3">Store Optimization</h3>
            <p className="text-gray-700">
              Optimize your online store for maximum conversions and improved
              customer experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <BarChart2 className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-3">Analytics & Insights</h3>
            <p className="text-gray-700">
              Data-driven strategies based on customer behavior and market
              trends.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <Users className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-3">Customer Retention</h3>
            <p className="text-gray-700">
              Build loyalty programs and engagement strategies to keep customers
              coming back.
            </p>
          </motion.div>
        </div> */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gray-100 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6">
                E-Commerce Marketing Strategy
              </h3>
              <div className="w-16 h-1 bg-primary mb-6"></div>
              <p className="text-gray-700 mb-6">
                Comprehensive marketing services designed to grow your online
                store and customer base.
              </p>
              <p className="text-gray-700 mb-6">
                Whether you're on Shopify, WooCommerce, or any other platform,
                we provide tailored e-commerce marketing strategies to optimize
                your product sales, customer engagement, and brand recognition.
              </p>

              <Button
                size="lg"
                className="bg hover:bg-secondary text-white rounded-lg px-8 py-6 text-lg"
                onClick={() => {
                  const popupButton = document.querySelector(
                    ".fixed.bottom-4.right-4"
                  ) as HTMLButtonElement;
                  if (popupButton) popupButton.click();
                }}
              >
                Schedule a Free E-Commerce Strategy Call
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-[#cce6e6] rounded-full"></div>
                <div className="absolute inset-4 bg-[#a6ddd8] rounded-full flex items-center justify-center">
                  <TrendingUp className="h-24 w-24 text-white" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
