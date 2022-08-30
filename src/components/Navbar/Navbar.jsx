import React from "react";
import Link from "next/link";
import images from "../../assets";
import Image from "next/image";
import { ShoppingBag, User } from "../../constants/icons";

const Navbar = () => {
  return (
    <nav className='shadow-md shadow-[#F2F2F2]'>
      <div className='w-[95%] mx-auto flex justify-between items-center h-[70px] font-lato font-semibold text-primary'>
        {/* Navbar Logo */}

        <Link href='/'>
          <Image src={images.navLogo} alt='lexir_logo' />
        </Link>

        {/* Navbar Links */}
        <ul className='uppercase flex justify-center items-center gap-8 text-xs'>
          <li>
            <Link href='#'>products</Link>
          </li>
          <li>
            <Link href='#'>brands</Link>
          </li>
          <li>
            <button className='uppercase flex justify-center items-center gap-1'>
              <User className='w-5 h-5' /> hello, leandro
            </button>
          </li>
          <li className='px-2'>
            <button className='flex justify-center items-center uppercase gap-2'>
              <span className='relative'>
                <span className='w-3 h-3 flex justify-center items-center rounded-full bg-[#1C8C64] absolute text-[9px] text-white font-bold top-0 -right-1 ring-2 ring-white'>
                  3
                </span>
                <ShoppingBag className='w-5 h-5' />
              </span>
              cart
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
