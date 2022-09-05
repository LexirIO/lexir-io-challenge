import React from "react";
import Image from "next/image";
import homeVector from "@assets/navbar/home_vector.svg";
import arrowVector from "@assets/navbar/Vector 705 (Stroke).svg";

export const Navbar = (): JSX.Element => {
  return (
    <nav className="bg-white flex flex-row items-start   pt-[4rem] pl-[3.4rem]  w-[100%] gap-[1.4rem] ">
      <a
        className="flex flex-row gap-[1.4rem] items-center p-0 font-Lato text-[1.6rem] font-[400]  leading-[1.9rem] msm:text-[1.2rem]"
        href="/"
      >
        <div className="relative h-[2.2rem] w-[1.9rem]">
          <Image className="" src={homeVector} layout="fixed" alt=""></Image>
        </div>
        <span>Home</span>
      </a>
      <a
        className="flex flex-row gap-[1.4rem] items-center font-Lato text-[1.6rem] font-[400] leading-[1.9rem]  msm:text-[1.2rem] m2vsm:text-[1rem] "
        href="/"
      >
        <div className="relative h-[1.4rem] w-[0.8rem]">
          <Image className="" src={arrowVector} layout="fixed" alt=""></Image>
        </div>
        <span>Spirits</span>
      </a>
      <a
        className="flex flex-row gap-[1.4rem] items-center font-Lato text-[1.6rem] font-[400] leading-[1.9rem] msm:text-[1.2rem]   m2vsm:text-[1rem]  "
        href="/"
      >
        <div className="relative h-[1.4rem] w-[0.8rem]">
          <Image className="" src={arrowVector} layout="fixed" alt=""></Image>
        </div>
        <span>Kiss My</span>
      </a>
      <a
        className="flex flex-row gap-[1.4rem] items-center font-Lato text-[1.6rem] font-[700] leading-[1.9rem]  msm:text-[1.2rem]  m2vsm:text-[1rem]  "
        href="/"
      >
        <div className="relative h-[1.4rem] w-[0.8rem] ">
          <Image className="" src={arrowVector} layout="fixed" alt=""></Image>
        </div>
        <span>Kiss My Rhubarb</span>
      </a>
    </nav>
  );
};

export default Navbar;
