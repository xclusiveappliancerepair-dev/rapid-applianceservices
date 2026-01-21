import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90">
      <div className="absolute inset-0 bg-[url('/abstract-modern-pattern.jpg')] opacity-5 bg-cover bg-center" />

      <div className="container relative mx-auto px-4 py-20 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-primary-foreground">
            <div className="inline-block mb-4 px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-sm font-medium">
              ⚡ Receive A Free Estimate With Repair
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              Appliance Repair Palm Springs
            </h1>

            <h2 className="text-xl md:text-2xl font-medium mb-6 text-primary-foreground/90">
              Rapid Appliance Repair Service in Palm Springs
            </h2>

            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed text-pretty">
              Trust us to fix your appliance quickly and efficiently. Say goodbye to the stress of dealing with broken
              appliances. Our team of experienced technicians is here to provide prompt and reliable repair services for
              your cooktop, refrigerator, washing machine, and more!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                asChild
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8"
              >
                <Link href="/contact">
                  Contact Us Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/20 text-lg px-8"
              >
                <Link href="/services">See Our Services</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium">Reasonable Prices</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium">Experienced</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-secondary" />
                <span className="text-sm font-medium">Professional</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="/appliance-repair-technician-working.jpg" alt="Appliance repair technician" className="w-full h-auto" />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-xl p-6 border border-border">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">230+</div>
                  <div className="text-sm text-muted-foreground">Projects Done</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
