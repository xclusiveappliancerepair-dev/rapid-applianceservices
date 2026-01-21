import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, CheckCircle, Wrench, Clock, Shield } from "lucide-react"
import Footer from "@/components/footer"

export default function RefrigeratorRepairPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Refrigerator Repair Palm Springs
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/90 text-pretty">
                Expert refrigerator repair services for all brands and models. Same-day service available with a 90-day
                warranty on all repairs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" asChild className="text-lg">
                  <a href="tel:877-770-0157">
                    <Phone className="mr-2 h-5 w-5" />
                    Call 877-770-0157
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="bg-white/10 hover:bg-white/20 text-white border-white/30"
                >
                  <Link href="/contact-us">Get Estimate</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] lg:h-[400px]">
              <Image
                src="/refrigerator-repair-technician-palm-springs.jpg"
                alt="Professional refrigerator repair service in Palm Springs"
                fill
                className="object-cover rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Common Brands Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">
              Common Brands of Refrigerators
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              There are many different brands of refrigerators available on the market, each with its own unique
              features and benefits. Some of the most common brands of refrigerators include{" "}
              <strong>Whirlpool, Samsung, LG, Frigidaire, and GE</strong>. They are the most popular. These brands are
              known for their quality and reliability and are often the go-to choice for residential users.
            </p>
          </div>
        </div>
      </section>

      {/* High-End Brands Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">
              High-End Brands of Refrigerators
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In addition to these common brands, there are also <strong>high-end brands of refrigerators</strong> that
              offer even more advanced features and benefits. These brands include{" "}
              <strong>Sub-Zero, Viking, and Thermador</strong>, among others. These brands are often more expensive than
              their common counterparts, but they offer features such as built-in water dispensers, touch screen
              displays, and advanced temperature control systems.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-primary">
              Refrigerator Repair Near Me Palm Springs
            </h2>
            <h3 className="text-2xl font-semibold text-center mb-8 text-secondary">Palm Springs Repairing Services</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Refrigerators are among the most critical household appliances, with both residential and commercial users
              depending on them to keep food and other perishables fresh. These appliances have come a long way since
              their invention, and today, customers can choose from a variety of brands and models that fit their
              specific needs. <strong>Rapid Appliance Services</strong>, the prime repair company in Palm Springs, has
              the best experience in fixing all kinds of problems with all kinds of brands. However, like any other
              appliance, refrigerators are susceptible to malfunctioning, and this can have a significant impact on the
              quality of life or business operations. That is why <strong>refrigerator repair</strong> is crucial for
              both residential and commercial uses.
            </p>
          </div>
        </div>
      </section>

      {/* Residential & Commercial Repair Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Residential Repair */}
            <div className="bg-card rounded-lg p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-3">
                <Wrench className="h-6 w-6 text-secondary" />
                Residential Refrigerator Repair
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Residential refrigerator repair is essential for homeowners who depend on their refrigerators to keep
                food and beverages fresh. A malfunctioning refrigerator can lead to spoilage, which can be costly in
                terms of wasted food and beverages.
              </p>
              <h4 className="font-semibold text-lg mb-3 text-foreground">Common Problems:</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong>Faulty thermostat</strong> - causes temperature inconsistencies
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong>Clogged drain line</strong> - leads to water leaking inside
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong>Broken door seal</strong> - increases energy consumption
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong>Compressor issues</strong> - strange noises or total failure
                  </span>
                </li>
              </ul>
            </div>

            {/* Commercial Repair */}
            <div className="bg-card rounded-lg p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-3">
                <Wrench className="h-6 w-6 text-secondary" />
                Commercial Refrigerator Repair
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Commercial refrigerator repair is essential for businesses that rely on refrigerators to keep food and
                beverages fresh. In the restaurant industry, for example, a malfunctioning refrigerator can lead to food
                spoilage and health code violations.
              </p>
              <h4 className="font-semibold text-lg mb-3 text-foreground">Common Problems:</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong>Compressor issues</strong> - complete system failure
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong>Evaporator fan problems</strong> - uneven cooling
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong>Refrigerant leaks</strong> - loss of cooling capacity
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong>Thermostat problems</strong> - incorrect temperature control
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              Why Choose Rapid Appliance Services for Refrigerator Repair in Palm Springs?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              When it comes to <strong>refrigerator repair Palm Springs</strong>, customers need a reliable and
              trustworthy repair service that can diagnose and fix the problem quickly and efficiently. That is where
              Rapid Appliance Services comes in. Our team of expert technicians has years of experience in repairing all
              kinds of refrigerators, from common household brands to high-end models. We use only the highest quality
              parts and tools to ensure that your refrigerator is repaired correctly the first time, every time.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4 bg-card p-6 rounded-lg border border-border">
                <Clock className="h-8 w-8 text-secondary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-foreground">Same-Day Service</h4>
                  <p className="text-muted-foreground">Flexible scheduling to accommodate your busy schedule</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-card p-6 rounded-lg border border-border">
                <Shield className="h-8 w-8 text-secondary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-foreground">100% Satisfaction Guarantee</h4>
                  <p className="text-muted-foreground">Best value for your money with competitive pricing</p>
                </div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              At Rapid Appliance Services, we understand that a malfunctioning refrigerator can be a significant
              inconvenience for both residential and commercial users. That is why we offer same-day service and
              flexible scheduling to accommodate your busy schedule. We also offer competitive pricing and a 100%
              satisfaction guarantee, so you can trust that you are getting the best value for your money.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Need Refrigerator Repair in Palm Springs?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto text-pretty">
            Contact us today for fast, reliable refrigerator repair service. Same-day appointments available!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="text-lg">
              <a href="tel:877-770-0157">
                <Phone className="mr-2 h-5 w-5" />
                Call 877-770-0157
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-white/10 hover:bg-white/20 text-white border-white/30"
            >
              <Link href="/contact-us">Schedule Service</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
