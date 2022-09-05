import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/images/logo.svg';
import signInIcon from '../assets/images/signIn-icon.svg';
import chartIcon from '../assets/images/chart-icon.svg';
import Menu from './Menu';
import cn from 'classnames';

type Props = {
  isDesktop: boolean;
  isChartFull: boolean;
}

export default function NavBar({isDesktop, isChartFull}: Props) {
  return (
    <nav className="sticky max-w-7xl mx-auto flex justify-between py-10 px-8 z-1 shadow-navbarShadow">
      <Link href="/">
        <a className="flex items-center transition-transform duration-500 hover:scale-105">
          <Image src={logo} alt="logo" />
        </a>
      </Link>

      {isDesktop && (
        <div className="flex items-center gap-x-10">
          <Link href="products">
            <a className="font-regular text-sm leading-5
              transition-transform duration-500 hover:scale-105"
            >
              PRODUCTS
            </a>
          </Link>
          <Link href="brands">
            <a className="font-regular text-sm leading-5
              transition-transform duration-500 hover:scale-105"
            >
              BRANDS
            </a>
          </Link>

          <Link href="signIn">
            <a className="flex items-center justify-center gap-x-2.5
              transition-transform duration-500 hover:scale-105"
            >
              <Image src={signInIcon} alt="sign in" className="object-contain" />
              <span className="font-regular text-sm leading-5">SIGN IN</span>
            </a>
          </Link>

          <Link href="chart">
            <a className="flex items-center justify-center gap-x-2.5
              transition-transform duration-500 hover:scale-105"
            >
              <Image src={chartIcon} alt="sign in" className={cn("object-contain rounded-xl transition-colors duration-500", {'bg-red-600': isChartFull})} />
              <span className="font-regular text-sm leading-5" >CHART</span>
            </a>
          </Link>
        </div>
      )}

      {!isDesktop && (
        <Menu />
      )}
    </nav>
  )
}
