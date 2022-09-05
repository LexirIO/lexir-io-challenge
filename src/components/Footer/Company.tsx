import Link from 'next/link';

export default function Company() {
  return (
    <div className="flex flex-col ">
    <h3 className="text-lightGray2 text-base leading-10 font-regular">
      COMPANY
    </h3>
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
  )
}
