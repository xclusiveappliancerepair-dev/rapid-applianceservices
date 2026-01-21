import { Phone, Mail, CheckCircle, Clock, Award, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

export default function JennAirRepairPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary text-white py-20">
        <div className="absolute inset-0 bg-[url('/abstract-tech-pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Jenn-Air Appliance Repair Services</h1>
            <p className="text-xl text-primary-foreground/90 mb-8 text-pretty">
              Professional Jenn-Air Repair in Palm Springs and Surrounding Areas
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
                src="/technician-repairing-jenn-air-appliance.jpg"
                alt="Jenn-Air Appliance Repair"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">Jenn-Air Appliance Repair Services Palm Springs</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At <strong>Rapid Appliance Service</strong>, we understand the importance of functional home
                  appliances. That's why we offer top-notch <strong>Jenn-Air appliance repair services</strong> in{" "}
                  <strong>Palm Springs</strong> and the surrounding areas.
                </p>
                <p>
                  Our team of experienced <strong>Jenn-Air repair</strong> technicians is trained to handle all types of
                  Jenn-Air appliances, including <strong>refrigerators</strong>, <strong>ovens</strong>,{" "}
                  <strong>stoves</strong>, and more.
                </p>
                <p>
                  Whether you are experiencing a minor issue like a faulty light or a major problem like a
                  malfunctioning compressor, our technicians have the knowledge and expertise to diagnose and fix the
                  problem quickly and efficiently. We use only genuine <strong>Jenn-Air</strong> parts to ensure the
                  best possible <strong>repair</strong> results.
                </p>
                <p>
                  Our goal is to provide our customers with the best possible service, including being available
                  whenever you need us. That's why we offer{" "}
                  <strong>same-day Jenn-Air appliance repair services in Palm Springs</strong>, so you can get your{" "}
                  <strong>appliances</strong> back up and running as quickly as possible.
                </p>
              </div>
            </div>
          </div>

          {/* Maintenance Services */}
          <div className="mb-16 bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl p-12">
            <h2 className="text-4xl font-bold mb-6 text-primary">
              Jenn-Air Appliance Repair & Maintenance Services in Palm Springs
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                At <strong>Rapid Appliance Service</strong>, regular maintenance is key to keeping your{" "}
                <strong>Jenn-Air appliances</strong> in top working condition. That's why we offer comprehensive{" "}
                <strong>Jenn-Air appliance repair & maintenance services in Palm Springs</strong> and the surrounding
                areas.
              </p>
              <p>
                Our <strong>maintenance services</strong> include cleaning, inspection, and routine maintenance tasks
                that can help prevent major problems from occurring down the line. Regularly maintaining your Jenn-Air
                appliances can extend their lifespan and avoid costly repairs.
              </p>
              <p>
                Our team of experienced technicians is trained to perform all types of{" "}
                <strong>Jenn-Air appliance</strong> maintenance, including refrigerator coil cleaning, oven calibration,
                and stove burner adjustment. We use only genuine Jenn-Air parts to ensure your appliances function at
                their best.
              </p>
              <p>
                Whether you need a one-time maintenance service or a regular maintenance plan, we can help. Contact us
                today to schedule your <strong>Jenn-Air appliance maintenance</strong> service in{" "}
                <strong>Palm Springs</strong>.
              </p>
            </div>
          </div>

          {/* Why Fix Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-primary">Why Fix Your Jenn-Air?</h2>
            <div className="bg-white rounded-2xl p-8 border border-border shadow-lg">
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  The answer is simple. Not only is your brand prestige and credible, but once it's fixed, it works as
                  you bought it! We do our best to <strong>service</strong> and <strong>repair</strong> your{" "}
                  <strong>Jenn-Air</strong> equipment. We will leave your home once it's working like new.
                </p>
                <p>
                  We know all the updates your device needs, and our technicians are outstanding at what they do. Save
                  money and never have to buy a new machine. Investing in high-tech equipment like the Jenn-Air is both
                  easy and costly. Therefore, we strive to meet all your needs and requirements when repairing this
                  equipment.
                </p>
                <p>
                  Customers want their devices to last as long as possible without unnecessary replacements. You can
                  always expect a long service life with proper maintenance of your device. Some technicians are looking
                  to fix these machines quickly and easily. Still, even if this eliminates the problem temporarily,
                  getting a proper and lengthy diagnosis and getting the <strong>repairs</strong> needed is imperative.
                </p>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">Why Choose Rapid Appliance Service</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-border hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Expert Technicians</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Certified professionals with extensive training in Jenn-Air appliance systems.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-border hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Same-Day Service</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fast response and same-day repairs to get your appliances working quickly.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-border hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Genuine Parts</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Only authentic Jenn-Air parts used for all repairs and maintenance.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-border hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Quality Guarantee</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive warranty on all repairs for your complete peace of mind.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Need Jenn-Air Appliance Repair?</h2>
            <p className="text-xl text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
              Get in touch with us for expert Jenn-Air appliance repair and maintenance services
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
                <Link href="/contact-us">Contact Us</Link>
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
