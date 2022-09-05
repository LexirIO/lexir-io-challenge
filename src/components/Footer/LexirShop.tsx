import { useIsDesktop } from '../context/DesktopWidthProvider';
import Link from 'next/link';
import cn from 'classnames';

export default function LexirShop() {
  const { isDesktop } = useIsDesktop();

  return (
    <div className={cn("flex", {'flex-col': isDesktop,
      'justify-between': !isDesktop})}
    >
      <h3 className="text-lightGray2 text-base leading-10 font-regular">
        LEXIR SHOP
      </h3>

      <div className={cn("flex", {'flex-col': isDesktop,
        'justify-between gap-16': !isDesktop})}
      >
        <Link href={'/'}>
          <a className="text-white text-base leading-10 font-regular
            transition-color duration-500 hover:text-lightGray2"
          >
            Brands 
          </a>
        </Link>
        <Link href={'/'}>
          <a className="text-white text-base leading-10 font-regular
            transition-color duration-500 hover:text-lightGray2"
          >
            Spirits
          </a>
        </Link>
        <Link href={'/'}>
          <a className="text-white text-base leading-10 font-regular
            transition-color duration-500 hover:text-lightGray2"
          >
            Wine
          </a>
        </Link>
        <Link href={'/'}>
          <a className="text-white text-base leading-10 font-regular
            transition-color duration-500 hover:text-lightGray2"
          >
            Block
          </a>
        </Link>
      </div>
    </div>
  )
}
