"use client";

import { FallbackImage } from "@/components/fallback-image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { NavLinks } from "./ui/NavLinks";
import { MobileNavLinks } from "./ui/MobileNavLinks";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    open: { opacity: 1, height: "auto", display: "block" },
    closed: { opacity: 0, height: 0, transitionEnd: { display: "none" } },
  };

  return (
    <nav className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 w-full shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <FallbackImage
                  src="/logo.png"
                  alt="Funnelar"
                  width={180}
                  height={50}
                  priority
                  className="h-10 w-auto"
                />
              </motion.div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLinks />
            <Button
              size="sm"
              className="bg-primary hover:bg-secondary text-white"
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

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Panel */}
      <motion.div
        className="md:hidden"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          <MobileNavLinks closeMenu={() => setIsOpen(false)} />
        </div>
      </motion.div>
    </nav>
  );
}
