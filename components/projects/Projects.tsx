import React from 'react';
import Image from "next/image";

const Projects = () => {
    return (
        <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
            <h1 className="heading">
                Pro <span className="text-yellow-400">Ject</span>
            </h1>
            <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
                <div>
                    <div className="transfrom cursor-pointer hover:-tracking-y-6 transition-all duration-200 relative w-100%] h-[200px] md:h-[300px]">
                        <Image src="/images/p6.png" alt="portfolio" layout="fill" className="object-contain"/>
                    </div>
                </div>
                <div>
                    <div
                        className="transfrom cursor-pointer hover:-tracking-y-6 transition-all duration-200 relative w-100%] h-[200px] md:h-[300px]">
                        <Image src="/images/p7.png" alt="portfolio" layout="fill" className="object-contain"/>
                    </div>
                </div>
                <div>
                    <div
                        className="transfrom cursor-pointer hover:-tracking-y-6 transition-all duration-200 relative w-100%] h-[200px] md:h-[300px]">
                        <Image src="/images/p8.png" alt="portfolio" layout="fill" className="object-contain"/>
                    </div>
                </div>
                <div>
                    <div
                        className="transfrom cursor-pointer hover:-tracking-y-6 transition-all duration-200 relative w-100%] h-[200px] md:h-[300px]">
                        <Image src="/images/p3.jpeg" alt="portfolio" layout="fill" className="object-contain"/>
                    </div>
                </div>
                <div>
                    <div
                        className="transfrom cursor-pointer hover:-tracking-y-6 transition-all duration-200 relative w-100%] h-[200px] md:h-[300px]">
                        <Image src="/images/p4.jpeg" alt="portfolio" layout="fill" className="object-contain"/>
                    </div>
                </div>
                <div>
                    <div
                        className="transfrom cursor-pointer hover:-tracking-y-6 transition-all duration-200 relative w-100%] h-[200px] md:h-[300px]">
                        <Image src="/images/p9.jpeg" alt="portfolio" layout="fill" className="object-contain"/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;