import { Phone, CheckCircle, Wrench, Clock, ThumbsUp, DollarSign } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

export default function SubZeroRepairPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary text-white py-20">
        <div className="absolute inset-0 bg-[url('/abstract-tech-pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">SubZero Repair Palm Springs</h1>
            <p className="text-xl text-primary-foreground/90 mb-8 text-pretty">
              SubZero Appliance Repair Services - Palm Springs SubZero Repair
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-neutral-100 font-semibold text-lg px-8"
              >
                <a href="tel:877-770-0157">
                  <Phone className="mr-2 h-5 w-5" />
                  877-770-0157
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8"
              >
                <Link href="/contact-us">Get Estimate</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Common Issues */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-primary">Common SubZero Appliance Issues</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/technician-repairing-subzero-appliance.jpg"
                  alt="SubZero Appliance Repair"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  <strong>Subzero appliances</strong> are known for their high-quality construction and superior
                  performance. However, like all appliances, they can develop issues over time. Here are some common
                  issues that we see with <strong>Subzero appliances</strong> and how we can help:
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-xl p-6 shadow-md border border-border">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-lg p-3 flex-shrink-0">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">Refrigerator Not Cooling</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      This is a common issue with <strong>Subzero refrigerators</strong> and can be caused by some
                      factors, including a faulty compressor, a clogged condenser coil, or a malfunctioning thermostat.
                      Our technicians can diagnose the issue and make the necessary repairs to restore your fridge to
                      optimal performance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-xl p-6 shadow-md border border-border">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 rounded-lg p-3 flex-shrink-0">
                    <Wrench className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">Ice Maker Not Working</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      If your Subzero ice maker isn't working, it could be due to a clogged water filter, a faulty water
                      inlet valve, or a malfunctioning ice maker module. Our team can troubleshoot the issue and{" "}
                      <strong>Subzero repair</strong> or replace the necessary parts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-xl p-6 shadow-md border border-border">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-lg p-3 flex-shrink-0">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">Loud Noises</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      If your <strong>Subzero appliance</strong> is making loud or unusual noises, it could be due to a
                      faulty compressor, a worn-out fan blade, or a loose motor mount. Our technicians can identify the
                      source of the noise and make the necessary <strong>repairs</strong> to restore your appliance to
                      its normal operation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-primary">
              Why Choose Rapid Appliance Service for Your Subzero Repairs
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Regarding <strong>Subzero appliance repairs</strong>, you want to choose a <strong>company</strong> with
              experience and expertise. Here are some reasons why Rapid Appliance Service is the right choice for your{" "}
              <strong>Subzero repair</strong>:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md border border-border">
                <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Experience</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our team has years of experience <strong>repairing Subzero appliances</strong> and has seen almost
                  every issue you can imagine. We have the knowledge and expertise to <strong>diagnose</strong> and{" "}
                  <strong>repair</strong> even the most complex issues.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-border">
                <div className="bg-secondary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Timeliness</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We understand you want to be with your Subzero <strong>appliance</strong> for a while. That's why we
                  prioritize timeliness and strive to complete repairs quickly.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-border">
                <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <ThumbsUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Quality</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We stand behind the quality of our work and use only the highest-quality parts and equipment for your
                  repairs. We're committed to ensuring that your <strong>Subzero appliance is repaired</strong> to the
                  highest standards and performs optimally for years to come.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-border">
                <div className="bg-secondary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Customer Service</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We pride ourselves on exceptional customer service at <strong>Rapid Appliance Service</strong>. We're
                  always available to answer your questions and address any concerns. We believe in building long-term
                  relationships with our customers and will do everything we can to ensure your complete satisfaction
                  with our services.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Competitive Pricing</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We offer <strong>Subzero repair</strong> competitive pricing in <strong>Palm Springs</strong> to ensure
                you are getting the best value for your money. We know how important it is to have appliances that work,
                especially in the summer. No one wants to be without air conditioning and a{" "}
                <strong>refrigerator</strong> full of groceries.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                That's why we offer device <strong>repair services</strong> at competitive prices. We want our customers
                to get the best value for money and get their devices repaired as quickly as possible.
              </p>
            </div>

            <div className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-secondary">Expert Service</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>SubZero Appliance Repair Service</strong> is the only place where expedited service and
                knowledgeable technicians can help care for his <strong>Sub-Zero appliance</strong>. We have been
                working with this brand for a long time and are familiar with all kinds of problems and invisible
                issues.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Need SubZero Repair Service?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Contact us today for fast, reliable SubZero appliance repair in Palm Springs
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-neutral-100 font-semibold text-lg px-8"
              >
                <a href="tel:877-770-0157">
                  <Phone className="mr-2 h-5 w-5" />
                  877-770-0157
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8"
              >
                <Link href="/contact-us">Contact Us</Link>
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <a href="tel:877-770-0157" className="text-lg text-primary hover:underline">
                877-770-0157
              </a>
            </div>
            <div>
              <Clock className="w-8 h-8 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Opening Hours</h3>
              <p className="text-muted-foreground">Mon - Sat 08:00AM - 6:00PM</p>
              <p className="text-muted-foreground">Sunday - Closed</p>
            </div>
            <div>
              <Wrench className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Address</h3>
              <p className="text-muted-foreground">74711 Dillon Rd SPC 33</p>
              <p className="text-muted-foreground">Desert Hot Springs, CA, 92241</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
