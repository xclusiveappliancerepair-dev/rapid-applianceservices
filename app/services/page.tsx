import { Wrench, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { BrandsCarousel } from "@/components/brands-carousel"

const services = [
  {
    title: "Range Repair",
    description:
      "If your range is experiencing issues, our team can help. We can quickly diagnose and repair any issue with your range, including faulty burners, damaged knobs.",
    href: "/range-repair", // Fixed href to point to correct page
  },
  {
    title: "Stove Repair",
    description:
      "Don't let a broken stove disrupt your cooking routine. Our expert technicians can diagnose and repair any issue with your stove malfunctioning controls.",
    href: "/stove-repair", // Fixed href
  },
  {
    title: "Washer Repair",
    description:
      "A broken washing machine can cause a lot of stress. Our team can quickly diagnose and repair any issue with your washer, including faulty pumps, damaged belts, or malfunctioning control panels.",
    href: "/washer-repair", // Fixed href
  },
  {
    title: "Refrigerator Repair",
    description:
      "When your refrigerator breaks down, it can be a major inconvenience. Our team can diagnose and repair any issue with your fridge, including faulty compressors, damaged thermostats, or malfunctioning fans.",
    href: "/refrigerator-repair", // Fixed href
  },
  {
    title: "Dishwasher Repair",
    description:
      "Our expert technicians can diagnose and repair any issue with your dishwasher, from leaks and clogs to malfunctioning components.",
    href: "/dishwasher-repair", // Fixed href
  },
  {
    title: "Cooktop Repair",
    description:
      "Don't let a broken cooktop ruin your mealtime routine. We can quickly repair any issue with your cooktop, including faulty burners, damaged knobs, or malfunctioning controls.",
    href: "/cooktop-repair", // Fixed href - removed palm-springs prefix
  },
  {
    title: "Dryer Repair",
    description:
      "A malfunctioning dryer can be frustrating and time-consuming. Our team can diagnose and repair any issue with your dryer, including faulty thermostats, damaged belts, or malfunctioning control panels.",
    href: "/dryer-repair", // Fixed href
  },
  {
    title: "Oven Repair",
    description:
      "A broken oven can put a damper on your cooking plans. Our expert technicians can diagnose and repair any issue with your oven, from faulty heating elements and broken door seals to malfunctioning control panels.",
    href: "/oven-repair", // Fixed href
  },
]

const brands = [
  { name: "Whirlpool", logo: "/generic-swirl-logo.png" },
  { name: "Admiral", logo: "/admiral-logo.jpg" },
  { name: "GE", logo: "/ge-appliances-logo.jpg" },
  { name: "Magic Chef", logo: "/magic-chef-logo.jpg" },
  { name: "Roper", logo: "/roper-logo.jpg" },
  { name: "Asko", logo: "/asko-logo.jpg" },
  { name: "Amana", logo: "/amana-logo.jpg" },
  { name: "KitchenAid", logo: "/kitchenaid-logo.png" },
  { name: "Electrolux", logo: "/electrolux-logo.jpg" },
  { name: "Hotpoint", logo: "/hotpoint-logo.jpg" },
  { name: "Jenn-Air", logo: "/jenn-air-logo.jpg" },
  { name: "Sharp", logo: "/sharp-logo.jpg" },
  { name: "LG", logo: "/lg-logo-abstract.png" },
  { name: "Samsung", logo: "/samsung-logo.png" },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('/abstract-tech-pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Appliance Repair Services in Palm Springs
            </h1>
            <p className="text-xl text-navy-100 text-pretty">
              Home Appliance Repair Services - Our Services in Palm Springs
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-neutral-700 leading-relaxed">
              At <strong>Rapid Appliance Services</strong>, we are committed to providing our customers with exceptional
              service that meets their unique needs and exceeds their expectations. Our team of experienced
              professionals uses the latest technology and techniques to deliver top-notch services that ensure the
              highest level of quality and precision.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100 hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-coral-100 rounded-xl flex items-center justify-center mb-6">
                  <Wrench className="w-7 h-7 text-coral-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-navy-900">{service.title}</h3>
                <p className="text-neutral-700 leading-relaxed mb-6">{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-coral-500 font-semibold hover:text-coral-600 transition-colors"
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-navy-900">Appliance Brands We Repair</h2>
          <BrandsCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-coral-500 to-coral-600 rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Need Appliance Repair?</h3>
            <p className="text-xl mb-8 text-coral-50">Contact us today for fast, professional service</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:877-770-0157"
                className="inline-flex items-center justify-center gap-2 bg-white text-coral-500 px-8 py-4 rounded-lg font-semibold hover:bg-neutral-50 transition-colors"
              >
                <Phone className="w-5 h-5" />
                877-770-0157
              </a>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 bg-navy-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-navy-800 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
