import Image from 'next/image';
import Link from 'next/link';
import homeIcon from '../images/home-icon.svg';
import arrow from '../images/arrow.svg';

export default function Destination() {
  return (
    <div className="max-w-7xl mx-auto flex items-center justify-start pt-10 px-8 gap-x-5">
      <Link href="/">
        <a className="flex justify-center gap-x-4">
          <Image src={homeIcon} alt="home" className="object-contain" />
          <span className="font-regular">Home</span>
        </a>
      </Link>

      <Image src={arrow} alt="arrow" className="object-contain" />

      <Link href="spirits">
        <a className="font-regular">Spirits</a>
      </Link>

      <Image src={arrow} alt="arrow" className="object-contain" />

      <Link href="kissMy">
        <a className="font-regular">Kiss My</a>
      </Link>

      <Image src={arrow} alt="arrow" className="object-contain" />

      <Link href="/">
        <a className="font-bold">Kiss My Rhubarb</a>
      </Link>
    </div>
  )
}
