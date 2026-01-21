import { Phone, Wrench, Clock, Shield, ThumbsUp, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

export default function FrigidaireRepairPage() {
  const repairServices = [
    "Frigidaire refrigerator repair, including French door, side-by-side, and top freezer models",
    "Frigidaire dishwashers repair, including built-in and portable models",
    "Frigidaire stoves and ovens repair, including electric and gas models",
    "Frigidaire microwaves repair, including over-the-range and countertop models",
  ]

  const whyChooseFrigidaire = [
    {
      title: "Energy Efficiency",
      description:
        "Frigidaire appliances are designed to be as energy-efficient as possible, helping you save money on your utility bills while reducing your environmental footprint.",
      icon: ThumbsUp,
    },
    {
      title: "Innovation",
      description:
        "Frigidaire constantly pushes the boundaries of what's possible in home appliances, with features like customizable storage options, quick-clean options, and more.",
      icon: Wrench,
    },
    {
      title: "Durability",
      description:
        "Frigidaire appliances are built to last, with high-quality materials and rigorous testing procedures, ensuring they can withstand everyday use's wear and tear.",
      icon: Shield,
    },
    {
      title: "Style",
      description:
        "Frigidaire appliances are available in various styles and colors so that you can find the perfect match for your kitchen's décor.",
      icon: CheckCircle,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary text-white py-20">
        <div className="absolute inset-0 bg-[url('/abstract-tech-pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Frigidaire Appliance Repair Services Palm Springs
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 text-pretty">
              Expert repair services for all your Frigidaire appliances with same-day service available
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-neutral-100">
              <Link href="/contact-us">
                <Phone className="mr-2 h-5 w-5" />
                Call 877-770-0157
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/technician-repairing-frigidaire-appliance.jpg"
                alt="Frigidaire Appliance Repair"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">Palm Springs Frigidaire Repair</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At <strong>Rapid Appliance Service</strong>, we proudly offer repair services for various{" "}
                  <strong>Frigidaire appliance repairs</strong>. Whether you're dealing with a malfunctioning
                  refrigerator, a faulty dishwasher, or a broken stove or oven, our team of experienced{" "}
                  <strong>Frigidaire repair technicians</strong> has the skills and expertise to diagnose and fix the
                  problem quickly and effectively.
                </p>
              </div>
            </div>
          </div>

          {/* Repair Services List */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center text-primary">
              Some of the Frigidaire Appliances We Repair
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {repairServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-background to-accent/10 rounded-xl p-6 border border-border hover:border-secondary transition-all hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-secondary" />
                    </div>
                    <p className="text-foreground leading-relaxed">{service}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-lg text-muted-foreground mt-8">
              No matter what type of Frigidaire appliance you have, our team is here to help. We use only the{" "}
              <strong>highest-quality parts and equipment</strong> to ensure that your appliance is repaired to the
              highest standards of quality and reliability.
            </p>
          </div>

          {/* Why Choose Frigidaire Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4 text-center text-primary">Why Choose Frigidaire Appliances?</h2>
            <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              If you're in the market for a new appliance, Frigidaire is a brand that should be at the top of your list.
              With a reputation for quality and innovation, Frigidaire appliances are known for their durability,
              efficiency, and ease of use.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {whyChooseFrigidaire.map((reason, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 border border-border hover:border-secondary transition-all hover:shadow-lg group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <reason.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-foreground">{reason.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Closing Statement */}
          <div className="bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl p-8 mb-16 border border-border">
            <p className="text-lg text-center text-muted-foreground leading-relaxed">
              Whether you're looking for a new refrigerator, dishwasher, stove, or microwave,{" "}
              <strong>Frigidaire appliances</strong> offer the perfect combination of quality, innovation, and style.
              And if you ever need repair services for your Frigidaire appliance,{" "}
              <strong>Rapid Appliance Service</strong> is here to help.
            </p>
          </div>

          {/* CTA Section */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-secondary to-secondary/90 rounded-2xl p-8 text-white">
              <Clock className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Get in touch with us</h3>
              <p className="text-secondary-foreground/90 mb-6">Same-day service available for urgent repairs</p>
              <Button asChild size="lg" className="bg-white text-secondary hover:bg-neutral-100">
                <Link href="/contact-us">Schedule Service Now</Link>
              </Button>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 text-white">
              <Phone className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Call Us Today</h3>
              <p className="text-primary-foreground/90 mb-6">Speak directly with our expert technicians</p>
              <a
                href="tel:877-770-0157"
                className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors text-lg"
              >
                <Phone className="w-5 h-5" />
                877-770-0157
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
