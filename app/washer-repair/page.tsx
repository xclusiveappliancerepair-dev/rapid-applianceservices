import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, CheckCircle, Wrench, Clock, Shield, ThumbsUp } from "lucide-react"
import Footer from "@/components/footer"

export default function WasherRepairPage() {
  const commonProblems = [
    {
      title: "Leaking",
      description: "Leaks can occur due to a damaged or worn-out hose, a faulty water pump, or a damaged tub.",
    },
    {
      title: "Not Spinning",
      description: "This problem can be caused by a broken drive belt, a faulty motor, or a worn-out transmission.",
    },
    {
      title: "Not Filling",
      description:
        "When a washing machine doesn't fill with water, it could be due to a malfunctioning water inlet valve, a clogged hose, or a faulty pressure switch.",
    },
    {
      title: "Not Draining",
      description:
        "If the machine isn't draining, it may be due to a clogged or damaged drain hose, a faulty drain pump, or a clogged filter.",
    },
    {
      title: "Overheating",
      description:
        "If the machine overheats, it could be due to a faulty thermostat, a damaged heating element, or a clogged exhaust vent.",
    },
  ]

  const popularBrands = [
    {
      name: "Whirlpool",
      issues:
        "Whirlpool is a popular brand of washing machines, but they are prone to problems like leaking, not spinning, and not filling.",
    },
    {
      name: "LG",
      issues:
        "LG washing machines are known for their innovative features, but they are also prone to problems like not draining, leaking, and not spinning.",
    },
    {
      name: "Samsung",
      issues:
        "Samsung washing machines are known for their high-quality build, but they are prone to problems like overheating, not spinning, and not draining.",
    },
    {
      name: "Maytag",
      issues:
        "Maytag is another popular brand of washing machines that is prone to problems like not spinning, leaking, and not filling.",
    },
  ]

  const highEndBrands = [
    {
      name: "Miele",
      issues:
        "Miele is a high-end brand of washing machines that is known for its durability and reliability. However, these machines can experience problems like not spinning and not filling.",
    },
    {
      name: "Bosch",
      issues:
        "Bosch is another high-end brand of washing machines that is known for its efficiency and quiet operation. However, they are prone to problems like not draining and not spinning.",
    },
  ]

  const whyChooseUs = [
    {
      icon: Clock,
      title: "Same-Day Service",
      description: "We offer same-day and 24/7 emergency repair services",
    },
    {
      icon: Wrench,
      title: "Expert Technicians",
      description: "Trained and experienced in all washer brands and models",
    },
    {
      icon: Shield,
      title: "90-Day Warranty",
      description: "All parts and labor backed by our comprehensive warranty",
    },
    {
      icon: ThumbsUp,
      title: "Genuine Parts",
      description: "We use only authentic manufacturer parts for repairs",
    },
  ]

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">Washer Repair Palm Springs</h1>
                <p className="text-xl md:text-2xl text-white/90 text-pretty">
                  Palm Springs washer and dryer repair near me
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                    <Phone className="mr-2 h-5 w-5" />
                    <a href="tel:877-770-0157">877-770-0157</a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 border-white text-white hover:bg-white/20"
                    asChild
                  >
                    <Link href="/contact-us">Get Estimate</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/washer-repair-technician-palm-springs.jpg"
                  alt="Professional washer repair technician in Palm Springs"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <p className="text-lg leading-relaxed text-foreground">
                <strong>Washing machines</strong> are a common household appliance that make our lives easier by doing
                the hard work of cleaning our clothes. However, like any other appliance, washing machines can
                experience problems that require repair. Rapid Appliance Services are the experts in this, and we know
                exactly what to do if your heavy duty <strong>washer</strong> is malfunctioning or needs assistance to
                get running again.
              </p>
              <p className="text-lg leading-relaxed text-foreground mt-4">
                People in <strong>Palm Springs</strong> and surrounding areas depend on us when they have issues with
                their <strong>washers & dryers</strong>, and our technicians are very knowledgeable in this regard.
                Whether you have a Maytag, Whirlpool, Fisher & Paykel, Bosch, LG, or Samsung, or even another kind, rest
                assured that our work will leave a lasting impression on you when you find your washer running like new
                again.
              </p>
            </div>
          </div>
        </section>

        {/* Common Problems Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Common Washing Machine Problems</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our expert technicians can diagnose and fix all types of washer issues
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {commonProblems.map((problem, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-secondary">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Wrench className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-primary">{problem.title}</h3>
                      <p className="text-muted-foreground text-sm">{problem.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Brands Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">
                Common Brands and Their Problems
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {popularBrands.map((brand, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold mb-3 text-secondary">{brand.name}</h3>
                    <p className="text-muted-foreground">{brand.issues}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* High-End Brands Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">
                High-End Brands and Common Problems
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {highEndBrands.map((brand, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-2 border-primary/20">
                    <h3 className="text-xl font-bold mb-3 text-secondary">{brand.name}</h3>
                    <p className="text-muted-foreground">{brand.issues}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Commercial Washers Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-2">
                <h2 className="text-3xl font-bold mb-4 text-primary">Commercial Washers</h2>
                <p className="text-lg text-foreground leading-relaxed">
                  Commercial <strong>washers</strong> are designed to handle heavy loads and frequent use, making them
                  more durable than residential <strong>washers</strong>. However, they can still experience problems
                  that require <strong>repair</strong>. Common problems with <strong>commercial washers</strong> include
                  overloading, unbalanced loads, and mechanical issues with the motor or transmission.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-primary">
                Rapid Appliance Services is the Best Company in Palm Springs for Washer Repair
              </h2>
              <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
                We offer fast and reliable service with trained and experienced technicians in repairing all types of
                washing machines
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {whyChooseUs.map((feature, index) => (
                  <Card
                    key={index}
                    className="p-6 text-center hover:shadow-lg transition-shadow hover:border-secondary border-2"
                  >
                    <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-primary">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </Card>
                ))}
              </div>
              <Card className="p-8 bg-gradient-to-br from-primary to-secondary text-white">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <p className="text-lg">
                      We use only genuine parts for repairs and offer a 90-day warranty on all parts and labor
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <p className="text-lg">
                      We offer same-day service and 24/7 emergency repair services, ensuring that your washing machine
                      is up and running in no time
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <p className="text-lg">Our prices are affordable, and we offer free estimates for all repairs</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Call us today & book your appointment!</h2>
            <p className="text-xl mb-8 text-white/90">
              If you're looking for the best company for washer repair in Palm Springs, Rapid Appliance Services is the
              way to go
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                <Phone className="mr-2 h-5 w-5" />
                <a href="tel:877-770-0157">877-770-0157</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/20 bg-transparent"
                asChild
              >
                <Link href="/contact-us">Request Service</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-primary">Call us</h3>
                <a href="tel:877-770-0157" className="text-2xl font-bold text-secondary hover:underline">
                  877-770-0157
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-primary">Opening hours</h3>
                <p className="text-muted-foreground">Mon - Sat 08:00AM - 6:00PM</p>
                <p className="text-muted-foreground">Sunday - Closed</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-primary">Address</h3>
                <p className="text-muted-foreground">74711 Dillon Rd SPC 33</p>
                <p className="text-muted-foreground">Desert Hot Springs, CA, 92241</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
