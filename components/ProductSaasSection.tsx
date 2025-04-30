"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Layers, Rocket, Target, Users } from "lucide-react";

export function ProductSaasSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl text-gray-700 mb-2">Product Launchpad</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Product & SaaS Marketing Expertise
            </h3>
            <div className="w-16 h-1 bg-primary mb-8"></div>
            <p className="text-lg text-gray-700 mb-2">
              Launch smarter with Funnelar the strategic system designed for
              high-impact products.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Whether you’re releasing a new product or scaling a SaaS brand,
              our Funnelar approach helps you craft effective campaigns, build
              buyer trust, and retain customers. We guide your product through
              every stage of the funnel from awareness to action and beyond.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Strategic Planning</h4>
                  <p className="text-sm text-gray-600">
                    Market research and competitive analysis
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-4">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Product Launch</h4>
                  <p className="text-sm text-gray-600">
                    Go-to-market strategies that drive adoption
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-4">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Sales Funnels</h4>
                  <p className="text-sm text-gray-600">
                    Conversion-optimized customer journeys
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">User Retention</h4>
                  <p className="text-sm text-gray-600">
                    Strategies to reduce churn and boost LTV
                  </p>
                </div>
              </div>
            </div>

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
              Talk to a Product Marketing Specialist
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/5 rounded-3xl transform rotate-3"></div>
            <div className="absolute -inset-4 bg-white rounded-3xl transform -rotate-3"></div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-primary/10 p-8">
                <div className="h-8 w-3/4 bg-primary/20 rounded-full mb-4"></div>
                <div className="h-4 w-1/2 bg-primary/20 rounded-full"></div>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="h-24 bg-gray-100 rounded-lg"></div>
                  <div className="h-24 bg-gray-100 rounded-lg"></div>
                  <div className="h-24 bg-gray-100 rounded-lg"></div>
                  <div className="h-24 bg-gray-100 rounded-lg"></div>
                </div>
                <div className="h-4 w-full bg-gray-100 rounded-full mb-3"></div>
                <div className="h-4 w-5/6 bg-gray-100 rounded-full mb-3"></div>
                <div className="h-4 w-4/6 bg-gray-100 rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
