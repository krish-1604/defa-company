"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Mail, Phone, Clock } from "lucide-react"
import AnimateOnScroll from "@/components/animate-on-scroll"
import { useSearchParams } from "next/navigation"

export default function ContactPage() {
  const searchParams = useSearchParams()
  const productParam = searchParams.get("product")
  const serviceParam = searchParams.get("service")

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    interest: productParam || serviceParam || "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interest: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSuccess(true)

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSuccess(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        interest: "",
        message: "",
      })
    }, 5000)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up">Contact Us</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-up" style={{ animationDelay: "100ms" }}>
              Get in touch with our team for inquiries, quotes, or support.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <AnimateOnScroll>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Get In Touch</h2>
                  <div className="section-divider"></div>
                  <p className="text-gray-700 mt-4">
                    We'd love to hear from you. Please fill out the form or contact us using the information below.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">Our Location</h4>
                      <p className="text-gray-700">
                        Shams Business Center, Sharjah Media City free Zone, Al Messaned, Sharjah, UAE.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">Email Us</h4>
                      <a
                        href="mailto:contact@defaglobal.com"
                        className="text-gray-700 hover:text-primary transition-colors"
                      >
                        contact@defaglobal.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">Call Us</h4>
                      <a href="tel:+971XXXXXXXXX" className="text-gray-700 hover:text-primary transition-colors">
                        +971 XX XXX XXXX
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">Working Hours</h4>
                      <p className="text-gray-700">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 2:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Office Location"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h3>

                {isSuccess ? (
                  <div className="bg-green-50 p-6 rounded-lg text-center animate-fade-in">
                    <h4 className="text-green-700 font-bold text-lg mb-2">Thank You!</h4>
                    <p className="text-green-600">
                      Your message has been submitted successfully. We will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="Your phone number"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Your company name"
                          value={formData.company}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interest">Interested In *</Label>
                      <Select onValueChange={handleSelectChange} value={formData.interest}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a product/service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="building-materials">Building Materials</SelectItem>
                          <SelectItem value="tower-cranes">Tower Cranes & Hoists</SelectItem>
                          <SelectItem value="motor-pumps">Motor-Pumps</SelectItem>
                          <SelectItem value="industrial-parts">Industrial Parts</SelectItem>
                          <SelectItem value="engineering-services">Engineering Services</SelectItem>
                          <SelectItem value="installation-services">Installation Services</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your requirements"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary-light" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Submit Message"}
                    </Button>
                  </form>
                )}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Location</h2>
              <div className="section-divider mx-auto"></div>
              <p className="text-gray-700 max-w-3xl mx-auto mt-4">
                Visit us at our headquarters in Sharjah Media City, Sharjah, UAE.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image src="/placeholder.svg?height=800&width=1600" alt="Map Location" fill className="object-cover" />
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
