import { notFound } from "next/navigation"
import { locations } from "@/lib/data/locations"
import { Footer } from "@/components/footer"
import {
  Phone,
  MapPin,
  Wrench,
  Clock,
  Award,
  Shield,
  Refrigerator,
  Baseline as Washing,
  Flame,
  ChefHat,
  Utensils,
  Wind,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return locations.map((location) => ({
    city: location.slug,
  }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: citySlug } = await params
  const location = locations.find((loc) => loc.slug === citySlug)

  if (!location) {
    return {
      title: "City Not Found",
    }
  }

  const title = `Appliance Repair in ${location.city}, CA | Same Day Service | Rapid Appliance Services`
  const description = `Reliable appliance repair in ${location.city}, CA. We fix refrigerators, dryers, washers, and ovens in ZIP codes ${location.zipCodes.join(", ")}. Fast service near ${location.nearbyLandmark} with fair prices.`

  return {
    title,
    description,
    keywords: [
      `appliance repair ${location.city}`,
      `${location.city} appliance repair`,
      `refrigerator repair ${location.city}`,
      `washer repair ${location.city}`,
      `dryer repair ${location.city}`,
      location.zipCodes[0],
      location.county,
      "same day appliance repair",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://www.rapidapplianceservices.com/service-area/${location.slug}`,
    },
    alternates: {
      canonical: `https://www.rapidapplianceservices.com/service-area/${location.slug}`,
    },
  }
}

export default async function CityServicePage({ params }: { params: Promise<{ city: string }> }) {
  const { city: citySlug } = await params
  const location = locations.find((loc) => loc.slug === citySlug)

  if (!location) {
    notFound()
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.rapidapplianceservices.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Service Area",
        item: "https://www.rapidapplianceservices.com/service-area",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: location.city,
        item: `https://www.rapidapplianceservices.com/service-area/${location.slug}`,
      },
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Do you offer same-day appliance repair in ${location.city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes! We offer same-day appliance repair service throughout ${location.city}, CA. Call us at 877-770-0157 to schedule your repair today.`,
        },
      },
      {
        "@type": "Question",
        name: `What appliances do you repair in ${location.city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `We repair all major household appliances including refrigerators, washers, dryers, ovens, dishwashers, cooktops, ranges, and stoves in ${location.city}.`,
        },
      },
      {
        "@type": "Question",
        name: `What brands do you service in ${location.city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `We service all major brands including Whirlpool, LG, Samsung, GE, Maytag, KitchenAid, Frigidaire, Kenmore, and many more in ${location.city}, CA.`,
        },
      },
      {
        "@type": "Question",
        name: `What ZIP codes do you serve in ${location.city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `We serve all ZIP codes in ${location.city} including ${location.zipCodes.join(", ")}.`,
        },
      },
      {
        "@type": "Question",
        name: `Do you offer warranty on repairs in ${location.city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes, all our repairs in ${location.city} come with a warranty and satisfaction guarantee. We stand behind our work.`,
        },
      },
    ],
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://www.rapidapplianceservices.com/service-area/${location.slug}`,
    name: "Rapid Appliance Services",
    image: "https://www.rapidapplianceservices.com/rapid-appliance-logo.png",
    description: `Professional appliance repair services in ${location.city}, California`,
    address: {
      "@type": "PostalAddress",
      addressLocality: location.city,
      addressRegion: "CA",
      postalCode: location.zipCodes[0],
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: location.city,
    },
    telephone: "+1-877-770-0157",
    priceRange: "$$",
    openingHours: "Mo-Su 08:00-20:00",
    url: `https://www.rapidapplianceservices.com/service-area/${location.slug}`,
    sameAs: [
      "https://www.facebook.com/rapid.appliance/",
      "https://www.instagram.com/rapidappliancerepairservices",
      "https://www.yelp.com/biz/rapid-appliance-services-desert-hot-springs",
    ],
  }

  const services = [
    {
      name: "Refrigerator Repair",
      icon: Refrigerator,
      href: "/refrigerator-repair",
      description:
        "Expert repair for all refrigerator brands. We fix cooling issues, ice makers, water dispensers, and more.",
    },
    {
      name: "Washer Repair",
      icon: Washing,
      href: "/washer-repair",
      description: "Professional washing machine repair. We handle leaks, drum issues, and electrical problems.",
    },
    {
      name: "Dryer Repair",
      icon: Wind,
      href: "/dryer-repair",
      description: "Fast dryer repair service. We fix heating issues, drum problems, and ventilation concerns.",
    },
    {
      name: "Oven Repair",
      icon: ChefHat,
      href: "/oven-repair",
      description: "Comprehensive oven repair. We fix heating elements, thermostats, and control panels.",
    },
    {
      name: "Dishwasher Repair",
      icon: Utensils,
      href: "/dishwasher-repair",
      description: "Reliable dishwasher repair. We resolve drainage, cleaning, and drying issues.",
    },
    {
      name: "Cooktop Repair",
      icon: Flame,
      href: "/cooktop-repair",
      description: "Expert cooktop repair service. Gas and electric cooktop repairs with certified technicians.",
    },
    {
      name: "Range Repair",
      icon: Flame,
      href: "/range-repair",
      description: "Complete range repair solutions. We service all types of ranges and stoves.",
    },
    {
      name: "Stove Repair",
      icon: Flame,
      href: "/stove-repair",
      description: "Professional stove repair service. Quick fixes for gas and electric stoves.",
    },
  ]

  const brands = [
    { name: "Whirlpool", href: "/whirlpool-repair", logo: "/whirlpool-appliance-logo.jpg" },
    { name: "LG", href: "/lg-repair", logo: "/lg-appliance-logo.jpg" },
    { name: "Samsung", href: "/samsung-repair", logo: "/samsung-appliance-logo.jpg" },
    { name: "GE", href: "/ge-repair", logo: "/ge-appliance-logo.jpg" },
    { name: "Maytag", href: "/maytag-repair", logo: "/maytag-appliance-logo.jpg" },
    { name: "KitchenAid", href: "/kitchenaid-repair", logo: "/kitchenaid-appliance-logo.jpg" },
    { name: "Frigidaire", href: "/frigidaire-repair", logo: "/frigidaire-appliance-logo.jpg" },
    { name: "Kenmore", href: "/kenmore-repair", logo: "/kenmore-appliance-logo.jpg" },
    { name: "Amana", href: "/amana-repair", logo: "/amana-appliance-logo.jpg" },
    { name: "Sub-Zero", href: "/subzero-repair", logo: "/subzero-appliance-logo.jpg" },
    { name: "Thermador", href: "/thermador-repair", logo: "/thermador-appliance-logo.jpg" },
    { name: "Viking", href: "/viking-repair", logo: "/viking-appliance-logo.jpg" },
    { name: "Wolf", href: "/wolf-repair", logo: "/wolf-appliance-logo.jpg" },
    { name: "Jenn-Air", href: "/jenn-air-repair", logo: "/jenn-air-appliance-logo.jpg" },
    { name: "Admiral", href: "/admiral-repair", logo: "/admiral-logo.jpg" },
    { name: "Dacor", href: "/dacor-repair", logo: "/dacor-appliance-logo.jpg" },
    { name: "Fisher & Paykel", href: "/fisher-paykel-repair", logo: "/fisher-paykel-appliance-logo.jpg" },
    { name: "Hotpoint", href: "/hotpoint-repair", logo: "/hotpoint-appliance-logo.jpg" },
    { name: "DCS", href: "/dcs-repair", logo: "/dsc-appliance-logo.jpg" },
  ]

  const commercialBrands = [
    { name: "Speed Queen", href: "/speed-queen-repair", logo: null },
    { name: "Hobart", href: "/hobart-repair", logo: null },
    { name: "Baxter", href: "/baxter-repair", logo: null },
    { name: "Imperial", href: "/imperial-repair", logo: "/imperial-logo.jpg" },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="flex min-h-screen flex-col">
        <main className="flex-1">
          <nav className="bg-muted/30 py-3 border-b">
            <div className="container mx-auto px-4">
              <ol className="flex items-center gap-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/" className="hover:text-foreground transition-colors">
                    Home
                  </Link>
                </li>
                <ChevronRight className="h-4 w-4" />
                <li>
                  <Link href="/service-area" className="hover:text-foreground transition-colors">
                    Service Area
                  </Link>
                </li>
                <ChevronRight className="h-4 w-4" />
                <li className="text-foreground font-medium">{location.city}</li>
              </ol>
            </div>
          </nav>

          <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary py-20 text-primary-foreground overflow-hidden">
            <div
              className="absolute inset-0 bg-[url('/abstract-modern-pattern.jpg')] opacity-10 mix-blend-overlay"
              aria-hidden="true"
            />
            <div className="container relative mx-auto px-4">
              <div className="mx-auto max-w-4xl text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-2 text-sm backdrop-blur-sm">
                  <MapPin className="h-4 w-4" />
                  <span>Serving {location.county} County</span>
                </div>
                <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-balance">
                  Appliance Repair in {location.city}, CA
                </h1>
                <p className="mb-4 text-lg sm:text-xl text-primary-foreground/90 text-balance">
                  Professional same-day appliance repair service serving {location.city} and surrounding areas including{" "}
                  {location.nearbyLandmark}
                </p>
                <p className="mb-8 text-sm text-primary-foreground/80">
                  Serving ZIP Codes: {location.zipCodes.join(", ")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 min-w-[280px] h-14 text-lg font-semibold shadow-xl"
                  >
                    <a href="tel:877-770-0157">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now: 877-770-0157
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-primary min-w-[200px] h-14 text-lg bg-transparent"
                  >
                    <Link href="/contact-us">Get Free Estimate</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                  Expert Appliance Repair Services in {location.city}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground text-balance">
                  We repair all major household appliances with certified technicians
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {services.map((service, index) => {
                  const IconComponent = service.icon
                  return (
                    <Link
                      key={index}
                      href={service.href}
                      className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:border-primary/50"
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                  Why Choose Rapid Appliance Services in {location.city}?
                </h2>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Same Day Service</h3>
                  <p className="text-sm text-muted-foreground">
                    Fast response times for emergency repairs in {location.city}
                  </p>
                </div>

                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Certified Technicians</h3>
                  <p className="text-sm text-muted-foreground">Experienced professionals trained on all major brands</p>
                </div>

                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Warranty Included</h3>
                  <p className="text-sm text-muted-foreground">All repairs backed by our satisfaction guarantee</p>
                </div>

                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Wrench className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Fair Pricing</h3>
                  <p className="text-sm text-muted-foreground">Transparent pricing with no hidden fees</p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                  Brands We Service in {location.city}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Authorized repair service for leading appliance manufacturers
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {brands.map((brand, index) => (
                  <Link
                    key={index}
                    href={brand.href}
                    className="bg-white rounded-xl p-6 shadow-lg border border-border hover:shadow-xl hover:border-secondary transition-all group"
                  >
                    <div className="flex flex-col items-center justify-center h-full gap-6">
                      <div className="relative w-full h-20 flex items-center justify-center">
                        <Image
                          src={brand.logo || "/placeholder.svg"}
                          alt={`${brand.name} logo`}
                          width={120}
                          height={80}
                          className="object-contain group-hover:scale-110 transition-transform"
                        />
                      </div>
                      <h3 className="text-base font-bold text-foreground text-center mt-2">{brand.name}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                  Find Us in {location.city}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Serving {location.city} and all surrounding areas in {location.county} County
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="relative w-full h-[450px] rounded-xl overflow-hidden shadow-lg border border-border">
                  <iframe
                    src={`https://www.google.com/maps?q=${encodeURIComponent(location.city + ", CA")}&output=embed&z=12`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${location.city}, CA`}
                  />
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    <MapPin className="inline h-4 w-4 mr-1" />
                    Proudly serving {location.city} and nearby areas including {location.nearbyLandmark}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6 text-balance">
                  Serving {location.city} and Surrounding Areas
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    Rapid Appliance Services is proud to serve the residents of {location.city}, California with
                    professional appliance repair services. Our team of certified technicians provides fast, reliable
                    repairs for all major household appliances including refrigerators, washers, dryers, ovens,
                    dishwashers, and more.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Located near {location.nearbyLandmark}, we understand the unique needs of {location.city} residents.
                    Whether you're in ZIP code {location.zipCodes[0]} or anywhere else in the {location.city} area, our
                    same-day service ensures your appliances are back up and running quickly.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    We service all major brands including Whirlpool, LG, Samsung, GE, Maytag, KitchenAid, and more.
                    Every repair comes with a warranty and our satisfaction guarantee. Call us today at 877-770-0157 for
                    fast, professional appliance repair in {location.city}.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8 text-balance">
                  Frequently Asked Questions - {location.city}, CA
                </h2>
                <div className="space-y-6">
                  <div className="border-b border-border pb-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Do you offer same-day appliance repair in {location.city}?
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Yes! We offer same-day appliance repair service throughout {location.city}, CA including ZIP codes{" "}
                      {location.zipCodes.join(", ")}. Call us at 877-770-0157 to schedule your repair today.
                    </p>
                  </div>

                  <div className="border-b border-border pb-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      What appliances do you repair in {location.city}?
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We repair all major household appliances including refrigerators, washers, dryers, ovens,
                      dishwashers, cooktops, ranges, and stoves in {location.city}. Our certified technicians are
                      equipped to handle any appliance issue.
                    </p>
                  </div>

                  <div className="border-b border-border pb-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      What brands do you service in {location.city}?
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We service all major brands including Whirlpool, LG, Samsung, GE, Maytag, KitchenAid, Frigidaire,
                      Kenmore, Sub-Zero, Thermador, Viking, Wolf, and many more in {location.city}, CA.
                    </p>
                  </div>

                  <div className="border-b border-border pb-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      What ZIP codes do you serve in {location.city}?
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We serve all ZIP codes in {location.city} including {location.zipCodes.join(", ")}. We also serve
                      nearby areas including {location.nearbyLandmark}.
                    </p>
                  </div>

                  <div className="pb-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Do you offer warranty on repairs in {location.city}?
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Yes, all our repairs in {location.city} come with a warranty and satisfaction guarantee. We stand
                      behind our work and ensure your complete satisfaction with every repair.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-primary to-primary/90 py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="mb-4 text-3xl font-bold text-primary-foreground text-balance">
                Need Appliance Repair in {location.city}?
              </h2>
              <p className="mb-8 text-lg text-primary-foreground/90 text-balance">
                Call us today for same-day service in {location.city}, CA
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 min-w-[280px] h-14 text-lg font-semibold"
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
                  className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary min-w-[200px] h-14 text-lg bg-transparent"
                >
                  <Link href="/contact-us">Get Free Estimate</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
