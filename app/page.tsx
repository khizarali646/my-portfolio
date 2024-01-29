"use client"
import { Hero } from '@/components/hero/Hero'
import { MobileNavbar } from '@/components/navbar/MobileNavbar'
import { Navbar } from '@/components/navbar/Navbar'
import { useState } from 'react'

export default function Home() {
  const [nav, setNav] = useState(false)
  const openNav = ()=> setNav(true)
  const closenav =()=> setNav(false)
  return (
    <div className='overflow-x-hidden'>
      <MobileNavbar  nav={nav} closeNav={closenav}/>
    <Navbar openNav={openNav}/>
    <div>
      <Hero/>
    </div>
    </div>
  )
}
