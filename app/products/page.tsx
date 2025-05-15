import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import AnimateOnScroll from "@/components/animate-on-scroll"

export default function ProductsPage() {
  const productCategories = [
    {
      name: "Wood & Timber",
      description: "Wholesale supply of raw and processed timber for construction and manufacturing.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Paints & Varnishes",
      description: "Trade of protective and decorative coating materials for various applications.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Construction Materials",
      description: "Supply of sand, gravel, cement, and general materials for building projects.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Wallpaper & Floor Coverings",
      description: "Wholesale of interior wall and flooring finishes for residential and commercial spaces.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Flat Glass",
      description: "Distribution of construction-grade glass sheets for windows, doors, and facades.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Hardware & Locks",
      description: "Supply of general hardware items and security locks for buildings and furniture.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Fittings & Fixtures",
      description: "Wholesale of building installation accessories for plumbing, electrical, and more.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Hot Water Heaters",
      description: "Trade of water heating units for residential and industrial use with energy-efficient options.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Sanitary Ware",
      description: "Supply of baths, basins, toilets, and sanitary porcelain for bathrooms and kitchens.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Plumbing Installation Equipment",
      description: "Tubes, fittings, taps, and connectors for water and waste systems in buildings.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Hand Tools",
      description: "Distribution of manual tools like hammers, saws, screwdrivers for construction and maintenance.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Tower Cranes & Hoists",
      description: "We supply durable, high-capacity tower cranes and hoists for large-scale building projects.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Motor-pumps",
      description:
        "Our team specializes in the repair, rewinding, and maintenance of electric motors and industrial pumps.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Industrial Parts",
      description:
        "We supply a wide range of mechanical and industrial parts, including valves, gaskets, flanges, and fittings.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up">Our Products</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-up" style={{ animationDelay: "100ms" }}>
              Explore our comprehensive range of high-quality products for various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Products Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Product Categories</h2>
              <div className="section-divider mx-auto"></div>
              <p className="text-gray-700 max-w-3xl mx-auto mt-4">
                At DeFa Global Group of Companies LLC, we provide a wide range of products that cater to diverse
                industries across the Middle East, Asia, and beyond.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((product, index) => (
              <AnimateOnScroll key={index} delay={(index % 3) * 100}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md card-hover border border-gray-200 h-full">
                  <div className="relative h-64">
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">{product.name}</h3>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      <Link href={`/products#${product.name.toLowerCase().replace(/\s+/g, "-")}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Featured Products</h2>
              <div className="section-divider mx-auto"></div>
              <p className="text-gray-700 max-w-3xl mx-auto mt-4">
                Our most popular and high-demand products across various categories.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {productCategories.slice(11, 14).map((product, index) => (
              <AnimateOnScroll key={index} delay={index * 100}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg card-hover border-t-4 border-secondary h-full">
                  <div className="relative h-72">
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">{product.name}</h3>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <Button asChild className="w-full bg-secondary hover:bg-secondary-light text-white">
                      <Link href={`/contact?product=${encodeURIComponent(product.name)}`}>Request Quote</Link>
                    </Button>
                  </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our team can help you find the right products for your specific requirements. Contact us today for
              personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary-light text-white">
                <Link href="/contact">Request a Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
