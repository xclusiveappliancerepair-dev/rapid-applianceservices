import { Phone, Wrench, Clock, Shield, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

export default function FisherPaykelRepairPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary text-white py-20">
        <div className="absolute inset-0 bg-[url('/abstract-tech-pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Fisher & Paykel Appliance Repair</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 text-pretty">
              Expert Fisher & Paykel Repair & Service in Palm Springs
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-neutral-50">
                <a href="tel:877-770-0157">
                  <Phone className="mr-2 h-5 w-5" />
                  877-770-0157
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 bg-transparent"
              >
                <Link href="/contact-us">Get Estimate</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/technician-repairing-fisher-paykel-appliance.jpg"
                alt="Fisher & Paykel Appliance Repair"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">Fisher & Paykel Repair Centre</h2>
              <h3 className="text-2xl font-semibold mb-4 text-secondary">
                Fisher & Paykel Repair & Service Palm Springs
              </h3>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At <strong>Rapid Appliance Service</strong>, we proudly offer top-quality{" "}
                  <strong>repair for Fisher & Paykel appliances in Palm Springs</strong>. Our team of experienced
                  technicians is trained to handle any <strong>repair</strong> needs for your{" "}
                  <strong>Fisher & Paykel appliances</strong>, whether a refrigerator, oven, dishwasher or any other
                  appliance.
                </p>
                <p>
                  We understand how frustrating it can be when your appliance breaks down, and that's why we offer
                  same-day service and <strong>emergency repairs</strong> to get your{" "}
                  <strong>Fisher & Paykel appliance</strong> back up and running as quickly as possible. Our technicians
                  have the latest tools and knowledge to diagnose and repair any issue with your{" "}
                  <strong>Fisher & Paykel appliance</strong>, ensuring it functions optimally.
                </p>
              </div>
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4 text-primary">Get in touch with us.</h4>
                <a
                  href="tel:877-770-0157"
                  className="inline-flex items-center gap-2 text-2xl font-bold text-secondary hover:text-secondary/80 transition-colors"
                >
                  <Phone className="h-6 w-6" />
                  877-770-0157
                </a>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-primary">
              Why Choose us - Fisher & Paykel Repair?
            </h2>
            <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-8 md:p-12">
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Regular maintenance is essential to keep your <strong>Fisher & Paykel appliances</strong> functioning
                  smoothly and efficiently. <strong>Rapid Appliance Service</strong> offers comprehensive maintenance
                  services for all types of <strong>Fisher & Paykel appliances repair</strong>, including refrigerators,
                  dishwashers, ovens, and more.
                </p>
                <p>
                  Our maintenance services are designed to identify and fix potential issues with your{" "}
                  <strong>Fisher & Paykel appliances</strong> before they become major problems. We use advanced tools
                  and techniques to thoroughly inspect and clean your appliance, ensuring it operates at its best.
                </p>
                <p>
                  You can extend their lifespan and prevent costly repairs by investing in regular maintenance for your
                  Fisher & Paykel appliances. Contact us today to schedule a maintenance appointment for your{" "}
                  <strong>Fisher & Paykel appliance repair</strong>, and let us help you keep your appliances running
                  smoothly for years to come.
                </p>
                <p>
                  If you own a Fisher & Paykel appliance, you know and love quality and reliability with a high-end
                  touch. However, everything requires maintenance and care from time to time, and when something stops
                  working or fails, it can be tedious and time-consuming. We want things always to work. So when your
                  appliance stops working, you need fast, reliable, and affordable home appliance repair services.{" "}
                  <strong>Palm Springs</strong> has only one <strong>Fisher & Paykel appliance repair service</strong>:
                  Rapid Appliance Repair Services.
                </p>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Expert Technicians</h3>
              <p className="text-muted-foreground">Trained and certified in Fisher & Paykel appliance repair</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Same-Day Service</h3>
              <p className="text-muted-foreground">Emergency repairs available to minimize downtime</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Quality Parts</h3>
              <p className="text-muted-foreground">Genuine Fisher & Paykel parts for lasting repairs</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Guaranteed Work</h3>
              <p className="text-muted-foreground">100% satisfaction guarantee on all repairs</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-primary via-primary/90 to-secondary rounded-2xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Phone className="h-8 w-8 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Call us</h3>
                <a href="tel:877-770-0157" className="text-lg hover:underline">
                  877-770-0157
                </a>
              </div>
              <div>
                <Clock className="h-8 w-8 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Opening hours</h3>
                <p>Mon - Sat 08:00AM - 6:00PM</p>
                <p>Sunday - Closed</p>
              </div>
              <div>
                <div className="h-8 w-8 mx-auto mb-4 flex items-center justify-center">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Address</h3>
                <p>74711 Dillon Rd</p>
                <p>SPC 33</p>
                <p>Desert Hot Springs, CA, 92241</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
