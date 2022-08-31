import Image from "next/image";
import React from "react";
import images from "../../assets";
import { CardBoardBox, Location } from "../../constants/icons";

const BrandCard = () => {
  return (
    <div className='w-[30%] h-1/2 flex flex-col items-center pt-5 pb-10 shadow-lg shadow-[#F2F2F2] ring-1 ring-[#F2F2F2]'>
      {/* Brand-Logo */}
      <Image src={images.baldoriaLogo} alt='baldoria_logo' />

      {/* Brand-Name and Description */}
      <div className='mt-10 w-80 mx-auto flex flex-col justify-center items-center'>
        <h3 className='text-4xl font-bold font-source-serif mb-4'>
          Baldoria Vermouth
        </h3>
        <p className='text-sm font-lato leading-6'>
          Badoria rosso is a red vermouth that balances fresh, herby bitter
          notes against. Kiss My Rhubarb takes its origins from an old
          handwritten recipe from co-creators Niels’ and Wouters’ rebellious
          grandparents.
        </p>

        <button className='text-[#1C8C64] text-center inline-block mt-6'>
          Read More
        </button>
      </div>

      {/* Location of the brand */}
      <div className='mt-16 space-y-10 w-80'>
        <div className='flex gap-3'>
          <Location className='w-5 h-5' />
          <span>
            <p className='text-xs'>Location</p>
            <p className='text-sm font-semibold text-[#595959]'>
              London, United Kingdom
            </p>
          </span>
        </div>

        {/* Category of the product */}
        <div className='flex gap-3'>
          <CardBoardBox className='w-5 h-5' />
          <span>
            <p className='text-xs'>Product Categories</p>
            <span className='flex justify-center items-center gap-2 mt-3 text-[#595959] font-semibold'>
              <p className='text-xs py-1 px-5 bg-[#F9F9F9] rounded'>Gin</p>
              <p className='text-xs py-1 px-5 bg-[#F9F9F9] rounded'>Vodka</p>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
