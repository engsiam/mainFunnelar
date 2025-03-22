"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, BarChart2, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FallbackImage } from "@/components/fallback-image"

interface CaseStudyData {
  title: string
  category: string
  description: string
  challenge: string
  solution: string
  results: string
  metrics: {
    label: string
    value: string
  }[]
  testimonial?: {
    quote: string
    author: string
    position: string
  }
  image: string
}

export function CaseStudyDetail({ slug }: { slug: string }) {
  const [caseStudy, setCaseStudy] = useState<CaseStudyData | null>(null)

  useEffect(() => {
    // In a real application, you would fetch the case study data from an API
    // For this example, we'll use mock data based on the slug
    const caseStudies = {
      "health-wellness-brand": {
        title: "Health & Wellness Brand",
        category: "Supplements",
        description: "Increased sales by 215% in 6 months through strategic PPC campaigns and listing optimization.",
        challenge:
          "This health and wellness brand was struggling with low visibility on Amazon despite having high-quality supplements. Their conversion rate was decent, but they weren't getting enough traffic to their listings. Additionally, their advertising campaigns were inefficient, resulting in a high ACoS (Advertising Cost of Sale).",
        solution:
          "We implemented a comprehensive strategy that included:\n\n1. Complete listing optimization with enhanced content, better keywords, and improved images\n2. Restructured PPC campaigns with a focus on high-converting keywords\n3. Implemented negative keywords to reduce wasted ad spend\n4. Created a brand story that resonated with health-conscious consumers\n5. Developed a review generation strategy to increase social proof",
        results:
          "Within 6 months, the brand saw remarkable improvements across all key metrics. Sales increased by 215%, while their ACoS decreased by 32%. Their organic ranking for main keywords improved to the top 5 positions, reducing their dependence on paid advertising. The brand was able to expand their product line with the increased revenue.",
        metrics: [
          { label: "Sales Growth", value: "215%" },
          { label: "ACoS Reduction", value: "32%" },
          { label: "Organic Ranking", value: "Top 5" },
          { label: "Conversion Rate", value: "18.5%" },
        ],
        testimonial: {
          quote:
            "The team at Funnelar transformed our Amazon business. Their strategic approach to both organic and paid optimization delivered results beyond our expectations.",
          author: "Sarah Johnson",
          position: "Marketing Director, Health Essentials",
        },
        image: "/case-study-1.jpg",
      },
      "kitchen-gadget-startup": {
        title: "Kitchen Gadget Startup",
        category: "Home & Kitchen",
        description: "Launched a new product that reached #1 Best Seller status in its category within 3 months.",
        challenge:
          "This kitchen gadget startup was launching their first product on Amazon in a highly competitive category. They had no reviews, no sales history, and limited brand recognition. They needed a strategy to stand out from established competitors and gain traction quickly.",
        solution:
          "We developed a comprehensive launch strategy that included:\n\n1. Competitive analysis to identify gaps in the market\n2. Keyword-optimized listing with professional photography and infographics\n3. Strategic pricing to encourage initial sales\n4. Targeted PPC campaigns focusing on high-intent keywords\n5. Early reviewer program implementation\n6. Social media promotion to drive external traffic",
        results:
          "The product launch exceeded all expectations. Within 3 months, the product achieved #1 Best Seller status in its category. Monthly sales reached $125K, and the product maintained an exceptional review rate of 8.5%, well above the Amazon average of 1-2%. The success of this launch provided the capital and proof of concept needed for the startup to develop additional products.",
        metrics: [
          { label: "Category Rank", value: "#1" },
          { label: "Monthly Sales", value: "$125K" },
          { label: "Review Rate", value: "8.5%" },
          { label: "Conversion Rate", value: "24.3%" },
        ],
        testimonial: {
          quote:
            "As a startup, we had one shot to make our product successful. Funnelar's expertise in Amazon product launches was invaluable. They helped us achieve results we didn't think were possible for a new brand.",
          author: "Michael Chen",
          position: "Founder, KitchenInnovate",
        },
        image: "/case-study-2.jpg",
      },
      "beauty-brand-expansion": {
        title: "Beauty Brand Expansion",
        category: "Beauty & Personal Care",
        description: "Scaled from 2 to 12 products while maintaining profitability and brand consistency.",
        challenge:
          "This established beauty brand had two successful products on Amazon but struggled with expanding their product line. Previous attempts to launch new products resulted in cannibalization of existing product sales and inconsistent brand messaging. They needed a strategy to grow their product line while maintaining profitability and brand integrity.",
        solution:
          "We implemented a strategic expansion plan that included:\n\n1. Market research to identify complementary product opportunities\n2. Development of a consistent brand voice and visual identity across all listings\n3. Cross-promotion strategy between products\n4. Staggered launch schedule to maximize impact\n5. Portfolio-based PPC strategy to efficiently allocate budget across products\n6. Brand Store optimization to showcase the expanded product line",
        results:
          "Over a 12-month period, the brand successfully expanded from 2 to 12 products. Revenue grew by 380%, significantly outpacing the increase in product count. Most importantly, the brand maintained a healthy 42% profit margin across their portfolio. The expanded product line created multiple entry points for customers, increasing overall brand recognition and customer lifetime value.",
        metrics: [
          { label: "Product Growth", value: "500%" },
          { label: "Revenue Growth", value: "380%" },
          { label: "Profit Margin", value: "42%" },
          { label: "Brand Searches", value: "+275%" },
        ],
        testimonial: {
          quote:
            "Funnelar helped us transform from a product-focused seller to a true brand on Amazon. Their strategic approach to product expansion allowed us to grow rapidly while actually increasing our profit margins.",
          author: "Jessica Williams",
          position: "CEO, Glow Essentials",
        },
        image: "/case-study-3.jpg",
      },
    }

    // Convert slug format (e.g., "health-wellness-brand" from "Health & Wellness Brand")
    const normalizedSlug = slug.toLowerCase().replace(/\s+/g, "-")

    // Try to find an exact match first
    let caseStudyData = caseStudies[slug as keyof typeof caseStudies]

    // If not found, try with the normalized slug
    if (!caseStudyData) {
      const matchingKey = Object.keys(caseStudies).find(
        (key) => key.toLowerCase().replace(/\s+/g, "-") === normalizedSlug,
      )

      if (matchingKey) {
        caseStudyData = caseStudies[matchingKey as keyof typeof caseStudies]
      }
    }

    if (caseStudyData) {
      setCaseStudy(caseStudyData)
    } else {
      // Fallback if case study not found
      setCaseStudy({
        title: "Case Study Not Found",
        category: "",
        description: "The requested case study could not be found.",
        challenge: "",
        solution: "",
        results: "",
        metrics: [],
        image: "/placeholder.svg",
      })
    }
  }, [slug])

  if (!caseStudy) {
    return (
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-64">
            <div className="animate-pulse w-12 h-12 border-4 border-primary border-t-transparent rounded-full"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <article className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/case-studies">
          <Button variant="ghost" className="mb-8 flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Case Studies
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-80 w-full">
                <FallbackImage
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
                  {caseStudy.category}
                </div>
              </div>

              <div className="p-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{caseStudy.title}</h1>
                <p className="text-lg text-gray-700 mb-8 font-medium">{caseStudy.description}</p>

                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
                    <p className="text-gray-700">{caseStudy.challenge}</p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h2>
                    <div className="text-gray-700 whitespace-pre-line">{caseStudy.solution}</div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">The Results</h2>
                    <p className="text-gray-700">{caseStudy.results}</p>
                  </div>

                  {caseStudy.testimonial && (
                    <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-primary">
                      <p className="text-gray-700 italic mb-4">"{caseStudy.testimonial.quote}"</p>
                      <p className="font-medium">{caseStudy.testimonial.author}</p>
                      <p className="text-sm text-gray-600">{caseStudy.testimonial.position}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <BarChart2 className="mr-2 h-5 w-5 text-primary" />
                Key Metrics
              </h3>

              <div className="space-y-6">
                {caseStudy.metrics.map((metric, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{metric.label}</span>
                      <span className="text-primary font-semibold">{metric.value}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${Math.min(Number.parseInt(metric.value) || 75, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                  Ready to Grow?
                </h3>
                <p className="text-gray-700 mb-4">
                  Let us help you achieve similar results for your business on Amazon.
                </p>
                <Button
                  className="w-full"
                  onClick={() => {
                    const popupButton = document.querySelector(".fixed.bottom-4.right-4") as HTMLButtonElement
                    if (popupButton) popupButton.click()
                  }}
                >
                  Get a Free Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </article>
  )
}

