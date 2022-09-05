import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';
import signInIcon from '../assets/images/signIn-icon.svg';
import chartIcon from '../assets/images/chart-icon.svg';

// type Props = {
//   isChartFull: boolean;
// };

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <button 
        className="space-y-2"
        onClick={toggleMenu}
      >
        <span className={cn("block w-8 h-0.5 bg-primary transform transition duration-500 ease-in-out",
          {'rotate-45': isMenuOpen,'translate-y-2.5': isMenuOpen })}
        />
        <span className={cn("block w-5 h-0.5 bg-primary transform transition duration-500 ease-in-out",
          {'opacity-0': isMenuOpen })}
        />
        <span className={cn("block w-8 h-0.5 bg-primary transform transition duration-500 ease-in-out",
          {'-rotate-45': isMenuOpen,'-translate-y-2.5': isMenuOpen })}
        />
      </button>

      {isMenuOpen && (
        <div className="absolute top-28 right-1 flex flex-col items-center gap-y-10 z-50 bg-primary p-20">
          <Link href="products">
            <a className="font-regular text-white text-sm leading-5">PRODUCTS</a>
          </Link>
          <Link href="brands">
            <a className="font-regular text-white text-sm leading-5">BRANDS</a>
          </Link>

          <Link href="signIn">
            <a className="flex items-center justify-center gap-x-2.5">
              <Image src={signInIcon} alt="sign in" className="object-contain bg-white rounded-xl" />
              <span className="font-regular text-white text-sm leading-5">SIGN IN</span>
            </a>
          </Link>

          <Link href="chart">
            <a className="flex items-center justify-center gap-x-2.5">
              <Image src={chartIcon} alt="sign in" className={cn("object-contain bg-white rounded")} />
              <span className="font-regular text-white text-sm leading-5">CHART</span>
            </a>
          </Link>
        </div>
      )}
    </>
  )
}
