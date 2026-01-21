import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Don't Let a Broken Appliance Disrupt Your Daily Routine
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed text-pretty">
            At our company, we understand the importance of having your appliances working properly, which is why we
            offer flexible scheduling options and competitive pricing. We believe in providing our customers with the
            highest level of customer service and satisfaction.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8"
            >
              <a href="tel:877-770-0157">
                <Phone className="mr-2 h-5 w-5" />
                Call 877-770-0157
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/20 text-lg px-8"
            >
              <Link href="/contact">
                Schedule Appointment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <p className="mt-6 text-sm text-primary-foreground/70">
            100% Satisfaction Guarantee • Same-Day Service Available
          </p>
        </div>
      </div>
    </section>
  )
}
