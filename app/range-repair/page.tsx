"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, CheckCircle, Clock, DollarSign, ThumbsUp } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"

export default function RangeRepairPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Range Repair Palm Springs</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Expert Range Repair Services for High-End, Residential, and Commercial Ranges
            </p>
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

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-primary">Range Repair Service Palm Springs</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Welcome to Rapid Appliance Services, where we specialize in repairing and maintaining high-end,
                residential, and commercial ranges in Palm Springs. We have years of experience and expertise in fixing
                various range problems, making us the go-to choice for homeowners and businesses alike who need reliable
                and efficient repairs.
              </p>
              <p className="text-lg text-muted-foreground">
                At our appliance repair company, we offer a wide range of services that cater to all your range repair
                needs. Whether it's a gas, electric, or dual-fuel range, we have the tools and knowledge to diagnose and
                repair any problem. Some of the range brands we specialize in include Viking, Thermador, Wolf, and
                Dacor, but also many other common ones like Whirlpool and Maytag and others.
              </p>
            </Card>

            {/* Common Problems */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center text-primary">Common Range Repair Problems</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Ranges are an essential appliance in any kitchen, but they can develop problems over time. Some of the
                most common range repair issues we encounter include:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Burner not lighting",
                  "Oven not heating up",
                  "Temperature control problems",
                  "Broken knobs or buttons",
                  "Gas leaks",
                ].map((problem, index) => (
                  <Card key={index} className="p-4 flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                    <span className="text-lg">{problem}</span>
                  </Card>
                ))}
              </div>
              <p className="text-lg text-muted-foreground mt-6">
                These problems can cause significant inconvenience and frustration, which is why we prioritize fixing
                them as quickly as possible. We understand the importance of having a functioning range in your kitchen,
                and we work hard to get it back up and running in no time.
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center text-primary">Why Choose Us?</h2>
              <p className="text-lg text-muted-foreground mb-8 text-center">
                Rapid Appliance Services is dedicated to providing exceptional range repair service and support to our
                customers.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-secondary/10 rounded-full">
                      <CheckCircle className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold">Experienced Technicians</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Our technicians have years of experience repairing high-end ranges and have the necessary knowledge
                    to diagnose and fix any issue.
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-secondary/10 rounded-full">
                      <Clock className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold">Same-Day Service</h3>
                  </div>
                  <p className="text-muted-foreground">
                    We understand the urgency of range repairs, which is why we offer same-day service to get your
                    appliance up and running as soon as possible.
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-secondary/10 rounded-full">
                      <DollarSign className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold">Affordable Prices</h3>
                  </div>
                  <p className="text-muted-foreground">
                    We offer competitive pricing for our range repair services, ensuring that you get quality service
                    without breaking the bank.
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-secondary/10 rounded-full">
                      <ThumbsUp className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold">Customer Satisfaction</h3>
                  </div>
                  <p className="text-muted-foreground">
                    We prioritize customer satisfaction and strive to exceed your expectations with every repair.
                  </p>
                </Card>
              </div>
            </div>

            {/* Expertise Section */}
            <Card className="p-8 mb-12 bg-gradient-to-br from-primary/5 to-secondary/5">
              <h2 className="text-2xl font-bold mb-4 text-primary">Expert Technicians You Can Trust</h2>
              <p className="text-lg text-muted-foreground mb-4">
                When it comes to repairing a range appliance, it's crucial to hire experienced technicians who
                understand the intricacies of the appliance and know how to fix it correctly. An experienced technician
                will diagnose the problem accurately, provide efficient repairs, and offer recommendations on how to
                prevent future issues.
              </p>
              <p className="text-lg text-muted-foreground">
                At Rapid Appliance Services, we understand the importance of having skilled technicians on our team. Our
                technicians have years of experience repairing ranges, and they have the necessary expertise to identify
                and fix even the most complex problems. We use advanced tools and techniques to ensure that we provide
                quality repairs that last.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary/90 to-secondary/80 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Fix Your Range?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a repair appointment and get your range back up and running!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-secondary hover:bg-white/90" asChild>
              <a href="tel:877-770-0157">
                <Phone className="mr-2 h-5 w-5" />
                Call 877-770-0157
              </a>
            </Button>
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/contact-us">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
