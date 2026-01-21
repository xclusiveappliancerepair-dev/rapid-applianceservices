import Image from "next/image"
import Link from "next/link"
import { Phone, CheckCircle, Wrench, Clock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

export default function ImperialRepairPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground py-20">
        <div className="absolute inset-0 bg-[url('/abstract-modern-pattern.jpg')] opacity-10 mix-blend-overlay"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Commercial Appliances Imperial Repair Palm Springs
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
              Expert Imperial Commercial Appliance Repair Services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                <Link href="tel:877-770-0157">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: 877-770-0157
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                <Link href="/contact">Get Estimate</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Imperial Appliance Repair</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Imperial is a commercial range, ovens, and cooking equipment company. They are the leading provider of
                quality heating, ventilating, air conditioning, and refrigeration products for commercial kitchens. It
                is not a brand you see very commonly, but Imperial oven or stove owners understand that it speaks to
                quality and durability. Many big kitchens in Palm Springs own an Imperial commercial appliance, and
                chances are they have owned it for so long that they have had it serviced or repaired at least once.
                These machines can last a very long time with proper maintenance. Imperial appliance repair is a great
                skill, and we have the expertise to provide our customers in Palm Springs with the highest quality
                service!
              </p>
            </div>

            {/* Services List */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                They offer a wide range of services for their customers in the industry, including:
              </h3>
              <div className="grid gap-4">
                {[
                  "Imperial Commercial Oven/Stove Repair Service In Palm Springs",
                  "Imperial Commercial Cooking Equipment Repair Service In Palm Springs",
                  "Imperial Commercial Range Repair In Palm Springs",
                ].map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 border border-border hover:shadow-md transition-shadow"
                  >
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground font-medium">{service}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Section */}
            <div className="mb-12 rounded-lg overflow-hidden">
              <Image
                src="/imperial-logo.jpg"
                alt="Imperial Logo"
                width={800}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Commercial Kitchen Section */}
            <div className="mb-12 bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-lg border border-border">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Commercial Kitchen Appliance Repair Is Our Job
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our specialty lies in providing commercial oven and stove repair services. With years of experience, we
                have developed a network of trusted technicians skilled in servicing commercial ovens. Maintaining
                commercial ovens and ranges can be complicated, so we highly recommend scheduling regular maintenance
                and repair services with us. Our technicians are experts in repairing commercial ovens, especially the
                Imperial brand. They can quickly and efficiently fix any issues you may face with your ovens. We update
                our technicians with the latest updates and technologies to provide you with the best experience
                possible.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                If you're located in Palm Springs, Rapid Appliance Repair is the company to trust. We take pride in our
                work and are invested in our skills. Our technicians are knowledgeable about repairs and have personal
                experience with your Imperial oven or stove. We understand which brands are important to people and what
                our clients expect from us. You can rely on us to ease your mind and restore your Imperial commercial
                appliance to its original standing, working as it did on day one.
              </p>
            </div>

            {/* Why Choose Us Section */}
            <div className="mb-12">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Wrench,
                    title: "Expert Technicians",
                    description: "Skilled professionals with extensive Imperial appliance repair experience",
                  },
                  {
                    icon: Clock,
                    title: "Quick Response",
                    description: "We come equipped with all necessary tools and common parts",
                  },
                  {
                    icon: Award,
                    title: "Quality Service",
                    description: "Restore your Imperial appliance to its original working condition",
                  },
                  {
                    icon: Phone,
                    title: "Same Day Service",
                    description: "Get your commercial kitchen back up and running quickly",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-border hover:shadow-lg transition-shadow"
                  >
                    <feature.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">We Are Waiting For Your Call</h2>
              <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                Our expert technicians will assist you in gaining a better understanding of the issue with your Imperial
                kitchen appliance. We come equipped with all the necessary tools and common parts to avoid any
                unnecessary delays. Our experienced technicians will either repair the issue or replace the faulty part,
                enabling you to resume enjoying your favorite food.
              </p>
              <p className="text-lg text-white/90 mb-6">
                For prompt Imperial Commercial Appliance Service, reach out to us today at{" "}
                <a href="tel:877-770-0157" className="font-bold text-white hover:underline">
                  877-770-0157
                </a>
              </p>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="tel:877-770-0157">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
