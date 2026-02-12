"use client"

import { FileText, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

interface StepSidebarProps {
  currentStep: number
}

const steps = [
  { label: "Activity Details", icon: FileText },
  { label: "Location Details", icon: MapPin },
]

export function StepSidebar({ currentStep }: StepSidebarProps) {
  return (
    <nav className="flex flex-col gap-1 w-44 shrink-0" aria-label="Form steps">
      {steps.map((step, index) => {
        const isActive = currentStep === index
        const Icon = step.icon
        return (
          <div
            key={step.label}
            className={cn(
              "flex items-center gap-2 px-3 py-2.5 text-sm font-medium transition-colors rounded-md",
              isActive
                ? "bg-muted text-foreground border-l-[3px] border-foreground"
                : "text-muted-foreground"
            )}
          >
            <Icon className="h-4 w-4 shrink-0" />
            <span>{step.label}</span>
          </div>
        )
      })}
    </nav>
  )
}
