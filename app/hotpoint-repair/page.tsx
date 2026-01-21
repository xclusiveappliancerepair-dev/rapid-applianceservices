import { Phone, Mail, CheckCircle, Wrench, Clock, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

export default function HotpointRepairPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary text-white py-20">
        <div className="absolute inset-0 bg-[url('/abstract-tech-pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Hotpoint Appliance Repair Services</h1>
            <p className="text-xl text-primary-foreground/90 mb-8 text-pretty">
              Expert Hotpoint Repair in Palm Springs and Surrounding Areas
            </p>
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8"
            >
              <Link href="/contact-us">Get Estimate</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/technician-repairing-hotpoint-appliance.jpg"
                alt="Hotpoint Appliance Repair"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">Professional Hotpoint Appliance Repair</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At <strong>Rapid Appliance Service</strong>, we understand the importance of having fully functional
                  home appliances. That's why we offer top-notch <strong>Hotpoint appliance repair services</strong> in{" "}
                  <strong>Palm Springs</strong> and the surrounding areas.
                </p>
                <p>
                  Our team of experienced technicians is trained to handle all types of Hotpoint appliances, including{" "}
                  <strong>refrigerators</strong>, <strong>ovens</strong>, <strong>dishwashers</strong>,{" "}
                  <strong>washing machines</strong>, and more.
                </p>
                <p>
                  Whether you're experiencing a minor issue or a major malfunction, we have the knowledge and expertise
                  to diagnose and fix the problem quickly and efficiently.
                </p>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">
              Why Choose Our Hotpoint Repair Service
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-border hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Expert Technicians</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Certified professionals with extensive experience in repairing all Hotpoint appliance models.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-border hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Same-Day Service</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Quick response times with same-day repair services available throughout Palm Springs.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-border hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Genuine Parts</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We use only authentic Hotpoint parts to ensure the best possible repair results.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-border hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Warranty Protection</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All repairs come with a comprehensive warranty for your peace of mind.
                </p>
              </div>
            </div>
          </div>

          {/* Services Offered */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">Hotpoint Appliances We Repair</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                "Hotpoint Refrigerators",
                "Hotpoint Dishwashers",
                "Hotpoint Washing Machines",
                "Hotpoint Dryers",
                "Hotpoint Ovens & Ranges",
                "Hotpoint Cooktops",
                "Hotpoint Microwaves",
                "Hotpoint Freezers",
              ].map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white rounded-lg p-4 border border-border hover:border-secondary transition-all"
                >
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Need Hotpoint Appliance Repair?</h2>
            <p className="text-xl text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
              Contact us today for fast, reliable, and professional Hotpoint appliance repair services in Palm Springs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:877-770-0157"
                className="inline-flex items-center gap-2 bg-white text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-neutral-50 transition-colors text-lg"
              >
                <Phone className="w-5 h-5" />
                877-770-0157
              </a>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary text-lg px-8"
              >
                <Link href="/contact-us">Schedule Service</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-gradient-to-br from-neutral-50 to-neutral-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <Phone className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-xl font-bold mb-2 text-foreground">Call Us</h3>
              <a href="tel:877-770-0157" className="text-lg text-primary hover:text-secondary transition-colors">
                877-770-0157
              </a>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-xl font-bold mb-2 text-foreground">Opening Hours</h3>
              <p className="text-muted-foreground">Mon - Sat: 08:00AM - 6:00PM</p>
              <p className="text-muted-foreground">Sunday - Closed</p>
            </div>
            <div className="text-center">
              <Mail className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-xl font-bold mb-2 text-foreground">Address</h3>
              <p className="text-muted-foreground">74711 Dillon Rd SPC 33</p>
              <p className="text-muted-foreground">Desert Hot Springs, CA 92241</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
