import { CheckCircle2, Phone, Mail, Wrench, Clock, DollarSign, Shield, ThumbsUp } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"

const features = [
  {
    icon: Wrench,
    title: "Expert Technicians",
    description:
      "Our team at Rapid Appliance Services consists of technicians who are highly skilled and experienced in repairing cooktops. They have years of experience and are equipped with the latest tools and technology to diagnose and fix any issues with your cooktop. Our technicians undergo regular training to keep up with the latest advancements in cooktop technology, ensuring that they can fix any problem that comes their way. Folks in Palm Springs heavily depend on us to ensure that their appliances are running like new!",
  },
  {
    icon: Clock,
    title: "Prompt Service",
    description:
      "Here at Rapid Appliance Services, we understand how frustrating it can be to have a broken cooktop. That's why we offer same-day and next-day repairs to get your cooktop back up and running as soon as possible. Our technicians arrive at your doorstep on time and ready to work, so you don't have to waste any time waiting for them.",
  },
  {
    icon: DollarSign,
    title: "Affordable Prices",
    description:
      "We believe that high-quality repair services shouldn't come with a hefty price tag. That's why we offer competitive and transparent pricing to ensure that our customers get the best value for their money. We provide upfront pricing before we start any work, so there are no surprises when it comes to the final bill. Our prices are affordable, and we don't compromise on quality.",
  },
  {
    icon: Shield,
    title: "Quality Parts",
    description:
      "Here at Rapid Appliance Services, we only use genuine and high-quality replacement parts to ensure that your cooktop performs at its best. We understand that your cooktop is an important investment, and we want to make sure that it lasts for years to come. That's why we use only the best parts in our repairs, so you can be sure that your cooktop will be as good as new when we're done. All appliances in Palm Springs that have been repaired by us have the highest quality parts installed, and that's a fact.",
  },
  {
    icon: ThumbsUp,
    title: "Customer Satisfaction",
    description:
      "We take pride in our work and strive to provide the best possible customer service. Our goal is to make sure that you're completely satisfied with our work. We understand that your cooktop is an important appliance, and we want to make sure that it's repaired to your satisfaction. Rapid Appliance Services offers a satisfaction guarantee with all of our repairs. If you're not satisfied with our work, we'll do everything we can to make it right.",
  },
]

const commonProblems = [
  {
    title: "Broken Burner",
    description:
      "A broken burner is one of the most common cooktop problems. It can be caused by a variety of factors, such as a faulty igniter, a damaged switch, or a malfunctioning control module. Our technicians can diagnose the problem and replace the necessary parts to get your burner working again.",
  },
  {
    title: "Faulty Igniter",
    description:
      "The igniter is responsible for igniting the gas in your cooktop. If it's not working properly, your cooktop won't light. Our technicians can replace the igniter to ensure that your cooktop lights properly every time.",
  },
  {
    title: "Malfunctioning Control Module",
    description:
      "The control module is the brain of your cooktop. If it's not working properly, your cooktop may not heat up or may heat unevenly. Our technicians can diagnose and repair control module issues to restore your cooktop's functionality.",
  },
]

export default function CooktopRepairPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary text-white py-20">
        <div className="absolute inset-0 bg-[url('/abstract-tech-pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-secondary font-semibold mb-4 text-lg">Cooktop Repair Service Near You in Palm Springs</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Palm Springs Cooktop Repair</h1>
            <p className="text-xl text-white/90 text-pretty leading-relaxed mb-6">
              If you're someone who loves to cook, your{" "}
              <strong>cooktop is one of the most important appliances in your kitchen</strong>. It's where you prepare
              your meals and try out new recipes. So, when your cooktop breaks down, it can be a major inconvenience.
              That's where our <strong>cooktop repair service</strong> comes in.
            </p>
            <p className="text-lg text-white/80 text-pretty leading-relaxed">
              We provide <strong>expert repair services for a wide range of cooktop brands and models</strong>, serving
              all of Palm Springs and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="tel:877-770-0157"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5" />
                877-770-0157
              </a>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-neutral-50 transition-colors shadow-lg"
              >
                Schedule Repair
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">
              Why Choose Our Palm Springs Cooktop Repair Services?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-neutral-50 rounded-2xl p-8 shadow-lg border border-neutral-100 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">{feature.title}</h3>
                <p className="text-neutral-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-primary text-center">Common Cooktop Problems</h2>
            <p className="text-lg text-neutral-700 mb-12 text-center leading-relaxed">
              Cooktops are relatively simple appliances, but they can still experience problems. Here are some{" "}
              <strong>common cooktop problems that our technicians in Palm Springs are equipped to handle</strong>:
            </p>

            <div className="space-y-6">
              {commonProblems.map((problem, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-primary">{problem.title}</h3>
                      <p className="text-neutral-700 leading-relaxed">{problem.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-primary">Serving Palm Springs and Surrounding Areas</h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-4">
              <strong>Don't let a broken cooktop ruin your day</strong> – contact us today for expert repair services
              you can count on!
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed mb-8">
              Everybody in{" "}
              <strong>Palm Springs, Desert Hot Springs, Riverside, Whittier, and other surrounding areas</strong> truly
              depend on us to give them the best service possible and to provide our expertise to their satisfaction!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-secondary to-secondary/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Schedule Your Cooktop Repair Today</h3>
            <p className="text-xl mb-8 text-white/90">
              To schedule a cooktop repair service, simply <strong>give us a call or fill out our online form</strong>.
              Our friendly customer service representatives will be happy to assist you and answer any questions you may
              have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:877-770-0157"
                className="inline-flex items-center justify-center gap-2 bg-white text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-neutral-50 transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call Now: 877-770-0157
              </a>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg"
              >
                <Mail className="w-5 h-5" />
                Contact Us Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
