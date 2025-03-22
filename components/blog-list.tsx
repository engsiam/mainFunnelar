"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FallbackImage } from "@/components/fallback-image"

export function BlogList() {
  const blogPosts = [
    {
      title: "10 Strategies to Boost Your Amazon Sales in 2025",
      excerpt: "Learn the latest techniques to increase your Amazon sales and stay ahead of the competition.",
      image: "/blog-post-1.svg",
      date: "March 15, 2025",
      slug: "boost-amazon-sales-2025",
    },
    {
      title: "Mastering Amazon PPC: A Comprehensive Guide",
      excerpt: "Dive deep into Amazon PPC strategies and optimize your advertising campaigns for maximum ROI.",
      image: "/blog-post-2.svg",
      date: "March 10, 2025",
      slug: "mastering-amazon-ppc",
    },
    {
      title: "The Impact of AI on Amazon Seller Strategies",
      excerpt:
        "Explore how artificial intelligence is reshaping the landscape for Amazon sellers and how to leverage it.",
      image: "/blog-post-3.svg",
      date: "March 5, 2025",
      slug: "ai-impact-amazon-sellers",
    },
    // Add more blog posts as needed
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
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48 w-full">
                  <FallbackImage
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Button variant="link" className="p-0 h-auto font-semibold text-primary">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

