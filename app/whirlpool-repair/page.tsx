import { Phone, MapPin, Clock, Wrench, Users, DollarSign, Settings, CheckCircle } from "lucide-react"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function WhirlpoolRepairPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary text-white py-20">
        <div className="absolute inset-0 bg-[url('/abstract-tech-pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Whirlpool Repair Palm Springs</h1>
            <p className="text-xl text-primary-foreground/90 mb-8 text-pretty">
              Expert Whirlpool appliance repair services in the Palm Springs area
            </p>
            <a
              href="tel:877-770-0157"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-neutral-50 transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              877-770-0157
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Service Overview */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/technician-repairing-whirlpool-appliance.jpg"
                alt="Whirlpool Appliance Repair"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">Whirlpool Appliance Repair Services</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <h3 className="text-2xl font-bold text-foreground">Palm Springs Whirlpool Appliance Repair service</h3>
                <p>
                  <strong>Whirlpool</strong> is a popular brand known for its high-quality appliances, including{" "}
                  <strong>refrigerators</strong>, <strong>washers</strong>, <strong>dryers</strong>, and more. At{" "}
                  <strong>Rapid Appliance Service</strong>, we specialize in{" "}
                  <strong>repairing Whirlpool appliances</strong> in the <strong>Palm Springs</strong> area. Our team of
                  expert technicians has years of experience working with Whirlpool appliances and can quickly diagnose
                  and repair any issue you may be experiencing.
                </p>
                <p>
                  Whether your <strong>Whirlpool refrigerator</strong> is not cooling properly or your{" "}
                  <strong>washer</strong> is not spinning, we have the skills and knowledge to get your{" "}
                  <strong>appliance</strong> back up and running. We use only genuine <strong>Whirlpool</strong>{" "}
                  replacement parts to ensure the best possible repair and offer fast and affordable service to minimize
                  downtime.
                </p>
                <p>
                  We understand that your <strong>Whirlpool refrigerator</strong> needs quick repair and installation.
                  We have properly trained <strong>Whirlpool repair</strong> technicians to repair your unit, and here
                  in Palm Springs, we have the right tools and machines to complete a{" "}
                  <strong>Whirlpool refrigerator repair</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            Why Choose Rapid Appliance Service for Whirlpool Appliance Repairs?
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-4xl mx-auto">
            If you're looking for a reliable and trustworthy <strong>Whirlpool appliance repair</strong> company to fix
            your Whirlpool appliances in <strong>Palm Springs</strong>, look no further than{" "}
            <strong>Rapid Appliance Service</strong>. Here are a few reasons why you should choose us:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 border border-primary/10 hover:border-secondary/30 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-6">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Expertise</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our technicians are highly skilled and have extensive experience repairing Whirlpool appliances. We stay
                up-to-date with the latest technologies and techniques to ensure the best possible repair.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 border border-primary/10 hover:border-secondary/30 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Speed</h3>
              <p className="text-muted-foreground leading-relaxed">
                We understand that a broken appliance can be a major inconvenience, so we offer fast and efficient
                service to get your appliance back up and running as quickly as possible.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 border border-primary/10 hover:border-secondary/30 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-6">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Affordable Prices</h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe in fair and transparent pricing and offer competitive rates for all our Whirlpool appliance
                repair services.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 border border-primary/10 hover:border-secondary/30 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-6">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Genuine Parts</h3>
              <p className="text-muted-foreground leading-relaxed">
                We use only genuine Whirlpool replacement parts to ensure the highest quality repair and the
                longest-lasting results.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 border border-primary/10 hover:border-secondary/30 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Excellent Customer Service</h3>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to providing our customers with the best possible experience. From scheduling your
                appointment to completing the repair, we strive to exceed your expectations and ensure your
                satisfaction.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 border border-primary/10 hover:border-secondary/30 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Professional Service</h3>
              <p className="text-muted-foreground leading-relaxed">
                We understand that your Whirlpool refrigerator needs quick repair and installation. We have properly
                trained Whirlpool repair technicians to repair your unit and here in Palm Springs we have the right
                tools and machines to complete a Whirlpool refrigerator repair.
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-gradient-to-br from-secondary via-secondary/90 to-primary text-white rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Need Whirlpool Appliance Repair Services?</h2>
          <p className="text-xl text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
            If you need Whirlpool appliance repair services in the Palm Springs area, don't hesitate to contact Rapid
            Appliance Service. We're here to help!
          </p>
          <a
            href="tel:877-770-0157"
            className="inline-flex items-center gap-2 bg-white text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-neutral-50 transition-colors text-lg"
          >
            <Phone className="w-5 h-5" />
            Call us: 877-770-0157
          </a>
        </section>

        {/* Contact Information */}
        <section className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Call us</h3>
                <a href="tel:877-770-0157" className="text-primary hover:underline">
                  877-770-0157
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Opening hours</h3>
                <p className="text-sm text-muted-foreground">Mon - Sat 08:00AM - 6:00PM</p>
                <p className="text-sm text-muted-foreground">Sunday - Closed</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Address</h3>
                <p className="text-sm text-muted-foreground">
                  74711 Dillon Rd SPC 33
                  <br />
                  Desert Hot Springs, CA, 92241
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  )
}
