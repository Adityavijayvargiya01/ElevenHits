import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function page() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center gap-10 m-10">
        <h1 className="font-bold text-5xl text-primary">
          Products
        </h1>
        <Carousel
          opts={{
            align: "start",
          }}
          className=" w-full "
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardHeader>Face Cream</CardHeader>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <Image
                        src={`/Images/IMG_${index % 2 + 2}.png`}
                        width={150}
                        height={400}
                        className="rounded-lg"
                        alt="fuck"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </main>
  )
}