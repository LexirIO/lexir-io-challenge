import Link from 'next/link';

export default function Community() {
  return (
    <div className="flex flex-col ">
      <h3 className="text-lightGray2 text-base leading-10 font-regular">
        COMMUNITY
      </h3>
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
  )
}
