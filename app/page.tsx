"use client"
import { Hero } from '@/components/hero/Hero'
import { MobileNavbar } from '@/components/navbar/MobileNavbar'
import { Navbar } from '@/components/navbar/Navbar'
import { useState } from 'react'
import About from "@/components/about/About";
import Services from "@/components/services/Services";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Testimonial from "@/components/testimonial/Testimonial";
import Footer from "@/components/footer/Footer";

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
        <Skills/>
        <Projects/>
        <Testimonial/>
        <Footer/>
      </div>

    </div>
  )
}
