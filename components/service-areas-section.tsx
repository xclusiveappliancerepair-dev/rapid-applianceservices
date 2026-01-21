import { MapPin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const areas = [
  "Palm Springs",
  "Desert Hot Springs",
  "Palm Desert",
  "Indio",
  "Rancho Mirage",
  "La Quinta",
  "Cathedral City",
  "Coachella",
  "North Palm Springs",
  "Sky Valley",
  "1000 Palms",
  "Yucca Valley",
]

export function ServiceAreasSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Service Area</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We proudly serve the entire Coachella Valley and surrounding areas
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-5xl mx-auto">
          {areas.map((area, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            >
              <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="font-medium text-foreground">{area}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
            <Link href="/service-area">See More Area</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
