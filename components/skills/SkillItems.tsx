import React from 'react';
interface  Props {
    title: string;
    year: string;
    description: string;
}
const SkillItems = ({ title, year , description}: Props) => {
    return (
        <div className="mt-[2rem] md:mt-0 mb-[4rem] md:mb-[8rem]">
                     <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded p-1">
  <span className="flex w-full bg-gray-900 px-[2rem] text-white py-[0.9rem] font-bold text-[18px]">
  {year}
     </span>
</button>
            <h1 className="mt-[2rem]  uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white">
                {title}
            </h1>
            <p className="text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80">
            {description}
            </p>
            
        </div>
    );
};

export default SkillItems;