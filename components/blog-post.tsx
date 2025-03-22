"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FallbackImage } from "@/components/fallback-image"

interface BlogPostData {
  title: string
  date: string
  content: string
  image: string
}

export function BlogPost({ slug }: { slug: string }) {
  const [post, setPost] = useState<BlogPostData | null>(null)

  useEffect(() => {
    // In a real application, you would fetch the blog post data from an API
    // For this example, we'll use mock data based on the slug
    const blogPosts = {
      "boost-amazon-sales-2025": {
        title: "10 Strategies to Boost Your Amazon Sales in 2025",
        date: "March 15, 2025",
        content: `
          <p>In the ever-evolving world of e-commerce, staying ahead of the curve is crucial for success on Amazon. As we look towards 2025, new trends and technologies are shaping the landscape of online retail. Here are ten strategies to help boost your Amazon sales and maintain a competitive edge:</p>

          <h2>1. Leverage AI for Personalized Customer Experiences</h2>
          <p>Artificial Intelligence is revolutionizing the way businesses interact with customers. Implement AI-driven chatbots and recommendation engines to provide personalized shopping experiences, increasing customer satisfaction and sales.</p>

          <h2>2. Optimize for Voice Search</h2>
          <p>With the growing popularity of smart speakers and voice assistants, optimizing your product listings for voice search is becoming increasingly important. Focus on natural language and long-tail keywords in your product descriptions.</p>

          <h2>3. Embrace Video Content</h2>
          <p>Video content is king in 2025. Incorporate high-quality product videos in your listings to showcase your items in action, providing customers with a better understanding of what they're buying.</p>

          <h2>4. Utilize Augmented Reality (AR)</h2>
          <p>AR technology allows customers to visualize products in their own space before making a purchase. Implement AR features in your product listings to reduce return rates and increase customer confidence.</p>

          <h2>5. Focus on Sustainability</h2>
          <p>Eco-conscious consumers are driving demand for sustainable products and packaging. Highlight your commitment to sustainability in your brand story and product descriptions.</p>
        `,
        image: "/blog-post-1.png",
      },
      "mastering-amazon-ppc": {
        title: "Mastering Amazon PPC: A Comprehensive Guide",
        date: "March 10, 2025",
        content: `
          <p>Amazon Pay-Per-Click (PPC) advertising is one of the most effective ways to increase visibility and drive sales for your products. This comprehensive guide will walk you through the essentials of Amazon PPC and provide advanced strategies to optimize your campaigns.</p>

          <h2>Understanding Amazon PPC Basics</h2>
          <p>Amazon PPC operates on a cost-per-click model, where you bid on keywords relevant to your products. When shoppers search for these keywords, your ads may appear in prominent positions on search results and product pages.</p>

          <h2>Campaign Structure Best Practices</h2>
          <p>A well-organized campaign structure is the foundation of successful Amazon PPC advertising. We recommend using a three-tiered approach: campaigns, ad groups, and keywords. This structure allows for better budget control and performance analysis.</p>

          <h2>Keyword Research and Selection</h2>
          <p>Effective keyword research is crucial for Amazon PPC success. Use Amazon's Search Term Report, competitor analysis, and third-party tools to identify high-performing keywords for your products.</p>

          <h2>Bid Optimization Strategies</h2>
          <p>Dynamic bid adjustment is key to maximizing your ROI. Increase bids for keywords that convert well and decrease or pause those that don't perform. Consider using automated bidding strategies for larger accounts.</p>

          <h2>Measuring and Analyzing Performance</h2>
          <p>Regular performance analysis is essential for continuous improvement. Focus on key metrics like ACoS (Advertising Cost of Sale), CTR (Click-Through Rate), and conversion rate to evaluate campaign effectiveness.</p>
        `,
        image: "/blog-post-2.png",
      },
      "ai-impact-amazon-sellers": {
        title: "The Impact of AI on Amazon Seller Strategies",
        date: "March 5, 2025",
        content: `
          <p>Artificial Intelligence (AI) is transforming the e-commerce landscape, offering Amazon sellers powerful tools to gain competitive advantages. This article explores how AI is reshaping seller strategies and how you can leverage these technologies to grow your Amazon business.</p>

          <h2>AI-Powered Pricing Optimization</h2>
          <p>Dynamic pricing algorithms can analyze competitor prices, demand patterns, and inventory levels to automatically adjust your prices for maximum profitability. These AI systems can make real-time pricing decisions that would be impossible to manage manually.</p>

          <h2>Inventory Forecasting and Management</h2>
          <p>AI-driven inventory management systems can predict demand fluctuations based on historical data, seasonal trends, and market conditions. This helps sellers maintain optimal inventory levels, reducing both stockouts and excess inventory costs.</p>

          <h2>Enhanced Customer Service</h2>
          <p>AI chatbots and virtual assistants can handle customer inquiries 24/7, providing instant responses to common questions and freeing up your time for more complex tasks. These systems continuously learn from interactions to improve their responses over time.</p>

          <h2>Automated Listing Optimization</h2>
          <p>AI tools can analyze top-performing listings in your category to recommend improvements to your titles, bullet points, descriptions, and backend keywords. Some advanced systems can even generate optimized content based on your product specifications.</p>

          <h2>Review Analysis and Management</h2>
          <p>AI-powered sentiment analysis can process customer reviews to identify common praise points and concerns. This valuable feedback can guide product improvements and help you address potential issues before they affect your seller rating.</p>
        `,
        image: "/blog-post-3.png",
      },
    }

    // Get the post data based on the slug
    const postData = blogPosts[slug as keyof typeof blogPosts]

    if (postData) {
      setPost(postData)
    } else {
      // Fallback if post not found
      setPost({
        title: "Blog Post Not Found",
        date: "",
        content: "<p>The requested blog post could not be found.</p>",
        image: "/placeholder.svg",
      })
    }
  }, [slug])

  if (!post) {
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
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <p className="text-gray-600 mb-8">{post.date}</p>
          <div className="mb-12 relative h-96">
            <FallbackImage
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover rounded-lg"
            />
          </div>
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </motion.div>
      </div>
    </article>
  )
}

