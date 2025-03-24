"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { FallbackImage } from "@/components/fallback-image"
import ClientOnly from "@/components/client-only"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="inline-block mb-4">
              <FallbackImage
                src="/logo-v2.png"
                alt="Funnelar"
                width={180}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-4">
              Delivering stunning brands, relatable products, & results oriented marketing strategy & execution
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/profile.php?id=61574046144163" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </Link>
              {/* <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </Link> */}
              <Link href="https://www.linkedin.com/company/funnelar/?viewAsMember=true" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/our-services" className="text-gray-400 hover:text-white transition-colors">
                  Amazon Marketing
                </Link>
              </li>
              <li>
                <Link href="/ppc-management" className="text-gray-400 hover:text-white transition-colors">
                  PPC Management
                </Link>
              </li>
              <li>
                <Link href="/our-services" className="text-gray-400 hover:text-white transition-colors">
                  Product Optimization
                </Link>
              </li>
              <li>
                <Link href="/our-services" className="text-gray-400 hover:text-white transition-colors">
                  Brand Strategy
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>123 Amazon Way</p>
              <p>Seattle, WA 98101</p>
              <p className="mt-4">
                <a href="mailto:info@funnelar.com" className="hover:text-white transition-colors">
                  info@funnelar.com
                </a>
              </p>
              <p>
                <a href="tel:+12065551234" className="hover:text-white transition-colors">
                  (206) 555-1234
                </a>
              </p>
            </address>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; <ClientOnly>{new Date().getFullYear()}</ClientOnly> Funnelar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

