import { CheckCircle2, Users, Award, Clock } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img src="/professional-appliance-technician.jpg" alt="Professional technician" className="w-full h-auto" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground rounded-2xl shadow-xl p-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-1">130+</div>
                <div className="text-sm font-medium">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-secondary font-semibold mb-2">Appliances Repairing Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Your satisfaction is our capital</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Welcome to our website! We are your go-to experts for repairing your cooktop, refrigerator, and washing
              machine and other commercial appliances. Our team of experienced technicians has the skills and expertise
              to diagnose and fix any issue with your appliances quickly and efficiently.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you are experiencing a cooling problem with your range, a leaky refrigerator, or a faulty washing
              machine, we are here to help. We provide prompt and reliable repair services for all major brands and
              models of appliances, so you can trust us to get the job done right the first time.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 mb-8">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Reasonable Prices</h4>
                  <p className="text-sm text-muted-foreground">Competitive and transparent pricing</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Experienced</h4>
                  <p className="text-sm text-muted-foreground">25+ years in the industry</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Professional</h4>
                  <p className="text-sm text-muted-foreground">Certified and trained technicians</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Reliable</h4>
                  <p className="text-sm text-muted-foreground">Same-day service available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
