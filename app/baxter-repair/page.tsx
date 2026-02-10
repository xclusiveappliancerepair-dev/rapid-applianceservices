import { Phone, CheckCircle2, Wrench, Clock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Footer from "@/components/footer"

export default function BaxterRepairPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground">
        <div className="absolute inset-0 bg-[url('/abstract-modern-pattern.jpg')] opacity-10 mix-blend-overlay"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Baxter Repair Palm Springs, CA</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Commercial Appliances Repair Service in Palm Springs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                <Link href="tel:877-770-0157">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (877) 770-0157
                </Link>
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

      {/* Baxter Repair Service Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Baxter Repair Service</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Baxter is a well-regarded and widely used equipment supplier for various businesses, such as educational
                institutions, grocery stores, healthcare facilities, assisted-living facilities, restaurants, hotels,
                resorts, military bases, and correctional facilities.
              </p>
              <p>
                Baxter products are also commonly found in smaller bakeries and other establishments with multiple ovens
                for mass production. These versatile appliances can be used for various tasks, including baking bread,
                roasting, and reheating frozen meals. We provide speedy repair services for Baxter appliances in Palm
                Springs, equipped with all the necessary tools to restore your equipment quickly.
              </p>
              <p>
                We aim to deliver high-quality service, solutions, and exceptional value for your repair investment. If
                you're experiencing issues with your Baxter appliances, don't hesitate to contact us immediately. We're
                always ready to provide professional Baxter appliance repairs in Palm Springs and surrounding areas, and
                our experienced team will diagnose and repair the problem the same day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Baxter Products Grid */}
      <section className="py-16 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Baxter Equipment We Repair</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Bread Slicer */}
            <div className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-primary">Baxter Bread Slicer Repair</h3>
              <p className="font-semibold mb-3">Standard features:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Quiet operation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Easy-to-clean, removable crumb tray</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Reversible bagging spade</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Lockable castors</span>
                </li>
              </ul>
            </div>

            {/* Deck Oven */}
            <div className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-primary">Baxter Deck Oven Repair</h3>
              <p className="font-semibold mb-3">Standard features:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Available in two widths: 36.6″ wide (OV400N) or 60.3″ wide (OV400W)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Stack up to 4 decks high</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Each deck is sold and operated separately</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Stainless steel body</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Glazed stone cooking surface</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Separately controllable top and bottom elements</span>
                </li>
              </ul>
            </div>

            {/* Bakery Retarder */}
            <div className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-primary">Baxter Bakery Retarder Repair</h3>
              <p className="font-semibold mb-3">Standard features:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Stainless steel interior and exterior</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Self-closing door with 120° hold-open feature</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Long life cam lift hinges</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Automatic non-electrical condensate evaporator</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Magnetic closing door seal</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>1-year parts and labor warranty</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>5-year warranty on the compressor</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Digital control panel with LED display and temperature monitoring</span>
                </li>
              </ul>
            </div>

            {/* Hybrid Convection Oven */}
            <div className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-primary">Baxter Hybrid Convection Oven Repair</h3>
              <p className="font-semibold mb-3">Standard features:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Accommodates 4 pans with 4-inch spacing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Uses a standard 18 x 26 inch pan</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Self-contained nodular iron steam system</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>User-friendly digital controls for temperature, time, steam, and blower</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Energy-saving sleep mode</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Stainless steel construction</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Removable slide for easy cleaning</span>
                </li>
              </ul>
            </div>

            {/* Retarder Proofer Cabinets */}
            <div className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-primary">Baxter Retarder Proofer Cabinets Repair</h3>
              <p className="font-semibold mb-3">Standard features:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Eye-level digital control panel for heat/humidity and delay systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Optional self-contained refrigeration system available</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Easily accessible temperature and humidity system</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Modular panel construction with camlock attachment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Single door units include field reversible doors</span>
                </li>
              </ul>
            </div>

            {/* Proofing Cabinets */}
            <div className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-primary">Baxter Proofing Cabinets Repair</h3>
              <p className="font-semibold mb-3">Standard features:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>99.5 inches tall to fit rack ovens</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Airflow system provides consistent fermentation results</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Stainless steel interior and exterior</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Equipped with bumpers on all sides to protect finish</span>
                </li>
              </ul>
            </div>

            {/* Revolving Tray Oven */}
            <div className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-primary">Baxter Revolving Tray Oven Repair</h3>
              <p className="font-semibold mb-3">Standard features:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Available with 18-, 24-, 30-, 36-pan capacity</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Hood with grease filters complies with NFPA 96</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Hand-crank for emergency power outage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Windowed loading door slides upward for full width access</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Quick-view oven status display</span>
                </li>
              </ul>
            </div>

            {/* Single And Double Rack Oven */}
            <div className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-primary">Baxter Single And Double Rack Oven Repair</h3>
              <p className="font-semibold mb-3">Standard features:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Advanced digital programmable control panel</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Grill/steam timer, cool-down mode, vent mode</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>4-step grill and auto ON/OFF control</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>99 menus with energy-saving sleep mode</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Heavy-duty rack and pinion lift with soft start rotation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Stainless steel internal and external construction</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Easy access on flat floors – no ramps required</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose Our Baxter Repair Service</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Wrench className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Technicians</h3>
              <p className="text-muted-foreground">Specialized in commercial Baxter equipment repair</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                <Clock className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Same Day Service</h3>
              <p className="text-muted-foreground">Fast diagnosis and repair to minimize downtime</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Parts</h3>
              <p className="text-muted-foreground">Equipped with all necessary tools and parts</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Exceptional Value</h3>
              <p className="text-muted-foreground">High-quality service and solutions for your investment</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Baxter Equipment Repair?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Contact us immediately for professional Baxter appliance repairs in Palm Springs and surrounding areas.
              Our experienced team will diagnose and repair the problem the same day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                <Link href="tel:877-770-0157">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (877) 770-0157
                </Link>
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

      <Footer />
    </div>
  )
}
