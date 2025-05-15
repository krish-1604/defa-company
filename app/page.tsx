import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building, Cog, Package } from "lucide-react"
import AnimateOnScroll from "@/components/animate-on-scroll"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Oil and gas project"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Building quality, delivering trust.</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Your trusted global partner in industrial trading, recognized for quality, reliability, and service
              excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary-light text-white">
                <Link href="/products">Explore Products</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll className="order-2 md:order-1">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">About Us</h2>
                <div className="section-divider"></div>
                <p className="text-gray-700">
                  DeFa Global Group of Companies LLC is a UAE-based trading and service-oriented company, headquartered
                  in Sharjah Media City, Sharjah. With decades of combined industry knowledge and expertise, we
                  specialize in the international trading of mechanical parts, industrial equipment, building materials,
                  air solutions, cranes, pumps, and more.
                </p>
                <p className="text-gray-700">
                  Founded by a seasoned industry expert with over 30 years of experience in procurement, sales, and
                  service, DeFa Global is built on a foundation of trust, quality, and global connectivity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button asChild className="bg-primary hover:bg-primary-light text-white">
                    <Link href="/about">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll className="order-1 md:order-2" delay={200}>
              <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="DeFa Global Team"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Vision & Mission</h2>
              <div className="section-divider mx-auto"></div>
            </AnimateOnScroll>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimateOnScroll delay={100}>
              <div className="bg-white p-8 rounded-lg shadow-md card-hover border-t-4 border-primary h-full">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  To be a trusted global partner in industrial trading, recognized for quality, reliability, and service
                  excellence.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="bg-white p-8 rounded-lg shadow-md card-hover border-t-4 border-secondary h-full">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  To deliver top-grade mechanical and industrial products while building lasting relationships with our
                  partners worldwide.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Best Products</h2>
              <div className="section-divider mx-auto"></div>
              <p className="text-gray-700 max-w-3xl mx-auto mt-4">
                At DeFa Global Group of Companies LLC, we provide a wide range of products and services that cater to
                diverse industries across the Middle East, Asia, and beyond.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimateOnScroll delay={100}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md card-hover border border-gray-200">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Building Materials & Tower Cranes"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Building className="h-6 w-6 text-primary mr-2" />
                    <h3 className="text-xl font-bold text-primary">Building Materials & Tower Cranes</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    We supply premium construction materials along with durable, high-capacity tower cranes and hoists
                    for large-scale building projects.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    <Link href="/products">Learn More</Link>
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md card-hover border border-gray-200">
                <div className="relative h-64">
                  <Image src="/placeholder.svg?height=400&width=600" alt="Motor-pumps" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Cog className="h-6 w-6 text-primary mr-2" />
                    <h3 className="text-xl font-bold text-primary">Motor-pumps</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Our team specializes in the repair, rewinding, and maintenance of electric motors and industrial
                    pumps for efficient performance.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    <Link href="/products">Learn More</Link>
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md card-hover border border-gray-200">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Industrial Parts"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Package className="h-6 w-6 text-primary mr-2" />
                    <h3 className="text-xl font-bold text-primary">Industrial Parts</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    We supply a wide range of mechanical and industrial parts, including valves, gaskets, flanges,
                    fittings, bearings, and more.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    <Link href="/products">Learn More</Link>
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary-light text-white">
              <Link href="/products">
                View All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What We Offer</h2>
              <div className="section-divider mx-auto"></div>
              <p className="text-gray-700 max-w-3xl mx-auto mt-4">
                Our wide-ranging operations are structured to provide comprehensive solutions for your industrial needs.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Industrial Machinery Installation",
              "Process Control Systems",
              "Communications Equipment Setup",
              "Machinery Dismantling",
              "Millwright Services",
              "Machine Rigging",
              "Engineering Design",
              "Project Management",
              "Consulting Services",
            ].map((service, index) => (
              <AnimateOnScroll key={index} delay={index * 50}>
                <Link
                  href="/services"
                  className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  {service}
                </Link>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-light text-white">
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Discover how DeFa Global can support your business with our extensive range of products and services.
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
