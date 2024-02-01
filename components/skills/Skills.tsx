import React from 'react';
import SkillItems from "@/components/skills/SkillItems";
import SkillsLanguages from "@/components/skills/SkillsLanguages";

const Skills = () => {
    return (
        <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
            <h1 className="heading">
                Experience & <span className="text-yellow-400">Skills</span>
            </h1>
            <div className="w-[80%] mx-auto md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
                <div>
                    <SkillItems title="Wordpress Designer" year="Jan 2020 - Dec 2020 " description="As part of my professional journey at Tech Re-shape, I honed my skills in WordPress development. I delved into the intricacies of this powerful content management system, gaining valuable hands-on experience with renowned WordPress page builders like WP Bakery and Elementor. This experience not only broadened my proficiency in web development but also equipped me with the ability to create seamless and visually striking websites. At Tech Re-shape was instrumental in fostering my expertise in WordPress."/>
                    <SkillItems title="Web Designer" year="May 2021 - Feb 2022" description="As a web designer during this period, I primarily worked with
WordPress, utilizing various tools and plugins to enhance website
design. I specialized in working with popular WordPress plugins like
Revolution Slider and Elementor to create visually appealing and
dynamic websites."/>
                    <SkillsLanguages skills1="html" skills2="css" skills3="Wordpress" level1="w-[80%]" level2="w-[78%]"
                        level3="w-[68%]" />
                </div>
                <div>
                    <SkillItems title="Mern Stack Develper" year="Aug 2022 - Aug 2023" description="During this period, I worked as a MERN Stack Developer, specializing in ReactJS
and Next.js on the front-end. I utilized Redux for state management in ReactJS
and implemented server-side routing in Next.js for improved performance.
On the backend, I worked with Node.js, Nest.js, and Express.js, using MongoDB
as the database. I implemented JWT token authentication for secure user
authorization and developed RESTful APIs for efficient client-server
communication"/>
                    <SkillItems title="Mern Stack Developer" year="2023 - till Now" description="As a ReactJS developer, I am a dedicated web developer and full-time freelancer. My expertise lies in designing and implementing dynamic web applications. Leveraging the power of ReactJS, I craft responsive and interactive user interfaces that enhance the overall user experience." />
                    <SkillsLanguages skills1="React js" skills2="Node js" skills3="mongoDb" level1="w-[68%]" level2="w-[60%]"
                        level3="w-[57%]" />
                </div>
            </div>
        </div>
    );
};

export default Skills;