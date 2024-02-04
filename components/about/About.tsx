import React from 'react';
import {ArrowDownTrayIcon} from "@heroicons/react/16/solid";
import Image from "next/image";

const About = () => {
    return (
        <div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem] ">
            <div className="grid grid-col-1 md:grid-cols-2  w-[80%] mx-auto gap-[3rem] items-center">
                <div>
                    <h1 className="text-[20px] font-bold uppercase text-gradient mb-[1rem]">About me</h1>
                    <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
                        Transforming <span className="text-yellow-400"> Visions</span>
                    </h2>
                    <div className="mb-[3rem] flex items-center md:space-x-10">
                        <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
                        <p className="text-[19px] text-slate-300 w-[80%]">Hi there! I am Khizar Ali, a creative and professional full-stack web developer with a bachelor degree in computer science. I have over 3+ years of experience in full-stack development. I believe in long-term relationships and hope to take your business to the next level by working with me.</p>
                    </div>
                    <button
                        className="px-4 hover:bg-yellow-4 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase rounded-sm my-gradient text-black flex items-center space-x-2 ">
                        <p className='text-white'>Download Cv</p>
                        <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-white"/>
                    </button>
           

                </div>
                <div>
                    <div className="w-[350px] h-[350px] md:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px]  relative">
                        <Image src="/images/about.jpg" alt="" layout="fill" objectFit="contain" className="relative z-[11]
                    md:w-[100%] md:h-[100%] object-contain"/>
                      <div className="sm:hidden md:block md:absolute md:w-[500px] md:h-[500px] md:z-[10] my-gradient md:top-[-2rem] md:right-[-2rem]">
                    </div>
                    </div>
                  
                </div>


            </div>
        </div>
    );
};

export default About;