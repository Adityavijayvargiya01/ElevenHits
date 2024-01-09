import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <main>
    <div className='lg:flex justify-between my-20'>
        <div className='w-1/2 p-16'>
        <h1 className=' font-bold text-3xl text-center text-primary text-wrap m-8'>"Being Beautiful was never been so easy until now with ElevenHits"</h1>
        <p className='text-lg text-center font-medium'>ElevenHits is a beauty brand that offers the best quality makeup and skincare products at an affordable price. 
            We are 100% cruelty free and we have a large variety of products for you to choose from. </p>
        </div>
        <Image
        src="/Images/IMG_1.png" 
        alt="Description of image" 
        width={600} 
        height={400}
        className='rounded-l-xl border-accent-foreground  border-t-4 border-b-4 border-l-4' 
      />
    </div>
    <div className='lg:flex justify-between m-5'>
        <Image
        src="/Images/IMG_2.png" 
        alt="Description of image" 
        width={200} 
        height={50}
        className='rounded-xl  mx-auto border-accent-foreground border-4' 
        />
        <div className='w-1/2 p-16'>
        <h1 className=' font-bold text-3xl text-center text-primary text-wrap m-8'>"Being Beautiful was never been so easy until now with ElevenHits"</h1>
        <p className='text-lg text-center font-medium'>ElevenHits is a beauty brand that offers the best quality makeup and skincare products at an affordable price. 
            We are 100% cruelty free and we have a large variety of products for you to choose from. </p>
        </div>
    </div>
    <div className='lg:flex justify-between m-20'>
        <div className='w-1/2 p-16'>
        <h1 className=' font-bold text-3xl text-center text-primary text-wrap m-8'>"Being Beautiful was never been so easy until now with ElevenHits"</h1>
        <p className='text-lg text-center font-medium'>ElevenHits is a beauty brand that offers the best quality makeup and skincare products at an affordable price. 
            We are 100% cruelty free and we have a large variety of products for you to choose from. </p>
        </div>
        <Image
        src="/Images/IMG_3.png" 
        alt="Description of image" 
        width={200} 
        height={50}
        className='rounded-xl mx-auto border-accent-foreground border-4' 
      />
    </div>
    
    
    </main>
  )
}
