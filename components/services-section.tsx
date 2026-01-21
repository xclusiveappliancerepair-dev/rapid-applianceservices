import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Wrench, Refrigerator, WashingMachine, Flame, UtensilsCrossed, Wind } from "lucide-react"

const services = [
  {
    icon: UtensilsCrossed,
    title: "Dishwasher Repair",
    description:
      "Our expert technicians can diagnose and repair any issue with your dishwasher, from leaks and clogs to malfunctioning components.",
    href: "/dishwasher-repair", // Fixed href
  },
  {
    icon: Flame,
    title: "Cooktop Repair",
    description:
      "Don't let a broken cooktop ruin your mealtime routine. We can quickly repair any issue with your cooktop, including faulty burners, damaged knobs, or malfunctioning controls.",
    href: "/cooktop-repair", // Fixed href
  },
  {
    icon: Wind,
    title: "Dryer Repair",
    description:
      "A malfunctioning dryer can be frustrating and time-consuming. Our team can diagnose and repair any issue with your dryer, including faulty thermostats, damaged belts, or malfunctioning control panels.",
    href: "/dryer-repair", // Fixed href
  },
  {
    icon: Refrigerator,
    title: "Refrigerator Repair",
    description:
      "When your refrigerator breaks down, it can be a major inconvenience. Our team can diagnose and repair any issue with your fridge, including faulty compressors, damaged thermostats, or malfunctioning fans.",
    href: "/refrigerator-repair", // Fixed href
  },
  {
    icon: Wrench,
    title: "Oven Repair",
    description:
      "A broken oven can put a damper on your cooking plans. Our expert technicians can diagnose and repair any issue with your oven, from faulty heating elements and broken door seals to malfunctioning control panels.",
    href: "/oven-repair", // Fixed href
  },
  {
    icon: WashingMachine,
    title: "Washer Repair",
    description:
      "A broken washing machine can cause a lot of stress. Our team can quickly diagnose and repair any issue with your washer, including faulty pumps, damaged belts, or malfunctioning control panels.",
    href: "/washer-repair", // Fixed href
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-secondary font-semibold mb-2">Appliances Repair Services Near You in Palm Spring</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We offer expert repair services for Cooktop, refrigerators, and washing machines to keep your appliances
            running smoothly.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50"
              >
                <CardContent className="p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
                  <Link
                    href={service.href}
                    className="text-primary font-medium text-sm hover:underline inline-flex items-center gap-1"
                  >
                    Learn More →
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/services">See More Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
