"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/logo.png" alt="DeFa Global Logo" width={50} height={50} className="animate-bounce-slow" />
          <span
            className={cn("font-bold text-xl transition-colors duration-300", scrolled ? "text-primary" : "text-white")}
          >
            DeFa Global
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "font-medium transition-colors duration-300 hover:text-secondary",
                pathname === link.href ? "text-secondary" : scrolled ? "text-primary" : "text-white",
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="bg-secondary hover:bg-secondary-light text-white">
            <Link href="/contact">Enquiry Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-primary" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? (
            <X className={scrolled ? "text-primary" : "text-white"} size={24} />
          ) : (
            <Menu className={scrolled ? "text-primary" : "text-white"} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "py-4 text-lg font-medium border-b border-gray-200",
                pathname === link.href ? "text-secondary" : "text-primary",
              )}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="mt-6 bg-secondary hover:bg-secondary-light text-white">
            <Link href="/contact" onClick={closeMenu}>
              Enquiry Now
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
