import React from 'react';
import Link from 'next/link';
import FooterContent from '@components/Footer/FooterContent';

const Footer = () => {
  return (
    <>
      <FooterContent />
      <div className="items-center bg-slate-900 text-white pt-2 pb-5 px-9">
        <div className='bg-gray-700 w-full h-0.5 mb-2'></div>
        <div className='flex justify-between'>
          <span className="font-light">© 2022 Lexir Inc.</span>
          <nav className="font-normal">
            <Link href={'/'}>
              <a className="mr-16">Privacy</a>
            </Link>
            <Link href={'/'}>
              <a>Terms of service</a>
            </Link>
          </nav>
        </div>

      </div>
    </>

  );
};

export default Footer;
