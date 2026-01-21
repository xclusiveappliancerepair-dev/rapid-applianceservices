import { Footer } from "@/components/footer"
import { MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { locations } from "@/lib/data/locations"

export default function ServiceAreaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 py-20 text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-balance">
                Service Areas
              </h1>
              <p className="mb-8 text-lg sm:text-xl text-primary-foreground/90 text-balance">
                Serving Palm Springs and surrounding areas with professional appliance repair services
              </p>
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Link href="/contact-us">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 877-770-0157
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Service Areas Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                We Serve Over 90 Locations
              </h2>
              <p className="mt-4 text-lg text-muted-foreground text-balance">
                Fast, reliable appliance repair service available in all these locations
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {locations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/service-area/${location.slug}`}
                  className="group relative overflow-hidden rounded-lg border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md hover:border-primary/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2 text-primary flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {location.city}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-primary/90 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary-foreground text-balance">
              Need Appliance Repair Service?
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/90 text-balance">
              Call us today for same-day service in your area
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 min-w-[200px]"
              >
                <a href="tel:877-770-0157">
                  <Phone className="mr-2 h-5 w-5" />
                  877-770-0157
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary min-w-[200px] bg-transparent"
              >
                <Link href="/contact-us">Get Estimate</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
