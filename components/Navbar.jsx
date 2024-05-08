import React from 'react'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bars3Icon , DevicePhoneMobileIcon , ShoppingCartIcon} from '@heroicons/react/24/outline'

export default function Navbar() {
  return (
    <main className='sticky'>
    <div className='lg:flex p-5 justify-between hidden items-center'>
    <div className="font-extrabold text-5xl">
      ElevenHits
    </div>
    <div>
    <ul className='flex text-lg font-medium gap-12 px-7 py-2 rounded-full bg-primary text-accent'>
      <a href="/">Home</a>
      <a href="/Products">Products</a>
      <a href="https://github.com/Adityavijayvargiya01/ElevenHits">About</a>
      <a href="https://github.com/Adityavijayvargiya01/ElevenHits">Contact</a>
    </ul>
    </div>
    <Button className='bg-accent-foreground text-accent px-4 py-2 rounded-full font-medium'>Cart <ShoppingCartIcon className='h-6 w-6 m-1'/></Button>
    </div>
    <div className='lg:hidden p-8 flex justify-between'>
    <div className=" text-4xl font-extrabold">
      ElevenHits
    </div>
    <div>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className='bg-accent-foreground'><Bars3Icon className="h-7 w-7 text-accent" /></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-12 mr-4">
        <DropdownMenuLabel><DevicePhoneMobileIcon className='h-7 w-7'/></DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
          <a href="/">Home</a>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <a href="/Products">Products</a>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <a href="https://github.com/Adityavijayvargiya01/ElevenHits">About</a>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <a href="https://github.com/Adityavijayvargiya01/ElevenHits">Contact</a>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>

    </div>
    </div>
    </main>

  )
}

