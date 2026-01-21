import { Phone, Mail, Wrench, Clock, Shield, CheckCircle2, Award, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function WolfRepairPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary text-white py-20">
        <div className="absolute inset-0 bg-[url('/abstract-tech-pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Wolf Appliance Repair Service</h1>
            <p className="text-xl text-primary-foreground/90 mb-8 text-pretty">
              Expert Wolf Repair in Palm Springs - Same Day Service Available
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:877-770-0157"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-neutral-50 transition-colors text-lg"
              >
                <Phone className="w-5 h-5" />
                877-770-0157
              </a>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-colors text-lg"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Wolf Appliance Service Palm Springs Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">Wolf Appliance Service Palm Springs</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                When it comes to high-quality kitchen appliances, the Wolf brand is a name that stands out. Wolf has
                been manufacturing premium appliances for over 80 years, and their products are renowned for their
                durability, reliability, and exceptional performance.
              </p>
              <p>
                Wolf appliances are designed to last for years, even with heavy use. They are built using only the
                finest materials and components, and they undergo rigorous testing to ensure that they meet the highest
                quality and performance standards. Whether you need a Wolf oven, range, or cooktop, you can trust that
                you are investing in a product that will provide you with years of excellent service.
              </p>
              <p>
                But the quality of Wolf appliances is wider than just their construction. Wolf products are also packed
                with innovative features and technologies that make cooking easier, more efficient, and more enjoyable.
                From precise temperature control to advanced cooking modes, Wolf appliances are designed to help you
                create delicious meals with ease. Contact us for Wolf appliance repair in Palm Springs, CA.
              </p>
            </div>
          </div>

          {/* Wolf Brand Excellence */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-neutral-50 to-white rounded-2xl p-8 border border-border hover:border-secondary transition-all hover:shadow-lg">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">80+ Years of Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Wolf appliances are built using only the finest materials and components, undergoing rigorous testing
                  to ensure they meet the highest quality and performance standards.
                </p>
              </div>

              <div className="bg-gradient-to-br from-neutral-50 to-white rounded-2xl p-8 border border-border hover:border-secondary transition-all hover:shadow-lg">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Innovative Features</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Wolf products are packed with innovative features and technologies that make cooking easier, more
                  efficient, and more enjoyable, from precise temperature control to advanced cooking modes.
                </p>
              </div>
            </div>
          </div>

          {/* Intro Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/technician-repairing-wolf-appliance.jpg"
                alt="Wolf Appliance Repair"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">Your Wolf Device is Safe!</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  If you have a problem with your Wolf appliance, <strong>Rapid Appliance Repair</strong> can help. Our
                  technicians are experts in fixing all sorts of issues that can affect your Wolf device. We use only
                  the latest and greatest systems and tools to perform any required device repairs, ensuring your device
                  is well cared for.
                </p>
                <p>
                  Plus, we offer convenient <strong>same-day service</strong>, so you don't have to wait days or weeks
                  for repairs.
                </p>
              </div>
            </div>
          </div>

          {/* Wolf Products We Repair */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">Wolf Products We Repair</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Wolf Ranges */}
              <div className="bg-gradient-to-br from-neutral-50 to-white rounded-2xl p-8 border border-border hover:border-secondary transition-all hover:shadow-lg">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <Wrench className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Wolf Ranges</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Few brands make ranges like Wolf. Headaches are rare, but when they do, the problem can be
                  investigated and diagnosed. No light, no heat, or an electrical problem? We'll replace or repair what
                  you need.
                </p>
              </div>

              {/* Wolf Hobs */}
              <div className="bg-gradient-to-br from-neutral-50 to-white rounded-2xl p-8 border border-border hover:border-secondary transition-all hover:shadow-lg">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <Wrench className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Wolf Hobs</h3>
                <p className="text-muted-foreground leading-relaxed">
                  These stovetops are one of the top products in the industry. Occasionally it won't turn on, or out of
                  nowhere seems problematic. It doesn't happen often, but you should seek professional examination and
                  diagnosis if it does happen.
                </p>
              </div>

              {/* Wolf Ovens */}
              <div className="bg-gradient-to-br from-neutral-50 to-white rounded-2xl p-8 border border-border hover:border-secondary transition-all hover:shadow-lg">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <Wrench className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Wolf Ovens</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Wolf ovens are known for their durability and high quality and can last for decades with proper and
                  timely care. Our professional technician uses the Wolf oven and knows how to heat it quickly.
                </p>
              </div>
            </div>
          </div>

          {/* Quality and Longevity Section */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-12 mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 text-primary">Quality Cookware Built to Last</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Looking for quality cookware and stoves that will last for years? Check out Wolf's selection. If you
                  experience any issues with one of these appliances, our repair experts are happy to help so you can
                  get back to cooking quickly.
                </p>
                <p>
                  Many people are considering buying a new one, but this idea is unique to cheap brands! Wolf is a
                  gorgeous piece. They made the device last for decades. Whether you need quick maintenance or part
                  replacement, we can help.
                </p>
              </div>
            </div>
          </div>

          {/* Same Day Service Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">
              Same Day Wolf Equipment Maintenance Solutions
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">Fast Response Time</h3>
                      <p className="text-muted-foreground">
                        The Palm Springs Wolf appliance repair specialists are always close if you live in our area.
                        Using the same repair solutions as Wolf equipment, we are on-site when you contact us.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">Well-Stocked Service Trucks</h3>
                      <p className="text-muted-foreground">
                        We start repairing your Wolf equipment immediately with a well-stocked support truck with the
                        most popular Wolf service parts.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">Expert Technicians</h3>
                      <p className="text-muted-foreground">
                        Our technicians are specially trained in Wolf appliance repair and use only genuine Wolf parts
                        for all repairs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/appliance-repair-technician-working.jpg"
                  alt="Wolf Repair Service"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-secondary to-secondary/90 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Need Wolf Appliance Repair?</h3>
              <p className="text-secondary-foreground/90 mb-6">Call us now for same-day service</p>
              <a
                href="tel:877-770-0157"
                className="inline-flex items-center gap-2 bg-white text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-neutral-50 transition-colors"
              >
                <Phone className="w-5 h-5" />
                877-770-0157
              </a>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Email Us</h3>
              <p className="text-primary-foreground/90 mb-6">Send us your questions or schedule a service</p>
              <a
                href="mailto:rapidappliancerepairservices@gmail.com"
                className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-neutral-50 transition-colors break-all"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">rapidappliancerepairservices@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
