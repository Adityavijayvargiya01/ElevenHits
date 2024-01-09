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
import { Bars3Icon , DevicePhoneMobileIcon} from '@heroicons/react/24/outline'

export default function Navbar() {
  return (
    <main>
    <div className='lg:flex p-10 justify-between hidden items-center'>
    <div className="font-extrabold text-4xl">
      ElevenHits
    </div>
    <div>
    <ul className='flex text-lg font-medium gap-10 px-10 py-2 rounded-2xl bg-accent-foreground text-accent'>
      <a href="">Home</a>
      <a href="">Products</a>
      <a href="">About</a>
      <a href="">Contact</a>
    </ul>
    </div>
    <Button className='text-lg rounded-xl'>Shop Now</Button> 
    </div>
    <div className='lg:hidden p-8 flex justify-between'>
    <div className=" text-3xl font-extrabold">
      ElevenHits
    </div>
    <div>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline"><Bars3Icon className="h-7 w-7" /></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-12 mr-4">
        <DropdownMenuLabel><DevicePhoneMobileIcon className='h-7 w-7'/></DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
          <a href="/">Home</a>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <a href="/">Products</a>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <a href="/">About</a>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <a href="/">Contact</a>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>

    </div>
    </div>
    </main>

  )
}

