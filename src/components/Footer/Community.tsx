import { useIsDesktop } from '../context/DesktopWidthProvider';
import Link from 'next/link';
import cn from 'classnames';

export default function Community() {
  const { isDesktop } = useIsDesktop();

  return (
    <div className={cn("flex", {'flex-col': isDesktop,
      'border-b border-lightGray2 justify-between': !isDesktop})}
    >
      <h3 className="text-lightGray2 text-base leading-10 font-regular">
        COMMUNITY
      </h3>
      <div className={cn("flex", {'flex-col': isDesktop,
        'justify-between gap-6': !isDesktop})}
      >
        <Link href={'/'}>
          <a className="text-white text-base leading-10 font-regular
            transition-color duration-500 hover:text-lightGray2"
          >
            Lexir for Brands 
          </a>
        </Link>
        <Link href={'/'}>
          <a className="text-white text-base leading-10 font-regular
            transition-color duration-500 hover:text-lightGray2"
          >
            Business Buyers
          </a>
        </Link>
        <Link href={'/'}>
          <a className="text-white text-base leading-10 font-regular
            transition-color duration-500 hover:text-lightGray2"
          >
            Sales Affiliates
          </a>
        </Link>
      </div>
    </div>
  )
}
