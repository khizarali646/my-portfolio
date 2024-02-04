import React from 'react';
import { EnvelopeIcon, MapIcon, PhoneArrowDownLeftIcon, PhoneIcon } from "@heroicons/react/16/solid";

const Footer = () => {
    return (
        <div className="pt-[8rem] pb-[4rem] bg-[#02050a]">
            <div
                className="grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-3 w-[80%] mx-auto gap-[3rem]">
                <div className="flex items-center space-x-6">
                    <div
                        className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full my-gradient">
                        <MapIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-white" />
                    </div>
                    <div>
                        <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">Address</h1>
                        <p className="text-[17px] w-[90%] text-white opacity-60">
                            Abbottabad pakistan
                        </p>
                    </div>
                </div>
                <div className="flex items-center space-x-6">
                    <div
                        className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full my-gradient">
                        <PhoneIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-white" />
                    </div>
                    <div>
                        <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">Phone</h1>
                        <p className="text-[17px] w-[90%] text-white opacity-60">
                            +92304 5429966                        </p>
                    </div>
                </div>
                <div className="flex items-center space-x-6">
                    <div
                        className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full my-gradient">
                        <EnvelopeIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-white" />
                    </div>
                    <div>
                        <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">Email Us</h1>
                        <p className="text-[17px] w-[90%] text-white opacity-60">
Khizarali646@gmail.com                        </p>
                    </div>
                </div>

            </div>

            <div className="w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between">
                <div className="mb-[1rem]  text-[18px]  md:mb-0 text-white opacity-20">
                    Web Architect
                </div>
                <div className="flex items-center space-x-10">
                    <p className="text-[18px] text-white opacity-20">Term & Conditions</p>
                    <p className="text-[18px] text-white opacity-20">Privacy Policy</p>

                    <p className="text-[18px] text-white opacity-20">Cookies</p>

                </div>

            </div>
        </div>
    );
};

export default Footer;