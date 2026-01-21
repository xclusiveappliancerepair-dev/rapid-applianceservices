import { Phone, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

export default function DCSRepairPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary text-white py-20">
        <div className="absolute inset-0 bg-[url('/abstract-tech-pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">DCS Appliance Repair</h1>
            <p className="text-xl text-primary-foreground/90 mb-8 text-pretty">
              Fast, Reliable, and Affordable <strong>DCS Appliance Repair Service</strong> in Palm Springs
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-white text-primary hover:bg-neutral-100">
                <a href="tel:877-770-0157">
                  <Phone className="mr-2 h-5 w-5" />
                  877-770-0157
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-transparent border-white text-white hover:bg-white/10"
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
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/dcs-appliance-repair-technician.jpg"
                alt="DCS Appliance Repair Service"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">DCS Appliance Repair Services</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Need help with your <strong>DCS appliance repair</strong>?
                </p>
                <ul className="space-y-2 list-none">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span>Do you have time to diagnose the problem yourself?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span>Do you have time to try to fix yourself?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                    <span>Frustration?</span>
                  </li>
                </ul>
                <p>
                  Looking for a fast, reliable, and affordable <strong>DCS appliance repair service</strong>? Then look
                  no further. Dedicated <strong>appliance repair services</strong> to the rescue.
                </p>
                <p>
                  Have you ever sat down and counted all the gadgets and appliances you use daily? 3, 4, 5+? prize. The
                  list of appliances that boil water, make coffee, wash clothes, and wash dishes goes on and on.
                </p>
              </div>
            </div>
          </div>

          {/* About DCS Section */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center text-primary">About DCS Appliances</h2>
              <div className="bg-gradient-to-br from-neutral-50 to-white rounded-2xl p-8 shadow-lg border border-border">
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Choosing the right appliance and brand can be time-consuming, with so many brands.{" "}
                    <strong>DCS Appliance</strong> is one of the brands of best appliances. These appliances are among
                    the best and most reliable on the market today, with an extensive product range that includes
                    variations such as <strong>ovens</strong>, <strong>dishwashers</strong>, and{" "}
                    <strong>refrigerators</strong>.
                  </p>
                  <p>
                    But just like in life, things can stop working or break down, which can be a traumatic and
                    frustrating experience. I don't feel like it.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-primary">DCS Appliance Repair - Why Choose Us?</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-2xl p-8 shadow-lg border border-border">
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    <strong>DCS Appliances</strong> / <strong>DCS Appliance Repairs</strong> require the most reliable,
                    affordable, and best service, offering comprehensive diagnostics and expedited{" "}
                    <strong>repair service</strong>. You need the best for that.
                  </p>
                  <p>
                    The only <strong>DCS appliance repair service in Palm Springs</strong> is the{" "}
                    <strong>Rapid Appliance Repair Service</strong>. When you call Rapid when you realize your device or
                    devices have stopped working, our team of experts is working for you.
                  </p>
                  <p>
                    With years of experience, Rapid's team of experts knows their devices inside and out, especially his
                    DCS appliances. For example, busy schedules that must be met regularly require these amazing
                    machines to work constantly. Unfortunately, this is not always the case. They need care and
                    maintenance, just like us, to keep up with today's society.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Common Issues Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-12 text-center text-primary">Common DCS Appliance Issues</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* DCS Dishwasher */}
              <div className="bg-white rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-secondary">DCS Dishwasher Repair</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong>DCS dishwasher</strong> is not draining properly. He's one of the most common problems
                    owners face, but fortunately, there are some simple tips to spot and fix:
                  </p>
                  <ul className="space-y-2 list-none ml-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span>
                        <strong>The filter may be clogged.</strong> These can be found on the bottom or sides of the
                        dishwasher. Make sure all airways are free of food and filters are clean.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span>
                        <strong>Make sure the drain hose is clean.</strong> This is usually a long, curved hose. Blow
                        off to make sure the hose is clear of possible blockages.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* DCS Refrigerator */}
              <div className="bg-white rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-secondary">DCS Refrigerator Repair</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    He might have a <strong>DCS refrigerator</strong> that holds all his favorite products and keeps
                    them chilled. With a history dating back to the 1930s, the <strong>DCS appliance</strong> is one of
                    the most reliable appliances available today.
                  </p>
                  <p>
                    Unfortunately, the best service and repairs are sometimes required, and one of the most common
                    problems is a failing capacitor coil. These require regular cleaning.
                  </p>
                  <p>
                    If you have a problem with your coil, we recommend contacting Rapid{" "}
                    <strong>DCS Refrigerator Repair</strong> Experts before the problem becomes more serious and costly.
                    Not only do you have to pay to have your refrigerator repaired, but you also have to dispose of and
                    replace the useless products in your refrigerator.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-12 text-white text-center shadow-2xl">
              <h2 className="text-3xl font-bold mb-4">Get in Touch with Us</h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Expert DCS Appliance Repair Service at Your Fingertips
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:877-770-0157"
                  className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-100 transition-colors"
                >
                  <Phone className="w-6 h-6" />
                  877-770-0157
                </a>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary/90 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Info Section */}
      <section className="py-16 bg-gradient-to-br from-neutral-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <a href="tel:877-770-0157" className="text-lg text-primary hover:underline">
                877-770-0157
              </a>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">⏰</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Opening Hours</h3>
              <p className="text-muted-foreground">Mon - Sat 08:00AM - 6:00PM</p>
              <p className="text-muted-foreground">Sunday - Closed</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">📍</span>
              </div>
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
