import Link from "next/link"
import { Phone, Mail, Clock, MapPin, Wrench, Award, ThumbsUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

export default function SpeedQueenRepairPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary py-20 text-primary-foreground">
          <div className="absolute inset-0 bg-[url('/abstract-modern-pattern.jpg')] opacity-10 mix-blend-overlay"></div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">Speed Queen Repair Services</h1>
              <p className="mb-8 text-lg md:text-xl text-primary-foreground/90">
                Expert Repair for Speed Queen Washers and Dryers in Palm Springs
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  asChild
                  className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 font-semibold"
                >
                  <a href="tel:877-770-0157">
                    <Phone className="mr-2 h-5 w-5" />
                    Call 877-770-0157
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-primary bg-transparent"
                >
                  <Link href="/contact-us">Get Estimate</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  Speed Queen - Top Manufacturer of Washers and Dryers
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Speed Queen holds the top position as a manufacturer catering to institutional, commercial, and
                  residential customers in the market for washers and dryers. However, with fierce competition,
                  manufacturers must set themselves apart to thrive. One crucial aspect of a prosperous business is
                  dependability. Customers look for products that will last and function effectively in the long run.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  As a producer of appliances, it is crucial to maintain impeccable quality and performance standards in
                  all products. As a prominent repair service provider for Speed Queen washers and dryers, we recognize
                  the significance of upholding high standards while servicing their latest models. We display our
                  commitment to maintaining such standards through every repair we undertake.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How Repairing Helps Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
                How Repairing Your Speed Queen Device Helps You Maintain High Standards?
              </h2>
              <div className="bg-white rounded-lg shadow-lg p-8 border border-border">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our company strives to enhance and meet rigorous standards in our field continuously. One critical
                  approach we employ is staying informed about the latest updates to Speed Queen appliances. By staying
                  up-to-date with the modifications made to their machines, we can guarantee that all our clients
                  receive optimal service.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  As the top-rated Speed Queen appliance repair provider in Palm Springs, we are fully committed to
                  excellence in everything we do, including providing unparalleled service to our customers, including
                  being available 24/7. Our expansive network of skilled technicians is well-versed in the latest
                  technologies and equipped with the necessary tools and training to service all models of Speed Queen
                  washers and dryers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Details Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl space-y-12">
              {/* Long-lasting Dryer */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8 border border-primary/20">
                <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  Long-lasting Dryer
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Regularly cleaning the lint filter on your dryer is crucial for several reasons, such as reducing the
                  risk of fires and saving energy. However, it also plays a crucial role in maintaining the long-term
                  performance of your dryer. Lint build-up can impede airflow over the heating element, leading to its
                  premature failure, and cause drier sheets to be too damp, resulting in wrinkles and mildew.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  An obstructed lint screen can cause these problems, inefficient drying cycles and a shorter dryer
                  lifespan. The metal mesh screen is the ideal dryer lint screen design for optimal performance because
                  it doesn't retain lint like a fabric screen. However, over time, metal mesh screens will inevitably
                  become clogged with lint, so we offer replacement metal mesh screens for Speed Queen dryers.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Replacing the lint screen every few years can extend the life of your dryer and help keep it running
                  efficiently.
                </p>
              </div>

              {/* Washer to Withstand Pressure */}
              <div className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-lg p-8 border border-secondary/20">
                <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-secondary" />
                  </div>
                  Washer to Withstand Pressure
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We are familiar with "high-pressure washing" to clean our homes, driveways, and other surfaces.
                  However, washing machines also use high-pressure washing to clean dirty fluff filters. A pressure
                  washer is the best way to clean the lint filter on your Speed Queen washer.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A pressure washer can remove stubborn dirt and lint from filters with minimal effort and time. In
                  addition to cleaning the lint filter, the pressure washer can be used interchangeably with front and
                  top-loading washers to clean the front odor traps where dirt accumulates and causes odors.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  A pressure washer can also be used to clean the outside of the washer to remove stubborn dirt and to
                  clean the drain hose and hose ends.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
                Why Choose Our Speed Queen Repair Service
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="bg-white rounded-lg p-6 shadow-lg border border-border hover:shadow-xl transition-shadow">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Expert Technicians</h3>
                  <p className="text-muted-foreground">
                    Our skilled technicians are well-versed in the latest Speed Queen technologies and equipped with
                    proper tools and training.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-lg border border-border hover:shadow-xl transition-shadow">
                  <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">24/7 Availability</h3>
                  <p className="text-muted-foreground">
                    We're committed to excellence and available round the clock to serve you when you need us most.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-lg border border-border hover:shadow-xl transition-shadow">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Top-Rated Service</h3>
                  <p className="text-muted-foreground">
                    We are the top-rated Speed Queen appliance repair provider in Palm Springs with proven excellence.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-lg border border-border hover:shadow-xl transition-shadow">
                  <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <ThumbsUp className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Quality Standards</h3>
                  <p className="text-muted-foreground">
                    We maintain high standards and stay updated with the latest Speed Queen appliance modifications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold mb-6">Need Speed Queen Repair? Contact Us Today!</h2>
              <p className="text-lg mb-8 text-primary-foreground/90">
                No matter what problem you face, contact our repair technicians for quick assistance and excellent
                service. We are used to solving any problems these machines encounter. Rapid Appliance Repair Service is
                the only place that offers fast service and knowledgeable technicians to repair your Speed Queen
                appliances.
              </p>
              <p className="text-lg mb-8 text-primary-foreground/90 font-semibold">
                Don't try to fix the problem yourself. It can make things worse.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8"
                >
                  <a href="tel:877-770-0157">
                    <Phone className="mr-2 h-5 w-5" />
                    Call 877-770-0157
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 bg-transparent"
                >
                  <Link href="/contact-us">Schedule Service</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="bg-white rounded-lg p-8 shadow-lg border border-border">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Phone</p>
                        <a href="tel:877-770-0157" className="text-primary hover:underline">
                          877-770-0157
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Email</p>
                        <a
                          href="mailto:rapidappliancerepairservices@gmail.com"
                          className="text-primary hover:underline break-all"
                        >
                          rapidappliancerepairservices@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Service Area</p>
                        <p className="text-muted-foreground">Palm Springs & Surrounding Areas</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Availability</p>
                        <p className="text-muted-foreground">24/7 Emergency Service</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 border border-primary/20">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">Why Choose Rapid Appliance Service?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">Specialized in Speed Queen appliances</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">Fast and reliable service</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">Experienced and certified technicians</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">Competitive pricing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">100% satisfaction guarantee</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
