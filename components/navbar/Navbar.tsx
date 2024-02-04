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
    <div className='w-[100%] fixed z-[1000] h-[12vh] bg-[#141c27] shadow-md'>
        <div className='flex w-[80%]  mx-auto items-center h-[100%]'>
          <div>
          <h1 className='text-white font-bold font-[22px]'>Web <span className='text-yellow-400'>Architect</span></h1>
          </div>
            <div className='flex justify-center w-[85%] gap-[3rem]'>
            <div className='nav-links'>Home</div>
            <div className='nav-links' >About</div>
            <div className='nav-links'>Services</div>
            <div className='nav-links'>Skills</div>
            <div className='nav-links'>Projects</div>
            <div className='nav-links'>Contact</div>
            </div>
            
            <div  className='w-[2rem] h-[2rem] cursor-pointer text-yellow-500 md:hidden' >
              <Bars3Icon onClick={openNav}  />
            </div>
        </div>
    </div>
    </>

  )
}
