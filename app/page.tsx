"use client"
import { Hero } from '@/components/hero/Hero'
import { MobileNavbar } from '@/components/navbar/MobileNavbar'
import { Navbar } from '@/components/navbar/Navbar'
import { useState } from 'react'
import About from "@/components/about/About";
import Services from "@/components/services/Services";

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
      <div className="relative z-[30]">
        <About/>
        <Services/>
      </div>

    </div>
  )
}
