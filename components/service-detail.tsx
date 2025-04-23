"use client";


import { FallbackImage } from "@/components/fallback-image";
import { Button } from "@/components/ui/button";
import { WaveBackground } from "@/components/wave-background";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface PricingPackage {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

interface ServiceData {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  process: {
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  packages: PricingPackage[];
  image: string;
  icon: string;
  aiImagePrompt?: string;
}

export function ServiceDetail({ slug }: { slug: string }) {
  const [service, setService] = useState<ServiceData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real application, you would fetch the service data from an API
    // For this example, we'll use mock data based on the slug
    const services = {
      "amazon-seo": {
        id: "amazon-seo",
        title: "Amazon SEO",
        description:
          "Optimize your product listings to rank higher in Amazon's search results and drive more organic traffic.",
        longDescription:
          "Amazon SEO is the process of optimizing your product listings to rank higher in Amazon's search results. Unlike traditional SEO, Amazon's A9 algorithm focuses primarily on conversion rates and sales performance. Our Amazon SEO services help you identify the most relevant keywords, optimize your product titles, bullet points, descriptions, and backend search terms to improve your organic ranking and drive more qualified traffic to your listings.",
        features: [
          "Comprehensive keyword research and analysis",
          "Product title optimization for maximum visibility",
          "Strategic bullet point creation that converts",
          "Optimized product descriptions with relevant keywords",
          "Backend search term optimization",
          "Enhanced brand content creation",
          "Regular performance tracking and adjustments",
        ],
        benefits: [
          "Increased organic visibility in Amazon search results",
          "Higher click-through rates on your product listings",
          "Improved conversion rates and sales",
          "Reduced dependency on paid advertising",
          "Better product discoverability through relevant search terms",
          "Enhanced brand presence and customer trust",
        ],
        process: [
          {
            title: "Research & Analysis",
            description:
              "We conduct thorough market research, competitor analysis, and keyword research to identify opportunities for your products.",
          },
          {
            title: "Strategy Development",
            description:
              "Based on our research, we develop a customized SEO strategy tailored to your specific products and target audience.",
          },
          {
            title: "Listing Optimization",
            description:
              "We optimize all elements of your product listings, including titles, bullet points, descriptions, and backend search terms.",
          },
          {
            title: "Implementation",
            description:
              "Our team implements all optimizations and ensures they comply with Amazon's guidelines and best practices.",
          },
          {
            title: "Monitoring & Refinement",
            description:
              "We continuously monitor your listing performance and make data-driven adjustments to improve results over time.",
          },
        ],
        packages: [
          {
            name: "Basic",
            price: "$497",
            description: "Perfect for new sellers with 1-5 products",
            features: [
              "Keyword research (up to 20 keywords)",
              "Product title optimization",
              "Basic bullet point optimization",
              "Basic description optimization",
              "Backend search term recommendations",
              "One-time optimization",
            ],
          },
          {
            name: "Standard",
            price: "$997",
            description: "Ideal for established sellers with 5-15 products",
            features: [
              "Comprehensive keyword research (up to 50 keywords)",
              "Product title optimization",
              "Advanced bullet point optimization",
              "Detailed product description optimization",
              "Backend search term optimization",
              "Basic A+ Content recommendations",
              "30-day performance review",
              "One revision round",
            ],
            isPopular: true,
          },
          {
            name: "Premium",
            price: "$1,997",
            description:
              "For serious sellers looking to dominate their category",
            features: [
              "Exhaustive keyword research (100+ keywords)",
              "Product title optimization",
              "Advanced bullet point optimization",
              "Detailed product description optimization",
              "Backend search term optimization",
              "Complete A+ Content creation",
              "Competitor analysis report",
              "90-day performance monitoring",
              "Unlimited revisions for 3 months",
              "Monthly performance calls",
            ],
          },
        ],
        faqs: [
          {
            question: "How long does it take to see results from Amazon SEO?",
            answer:
              "While some improvements can be seen within a few weeks, significant results typically take 2-3 months as Amazon's algorithm evaluates and adjusts to the optimized content and increased sales performance.",
          },
          {
            question: "How is Amazon SEO different from traditional SEO?",
            answer:
              "Amazon SEO focuses primarily on conversion metrics and sales performance, while traditional SEO emphasizes backlinks and website authority. Amazon's A9 algorithm prioritizes listings that convert browsers into buyers.",
          },
          {
            question: "Will you help with product images as part of SEO?",
            answer:
              "Yes, while product images don't directly impact keyword ranking, they significantly affect conversion rates, which indirectly improves SEO performance. We provide guidance on image optimization as part of our comprehensive service.",
          },
        ],
        image: "/amazon-seo-service.svg",
        icon: "Search",
        aiImagePrompt:
          "Amazon SEO optimization with keyword research and product listing optimization visualization",
      },
      "ppc-management": {
        id: "ppc-management",
        title: "PPC Management",
        description:
          "Strategic Amazon advertising campaigns that maximize visibility and ROI while minimizing ACoS.",
        longDescription:
          "Our Amazon PPC Management service helps you create and optimize advertising campaigns that drive targeted traffic to your products while maintaining a healthy return on investment. We focus on strategic keyword targeting, bid optimization, and campaign structure to ensure your advertising budget is spent efficiently and effectively.",
        features: [
          "Comprehensive account audit and strategy development",
          "Campaign structure optimization",
          "Strategic keyword research and targeting",
          "Negative keyword implementation",
          "Bid management and adjustment",
          "Competitor analysis and targeting",
          "Performance tracking and reporting",
          "A/B testing of ad copy",
          "Budget allocation and management",
        ],
        benefits: [
          "Increased product visibility to targeted shoppers",
          "Improved advertising cost of sale (ACoS)",
          "Higher return on ad spend (ROAS)",
          "More efficient use of advertising budget",
          "Data-driven optimization for continuous improvement",
          "Competitive advantage in crowded categories",
          "Accelerated sales velocity for new product launches",
        ],
        process: [
          {
            title: "Account Audit",
            description:
              "We conduct a thorough analysis of your existing campaigns, keywords, and performance metrics to identify opportunities and issues.",
          },
          {
            title: "Strategy Development",
            description:
              "Based on your goals and budget, we create a customized PPC strategy designed to maximize your return on investment.",
          },
          {
            title: "Campaign Setup",
            description:
              "We build optimized campaign structures with strategic keyword targeting, match types, and bidding strategies.",
          },
          {
            title: "Ongoing Optimization",
            description:
              "Our team continuously monitors and adjusts your campaigns, refining keywords, bids, and budgets to improve performance.",
          },
          {
            title: "Reporting & Analysis",
            description:
              "We provide regular reports with key metrics and insights, along with recommendations for further improvements.",
          },
        ],
        packages: [
          {
            name: "Starter",
            price: "$797/month",
            description: "For monthly ad spend up to $5,000",
            features: [
              "Initial account audit",
              "Campaign structure setup",
              "Basic keyword research",
              "Weekly bid adjustments",
              "Basic negative keyword implementation",
              "Monthly performance report",
              "Email support",
            ],
          },
          {
            name: "Growth",
            price: "$1,497/month",
            description: "For monthly ad spend of $5,000-$15,000",
            features: [
              "Comprehensive account audit",
              "Advanced campaign structure optimization",
              "Extensive keyword research",
              "Bi-weekly bid adjustments",
              "Advanced negative keyword implementation",
              "Competitor analysis",
              "Bi-weekly performance reports",
              "Email and phone support",
              "Sponsored Products & Sponsored Brands management",
            ],
            isPopular: true,
          },
          {
            name: "Enterprise",
            price: "$2,997/month",
            description: "For monthly ad spend over $15,000",
            features: [
              "Comprehensive account audit",
              "Advanced campaign structure optimization",
              "Exhaustive keyword research",
              "Weekly bid adjustments",
              "Advanced negative keyword implementation",
              "In-depth competitor analysis",
              "Weekly performance reports",
              "Dedicated account manager",
              "Sponsored Products, Sponsored Brands & Sponsored Display management",
              "A/B testing of ad copy",
              "Strategic budget allocation",
              "Monthly strategy calls",
            ],
          },
        ],
        faqs: [
          {
            question: "What is a good ACoS for Amazon PPC?",
            answer:
              "A 'good' ACoS varies by product category, price point, and profit margins. Generally, an ACoS below 25% is considered good, but we work with you to determine the optimal target based on your specific business goals and profit margins.",
          },
          {
            question: "How often do you optimize PPC campaigns?",
            answer:
              "We perform daily monitoring and weekly optimizations for all accounts. High-spend accounts receive more frequent adjustments as needed. Our approach ensures campaigns are responsive to market changes while allowing enough time to gather meaningful data.",
          },
          {
            question:
              "Do you manage Sponsored Products, Sponsored Brands, and Sponsored Display ads?",
            answer:
              "Yes, we manage all Amazon advertising types including Sponsored Products, Sponsored Brands, and Sponsored Display ads. We create a comprehensive strategy that leverages each ad type appropriately based on your goals.",
          },
        ],
        image: "/ppc-management-service.svg",
        icon: "BarChart",
        aiImagePrompt:
          "Amazon PPC advertising campaign management dashboard with performance metrics and ROI visualization",
      },
      "listing-optimization": {
        id: "listing-optimization",
        title: "Listing Optimization",
        description:
          "Compelling product titles, bullet points, descriptions, and backend keywords that convert browsers into buyers.",
        longDescription:
          "Our Listing Optimization service transforms your Amazon product listings into high-converting sales tools. We optimize every element of your listing—from titles and bullet points to descriptions and backend keywords—to improve search visibility and conversion rates. Our data-driven approach ensures your listings effectively communicate your product's value proposition and address customer pain points.",
        features: [
          "Keyword-optimized product titles",
          "Benefit-driven bullet points",
          "Compelling product descriptions",
          "Strategic backend keyword optimization",
          "Enhanced Brand Content (A+ Content) creation",
          "Competitive analysis and differentiation strategy",
          "Mobile optimization for all listing elements",
        ],
        benefits: [
          "Higher conversion rates and increased sales",
          "Improved organic search visibility",
          "Reduced customer questions and support issues",
          "Lower return rates through clear product communication",
          "Enhanced brand perception and customer trust",
          "Better customer experience across all devices",
          "Increased cross-selling opportunities",
        ],
        process: [
          {
            title: "Research & Analysis",
            description:
              "We analyze your product, competitors, target audience, and relevant keywords to inform our optimization strategy.",
          },
          {
            title: "Content Development",
            description:
              "Our copywriters create compelling, keyword-rich content for all listing elements, highlighting your product's unique benefits.",
          },
          {
            title: "A+ Content Creation",
            description:
              "For brand registered sellers, we design engaging Enhanced Brand Content that showcases your product features and brand story.",
          },
          {
            title: "Implementation",
            description:
              "We implement all optimized content and ensure it complies with Amazon's guidelines and best practices.",
          },
          {
            title: "Testing & Refinement",
            description:
              "We monitor performance metrics and make data-driven adjustments to continuously improve conversion rates.",
          },
        ],
        packages: [
          {
            name: "Essential",
            price: "$397",
            description: "For a single product listing",
            features: [
              "Basic keyword research",
              "Product title optimization",
              "Bullet point optimization",
              "Basic product description",
              "Backend search term recommendations",
              "One revision round",
            ],
          },
          {
            name: "Advanced",
            price: "$697",
            description: "For a single product with enhanced content",
            features: [
              "Comprehensive keyword research",
              "Product title optimization",
              "Strategic bullet point creation",
              "Detailed product description",
              "Backend search term optimization",
              "Basic A+ Content design",
              "Competitor analysis",
              "Two revision rounds",
            ],
            isPopular: true,
          },
          {
            name: "Complete",
            price: "$1,497",
            description: "For up to 3 related products with premium content",
            features: [
              "Exhaustive keyword research",
              "Product title optimization",
              "Strategic bullet point creation",
              "Detailed product description",
              "Backend search term optimization",
              "Premium A+ Content design",
              "In-depth competitor analysis",
              "Mobile optimization",
              "Unlimited revisions for 30 days",
              "30-day performance review",
            ],
          },
        ],
        faqs: [
          {
            question: "How long does it take to optimize a product listing?",
            answer:
              "The timeline varies based on the complexity of the product and the number of listings, but typically we can complete a standard listing optimization within 7-10 business days, including research, content creation, and implementation.",
          },
          {
            question:
              "Will you optimize images as part of the listing optimization?",
            answer:
              "Yes, we provide guidance on image optimization and can recommend professional photography services if needed. High-quality images are crucial for conversion rates on Amazon.",
          },
          {
            question:
              "Can you help with new product listings or only existing ones?",
            answer:
              "We work with both new and existing product listings. For new products, we help you build optimized listings from scratch. For existing products, we improve upon what's already there to enhance performance.",
          },
        ],
        image: "/listing-optimization-service.svg",
        icon: "ShoppingCart",
        aiImagePrompt:
          "Amazon product listing optimization with compelling titles, bullet points and A+ content visualization",
      },
      "product-photography": {
        id: "product-photography",
        title: "Product Photography",
        description:
          "High-quality product images that showcase your products and help increase conversion rates.",
        longDescription:
          "Our Product Photography service provides professional, high-quality images that showcase your products in the best possible light. Great product photography is essential for Amazon success, as it helps customers visualize your product, understand its features, and make informed purchasing decisions. Our team of experienced photographers and editors create compelling images that meet Amazon's requirements and help increase your conversion rates.",
        features: [
          "Professional studio photography",
          "White background main images (Amazon compliant)",
          "Lifestyle and contextual shots",
          "Infographic design for feature highlights",
          "360-degree product views",
          "Image editing and retouching",
          "Mobile-optimized images",
          "Amazon guideline compliance",
        ],
        benefits: [
          "Increased conversion rates",
          "Enhanced product perception and perceived value",
          "Reduced return rates through clear product visualization",
          "Improved brand consistency across your catalog",
          "Better customer understanding of product features and benefits",
          "Competitive advantage in crowded categories",
          "Professional appearance that builds trust",
        ],
        process: [
          {
            title: "Consultation & Planning",
            description:
              "We discuss your products, brand, and goals to develop a photography plan that highlights your product's unique features and benefits.",
          },
          {
            title: "Photography Session",
            description:
              "Our professional photographers capture your products in our studio, ensuring optimal lighting, angles, and compositions.",
          },
          {
            title: "Editing & Retouching",
            description:
              "Our editing team enhances your product images, ensuring consistent colors, removing imperfections, and optimizing for Amazon's requirements.",
          },
          {
            title: "Infographic Creation",
            description:
              "We design informative infographics that highlight key product features, dimensions, and benefits to enhance customer understanding.",
          },
          {
            title: "Delivery & Implementation",
            description:
              "We provide you with the final optimized images in multiple formats and assist with implementation on your Amazon listings.",
          },
        ],
        packages: [
          {
            name: "Basic",
            price: "$497",
            description: "For a single product",
            features: [
              "5 professional product photos",
              "White background main image",
              "3 detail/feature shots",
              "1 lifestyle image",
              "Basic editing and retouching",
              "Amazon-compliant main image",
              "Digital delivery of final images",
            ],
          },
          {
            name: "Standard",
            price: "$997",
            description: "For a single product with enhanced visuals",
            features: [
              "10 professional product photos",
              "White background main image",
              "5 detail/feature shots",
              "2 lifestyle images",
              "2 infographic designs",
              "Advanced editing and retouching",
              "Amazon-compliant images",
              "Digital delivery of final images",
              "One revision round",
            ],
            isPopular: true,
          },
          {
            name: "Premium",
            price: "$1,997",
            description:
              "For up to 3 related products with comprehensive visuals",
            features: [
              "20 professional product photos",
              "White background main images",
              "10 detail/feature shots",
              "5 lifestyle images",
              "5 custom infographic designs",
              "360-degree product view",
              "Premium editing and retouching",
              "Amazon-compliant images",
              "Digital delivery of final images",
              "Two revision rounds",
              "Image implementation assistance",
            ],
          },
        ],
        faqs: [
          {
            question: "Do I need to ship my products to you for photography?",
            answer:
              "Yes, for the best results, we require that you ship your products to our studio. We handle your products with care and ship them back to you after the photography session is complete. For larger items, we can discuss on-location photography options.",
          },
          {
            question: "How long does the product photography process take?",
            answer:
              "The timeline varies depending on the complexity of the product and the package selected. Typically, the process takes 2-3 weeks from receiving your products to delivering the final images.",
          },
          {
            question:
              "Can you create lifestyle images if my product is used in a specific way?",
            answer:
              "Yes, we specialize in creating contextual lifestyle images that show your product in use. During the consultation phase, we'll discuss the best ways to showcase your product's functionality and benefits in real-life scenarios.",
          },
        ],
        image: "/product-photography-service.svg",
        icon: "Camera",
        aiImagePrompt:
          "Professional Amazon product photography with white background main image and lifestyle shots",
      },
      "review-management": {
        id: "review-management",
        title: "Review Management",
        description:
          "Strategies to generate positive reviews and effectively manage customer feedback.",
        longDescription:
          "Our Review Management service helps you build and maintain a positive review profile on Amazon, which is crucial for conversion rates and organic ranking. We implement ethical strategies to encourage satisfied customers to leave reviews, respond appropriately to negative feedback, and monitor your review performance over time. Our approach focuses on improving your products and customer experience to naturally generate positive reviews while staying compliant with Amazon's policies.",
        features: [
          "Review generation strategy development",
          "Post-purchase email sequence creation",
          "Product insert card design",
          "Negative review monitoring and response assistance",
          "Review analysis and insights",
          "Product improvement recommendations",
          "Competitor review analysis",
          "Amazon Terms of Service compliance guidance",
        ],
        benefits: [
          "Increased review count and improved rating average",
          "Enhanced product credibility and customer trust",
          "Higher conversion rates from improved social proof",
          "Better organic ranking through improved performance metrics",
          "Valuable customer feedback for product improvements",
          "Reduced negative review impact through proper management",
          "Competitive insights from market feedback analysis",
        ],
        process: [
          {
            title: "Review Audit & Analysis",
            description:
              "We analyze your current reviews, identify patterns in feedback, and compare your review profile to competitors.",
          },
          {
            title: "Strategy Development",
            description:
              "Based on our analysis, we create a customized review generation strategy that complies with Amazon's policies.",
          },
          {
            title: "Implementation",
            description:
              "We help you implement the strategy through email sequences, product inserts, packaging improvements, and customer service enhancements.",
          },
          {
            title: "Monitoring & Management",
            description:
              "We continuously monitor your reviews, alert you to negative feedback, and provide guidance on appropriate responses.",
          },
          {
            title: "Optimization & Improvement",
            description:
              "We analyze review data to identify product improvement opportunities and refine your review generation strategy over time.",
          },
        ],
        packages: [
          {
            name: "Basic",
            price: "$497",
            description: "For sellers with 1-5 products",
            features: [
              "Initial review profile audit",
              "Basic review generation strategy",
              "Email sequence template (1)",
              "Product insert card design",
              "Monthly review performance report",
              "Amazon TOS compliance check",
            ],
          },
          {
            name: "Advanced",
            price: "$997/month",
            description: "For sellers with 5-15 products",
            features: [
              "Comprehensive review profile audit",
              "Advanced review generation strategy",
              "Custom email sequence templates (3)",
              "Product insert card design",
              "Weekly review monitoring",
              "Negative review response guidance",
              "Bi-weekly review performance reports",
              "Basic competitor review analysis",
              "Amazon TOS compliance management",
            ],
            isPopular: true,
          },
          {
            name: "Premium",
            price: "$1,997/month",
            description: "For sellers with 15+ products",
            features: [
              "In-depth review profile audit",
              "Comprehensive review generation strategy",
              "Custom email sequence templates (unlimited)",
              "Premium product insert card design",
              "Daily review monitoring",
              "Negative review response management",
              "Weekly review performance reports",
              "In-depth competitor review analysis",
              "Product improvement recommendations",
              "Amazon TOS compliance management",
              "Dedicated review manager",
              "Monthly strategy calls",
            ],
          },
        ],
        faqs: [
          {
            question:
              "Is it against Amazon's Terms of Service to ask for reviews?",
            answer:
              "No, it's not against Amazon's Terms of Service to ask for reviews, but there are specific guidelines you must follow. You can request reviews but cannot offer incentives, ask specifically for positive reviews, or attempt to influence the content of reviews. Our strategies are designed to be fully compliant with Amazon's policies.",
          },
          {
            question: "How do you help with negative reviews?",
            answer:
              "We monitor your listings for negative reviews and alert you promptly. We provide guidance on how to respond professionally and constructively to address customer concerns. Additionally, we analyze patterns in negative feedback to identify product or service improvements that can prevent similar issues in the future.",
          },
          {
            question:
              "How long does it take to see results from review management?",
            answer:
              "Results vary based on your sales volume and current review situation. Typically, clients begin to see an increase in review rate within 30-60 days of implementing our strategies. Significant improvements in overall rating average may take 3-6 months, especially for products with an established review history.",
          },
        ],
        image: "/review-management-service.svg",
        icon: "MessageSquare",
        aiImagePrompt:
          "Amazon review management dashboard with customer feedback analysis and rating trends",
      },
      "brand-growth": {
        id: "brand-growth",
        title: "Brand Growth",
        description:
          "Comprehensive brand building strategies to establish and grow your presence on Amazon.",
        longDescription:
          "Our Brand Growth service helps you build a recognizable and trusted brand on Amazon's marketplace. We implement holistic strategies that go beyond individual product optimization to create a cohesive brand experience that resonates with customers and drives long-term loyalty. From Brand Registry and Storefront design to brand protection and expansion strategies, we help you establish a strong foundation for sustainable growth.",
        features: [
          "Amazon Brand Registry assistance",
          "Brand Store design and optimization",
          "Brand content strategy development",
          "A+ Content creation across product catalog",
          "Brand protection and monitoring",
          "Brand analytics and insights",
          "Product portfolio expansion strategy",
          "Cross-selling and upselling optimization",
        ],
        benefits: [
          "Increased brand recognition and customer loyalty",
          "Higher perceived value for your products",
          "Protection against unauthorized sellers",
          "Improved conversion rates across your catalog",
          "Enhanced customer shopping experience",
          "Stronger competitive positioning",
          "Sustainable long-term growth",
          "Increased customer lifetime value",
        ],
        process: [
          {
            title: "Brand Audit",
            description:
              "We assess your current brand presence on Amazon and identify opportunities for improvement and growth.",
          },
          {
            title: "Strategy Development",
            description:
              "Based on your goals and target audience, we create a comprehensive brand growth strategy tailored to your unique needs.",
          },
          {
            title: "Brand Assets Creation",
            description:
              "We design and develop key brand assets including your Brand Store, A+ Content, and brand messaging.",
          },
          {
            title: "Implementation",
            description:
              "Our team implements all brand elements and ensures consistency across your entire product catalog.",
          },
          {
            title: "Monitoring & Optimization",
            description:
              "We continuously track brand performance metrics and make data-driven adjustments to improve results.",
          },
        ],
        packages: [
          {
            name: "Brand Essentials",
            price: "$1,997",
            description: "For new brands getting started on Amazon",
            features: [
              "Brand Registry assistance",
              "Basic Brand Store (3 pages)",
              "A+ Content for 1 product",
              "Brand logo refinement",
              "Basic brand guidelines",
              "Brand protection setup",
              "30-day implementation",
            ],
          },
          {
            name: "Brand Builder",
            price: "$3,997",
            description: "For established brands looking to grow",
            features: [
              "Brand Registry assistance",
              "Advanced Brand Store (5-7 pages)",
              "A+ Content for 3 products",
              "Brand style guide development",
              "Brand protection and monitoring",
              "Basic product portfolio strategy",
              "Brand analytics dashboard",
              "60-day implementation",
              "30-day optimization period",
            ],
            isPopular: true,
          },
          {
            name: "Brand Authority",
            price: "$7,997",
            description: "For brands aiming to dominate their category",
            features: [
              "Brand Registry assistance",
              "Premium Brand Store (10+ pages)",
              "A+ Content for 10 products",
              "Comprehensive brand style guide",
              "Advanced brand protection and monitoring",
              "Product portfolio expansion strategy",
              "Cross-selling optimization",
              "Brand analytics and insights",
              "Competitor brand analysis",
              "90-day implementation",
              "90-day optimization period",
              "Quarterly strategy reviews",
            ],
          },
        ],
        faqs: [
          {
            question:
              "Do I need to be Brand Registered to use your Brand Growth services?",
            answer:
              "While Brand Registry provides access to more tools and features, we can help with brand growth strategies regardless of your registration status. If you're not yet registered, we can assist with the registration process as part of our service.",
          },
          {
            question: "How do you measure brand growth success on Amazon?",
            answer:
              "We track multiple metrics including brand search volume, repeat purchase rate, average order value, customer lifetime value, brand store traffic, and overall market share within your category.",
          },
          {
            question: "Can you help with expanding to new product categories?",
            answer:
              "Yes, product category expansion is a key component of our Brand Growth service. We conduct market research to identify promising opportunities and develop strategies for successful category expansion.",
          },
        ],
        image: "/brand-growth-service.svg",
        icon: "TrendingUp",
        aiImagePrompt:
          "Amazon brand growth strategy with brand store design and product portfolio expansion visualization",
      },
      "facebook-ads": {
        id: "facebook-ads",
        title: "Facebook Ads",
        description:
          "Strategic Facebook advertising campaigns that drive external traffic to your Amazon listings.",
        longDescription:
          "Our Facebook Ads service helps Amazon sellers leverage the power of Facebook's advertising platform to drive qualified external traffic to their Amazon listings. By targeting specific demographics, interests, and behaviors, we create campaigns that reach potential customers outside of Amazon's ecosystem. This external traffic strategy not only increases sales but also improves your organic ranking on Amazon through enhanced sales velocity and diversified traffic sources.",
        features: [
          "Custom audience creation and targeting",
          "Ad creative development and testing",
          "Campaign structure optimization",
          "Budget management and allocation",
          "A/B testing of ad copy and images",
          "Performance tracking and analytics",
          "Attribution modeling",
          "Retargeting strategies",
          "Landing page optimization",
        ],
        benefits: [
          "Increased sales velocity from external traffic",
          "Improved organic ranking on Amazon",
          "Reduced dependency on Amazon PPC",
          "Brand awareness outside of Amazon",
          "Customer data collection for retargeting",
          "Lower customer acquisition costs",
          "Competitive advantage through diversified traffic",
          "Enhanced product launch success",
        ],
        process: [
          {
            title: "Audience Research",
            description:
              "We identify your ideal customer demographics, interests, and behaviors to create targeted audience segments.",
          },
          {
            title: "Campaign Strategy",
            description:
              "We develop a comprehensive Facebook advertising strategy aligned with your Amazon business goals.",
          },
          {
            title: "Creative Development",
            description:
              "Our team creates compelling ad copy, images, and videos designed to engage your target audience.",
          },
          {
            title: "Campaign Setup",
            description:
              "We build optimized campaign structures with proper tracking and attribution to measure performance.",
          },
          {
            title: "Ongoing Optimization",
            description:
              "We continuously monitor and refine your campaigns to improve performance and ROI over time.",
          },
        ],
        packages: [
          {
            name: "Starter",
            price: "$997/month",
            description: "For monthly ad spend up to $3,000",
            features: [
              "Initial account setup",
              "2 audience segments",
              "Basic ad creative development",
              "Campaign structure setup",
              "Weekly performance monitoring",
              "Basic attribution tracking",
              "Monthly performance report",
              "Email support",
            ],
          },
          {
            name: "Growth",
            price: "$1,797/month",
            description: "For monthly ad spend of $3,000-$10,000",
            features: [
              "Comprehensive account setup",
              "5 audience segments",
              "Advanced ad creative development",
              "A/B testing (2 variations)",
              "Campaign structure optimization",
              "Bi-weekly performance monitoring",
              "Advanced attribution tracking",
              "Landing page recommendations",
              "Bi-weekly performance reports",
              "Email and phone support",
              "Retargeting campaign setup",
            ],
            isPopular: true,
          },
          {
            name: "Enterprise",
            price: "$2,997/month",
            description: "For monthly ad spend over $10,000",
            features: [
              "Comprehensive account setup",
              "10+ audience segments",
              "Premium ad creative development",
              "A/B testing (multiple variations)",
              "Advanced campaign structure optimization",
              "Weekly performance monitoring",
              "Advanced attribution tracking",
              "Custom landing page development",
              "Weekly performance reports",
              "Dedicated account manager",
              "Priority email and phone support",
              "Retargeting campaign optimization",
              "Lookalike audience creation",
              "Cross-platform strategy integration",
              "Monthly strategy calls",
            ],
          },
        ],
        faqs: [
          {
            question: "How does Facebook advertising help my Amazon business?",
            answer:
              "Facebook advertising drives external traffic to your Amazon listings, which can improve your organic ranking through increased sales velocity. Amazon's algorithm favors products that receive traffic and sales from diverse sources. Additionally, Facebook ads allow you to build brand awareness outside of Amazon and collect customer data for retargeting purposes.",
          },
          {
            question:
              "How do you track the performance of Facebook ads for Amazon listings?",
            answer:
              "We use a combination of tracking methods including Amazon Attribution links, landing pages with tracking pixels, and unique promotion codes. This multi-faceted approach allows us to measure click-through rates, conversion rates, and return on ad spend (ROAS) for your Facebook campaigns.",
          },
          {
            question:
              "Is there a minimum ad spend required for your Facebook Ads service?",
            answer:
              "While there's no strict minimum, we recommend a monthly ad spend of at least $1,500 to generate meaningful results. The effectiveness of Facebook advertising scales with budget, allowing for more testing and optimization as spend increases.",
          },
        ],
        image: "/facebook-ads-service.svg",
        icon: "Facebook",
        aiImagePrompt:
          "Facebook advertising campaign for Amazon products with audience targeting and performance metrics",
      },
    };

    // Get the service data based on the slug
    const serviceData = services[slug as keyof typeof services];

    if (serviceData) {
      setService(serviceData);
    } else {
      // Fallback if service not found
      setService({
        id: "not-found",
        title: "Service Not Found",
        description: "The requested service could not be found.",
        longDescription: "",
        features: [],
        benefits: [],
        process: [],
        packages: [],
        faqs: [],
        image: "/placeholder.svg",
        icon: "",
      });
    }

    setIsLoading(false);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-64">
            <div className="animate-pulse w-12 h-12 border-4 border-primary border-t-transparent rounded-full"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!service) {
    return null;
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FC9F59] to-[#F9E0A6] py-20">
        <WaveBackground />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/our-services">
            <Button variant="ghost" className="mb-8 flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Services
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-80 w-full">
                  <FallbackImage
                    src={service.image}
                    alt={service.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
                    className="object-cover"
                  />
                </div>

                <div className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Overview
                  </h2>
                  <p className="text-lg text-gray-700 mb-8">
                    {service.longDescription}
                  </p>

                  {/* AI-Generated Images Section */}
                  {service.aiImagePrompt && (
                    <div className="mb-12">
                      
                    </div>
                  )}

                  {/* Features */}
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      What's Included
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Benefits
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Process */}
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Our Process
                    </h2>
                    <div className="space-y-8">
                      {service.process.map((step, index) => (
                        <div key={index} className="relative pl-10">
                          <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold">
                            {index + 1}
                          </div>
                          <h3 className="text-xl font-semibold mb-2">
                            {step.title}
                          </h3>
                          <p className="text-gray-700">{step.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing Packages */}
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Pricing Packages
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {service.packages.map((pkg, index) => (
                        <div
                          key={index}
                          className={`border rounded-lg overflow-hidden ${
                            pkg.isPopular
                              ? "border-primary shadow-lg"
                              : "border-gray-200"
                          }`}
                        >
                          {pkg.isPopular && (
                            <div className="bg-primary text-white text-center py-1 text-sm font-medium">
                              Most Popular
                            </div>
                          )}
                          <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">
                              {pkg.name}
                            </h3>
                            <div className="text-3xl font-bold text-primary mb-2">
                              {pkg.price}
                            </div>
                            <p className="text-gray-600 mb-4">
                              {pkg.description}
                            </p>
                            <div className="border-t border-gray-200 pt-4 mt-4">
                              <ul className="space-y-3">
                                {pkg.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-gray-700">
                                      {feature}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <Button
                              className={`w-full mt-6 ${
                                pkg.isPopular
                                  ? ""
                                  : "bg-gray-800 hover:bg-gray-700"
                              }`}
                              onClick={() => {
                                const popupButton = document.querySelector(
                                  ".fixed.bottom-4.right-4"
                                ) as HTMLButtonElement;
                                if (popupButton) popupButton.click();
                              }}
                            >
                              Get Started
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* FAQs */}
                  {service.faqs.length > 0 && (
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Frequently Asked Questions
                      </h2>
                      <div className="space-y-6">
                        {service.faqs.map((faq, index) => (
                          <div key={index}>
                            <h3 className="text-xl font-semibold mb-2">
                              {faq.question}
                            </h3>
                            <p className="text-gray-700">{faq.answer}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-semibold mb-6">
                  Ready to Grow Your Amazon Business?
                </h3>
                <p className="text-gray-700 mb-6">
                  Get started with our {service.title} service today and see the
                  difference our expertise can make for your business.
                </p>
                <Button
                  className="w-full mb-6"
                  onClick={() => {
                    const popupButton = document.querySelector(
                      ".fixed.bottom-4.right-4"
                    ) as HTMLButtonElement;
                    if (popupButton) popupButton.click();
                  }}
                >
                  Get a Free Consultation
                </Button>

                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h4 className="font-semibold mb-4">Explore Other Services</h4>
                  <ul className="space-y-3">
                    {[
                      "amazon-seo",
                      "ppc-management",
                      "listing-optimization",
                      "brand-growth",
                      "facebook-ads",
                      "product-photography",
                    ]
                      .filter((id) => id !== service.id)
                      .slice(0, 4)
                      .map((serviceId) => (
                        <li key={serviceId}>
                          <Link
                            href={`/our-services/${serviceId}`}
                            className="flex items-center text-primary hover:underline"
                          >
                            <span>
                              {serviceId === "amazon-seo"
                                ? "Amazon SEO"
                                : serviceId === "ppc-management"
                                ? "PPC Management"
                                : serviceId === "listing-optimization"
                                ? "Listing Optimization"
                                : serviceId === "brand-growth"
                                ? "Brand Growth"
                                : serviceId === "facebook-ads"
                                ? "Facebook Ads"
                                : "Product Photography"}
                            </span>
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h4 className="font-semibold mb-4">Need Help?</h4>
                  <p className="text-gray-700 mb-4">
                    Have questions about our {service.title} service? Contact
                    our team for more information.
                  </p>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Take Your Amazon Business to the Next Level?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Join hundreds of successful brands who have transformed their
              Amazon presence with our proven strategies.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-secondary text-white rounded-full px-8 py-6 text-lg"
              onClick={() => {
                const popupButton = document.querySelector(
                  ".fixed.bottom-4.right-4"
                ) as HTMLButtonElement;
                if (popupButton) popupButton.click();
              }}
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
