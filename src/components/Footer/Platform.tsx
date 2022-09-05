import Link from 'next/link';

export default function Platform() {
  return (
    <div className="flex flex-col ">
    <h3 className="text-lightGray2 text-base leading-10 font-regular">
      PLATFORM
    </h3>
    <Link href={'/'}>
      <a className="text-white text-base leading-10 font-regular
        transition-color duration-500 hover:text-lightGray2"
      >
        Resources
      </a>
    </Link>
    <Link href={'/'}>
      <a className="text-white text-base leading-10 font-regular
        transition-color duration-500 hover:text-lightGray2"
      >
        Pricing
      </a>
    </Link>
    <Link href={'/'}>
      <a className="text-white text-base leading-10 font-regular
        transition-color duration-500 hover:text-lightGray2"
      >
        Get Started
      </a>
    </Link>
  </div>
  )
}
