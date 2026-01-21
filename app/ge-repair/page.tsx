import { Phone, Wrench, Clock, Shield, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

export default function GERepairPage() {
  const commonProblems = [
    {
      title: "Refrigerator not cooling",
      description:
        "A common problem with GE refrigerators is that they may stop cooling. This could be due to a faulty compressor or a malfunctioning thermostat.",
    },
    {
      title: "Dishwasher not draining",
      description:
        "If your GE dishwasher is not draining properly, it could be due to a clogged drain hose or a faulty drain pump.",
    },
    {
      title: "Oven not heating",
      description:
        "If your GE oven is not heating, it could be due to a faulty igniter, heating element, or thermostat.",
    },
    {
      title: "Washer not spinning",
      description: "If your GE washer is not spinning, it could be due to a broken drive belt or a faulty motor.",
    },
    {
      title: "Dryer not heating",
      description: "If your GE dryer is not heating, it could be due to a faulty heating element or thermostat.",
    },
  ]

  const whyChooseUs = [
    {
      icon: Clock,
      title: "Fast and reliable service",
      description:
        "We understand appliance breakdowns can be frustrating and inconvenient, so we provide fast and reliable repair services. We'll work quickly to diagnose the problem and provide a solution that gets your appliance back up and running as soon as possible.",
    },
    {
      icon: Wrench,
      title: "Experienced technicians",
      description:
        "Our technicians have years of experience repairing GE appliances. They are fully trained and equipped to handle any type of repair, big or small.",
    },
    {
      icon: Shield,
      title: "Quality parts",
      description:
        "We use only high-quality parts when repairing GE appliances. This ensures that your appliance will continue functioning properly for years.",
    },
    {
      icon: CheckCircle2,
      title: "Affordable pricing",
      description:
        "Quality appliance repairs should be affordable for everyone. That's why we offer competitive pricing for our services.",
    },
  ]

  const refrigeratorWarnings = [
    "Water is leaking from the refrigerator",
    "The door seal is punctured or damaged and does not seal properly",
    "Too loud motor or compressor",
    "Water flows from the freezer compartment to the refrigerator compartment",
    "Condensation forming all over the refrigerator door",
    "The compressor runs all the time and never shuts down",
    "Ice and frost in the freezer compartment",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-20">
        <div className="absolute inset-0 bg-[url('/abstract-tech-pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">GE Appliance Repair</h1>
              <p className="text-xl text-primary-foreground/90 mb-8 text-pretty">
                Expert <strong>GE Appliance Repair Service</strong> in Palm Springs
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <Link href="/contact-us">Get Estimate</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-neutral-50">
                  <a href="tel:877-770-0157">
                    <Phone className="mr-2 h-5 w-5" />
                    877-770-0157
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/technician-repairing-ge-appliance.jpg"
                alt="GE Appliance Repair"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Palm Springs GE Appliance Repair */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-primary">Palm Springs GE Appliance Repair</h2>
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                If you own a <strong>GE appliance</strong> in Palm Springs, you may encounter some common problems that
                require <strong>GE repair</strong>. Here are a few issues that we see frequently:
              </p>
            </div>

            {/* Common Problems */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {commonProblems.map((problem, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-border"
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-secondary/10 rounded-full p-2 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-foreground">{problem.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{problem.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
              <p className="text-lg text-foreground leading-relaxed">
                At <strong>Rapid Appliance Service</strong>, we have experience repairing all types of GE appliances,
                including refrigerators, dishwashers, ovens, washers, and dryers. Our team of trained{" "}
                <strong>GE appliance repair</strong> technicians can diagnose the problem quickly and provide a fast and
                effective solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GE Appliance Repair Services */}
      <section className="py-16 bg-gradient-to-br from-neutral-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-primary">GE Appliance Repair Services in Palm Springs</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                <strong>Rapid Appliance Service</strong> is the right choice for you if you're looking for reliable and
                professional <strong>GE appliance repair</strong> services in the <strong>Palm Springs</strong> area.
                Here's why:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {whyChooseUs.map((reason, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-border group"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-secondary to-secondary/80 rounded-full p-3 flex-shrink-0 group-hover:scale-110 transition-transform">
                      <reason.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-3 text-foreground">{reason.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Customer Satisfaction Guarantee */}
              <div className="bg-gradient-to-br from-primary to-primary/90 rounded-xl p-6 shadow-lg text-white md:col-span-2">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 rounded-full p-3 flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-3">Customer satisfaction guarantee</h3>
                    <p className="text-primary-foreground/90 leading-relaxed">
                      At Rapid Appliance Service, we are committed to providing our customers with the highest level of
                      satisfaction. If you're unhappy with our services, we'll do everything possible to make it right.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Refrigerator Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-8 mb-8 border border-secondary/20">
              <h2 className="text-3xl font-bold mb-6 text-primary">We are fully licensed to handle refrigerators</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We recommend <strong>not ignoring</strong> minor issues with your <strong>refrigerator</strong> right
                now. A small problem can become big, repairs cost more, and you must wait longer. Therefore, we
                recommend contacting a qualified and experienced technician immediately. Contacting a{" "}
                <strong>professional GE equipment repair company</strong> when you suspect an equipment problem can
                prevent a minor problem from becoming a catastrophic problem.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Don't hesitate to get in touch with us if you notice any of the following:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {refrigeratorWarnings.map((warning, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-md border border-border"
                >
                  <div className="bg-red-50 rounded-full p-1 flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                  </div>
                  <p className="text-foreground font-medium">{warning}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
              <p className="text-lg text-foreground leading-relaxed">
                All of these indicate that the refrigerator needs proper diagnosis and may need <strong>repair</strong>.
                A quick repair can prevent the problem from becoming a problem. You may only need to replace some parts,
                especially if the engine or other electrical components malfunction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Fix Your GE Appliance?</h2>
            <p className="text-xl text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
              Contact us today for fast, reliable, and professional GE appliance repair service in Palm Springs
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <Phone className="w-8 h-8 mx-auto mb-3" />
                <p className="font-semibold mb-2">Call us</p>
                <a href="tel:877-770-0157" className="text-lg font-bold hover:underline">
                  877-770-0157
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <Clock className="w-8 h-8 mx-auto mb-3" />
                <p className="font-semibold mb-2">Opening hours</p>
                <p className="text-sm">Mon - Sat 08:00AM - 6:00PM</p>
                <p className="text-sm">Sunday - Closed</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <div className="w-8 h-8 mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <p className="font-semibold mb-2">Address</p>
                <p className="text-sm">74711 Dillon Rd SPC 33</p>
                <p className="text-sm">Desert Hot Springs, CA, 92241</p>
              </div>
            </div>
            <Button asChild size="lg" className="bg-white text-secondary hover:bg-neutral-50">
              <Link href="/contact-us">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
