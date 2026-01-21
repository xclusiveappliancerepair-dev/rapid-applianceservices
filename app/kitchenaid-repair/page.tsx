import { Phone, Mail, CheckCircle2, Wrench } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

export default function KitchenAidRepairPage() {
  const commonProblems = [
    {
      title: "Refrigerator not cooling",
      description:
        "A refrigerator that's not cooling properly can be a serious problem, as it can lead to food spoilage. If your KitchenAid refrigerator isn't cooling properly, it could be due to a faulty compressor, condenser, or evaporator fan motor.",
    },
    {
      title: "Dishwasher not cleaning dishes properly",
      description:
        "If you notice that your dishes aren't coming out of the dishwasher clean, it could be due to a clogged spray arm, a broken pump, or a malfunctioning dishwasher detergent dispenser.",
    },
    {
      title: "Oven not heating",
      description:
        "If your KitchenAid oven isn't heating properly, it could be due to a broken heating element, a faulty thermostat, or a malfunctioning control board.",
    },
    {
      title: "Range burners not lighting",
      description:
        "If your KitchenAid range burners aren't lighting, it could be due to a faulty igniter, a clogged burner port, or a broken gas valve.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary text-white py-20">
        <div className="absolute inset-0 bg-[url('/abstract-tech-pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Kitchen Aid Repair</h1>
            <p className="text-xl text-primary-foreground/90 mb-8 text-pretty">
              Kitchen Aid Appliance Repair Services Palm Springs
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <a href="tel:877-770-0157">
                  <Phone className="w-5 h-5 mr-2" />
                  877-770-0157
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-neutral-50">
                <Link href="/contact-us">Get Estimate</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/kitchenaid-appliance-repair-technician-working.jpg" alt="KitchenAid Repair Service" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">Palm Springs KitchenAid Repair</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  <strong>KitchenAid</strong> is a leading brand in the world of home appliances. Their products are
                  known for their quality, reliability, and innovative designs. As an{" "}
                  <strong>appliance repairing company</strong>, Rapid Appliance Service proudly offers{" "}
                  <strong>kitchen aid repair</strong> services for KitchenAid appliances in the{" "}
                  <strong>Palm Springs</strong> area.
                </p>
                <p>
                  We understand the importance of having functioning appliances in your home, and that's why we're
                  dedicated to providing fast, efficient, and reliable <strong>repair services</strong> for your
                  KitchenAid appliances.
                </p>
                <p>
                  We offer a wide range of <strong>KitchenAid appliance repairs</strong> for your kitchen, including{" "}
                  <strong>refrigerators</strong>, <strong>dishwashers</strong>, <strong>ovens</strong>,{" "}
                  <strong>ranges</strong>, and more. KitchenAid appliances are designed with the latest technology to
                  make your life easier, and they come in various styles to fit any kitchen decor.
                </p>
                <p>
                  Whether you're a professional chef or a home cook, <strong>KitchenAid appliances</strong> are the
                  perfect addition to any kitchen.
                </p>
              </div>
            </div>
          </div>

          {/* Common Problems Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-4 text-primary">Common KitchenAid Appliance Problems</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
              While <strong>KitchenAid appliances</strong> are known for their quality and reliability, like any
              appliance, they can experience issues from time to time. Here are some common{" "}
              <strong>KitchenAid appliance</strong> problems that we frequently encounter and can help repair:
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {commonProblems.map((problem, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-neutral-50 rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 p-3 rounded-lg flex-shrink-0">
                      <Wrench className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-foreground">{problem.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                At <strong>Rapid Appliance Service</strong>, we have the expertise and experience to diagnose and repair
                these common KitchenAid appliance problems. Our <strong>kitchen aid repair</strong> technicians are
                trained to quickly identify the issue and provide a lasting repair solution, so you can confidently get
                back to using your KitchenAid <strong>appliances</strong>.
              </p>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-4xl font-bold mb-8 text-primary text-center">Kitchen Aid Repair - Why Choose Us</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                As Orange County's most experienced and knowledgeable{" "}
                <strong>KitchenAid Equipment Repair Service</strong>, we can help you with any necessary repairs to your
                KitchenAid equipment. Whether you need to fix an aging device or restore an old component that isn't
                working properly, this is the best way to get professional services.
              </p>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground leading-relaxed">
                  All <strong>KitchenAid appliance repair</strong> professionals are fully certified and licensed. Our
                  technicians will quickly and efficiently perform all required device repairs.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We've been working with <strong>KitchenAid appliances</strong> for a long time and are well-versed in
                  all sorts of issues and invisible issues.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-br from-secondary to-secondary/90 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Get in touch with us.</h2>
                <p className="text-secondary-foreground/90 mb-6 text-lg">
                  Contact us today for fast and reliable KitchenAid appliance repair services in Palm Springs
                </p>
                <div className="space-y-4">
                  <a
                    href="tel:877-770-0157"
                    className="flex items-center gap-3 text-xl font-semibold hover:text-secondary-foreground/80 transition-colors"
                  >
                    <Phone className="w-6 h-6" />
                    877-770-0157
                  </a>
                  <a
                    href="mailto:rapidappliancerepairservices@gmail.com"
                    className="flex items-center gap-3 text-sm hover:text-secondary-foreground/80 transition-colors break-all"
                  >
                    <Mail className="w-5 h-5 flex-shrink-0" />
                    rapidappliancerepairservices@gmail.com
                  </a>
                </div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Opening hours</h3>
                <p className="mb-2">Mon - Sat 08:00AM - 6:00PM</p>
                <p className="mb-6">Sunday - Closed</p>
                <h3 className="text-xl font-bold mb-4">Address</h3>
                <p>74711 Dillon Rd</p>
                <p>SPC 33</p>
                <p>Desert Hot Springs, CA, 92241</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
