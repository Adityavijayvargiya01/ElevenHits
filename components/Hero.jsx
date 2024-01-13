import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { ShoppingCartIcon} from '@heroicons/react/24/outline'

export default function Hero() {
  return (
    <main>
    <div className='flex flex-col-reverse lg:flex-row justify-between lg:my-10 my-5'>
        <div className='lg:w-1/2 p-10 lg:p-20 flex flex-col items-center mb-10 border-b-1  border-secondary'>
        <h1 className=' font-semibold text-2xl lg:text-3xl text-center text-primary text-wrap m-8'>"Being Beautiful was never been so easy until now with ElevenHits"</h1>
        <p className='text-lg text-center font-medium'>ElevenHits is a beauty brand that offers the best quality makeup and skincare products at an affordable price. 
            We are 100% cruelty free and we have a large variety of products for you to choose from. </p>
        <a href="/Products"><Button className='text-lg rounded-md  gap-x-4 m-8'>Shop Now<ShoppingCartIcon className='h-6 w-6'/></Button></a>
        </div>
        <Image
          src="/Images/IMG_1.png" 
          alt="Description of image" 
          width={600} 
          height={150}
          className='lg:rounded-l-xl border-accent-foreground border-t-2 border-b-2 lg:border-l-2' 
      />
    </div>
    
    
    
    </main>
  )
}
