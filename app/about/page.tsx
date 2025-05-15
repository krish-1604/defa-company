import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import AnimateOnScroll from "@/components/animate-on-scroll"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up">About Us</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-up" style={{ animationDelay: "100ms" }}>
              Learn more about DeFa Global Group of Companies LLC and our commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="DeFa Global Team"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Who We Are</h2>
                <div className="section-divider"></div>
                <p className="text-gray-700">
                  DeFa Global Group of Companies LLC is a diversified international trading and service company based in
                  Sharjah, United Arab Emirates. We specialize in the supply of mechanical and industrial parts,
                  construction equipment, air handling solutions, pumps, tower cranes, hoists, and building materials,
                  serving markets across the Middle East, Asia, and Africa.
                </p>
                <p className="text-gray-700">
                  Built on decades of experience in industrial procurement, technical services, and global supply chain
                  management, DeFa Global is committed to delivering quality-driven solutions tailored to the complex
                  needs of modern industry.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What We Do</h2>
              <div className="section-divider mx-auto"></div>
              <p className="text-gray-700 max-w-3xl mx-auto mt-4">
                Our wide-ranging operations are structured into four main verticals:
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Industrial Parts & Mechanical Equipment",
                description:
                  "Supplying precision-engineered parts including valves, gaskets, motors, seals, and air solutions for industrial applications.",
              },
              {
                title: "Construction Equipment & Building Materials",
                description:
                  "Providing top-tier building materials along with tower cranes, hoists, scaffolding, and site infrastructure equipment.",
              },
              {
                title: "Motor & Pump Services",
                description:
                  "Offering specialized repairing, rewinding, and maintenance services for electric motors, pumps, and rotating machinery.",
              },
              {
                title: "International Trading",
                description:
                  "Exporting high-demand commodities such as fertilizers, coconut & coir products, and limestone, backed by reliable logistics and compliance.",
              },
            ].map((vertical, index) => (
              <AnimateOnScroll key={index} delay={index * 100}>
                <div className="bg-white p-8 rounded-lg shadow-md card-hover h-full">
                  <h3 className="text-xl font-bold text-primary mb-4">{vertical.title}</h3>
                  <p className="text-gray-700">{vertical.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <AnimateOnScroll>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Vision</h2>
                <div className="section-divider"></div>
                <p className="text-xl text-gray-700">
                  To be a globally respected trading and engineering partner, delivering exceptional products and
                  solutions that empower industries to grow and thrive.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Mission</h2>
                <div className="section-divider"></div>
                <ul className="space-y-3">
                  {[
                    "Deliver top-quality industrial products and services to meet client needs",
                    "Provide responsive, reliable, and long-term support to our partners",
                    "Uphold ethical business practices and global trade standards",
                    "Continuously innovate and expand into new markets",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Core Values</h2>
              <div className="section-divider mx-auto"></div>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              {
                title: "Integrity",
                description: "We act with honesty and honor our commitments",
              },
              {
                title: "Quality",
                description: "We strive for excellence in every product and service",
              },
              {
                title: "Customer Focus",
                description: "Our clients' success is our top priority",
              },
              {
                title: "Adaptability",
                description: "We evolve with industry trends and client needs",
              },
              {
                title: "Partnership",
                description: "We believe in building lasting business relationships",
              },
            ].map((value, index) => (
              <AnimateOnScroll key={index} delay={index * 100}>
                <div className="bg-white p-6 rounded-lg shadow-md card-hover text-center h-full border-t-4 border-secondary">
                  <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll delay={200}>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Why Choose Us</h2>
                <div className="section-divider"></div>
                <ul className="space-y-4">
                  {[
                    "Extensive experience in industrial procurement and trading",
                    "Strong regional and international supplier networks",
                    "Technical capabilities in equipment maintenance and support",
                    "Commitment to timely delivery, compliance, and customer satisfaction",
                    "Strategic UAE location with global logistics connectivity",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Button asChild className="bg-secondary hover:bg-secondary-light text-white">
                    <Link href="/contact">
                      Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="DeFa Global Facility"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-secondary flex-shrink-0 mx-auto md:mx-0">
                  <Image src="/placeholder.svg?height=200&width=200" alt="Founder" fill className="object-cover" />
                </div>
                <div className="space-y-4 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-primary">Founder's Message</h3>
                  <p className="text-gray-700 italic">
                    "We started with a simple mission — make quality accessible. At DeFa Global, we believe that
                    excellence in industrial products and services should be available to businesses of all sizes. Our
                    commitment to this principle has guided our growth and continues to drive our innovation."
                  </p>
                  <p className="font-bold text-primary">- Founder & CEO</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact our team today to discuss how DeFa Global can support your business needs.
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
