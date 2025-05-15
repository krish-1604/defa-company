"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

export default function EnquiryForm({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const toggleForm = () => {
    setIsOpen(!isOpen)
  }

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

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSuccess(false)
      setIsOpen(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "",
        message: "",
      })
    }, 3000)
  }

  return (
    <>
      <Button
        onClick={toggleForm}
        className={cn(
          "fixed right-0 top-1/2 -translate-y-1/2 rotate-90 origin-right z-40 bg-secondary hover:bg-secondary-light text-white shadow-lg",
          className,
        )}
      >
        Enquiry Now
      </Button>

      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-50 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={toggleForm}
      />

      <div
        className={cn(
          "fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-xl transition-transform duration-300 ease-in-out transform",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="p-6 h-full overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-primary">Send an Enquiry</h3>
            <Button variant="ghost" size="icon" onClick={toggleForm} className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </Button>
          </div>

          {isSuccess ? (
            <div className="bg-green-50 p-6 rounded-lg text-center animate-fade-in">
              <h4 className="text-green-700 font-bold text-lg mb-2">Thank You!</h4>
              <p className="text-green-600">
                Your enquiry has been submitted successfully. We will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
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
                <Label htmlFor="email">Email Address</Label>
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

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
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
                <Label htmlFor="interest">Interested In</Label>
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
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your requirements"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary-light" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Submit Enquiry"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </>
  )
}
