import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import AnimateOnScroll from "@/components/animate-on-scroll"

export default function ServicesPage() {
  const serviceCategories = [
    {
      name: "Installation of Industrial Machinery",
      description:
        "Professional setup and commissioning of heavy equipment for manufacturing and production facilities.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Industrial Process Control Systems",
      description:
        "Installation and configuration of automation and control units for optimized industrial operations.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Communications Equipment Setup",
      description: "Expert installation of specialized electronic systems for industrial communication networks.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Mainframe & Computer Systems",
      description: "Installation and configuration of large-scale computing hardware for data processing needs.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Irradiation & Electromedical Equipment",
      description: "Specialized placement and setup of sensitive medical systems with precision and care.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Machinery Dismantling",
      description: "Safe removal and breakdown of large industrial setups with minimal disruption to operations.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Millwright Services",
      description: "Precision assembly and alignment of machinery for optimal performance and longevity.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Machine Rigging",
      description: "Expert lifting, moving, and installing of heavy machinery with specialized equipment.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Bowling Alley Equipment Installation",
      description: "Specialized setup for leisure facilities with attention to detail and precision.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Engineering Design & Consulting",
      description:
        "Technical planning and design across disciplines including mechanical, civil, electrical, and systems engineering.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Project Management (Construction)",
      description: "Comprehensive oversight of engineering and building projects from planning to completion.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const engineeringServices = [
    "Mechanical Engineering",
    "Civil Engineering",
    "Electrical Engineering",
    "Systems Engineering",
    "Hydraulic Engineering",
    "Traffic Engineering",
    "Mining Engineering",
    "Chemical Engineering",
    "Safety Engineering",
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up">Our Services</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-up" style={{ animationDelay: "100ms" }}>
              Comprehensive solutions tailored to meet your industrial and engineering needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Solutions We Provide</h2>
              <div className="section-divider mx-auto"></div>
              <p className="text-gray-700 max-w-3xl mx-auto mt-4">
                DeFa Global offers a comprehensive range of services designed to support your business operations and
                infrastructure needs.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((service, index) => (
              <AnimateOnScroll key={index} delay={(index % 3) * 100}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md card-hover border border-gray-200 h-full">
                  <div className="relative h-48">
                    <Image src={service.image || "/placeholder.svg"} alt={service.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">{service.name}</h3>
                    <p className="text-gray-700 mb-4">{service.description}</p>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      <Link href={`/contact?service=${encodeURIComponent(service.name)}`}>Enquire Now</Link>
                    </Button>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Engineering Services"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Engineering Design & Consulting</h2>
                <div className="section-divider"></div>
                <p className="text-gray-700">
                  Our team of experienced engineers provides comprehensive design and consulting services across various
                  engineering disciplines. We work closely with clients to understand their specific requirements and
                  deliver tailored solutions.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                  {engineeringServices.map((service, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <Button asChild className="bg-secondary hover:bg-secondary-light text-white">
                    <Link href="/contact?service=Engineering">Request Consultation</Link>
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Service Process</h2>
              <div className="section-divider mx-auto"></div>
              <p className="text-gray-700 max-w-3xl mx-auto mt-4">
                We follow a structured approach to ensure high-quality service delivery and client satisfaction.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "We begin with a thorough consultation to understand your specific requirements and objectives.",
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "Our team develops a detailed plan outlining the scope, timeline, and resources needed for your project.",
              },
              {
                step: "03",
                title: "Execution",
                description: "We implement the plan with precision, keeping you informed throughout the process.",
              },
              {
                step: "04",
                title: "Support",
                description:
                  "After completion, we provide ongoing support to ensure everything continues to function optimally.",
              },
            ].map((process, index) => (
              <AnimateOnScroll key={index} delay={index * 100}>
                <div className="bg-white p-8 rounded-lg shadow-md card-hover h-full relative">
                  <div className="absolute -top-4 -left-4 bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 mt-4">{process.title}</h3>
                  <p className="text-gray-700">{process.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact our team today to discuss how our services can benefit your business and projects.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary-light text-white">
                <Link href="/contact">Contact Us Today</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Link href="/products">Explore Our Products</Link>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
