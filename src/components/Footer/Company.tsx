import { useIsDesktop } from '../context/DesktopWidthProvider';
import Link from 'next/link';
import cn from 'classnames';

export default function Company() {
  const { isDesktop } = useIsDesktop();

  return (
    <div className={cn("flex", {'flex-col': isDesktop,
      'border-b border-lightGray2 justify-between': !isDesktop})}
    >
      <h3 className="text-lightGray2 text-base leading-10 font-regular">
        COMPANY
      </h3>
      <div className={cn("flex", {'flex-col': isDesktop,
        'justify-between gap-16': !isDesktop})}
      >
        <Link href={'/'}>
          <a className="text-white text-base leading-10 font-regular
            transition-color duration-500 hover:text-lightGray2"
          >
            About
          </a>
        </Link>
        <Link href={'/'}>
          <a className="text-white text-base leading-10 font-regular
            transition-color duration-500 hover:text-lightGray2"
          >
            Contact
          </a>
        </Link>
        <Link href={'/'}>
          <a className="text-white text-base leading-10 font-regular
            transition-color duration-500 hover:text-lightGray2"
          >
            Legal
          </a>
        </Link>
      </div>
    </div>
  )
}
