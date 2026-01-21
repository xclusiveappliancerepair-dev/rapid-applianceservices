import { Phone, Wrench, Clock, Shield, Award, Zap } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"

export default function AmanaRepairPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary text-white py-20">
        <div className="absolute inset-0 bg-[url('/abstract-tech-pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Amana Appliance Repair Palm Springs</h1>
            <p className="text-xl text-primary-foreground/90 mb-4">Amana repair service</p>
            <a
              href="tel:877-770-0157"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-colors mt-4"
            >
              <Phone className="w-5 h-5" />
              877-770-0157
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-primary">Palm Springs Amana Repair</h2>

            <div className="prose prose-lg max-w-none mb-12 space-y-6 text-foreground">
              <p className="text-lg leading-relaxed">
                When it comes to household appliances, <strong>Amana</strong> is a brand that is well-known for
                producing high-quality products that are built to last. Their dependable and durable{" "}
                <strong>appliances</strong> make them a popular choice for homeowners who want to invest in appliances
                that will stand the test of time.
              </p>
              <p className="text-lg leading-relaxed">
                At <strong>Rapid Appliance Service</strong>, we proudly offer repair and maintenance services for{" "}
                <strong>Amana appliances in Palm Springs</strong>. Whether you need a simple fix or a more complex
                repair, our experienced technicians are here to help.
              </p>
              <p className="text-lg leading-relaxed">
                We know that when your <strong>Amana appliance</strong> is not working correctly, it can be frustrating
                and disruptive to your daily routine. That's why we offer same-day and next-day service to get your{" "}
                <strong>appliance</strong> up and running as quickly as possible.
              </p>
            </div>

            {/* Contact CTA Box */}
            <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-3xl p-8 mb-12 border border-secondary/20">
              <h3 className="text-2xl font-bold mb-4 text-primary">Get in touch with us.</h3>
              <a
                href="tel:877-770-0157"
                className="inline-flex items-center gap-2 text-3xl font-bold text-secondary hover:text-secondary/80 transition-colors"
              >
                <Phone className="w-8 h-8" />
                877-770-0157
              </a>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <Wrench className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Expert Technicians</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our technicians are well versed in <strong>repairing and maintaining Amana appliances</strong>, and
                  we'll work quickly to get your appliance back to its optimal performance.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Fast Service</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We offer <strong>same-day and next-day service</strong> to minimize disruption to your daily routine
                  and get your Amana appliance working again quickly.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Quality Parts</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We use only <strong>genuine Amana parts</strong> to ensure your appliance performs at its best and
                  maintains its warranty coverage.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Satisfaction Guaranteed</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your satisfaction is our priority. We stand behind our work and ensure every repair meets the highest
                  standards.
                </p>
              </div>
            </div>

            {/* Amana Innovation Section */}
            <div className="bg-gradient-to-br from-primary/5 to-background rounded-3xl p-12 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
                <Zap className="w-8 h-8 text-secondary" />
                Amana Appliances: Innovative and Energy-Efficient
              </h2>
              <div className="space-y-4 text-lg text-foreground leading-relaxed">
                <p>
                  In addition to their reputation for durability, <strong>Amana appliances</strong> are known for their
                  innovation and energy efficiency. <strong>Amana</strong> has been at the forefront of appliance
                  technology for decades, producing products designed to save energy and money without sacrificing
                  performance.
                </p>
                <p>
                  Whether you're in the market for a new refrigerator, dishwasher, oven, or any other appliance,{" "}
                  <strong>Amana</strong> has a wide range of products. With features like temperature control, adaptive
                  defrost, and adjustable racks, <strong>Amana appliances</strong> are designed to make your life easier
                  and more convenient.
                </p>
                <p>
                  If you're experiencing issues with your Amana appliance, don't hesitate to contact{" "}
                  <strong>Rapid Appliance Service</strong>. Our technicians are well versed in repairing and maintaining
                  Amana appliances, and we'll work quickly to get your appliance back to its optimal performance.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-colors text-lg"
              >
                Contact Us for Amana Repair
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
