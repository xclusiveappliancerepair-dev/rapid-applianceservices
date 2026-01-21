"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react"
import { locations } from "@/lib/data/locations"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [serviceAreaOpen, setServiceAreaOpen] = useState(false)
  const [mobileServiceAreaOpen, setMobileServiceAreaOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [brandsOpen, setBrandsOpen] = useState(false)
  const [mobileBrandsOpen, setMobileBrandsOpen] = useState(false)
  const [commercialOpen, setCommercialOpen] = useState(false)
  const [mobileCommercialOpen, setMobileCommercialOpen] = useState(false)

  const serviceCategories = [
    { name: "Cooktop Repair", href: "/cooktop-repair" },
    { name: "Dishwasher Repair", href: "/dishwasher-repair" },
    { name: "Dryer Repair", href: "/dryer-repair" },
    { name: "Oven Repair", href: "/oven-repair" },
    { name: "Range Repair", href: "/range-repair" },
    { name: "Refrigerator Repair", href: "/refrigerator-repair" },
    { name: "Stove Repair", href: "/stove-repair" },
    { name: "Washer Repair", href: "/washer-repair" },
  ]

  const brands = [
    "Admiral",
    "Amana",
    "Dacor",
    "DSC",
    "Fisher & Paykel",
    "Frigidaire",
    "GE",
    "Hotpoint",
    "Jenn-Air",
    "Kenmore",
    "KitchenAid",
    "LG",
    "Maytag",
    "Samsung",
    "Sub-Zero",
    "Thermador",
    "Viking",
    "Whirlpool",
    "Wolf",
  ]

  const commercialBrands = ["Baxter Repair", "Hobart Repair", "Imperial Appliance Repair", "Speed Queen"]

  const commercialLinks: Record<string, string> = {
    "Baxter Repair": "/baxter-repair",
    "Hobart Repair": "/hobart-repair",
    "Imperial Appliance Repair": "/imperial-repair",
    "Speed Queen": "/speed-queen-repair",
  }

  const brandLinks: Record<string, string> = {
    Amana: "/amana-repair",
    Admiral: "/admiral-repair",
    Dacor: "/dacor-repair",
    DSC: "/dcs-repair",
    "Fisher & Paykel": "/fisher-paykel-repair",
    Frigidaire: "/frigidaire-repair",
    GE: "/ge-repair",
    Hotpoint: "/hotpoint-repair",
    "Jenn-Air": "/jenn-air-repair",
    Kenmore: "/kenmore-repair",
    KitchenAid: "/kitchenaid-repair",
    LG: "/lg-repair",
    Maytag: "/maytag-repair",
    Samsung: "/samsung-repair",
    "Sub-Zero": "/subzero-repair",
    Thermador: "/thermador-repair",
    Viking: "/viking-repair",
    Whirlpool: "/whirlpool-repair",
    Wolf: "/wolf-repair",
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-24 items-center justify-between gap-4">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <div className="relative h-16 w-16 sm:h-20 sm:w-20 flex-shrink-0">
                <Image
                  src="/rapid-appliance-logo.png"
                  alt="Rapid Appliance Service"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center leading-tight gap-0.5">
                <span className="text-[13px] sm:text-sm md:text-base lg:text-lg font-semibold text-primary text-center">
                  Serving
                </span>
                <span className="text-[13px] sm:text-sm md:text-base lg:text-lg font-semibold text-secondary whitespace-nowrap">
                  Palm Springs & Surrounding Areas
                </span>
                <span className="text-[13px] sm:text-sm md:text-base lg:text-lg font-semibold text-primary text-center">
                  Same Day Service
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              <Link
                href="/"
                className="text-sm font-medium text-foreground transition-colors hover:text-primary whitespace-nowrap"
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className="text-sm font-medium text-foreground transition-colors hover:text-primary whitespace-nowrap"
              >
                About Us
              </Link>
              <div
                className="relative"
                onMouseEnter={() => setServiceAreaOpen(true)}
                onMouseLeave={() => setServiceAreaOpen(false)}
              >
                <Link
                  href="/service-area"
                  className="text-sm font-medium text-foreground transition-colors hover:text-primary flex items-center gap-1 whitespace-nowrap py-2"
                >
                  Service Area
                  <ChevronDown className={`h-4 w-4 transition-transform ${serviceAreaOpen ? "rotate-180" : ""}`} />
                </Link>
                {serviceAreaOpen && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="w-56 h-96 bg-background border border-border rounded-lg shadow-lg py-2 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-muted/20 [&::-webkit-scrollbar-thumb]:bg-primary/50 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-primary/70">
                      {locations.map((location) => (
                        <Link
                          key={location.slug}
                          href={`/service-area/${location.slug}`}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          {location.city}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href="/services"
                  className="text-sm font-medium text-foreground transition-colors hover:text-primary flex items-center gap-1 whitespace-nowrap py-2"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </Link>
                {servicesOpen && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="w-56 h-48 bg-background border border-border rounded-lg shadow-lg py-2 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-muted/20 [&::-webkit-scrollbar-thumb]:bg-primary/50 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-primary/70">
                      {serviceCategories.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div
                className="relative"
                onMouseEnter={() => setBrandsOpen(true)}
                onMouseLeave={() => setBrandsOpen(false)}
              >
                <Link
                  href="/brands"
                  className="text-sm font-medium text-foreground transition-colors hover:text-primary flex items-center gap-1 whitespace-nowrap py-2"
                >
                  Brands
                  <ChevronDown className={`h-4 w-4 transition-transform ${brandsOpen ? "rotate-180" : ""}`} />
                </Link>
                {brandsOpen && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="w-56 h-48 bg-background border border-border rounded-lg shadow-lg py-2 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-muted/20 [&::-webkit-scrollbar-thumb]:bg-primary/50 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-primary/70">
                      {brands.map((brand) => (
                        <Link
                          key={brand}
                          href={brandLinks[brand] || "/brands"}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          {brand}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div
                className="relative"
                onMouseEnter={() => setCommercialOpen(true)}
                onMouseLeave={() => setCommercialOpen(false)}
              >
                <Link
                  href="/commercial"
                  className="text-sm font-medium text-foreground transition-colors hover:text-primary flex items-center gap-1 whitespace-nowrap py-2"
                >
                  Commercial
                  <ChevronDown className={`h-4 w-4 transition-transform ${commercialOpen ? "rotate-180" : ""}`} />
                </Link>
                {commercialOpen && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="w-56 h-auto bg-background border border-border rounded-lg shadow-lg py-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-muted/20 [&::-webkit-scrollbar-thumb]:bg-primary/50 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-primary/70">
                      {commercialBrands.map((brand) => (
                        <Link
                          key={brand}
                          href={commercialLinks[brand] || "/commercial"}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          {brand}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <Link
                href="/blog"
                className="text-sm font-medium text-foreground transition-colors hover:text-primary whitespace-nowrap"
              >
                Blog
              </Link>
              <Link
                href="/contact-us"
                className="text-sm font-medium text-foreground transition-colors hover:text-primary whitespace-nowrap"
              >
                Contact
              </Link>
            </nav>

            {/* Contact Info (Desktop only - no CTA button) */}
            <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
              <div className="flex flex-col items-end">
                <a
                  href="tel:877-770-0157"
                  className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary whitespace-nowrap"
                >
                  <Phone className="h-4 w-4" />
                  877-770-0157
                </a>
                <a
                  href="mailto:rapidappliancerepairservices@gmail.com"
                  className="text-xs text-muted-foreground hover:text-primary whitespace-nowrap"
                >
                  <Mail className="inline h-3 w-3 mr-1" />
                  Email Us
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden flex-shrink-0">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                className="h-12 w-12 flex items-center justify-center"
              >
                {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="border-t border-border py-4 md:hidden">
              <nav className="flex flex-col gap-4">
                <Link href="/" className="text-sm font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </Link>
                <Link
                  href="/about-us"
                  className="text-sm font-medium text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <div className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <Link
                      href="/service-area"
                      className="text-sm font-medium text-foreground flex-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Service Area
                    </Link>
                    <button onClick={() => setMobileServiceAreaOpen(!mobileServiceAreaOpen)}>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${mobileServiceAreaOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>
                  {mobileServiceAreaOpen && (
                    <div className="mt-2 ml-4 flex flex-col gap-2 max-h-64 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-muted/20 [&::-webkit-scrollbar-thumb]:bg-primary/50 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-primary/70">
                      {locations.map((location) => (
                        <Link
                          key={location.slug}
                          href={`/service-area/${location.slug}`}
                          className="text-sm text-muted-foreground hover:text-foreground"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {location.city}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <Link
                      href="/services"
                      className="text-sm font-medium text-foreground flex-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Services
                    </Link>
                    <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)}>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>
                  {mobileServicesOpen && (
                    <div className="mt-2 ml-4 flex flex-col gap-2 max-h-48 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-muted/20 [&::-webkit-scrollbar-thumb]:bg-primary/50 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-primary/70">
                      {serviceCategories.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="text-sm text-muted-foreground"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <Link
                      href="/brands"
                      className="text-sm font-medium text-foreground flex-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Brands
                    </Link>
                    <button onClick={() => setMobileBrandsOpen(!mobileBrandsOpen)}>
                      <ChevronDown className={`h-4 w-4 transition-transform ${mobileBrandsOpen ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                  {mobileBrandsOpen && (
                    <div className="mt-2 ml-4 flex flex-col gap-2 max-h-48 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-muted/20 [&::-webkit-scrollbar-thumb]:bg-primary/50 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-primary/70">
                      {brands.map((brand) => (
                        <Link
                          key={brand}
                          href={brandLinks[brand] || "/brands"}
                          className="text-sm text-muted-foreground"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {brand}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <Link
                      href="/commercial"
                      className="text-sm font-medium text-foreground flex-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Commercial
                    </Link>
                    <button onClick={() => setMobileCommercialOpen(!mobileCommercialOpen)}>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${mobileCommercialOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>
                  {mobileCommercialOpen && (
                    <div className="mt-2 ml-4 flex flex-col gap-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-muted/20 [&::-webkit-scrollbar-thumb]:bg-primary/50 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-primary/70">
                      {commercialBrands.map((brand) => (
                        <Link
                          key={brand}
                          href={commercialLinks[brand] || "/commercial"}
                          className="text-sm text-muted-foreground"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {brand}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link
                  href="/blog"
                  className="text-sm font-medium text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/contact-us"
                  className="text-sm font-medium text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <div className="pt-4 mt-4 border-t border-border">
                  <a
                    href="tel:877-770-0157"
                    className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2"
                  >
                    <Phone className="h-4 w-4" />
                    877-770-0157
                  </a>
                  <a href="mailto:rapidappliancerepairservices@gmail.com" className="text-xs text-muted-foreground">
                    <Mail className="inline h-3 w-3 mr-1" />
                    rapidappliancerepairservices@gmail.com
                  </a>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                >
                  <Link href="/contact-us" onClick={() => setMobileMenuOpen(false)}>
                    Get Estimate Or Call Us : 877-770-0157
                  </Link>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Desktop CTA Bar - below header */}
      <div className="hidden lg:block sticky top-24 z-40 border-b border-border/40 py-3 bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4">
          <Button asChild size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <Link href="/contact-us">Get Estimate Or Call Us : 877-770-0157</Link>
          </Button>
        </div>
      </div>
    </>
  )
}
