import React from 'react';
import Image from "next/image";
import HomeIcon from '@assets/house.svg';
import ArrowIcon from "@assets/arrow-right.svg"

const Header = () => {
  return (
    <section className='flex justify-between w-[50%] xl:w-[40%]'>
    <Image src={HomeIcon} alt="dotted icon" className="cursor-pointer"/> 
    <p className='text-[#2D2D2D]'>Home</p>
    <Image src={ArrowIcon} alt="dotted icon" className="cursor-pointer"/> 
    <p className='text-[#2D2D2D]'>Spirits</p>  
    <Image src={ArrowIcon} alt="dotted icon" className="cursor-pointer"/> 
    <p className='text-[#2D2D2D]'>Kiss My</p>  
    <Image src={ArrowIcon} alt="dotted icon" className="cursor-pointer"/> 
    <p className='text-[#2D2D2D] font-bold'>Kiss My Rhubarb</p>  
    </section>
  )
}

export default Header