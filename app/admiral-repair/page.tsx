import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, CheckCircle2, Wrench, Clock, Shield } from "lucide-react"
import Footer from "@/components/footer"

export default function AdmiralRepairPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Admiral Appliance Repair</h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Professional Admiral Appliance Repair Services in Palm Springs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <a href="tel:877-770-0157">
                  <Phone className="mr-2 h-5 w-5" />
                  877-770-0157
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-background text-foreground hover:bg-accent">
                <Link href="/contact-us">Get Estimate</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Admiral Refrigerator Repair Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Palm Springs Admiral Repair Service
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-4">
                    Do you need help with your <strong>Admiral</strong> refrigerator? Is it not cooling properly, making
                    strange noises, or leaking water? If so, don't hesitate to contact{" "}
                    <strong>Rapid Appliance Service</strong> for professional{" "}
                    <strong>Admiral refrigerator repair services</strong> in Palm Springs.
                  </p>
                  <p className="mb-4">
                    Our team of experienced technicians is trained to diagnose and fix any issue you may be having with
                    your <strong>Admiral</strong> refrigerator, no matter the model or age. We use only genuine Admiral
                    parts and tools to ensure your <strong>appliance</strong> is running like new again.
                  </p>
                  <p>
                    Whether you need a simple repair or a more complex fix, we have the skills and expertise to complete
                    the job. We understand the importance of a working refrigerator, so we offer fast, reliable, and
                    affordable <strong>Admiral refrigerator repair services in Palm Springs.</strong>
                  </p>
                </div>
                <div className="mt-8">
                  <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90">
                    <a href="tel:877-770-0157">
                      <Phone className="mr-2 h-5 w-5" />
                      877-770-0157
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/refrigerator-repair-technician-palm-springs.jpg"
                  alt="Admiral Refrigerator Repair"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admiral Washer and Dryer Repair Section */}
      <section className="py-16 md:py-24 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/washer-repair-technician-palm-springs.jpg"
                  alt="Admiral Washer and Dryer Repair"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Admiral Washer and Dryer Repair Services in Palm Springs
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-4">
                    Do you need help with your <strong>Admiral</strong> washer or dryer? Is it making strange noises,
                    not spinning, or not drying your clothes? Don't let a broken <strong>appliance</strong> disrupt your
                    daily routine. Contact Rapid Appliance Service for professional{" "}
                    <strong>Admiral washer and dryer repair services</strong> in Palm Springs.
                  </p>
                  <p className="mb-4">
                    Our team of experienced technicians has the knowledge and expertise to diagnose and fix any issue
                    you may be having with your <strong>Admiral</strong> washer or dryer. We use only genuine Admiral
                    parts and tools to ensure your appliance is running like new again.
                  </p>
                  <p>
                    At Rapid Appliance Service, we understand the importance of having a functioning washer and dryer.
                    That's why we offer fast and reliable <strong>Admiral</strong> washer and dryer repair services in{" "}
                    <strong>Palm Springs</strong>. Whether you need a simple repair or a more complex fix, we have the
                    skills and expertise to complete the job.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Why Choose Rapid Appliance Service?
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Wrench className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Expert Technicians</h3>
                  <p className="text-muted-foreground">
                    Our certified technicians have extensive experience with all Admiral appliance models.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Fast Service</h3>
                  <p className="text-muted-foreground">
                    Same-day service available to get your Admiral appliances working quickly.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Genuine Parts</h3>
                  <p className="text-muted-foreground">
                    We use only authentic Admiral parts to ensure lasting repairs and optimal performance.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Warranty Guarantee</h3>
                  <p className="text-muted-foreground">
                    All repairs backed by our comprehensive warranty for your peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/80 text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact us today to schedule your Admiral appliance repair service
            </h2>
            <p className="text-xl mb-8 text-secondary-foreground/90">With Rapid Appliance Service in Palm Springs</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-background text-foreground hover:bg-accent">
                <a href="tel:877-770-0157">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 877-770-0157
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary bg-transparent"
              >
                <Link href="/contact-us">Schedule Online</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  )
}
