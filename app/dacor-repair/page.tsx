import { Phone, Wrench, Clock, Shield, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

export default function DacorRepairPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/abstract-tech-pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Dacor Appliance Repair Palm Springs</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 text-pretty leading-relaxed">
              Expert Dacor appliance repair services in Palm Springs and surrounding areas
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-neutral-100">
                <Link href="/contact-us">Schedule Repair</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                <a href="tel:877-770-0157">Call Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Dacor Appliance Repair Service</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  If you own <strong>Dacor appliances</strong>, you know how important they are to the smooth running of
                  your household. But what happens when something goes wrong? That's where{" "}
                  <strong>Rapid Appliance Service</strong> comes in.
                </p>
                <p>
                  We offer expert <strong>Dacor appliance repair services in Palm Springs</strong> and the surrounding
                  areas. Our experienced technicians are trained to diagnose and repair all kinds of Dacor appliances,
                  from refrigerators and dishwashers to ovens and ranges.
                </p>
                <p>
                  At Rapid Appliance Service, we understand how frustrating it can be when an appliance breaks
                  unexpectedly. That's why we offer <strong>same-day repair services</strong> whenever possible, so you
                  can get your Dacor appliance back up and running as quickly as possible.
                </p>
                <p>
                  Our technicians carry a wide range of parts and tools, so we can often complete repairs on the spot
                  without needing a return visit.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/dacor-appliance-repair-technician-working.jpg"
                alt="Dacor Appliance Repair Service"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              Dacor Appliance Repair - Why Choose Us?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Expert Technicians</h3>
                <p className="text-muted-foreground">
                  Our team is trained and certified to handle all Dacor appliance models with precision
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Same-Day Service</h3>
                <p className="text-muted-foreground">
                  We offer same-day repair services to minimize your inconvenience
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Quality Parts</h3>
                <p className="text-muted-foreground">We use only genuine Dacor parts to ensure lasting repairs</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">On-the-Spot Repairs</h3>
                <p className="text-muted-foreground">
                  Our technicians carry extensive tools and parts for immediate repairs
                </p>
              </div>
            </div>
          </div>

          {/* Maintenance Services Section */}
          <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl p-8 md:p-12 mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary text-center">
                Preventative Maintenance Services
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  <strong>Preventative maintenance</strong> is key to ensuring the long-term health of your Dacor
                  appliances. Regular maintenance can help catch minor issues before they become major problems, saving
                  you time and money in the long run.
                </p>
                <p>
                  Rapid Appliance Service offers comprehensive{" "}
                  <strong>Dacor appliance repair maintenance services</strong> in Palm Springs and the surrounding
                  areas.
                </p>
              </div>

              <div className="mt-8 grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Thorough Inspection</h3>
                      <p className="text-sm text-muted-foreground">Comprehensive inspection of your Dacor appliance</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Cleaning & Lubrication</h3>
                      <p className="text-sm text-muted-foreground">Cleaning and lubricating key components</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Repairs & Adjustments</h3>
                      <p className="text-sm text-muted-foreground">Any necessary repairs or adjustments</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
                We'll also provide tips and advice on keeping your appliance running smoothly between service visits.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't Wait Until Something Goes Wrong</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Schedule a maintenance appointment with Rapid Appliance Service today. Our technicians are friendly,
              professional, and always happy to answer any questions you may have about your Dacor appliance.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-neutral-100">
                <Link href="/contact-us">Get Estimate</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                <a href="tel:877-770-0157">
                  <Phone className="mr-2 h-5 w-5" />
                  877-770-0157
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
