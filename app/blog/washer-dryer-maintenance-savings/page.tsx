import { Calendar, ArrowLeft, Phone, Wrench, DollarSign, Shield, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

export default function WasherDryerMaintenancePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary text-white py-20">
        <div className="absolute inset-0 bg-[url('/abstract-modern-pattern.jpg')] opacity-10 mix-blend-overlay" />
        <div className="container mx-auto px-4 relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-white/90 mb-4">
              <Calendar className="w-5 h-5" />
              <time>February 20, 2024</time>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Washer Dryer Repair and Maintenance in Long-Term Savings
            </h1>
            <p className="text-xl text-white/90 text-pretty">
              In the realm of household appliances, washers and dryers form a dynamic duo, tackling the never-ending
              task of laundry. While often taken for granted, these workhorses play a pivotal role in our daily
              lives—and in our finances.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
              <Image
                src="/washer-dryer-maintenance.jpg"
                alt="Washer and Dryer Maintenance"
                fill
                className="object-cover"
              />
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-neutral-700 leading-relaxed">
                Neglecting their maintenance can result in unnecessary expenses. Let's explore why prioritizing
                maintenance for both washers and dryers is essential for long-term money-saving endeavors.
              </p>
            </div>

            {/* Efficiency Section */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <DollarSign className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-navy-900 mb-4">Efficiency: The Cornerstone of Savings</h2>
                  </div>
                </div>
                <div className="space-y-4 text-neutral-700 leading-relaxed">
                  <p>
                    Efficiency is the cornerstone of saving money when it comes to laundry appliances. A well-maintained
                    washer operates more efficiently, utilizing less water and energy per cycle. Simple tasks like
                    cleaning the detergent dispenser, inspecting hoses for leaks, and periodically running cleaning
                    cycles can prevent buildup of grime and mineral deposits, ensuring optimal performance.
                  </p>
                  <p>
                    Similarly, dryer efficiency is directly linked to maintenance. Regularly cleaning the lint trap,
                    vents, and ducts not only improves airflow but also reduces drying times. This translates to lower
                    energy bills and decreased wear and tear on the appliance, ultimately saving you money in the long
                    run.
                  </p>
                </div>
              </div>
            </section>

            {/* Preventing Repairs Section */}
            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-secondary/10 rounded-xl">
                  <Wrench className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-navy-900 mb-4">Preventing Costly Repairs</h2>
                </div>
              </div>
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  Ignoring maintenance invites the risk of costly repairs down the line. Components such as belts,
                  pumps, and seals in washers are prone to wear and tear over time. Routine maintenance allows you to
                  identify and address minor issues before they escalate into major problems, saving you from expensive
                  repairs or the need for premature replacement.
                </p>
                <p>
                  Likewise, neglecting dryer maintenance can lead to malfunctions in heating elements, thermostats, and
                  drum rollers. By scheduling regular inspections and addressing any signs of wear or damage promptly,
                  you can avoid costly breakdowns and keep your appliances running smoothly for years to come.
                </p>
              </div>
            </section>

            {/* Safety Section */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-amber-100 rounded-xl">
                    <Shield className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-navy-900 mb-4">Safety First</h2>
                  </div>
                </div>
                <div className="space-y-4 text-neutral-700 leading-relaxed">
                  <p>
                    Beyond financial considerations, safety is paramount when it comes to washer and dryer maintenance.
                    Faulty washers can leak water, posing a risk of flooding and water damage to your home. Routine
                    inspections of hoses, seals, and connections can help prevent such incidents, safeguarding your
                    property and belongings.
                  </p>
                  <p>
                    Dryers, on the other hand, are a potential fire hazard if not properly maintained. Lint buildup in
                    vents and ducts is highly combustible, increasing the risk of dryer fires. Regular cleaning and
                    inspection of these components are critical for fire prevention, ensuring the safety of your home
                    and loved ones.
                  </p>
                </div>
              </div>
            </section>

            {/* Maximizing Lifespan Section */}
            <section className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-navy-900 mb-4">Maximizing Appliance Lifespan</h2>
                </div>
              </div>
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  Washers and dryers represent significant investments for any household. Protecting these investments
                  requires proactive care. By performing regular maintenance and addressing minor issues promptly, you
                  can extend the lifespan of your appliances, delaying the need for costly replacements and maximizing
                  your return on investment.
                </p>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/10">
                <h2 className="text-2xl font-bold text-navy-900 mb-4">Conclusion</h2>
                <p className="text-neutral-700 leading-relaxed">
                  In conclusion, the importance of washer and dryer maintenance cannot be overstated for long-term
                  money-saving goals. From improving efficiency and preventing costly repairs to ensuring safety and
                  prolonging appliance lifespan, the benefits are manifold. By incorporating simple maintenance tasks
                  into your household routine and seeking professional assistance when needed, you can enjoy significant
                  savings while preserving the functionality and safety of your appliances for years to come.
                </p>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-primary via-primary/90 to-secondary text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Need Professional Washer or Dryer Repair?</h3>
              <p className="text-lg mb-6 text-primary-foreground/90">
                Our expert technicians are ready to help you maintain and repair your appliances.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">
                    <Phone className="w-5 h-5 mr-2" />
                    Contact Us
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-white/10 border-white/20 hover:bg-white/20">
                  <a href="tel:877-770-0157">
                    <Phone className="w-5 h-5 mr-2" />
                    Call 877-770-0157
                  </a>
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
