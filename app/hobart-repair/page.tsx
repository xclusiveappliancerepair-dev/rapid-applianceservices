import { Button } from "@/components/ui/button"
import { Phone, Mail, Clock, MapPin, CheckCircle, Award, Users } from "lucide-react"
import Footer from "@/components/footer"
import Link from "next/link"

export default function HobartRepairPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground py-20">
        <div className="absolute inset-0 bg-[url('/abstract-modern-pattern.jpg')] opacity-10 mix-blend-overlay"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Hobart Repair Palm Springs, CA</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4">
              Commercial Appliances Hobart Repair Palm Springs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                <a href="tel:877-770-0157">
                  <Phone className="mr-2 h-5 w-5" />
                  877-770-0157
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                <Link href="/contact-us">Get Estimate</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hobart Appliance Repair Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Hobart Appliance Repair In Palm Springs
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  While many Hobart repair companies offer various appliance repair services, not all meet their
                  clients' needs and expectations. Fortunately, our Palm Springs Hobart repair company is dedicated to
                  exceptional repair services. Our team of experienced technicians is always available to assist you on
                  the same day, with the necessary skills and expertise to repair all Hobart appliances quickly and
                  efficiently. We guarantee the best possible results by using OEM spare parts directly from the
                  original manufacturer. Additionally, our Hobart appliance repair services are the most affordable.
                  With us, you won't need to look elsewhere for repair services as we can assist you on weekdays, after
                  hours, and even weekends.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Rapid Appliance Repair Section */}
        <section className="py-16 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Why Rapid Appliance Repair?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">Experienced Technicians</h3>
                      <p className="text-muted-foreground">
                        Our team has the necessary skills and expertise to repair all Hobart appliances quickly and
                        efficiently.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">OEM Spare Parts</h3>
                      <p className="text-muted-foreground">
                        We use OEM spare parts directly from the original manufacturer to guarantee the best possible
                        results.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">Same Day Service</h3>
                      <p className="text-muted-foreground">
                        Available on weekdays, after hours, and even weekends for your convenience.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">Affordable Pricing</h3>
                      <p className="text-muted-foreground">
                        Our Hobart appliance repair services are the most affordable in Palm Springs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hobart Services Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Our Hobart Repair Services
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* CLe Dishwasher System */}
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Hobart CLe Dishwasher System Repair</h3>
                  <p className="text-muted-foreground mb-4">
                    Using a Hobart CLe Series dishwasher, you can enjoy various additional features, such as a
                    pre-washing unit, a specialized food waste disposer, or even a waste equipment system. You also have
                    the option of adding a blower-dryer or a condenser.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Each FastRack system is uniquely tailored to meet the client's specific needs. To ensure maximum
                    efficiency, you can seek advice from an authorized Hobart representative, who can guide you on
                    enhancing the system and optimizing its performance.
                  </p>
                  <p className="text-muted-foreground">
                    The FastRack System is designed to function efficiently, saving you money and time. It features the
                    innovative Continuous Chain Drive technology, which moves the dish racks smoothly from the soiled
                    dish area through the dishwasher to the clean dish unloading section.
                  </p>
                </div>

                {/* Door Style Dishwasher */}
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Hobart Door Style Dishwasher Repair</h3>
                  <p className="text-muted-foreground mb-4">
                    This versatile model is designed to cater to various requirements and offers the flexibility of
                    adding optional controls, adapters, and other components. Moreover, the Hobart dishwasher with a
                    door-style design features an internal condensing system that reduces water vapor without requiring
                    a vent hood.
                  </p>
                  <p className="text-muted-foreground">
                    Our team has extensive expertise in handling Hobart Door Style Dishwashers. If you require
                    assistance with your unit, please contact us at{" "}
                    <a href="tel:877-770-0157" className="text-primary hover:underline font-semibold">
                      877-770-0157
                    </a>
                    .
                  </p>
                </div>

                {/* Disposer Repair */}
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Hobart Disposer Repair</h3>
                  <p className="text-muted-foreground">We are experts in repairing commercial Hobart disposal units.</p>
                </div>

                {/* Undercounter Dishwasher */}
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Hobart Undercounter Dishwasher Repair</h3>
                  <p className="text-muted-foreground">
                    Professional repair services for all Hobart undercounter dishwasher models.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Convection Oven Section */}
        <section className="py-16 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Hobart Electric And Gas Convection Oven Repair
              </h2>

              <div className="space-y-8">
                <div className="bg-card p-8 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">Electric (DEC, HEC) Models</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Stainless steel front, sides, top, and lacquered legs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Solid state temperature control is adjustable from 150° to 500°F</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Electric 60-minute timer with buzzer</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Energy efficient, 2-speed, 1⁄2 HP engine</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Preheat to 350°F for 10 minutes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Includes porcelain interior</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>6-sided insulation ensures energy efficiency</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card p-8 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">Special Gas and Electric Models</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Computer controlled with digital time and temperature display – "D" models</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Shelf ID</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Cook and hold cycle</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Timer sets the cooking time from 1 minute to 24 hours</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>99 programmable preset buttons</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Extra Deep – 'X' model</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fryer Repair Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Hobart Fryer Repair
              </h2>

              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Standard Features</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>50 lbs. oil capacity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>16 gauge stainless steel fly tank with a 10-year limited tank warranty</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Stainless steel body</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>HF series electric fryers with solid-state digital (D) controls are available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Low-watt density ribbon heaters provide maximum heat</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>17 kW element</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Adjustable temperature control from 200°F to 390°F within +/-2°</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Ceiling control</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Planetary Mixer Section */}
        <section className="py-16 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Hobart Planetary Mixer Repair
              </h2>

              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Standard Features</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>High-performance bowl and spiral motor</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Extra pulley and strong spiral fabric hook</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Manual and automatic</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>2 fixed speed and 2 programmable 20-minute timers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>No need to stop the mixer from changing speeds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Mounted on casters for easy movement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Clear bowl protector</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary via-primary/90 to-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-primary-foreground">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Expert Hobart Appliance Maintenance</h2>
              <p className="text-lg mb-8 text-primary-foreground/90">
                If your business utilizes any of the Hobart commercial appliances mentioned above or others, it's
                crucial to ensure that they receive proper maintenance. Our company has extensive experience in
                delivering high-quality maintenance, repair services, and other solutions that enable you to optimize
                your appliances' performance and maintain their functionality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90 border-2 border-background"
                >
                  <a href="tel:877-770-0157">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now: 877-770-0157
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-primary-foreground border-2 border-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Link href="/contact-us">Get Estimate</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Contact Information
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">Phone</h3>
                      <a href="tel:877-770-0157" className="text-lg text-primary hover:underline font-semibold">
                        877-770-0157
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">Email</h3>
                      <a
                        href="mailto:rapidappliancerepairservices@gmail.com"
                        className="text-primary hover:underline break-all"
                      >
                        rapidappliancerepairservices@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">Hours</h3>
                      <p className="text-muted-foreground">Weekdays, After Hours & Weekends</p>
                      <p className="text-sm text-muted-foreground mt-1">Same Day Service Available</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">Service Area</h3>
                      <p className="text-muted-foreground">Palm Springs & Surrounding Areas</p>
                    </div>
                  </div>
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
