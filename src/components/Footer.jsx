import React from 'react'
import logo from '../assets/images/logo-footer.png'
import Image from 'next/image'
import Link from 'next/link'
import {FaFacebookSquare} from 'react-icons/fa'
import {BsMedium} from 'react-icons/bs'
import {AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'

function Footer() {
  return (
    <footer className="bg-primary w-full p-14 relative bottom-0 ">
      <div className='flex justify-between border-b pb-2'>
       <div className='flex w-16 h-4'>
       <Image
        src={logo}
        alt="logo"
      />
       </div>
       <div className='flex justify-between'>
          <div className="flex-column mr-10 ml-10">
              <h3 className="text-secondary pb-5">
                COMMUNITY
              </h3>
              <ul className='flex-column'>
                <li className="text-white text-sm pb-3">
                  <Link href="/">
                  Lexir for Brands
                  </Link>
                </li>
                <li className="text-white text-sm pb-3">
                  <Link href="/">
                  Business Buyers
                  </Link>
                </li>
                <li className="text-white text-sm pb-3">
                  <Link href="/">
                  Sales Affiliates
                  </Link>
                </li>
              </ul>
          </div>
          <div className="flex-column mr-10 ml-10">
              <h3 className="text-secondary pb-5">
              PLATFORM
              </h3>
              <ul className='flex-column'>
                <li className="text-white text-sm pb-3">
                  <Link href="/">
                  Resources
                  </Link>
                </li>
                <li className="text-white text-sm pb-3">
                  <Link href="/">
                  Pricing
                  </Link>
                </li>
                <li className="text-white text-sm pb-3">
                  <Link href="/">
                  Get Started
                  </Link>
                </li>
              </ul>
          </div>
          <div className="flex-column mr-10 ml-10">
              <h3 className="text-secondary pb-5">
                COMPANY
              </h3>
              <ul className='flex-column'>
                <li className="text-white text-sm pb-3">
                  <Link href="/">
                  About
                  </Link>
                </li>
                <li className="text-white text-sm pb-3">
                  <Link href="/">
                 Contact
                  </Link>
                </li>
                <li className="text-white text-sm pb-3">
                  <Link href="/">
                 Legal
                  </Link>
                </li>
              </ul>
          </div>
          <div className="flex-column mr-10 ml-10">
              <h3 className="text-secondary pb-5">
               LEXİER SHOP
              </h3>
              <ul className='flex-column'>
                <li className="text-white text-sm pb-3">
                  <Link href="/">
                Brands 
                  </Link>
                </li>
                <li className="text-white text-sm pb-3">
                  <Link href="/">
                  Spirits
                  </Link>
                </li>
                <li className="text-white text-sm pb-3">
                  <Link href="/">
                    Wine
                  </Link>
                </li>
                <li className="text-white text-sm pb-3">
                  <Link href="/">
                   Blog
                  </Link>
                </li>
              </ul>
          </div>
       </div>
       <div className='flex flex-row ml-2'>
             <BsMedium size={28} className='text-white ml-4'/>
            <FaFacebookSquare size={28} className='text-white ml-4'/>
            <AiFillInstagram size={28} className='text-white ml-4'/>
            <AiFillLinkedin size={28} className='text-white ml-4'/>
        </div>
      </div>
      <div className='flex justify-between mt-3'>
        <div className='text-white text-sm'>
        © 2022 Lexir Inc.
        </div>
        <div className='justify-between mt-2 flex'>
          <div className="text-white relative right-6 text-sm">
              Privacy
          </div>
          <div className="text-white mr-3 text-sm">
            Terms of service
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer