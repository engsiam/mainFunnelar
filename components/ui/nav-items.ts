// nav-items.ts
export const navItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Our Services",
      href: "/our-services",
      children: [
        { label: "All Services", href: "/our-services" },
        { label: "Facebook Ads", href: "/our-services/facebook-ads" },
        { label: "Amazon SEO", href: "/our-services/amazon-seo" },
        { label: "PPC Management", href: "/our-services/ppc-management" },
        { label: "Listing Optimization", href: "/our-services/listing-optimization" },
        { label: "Product Photography", href: "/our-services/product-photography" },
        { label: "Review Management", href: "/our-services/review-management" },
        { label: "Brand Growth", href: "/our-services/brand-growth" },
      ],
    },
    {
      label: "Case Studies",
      href: "/case-studies",
    },
    {
      label: "More",
      children: [
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "FAQ", href: "/faq" },
        { label: "Blog", href: "/blog" },
      ],
    },
  ];
  