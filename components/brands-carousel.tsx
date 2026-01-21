"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const brands = [
  { name: "Admiral", logo: "/admiral-appliance-logo.jpg" },
  { name: "Amana", logo: "/amana-appliance-logo.jpg" },
  { name: "Dacor", logo: "/dacor-appliance-logo.jpg" },
  { name: "DSC", logo: "/dsc-appliance-logo.jpg" },
  { name: "Fisher & Paykel", logo: "/fisher-paykel-appliance-logo.jpg" },
  { name: "Frigidaire", logo: "/frigidaire-appliance-logo.jpg" },
  { name: "GE", logo: "/ge-appliance-logo.jpg" },
  { name: "Hotpoint", logo: "/hotpoint-appliance-logo.jpg" },
  { name: "Jenn-Air", logo: "/jenn-air-appliance-logo.jpg" },
  { name: "Kenmore", logo: "/kenmore-appliance-logo.jpg" },
  { name: "KitchenAid", logo: "/kitchenaid-appliance-logo.jpg" },
  { name: "LG", logo: "/lg-appliance-logo.jpg" },
  { name: "Maytag", logo: "/maytag-appliance-logo.jpg" },
  { name: "Samsung", logo: "/samsung-appliance-logo.jpg" },
  { name: "Sub-Zero", logo: "/subzero-appliance-logo.jpg" },
  { name: "Thermador", logo: "/thermador-appliance-logo.jpg" },
  { name: "Viking", logo: "/viking-appliance-logo.jpg" },
  { name: "Wolf", logo: "/wolf-appliance-logo.jpg" },
  { name: "Whirlpool", logo: "/whirlpool-appliance-logo.jpg" },
]

export function BrandsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const brandsPerPage = 4

  const totalPages = Math.ceil(brands.length / brandsPerPage)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages)
  }

  const visibleBrands = brands.slice(currentIndex * brandsPerPage, (currentIndex + 1) * brandsPerPage)

  return (
    <div className="relative">
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="flex-shrink-0 h-12 w-12 rounded-full border-2 hover:bg-secondary hover:text-white hover:border-secondary bg-transparent"
          aria-label="Previous brands"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <div className="flex-1 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleBrands.map((brand, index) => (
            <div
              key={`${currentIndex}-${index}`}
              className="bg-white rounded-xl p-6 flex flex-col items-center justify-between shadow-sm hover:shadow-md transition-shadow min-h-[180px]"
            >
              <div className="relative w-full h-24 flex items-center justify-center mb-4">
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={`${brand.name} logo`}
                  width={120}
                  height={80}
                  className="object-contain"
                />
              </div>
              <p className="text-sm font-semibold text-center text-foreground mt-auto">{brand.name}</p>
            </div>
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="flex-shrink-0 h-12 w-12 rounded-full border-2 hover:bg-secondary hover:text-white hover:border-secondary bg-transparent"
          aria-label="Next brands"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? "w-8 bg-secondary" : "w-2 bg-muted-foreground/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
