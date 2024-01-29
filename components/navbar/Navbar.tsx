"use client"
import { Bars3Icon } from '@heroicons/react/16/solid'
import React from 'react'


interface Props {
  openNav : ()=> void
}
export const Navbar = ({openNav}: Props) => {
const check = ()=>{
  return console.log("hello")
}
  return (
    <>
    <div className='w-[100%] sticky z-[1000] h-[12vh] bg-[#141c27] shadow-md'>
        <div className='flex w-[80%] justify-between mx-auto items-center h-[100%]'>
            <h1 className='text-white font-bold font-primary'>Web <span>Architect</span></h1>
            <div className='nav-links'>Home</div>
            <div className='nav-links' >Services</div>
            <div className='nav-links'>About</div>
            <div className='nav-links'>Project</div>
            <div className='nav-links'>Blog</div>
            <div className='nav-links'>Contact</div>
            <div  className='w-[2rem] h-[2rem] cursor-pointer text-yellow-500 md:hidden' >
              <Bars3Icon onClick={openNav}  />
            </div>
        </div>
    </div>
    </>

  )
}
