import React from 'react'
import logo from '../assets/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import {BiUserCircle} from 'react-icons/bi'
import {BiBasket} from 'react-icons/bi'


function Header() {
  return (
     <header className='flex justify-between shadow-md p-9'>
      <div>
        <Link href="/">
        <Image
        src={logo}
        alt="logo"
      />
        </Link>
      </div>
      <div className='flex'>
        <ul className='flex justify-around ml-2'>
          <li className='ml-2 text-sm'>
            <Link href="/" >
              Products
            </Link>
          </li>
          <li className='ml-6 text-sm'>
            <Link href="/">
            Brands
            </Link>
          </li>
          <li className='ml-6 flex text-sm'>
            <BiUserCircle size={21} className='mr-2' />
            <Link href="/">
              Hello, Leonardo
            </Link>
          </li>
          <li className='ml-6 flex text-sm'>
            <BiBasket size={20} className='mr-2' />
            <Link href="/">
              Cart
            </Link>
          </li>
        </ul>
      </div>
     </header>
  )
}

export default Header