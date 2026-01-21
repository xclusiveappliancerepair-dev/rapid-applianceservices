"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, User, Wrench } from "lucide-react"

export function RequestFormSection() {
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
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Request a Service</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below and our team will contact you within 24 hours to schedule your appliance repair
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-xl p-8 md:p-12 border border-border">
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
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
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
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(760) 123-4567"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
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

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button type="submit" disabled={isSubmitting} className="flex-1 h-12 text-base font-semibold">
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
                    className="flex-1 h-12 text-base font-semibold bg-transparent"
                    asChild
                  >
                    <a href="tel:+17601234567">
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
        </div>
      </div>
    </section>
  )
}
