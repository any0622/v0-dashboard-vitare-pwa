"use client"

import { AlertTriangle } from "lucide-react"
import { ShimmerButton } from "@/components/ui/shimmer-button"

export function EmergencyFab() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <ShimmerButton
        background="#A20202"
        shimmerColor="#ff6b6b"
        borderRadius="100%"
        shimmerDuration="2s"
        className="h-14 w-14 p-0 shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Emergência"
      >
        <AlertTriangle className="h-6 w-6 text-white" />
      </ShimmerButton>
    </div>
  )
}
