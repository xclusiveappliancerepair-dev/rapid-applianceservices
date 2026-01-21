import { Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"

const brands = [
  { name: "Admiral", href: "/admiral-repair", logo: "/admiral-appliance-logo.jpg" },
  { name: "Amana", href: "/amana-repair", logo: "/amana-appliance-logo.jpg" },
  { name: "Dacor", href: "/dacor-repair", logo: "/dacor-appliance-logo.jpg" },
  { name: "DSC", href: "/dcs-repair", logo: "/dsc-appliance-logo.jpg" },
  { name: "Fisher & Paykel", href: "/fisher-paykel-repair", logo: "/fisher-paykel-appliance-logo.jpg" },
  { name: "Frigidaire", href: "/frigidaire-repair", logo: "/frigidaire-appliance-logo.jpg" },
  { name: "GE", href: "/ge-repair", logo: "/ge-appliance-logo.jpg" },
  { name: "Hotpoint", href: "/hotpoint-repair", logo: "/hotpoint-appliance-logo.jpg" },
  { name: "Jenn-Air", href: "/jenn-air-repair", logo: "/jenn-air-appliance-logo.jpg" },
  { name: "Kenmore", href: "/kenmore-repair", logo: "/kenmore-appliance-logo.jpg" },
  { name: "KitchenAid", href: "/kitchenaid-repair", logo: "/kitchenaid-appliance-logo.jpg" },
  { name: "LG", href: "/lg-repair", logo: "/lg-appliance-logo.jpg" },
  { name: "Maytag", href: "/maytag-repair", logo: "/maytag-appliance-logo.jpg" },
  { name: "Samsung", href: "/samsung-repair", logo: "/samsung-appliance-logo.jpg" },
  { name: "Sub-Zero", href: "/subzero-repair", logo: "/subzero-appliance-logo.jpg" },
  { name: "Thermador", href: "/thermador-repair", logo: "/thermador-appliance-logo.jpg" },
  { name: "Viking", href: "/viking-repair", logo: "/viking-appliance-logo.jpg" },
  { name: "Wolf", href: "/wolf-repair", logo: "/wolf-appliance-logo.jpg" },
  { name: "Whirlpool", href: "/whirlpool-repair", logo: "/whirlpool-appliance-logo.jpg" },
]

export default function BrandsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary text-white py-20">
        <div className="absolute inset-0 bg-[url('/abstract-tech-pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Appliance Brands We Repair</h1>
            <p className="text-xl text-primary-foreground/90 text-pretty">
              We Are Palm Springs' Rapidly Growing Appliance Repair Center
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/appliance-repair-brands-service.jpg" alt="Appliance Brands" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">Expert Repair for All Major Brands</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At <strong>Rapid Appliance</strong>, we take pride in offering exceptional appliance repair services,
                  comprehensive solutions, equipment installation, and maintenance. Our team of experienced engineers
                  specializes in repairing a wide range of popular appliance brands.
                </p>
                <p>
                  Whether you're facing issues with your appliance equipment or seeking quick and effective solutions,
                  we are here to help. With just a few clicks on our contact form or a single phone call, you can easily
                  schedule a visit.
                </p>
                <p>
                  To ensure a fast and convenient process, we provide a variety of options through our website,
                  including the ability to track the status of your appliance parts orders.
                </p>
                <p>
                  Our goal is to make appliance repairs easy and hassle-free for all residents of Palm Springs. By
                  simply reaching out to us, our skilled technicians will promptly arrive at your location and get the
                  job done on the same day. We have the expertise to repair both domestic and foreign appliances, and
                  you can trust that your appliance equipment and products are in safe hands with us.
                </p>
              </div>
            </div>
          </div>

          {/* Brands Grid */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">Brands We Service</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {brands.map((brand, index) => (
                <Link
                  key={index}
                  href={brand.href}
                  className="bg-white rounded-xl p-6 shadow-lg border border-border hover:shadow-xl hover:border-secondary transition-all group"
                >
                  <div className="flex flex-col items-center justify-center h-full gap-6">
                    <div className="relative w-full h-20 flex items-center justify-center">
                      <Image
                        src={brand.logo || "/placeholder.svg"}
                        alt={`${brand.name} logo`}
                        width={120}
                        height={80}
                        className="object-contain group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <h3 className="text-base font-bold text-foreground text-center mt-2">{brand.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-secondary to-secondary/90 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Having issues with your Home Appliances?</h3>
              <p className="text-secondary-foreground/90 mb-6">Call us now for immediate assistance</p>
              <a
                href="tel:877-770-0157"
                className="inline-flex items-center gap-2 bg-white text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-neutral-50 transition-colors"
              >
                <Phone className="w-5 h-5" />
                877-770-0157
              </a>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Email Us</h3>
              <p className="text-primary-foreground/90 mb-6">Send us your questions or schedule a service</p>
              <a
                href="mailto:rapidappliancerepairservices@gmail.com"
                className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-neutral-50 transition-colors break-all"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">rapidappliancerepairservices@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Component */}
      <Footer />
    </div>
  )
}
