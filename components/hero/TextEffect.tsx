import { TypeAnimation } from 'react-type-animation';

export const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Programmer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Designer',
        1000,
        'Full Stack Developer',
        1000,
      ]}
      speed={50}
className="text-[1.8rem] md:text-[3rem] text-[#55e6a5] font-bold"
      repeat={Infinity}
    />
  );
};