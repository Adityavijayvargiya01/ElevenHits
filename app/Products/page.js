import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle , CardFooter, CardDescription } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { ShoppingBagIcon } from '@heroicons/react/24/outline'


export default function page() {
  return (
    <main>
       
      <div className="flex flex-col justify-center items-center gap-10 m-16">
      <h1 className="font-bold text-5xl text-primary">Products</h1>
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
                    <CardTitle className='p-4'>Facewash</CardTitle>
                    <CardDescription className='p-4'>ElevenHits GlowGlide Face Wash: Elevate your skincare routine with our refreshing face wash. Formulated to cleanse and revitalize, it&apos;s your daily burst of freshness for a radiant, clean face. Embrace the glow with Elevengits!</CardDescription>
                    <CardContent className="flex aspect-square items-center justify-center h-64 mx-auto p-6">
                      <h1 className="text-5xl font-semibold">{index + 1}</h1>
                    </CardContent>
                    <CardDescription className='m-5 mx-8 text-lg'>$500</CardDescription>
                    <CardFooter>
                      <Button className="w-full">
                        <ShoppingBagIcon className="mr-2 h-4 w-4" /> Add to cart
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="flex justify-center items-center gap-10 m-16">
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
                    <CardTitle className='p-4'>Sunscream</CardTitle>
                    <CardDescription className='p-4'>ElevenHits SunGuard: Unbeatable sun protection in a lightweight, non-greasy formula. Defend your skin with confidence and embrace the sun safely.</CardDescription>
                    <CardContent className="flex aspect-square items-center justify-center h-64 mx-auto p-6">
                      <h1 className="text-5xl font-semibold">{index + 1}</h1>
                    </CardContent>
                    <CardDescription className='m-5 mx-8 text-lg'>$500</CardDescription>
                    <CardFooter>
                      <Button className="w-full">
                        <ShoppingBagIcon className="mr-2 h-4 w-4" /> Add to cart
                      </Button>
                    </CardFooter>
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
  );
}