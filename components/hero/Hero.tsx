import React from 'react'
import { Particle } from '../hero/Particle'
import  Image from "next/image"
import { TextEffect } from './TextEffect'
import {ArrowDownTrayIcon, PlayCircleIcon} from "@heroicons/react/16/solid";

export const Hero = () => {
  return (
    <div className="pt-[7rem] h-[88vh] bg-[url('/images/banner.jpg')]  bg-cover bg-center">
      <Particle/>
      <div className="w-[80%] grid-cols-1 mx-auto grid md:grid-cols-2 gap-[3rem] items-center h-full">
        <div>
            <h1 className="text-[35px] md:text-[50px] font-bold text-white">Hi I am <span className='text-yellow-400'>Khizar</span></h1>
            <TextEffect/>
            <p className='mt-[1rem] text-[#fff] text-[18px]'>
            I am a passionate web developer with extensive experience in creating responsive and dynamic web applications using the latest technologies. My specialization includes React JS, Nextjs, JavaScript, HTML, CSS, Tailwind CSS, and Material UI.
            </p>
            <div className="mt-[2rem] flex-col md:space-x-6 sm:space-y-2 sm:flex sm:flex-row sm:space-x-0 sm:gap-6 ">
                <button
                    className="px-4 hover:bg-yellow-4 rounded-sm transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase my-gradient text-black flex items-center space-x-2 ">
                    <p className='text-white '>Download Cv</p>
                    <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-white"/>
                </button>
                {/* <button
                    className="flex items-center space-x-2 sm:space-x-2 ml-0 mt-[1rem]">
                    <PlayCircleIcon className="w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-400 text-yellow-400"/>
                    <p className="text-[20px] font-semibold text-white">Watch The Video</p>
                </button> */}


            </div>
        </div>
          <div className='my-gradient  w-[500px] hidden bg-[linear-gradient(225deg, #ff3cac 0%, #784ba0 50%, #2b86c5 100%)]  relative md:flex items-center rounded-full h-[500px]'>
              <Image src="/images/khizar-bg.png" alt='Khizar' layout='fill' className='rounded-full object-cover'/>
          </div>
      </div>
    </div>
  )
}
