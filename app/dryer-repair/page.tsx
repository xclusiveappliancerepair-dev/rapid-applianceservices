import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, CheckCircle, Clock, Wrench, Shield, ThumbsUp } from "lucide-react"
import Footer from "@/components/footer"

export default function DryerRepairPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Dryer Repair Palm Springs</h1>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                You've come to the right place if you're looking for reliable dryer repair services in Palm Springs and
                surrounding areas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <a href="tel:877-770-0157">
                    <Phone className="mr-2 h-5 w-5" />
                    877-770-0157
                  </a>
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
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/dryer-repair-technician-palm-springs.jpg"
                alt="Professional Dryer Repair Technician in Palm Springs"
                fill
                className="object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                At our company, we understand how important your appliances are to your daily routine. Whether it's your
                dryer, refrigerator, oven, or any other appliance, a malfunctioning machine can disrupt your life and
                cause unnecessary stress. That's why we offer <strong>fast and efficient repair services</strong> to get
                your appliances back up and running in no time.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                We specialize in all kinds of dryer appliances, whether it's a{" "}
                <strong>Maytag, Whirlpool, Fisher & Paykel, LG, or Samsung</strong> (or even others), our team of
                experienced technicians have the expertise to handle any issue! From broken belts to faulty heating
                elements, we have the tools and knowledge to diagnose and fix the problem quickly and effectively. We
                aim to provide high-quality service that exceeds your expectations and helps you avoid the hassle and
                expense of buying a new dryer.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                In addition to <strong>dryer repair Palm Springs</strong>, we offer appliance repair services for
                various other appliances. Whether your refrigerator, dishwasher, or stove needs attention, our skilled
                technicians are here to help. We pride ourselves on providing reliable and affordable appliance repair
                services that our customers can count on.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                Our Palm Springs dryer repair service covers all major brands and models, including{" "}
                <strong>gas and electric dryers</strong>. We use state-of-the-art diagnostic equipment to identify the
                root cause of the problem, and our technicians carry a wide range of replacement parts to ensure quick
                and efficient repair. We aim to provide our customers with a hassle-free experience and get their dryers
                up and running as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="bg-gradient-to-r from-secondary via-secondary/90 to-secondary/80 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Fast Dryer Repair?</h2>
          <p className="text-xl text-white/90 mb-6">Call us today for same-day service!</p>
          <Button size="lg" variant="outline" className="bg-white text-secondary hover:bg-white/90" asChild>
            <a href="tel:877-770-0157">
              <Phone className="mr-2 h-5 w-5" />
              877-770-0157
            </a>
          </Button>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                For our dryer repair services, we offer a <strong>comprehensive solution</strong> for all your appliance
                needs. Our technicians have serviced thousands of dryers & washers, so we know exactly what to do when
                we diagnose the problem. We use only high-quality replacement parts and equipment to ensure a
                long-lasting repair that will save you money in the long run. Our team is committed to providing
                top-notch service and ensuring our customers are completely satisfied with the results.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                When you choose us for your <strong>Palm Springs dryer repair</strong> needs, you can expect exceptional
                customer service, competitive pricing, and a commitment to quality. We understand that your appliances
                are essential to your daily life, and we'll do everything possible to get them working like new again as
                quickly as possible. So if you live in Palm Springs, and need a professional to come take a look at your
                dryer, and repair it, don't hesitate to contact us today! We're here to help you get your appliances
                back in top condition and keep your life running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Key Points - Dryer Repair Palm Springs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6">
                <CheckCircle className="h-10 w-10 text-secondary mb-4" />
                <p className="text-muted-foreground leading-relaxed">
                  Our company offers reliable Palm Springs dryer repair and appliance repair services.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6">
                <Wrench className="h-10 w-10 text-secondary mb-4" />
                <p className="text-muted-foreground leading-relaxed">
                  Our team of experienced technicians specializes in diagnosing and fixing any dryer issue.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6">
                <ThumbsUp className="h-10 w-10 text-secondary mb-4" />
                <p className="text-muted-foreground leading-relaxed">
                  We also provide Palm Springs appliance repair services for various other appliances.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6">
                <Shield className="h-10 w-10 text-secondary mb-4" />
                <p className="text-muted-foreground leading-relaxed">
                  We prioritize exceptional customer service, competitive pricing, and a commitment to quality.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6">
                <CheckCircle className="h-10 w-10 text-secondary mb-4" />
                <p className="text-muted-foreground leading-relaxed">
                  Our company has provided Palm Springs dryer and appliance repair services for many years, building a
                  reputation for reliability and quality.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6">
                <Clock className="h-10 w-10 text-secondary mb-4" />
                <p className="text-muted-foreground leading-relaxed">
                  We offer same-day and emergency repair services to ensure our customers don't have to wait long to fix
                  their appliances.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6">
                <Shield className="h-10 w-10 text-secondary mb-4" />
                <p className="text-muted-foreground leading-relaxed">
                  Our technicians are fully licensed and insured and receive ongoing training to stay up-to-date with
                  industry developments.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6">
                <CheckCircle className="h-10 w-10 text-secondary mb-4" />
                <p className="text-muted-foreground leading-relaxed">
                  We offer transparent pricing so our customers always know what to expect before we start the repair
                  work.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-6">
                <ThumbsUp className="h-10 w-10 text-secondary mb-4" />
                <p className="text-muted-foreground leading-relaxed">
                  We stand behind our work and offer a satisfaction guarantee to ensure our customers are completely
                  satisfied with our services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">Ready to Get Your Dryer Fixed?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today for fast, reliable dryer repair services in Palm Springs and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="tel:877-770-0157">
                <Phone className="mr-2 h-5 w-5" />
                Call 877-770-0157
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact-us">Contact Us Online</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
