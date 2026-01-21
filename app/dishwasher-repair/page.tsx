import { Phone, CheckCircle, Wrench, Clock, Shield, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/footer"

export default function DishwasherRepairPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Dishwasher Repair Palm Springs
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/90 text-pretty leading-relaxed">
                Rapid Appliance Service excels in many appliance repairs. One of them is of course dishwasher repair
                palm springs. Our dishwasher services are unmatched when compared to other companies in Palm Springs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" asChild className="text-lg">
                  <Link href="tel:877-770-0157">
                    <Phone className="mr-2 h-5 w-5" />
                    877-770-0157
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-lg bg-white/10 hover:bg-white/20 text-white border-white/30"
                >
                  <Link href="/contact-us">Get Estimate</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/dishwasher-repair-technician-palm-springs.jpg"
                alt="Professional Dishwasher Repair Service"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Palm Springs Dishwasher Repair</h2>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-foreground/80 leading-relaxed mb-6">
                Rapid Appliance Service excels in many appliance repairs. One of them is of course{" "}
                <strong>dishwasher repair palm springs</strong>. Our dishwasher services are unmatched when compared to
                other companies in Palm Springs. We know the in and outs of every dishwasher appliance we repair and our
                expertise allows us to quickly configure and diagnose the issue. We then use the best tools and
                equipment to make the repairs faster and easier for you. Our upkeep and maintenance services on
                dishwasher appliances are unmatched and produce the best results possible.
              </p>

              <p className="text-foreground/80 leading-relaxed mb-6">
                Dishwashers are a staple appliance in many homes, making life easier by cleaning dishes without the need
                for manual scrubbing. However, like any other appliance, dishwashers can break down and require repair.
                When this happens, it's important to have access to reliable and trustworthy{" "}
                <strong>dishwasher repair services</strong>.
              </p>
            </div>

            {/* Popular Brands */}
            <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Popular Dishwasher Brands We Repair</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Some of the most popular dishwasher brands that people may need repaired include{" "}
                <strong>Bosch, KitchenAid, LG, Samsung, and Whirlpool</strong>. These brands are known for their quality
                and durability, but even the best appliances can experience issues over time.
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {["Bosch", "KitchenAid", "LG", "Samsung", "Whirlpool", "GE"].map((brand) => (
                  <div key={brand} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="font-semibold text-foreground">{brand}</span>
                  </div>
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mt-6">
                Common problems with dishwashers may include issues with drainage, leaks, and broken parts. Here at
                Rapid Appliance Services, <strong>solving those common problems is our specialty</strong>.
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Why Choose Our Business?</h3>
              <p className="text-foreground/80 leading-relaxed mb-8">
                When it comes to finding a dishwasher repair service, it's important to choose a company that you can
                trust to get the job done right. And that's where we come in. We offer top-quality{" "}
                <strong>dishwasher repair services in Palm Springs</strong>, with a focus on customer satisfaction. Here
                are just a few reasons why our business is the best choice for your appliance repair needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <Wrench className="h-12 w-12 text-secondary mb-4" />
                <h4 className="text-xl font-bold mb-3 text-foreground">Experienced Technicians</h4>
                <p className="text-foreground/70 leading-relaxed">
                  First and foremost, we have a team of <strong>experienced technicians</strong> who have the skills and
                  expertise necessary to diagnose and repair any issue with your dishwasher. Our technicians are fully
                  licensed and insured, and they have years of experience working with all different types of dishwasher
                  brands and models.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <Clock className="h-12 w-12 text-secondary mb-4" />
                <h4 className="text-xl font-bold mb-3 text-foreground">Prompt & Efficient Service</h4>
                <p className="text-foreground/70 leading-relaxed">
                  Additionally, we pride ourselves on providing <strong>prompt and efficient service</strong>. We
                  understand that a broken dishwasher can be a major inconvenience, so we do our best to get your
                  appliance up and running as quickly as possible. We also offer flexible scheduling options to
                  accommodate your busy schedule.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <Shield className="h-12 w-12 text-secondary mb-4" />
                <h4 className="text-xl font-bold mb-3 text-foreground">High-Quality Replacement Parts</h4>
                <p className="text-foreground/70 leading-relaxed">
                  Another reason to choose our Palm Springs dishwasher repair company for your dishwasher repair needs
                  is our commitment to using <strong>high-quality replacement parts</strong>. We understand that you
                  want your dishwasher to last for years to come, and that's why we use only the best parts available to
                  ensure the longevity and reliability of your appliance.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <ThumbsUp className="h-12 w-12 text-secondary mb-4" />
                <h4 className="text-xl font-bold mb-3 text-foreground">Competitive Pricing</h4>
                <p className="text-foreground/70 leading-relaxed">
                  Finally, we offer <strong>competitive pricing</strong> for our services, so you can rest assured that
                  you're getting the best value for your money. We believe in transparency and honesty in all our
                  dealings, so you can trust that there will be no hidden fees or surprises when you work with us.
                </p>
              </div>
            </div>

            {/* Additional Services */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Complete Appliance Repair Services</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                In addition to dishwasher repair, we offer <strong>Palm Springs appliance repair services</strong> for
                various appliances, including refrigerators, ovens, stoves, and more. Our technicians have the skills
                and expertise to diagnose and repair any issue, no matter how complex.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-6">
                We use only high-quality replacement parts, ensuring your appliances work efficiently and reliably.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-6">
                At our company, we believe in providing <strong>exceptional customer service</strong>, ensuring that our
                customers are satisfied with our services.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                We offer competitive pricing, transparent quotes, and a satisfaction guarantee. Our goal is to provide
                you with the best possible experience and ensure your appliances function smoothly.
              </p>
            </div>

            {/* Conclusion */}
            <div className="bg-card border-2 border-secondary/20 rounded-2xl p-8">
              <p className="text-foreground/80 leading-relaxed text-lg">
                In conclusion, when it comes to <strong>dishwasher repair services</strong>, Rapid Appliance Services is
                the best choice for quality, reliability, and customer satisfaction. With our experienced technicians,
                efficient service, high-quality parts, and competitive pricing, you can trust that your dishwasher will
                be in good hands with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-secondary via-secondary/90 to-secondary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us Today!</h2>
          <p className="text-lg md:text-xl mb-4 max-w-2xl mx-auto text-white/90">
            If you are experiencing any issues with your appliances in Palm Springs or its surrounding areas, don't
            hesitate to get in touch with us today.
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
            Our team of expert technicians is ready to diagnose and repair any problem with your appliances, including
            dishwashers, refrigerators, ovens, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" asChild className="text-lg bg-white text-secondary hover:bg-white/90">
              <Link href="tel:877-770-0157">
                <Phone className="mr-2 h-5 w-5" />
                Call 877-770-0157
              </Link>
            </Button>
            <Button size="lg" asChild className="text-lg bg-primary hover:bg-primary/90 text-white">
              <Link href="/contact-us">Schedule Appointment</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
