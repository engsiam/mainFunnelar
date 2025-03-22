"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { FallbackImage } from "@/components/fallback-image"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuVariants = {
    open: { opacity: 1, height: "auto", display: "block" },
    closed: { opacity: 0, height: 0, transitionEnd: { display: "none" } },
  }

  return (
    <nav className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 w-full shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
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

          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <Button size="sm" className="bg-primary hover:bg-secondary text-white">
              Get Started
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

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
  )
}

function NavLinks() {
  return (
    <>
      <Link href="/" className="text-gray-800 hover:text-primary font-medium">
        Home
      </Link>
      <Link href="/our-services" className="text-gray-800 hover:text-primary font-medium">
        Our Services
      </Link>
      <Link href="/ppc-management" className="text-gray-800 hover:text-primary font-medium">
        PPC Management
      </Link>
      <Link href="/case-studies" className="text-gray-800 hover:text-primary font-medium">
        Case Studies
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger className="text-gray-800 hover:text-primary font-medium flex items-center">
          More <ChevronDown className="ml-1 h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href="/about">About Us</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/contact">Contact</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/faq">FAQ</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/blog">Blog</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

function MobileNavLinks({ closeMenu }: { closeMenu: () => void }) {
  return (
    <>
      <Link
        href="/"
        className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-purple-100"
        onClick={closeMenu}
      >
        Home
      </Link>
      <Link
        href="/our-services"
        className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-purple-100"
        onClick={closeMenu}
      >
        Our Services
      </Link>
      <Link
        href="/ppc-management"
        className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-purple-100"
        onClick={closeMenu}
      >
        PPC Management
      </Link>
      <Link
        href="/case-studies"
        className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-purple-100"
        onClick={closeMenu}
      >
        Case Studies
      </Link>
      <Link
        href="/blog"
        className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-purple-100"
        onClick={closeMenu}
      >
        Blog
      </Link>
      <Link
        href="/about"
        className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-purple-100"
        onClick={closeMenu}
      >
        About Us
      </Link>
      <Link
        href="/contact"
        className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-purple-100"
        onClick={closeMenu}
      >
        Contact
      </Link>
      <Link
        href="/faq"
        className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-purple-100"
        onClick={closeMenu}
      >
        FAQ
      </Link>
    </>
  )
}

