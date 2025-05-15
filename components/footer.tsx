import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const productCategories = [
    "Wood & Timber",
    "Paints & Varnishes",
    "Construction Materials",
    "Wallpaper & Floor Coverings",
    "Flat Glass",
    "Hardware & Locks",
    "Fittings & Fixtures",
    "Hot Water Heaters",
    "Sanitary Ware",
    "Plumbing Equipment",
    "Hand Tools",
  ]

  const services = [
    "Industrial Machinery Installation",
    "Process Control Systems",
    "Communications Equipment Setup",
    "Computer Systems Installation",
    "Machinery Dismantling",
    "Millwright Services",
    "Machine Rigging",
    "Engineering Design & Consulting",
    "Project Management",
  ]

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
  ]

  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 animate-fade-up">
            <div className="flex items-center space-x-2">
              <Image src="/images/logo.png" alt="DeFa Global Logo" width={40} height={40} />
              <span className="font-bold text-xl">DeFa Global</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <p className="text-sm">
                  Shams Business Center, Sharjah Media City free Zone, Al Messaned, Sharjah, UAE.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={18} />
                <a href="mailto:contact@defaglobal.com" className="text-sm hover:text-secondary transition-colors">
                  contact@defaglobal.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={18} />
                <a href="tel:+971XXXXXXXXX" className="text-sm hover:text-secondary transition-colors">
                  +971 XX XXX XXXX
                </a>
              </div>
            </div>
          </div>

          {/* Product Categories */}
          <div className="space-y-4 animate-fade-up" style={{ animationDelay: "100ms" }}>
            <h4 className="font-bold text-lg border-b border-secondary pb-2">Product Categories</h4>
            <ul className="space-y-2">
              {productCategories.slice(0, 6).map((category, index) => (
                <li key={index}>
                  <Link href="/products" className="text-sm hover:text-secondary transition-colors">
                    {category}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/products" className="text-sm text-secondary hover:underline">
                  View All Products →
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4 animate-fade-up" style={{ animationDelay: "200ms" }}>
            <h4 className="font-bold text-lg border-b border-secondary pb-2">Our Services</h4>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link href="/services" className="text-sm hover:text-secondary transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm text-secondary hover:underline">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links & Social */}
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: "300ms" }}>
            <div className="space-y-4">
              <h4 className="font-bold text-lg border-b border-secondary pb-2">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm hover:text-secondary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm hover:text-secondary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-sm hover:text-secondary transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-sm hover:text-secondary transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm hover:text-secondary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-lg border-b border-secondary pb-2">Connect With Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-white text-primary p-2 rounded-full hover:bg-secondary transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} DeFa Global Group of Companies LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
