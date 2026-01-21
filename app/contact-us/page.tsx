"use client"

import type React from "react"

import { Phone, Mail, MapPin, Clock, User, Wrench } from "lucide-react"
import { useState } from "react"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    appliance: "",
    customAppliance: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/send-estimate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to send request")
      }

      await response.json()
      setSubmitStatus("success")

      // Reset form after success
      setTimeout(() => {
        setFormData({ name: "", phone: "", email: "", appliance: "", customAppliance: "", message: "" })
        setSubmitStatus("idle")
      }, 3000)
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('/abstract-tech-pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-coral-400 font-semibold mb-4 text-lg">Contact Us</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Get in Touch</h1>
            <p className="text-xl text-navy-100 text-pretty">
              Please use the form below to get in touch with us, and we'll respond as soon as possible. Alternatively,
              you can reach us by email, phone, or social media.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl shadow-xl p-8 border border-border">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Get Estimate</h2>

              {submitStatus === "success" ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Request Submitted!</h3>
                  <p className="text-muted-foreground">We'll contact you soon to confirm your appointment.</p>
                </div>
              ) : submitStatus === "error" ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Submission Failed</h3>
                  <p className="text-muted-foreground mb-4">
                    There was an error sending your request. Please try again or call us directly.
                  </p>
                  <Button onClick={() => setSubmitStatus("idle")} variant="outline">
                    Try Again
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(760) 123-4567"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="appliance" className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-primary" />
                      Appliance Type *
                    </label>
                    <select
                      id="appliance"
                      name="appliance"
                      required
                      value={formData.appliance}
                      onChange={handleChange}
                      className="h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="" disabled>
                        Select appliance type
                      </option>
                      <option value="Range Repair">Range Repair</option>
                      <option value="Stove Repair">Stove Repair</option>
                      <option value="Oven Repair">Oven Repair</option>
                      <option value="Washer Repair">Washer Repair</option>
                      <option value="Dryer Repair">Dryer Repair</option>
                      <option value="Refrigerator Repair">Refrigerator Repair</option>
                      <option value="Dishwasher Repair">Dishwasher Repair</option>
                      <option value="Cooktop Repair">Cooktop Repair</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {formData.appliance === "Other" && (
                    <div className="space-y-2">
                      <label htmlFor="customAppliance" className="text-sm font-medium text-foreground">
                        Please specify appliance type *
                      </label>
                      <Input
                        id="customAppliance"
                        name="customAppliance"
                        type="text"
                        required
                        value={formData.customAppliance}
                        onChange={handleChange}
                        placeholder="Enter appliance type"
                        className="h-12"
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Describe the Issue *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe the problem with your appliance..."
                      className="min-h-32 resize-none"
                    />
                  </div>

                  <div className="flex flex-col gap-4 pt-4">
                    <Button type="submit" disabled={isSubmitting} className="w-full h-12 text-base font-semibold">
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        "Submit Request"
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full h-12 text-base font-semibold bg-transparent"
                      asChild
                    >
                      <a href="tel:877-770-0157">
                        <Phone className="w-5 h-5 mr-2" />
                        Call Now
                      </a>
                    </Button>
                  </div>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to our terms of service and privacy policy
                  </p>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-coral-500 to-coral-600 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Office phone number</h3>
                </div>
                <a href="tel:877-770-0157" className="text-2xl font-bold hover:text-coral-50 transition-colors">
                  877-770-0157
                </a>
              </div>

              <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Email</h3>
                </div>
                <a
                  href="mailto:rapidappliancerepairservices@gmail.com"
                  className="text-lg hover:text-navy-100 transition-colors break-all"
                >
                  rapidappliancerepairservices@gmail.com
                </a>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-coral-100 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-coral-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900">Address</h3>
                </div>
                <address className="text-neutral-700 not-italic leading-relaxed">
                  74711 Dillon Rd
                  <br />
                  SPC 33
                  <br />
                  Desert Hot Springs, CA, 92241
                </address>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-navy-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-navy-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900">Opening Hours</h3>
                </div>
                <div className="space-y-2 text-neutral-700">
                  <p>
                    <strong>Mon - Sat:</strong> 08:00AM - 6:00PM
                  </p>
                  <p>
                    <strong>Sunday:</strong> Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12">
            <div className="bg-neutral-200 rounded-2xl overflow-hidden h-96">
              <iframe
                src="https://maps.google.com/maps?q=74711%20Dillon%20Rd%20SPC%2033%20Desert%20Hot%20Springs%2C%20CA%2C%2092241&t=m&z=10&output=embed&iwloc=near"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
