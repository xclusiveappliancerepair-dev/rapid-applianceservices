import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "John Smith",
    text: "I was really impressed with the quick and efficient service I received from this company. The technician arrived on time and was able to fix my refrigerator in no time. I would definitely recommend them to anyone in need of appliance repairs!",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    text: "I had a great experience with this company. The technician was very knowledgeable and professional, and he took the time to explain the issue with my range and how he was going to fix it. I appreciated the transparency and excellent service.",
    rating: 5,
  },
  {
    name: "Michael Davis",
    text: "Outstanding service! They fixed my washing machine the same day I called. The technician was courteous, professional, and the pricing was very reasonable. Highly recommend!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm">"{testimonial.text}"</p>
                <p className="font-semibold text-foreground">— {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
