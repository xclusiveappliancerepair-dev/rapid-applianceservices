import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Flame, Clock, Shield, Users, Wrench, ThumbsUp, Phone, MapPin } from "lucide-react"
import Footer from "@/components/footer"

export default function OvenRepairPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Oven Repair Palm Springs</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">Oven Repair Service Near Me</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact-us">Get Estimate</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 border-white text-white hover:bg-white/20"
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

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Palm Springs Oven Repair Service</h2>

            <div className="prose prose-lg max-w-none space-y-6 text-foreground">
              <p>
                Welcome to Rapid Appliance Services, your go-to appliance repair service provider in Palm Springs. We
                specialize in providing top-notch <strong>Oven repair services</strong> to our customers. Whether your
                oven is not heating up, producing strange noises, or not working at all, our experienced technicians are
                well-equipped to diagnose and fix the issue promptly.
              </p>

              <p>
                At Rapid Appliance Services, we understand the importance of having a fully functioning oven in your
                home or business. A malfunctioning oven can not only disrupt your daily routine but also cause a lot of
                inconvenience. That's why we offer fast and reliable <strong>Appliance repair services</strong> in{" "}
                <strong>Palm Springs</strong> to our customers.
              </p>

              <p>
                We have a team of trained professionals who have years of experience in repairing different types of
                ovens, including electric and gas ovens. When you choose Rapid Appliance Services for your oven repair
                needs, you can rest assured that you are getting the best service possible.
              </p>

              <p>
                Our technicians are fully licensed, insured, and trained to work on different brands of ovens, including
                but not limited to, <strong>Whirlpool, GE, Maytag, Bosch, Samsung, and LG</strong>. We use
                state-of-the-art tools and equipment to diagnose and repair the issue promptly, ensuring that your oven
                is up and running in no time.
              </p>

              <p>
                We believe in providing a hassle-free service to our customers. That's why we offer flexible scheduling
                options, including <strong>same-day and emergency services</strong>. Our technicians will arrive at your
                doorstep at a convenient time, diagnose the issue, and provide you with a comprehensive quote before
                starting any repair work.
              </p>

              <p>
                We take pride in our transparency and honesty, and we will never overcharge you or recommend unnecessary
                repairs. At Rapid Appliance Services, we stand behind our work. We offer a{" "}
                <strong>100% satisfaction guarantee</strong> on all our{" "}
                <strong>oven repair service Palm Springs</strong>.
              </p>

              <p>
                If you are not satisfied with our service for any reason, we will work with you to make it right. Our
                goal is to provide our customers with a seamless and stress-free repair experience. In addition to our
                oven repair services, we also offer a wide range of other appliance repair services, including
                refrigerator repair, washer and dryer repair, dishwasher repair, and more.
              </p>

              <p>
                We are your one-stop shop for all your appliance repair needs in Palm Springs. Call us for a household
                appliances repair expert technician.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Oven Repair Services Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary text-center">
              Our Oven Repair Services in Palm Springs
            </h2>

            <p className="text-lg mb-8 text-center text-muted-foreground">
              We provide comprehensive oven repair services for all major brands and models. Our experienced technicians
              are equipped with the latest tools and equipment to diagnose and fix any issues that your oven may be
              facing. Some of the common issues we address include:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 hover:shadow-lg transition-shadow bg-card">
                <Flame className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Temperature Problems</h3>
                <p className="text-muted-foreground">
                  If your oven is not heating up properly or is cooking food unevenly, it could be due to faulty heating
                  elements, thermostat, or control panel.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow bg-card">
                <Wrench className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Electrical Problems</h3>
                <p className="text-muted-foreground">
                  If your oven is not turning on or is tripping circuit breakers, it could be due to issues with wiring,
                  fuses, or other electrical components.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow bg-card">
                <Flame className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Gas-Related Problems</h3>
                <p className="text-muted-foreground">
                  If you have a gas oven that is not igniting or is emitting a gas smell, it could be due to faulty
                  igniters, gas valves, or other gas-related components.
                </p>
              </Card>
            </div>

            <p className="text-lg text-center text-muted-foreground">
              No matter the issue, our technicians are trained to quickly diagnose the problem and provide a
              cost-effective solution. We always prioritise repairing your oven over recommending a replacement.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary text-center">Why Choose Us?</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow bg-card">
                <Users className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Experience</h3>
                <p className="text-muted-foreground">
                  Our team has years of experience repairing ovens of all types and brands.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow bg-card">
                <Shield className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Expertise</h3>
                <p className="text-muted-foreground">
                  Our technicians are trained and certified to handle any oven repair issue.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow bg-card">
                <Clock className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Efficiency</h3>
                <p className="text-muted-foreground">
                  We understand the urgency of your oven repair needs and strive to provide fast and efficient service.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow bg-card">
                <ThumbsUp className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-foreground">Customer Service</h3>
                <p className="text-muted-foreground">
                  We pride ourselves on providing exceptional customer service and ensuring our customers are fully
                  satisfied with our work.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow bg-card md:col-span-2">
                <Shield className="h-12 w-12 text-secondary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-3 text-foreground text-center">Warranty</h3>
                <p className="text-muted-foreground text-center">
                  We offer a warranty on all of our oven repairs to give you peace of mind.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Fix Your Oven?</h2>
            <p className="text-xl mb-8 text-white/90">
              If you are looking for fast and reliable Palm Springs appliance repair services, look no further than
              Rapid Appliance Repairing Service. Contact us today to schedule an appointment or to learn more about our
              services.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 bg-white/10 border-white/20 text-white">
                <Phone className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Call Us</h3>
                <a href="tel:877-770-0157" className="text-lg hover:underline">
                  877-770-0157
                </a>
              </Card>

              <Card className="p-6 bg-white/10 border-white/20 text-white">
                <Clock className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Opening Hours</h3>
                <p className="text-sm">Mon - Sat 08:00AM - 6:00PM</p>
                <p className="text-sm">Sunday - Closed</p>
              </Card>

              <Card className="p-6 bg-white/10 border-white/20 text-white">
                <MapPin className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Address</h3>
                <p className="text-sm">74711 Dillon Rd SPC 33</p>
                <p className="text-sm">Desert Hot Springs, CA, 92241</p>
              </Card>
            </div>

            <Button asChild size="lg" variant="secondary">
              <Link href="/contact-us">Contact Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </main>
  )
}
