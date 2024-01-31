import React from 'react';
import {ArrowDownTrayIcon} from "@heroicons/react/16/solid";
import Image from "next/image";

const About = () => {
    return (
        <div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem] ">
            <div className="grid grid-col-1 md:grid-cols-2  w-[80%] mx-auto gap-[3rem] items-center">
                <div>
                    <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] mb-[1rem]">About me</h1>
                    <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
                        Transforming <span className="text-yellow-400"> Visions</span>
                    </h2>
                    <div className="mb-[3rem] flex items-center md:space-x-10">
                        <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
                        <p className="text-[19px] text-slate-300 w-[80%]">Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                            a type specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                    <button
                        className="px-4 hover:bg-yellow-4 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#fa9926] text-black flex items-center space-x-2 ">
                        <p>Download Cv</p>
                        <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black"/>
                    </button>
                </div>
                <div>
                    <div className="md:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] relative">
                        <Image src="/images/about.jpg" alt="" layout="fill" objectFit="contain" className="relative z-[11]
                    w-[100%] h-[100%] object-contain"/>
                    </div>
                    <div className="sm:hidden md:block md:absolute md:w-[500px] md:h-[500px] md:z-[10] md:bg-[#55a6a5] md:top-[5rem] md:right-[8rem]">
                    </div>
                </div>


            </div>
        </div>
    );
};

export default About;