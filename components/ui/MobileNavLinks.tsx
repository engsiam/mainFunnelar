"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { MobileMenuItem } from "./MobileMenuItem";

export function MobileNavLinks({ closeMenu }: { closeMenu: () => void }) {
  const [showServices, setShowServices] = useState(false);
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <MobileMenuItem href="/" label="Home" closeMenu={closeMenu} />

      {/* Services */}
      <button
        className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-purple-100 flex justify-between items-center"
        onClick={() => setShowServices(!showServices)}
      >
        Our Services
        {showServices ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>
      {showServices &&
        services.map((item) => (
          <MobileMenuItem
            key={item.href}
            href={item.href}
            label={item.label}
            closeMenu={closeMenu}
            nested
          />
        ))}

      <MobileMenuItem
        href="/case-studies"
        label="Case Studies"
        closeMenu={closeMenu}
      />

      {/* More */}
      <button
        className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-purple-100 flex justify-between items-center"
        onClick={() => setShowMore(!showMore)}
      >
        More
        {showMore ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>
      {showMore &&
        more.map((item) => (
          <MobileMenuItem
            key={item.href}
            href={item.href}
            label={item.label}
            closeMenu={closeMenu}
            nested
          />
        ))}
    </>
  );
}

const services = [
  { label: "All Services", href: "/our-services" },
  { label: "Facebook Ads", href: "/our-services/facebook-ads" },
  { label: "Amazon SEO", href: "/our-services/amazon-seo" },
  { label: "PPC Management", href: "/our-services/ppc-management" },
  { label: "Listing Optimization", href: "/our-services/listing-optimization" },
  { label: "Product Photography", href: "/our-services/product-photography" },
  { label: "Review Management", href: "/our-services/review-management" },
  { label: "Brand Growth", href: "/our-services/brand-growth" },
];

const more = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
];
