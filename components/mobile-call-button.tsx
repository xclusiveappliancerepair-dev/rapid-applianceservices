"use client"

import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileCallButton() {
  return (
    <div className="sticky top-24 z-40 md:hidden">
      <div className="container mx-auto px-4 py-3 bg-background/95 backdrop-blur border-b border-border/40">
        <Button
          asChild
          size="lg"
          className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg font-bold py-6"
        >
          <a href="tel:877-770-0157" className="flex items-center justify-center gap-3">
            <Phone className="h-6 w-6" />
            Call Us Now: 877-770-0157
          </a>
        </Button>
      </div>
    </div>
  )
}
