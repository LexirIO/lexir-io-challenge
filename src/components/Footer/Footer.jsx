import React from "react";
import Image from "next/image";
import Link from "next/link";
import images from "../../assets";

const Footer = () => {
  return (
    <div className='py-8 bg-[#2D2D2D] font-lato'>
      <div className='w-[95%] mx-auto flex justify-between'>
        {/* Footer Logo */}
        <div>
          <Image src={images.footerLogo} alt='footer_logo' />
        </div>

        {/* Footer links */}
        <div className='flex justify-center gap-32'>
          {/* Community Section */}
          <div className='space-y-5'>
            <p className='text-[#8F8F8F] uppercase'>community</p>
            <span className='flex flex-col justify-center items-center gap-4 text-white'>
              <Link href='#'>Lexir for Brands</Link>
              <Link href='#'>Business Buyers</Link>
              <Link href='#'>Sales Affiliates</Link>
            </span>
          </div>

          {/* Platform Section */}
          <div className='space-y-5'>
            <p className='text-[#8F8F8F] uppercase'>Platform</p>
            <span className='flex flex-col justify-center items-center gap-4 text-white'>
              <Link href='#'>Resources</Link>
              <Link href='#'>Pricing</Link>
              <Link href='#'>Get Started</Link>
            </span>
          </div>

          {/* Company Section */}
          <div className='space-y-5'>
            <p className='text-[#8F8F8F] uppercase'>Company</p>
            <span className='flex flex-col justify-center items-center gap-4 text-white'>
              <Link href='#'>About</Link>
              <Link href='#'>Contact</Link>
              <Link href='#'>Legal</Link>
            </span>
          </div>

          {/* Lexir-Shop Section */}
          <div className='space-y-5'>
            <p className='text-[#8F8F8F] uppercase'>Lexir Shop</p>
            <span className='flex flex-col justify-center items-center gap-4 text-white'>
              <Link href='#'>Brands</Link>
              <Link href='#'>Spirits</Link>
              <Link href='#'>Wine</Link>
              <Link href='#'>Blog</Link>
            </span>
          </div>
        </div>

        {/* Socila Media Section */}
        <div className='flex justify-center gap-2'>
          <a href='#'>
            <Image src={images.socilIcon_1} alt='social_icon' />
          </a>
          <a href='#'>
            <Image src={images.facebook} alt='social_icon' />
          </a>
          <a href='#'>
            <Image src={images.instagram} alt='social_icon' />
          </a>
          <a href='#'>
            <Image src={images.linkedin} alt='social_icon' />
          </a>
        </div>
      </div>

      {/* Copyright and privacy policy */}
      <div className='w-[95%] mx-auto text-white flex justify-between items-center border-t pt-6 mt-10 border-[#8F8F8F]'>
        <p>&copy; 2022 Lexir Inc.</p>
        <div>
          <span className='space-x-10'>
            <Link href='#'>Privacy</Link>
            <Link href='#'>Terms of service</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
