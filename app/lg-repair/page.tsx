import { Phone, Wrench, Clock, Award, ThumbsUp } from "lucide-react"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function LGRepairPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary text-white py-20">
        <div className="absolute inset-0 bg-[url('/abstract-tech-pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">LG Repair</h1>
            <p className="text-xl text-primary-foreground/90 mb-8 text-pretty">
              Expert LG Appliance Repair Services in Palm Springs
            </p>
            <a
              href="tel:877-770-0157"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              877-770-0157
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/technician-repairing-lg-appliance.jpg"
                alt="LG Appliance Repair"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">LG Appliance Repair Palm Springs</h2>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Palm Springs LG Repair Service</h3>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We have experience repairing a wide range of <strong>LG appliances repair</strong> at Rapid Appliance
                  Service. Here are some common <strong>LG appliance</strong> problems we can help you with in the{" "}
                  <strong>Palm Springs area</strong>:
                </p>
              </div>
            </div>
          </div>

          {/* Common Problems Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center text-primary">Common LG Appliance Issues We Fix</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "LG Refrigerator",
                  problem: "Not cooling properly",
                  icon: "❄️",
                },
                {
                  title: "LG Dishwasher",
                  problem: "Not cleaning dishes effectively",
                  icon: "🍽️",
                },
                {
                  title: "LG Oven",
                  problem: "Not heating up",
                  icon: "🔥",
                },
                {
                  title: "LG Washer",
                  problem: "Not spinning or draining water",
                  icon: "🌊",
                },
                {
                  title: "LG Dryer",
                  problem: "Not drying clothes",
                  icon: "👕",
                },
                {
                  title: "LG Microwave",
                  problem: "Not heating food",
                  icon: "⚡",
                },
                {
                  title: "LG Ice Maker",
                  problem: "Not producing ice",
                  icon: "🧊",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-neutral-50 rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-all"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h4 className="text-xl font-bold mb-2 text-foreground">{item.title}</h4>
                  <p className="text-muted-foreground">{item.problem}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-secondary to-secondary/90 rounded-2xl p-12 text-center mb-16">
            <h3 className="text-3xl font-bold text-white mb-4">Get in touch with us.</h3>
            <p className="text-secondary-foreground/90 mb-6 text-lg">
              Please get in touch to get promote <strong>LG repair service</strong>, if you're experiencing any of these
              issues with your <strong>LG appliance</strong>. Our expert technicians can quickly diagnose and fix the
              problem, restoring your <strong>LG appliance</strong> to optimal functionality.
            </p>
            <a
              href="tel:877-770-0157"
              className="inline-flex items-center gap-2 bg-white text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-neutral-50 transition-colors text-xl"
            >
              <Phone className="w-6 h-6" />
              877-770-0157
            </a>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-12 text-center text-primary">
              Why Choose Rapid Appliance Service for Your LG Appliance Repair
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">
              <p>
                At <strong>Rapid Appliance Service</strong>, we're dedicated to providing the highest quality LG
                appliance repair services in Palm Springs. Here are some reasons why you should choose us for your{" "}
                <strong>LG appliance repairs</strong>:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Clock className="w-12 h-12 text-secondary" />,
                  title: "Fast and efficient service",
                  description:
                    "We understand that a malfunctioning LG appliance can disrupt your daily routine. That's why we strive to provide prompt and efficient repairs so you can return to your normal life as soon as possible.",
                },
                {
                  icon: <Award className="w-12 h-12 text-secondary" />,
                  title: "Skilled and experienced technicians",
                  description:
                    "Our technicians have years of experience repairing LG appliances. They have the expertise and knowledge to quickly diagnose and fix any issue your LG appliance may have.",
                },
                {
                  icon: <Wrench className="w-12 h-12 text-secondary" />,
                  title: "Quality parts and materials",
                  description:
                    "We only use high-quality parts and materials to ensure the longevity and reliability of your LG appliance.",
                },
                {
                  icon: <ThumbsUp className="w-12 h-12 text-secondary" />,
                  title: "Affordable prices",
                  description: "We offer competitive and transparent pricing for all our LG appliance repair services.",
                },
                {
                  icon: <Phone className="w-12 h-12 text-secondary" />,
                  title: "Excellent customer service",
                  description:
                    "We pride ourselves on providing excellent customer service. Our team is friendly, professional, and always ready to answer any questions.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-all"
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Don't let a malfunctioning LG appliance disrupt your daily routine. Contact{" "}
                <strong>Rapid Appliance Service</strong> today for fast, efficient, affordable{" "}
                <strong>LG appliance repair services in Palm Springs</strong>.
              </p>
            </div>
          </div>

          {/* Trust Section */}
          <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-12 text-white mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">LG Appliance Repair Service You Can Trust</h2>
            <div className="space-y-6 text-lg leading-relaxed max-w-4xl mx-auto">
              <p>
                One of the biggest reasons to choose <strong>LG</strong> is that you can find the right product because
                it offers a wide range of features at an affordable price. All products are extremely durable, no matter
                how often you use them.
              </p>
              <p>
                Choosing these <strong>appliances</strong> with various energy-saving features and overall improvements
                will be an invaluable investment in a truly energy-efficient home.
              </p>
              <p>
                Issues with ice dispensers and noisy refrigerators. The <strong>LG appliance repair specialists</strong>{" "}
                here at Xclusive Appliance Repair have what it takes to fix your problem, and if you carefully follow
                the manual when using your <strong>appliance</strong>, they can help you avoid it. Most of the time,
                these problems start appearing when the device is overused or not used properly. Like anything else,
                maintaining the perfect temperature setting and paying attention to defrosting can help prevent these
                problems.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-2xl p-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Phone className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-foreground">Call us</h3>
                <a href="tel:877-770-0157" className="text-lg text-primary font-semibold hover:underline">
                  877-770-0157
                </a>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-foreground">Opening hours</h3>
                <p className="text-muted-foreground">Mon - Sat 08:00AM - 6:00PM</p>
                <p className="text-muted-foreground">Sunday - Closed</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 text-secondary mx-auto mb-4 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-12 h-12"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Address</h3>
                <p className="text-muted-foreground">74711 Dillon Rd SPC 33</p>
                <p className="text-muted-foreground">Desert Hot Springs, CA, 92241</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
