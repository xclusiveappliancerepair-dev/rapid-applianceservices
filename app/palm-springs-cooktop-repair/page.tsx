import { CheckCircle2, Phone, Mail, Wrench, Clock, DollarSign, Shield, ThumbsUp } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"

const features = [
  {
    icon: Wrench,
    title: "Expert Technicians",
    description:
      "Our team at Rapid Appliance Services consists of technicians who are highly skilled and experienced in repairing cooktops. They have years of experience and are equipped with the latest tools and technology to diagnose and fix any issues with your cooktop.",
  },
  {
    icon: Clock,
    title: "Prompt Service",
    description:
      "Here at Rapid Appliance Services, we understand how frustrating it can be to have a broken cooktop. That's why we offer same-day and next-day repairs to get your cooktop back up and running as soon as possible.",
  },
  {
    icon: DollarSign,
    title: "Affordable Prices",
    description:
      "We believe that high-quality repair services shouldn't come with a hefty price tag. We offer competitive and transparent pricing to ensure that our customers get the best value for their money.",
  },
  {
    icon: Shield,
    title: "Quality Parts",
    description:
      "Here at Rapid Appliance Services, we only use genuine and high-quality replacement parts to ensure that your cooktop performs at its best. All appliances in Palm Springs that have been repaired by us have the highest quality parts installed.",
  },
  {
    icon: ThumbsUp,
    title: "Customer Satisfaction",
    description:
      "We take pride in our work and strive to provide the best possible customer service. Rapid Appliance Services offers a satisfaction guarantee with all of our repairs. If you're not satisfied with our work, we'll do everything we can to make it right.",
  },
]

const commonProblems = [
  "Broken Burner",
  "Faulty Igniter",
  "Malfunctioning Control Module",
  "Damaged Switch",
  "Gas Flow Issues",
  "Temperature Control Problems",
]

export default function CooktopRepairPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('/abstract-tech-pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-coral-400 font-semibold mb-4 text-lg">Cooktop Repair Service Near You in Palm Springs</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Palm Springs Cooktop Repair</h1>
            <p className="text-xl text-navy-100 text-pretty leading-relaxed">
              If you're someone who loves to cook, your cooktop is one of the most important appliances in your kitchen.
              When your cooktop breaks down, it can be a major inconvenience. That's where our cooktop repair service
              comes in.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="tel:877-770-0157"
                className="inline-flex items-center justify-center gap-2 bg-coral-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-coral-600 transition-colors"
              >
                <Phone className="w-5 h-5" />
                877-770-0157
              </a>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 bg-white text-navy-900 px-8 py-4 rounded-lg font-semibold hover:bg-neutral-50 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-navy-900">
              Why Choose Our Palm Springs Cooktop Repair Services?
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
              We provide expert repair services for a wide range of cooktop brands and models, serving all of Palm
              Springs and surrounding areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100 hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-coral-100 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-coral-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-navy-900">{feature.title}</h3>
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
            <h2 className="text-4xl font-bold mb-8 text-navy-900 text-center">Common Cooktop Problems We Fix</h2>
            <p className="text-lg text-neutral-700 mb-8 text-center">
              Cooktops are relatively simple appliances, but they can still experience problems. Here are some common
              cooktop problems that our technicians in Palm Springs are equipped to handle:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {commonProblems.map((problem, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-coral-500 flex-shrink-0" />
                  <span className="font-semibold text-navy-900">{problem}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-navy-900">Broken Burner</h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                A broken burner is one of the most common cooktop problems. It can be caused by a variety of factors,
                such as a faulty igniter, a damaged switch, or a malfunctioning control module. Our technicians can
                diagnose the problem and replace the necessary parts to get your burner working again.
              </p>

              <h3 className="text-2xl font-bold mb-4 text-navy-900 mt-8">Faulty Igniter</h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                The igniter is responsible for igniting the gas in your cooktop. If it's not working properly, your
                cooktop won't light. Our technicians can replace the igniter to ensure that your cooktop lights properly
                every time.
              </p>

              <h3 className="text-2xl font-bold mb-4 text-navy-900 mt-8">Malfunctioning Control Module</h3>
              <p className="text-neutral-700 leading-relaxed">
                The control module is the brain of your cooktop. If it's not working properly, your cooktop may not heat
                up or may heat unevenly. Our technicians can diagnose and repair control module issues to restore your
                cooktop's functionality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-navy-900">Serving Palm Springs and Surrounding Areas</h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-8">
              Everybody in Palm Springs, Desert Hot Springs, Riverside, Whittier, and other surrounding areas truly
              depend on us to give them the best service possible and to provide our expertise to their satisfaction!
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 bg-coral-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-coral-600 transition-colors"
            >
              Schedule a Repair
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-coral-500 to-coral-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Don't Let a Broken Cooktop Ruin Your Day</h3>
            <p className="text-xl mb-8 text-coral-50">
              To schedule a cooktop repair service, simply give us a call or fill out our online form. Our friendly
              customer service representatives will be happy to assist you and answer any questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:877-770-0157"
                className="inline-flex items-center justify-center gap-2 bg-white text-coral-500 px-8 py-4 rounded-lg font-semibold hover:bg-neutral-50 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now: 877-770-0157
              </a>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 bg-navy-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-navy-800 transition-colors"
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
