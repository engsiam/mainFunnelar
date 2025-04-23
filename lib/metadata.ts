import type { Metadata } from "next"

type PageMetadata = {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
}

const defaultMetadata: PageMetadata = {
  title: "Funnelar - Amazon Marketing Experts",
  description:
    "Delivering stunning brands, relatable products, & results oriented marketing strategy & execution for Amazon sellers.",
  keywords: ["Amazon Marketing", "Amazon PPC", "Amazon SEO", "Amazon Advertising"],
  ogImage: "/og-image.jpg",
}

const pageMetadata: Record<string, PageMetadata> = {
  home: {
    title: "Funnelar - Amazon Marketing Experts",
    description:
      "Delivering stunning brands, relatable products, & results oriented marketing strategy & execution for Amazon sellers.",
    keywords: ["Amazon Marketing", "Amazon PPC", "Amazon SEO", "Amazon Advertising"],
    ogImage: "/og-image.jpg",
  },
  "our-services": {
    title: "Our Amazon Marketing Services | Funnelar",
    description:
      "Comprehensive solutions to grow your Amazon business and maximize your ROI. Expert Amazon SEO, PPC Management, and more.",
    keywords: ["Amazon Services", "Amazon Marketing Services", "Amazon SEO", "Amazon PPC Management"],
    ogImage: "/services-og-image.jpg",
  },
  "ppc-management": {
    title: "Amazon PPC Management Services | Funnelar",
    description:
      "Strategic Amazon advertising campaigns that maximize visibility and ROI while minimizing ACoS. Expert PPC management for Amazon sellers.",
    keywords: ["Amazon PPC", "Amazon Advertising", "PPC Management", "Amazon Sponsored Products"],
    ogImage: "/ppc-og-image.jpg",
  },
  "case-studies": {
    title: "Amazon Marketing Case Studies | Funnelar",
    description:
      "Real results from real clients. See how we've helped businesses like yours succeed on Amazon with our proven marketing strategies.",
    keywords: ["Amazon Case Studies", "Amazon Success Stories", "Amazon Marketing Results"],
    ogImage: "/case-studies-og-image.jpg",
  },
  about: {
    title: "About Funnelar | Amazon Marketing Experts",
    description:
      "Learn about Funnelar, our team of Amazon marketing experts, and our mission to help businesses thrive in the Amazon marketplace.",
    keywords: ["About Funnelar", "Amazon Marketing Agency", "Amazon Experts"],
    ogImage: "/about-og-image.jpg",
  },
  blog: {
    title: "Amazon Marketing Blog | Funnelar",
    description: "Insights, strategies, and tips to grow your Amazon business from the experts at Funnelar.",
    keywords: ["Amazon Blog", "Amazon Marketing Tips", "Amazon Seller Resources"],
    ogImage: "/blog-og-image.jpg",
  },
  contact: {
    title: "Contact Funnelar | Amazon Marketing Experts",
    description: "Get in touch with our team of Amazon experts to start growing your business today.",
    keywords: ["Contact Funnelar", "Amazon Marketing Agency", "Amazon Consultation"],
    ogImage: "/contact-og-image.jpg",
  },
  faq: {
    title: "Frequently Asked Questions | Funnelar",
    description: "Find answers to common questions about Amazon selling and our services at Funnelar.",
    keywords: ["Amazon FAQ", "Amazon Marketing FAQ", "Amazon Seller Questions"],
    ogImage: "/faq-og-image.jpg",
  },
}

export function getPageMetadata(page: string): Metadata {
  const metadata = pageMetadata[page] || defaultMetadata

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      images: metadata.ogImage ? [metadata.ogImage] : undefined,
      type: "website",
      siteName: "Funnelar",
      url: `https://funnelar.io/${page === "home" ? "" : page}`,
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: metadata.ogImage ? [metadata.ogImage] : undefined,
    },
  }
}
