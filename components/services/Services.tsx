import React from 'react';
import {CodeBracketIcon, RocketLaunchIcon} from "@heroicons/react/16/solid";

const Services = () => {
    return (
        <div className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]">
            <p className="heading">
                My <span className="text-yellow-400">Services</span>
            </p>
            <div className="sm:grid sm:grid-cols-1 md:grid md:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
                <div>
                    <div
                        className="bg-red-700 hover:scale-110 transfrom transition-all  duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem] mb-10" >
                        <CodeBracketIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]"/>
                        <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">FrontEnd</h1>
                        <p className="text-[15px] text-[#d3d2d2] font-normal">
                            Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry
                        </p>
                    </div>
                </div>
                <div>
                    <div
                        className="bg-orange-700 hover:scale-110 transfrom transition-all  duration-300  uppercase font-semibold text-center p-[2rem] mb-10">
                        <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]"/>
                        <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">Backend</h1>
                        <p className="text-[15px] text-[#d3d2d2] font-normal">
                            Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry
                        </p>
                    </div>
                </div>
                <div>
                    <div
                        className="bg-blue-700 hover:scale-110 transfrom transition-all  duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem] mb-10">
                        <CodeBracketIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]"/>
                        <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">Full Stack</h1>
                        <p className="text-[15px] text-[#d3d2d2] font-normal">
                            Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry
                        </p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Services;