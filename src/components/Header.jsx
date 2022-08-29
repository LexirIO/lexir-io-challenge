import React from 'react'
import logo from '../assets/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import {BiUserCircle} from 'react-icons/bi'
import {BsFillBasket3Fill} from 'react-icons/bs'


function Header() {
  return (
     <header className='flex justify-between shadow-md p-9'>
      <div>
        <a href="/">
        <Image
        src={logo}
        alt="logo"
      />
        </a>
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
            <BiUserCircle size={18} className='mr-2' />
            <Link href="/">
              Hello, Leonardo
            </Link>
          </li>
          <li className='ml-6 flex text-sm'>
            <BsFillBasket3Fill size={18} className='mr-2' />
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