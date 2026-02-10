import { Wrench, Zap, Flame, ThermometerSun, Calendar } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

export default function CooktopProblemsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary text-white py-16">
        <div className="absolute inset-0 bg-[url('/abstract-modern-pattern.jpg')] opacity-10 mix-blend-overlay" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-sm mb-4">
              <Calendar className="w-4 h-4" />
              <time>March 10, 2024</time>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Top 5 Common Cooktop Problems and How to Fix Them Yourself
            </h1>
            <p className="text-xl text-white/90 text-pretty">
              Learn how to troubleshoot and fix common cooktop problems with step-by-step solutions. Save time and money
              with DIY cooktop repairs.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-neutral-700 leading-relaxed">
                Cooktops are an essential part of any kitchen, providing the heat necessary to cook your favorite meals.
                However, like any appliance, they can encounter issues over time. Understanding the most common cooktop
                problems and how to fix them yourself can save you time and money. In this guide, we'll walk you through
                the top 5 common cooktop problems and provide practical solutions for each.
              </p>
            </div>

            {/* Problem 1: Cooktop Won't Turn On */}
            <div className="mb-16">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-navy-900 mb-4">1. Cooktop Won't Turn On</h2>
                </div>
              </div>

              <div className="bg-gradient-to-br from-neutral-50 to-white rounded-2xl p-8 border border-neutral-200 mb-6">
                <h3 className="text-xl font-bold text-navy-900 mb-4">Common Causes</h3>
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong>Power Supply Issues:</strong> This could be due to a tripped circuit breaker or a blown
                      fuse.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong>Faulty Outlet:</strong> Sometimes, the issue lies in the electrical outlet itself.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong>Internal Wiring Problems:</strong> Loose or damaged wires within the cooktop can prevent
                      it from turning on.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-primary/20 shadow-sm">
                <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-primary" />
                  How to Fix It
                </h3>
                <ol className="space-y-4 text-neutral-700">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </span>
                    <div>
                      <strong>Check the Power Supply:</strong> Ensure that your cooktop is properly plugged in and check
                      your home's circuit breaker or fuse box for any tripped switches or blown fuses. Reset the breaker
                      or replace the fuse if necessary.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </span>
                    <div>
                      <strong>Test the Outlet:</strong> Plug a different appliance into the same outlet to see if it
                      works. If the outlet is faulty, you may need to replace it or consult an electrician.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </span>
                    <div>
                      <strong>Inspect Internal Wiring:</strong> If you are comfortable doing so, unplug the cooktop and
                      open it to check for any loose or damaged wires. Tighten loose connections or replace damaged
                      wires as needed. If you're unsure, contact a professional technician.
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            {/* Problem 2: Burner Won't Heat Up */}
            <div className="mb-16">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <Flame className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-navy-900 mb-4">2. Burner Won't Heat Up</h2>
                </div>
              </div>

              <div className="bg-gradient-to-br from-neutral-50 to-white rounded-2xl p-8 border border-neutral-200 mb-6">
                <h3 className="text-xl font-bold text-navy-900 mb-4">Common Causes</h3>
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong>Burner Element Issues:</strong> The burner element may be damaged or worn out.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong>Faulty Switch:</strong> The switch that controls the burner might be defective.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong>Internal Wiring Problems:</strong> Similar to the cooktop not turning on, loose or damaged
                      wires can cause this issue.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-primary/20 shadow-sm">
                <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-primary" />
                  How to Fix It
                </h3>
                <ol className="space-y-4 text-neutral-700">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </span>
                    <div>
                      <strong>Inspect the Burner Element:</strong> Unplug the cooktop and remove the burner element.
                      Check for visible signs of damage such as cracks or burns. Replace the element if it appears
                      damaged.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </span>
                    <div>
                      <strong>Test the Switch:</strong> Use a multimeter to test the switch for continuity. If the
                      switch is defective, replace it.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </span>
                    <div>
                      <strong>Check Internal Wiring:</strong> As with the first problem, inspect and repair any loose or
                      damaged wires within the cooktop.
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            {/* Problem 3: Indicator Lights Not Working */}
            <div className="mb-16">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-navy-900 mb-4">3. Indicator Lights Not Working</h2>
                </div>
              </div>

              <div className="bg-gradient-to-br from-neutral-50 to-white rounded-2xl p-8 border border-neutral-200 mb-6">
                <h3 className="text-xl font-bold text-navy-900 mb-4">Common Causes</h3>
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong>Burned-Out Bulbs:</strong> The indicator lights may have simply burned out.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong>Faulty Indicator Switch:</strong> The switch controlling the indicator lights could be
                      defective.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong>Wiring Issues:</strong> Loose or damaged wires can also cause indicator lights to fail.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-primary/20 shadow-sm">
                <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-primary" />
                  How to Fix It
                </h3>
                <ol className="space-y-4 text-neutral-700">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </span>
                    <div>
                      <strong>Replace Burned-Out Bulbs:</strong> Unplug the cooktop and replace any burned-out indicator
                      light bulbs with new ones.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </span>
                    <div>
                      <strong>Test the Indicator Switch:</strong> Use a multimeter to check the switch for continuity.
                      Replace the switch if it is faulty.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </span>
                    <div>
                      <strong>Inspect Wiring:</strong> Check and repair any loose or damaged wires connected to the
                      indicator lights.
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            {/* Problem 4: Cooktop Sparking */}
            <div className="mb-16">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-navy-900 mb-4">4. Cooktop Sparking</h2>
                </div>
              </div>

              <div className="bg-gradient-to-br from-neutral-50 to-white rounded-2xl p-8 border border-neutral-200 mb-6">
                <h3 className="text-xl font-bold text-navy-900 mb-4">Common Causes</h3>
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong>Wet or Dirty Igniters:</strong> Moisture or debris on the igniters can cause sparking.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong>Faulty Ignition Switch:</strong> A malfunctioning ignition switch can lead to continuous
                      sparking.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong>Damaged Igniter Wires:</strong> Damaged wires connected to the igniters can also cause
                      this problem.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-primary/20 shadow-sm">
                <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-primary" />
                  How to Fix It
                </h3>
                <ol className="space-y-4 text-neutral-700">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </span>
                    <div>
                      <strong>Clean the Igniters:</strong> Turn off the cooktop and clean the igniters with a dry cloth.
                      Ensure they are free of moisture and debris.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </span>
                    <div>
                      <strong>Test the Ignition Switch:</strong> Check the ignition switch with a multimeter and replace
                      it if it is defective.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </span>
                    <div>
                      <strong>Repair Igniter Wires:</strong> Inspect the wires connected to the igniters for damage and
                      repair or replace them as needed.
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            {/* Problem 5: Uneven Heating */}
            <div className="mb-16">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <ThermometerSun className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-navy-900 mb-4">5. Uneven Heating</h2>
                </div>
              </div>

              <div className="bg-gradient-to-br from-neutral-50 to-white rounded-2xl p-8 border border-neutral-200 mb-6">
                <h3 className="text-xl font-bold text-navy-900 mb-4">Common Causes</h3>
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong>Burner Element Issues:</strong> A damaged or unevenly heated burner element can cause this
                      problem.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong>Cookware Problems:</strong> Warped or uneven cookware can also lead to uneven heating.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong>Temperature Sensor Issues:</strong> A faulty temperature sensor can affect heating
                      consistency.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-primary/20 shadow-sm">
                <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-primary" />
                  How to Fix It
                </h3>
                <ol className="space-y-4 text-neutral-700">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </span>
                    <div>
                      <strong>Inspect the Burner Element:</strong> Replace any burner elements that appear damaged or do
                      not heat evenly.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </span>
                    <div>
                      <strong>Check Your Cookware:</strong> Ensure your cookware has flat bottoms and is in good
                      condition. Replace warped pots and pans.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </span>
                    <div>
                      <strong>Test the Temperature Sensor:</strong> If your cooktop has a temperature sensor, use a
                      multimeter to test it for accuracy and replace it if necessary.
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/20 mb-12">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Conclusion</h2>
              <p className="text-neutral-700 leading-relaxed">
                Dealing with cooktop problems can be frustrating, but many common issues can be resolved with a bit of
                troubleshooting and some basic repairs. By following these tips, you can keep your cooktop in good
                working condition and avoid costly service calls. However, if you're ever in doubt or encounter a
                complex issue, don't hesitate to contact a professional technician for help.
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-primary via-primary/90 to-secondary text-white rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Professional Help?</h2>
              <p className="text-xl mb-8 text-white/90">
                If you encounter any issues beyond basic troubleshooting, our expert technicians are ready to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="text-lg">
                  <Link href="/contact-us">Schedule Service</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
                  <a href="tel:877-770-0157">Call (877) 770-0157</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
