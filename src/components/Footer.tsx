import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/images/logo-white.svg';

export default function Footer() {
  return (
    <footer className="bg-primary max-w-7xl mx-auto px-8 py-10 grid gap-4">
      <div>
        <Link href="/">
          <Image src={logo} alt="logo"/>
        </Link>
      </div>
    </footer>
  )
}
