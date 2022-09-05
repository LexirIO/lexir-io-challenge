import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/images/logo-white.svg';
import medium from '../assets/images/medium.svg';
import facebook from '../assets/images/facebook.svg';
import insta from '../assets/images/instagram.svg';
import linkedIn from '../assets/images/linkedin.svg';

export default function Footer() {
  return (
    <footer className="bg-primary max-w-7xl mx-auto px-8 py-10 grid gap-4">
      <div className="flex justify-between">
        <Link href="/">
          <a className="transition-transform duration-500 hover:scale-105">
            <Image src={logo} alt="logo"/>
          </a>
        </Link>
        <div className="flex gap-3">
          <Link href="https://medium.com/" >
            <a className="transition-transform duration-500 hover:scale-105">
              <Image src={medium} alt="medium link"/>
            </a>
          </Link>
          <Link href="https://www.facebook.com/">
            <a className="transition-transform duration-500 hover:scale-105">
              <Image src={facebook} alt="facebook link"/>
            </a>
          </Link>
          <Link href="https://www.instagram.com/">
            <a className="transition-transform duration-500 hover:scale-105">
              <Image src={insta} alt="instagram link"/>
            </a>
          </Link>
          <Link href="https://linkedin.com/">
            <a className="transition-transform duration-500 hover:scale-105">
              <Image src={linkedIn} alt="linkedIn link"/>
            </a>
          </Link>
        </div>
      </div>
    </footer>
  )
}
