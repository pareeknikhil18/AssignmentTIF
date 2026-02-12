"use client"

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { CheckCircle } from "lucide-react"

interface SuccessModalProps {
  open: boolean
  onClose: () => void
}

export function SuccessModal({ open, onClose }: SuccessModalProps) {
  return (
    <Dialog open={open} onOpenChange={(val) => !val && onClose()}>
      <DialogContent className="max-w-sm rounded-2xl border-0 shadow-xl p-8">
        <DialogTitle className="sr-only">Form Submitted</DialogTitle>
        <DialogDescription className="sr-only">Your activity form has been successfully submitted.</DialogDescription>
        <div className="flex flex-col items-center gap-4">
          <div className="relative flex items-center justify-center">
            <div className="absolute h-20 w-20 rounded-full bg-[hsl(230,60%,90%)] opacity-50" />
            <CheckCircle className="relative h-12 w-12 text-[hsl(140,60%,55%)] fill-[hsl(140,60%,55%)] stroke-background" />
          </div>
          <p className="text-lg font-semibold text-foreground">Form Submitted</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
