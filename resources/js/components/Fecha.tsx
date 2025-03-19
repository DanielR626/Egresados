
"use client"

import type * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function CurrentDateDisplay({ className }: React.HTMLAttributes<HTMLDivElement>) {
  // Usar la fecha actual
  const currentDate = new Date()

  return (
    <div className={cn("w-full flex justify-end", className)}>
      <Button variant={"outline"} className={cn("inline-flex justify-start text-left font-normal")}>
        <CalendarIcon className="mr-2 h-4 w-4" />
        <span>{format(currentDate, "LLL dd, y")}</span>
      </Button>
    </div>
  )
}

export default CurrentDateDisplay;