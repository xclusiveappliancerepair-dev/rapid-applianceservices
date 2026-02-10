import { Phone, CheckCircle, Wrench, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function AmanaApplianceCarePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary text-white py-16">
        <div className="absolute inset-0 bg-[url('/abstract-modern-pattern.jpg')] opacity-10 mix-blend-overlay" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Essential Guide: Amana Appliance Care in Palm Springs
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-4">
              Amana Appliance Care – Troubleshooting, Maintenance and Finding Reliable Solutions for Your Home
            </p>
            <p className="text-lg text-primary-foreground/80">Published on February 28, 2024</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Troubleshooting Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Common Issues You Can Troubleshoot</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                While some maintenance tasks can be performed by homeowners, certain repairs may require professional
                assistance. However, there are several common issues you can troubleshoot on your own, such as:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-xl border border-primary/10">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <AlertTriangle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Refrigerator Not Cooling Adequately</h3>
                      <p className="text-muted-foreground">Check for blocked vents or a malfunctioning thermostat.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-xl border border-primary/10">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <AlertTriangle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Oven Not Heating Evenly</h3>
                      <p className="text-muted-foreground">Inspect the heating element for signs of damage or wear.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-xl border border-primary/10">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <AlertTriangle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Dishwasher Not Draining</h3>
                      <p className="text-muted-foreground">
                        Clean the drain filter and check for clogs in the drain hose.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-xl border border-primary/10">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <AlertTriangle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Washing Machine Shaking or Vibrating</h3>
                      <p className="text-muted-foreground">
                        Ensure the machine is level and balanced, and check for overloaded loads.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Choosing Repair Services Section */}
            <section className="mb-12 bg-gradient-to-br from-secondary/5 to-primary/5 p-8 rounded-2xl border border-primary/10">
              <h2 className="text-3xl font-bold text-foreground mb-6">Choosing Reliable Repair Services</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                In the event that your Amana appliance requires professional repair, it's essential to choose a reliable
                service provider in Palm Springs. Look for certified technicians with experience in servicing Amana
                appliances and inquire about warranties on repairs to ensure peace of mind.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By following this comprehensive guide to Amana appliance maintenance in Palm Springs, you can prolong
                the lifespan of your appliances and minimize the need for repairs. From regular maintenance tasks to
                troubleshooting common issues, proactive care is the key to keeping your Amana appliances running
                smoothly in the desert heat.
              </p>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-primary via-primary/90 to-secondary text-white p-8 rounded-2xl mb-12">
              <div className="text-center">
                <Wrench className="w-16 h-16 mx-auto mb-4 text-primary-foreground" />
                <h3 className="text-2xl font-bold mb-4">Need Professional Amana Appliance Repair?</h3>
                <p className="text-lg text-primary-foreground/90 mb-6">
                  Our certified technicians are ready to help with all your Amana appliance needs in Palm Springs.
                </p>
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link href="/contact-us">Contact Us Today</Link>
                </Button>
              </div>
            </section>

            {/* Navigating Repair Services Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Navigating Amana Appliance Repair Services in Palm Springs
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                When your Amana appliances encounter issues, finding trustworthy repair services becomes essential to
                restore functionality and convenience to your home. In Palm Springs, where the heat can put extra strain
                on appliances, it's crucial to navigate the repair landscape effectively. This article serves as your
                guide to locating reliable Amana appliance repair services in Palm Springs, ensuring your appliances
                receive the expert attention they deserve.
              </p>

              <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">
                Understanding the Importance of Reliable Appliance Repair
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Amana appliances are renowned for their quality and reliability, but like any other appliance, they may
                encounter malfunctions over time. From refrigerators to ovens, these appliances play a vital role in
                daily life, and prompt repairs are necessary to prevent disruptions. Entrusting your Amana appliance
                repairs to skilled professionals ensures that the job is done right the first time, saving you time,
                money, and frustration.
              </p>
            </section>

            {/* Factors to Consider Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Factors to Consider When Choosing Amana Appliance Repair Services
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border border-primary/10">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Experience and Expertise</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Look for repair companies with extensive experience specifically in repairing Amana appliances.
                      Experienced technicians are equipped with the knowledge and skills to diagnose issues accurately
                      and provide effective solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border border-primary/10">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Licensing and Certification</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Verify that the repair service is licensed and certified to work on Amana appliances. This ensures
                      that they adhere to industry standards and regulations, giving you peace of mind regarding the
                      quality of service.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border border-primary/10">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Reputation and Reviews</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Check online reviews and testimonials from previous customers to gauge the reputation of the
                      repair service. Positive reviews indicate reliability, professionalism, and customer satisfaction,
                      while negative reviews may raise red flags.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border border-primary/10">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Promptness and Availability</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      When dealing with appliance issues, time is of the essence. Choose a repair service that offers
                      prompt response times and flexible scheduling to accommodate your needs efficiently.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border border-primary/10">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Warranty and Guarantees</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Opt for repair services that stand behind their work with warranties and guarantees. This
                      demonstrates their confidence in the quality of their repairs and provides you with recourse in
                      case of any issues post-repair.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Finding Services Section */}
            <section className="mb-12 bg-gradient-to-br from-secondary/5 to-primary/5 p-8 rounded-2xl border border-primary/10">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Finding Amana Appliance Repair Services in Palm Springs
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In Palm Springs, several reputable appliance repair companies specialize in servicing Amana appliances.
                Utilize online directories, search engines, and review platforms to identify these companies.
                Additionally, seek recommendations from friends, family, or neighbors who have had positive experiences
                with Amana appliance repair services in the area.
              </p>
            </section>

            {/* Conclusion Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Conclusion</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Navigating Amana appliance repair services in Palm Springs doesn't have to be daunting. By considering
                factors such as experience, licensing, reputation, promptness, and warranties, you can find reliable
                repair services that meet your needs and expectations. Investing in professional repairs ensures that
                your Amana appliances continue to serve you efficiently, enhancing the comfort and functionality of your
                home.
              </p>
            </section>

            {/* Final CTA */}
            <section className="bg-gradient-to-br from-primary via-primary/90 to-secondary text-white p-8 rounded-2xl text-center">
              <Phone className="w-16 h-16 mx-auto mb-4 text-primary-foreground" />
              <h3 className="text-2xl font-bold mb-4">Ready to Schedule Your Amana Appliance Repair?</h3>
              <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Contact Rapid Appliance Service today for expert Amana appliance repair in Palm Springs. Our certified
                technicians are ready to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link href="/contact-us">Get a Free Estimate</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  <a href="tel:877-770-0157">Call (877) 770-0157</a>
                </Button>
              </div>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
