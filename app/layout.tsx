import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import EnquiryForm from "@/components/enquiry-form"
import ScrollToTop from "@/components/scroll-to-top"
import AnimateScrollEffect from "@/components/animate-scroll-effect"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DeFa Global Group of Companies LLC",
  description:
    "A UAE-based trading and service-oriented company specializing in the international trading of mechanical parts, industrial equipment, building materials, and more.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="min-h-screen pt-16">{children}</main>
          <EnquiryForm />
          <ScrollToTop />
          <AnimateScrollEffect />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
