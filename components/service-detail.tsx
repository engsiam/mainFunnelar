"use client";

import { FallbackImage } from "@/components/fallback-image";
import { Button } from "@/components/ui/button";
import { WaveBackground } from "@/components/wave-background";
import { motion } from "framer-motion";
import parse from "html-react-parser";
import { ArrowLeft, ArrowRight, CheckCircle, HelpCircle } from "lucide-react";
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
  bottomText?: string; // Added the bottomText property
}

export function ServiceDetail({ slug }: { slug: string }) {
  const [service, setService] = useState<ServiceData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const services = {
      "amazon-seo": {
        id: "amazon-seo",
        title: "Boost Your Amazon Listings with SEO Services",
        description: "Rank Higher, Sell Faster",
        longDescription:
          '<p>Struggling to get your Amazon products discovered?<br/>We offer proven Amazon SEO services — crafted to improve your visibility, drive more traffic, and increase your sales — fast.<br/>Maximize your reach and dominate your niche.</p><h2 class="text-lg font-semibold my-4">Why Our Amazon SEO Services Stand Out</h2><p>Not all Amazon SEO is created equal. Here\'s why sellers trust us to supercharge their rankings:</p>',
        features: [
          "Keyword research tailored for Amazon A9 algorithm",
          "Optimized product titles, bullets, and descriptions",
          "Backend search term optimization",
          "Enhanced Brand Content (EBC) / A+ Content setup",
          "Competitor analysis and strategy adjustment",
          "Ongoing SEO performance tracking and improvements",
          "Conversion rate optimization (CRO) guidance",
          "Image SEO and alt-text optimization",
          "Product review strategy consulting",
        ],
        benefits: [
          "Higher Product Rankings",
          "Increased Organic Traffic",
          "Better Conversion Rates",
          "More Reviews and Customer Trust",
          "Optimized Listings for Mobile & Desktop",
          "Faster Launch Success",
          "Amazon TOS-Compliant Strategies",
          "Ongoing SEO Monitoring",
          "Custom Strategy for Your Product",
          "Data-Driven Results",
          "Affordable Packages",
          "Full Transparency",
        ],
        process: [
          {
            title: "Deep Keyword Research",
            description:
              "We find exactly what your customers are searching for — uncovering hidden high-intent keywords to power your listings.",
          },
          {
            title: "Listing Optimization",
            description:
              "From titles to bullet points and descriptions, we optimize every word to increase visibility and drive conversions.",
          },
          {
            title: "Backend SEO Setup",
            description:
              "We fill out your hidden keywords, subject matter fields, and backend attributes perfectly — maximizing your ranking signals.",
          },
          {
            title: "Content & Image Optimization",
            description:
              "We improve your visuals, EBC (A+ content), and listing content to boost click-through and conversion rates.",
          },
          {
            title: "Launch & Rank Strategy",
            description:
              "We help you plan and execute PPC and organic strategies for new launches or to reboost older listings.",
          },
          {
            title: "Performance Tracking",
            description:
              "We monitor your keyword rankings, CTR, and sales velocity — and tweak strategies to keep you ahead.",
          },
          {
            title: "Ongoing Support",
            description:
              "We're with you post-optimization too — helping with listing tweaks, review strategies, and ranking advice.",
          },
        ],
        faqs: [
          {
            category: "General",
            questions: [
              {
                question: "Why is Amazon SEO important for my products?",
                answer:
                  "<p>Over 70% of Amazon shoppers never scroll past the first page. Amazon SEO ensures your products rank higher organically, leading to more visibility, clicks, and sales — without overspending on ads.</p>",
              },
              {
                question:
                  "How quickly will I see results after SEO optimization?",
                answer:
                  "<p>Most clients start seeing ranking improvements within 2–4 weeks after optimization. Full results, especially for competitive categories, typically appear within 6–8 weeks.</p>",
              },
              {
                question:
                  "Is your service compliant with Amazon’s Terms of Service?",
                answer:
                  "<p>Absolutely. All optimization techniques we use are 100% white-hat and fully compliant with Amazon’s guidelines, ensuring long-term stability and safety for your account.</p>",
              },
            ],
          },
          {
            category: "Amazon SEO Services",
            questions: [
              {
                question: "What do you optimize during Amazon SEO?",
                answer:
                  "<p>We optimize your product title, bullet points, description, backend keywords, A+ Content, images, and other critical factors that affect organic rankings and conversion rates.</p>",
              },
              {
                question: "Do you offer keyword research separately?",
                answer:
                  "<p>Yes! If you just need deep keyword research without full listing optimization, we offer standalone packages that deliver a complete, prioritized keyword list for your products.</p>",
              },
              {
                question:
                  "Can you help optimize listings for Amazon international marketplaces?",
                answer:
                  "<p>Definitely! We offer Amazon SEO services for US, UK, CA, DE, FR, IT, ES, AU, and other Amazon marketplaces with localization and cultural adaptation included.</p>",
              },
            ],
          },
        ],
      },
      "ppc-management": {
        id: "ppc-management",
        title: "Expert Amazon PPC Management Services",
        description:
          "Maximize Your Product Visibility, Sales, and ROI on Amazon",
        longDescription: `
    <p>Struggling to keep your Amazon advertising costs low while driving consistent sales?</p>
    <p>Our Amazon PPC Management service is designed to maximize your product visibility, control your ACoS, and boost your ROAS through data-driven strategies, smart bidding, and relentless optimization.</p>

    <h2 class="text-lg font-semibold my-4">Why Top Sellers Trust Our Amazon PPC Management</h2>
    <p>Amazon is crowded and competitive — running ads without a strategy just burns money. We don't guess; we implement proven PPC frameworks tailored to your business, ensuring every dollar you invest returns measurable results.</p>
  `,
        features: [
          "Comprehensive account audits and competitor analysis",
          "Strategic keyword research and targeting",
          "Campaign structure optimization",
          "Negative keyword mining and implementation",
          "Smart bid management and budget allocation",
          "Sponsored Products, Brands, and Display campaign management",
          "A/B testing for ad creatives and copy",
          "Performance tracking, reporting, and optimization",
          "Scaling strategies for high-performing campaigns",
        ],
        benefits: [
          "Lower Advertising Cost of Sale (ACoS)",
          "Higher Return on Ad Spend (ROAS)",
          "Increased sales velocity and organic ranking boosts",
          "Efficient budget utilization across all campaigns",
          "Custom strategies aligned with your brand goals",
          "Real-time campaign monitoring and adjustments",
          "Competitive edge in saturated product categories",
          "Accelerated product launches and brand exposure",
          "Transparent reporting and actionable insights",
        ],
        process: [
          {
            title: "Account Audit & Opportunity Analysis",
            description:
              "We dive deep into your current campaigns, keywords, and performance data to uncover hidden opportunities and eliminate wasted ad spend.",
          },
          {
            title: "Custom Strategy Development",
            description:
              "No cookie-cutter solutions here. We craft a tailored PPC strategy based on your products, market position, and goals.",
          },
          {
            title: "Campaign Setup & Launch",
            description:
              "We build organized, high-converting campaigns using advanced targeting methods, optimal match types, and precise bid strategies.",
          },
          {
            title: "Continuous Optimization",
            description:
              "We monitor performance daily, refine bids, add negative keywords, adjust targeting, and scale winners to maximize profitability.",
          },
          {
            title: "Transparent Reporting & Strategy Refinement",
            description:
              "You'll receive detailed, easy-to-understand reports outlining KPIs, wins, and next-step recommendations — always aligned with your growth goals.",
          },
        ],
        faqs: [
          {
            category: "General",
            questions: [
              {
                question:
                  "Why should I invest in Amazon PPC Management instead of running campaigns myself?",
                answer: `
            <p>While anyone can launch an ad, few can profitably scale it. Our experts use data-driven optimization, advanced bidding techniques, and continuous A/B testing to ensure your ad budget delivers maximum ROI — something that DIY efforts often miss.</p>
          `,
              },
              {
                question:
                  "How soon can I expect to see results after you start managing my Amazon PPC?",
                answer: `
            <p>Many clients notice improved campaign efficiency within the first 2-4 weeks. However, sustainable growth typically builds over 60-90 days as campaigns mature and optimizations compound.</p>
          `,
              },
              {
                question:
                  "Is your PPC management service suitable for new product launches?",
                answer: `
            <p>Absolutely! In fact, strategic PPC is critical for new launches to drive early sales velocity, improve organic rankings, and beat competitors. We create launch-specific campaigns designed to quickly build traction without overspending.</p>
          `,
              },
            ],
          },
          {
            category: "Amazon PPC Optimization",
            questions: [
              {
                question: "What types of Amazon PPC campaigns do you manage?",
                answer: `
            <p>We manage Sponsored Products, Sponsored Brands, and Sponsored Display campaigns — covering all angles to maximize your product visibility and conversions.</p>
          `,
              },
              {
                question: "How do you reduce ACoS while increasing sales?",
                answer: `
            <p>Through strategic keyword targeting, smart bid adjustments, continuous negative keyword refinement, and focusing spend on high-converting traffic sources. Our goal is not just more traffic, but better traffic that actually converts.</p>
          `,
              },
              {
                question: "Can you manage multiple marketplaces (US, UK, EU)?",
                answer: `
            <p>Yes! We support Amazon PPC campaigns across multiple marketplaces and adjust strategies based on regional competition, buyer behavior, and advertising policies.</p>
          `,
              },
              {
                question: "Do you offer full transparency on ad performance?",
                answer: `
            <p>100%. You’ll receive regular reports with clear insights on key metrics like ACoS, ROAS, clicks, conversions, and actionable next steps. No hidden results — full visibility at all times.</p>
          `,
              },
            ],
          },
        ],
      },
      "listing-optimization": {
        id: "listing-optimization",
        title: "Amazon Listing Optimization",
        description: "Increase Sales with Optimized Amazon Listings",
        longDescription: `<p>Struggling to convert views into sales? Our Amazon Listing Optimization service is designed to turn your product listings into powerful sales machines.<br/> 
      We focus on enhancing every part of your listing—from titles and bullet points to backend keywords—to improve visibility and conversion rates. Get ready to boost your product’s performance.</p>

      <h2 class="text-lg font-semibold my-4">Why Choose Us?</h2>
      <p>With so many listing optimization services out there, what makes us stand out?</p>`,
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
              "For brand-registered sellers, we design engaging Enhanced Brand Content that showcases your product features and brand story.",
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
        faqs: [
          {
            category: "General",
            questions: [
              {
                question:
                  "How long does it take to optimize a product listing?",
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
          },
        ],
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
        faqs: [
          {
            category: "General",
            questions: [
              {
                question:
                  "Do I need to ship my products to you for photography?",
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
          },
        ],
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
        faqs: [
          {
            category: "General",
            questions: [
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
          },
        ],
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
        faqs: [
          {
            category: "General",
            questions: [
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
                question:
                  "Can you help with expanding to new product categories?",
                answer:
                  "Yes, product category expansion is a key component of our Brand Growth service. We conduct market research to identify promising opportunities and develop strategies for successful category expansion.",
              },
            ],
          },
        ],
      },
      "facebook-ads": {
        id: "facebook-ads",
        title: "Buy Facebook Business Manager & Ads Accounts",
        description: "Start Advertising Instantly",
        longDescription: `<p>Tired of getting ad accounts banned or waiting days for verification?<br/>
        We offer Verified Facebook Business Managers and Reinstate-Ready Profiles that are fully set up, warmed up, and ready to run ads instantly.<br/>
        No more headaches. Just launch and grow.</p>
      `,
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
          "Instant Access",
          "Aged & Trusted Accounts",
          "Verified & Policy-Compliant",
          "High Spending Limits",
          "Real US/EU/Asian Profiles",
          "Lower Risk of Ad Restrictions",
          "Replacement Warranty",
          "Full Admin Access",
          "24/7 Customer Support",
          "Ideal for All Industries",
          "Multiple Package Options",
          "Affordable Pricing",
        ],
        process: [
          {
            title: "Real People & Real Support",
            description:
              "You're not just buying an account, you're partnering with a team that cares about your success.",
          },
          {
            title: "Fast, Hassle-Free Setup",
            description:
              "While others take hours or days, we deliver access within minutes. No stress, no waiting, no excuses",
          },
          {
            title: "Built for Stability",
            description:
              "Not Just Hype - Our accounts are verified, aged, and warmed up. We don’t cut corners or use shady methods, so your campaigns are safe from unexpected ban.",
          },
          {
            title: "Instant Free Replacements",
            description:
              "If something ever goes wrong, you’re not left hanging. We replace your account instantly — no questions, no delays.",
          },
          {
            title: "Transparent, Flexible Pricing",
            description:
              "No hidden fees. No lock-in contracts. Pay only for what you need, when you need it. Pause or cancel anytime.",
          },
          {
            title: "Designed for Results",
            description:
              "Whether you’re scaling a 6-figure funnel or just launching your first campaign, we make sure your ad accounts are ready to perform.",
          },
          {
            title: "Talk to a Human Anytime",
            description:
              "Stuck? Have a question? Our live chat team is here for you 24/7 on WhatsApp, Telegram, or Email. No bots. Just real humans who want to help you win..",
          },
        ],

        faqs: [
          {
            category: "General",
            questions: [
              {
                question:
                  "Why should I buy Facebook Ads Accounts from your service instead of creating my own?",
                answer: `
                  <p>Facebook rejects over 70% of new ad accounts due to strict automated policy checks. When you buy from us, you skip the trial-and-error phase and get:</p>
                  <div className="my-4">
                    ✅ Pre-approved, aged ad accounts (6+ months) ready to run ads<br/>
                    ✅ Higher daily spend limits ($1,500+ per day) right out of the gate<br/>
                    ✅ No "Ad Account Restricted" issues — clean history and high trust
                  </div>
                  <p>Stop wasting time on appeals. With our accounts, you can launch ads within minutes and focus on scaling your business.</p>
                `,
              },
              {
                question:
                  "Are your accounts safe and compliant with Facebook’s rules?",
                answer: `
                  <p>Yes, all our accounts are fully compliant with Facebook's Terms of Service. We take every step to ensure safety and stability:</p>
                  <div className="my-4">
                    🔒 Whitelisted residential IPs to mimic real user behavior<br/>
                    🔒 Gradual ad spend scaling to avoid triggering Facebook’s risk systems<br/>
                    🔒 Aged Facebook profiles with organic activity history
                  </div>
                  <p>We also offer a 24-hour replacement guarantee if there’s any issue after delivery — your success is our priority.</p>
                `,
              },
              {
                question:
                  "My ad account got restricted. How does buying yours help?",
                answer: `
                  <p>Once your account is flagged, it’s tough to recover — Facebook’s AI rarely lifts bans, even on appeal. Buying from us gives you:</p>
                  <div className="my-4">
                    🚫 A fresh ad environment with no past restrictions<br/>
                    ✅ Pre-approved, trusted BM and ad accounts<br/>
                    ✅ Instant campaign launch in less than 5 minutes
                  </div>
                  <p>No more delays or failed appeals — get back to running profitable campaigns right away.</p>
                `,
              },
            ],
          },
          {
            category: "Facebook Ads Accounts",
            questions: [
              {
                question: `How can I legally recover a restricted Facebook Ad Account?`,
                answer: `
                  Facebook’s internal appeal system is slow and rarely guarantees success. A more reliable and faster option is to use our aged, pre-approved Facebook Ads Accounts, which are fully compliant with Meta’s advertising policies right from the start.
                `,
              },
              {
                question:
                  "Are your accounts flagged or marked suspicious by Facebook?",
                answer: `
                  Not at all. Our accounts come with over 6 months of real, organic activity and a natural ad spend history, mimicking the behavior Facebook expects from legitimate businesses, reducing the risk of any red flags.
                `,
              },
              {
                question:
                  "Why do Facebook Ads Accounts typically get restricted?",
                answer: `
                  Restrictions often happen because of unverified Business Managers or sudden spikes in ad spending. Our pre-approved, fully verified accounts eliminate these risks and provide a safer foundation for your campaigns.
                `,
              },
              {
                question:
                  "My Facebook Ads Account is restricted. Can you assist me?",
                answer: `
                  Absolutely! If your current account is restricted, we offer two quick solutions:

Buy a fresh, pre-warmed Facebook Ads Account to get back to advertising immediately.

Buy a Reinstated Facebook Ads Account that was previously restricted but has now been fully restored and approved for advertising.

                `,
              },
              {
                c: `How can I prevent future "Facebook account restricted from advertising" issues?`,
                answer: `
                  The best practices include using pre-warmed, trusted accounts, sticking closely to Facebook’s Advertising Policies, and scaling your ad spend gradually. Our reinstated accounts, which have successfully passed Facebook’s ID and policy reviews, offer a higher trust rating and better long-term stability.
                `,
              },
            ],
          },
          {
            category: "Verified Business Managers",
            questions: [
              {
                question:
                  "What is a Verified Business Manager (BM), and why does it matter when buying Facebook Ads Accounts?",
                answer: `
                  A Verified Business Manager is Facebook’s official tool for managing Pages, ad accounts, and digital assets under one secure dashboard. Verification gives your BM a blue badge of authenticity, showing Facebook that you're a legitimate business. It’s especially valuable when buying Facebook Ads Accounts, as it helps ensure smoother ad approvals and account stability.

                `,
              },
              {
                question: "Why should I invest in a Verified Business Manager?",
                answer: `<div className="my-4">
                <p>✅ Boosted Credibility – The verification badge builds trust with Facebook</p>
                <p>✅ Higher Ad Spend Limits – Verified BMs often unlock bigger daily budgets</p>
                <p>✅ Access to Premium Features – Some ad tools are exclusive to verified businesses</p>
                <p>✅ WhatsApp API Access – A Verified BM is required to connect with the WhatsApp Business API, perfect for high-volume messaging or automation tools</p>
                </div>
                `,
              },
              {
                question:
                  "Can I get a ready-to-use Verified Business Manager when I buy Facebook Ads Accounts?",
                answer: `
                  Absolutely. Our Verified Business Managers are fully approved by Facebook and ready to go. They’re the perfect match for any Ads Account purchase, ensuring a seamless setup with no extra waiting or verification delays.
                `,
              },
            ],
          },
        ],
        bottomText: `<h2 class="text-lg font-semibold my-4">Ready to advertise without limits?
</h2>
        <p>Get your Verified Business Manager today and start scaling with confidence.
Fast delivery, full control, and 24/7 support — everything you need to win with Facebook ads.</p>`,
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
                    {parse(service.longDescription)}
                  </p>

                  {/* AI-Generated Images Section */}
                  {service.aiImagePrompt && <div className="mb-12"></div>}

                  {/* Features */}
                  {/* <div className="mb-12">
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
                  </div> */}

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
                      What's Included
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

                    <div className="overflow-x-auto">
                      <div className="bg-gray-900 text-white p-4 rounded-t-lg">
                        <h3 className="text-xl font-bold flex items-center">
                          <span className="text-primary mr-2">•</span> Business
                          Manager & Ad Account Packages
                        </h3>
                      </div>
                      <table className="w-full border-collapse">
                        <thead className="bg-gray-800 text-white">
                          <tr>
                            <th className="p-3 text-left">
                              Package Description
                            </th>
                            <th className="p-3 text-left">Daily Spend Limit</th>
                            <th className="p-3 text-left">Account Age</th>
                            <th className="p-3 text-left">Price</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          <tr className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="p-3">
                              New Verified BM + 1 Ad Account
                            </td>
                            <td className="p-3">$25</td>
                            <td className="p-3">Fresh</td>
                            <td className="p-3 font-bold text-primary">$45</td>
                          </tr>
                          <tr className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="p-3">
                              New Verified BM + 1 Ad Account
                            </td>
                            <td className="p-3">$50</td>
                            <td className="p-3">Fresh</td>
                            <td className="p-3 font-bold text-primary">$60</td>
                          </tr>
                          <tr className="border-b border-gray-200 hover:bg-gray-50 bg-primary/5">
                            <td className="p-3 font-medium">
                              Aged Verified BM (3–36 months) + 1 Ad Account
                            </td>
                            <td className="p-3">$50</td>
                            <td className="p-3">3–36 months</td>
                            <td className="p-3 font-bold text-primary">$80</td>
                          </tr>
                          <tr className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="p-3">
                              New Verified BM + 1 Ad Account
                            </td>
                            <td className="p-3">$250</td>
                            <td className="p-3">Fresh</td>
                            <td className="p-3 font-bold text-primary">$110</td>
                          </tr>
                          <tr className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="p-3">
                              Aged Verified BM (3–36 months) + 1 Ad Account
                            </td>
                            <td className="p-3">$250</td>
                            <td className="p-3">3–36 months</td>
                            <td className="p-3 font-bold text-primary">$120</td>
                          </tr>
                          <tr className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="p-3">
                              New Verified BM + 5 Ad Accounts
                            </td>
                            <td className="p-3">$250</td>
                            <td className="p-3">Fresh</td>
                            <td className="p-3 font-bold text-primary">$150</td>
                          </tr>
                          <tr className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="p-3">
                              Aged Verified BM (3–36 months) + 5 Ad Accounts
                            </td>
                            <td className="p-3">$250</td>
                            <td className="p-3">3–36 months</td>
                            <td className="p-3 font-bold text-primary">$160</td>
                          </tr>
                          <tr className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="p-3">
                              New Verified BM + 1 Ad Account
                            </td>
                            <td className="p-3">Unlimited</td>
                            <td className="p-3">Fresh</td>
                            <td className="p-3 font-bold text-primary">$120</td>
                          </tr>
                          <tr className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="p-3">
                              Aged Verified BM (3–36 months) + 1 Ad Account
                            </td>
                            <td className="p-3">Unlimited</td>
                            <td className="p-3">3–36 months</td>
                            <td className="p-3 font-bold text-primary">$130</td>
                          </tr>
                          <tr className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="p-3">
                              New BM + 1 Ad Account + Reinstate Profile (US/EU
                              IP)
                            </td>
                            <td className="p-3">Unlimited</td>
                            <td className="p-3">Fresh</td>
                            <td className="p-3 font-bold text-primary">$175</td>
                          </tr>
                          <tr className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="p-3">
                              New BM + 1 Ad Account + Non-Reinstate Profile
                              (US/EU IP)
                            </td>
                            <td className="p-3">Unlimited</td>
                            <td className="p-3">Fresh</td>
                            <td className="p-3 font-bold text-primary">$165</td>
                          </tr>
                          <tr className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="p-3">New BM + 5 Ad Accounts</td>
                            <td className="p-3">Unlimited</td>
                            <td className="p-3">Fresh</td>
                            <td className="p-3 font-bold text-primary">$180</td>
                          </tr>
                          <tr className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="p-3">
                              Aged BM (3–36 months) + 5 Ad Accounts
                            </td>
                            <td className="p-3">Unlimited</td>
                            <td className="p-3">3–36 months</td>
                            <td className="p-3 font-bold text-primary">$199</td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Button
                            className="w-full"
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
                        <div>
                          <Button
                            variant="outline"
                            className="w-full"
                            onClick={() => {
                              const popupButton = document.querySelector(
                                ".fixed.bottom-4.right-4"
                              ) as HTMLButtonElement;
                              if (popupButton) popupButton.click();
                            }}
                          >
                            Request Custom Package
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* facebook profile add running  */}
                  <div className="overflow-x-auto">
                    <div className="bg-gray-900 text-white p-4 rounded-t-lg">
                      <h3 className="text-xl font-bold flex items-center">
                        <span className="text-primary mr-2">•</span> Facebook
                        Profiles for Ad Running
                      </h3>
                    </div>

                    <table className="w-full border-collapse">
                      <thead className="bg-gray-800 text-white">
                        <tr>
                          <th className="p-3 text-left">Profile Description</th>
                          <th className="p-3 text-left">Account Age</th>
                          <th className="p-3 text-left">Friends Count</th>
                          <th className="p-3 text-left">Region</th>
                          <th className="p-3 text-left">
                            Replacement Warranty
                          </th>
                          <th className="p-3 text-left">Price</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="p-3">
                            Asian Profile with 20–50+ Friends
                          </td>
                          <td className="p-3">1–3 years</td>
                          <td className="p-3">20–50+</td>
                          <td className="p-3">Asia</td>
                          <td className="p-3">7 Days</td>
                          <td className="p-3 font-bold text-primary">$15</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="p-3">
                            Asian Profile with 100–300+ Friends
                          </td>
                          <td className="p-3">1–3 years</td>
                          <td className="p-3">100–300+</td>
                          <td className="p-3">Asia</td>
                          <td className="p-3">7 Days</td>
                          <td className="p-3 font-bold text-primary">$25</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="p-3">
                            US/UK Profile with 20–50+ Friends
                          </td>
                          <td className="p-3">1–5 years</td>
                          <td className="p-3">20–50+</td>
                          <td className="p-3">US/UK</td>
                          <td className="p-3">7 Days</td>
                          <td className="p-3 font-bold text-primary">$30</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="p-3">
                            US/UK Profile with 100–300+ Friends
                          </td>
                          <td className="p-3">1–5 years</td>
                          <td className="p-3">100–300+</td>
                          <td className="p-3">US/UK</td>
                          <td className="p-3">7 Days</td>
                          <td className="p-3 font-bold text-primary">$50</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Button
                          className="w-full"
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
                      <div>
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={() => {
                            const popupButton = document.querySelector(
                              ".fixed.bottom-4.right-4"
                            ) as HTMLButtonElement;
                            if (popupButton) popupButton.click();
                          }}
                        >
                          Request Custom Package
                        </Button>
                      </div>
                    </div>
                    <div className="py-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Final Worlds
                      </h2>
                      <p className="text-lg text-gray-700 mb-8">
                        {parse(service.bottomText ?? '')}
                      </p>
                    </div>
                  </div>

                  {/* FAQs */}
                  {service.faqs.length > 0 && (
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Frequently Asked Questions
                      </h2>

                      {service.faqs.map((category, index) => (
                        <div key={index} className="mb-10">
                          {/* Dark Gray Header for Each Category */}
                          <div className="bg-gray-900 text-white p-4 rounded-t-lg">
                            <h2 className="text-2xl font-bold flex items-center">
                              <span className="text-primary mr-2">•</span>{" "}
                              {category.category}
                            </h2>
                          </div>

                          {/* Light Gray Box with FAQs */}
                          <div className="bg-gray-100 p-6 rounded-b-lg">
                            <div className="space-y-8">
                              {category.questions.map((faq, faqIndex) => (
                                <div
                                  key={faqIndex}
                                  className="bg-white p-6 rounded-lg shadow-sm"
                                >
                                  <div className="flex items-start mb-4">
                                    <HelpCircle className="text-primary h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                                    <h3 className="text-xl font-semibold">
                                      {faq.question}
                                    </h3>
                                  </div>

                                  <p className="text-gray-700 mb-4">
                                    {parse(faq.answer)}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
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
