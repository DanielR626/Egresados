"use client"
import { useEffect, useState } from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

export function CarouselDemo() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      api.scrollNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [api])

  const images = [
    "https://www.umariana.edu.co/images2023/noticias/ingeniera-sistemas-30-img1.jpg",
    "https://www.umariana.edu.co/images2023/noticias/ingeniera-sistemas-30-img2.jpg",
    "https://www.umariana.edu.co/images2023/noticias/ingeniera-sistemas-30-img3.jpg"
  ]

  return (
    <div className="relative flex items-start justify-center h-full w-full max-w-lg mx-auto -mt-18">
      <Carousel className="w-full" setApi={setApi} opts={{ loop: true }}>
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index} className="flex justify-center">
              <div className="p-4 w-full max-w-md">
                <Card>
                  <CardContent className="flex aspect-[4/3] items-center justify-center p-0">
                    <img 
                      src={src} 
                      alt={`Imagen ${index + 1}`}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/70 hover:bg-background/90 transition-opacity" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/70 hover:bg-background/90 transition-opacity" />
      </Carousel>
    </div>
  )
}

export default CarouselDemo
