"use client"

import { useEffect } from "react"

export function TawkToChat() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initialize Tawk_API object
      window.Tawk_API = window.Tawk_API || {}
      window.Tawk_LoadStart = new Date()

      const script = document.createElement("script")
      script.async = true
      script.src = "https://embed.tawk.to/640698124247f20fefe45fb2/1gqss431m"
      script.charset = "UTF-8"
      script.setAttribute("crossorigin", "*")

      const firstScript = document.getElementsByTagName("script")[0]

      if (firstScript && firstScript.parentNode) {
        firstScript.parentNode.insertBefore(script, firstScript)
      }
    }

    // Cleanup function
    return () => {
      const tawkScript = document.querySelector('script[src*="tawk.to"]')
      if (tawkScript) {
        tawkScript.remove()
      }
      // Remove Tawk.to widget elements
      const tawkWidget = document.getElementById("tawk-bubble")
      if (tawkWidget) {
        tawkWidget.remove()
      }
    }
  }, [])

  return null
}

// TypeScript declaration for Tawk_API
declare global {
  interface Window {
    Tawk_API?: any
    Tawk_LoadStart?: Date
  }
}
