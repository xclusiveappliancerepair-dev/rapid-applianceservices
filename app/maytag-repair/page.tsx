import { Phone, Clock, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

export default function MaytagRepairPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary text-white py-20">
        <div className="absolute inset-0 bg-[url('/abstract-tech-pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Maytag Appliance Repair Services Palm Springs
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 text-pretty">
              Expert Maytag Repair Near You in Palm Springs
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
                  877-770-0157
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Maytag Washing Machine Repair Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/technician-repairing-maytag-appliance.jpg"
                alt="Maytag Washing Machine Repair"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">Maytag Washing Machine Repair</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  If you need help with your <strong>Maytag washing machine</strong>, our team at{" "}
                  <strong>Rapid Appliance Service</strong> is here to help. We offer expert Maytag washing machine
                  repair services in the Palm Springs area, and our technicians are trained to diagnose and repair any
                  issue your machine may be experiencing.
                </p>
                <p>
                  From strange noises and leaks to cycle problems and mechanical failures, we have the experience and
                  expertise to get your <strong>Maytag washing machine running smoothly</strong> again. We use only{" "}
                  <strong>genuine Maytag replacement parts</strong>, so you can be sure your machine is getting the best
                  possible care.
                </p>
                <p>
                  Our team understands that a broken washing machine can be a major inconvenience, so we offer{" "}
                  <strong>fast and reliable repair services</strong>. We can diagnose and repair the issue on the same
                  day so you can return to your normal routine as soon as possible.
                </p>
              </div>
            </div>
          </div>

          {/* Maytag Refrigerator Repair Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary">Maytag Refrigerator Repair Palm Springs</h2>
            <div className="bg-gradient-to-br from-background to-accent/5 rounded-xl p-8 border border-border">
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  If your <strong>Maytag refrigerator is on the fritz</strong>, don't panic – Rapid Appliance Service is
                  here to help. We offer professional <strong>Maytag refrigerator repair services</strong> in the Palm
                  Springs area, and our technicians have the skills and knowledge to tackle any issue your fridge may be
                  experiencing.
                </p>
                <p>
                  Whether your refrigerator is <strong>not cooling properly</strong>, making strange noises, or
                  experiencing any other issue, we can help diagnose and fix the problem quickly. We only use{" "}
                  <strong>genuine Maytag replacement parts</strong> to ensure the best possible repair results, and we
                  offer competitive pricing to keep your repair costs affordable.
                </p>
                <p>
                  We understand that a broken refrigerator can be a major hassle at Rapid Appliance Service, so we offer{" "}
                  <strong>same-day repair services</strong> whenever possible. Our team is committed to providing fast
                  Maytag refrigerator repair, reliable service, so you can get back to enjoying your fully functional
                  Maytag refrigerator as soon as possible.
                </p>
              </div>
            </div>
          </div>

          {/* Brand History Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-6 text-primary">
              Maytag Appliance Repair Specialists You Can Trust
            </h2>
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl p-8">
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  In the past, <strong>Maytag devices</strong> were the most technologically advanced devices, able to
                  compete with today's finest and most sophisticated brands. And one of the best manufacturers of
                  various dryers.
                </p>
                <p>
                  What is the <strong>secret to the success of the Maytag brand</strong>? If you ask people why they
                  love the company so much, they will say that Maytag has a lot of experience in the market. Most of the
                  different Maytag devices are <strong>reliable, robust, and very stylish</strong>, so having these
                  devices in your home will help you get the most out of your interior design.
                </p>
                <p>
                  Of course, the Maytag appliance impresses not only with its substance but also with its style, whose{" "}
                  <strong>robustness has been proven through many years of experience</strong> on the market.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Need Maytag Appliance Repair?</h2>
                <p className="text-primary-foreground/90 mb-6 text-lg">
                  Contact us today to schedule your Maytag appliance repair service in Palm Springs and surrounding
                  areas.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5" />
                    <a href="tel:877-770-0157" className="text-lg font-semibold hover:underline">
                      877-770-0157
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span>68-845 Perez Rd Suite 3, Cathedral City, CA 92234</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5" />
                    <span>Monday - Friday: 8:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <Link href="/contact-us">Get Estimate</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 border-white hover:bg-white/20">
                  <a href="tel:877-770-0157">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
