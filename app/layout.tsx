import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/header"
import { MobileCallButton } from "@/components/mobile-call-button"
import { TawkToChat } from "@/components/tawk-to-chat"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rapid Appliance Service - Professional Appliance Repair in Palm Springs",
  description:
    "Expert appliance repair services in Palm Springs. Fast, reliable repairs for refrigerators, washers, dryers, ovens, and more. Same-day service available.",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans antialiased`}>
        <Header />
        <MobileCallButton />
        {children}
        <Analytics />
        <TawkToChat />
      </body>
    </html>
  )
}
