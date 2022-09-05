import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/images/logo-white.svg';
import medium from '../../assets/images/medium.svg';
import facebook from '../../assets/images/facebook.svg';
import insta from '../../assets/images/instagram.svg';
import linkedIn from '../../assets/images/linkedin.svg';
import Community from './Community';
import Platform from './Platform';
import Company from './Company';
import LexirShop from './LexirShop';
import { useIsDesktop } from '@components/context/DesktopWidthProvider';

export default function Footer() {
  const { isDesktop } = useIsDesktop();

  return (
    <footer className="bg-primary max-w-7xl mx-auto px-8 pt-10 pb-5 grid gap-4">
      <nav className="flex justify-between items-baseline">
        <Link href="/">
          <a className="transition-transform duration-500 hover:scale-105 flex">
            <Image src={logo} alt="logo"/>
          </a>
        </Link>

        {isDesktop && (
          <Community />
        )}
        {isDesktop && (
          <Platform />
        )}
        {isDesktop && (
          <Company />
        )}
        {isDesktop && (
          <LexirShop />
        )}

        <div className="flex gap-3">
          <Link href="https://medium.com/" >
            <a className="transition-transform duration-500 hover:scale-110 flex">
              <Image src={medium} alt="medium link"/>
            </a>
          </Link>
          <Link href="https://www.facebook.com/">
            <a className="transition-transform duration-500 hover:scale-110 flex">
              <Image src={facebook} alt="facebook link"/>
            </a>
          </Link>
          <Link href="https://www.instagram.com/">
            <a className="transition-transform duration-500 hover:scale-110 flex">
              <Image src={insta} alt="instagram link"/>
            </a>
          </Link>
          <Link href="https://linkedin.com/">
            <a className="transition-transform duration-500 hover:scale-110 flex">
              <Image src={linkedIn} alt="linkedIn link"/>
            </a>
          </Link>
        </div>
      </nav>
      
      {!isDesktop && (
        <div>
          <Community />
          <Platform />
          <Company />
          <LexirShop />
        </div>
      )}

      <div className="flex items-center justify-between border-t border-lightGray2">
        <p className="text-lightGray2 text-base leading-10 font-regular">© 2022 Lexir Inc.</p>
        <div className="flex gap-16">
          <Link href={'/'}>
            <a className="text-white text-base leading-10 font-regular
              transition-color duration-500 hover:text-lightGray2"
            >
              Privacy
            </a>
          </Link>
          <Link href={'/'}>
            <a className="text-white text-base leading-10 font-regular
              transition-color duration-500 hover:text-lightGray2"
            >
              Terms of service
            </a>
          </Link>
        </div>
      </div>
    </footer>
  )
}
