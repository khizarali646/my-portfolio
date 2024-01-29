import React from 'react'
import { Particle } from '../hero/Particle'
import  Image from "next/image"
import { TextEffect } from './TextEffect'

export const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center">
      <Particle/>
      <div className="w-[80%] grid-cols-1 mx-auto grid md:grid-cols-2 gap-[3rem] items-center h-full">
        <div>
            <h1 className="text-[35px] md:text-[50px] font-bold text-white">Hi I am <span className='text-yellow-400'>Khizar</span></h1>
            <TextEffect/>
            <p className='mt-[1rem] text-[#fff] text-[20px]'>
            I am a passionate web developer with extensive experience in creating responsive and dynamic web applications using the latest technologies. My specialization includes React JS, Nextjs, JavaScript, HTML, CSS, Tailwind CSS, and Material UI.
            </p>
        </div>
        <div className='w-[500px] hidden bg-[#fa9926]  relative md:flex items-center rounded-full h-[500px]'>
            <Image src="/images/u1.jpg" alt='Khizar' layout='fill' className='rounded-full object-cover'/>
        </div>
      </div>
    </div>
  )
}
