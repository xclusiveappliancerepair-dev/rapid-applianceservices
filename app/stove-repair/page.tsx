"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, Wrench, Clock, Shield, Award, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"
import Image from "next/image"

export default function StoveRepairPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Stove Repair Palm Springs</h1>
            <p className="text-xl md:text-2xl mb-4 text-white/90">Expert Stove Repair Services Near You</p>
            <p className="text-lg mb-8 text-white/80 italic">"Receive A Free Estimate With Repair"</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:877-770-0157">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 877-770-0157
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white"
                asChild
              >
                <Link href="/contact-us">Get Estimate</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <Image
                  src="/professional-technician-repairing-stove-cooktop.jpg"
                  alt="Stove Repair Service"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  Our team is trained to diagnose and <strong>repair</strong> a wide range of issues, from faulty
                  burners to broken heating elements and everything in between. We also offer routine maintenance
                  services to keep your stove running smoothly and prevent future breakdowns.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Our commitment to customer satisfaction is unmatched. We take pride in our work and guarantee all
                  repairs and services. We also offer competitive pricing and convenient appointment scheduling to fit
                  your busy schedule.
                </p>
                <p className="text-lg text-muted-foreground">
                  If you need <strong>stove repair services in the Palm Springs</strong> area, look no further than
                  Rapid Appliance Services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stove Repair Services Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Stove Repair Services</h2>

            <h3 className="text-2xl font-semibold mb-6 text-secondary">Palm Springs Quality Stove Repair Service</h3>

            <Card className="p-8 mb-8">
              <p className="text-lg text-muted-foreground mb-6">
                Welcome to Rapid Appliance Services, where we specialize in <strong>Palm Springs Stove Repair</strong>,
                and are the go-to source for expert <strong>stove repair services</strong> in the Palm Springs area.
                Whether you need a quick fix or a major repair, our team of highly skilled technicians has the
                experience and knowledge to get your stove up and running in no time.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                Stove repair is a common service that homeowners often require, especially when their stoves stop
                functioning properly. With so many types of stoves available on the market, it can be challenging to
                determine the root cause of the issue. That's why it's essential to have a reliable and experienced{" "}
                <strong>appliance repair company</strong> on your side.
              </p>

              <p className="text-lg text-muted-foreground">
                There are several types of stoves, each with its unique features, benefits, and issues. The most common
                types include gas, electric, induction, and dual-fuel stoves.
              </p>
            </Card>

            {/* Types of Stoves */}
            <h3 className="text-2xl font-bold mb-6 text-primary">Types of Stoves We Service</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold mb-3 text-secondary">Gas Stoves</h4>
                <p className="text-muted-foreground">
                  Use natural gas or propane to ignite a flame that heats the cookware efficiently.{" "}
                  <strong>Gas stoves</strong> offer precise temperature control and instant heat.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold mb-3 text-secondary">Electric Stoves</h4>
                <p className="text-muted-foreground">
                  <strong>Electric stoves</strong> use electricity to heat the heating element, which then heats the
                  cookware. They're easy to clean and maintain.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold mb-3 text-secondary">Induction Stoves</h4>
                <p className="text-muted-foreground">
                  Use electromagnetic fields to heat the cookware directly for precise temperature control and energy
                  efficiency.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold mb-3 text-secondary">Dual-Fuel Stoves</h4>
                <p className="text-muted-foreground">
                  Combine the benefits of <strong>gas and electric stoves</strong> for ultimate cooking flexibility and
                  performance.
                </p>
              </Card>
            </div>

            <Card className="p-8 bg-primary/5">
              <p className="text-lg text-muted-foreground mb-6">
                No matter what type of stove you have, it's bound to encounter problems at some point. Common issues
                include uneven heating, a broken heating element, malfunctioning control knobs, clogged burners, gas
                leaks, and electrical faults. These problems can be frustrating and dangerous, which is why it's
                essential to seek professional <strong>stove repair services</strong>.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                If you're located in Palm Springs, Rapid Appliance Services is the best choice for quality{" "}
                <strong>stove repair services</strong>. Our team of highly trained and experienced technicians can
                quickly diagnose and fix any issue with your stove, regardless of the brand or model. We have been
                serving the Palm Springs community for several years, and we have a reputation for providing top-notch{" "}
                <strong>stove repair</strong> services.
              </p>

              <p className="text-lg text-muted-foreground">
                When you choose <strong>Rapid Appliance Services</strong> for your stove repair needs, you can rest
                assured that you're getting the best service possible. We offer a same-day service guarantee, meaning
                we'll get your stove up and running on the same day you call us. We also use only the highest quality
                parts for all our repairs, ensuring that your <strong>stove</strong> remains functional for years to
                come.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">
              Common Stove Problems We Fix
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Uneven heating",
                "Broken heating element",
                "Malfunctioning control knobs",
                "Clogged burners",
                "Gas leaks",
                "Electrical faults",
              ].map((problem, index) => (
                <Card key={index} className="p-4 flex items-center gap-3 hover:shadow-lg transition-shadow">
                  <Wrench className="h-6 w-6 text-secondary flex-shrink-0" />
                  <span className="text-lg">{problem}</span>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-primary">
              Why Choose Rapid Appliance Services for your stove repair?
            </h2>
            <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              When it comes to <strong>stove repair</strong>, choosing the right service provider is crucial. At our
              company, we offer a range of benefits that set us apart from the competition:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-secondary/10 rounded-full">
                    <Award className="h-10 w-10 text-secondary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">1. Expertise</h3>
                <p className="text-muted-foreground">
                  Our team of skilled technicians has years of experience repairing all types of stoves. We stay up to
                  date with the latest industry advancements and use only the highest-quality parts and tools.
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-secondary/10 rounded-full">
                    <Clock className="h-10 w-10 text-secondary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">2. Prompt Service</h3>
                <p className="text-muted-foreground">
                  We understand that a broken stove can be a major inconvenience. That's why we offer fast, reliable
                  service to get your appliance back up and running in no time.
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-secondary/10 rounded-full">
                    <Wrench className="h-10 w-10 text-secondary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">3. Comprehensive Repairs</h3>
                <p className="text-muted-foreground">
                  We are equipped to diagnose and repair a wide range of issues, from faulty burners to broken heating
                  elements and more. We also offer routine maintenance services to keep your stove running smoothly.
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-secondary/10 rounded-full">
                    <Shield className="h-10 w-10 text-secondary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">4. Customer Satisfaction</h3>
                <p className="text-muted-foreground">
                  Our commitment to customer satisfaction is unmatched. We take pride in our work and{" "}
                  <strong>guarantee all repairs and services</strong>.
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-secondary/10 rounded-full">
                    <CheckCircle2 className="h-10 w-10 text-secondary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">5. Competitive Pricing</h3>
                <p className="text-muted-foreground">
                  We offer competitive pricing and convenient appointment scheduling to fit your budget and busy
                  schedule.
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-secondary/10 to-secondary/5">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-secondary/20 rounded-full">
                    <Phone className="h-10 w-10 text-secondary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Call Us</h3>
                <Button size="lg" variant="default" className="bg-secondary hover:bg-secondary/90" asChild>
                  <a href="tel:877-770-0157">877-770-0157</a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-primary text-center">Key Points</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-secondary" />
                  </div>
                  <span className="text-lg text-muted-foreground">
                    <strong>Expert stove repair services</strong> for all types of stoves
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-secondary" />
                  </div>
                  <span className="text-lg text-muted-foreground">Fast, reliable service to minimize downtime</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-secondary" />
                  </div>
                  <span className="text-lg text-muted-foreground">
                    Comprehensive repairs for a wide range of issues
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-secondary" />
                  </div>
                  <span className="text-lg text-muted-foreground">
                    Routine maintenance services to prevent future breakdowns
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-secondary" />
                  </div>
                  <span className="text-lg text-muted-foreground">
                    Commitment to customer satisfaction and <strong>guaranteed repairs and services</strong>
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-secondary" />
                  </div>
                  <span className="text-lg text-muted-foreground">
                    Competitive pricing and convenient scheduling to fit your budget
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary/90 to-secondary/80 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Stove Repair Service?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact Rapid Appliance Services today for expert stove repair in Palm Springs!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-secondary hover:bg-white/90" asChild>
              <a href="tel:877-770-0157">
                <Phone className="mr-2 h-5 w-5" />
                Call 877-770-0157
              </a>
            </Button>
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/contact-us">Schedule Repair</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
