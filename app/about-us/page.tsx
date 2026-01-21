import { Phone, Mail, CheckCircle2, Target, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('/abstract-tech-pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">About Us</h1>
            <p className="text-xl text-navy-100 text-pretty">
              Complete appliance repair service near you in Palm Springs, CA
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-navy-900">Appliance Repair Service in Palm Springs</h2>
              <div className="space-y-4 text-lg text-neutral-700 leading-relaxed">
                <p>
                  At <strong>Rapid Appliances Service</strong>, we believe that every customer is unique and deserves a
                  personalized experience. That's why we take the time to understand our customers' needs and
                  preferences and tailor our products/services to meet their specific requirements.
                </p>
                <p>
                  Our team of professionals is dedicated to providing customized solutions that exceed our customers'
                  expectations. We work closely with our clients to ensure that we understand their goals and objectives
                  and develop a plan that aligns with their vision.
                </p>
                <p>
                  We also understand that our customers' needs may change over time, and we're always ready to adapt and
                  evolve with them. We're committed to building long-term relationships with our clients and are always
                  available to provide ongoing support and assistance.
                </p>
              </div>
              <Link
                href="/contact-us"
                className="inline-block mt-8 bg-coral-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-coral-600 transition-colors"
              >
                Get Our Service Now
              </Link>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/appliance-repair-technician-working.jpg"
                alt="Appliance Repair Service"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Guaranteed Service */}
          <div className="bg-gradient-to-br from-navy-50 to-neutral-50 rounded-3xl p-12 mb-16">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-navy-900">
                Guaranteed Appliance Repair Service Palm Springs
              </h2>
              <h3 className="text-4xl font-bold mb-6 text-coral-500">All work is guaranteed</h3>
              <p className="text-lg text-neutral-700 leading-relaxed">
                At <strong>Rapid Appliances Service</strong>, we're not just selling products or services; we're
                building relationships. We take pride in being a trusted partner to our clients and are committed to
                their success.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed mt-4">
                Thank you for choosing Rapid Appliances Service. We look forward to working with you and providing you
                with a unique and personalized experience that sets us apart from the competition.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: CheckCircle2, title: "Reasonable prices" },
                { icon: CheckCircle2, title: "Experienced" },
                { icon: CheckCircle2, title: "Reliable" },
                { icon: CheckCircle2, title: "Professional" },
                { icon: CheckCircle2, title: "Cost effective" },
                { icon: CheckCircle2, title: "Quick Service" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                  <item.icon className="w-6 h-6 text-coral-500 flex-shrink-0" />
                  <span className="font-semibold text-navy-900">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-coral-100 rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-coral-500" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900">Our Vision</h3>
              </div>
              <p className="text-neutral-700 leading-relaxed">
                Our vision at <strong>Rapid Appliance Service</strong> is to become the leading appliance repair service
                provider in the region, known for our exceptional customer service, reliability, and commitment to
                quality. We strive to be the go-to company for appliance repairs, installation, and maintenance,
                providing our customers with peace of mind and exceptional value for their money.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-navy-100 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-navy-500" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900">Our Mission</h3>
              </div>
              <p className="text-neutral-700 leading-relaxed">
                Our mission at <strong>Rapid Appliance Service</strong> is to deliver fast, reliable, and cost-effective
                appliance repair services to our customers. We aim to provide top-notch services that exceed our
                customers' expectations, using the latest technology and techniques to ensure the highest level of
                quality and precision.
              </p>
              <p className="text-neutral-700 leading-relaxed mt-4">
                We are committed to providing exceptional customer service, building long-term relationships with our
                clients, and becoming a trusted partner for their appliance repair needs.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-coral-500 to-coral-600 rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl mb-8 text-coral-50">Contact us today for fast, reliable appliance repair service</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:877-770-0157"
                className="inline-flex items-center justify-center gap-2 bg-white text-coral-500 px-8 py-4 rounded-lg font-semibold hover:bg-neutral-50 transition-colors"
              >
                <Phone className="w-5 h-5" />
                877-770-0157
              </a>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 bg-navy-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-navy-800 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  )
}
