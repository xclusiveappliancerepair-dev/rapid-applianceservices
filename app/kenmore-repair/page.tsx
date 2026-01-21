import { Phone, Wrench, Clock, Shield, CheckCircle2, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

export default function KenmoreRepairPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary text-white py-20">
        <div className="absolute inset-0 bg-[url('/abstract-tech-pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Kenmore Home Appliance Repair Services Palm Springs
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 text-pretty">
              Kenmore Repair Near You in Palm Springs
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Link href="/contact-us">Schedule Repair</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white hover:bg-white/20"
              >
                <a href="tel:877-770-0157">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 877-770-0157
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/technician-repairing-kenmore-appliance.jpg"
                alt="Kenmore Appliance Repair"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">Kenmore Repair Near You in Palm Springs</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  <strong>Kenmore</strong> is a popular brand known for its durable and reliable appliances. However,
                  like any other appliance, Kenmore products can experience issues from time to time. Here are some of
                  the most common problems we see with Kenmore appliances:
                </p>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">Kenmore Appliances We Repair</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Kenmore Refrigerators",
                  description:
                    "Expert repair for all Kenmore refrigerator models including side-by-side, French door, and top/bottom freezer units.",
                },
                {
                  name: "Kenmore Washers",
                  description:
                    "Professional repair for Kenmore front-load and top-load washing machines, including high-efficiency models.",
                },
                {
                  name: "Kenmore Dryers",
                  description: "Fast and reliable dryer repair service for both gas and electric Kenmore dryers.",
                },
                {
                  name: "Kenmore Dishwashers",
                  description:
                    "Complete dishwasher repair services including leak repairs, drainage issues, and control board replacements.",
                },
                {
                  name: "Kenmore Ranges & Ovens",
                  description: "Expert repair for Kenmore gas and electric ranges, ovens, and cooktops.",
                },
                {
                  name: "Kenmore Microwaves",
                  description: "Quick microwave repair service for built-in and countertop Kenmore models.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-accent to-accent/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-border"
                >
                  <h3 className="text-xl font-bold text-primary mb-3">{service.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Common Problems Section */}
          <div className="mb-16 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl p-8 md:p-12">
            <h2 className="text-4xl font-bold mb-8 text-primary text-center">Common Kenmore Appliance Problems</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Refrigerator not cooling",
                  description:
                    "If your Kenmore refrigerator is not cooling properly, it could be due to a malfunctioning compressor, faulty thermostat, or clogged condenser coils.",
                },
                {
                  title: "Washer not spinning",
                  description:
                    "A Kenmore washing machine that won't spin could be due to a worn-out drive belt, a broken motor coupling, or a malfunctioning lid switch.",
                },
                {
                  title: "Oven not heating",
                  description:
                    "A Kenmore oven that won't heat up may be due to a broken bake element, faulty temperature sensor, or malfunctioning control board.",
                },
                {
                  title: "Dryer not drying",
                  description:
                    "A Kenmore dryer not drying clothes properly may be due to a clogged vent, malfunctioning heating element, or a broken thermostat.",
                },
                {
                  title: "Dishwasher not draining",
                  description:
                    "A Kenmore dishwasher that is not draining may have a clogged drain hose, a malfunctioning pump, or a broken drain valve.",
                },
              ].map((problem, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-primary mb-3">{problem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">
              Why Choose Rapid Appliance Service for Your Kenmore Repairs
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              When repairing your Kenmore appliances, you want to choose a company you can trust to get the job done
              right the first time. Here are a few reasons why you should choose Rapid Appliance Service:
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  icon: Clock,
                  title: "Fast and reliable service",
                  description:
                    "We understand that you rely on your appliances daily, so we offer fast and reliable service to get your Kenmore appliances up and running as quickly as possible.",
                },
                {
                  icon: Wrench,
                  title: "Experienced technicians",
                  description:
                    "Our technicians are highly trained and experienced in repairing all types of Kenmore appliances. They have the knowledge and expertise to diagnose and fix any problem with your appliance.",
                },
                {
                  icon: CheckCircle2,
                  title: "Affordable prices",
                  description:
                    "We offer competitive pricing for our Kenmore appliance repair services, and we always provide a quote upfront so you know exactly what to expect.",
                },
                {
                  icon: Shield,
                  title: "Quality parts",
                  description:
                    "We use only high-quality replacement parts for your Kenmore appliances to ensure they are running at their best and last for years.",
                },
                {
                  icon: CheckCircle2,
                  title: "Customer satisfaction guaranteed",
                  description:
                    "We are committed to providing excellent customer service and satisfaction at Rapid Appliance Service. We stand behind our work and guarantee your satisfaction with our repairs.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-accent to-accent/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 mb-4">
                    <feature.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Additional Why Choose section with extra benefits */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12">
              <h3 className="text-3xl font-bold mb-8 text-primary text-center">
                Kenmore Repair - Why You Should Choose Our Service
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "We can repair all popular types and models of home and commercial appliances",
                  "All our technicians are licensed and insured",
                  "We offer same-day service",
                  "We offer the lowest prices in the area",
                  "All our factory parts are genuine",
                  "Our vans are fully stocked",
                  "We offer a comprehensive warranty on all parts installed",
                  "We also provide free estimates for repairs",
                  "No hidden fees or charges, no weekend or late-night surcharges",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-lg text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-lg text-muted-foreground text-center">
                Therefore, if your Kenmore device is not working properly, we recommend contacting an experienced repair
                professional to assess the problem and repair it quickly and effectively.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">Need Kenmore Appliance Repair?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Contact us today for fast, reliable Kenmore appliance repair service in Palm Springs and surrounding
              areas.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Link href="/contact-us">Get Estimate</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white hover:bg-white/20"
              >
                <a href="tel:877-770-0157">
                  <Phone className="mr-2 h-5 w-5" />
                  877-770-0157
                </a>
              </Button>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-sm text-primary-foreground/80">
                Hours: Mon-Sat: 8:00 AM - 8:00 PM | Sun: 9:00 AM - 5:00 PM
              </p>
              <a
                href="mailto:rapidappliancerepairservices@gmail.com"
                className="text-sm text-primary-foreground/80 hover:text-white flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                rapidappliancerepairservices@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
