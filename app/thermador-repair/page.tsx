import { Phone, Clock, MapPin, CheckCircle, Settings, Zap, Lightbulb, Award } from "lucide-react"
import Footer from "@/components/footer"

export default function ThermadorRepairPage() {
  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Thermador Appliance Repair Services Palm Springs
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                While Thermador appliances are built to last, they can sometimes experience issues that require repair.
                Here are some common problems that our technicians at Rapid Appliance Service can help you with:
              </p>
            </div>
          </div>
        </section>

        {/* Common Problems Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Common Thermador Appliance Issues</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Oven Not Heating</h3>
                <p className="text-muted-foreground">
                  If your Thermador oven isn't heating up properly, it could be due to a faulty heating element,
                  thermostat, or control board. Our technicians can diagnose the issue and make the necessary repairs.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Refrigerator Not Cooling</h3>
                <p className="text-muted-foreground">
                  If your Thermador refrigerator isn't cooling properly, it could be due to a faulty compressor,
                  condenser, or evaporator fan. Our technicians can identify the root cause of the issue and fix it
                  quickly.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Dishwasher Not Cleaning</h3>
                <p className="text-muted-foreground">
                  If your Thermador dishwasher isn't cleaning dishes properly, it could be due to a clogged spray arm,
                  faulty pump, or malfunctioning control board. Our technicians can troubleshoot the issue and provide a
                  solution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Thermador Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Thermador Appliances</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Superior Performance</h3>
                <p className="text-muted-foreground">
                  Thermador appliances are designed to deliver exceptional performance, whether you're cooking,
                  cleaning, or storing food. Their products are engineered with precision and use high-quality materials
                  to ensure longevity and efficiency.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovative Features</h3>
                <p className="text-muted-foreground">
                  Thermador is known for its innovative features that make cooking and cleaning easier and more
                  convenient. Their products include self-cleaning ovens, precision cooking modes, and smart
                  connectivity options.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Professional Grade</h3>
                <p className="text-muted-foreground">
                  Thermador appliances are often used in professional kitchens, which is a testament to their durability
                  and quality. They are designed to handle the demands of a busy kitchen and are built to last.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Expert Service Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Expert Thermador Repair Service</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      At Rapid Appliance Service, we have years of experience repairing Thermador appliances. Our
                      technicians are factory-trained and certified, so we have the knowledge and expertise to repair
                      your appliance quickly and effectively. Contact us today to schedule an appointment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary to-secondary rounded-2xl p-12 text-primary-foreground">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Thermador Appliance Repair?</h2>
              <p className="text-xl mb-8 text-primary-foreground/90">Contact us today for fast, reliable service</p>
              <a
                href="tel:+18777700157"
                className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-background/90 transition-colors text-lg"
              >
                <Phone className="w-5 h-5" />
                (877) 770-0157
              </a>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                    <p className="text-muted-foreground">Monday - Sunday</p>
                    <p className="text-muted-foreground">8:00 AM - 8:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Service Area</h3>
                    <p className="text-muted-foreground">Palm Springs, CA</p>
                    <p className="text-muted-foreground">and surrounding areas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
