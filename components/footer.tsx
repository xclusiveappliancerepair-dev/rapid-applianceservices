import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram } from "lucide-react"

const YelpIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M12.271 17.669c-.05.428.239.806.644.844l3.913.372c.405.038.778-.25.832-.642l.501-3.635c.054-.392-.214-.753-.597-.805l-3.706-.502c-.383-.052-.746.214-.81.593l-.777 3.775zm-1.26-7.827c.141.397.543.608.897.471l3.419-1.326c.354-.137.53-.538.393-.895l-1.254-3.274c-.137-.357-.538-.533-.895-.396l-3.419 1.326c-.357.138-.533.539-.396.896l1.255 3.198zm-3.353 2.568c-.357-.138-.758.039-.896.396l-3.913.372c-.405.038-.694.416-.644.844l.777 3.775c.064.379.427.645.81.593l3.706-.502c.383-.052.651-.413.597-.805l-.501-3.599z" />
  </svg>
)

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative h-16 w-16 flex-shrink-0">
                <Image src="/rapid-appliance-logo.png" alt="Rapid Appliance Service" fill className="object-contain" />
              </div>
              <div className="flex flex-col justify-center leading-tight gap-0.5">
                <span className="text-xs font-semibold text-primary text-center">Serving</span>
                <span className="text-xs font-semibold text-secondary whitespace-nowrap">
                  Palm Springs & Surrounding Areas
                </span>
                <span className="text-xs font-semibold text-primary text-center">Same Day Service</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              At Rapid Appliances Service, we believe that every customer is unique and deserves a personalized
              experience. That's why we take the time to understand our customers' needs and preferences and tailor our
              services to meet their specific requirements.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/rapid.appliance/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/rapidappliancerepairservices?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.yelp.com/biz/rapid-appliance-services-desert-hot-springs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <YelpIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/brands" className="text-muted-foreground hover:text-primary transition-colors">
                  Brands
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:877-770-0157" className="text-muted-foreground hover:text-primary transition-colors">
                  <strong className="text-foreground">Phone:</strong>
                  <br />
                  877-770-0157
                </a>
              </li>
              <li>
                <a
                  href="mailto:rapidappliancerepairservices@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <strong className="text-foreground">Email:</strong>
                  <br />
                  rapidappliancerepairservices@gmail.com
                </a>
              </li>
              <li className="text-muted-foreground">
                <strong className="text-foreground">Hours:</strong>
                <br />
                Mon - Sat: 08:00AM - 6:00PM
                <br />
                Sunday: Closed
              </li>
              <li className="text-muted-foreground">
                <strong className="text-foreground">Address:</strong>
                <br />
                74711 Dillon Rd SPC 33
                <br />
                Desert Hot Springs, CA, 92241
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>Copyright © 2025 Rapid Appliance Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
