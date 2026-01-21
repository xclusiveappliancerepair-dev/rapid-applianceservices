import { Footer } from "@/components/footer"
import { Phone, Clock, MapPin } from "lucide-react"
import Image from "next/image"

export default function CommercialPage() {
  const commercialBrands = [
    {
      name: "Vulcan",
      description: "High-quality commercial ranges, ovens, and fryers. Durable, reliable, and easy to maintain.",
    },
    {
      name: "Hobart",
      description:
        "Wide range of commercial appliances including mixers, slicers, and dishwashers. Known for durability and efficiency.",
    },
    {
      name: "True",
      description:
        "Specializes in refrigeration units such as refrigerators and freezers. Energy-efficient and reliable.",
    },
    {
      name: "Wolf",
      description:
        "High-end commercial ranges and ovens. Designed to be durable and precise for professional kitchens.",
    },
  ]

  const commonIssues = [
    {
      title: "Electrical Issues",
      description: "High-voltage electrical systems can be prone to short-circuits and power surges.",
    },
    {
      title: "Mechanical Issues",
      description: "High volume use causes wear and tear on mechanical components like belts, motors, and bearings.",
    },
    {
      title: "Temperature Control Issues",
      description: "Maintaining precise temperatures is critical. Issues can lead to spoiled food and costly problems.",
    },
  ]

  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
              <div>
                <p className="text-secondary font-semibold mb-2">
                  Commercial and Home Appliance Repair Services Near You
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                  Palm Springs Commercial Appliance Repair
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Commercial appliances are essential for any business that deals with food, such as restaurants, cafes,
                  and bakeries in Palm Springs and nearby cities. These appliances are designed to handle high volumes
                  of food and are typically more durable and efficient than residential counterparts.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:877-770-0157"
                    className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white bg-secondary rounded-lg hover:bg-secondary/90 transition-colors"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call Us: 877-770-0157
                  </a>
                  <a
                    href="/contact-us"
                    className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-foreground bg-background border-2 border-primary rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    Get Estimate
                  </a>
                </div>
              </div>
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                <Image
                  src="/commercial-kitchen-appliances-repair-technician.jpg"
                  alt="Commercial Appliance Repair"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Popular Commercial Appliance Brands
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                There are several different brands of commercial appliances on the market, each with its unique features
                and strengths. Some of the most popular brands include:
              </p>

              <div className="space-y-6 mb-12">
                {commercialBrands.map((brand, index) => (
                  <div
                    key={brand.name}
                    className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors"
                  >
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {index + 1}. {brand.name}
                    </h3>
                    <p className="text-muted-foreground">{brand.description}</p>
                  </div>
                ))}
              </div>

              {/* Common Issues Section */}
              <div className="bg-accent/30 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Common Commercial Appliance Issues</h2>
                <p className="text-muted-foreground mb-6">
                  While these brands are popular and trusted, they can still experience issues from time to time. Some
                  common issues that commercial appliances can experience include:
                </p>
                <div className="space-y-4">
                  {commonIssues.map((issue, index) => (
                    <div key={issue.title} className="p-4 bg-background rounded-lg border border-border">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {index + 1}. {issue.title}
                      </h3>
                      <p className="text-muted-foreground">{issue.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-primary/5 p-8 rounded-lg mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose Rapid Appliance Service?</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    If you are a business owner or manager in Palm Springs experiencing issues with your commercial
                    appliances, it's essential to choose a reliable and trustworthy repair service. That's where Rapid
                    Appliance Service comes in.
                  </p>
                  <p>
                    Our team of experienced technicians has years of experience repairing and maintaining commercial
                    appliances, and we pride ourselves on providing fast, efficient, and affordable service. All
                    residents in Palm Springs have come to depend on us when their commercial appliance malfunctions or
                    breaks down because they know we are the most capable out of all the companies in the area.
                  </p>
                  <p>
                    At Rapid Appliance Service, we understand that time is money for businesses, and that's why we offer
                    same-day service for many repairs. We also provide upfront pricing, so you know exactly what you'll
                    be paying before we start any work. Plus, our technicians are trained to work on a wide range of
                    brands and models, so you can trust that we'll have the expertise to fix your appliance correctly
                    the first time.
                  </p>
                </div>
              </div>

              {/* Conclusion */}
              <div className="text-center p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                <p className="text-lg text-muted-foreground mb-6">
                  Commercial appliances are essential for any business that deals with food, and it's essential to
                  choose a reliable and trustworthy repair service if you experience any issues. Brands like Vulcan,
                  Hobart, True, and Wolf are popular choices, but they can still experience issues from time to time.
                  That's why Rapid Appliance Service is the best choice for businesses that need fast, efficient, and
                  affordable appliance repair services.
                </p>
                <a
                  href="tel:877-770-0157"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-secondary rounded-lg hover:bg-secondary/90 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call 877-770-0157
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-16 bg-accent/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-background rounded-lg border border-border">
                <Phone className="h-8 w-8 mx-auto mb-4 text-secondary" />
                <h3 className="text-xl font-bold text-foreground mb-2">Call Us</h3>
                <a href="tel:877-770-0157" className="text-lg text-secondary hover:underline">
                  877-770-0157
                </a>
              </div>
              <div className="p-6 bg-background rounded-lg border border-border">
                <Clock className="h-8 w-8 mx-auto mb-4 text-secondary" />
                <h3 className="text-xl font-bold text-foreground mb-2">Opening Hours</h3>
                <p className="text-muted-foreground">Mon - Sat 08:00AM - 6:00PM</p>
                <p className="text-muted-foreground">Sunday - Closed</p>
              </div>
              <div className="p-6 bg-background rounded-lg border border-border">
                <MapPin className="h-8 w-8 mx-auto mb-4 text-secondary" />
                <h3 className="text-xl font-bold text-foreground mb-2">Address</h3>
                <p className="text-muted-foreground">74711 Dillon Rd SPC 33</p>
                <p className="text-muted-foreground">Desert Hot Springs, CA, 92241</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
