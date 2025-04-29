import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export function NavLinks() {
  return (
    <>
      <Link href="/" className="text-gray-800 hover:text-primary font-medium">
        Home
      </Link>

      {/* Our Services */}
      <DropdownMenu>
        <DropdownMenuTrigger className="text-gray-800 hover:text-primary font-medium flex items-center">
          Our Services <ChevronDown className="ml-1 h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {services.map((item) => (
            <DropdownMenuItem key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <Link
        href="/case-studies"
        className="text-gray-800 hover:text-primary font-medium"
      >
        Case Studies
      </Link>

      {/* More */}
      <DropdownMenu>
        <DropdownMenuTrigger className="text-gray-800 hover:text-primary font-medium flex items-center">
          More <ChevronDown className="ml-1 h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {more.map((item) => (
            <DropdownMenuItem key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
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
