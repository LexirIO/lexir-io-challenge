import React from 'react';
import Image from 'next/image';
import Logo from '../assets/logo.svg';
import Avatar from '../assets/carbon_user-avatar.svg';
import Basket from '@assets/Group298.svg';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <div className="flex justify-between w-full px-8 items-center h-24 text-sm shadow-md">
        <Image src={Logo} />
        <nav className="flex justify-between items-center">
          <Link href={'/'}>
            <a className='mr-10'>PRODUCTS</a>
          </Link>
          <Link href={'/'}>
            <a className='mr-10'>BRANDS</a>
          </Link>
          <div className="flex items-center">
            <div className="mr-2 flex items-center">
              <Image src={Avatar} />
            </div>
            <Link href={'/'}>
              <a className='mr-10'>HELLO, LEANDRO</a>
            </Link>
          </div>
          <div className="flex items-center ml-5">
            <Image src={Basket} />
            <Link href={'/'}>
              <a >CART</a>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
