import Link from "next/link"
import { Phone, CheckCircle2, Wrench, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

export default function SamsungRepairPage() {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary text-white py-20">
          <div className="absolute inset-0 bg-[url('/abstract-tech-pattern.png')] opacity-5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Palm Springs Samsung Appliance Repair
              </h1>
              <p className="text-xl mb-8 text-primary-foreground/90 text-pretty">
                Expert Samsung appliance repair services in Palm Springs area
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                  <Link href="/contact-us">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now: (760) 621-5489
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10"
                >
                  <Link href="/contact-us">Get Estimate</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Common Issues Section */}
        <section className="py-16 bg-gradient-to-b from-white to-neutral-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                <strong>Samsung</strong> is a popular appliance brand offering a wide range of products for homes and
                businesses. However, like any other brand, Samsung appliances may experience problems over time. Here
                are some common issues that you might encounter with your Samsung appliances:
              </p>

              <div className="grid md:grid-cols-1 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-border">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                        <Wrench className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Refrigerator not cooling</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        This is a common problem with Samsung refrigerators, and various issues, such as a{" "}
                        <strong>faulty compressor</strong>, <strong>condenser fan</strong>, or{" "}
                        <strong>evaporator fan</strong>, can cause it. If your refrigerator is not cooling properly, it
                        is best to call a professional Samsung appliance repair service to diagnose and fix the problem.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-border">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                        <Wrench className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Oven not heating</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        If your Samsung oven is not heating, it could be due to a{" "}
                        <strong>faulty heating element</strong>, <strong>igniter</strong>, or{" "}
                        <strong>thermostat</strong>. A professional technician can troubleshoot the issue and recommend
                        the best solution.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-border">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                        <Wrench className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Washer not draining</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        If your Samsung washer is not draining properly, it could be due to a{" "}
                        <strong>clogged drain pump or hose</strong>, a <strong>faulty pump motor</strong>, or a{" "}
                        <strong>malfunctioning control board</strong>. A professional samsung washer repair service can
                        help resolve the issue.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Samsung Section */}
        <section className="py-16 bg-gradient-to-b from-neutral-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
                Why Choose Samsung Appliances
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Samsung appliances offer many benefits, making them popular among homeowners and businesses. Here are
                some reasons why you should consider choosing Samsung appliances:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-md border border-border">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">Energy-efficient</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Samsung appliances are designed to be energy-efficient, which can help you save money on your
                        energy bills in the long run.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border border-border">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">Smart technology</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Many Samsung appliances are equipped with smart technology, allowing you to control them from
                        your smartphone or tablet. This feature can be very convenient, especially for busy households.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border border-border">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">High-quality materials</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Samsung appliances are made with high-quality materials, ensuring durability and longevity.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border border-border">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">Stylish designs</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Samsung appliances are designed to be stylish and modern, adding a touch of elegance to your
                        home or business.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Overall, Samsung appliances offer reliable performance and innovative features, making them popular
                among consumers. If you encounter any issues with your Samsung appliances, be sure to contact a
                professional Samsung appliance repair service like <strong>Rapid Appliance Service</strong> to get them
                fixed promptly.
              </p>
            </div>
          </div>
        </section>

        {/* When to Contact Section */}
        <section className="py-16 bg-gradient-to-b from-white to-neutral-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
                When You Have To Get In Touch With Our Palm Spring Samsung Repair Service
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-center">
                Below is a list of the most common issues that may require contacting a Samsung device repair company.
              </p>

              <div className="grid md:grid-cols-1 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-md border border-border">
                  <div className="flex items-start gap-3">
                    <Award className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">Refrigerator Not Cooling</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        There are many reasons why a refrigerator may be running hot, but in order to find out what the
                        problem is, you should contact a qualified technician as soon as possible.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border border-border">
                  <div className="flex items-start gap-3">
                    <Award className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">Sounds coming from the refrigerator</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Humming, ticking, knocking, or other strange noises can indicate that you need a professional to
                        fix the problem.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                Whenever you experience a problem with your Samsung device, you should have a qualified and experienced
                Samsung device repair technician in Palm Springs by your side to properly resolve the issue.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary via-primary/90 to-secondary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Samsung Appliance Repair?</h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Contact us today for fast, reliable Samsung appliance repair services in Palm Springs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                  <Link href="/contact-us">
                    <Phone className="mr-2 h-5 w-5" />
                    (760) 621-5489
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10"
                >
                  <Link href="/contact-us">Schedule Service</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
