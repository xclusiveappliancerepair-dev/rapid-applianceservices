import { Phone, Mail, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function VikingRepairPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary text-white py-20">
        <div className="absolute inset-0 bg-[url('/abstract-tech-pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Viking Repair</h1>
            <p className="text-2xl text-primary-foreground/90 mb-8 text-balance">
              Viking Appliance Repair Palm Springs
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:877-770-0157"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-neutral-50 transition-colors text-lg"
              >
                <Phone className="w-5 h-5" />
                877-770-0157
              </a>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-colors text-lg"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">Viking Repair Specialists</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our company specializes in <strong>Viking appliance repair in Palm Springs</strong>, so you don't have
                to go far for reliable, dependable repair of all your <strong>Viking appliances</strong> at great rates.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/technician-repairing-viking-appliance.jpg"
                alt="Viking Appliance Repair"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Types of Viking Appliances */}
          <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-4xl font-bold mb-8 text-primary text-center">
              What Types of Viking Appliances Do You Repair?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
              Whether you live in or around <strong>Palm Springs</strong>, you'll be glad to know that we{" "}
              <strong>repair all kinds of Viking appliances</strong>, including:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                "Viking range and oven repair",
                "Viking cooktop repair",
                "Repair Viking ventilation units",
                "Viking dishwasher repair",
                "Viking refrigerator repair",
                "Viking freezer repair",
                "Viking wine storage and much more",
              ].map((service, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-lg font-medium text-foreground">{service}</span>
                </div>
              ))}
            </div>
            <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto">
              We also service the full line of Viking products including Professional Indoor, Designer Indoor and
              Professional Outdoor appliances. We can also repair the award-winning Viking Series 7 appliances.
            </p>
            <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto mt-4">
              And although Viking is a name that is synonymous with high-end quality respective to their luxury
              appliances, sometimes even the best brands can malfunction.
            </p>
          </div>

          {/* Viking Dishwasher Repair */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary">Viking Dishwasher Repair</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-border">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                If your dishwasher is leaking, isn't draining well or is making loud noises, it could be for any number
                of reasons. Despite how easy they are to load and use, dishwashers are complex machines with a number of
                moving mechanical and electronic parts.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Therefore, if you need thorough, professional Viking dishwasher repair, it's important to contact a
                trained Viking dishwasher repair specialist who can not only diagnose the problem, but has all of the
                tools and parts on hand to fix the most common Viking dishwasher issues.
              </p>
            </div>
          </div>

          {/* Viking Grills Repair */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary">Viking Grills Repair</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-border">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                For Viking grill repair, you need a Palm Springs appliance repair technician who has plenty of standard
                Viking grill appliance parts on hand, and is ready to help you fix and maintain your Viking grill or
                outdoor kitchen appliance.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Despite the relative simplicity of how a grill works, it's important that you not try to do your own
                Viking grill repair, since there are numerous dangerous parts that only a Viking appliance repair
                specialist should handle. Oftentimes, people try DIY Viking grill repair, which can make the problem
                even more costly to fix.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Instead, contact your local Palm Springs Viking appliance repair specialists for help with your Viking
                grill repair. We'll come to you with all the Viking grill parts and tools needed to help you fire up
                your grill and enjoy the taste of cooking in the great outdoors!
              </p>
            </div>
          </div>

          {/* Viking Range, Oven and Cooktop Repair */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary">Viking Range, Oven and Cooktop Repair</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-border">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Viking is perhaps most famous for its line of ranges, ovens and cooktops. For decades, the Viking
                appliance name has been synonymous with quality and expert craftsmanship. But even the best ranges and
                cooktops can have problems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From error codes on the oven, to inadequate heating and everything in between, our Viking repair pros
                can fix or repair any problem with your Viking range, oven, cooktop or burner. From simple fixes of
                Viking replacement parts to more complex issues such as commercial Viking appliance repair, our
                professionals can handle it all quickly and easily.
              </p>
            </div>
          </div>

          {/* Viking Refrigerator or Specialty Freezer Repair */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6 text-primary">Viking Refrigerator or Specialty Freezer Repair</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-border">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Whether your refrigerator at home isn't keeping food at the appropriate temperature, or your commercial
                freezer has malfunctioned, our knowledgeable Viking refrigerator and freezer repair pros can diagnose
                the issue and get them back up and running quickly.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For businesses needing Viking commercial appliance repair, we understand that you need to be up and
                running quickly, which is why we offer attentive, dedicated service so that you don't lose customers or
                money. For proper food safety, it's important that your Viking commercial appliances all work
                flawlessly.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-secondary via-secondary/90 to-primary rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">
              Contact Our Viking Appliance Repair Specialists in Palm Springs Today!
            </h2>
            <p className="text-xl text-secondary-foreground/90 mb-8 max-w-3xl mx-auto">
              When you call our professional Viking appliance repair specialists in Palm Springs, our technician will
              work with you to better understand the problem with your Viking appliance. We'll then come to you with all
              the most common tools and parts so you don't have to wait to get the Viking appliance repair service you
              need.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:877-770-0157"
                className="inline-flex items-center gap-2 bg-white text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-neutral-50 transition-colors text-lg"
              >
                <Phone className="w-5 h-5" />
                877-770-0157
              </a>
              <a
                href="mailto:rapidappliancerepairservices@gmail.com"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-lg"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
